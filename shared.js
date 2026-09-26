/* Small shared enhancements. The HTML stays navigable when JavaScript is unavailable. */
(function () {
    'use strict';

    var readingKey = 'idav-reading-sans';

    function init() {
        var primaryNav = document.querySelector('body > nav');
        var page = window.location.pathname.split('/').pop() || 'index.html';
        var links = [
            ['index.html', 'Overview'],
            ['unit1.html', 'Unit I'],
            ['unit2.html', 'Unit II'],
            ['short-answers.html', '2-mark answers'],
            ['long-answers.html', '7-mark answers']
        ];

        if (primaryNav) {
            primaryNav.className = 'site-nav';
            primaryNav.setAttribute('aria-label', 'Primary navigation');
            primaryNav.replaceChildren();

            var brand = document.createElement('a');
            brand.className = 'site-brand';
            brand.href = 'index.html';
            brand.innerHTML = '<span class="brand-mark" aria-hidden="true">I</span><span>IDAV / Study guide</span>';
            primaryNav.appendChild(brand);

            var list = document.createElement('ul');
            list.className = 'site-links';
            links.forEach(function (item) {
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.href = item[0];
                a.textContent = item[1];
                if (item[0] === page) a.setAttribute('aria-current', 'page');
                li.appendChild(a);
                list.appendChild(li);
            });
            primaryNav.appendChild(list);

            var tools = document.createElement('div');
            tools.className = 'site-tools';
            var toggle = document.createElement('button');
            toggle.type = 'button';
            toggle.className = 'reading-toggle';
            tools.appendChild(toggle);
            primaryNav.appendChild(tools);

            var sans = false;
            try { sans = localStorage.getItem(readingKey) === 'true'; } catch (error) { /* Private browsing may block storage. */ }
            function setReadingMode(value) {
                document.body.classList.toggle('reading-sans', value);
                toggle.textContent = value ? 'Aa · Serif text' : 'Aa · Sans text';
                toggle.setAttribute('aria-label', value ? 'Switch to serif reading text' : 'Switch to sans-serif reading text');
                toggle.setAttribute('aria-pressed', String(value));
            }
            setReadingMode(sans);
            toggle.addEventListener('click', function () {
                sans = !sans;
                setReadingMode(sans);
                requestAnimationFrame(updateTables);
                try { localStorage.setItem(readingKey, String(sans)); } catch (error) { /* Preference still works for this page. */ }
            });
        }

        // Units I and II have HTML scroll containers even without JavaScript.
        // Wrap legacy tables too; only overflowing containers need keyboard stops.
        document.querySelectorAll('table').forEach(function (table) {
            if (table.parentElement.classList.contains('table-scroll')) return;
            var wrapper = document.createElement('div');
            wrapper.className = 'table-scroll';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });
        function updateTables() {
            document.querySelectorAll('.table-scroll').forEach(function (wrapper) {
                if (wrapper.scrollWidth <= wrapper.clientWidth + 1) {
                    wrapper.removeAttribute('tabindex');
                    wrapper.removeAttribute('role');
                    wrapper.removeAttribute('aria-label');
                    return;
                }
                var table = wrapper.querySelector('table');
                var context = table.closest('.qa-block');
                var heading = context && context.querySelector('.question-text');
                if (!heading) {
                    document.querySelectorAll('h2, h3, h4').forEach(function (candidate) {
                        if (candidate.compareDocumentPosition(table) & Node.DOCUMENT_POSITION_FOLLOWING) heading = candidate;
                    });
                }
                wrapper.tabIndex = 0;
                wrapper.setAttribute('role', 'region');
                wrapper.setAttribute('aria-label', 'Scrollable table: ' + (heading ? heading.textContent.trim() : 'data comparison'));
            });
        }
        requestAnimationFrame(updateTables);
        window.addEventListener('resize', updateTables);

        var top = document.createElement('button');
        top.type = 'button';
        top.id = 'back-to-top';
        top.textContent = '↑  Back to top';
        top.hidden = true;
        document.body.appendChild(top);
        top.addEventListener('click', function () { window.scrollTo(0, 0); });
        function updateTop() { top.hidden = window.scrollY < 650; }
        window.addEventListener('scroll', updateTop, { passive: true });
        updateTop();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
}());

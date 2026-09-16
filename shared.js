/**
 * IDAV Exam Guide — Shared Utilities
 * Font picker (10 curated fonts) + Back-to-top button
 * Injected into every page via <script src="shared.js"></script>
 */
(function () {
    'use strict';

    var FONTS = [
        { id: 'georgia',          name: 'Georgia (Default Serif)',  stack: 'Georgia, "Times New Roman", Times, serif' },
        { id: 'inter',            name: 'Inter (Clean Sans)',       stack: '"Inter", system-ui, -apple-system, sans-serif' },
        { id: 'playfair',         name: 'Playfair Display (Serif)', stack: '"Playfair Display", Georgia, serif' },
        { id: 'merriweather',     name: 'Merriweather (Book Serif)',stack: '"Merriweather", Georgia, serif' },
        { id: 'lora',             name: 'Lora (Editorial Serif)',   stack: '"Lora", Georgia, serif' },
        { id: 'outfit',           name: 'Outfit (Modern Sans)',     stack: '"Outfit", system-ui, -apple-system, sans-serif' },
        { id: 'source-serif',     name: 'Source Serif 4',           stack: '"Source Serif 4", Georgia, serif' },
        { id: 'roboto',           name: 'Roboto (Neo-Grotesque)',   stack: '"Roboto", system-ui, -apple-system, sans-serif' },
        { id: 'eb-garamond',      name: 'EB Garamond (Classic)',    stack: '"EB Garamond", Garamond, Georgia, serif' },
        { id: 'space-grotesk',    name: 'Space Grotesk (Tech)',     stack: '"Space Grotesk", system-ui, sans-serif' }
    ];

    var GF_URL = 'https://fonts.googleapis.com/css2?'
        + 'family=EB+Garamond:wght@400;700'
        + '&family=Inter:wght@400;600;700'
        + '&family=Lora:ital,wght@0,400;0,700;1,400'
        + '&family=Merriweather:wght@400;700'
        + '&family=Outfit:wght@400;600;700'
        + '&family=Playfair+Display:wght@400;700'
        + '&family=Roboto:wght@400;700'
        + '&family=Source+Serif+4:opsz,wght@8..60,400;8..60,700'
        + '&family=Space+Grotesk:wght@400;700'
        + '&display=swap';

    var STORAGE_KEY = 'idav-guide-font-id';

    function loadGoogleFonts() {
        if (document.getElementById('idav-gf-link')) return;
        var link = document.createElement('link');
        link.id = 'idav-gf-link';
        link.rel = 'stylesheet';
        link.href = GF_URL;
        document.head.appendChild(link);
    }

    function applyFontById(fontId) {
        var selected = null;
        for (var i = 0; i < FONTS.length; i++) {
            if (FONTS[i].id === fontId) {
                selected = FONTS[i];
                break;
            }
        }
        if (!selected) {
            // Check if fontId was an old raw stack
            for (var j = 0; j < FONTS.length; j++) {
                if (FONTS[j].stack === fontId) {
                    selected = FONTS[j];
                    break;
                }
            }
        }
        if (!selected) {
            selected = FONTS[0];
        }

        // 1. Set CSS variable on root
        document.documentElement.style.setProperty('--idav-font', selected.stack);

        // 2. Set inline style on body
        document.body.style.setProperty('font-family', selected.stack, 'important');

        // 3. Inject / update dedicated high-priority style tag
        var styleEl = document.getElementById('idav-dynamic-font');
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = 'idav-dynamic-font';
            document.head.appendChild(styleEl);
        }
        styleEl.textContent =
            'body, p, li, h1, h2, h3, h4, table, td, th, .answer-body, .question-text, .page-header h1, .page-header p {'
            + ' font-family: ' + selected.stack + ' !important;'
            + '}';

        try {
            localStorage.setItem(STORAGE_KEY, selected.id);
        } catch (ex) {}

        return selected;
    }

    function buildFontPicker(activeId) {
        if (document.getElementById('idav-font-picker')) return;

        var picker = document.createElement('div');
        picker.id = 'idav-font-picker';

        var btn = document.createElement('button');
        btn.id = 'idav-fp-btn';
        btn.title = 'Change reading font (10 choices)';
        btn.textContent = 'Aa Font';
        picker.appendChild(btn);

        var panel = document.createElement('div');
        panel.id = 'idav-fp-panel';

        var title = document.createElement('p');
        title.textContent = 'Choose Reading Font';
        panel.appendChild(title);

        var list = document.createElement('ul');

        FONTS.forEach(function (f, idx) {
            var li = document.createElement('li');
            li.setAttribute('data-font-id', f.id);
            li.setAttribute('data-index', String(idx));
            li.textContent = f.name;
            li.style.fontFamily = f.stack;
            if (f.id === activeId) {
                li.classList.add('ifp-active');
            }
            list.appendChild(li);
        });

        panel.appendChild(list);
        picker.appendChild(panel);
        document.body.appendChild(picker);

        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            panel.classList.toggle('ifp-open');
        });

        document.addEventListener('click', function () {
            panel.classList.remove('ifp-open');
        });

        panel.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        list.addEventListener('click', function (e) {
            var li = e.target.closest('li');
            if (!li) return;
            var fontId = li.getAttribute('data-font-id');
            var applied = applyFontById(fontId);

            list.querySelectorAll('li').forEach(function (el) {
                el.classList.remove('ifp-active');
            });
            li.classList.add('ifp-active');
            panel.classList.remove('ifp-open');
        });
    }

    function buildBackToTop() {
        if (document.getElementById('idav-btt')) return;
        var btn = document.createElement('a');
        btn.id = 'idav-btt';
        btn.href = '#';
        btn.title = 'Back to top of page';
        btn.textContent = 'Top';
        document.body.appendChild(btn);

        btn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo(0, 0);
        });
    }

    function init() {
        loadGoogleFonts();

        var savedId = '';
        try {
            savedId = localStorage.getItem(STORAGE_KEY) || '';
        } catch (ex) {}

        var activeFont = applyFontById(savedId || FONTS[0].id);
        buildFontPicker(activeFont.id);
        buildBackToTop();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}());

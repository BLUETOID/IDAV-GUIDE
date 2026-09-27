/* IDAV Exam Guide — Shared Navigation & Interactive Question Search */
(function () {
    'use strict';

    var readingKey = 'idav-reading-sans';

    var questionsData = [
        { id: 'q1', num: 1, unit: 1, marks: 2, text: 'Define data analytics and its importance.', type: 'short', page: 'short-answers.html' },
        { id: 'q2', num: 2, unit: 1, marks: 2, text: 'List any 5 Data Visualization tools and library.', type: 'short', page: 'short-answers.html' },
        { id: 'q3', num: 3, unit: 1, marks: 2, text: 'List key role required for successful analytic projects.', type: 'short', page: 'short-answers.html' },
        { id: 'q4', num: 4, unit: 1, marks: 2, text: 'Describe the role of a Big Data platform in data analytics.', type: 'short', page: 'short-answers.html' },
        { id: 'q5', num: 5, unit: 1, marks: 7, text: 'Describe the major phases of Data Analytics Lifecycle.', type: 'long', page: 'long-answers.html' },
        { id: 'q6', num: 6, unit: 1, marks: 2, text: 'Explain why Data Analytics is needed in modern organization.', type: 'short', page: 'short-answers.html' },
        { id: 'q7', num: 7, unit: 1, marks: 2, text: 'List any 4 sources of data used in data analytics.', type: 'short', page: 'short-answers.html' },
        { id: 'q8', num: 8, unit: 2, marks: 2, text: 'Write short notes of Fuzzy Logic.', type: 'short', page: 'short-answers.html' },
        { id: 'q9', num: 9, unit: 2, marks: 2, text: 'Explain the multivariate analysis, and why it is important in data analysis.', type: 'short', page: 'short-answers.html' },
        { id: 'q10', num: 10, unit: 2, marks: 2, text: 'Define Competitive learning in Neural Network.', type: 'short', page: 'short-answers.html' },
        { id: 'q11', num: 11, unit: 2, marks: 2, text: 'Explain Principal Component Analysis (PCA).', type: 'short', page: 'short-answers.html' },
        { id: 'q12', num: 12, unit: 2, marks: 2, text: 'Explain how Time Series Analysis can be used for analyzing time-dependent data.', type: 'short', page: 'short-answers.html' },
        { id: 'q13', num: 13, unit: 2, marks: 2, text: 'Explain Rule Induction? Give one example of rule generated from data.', type: 'short', page: 'short-answers.html' },
        { id: 'q14', num: 14, unit: 2, marks: 2, text: 'How can a Kernel function be applied in SVM to classify non-linearly separable data.', type: 'short', page: 'short-answers.html' },
        { id: 'q15', num: 15, unit: 2, marks: 2, text: 'Explain Stochastic Search? Mention one application of stochastic search methods in data analysis.', type: 'short', page: 'short-answers.html' },
        { id: 'q16', num: 16, unit: 2, marks: 2, text: 'Explain Bayesian Network? State its main components.', type: 'short', page: 'short-answers.html' },
        { id: 'q17', num: 17, unit: 2, marks: 2, text: 'Define Regression Analysis? Mention any two applications of regression in data analytics.', type: 'short', page: 'short-answers.html' },
        { id: 'q18', num: 18, unit: 1, marks: 7, text: 'Explain the need of data analytics in modern business. How has the need for data analytics evolved over time?', type: 'long', page: 'long-answers.html' },
        { id: 'q19', num: 19, unit: 1, marks: 7, text: 'Compare and contrast analysis and reporting in the context of data analytics. How do both play a role in decision-making processes?', type: 'long', page: 'long-answers.html' },
        { id: 'q20', num: 20, unit: 2, marks: 7, text: 'Explain Principal Component Analysis (PCA) and discuss its main steps with a simple example to illustrate how it works.', type: 'long', page: 'long-answers.html' },
        { id: 'q21', num: 21, unit: 1, marks: 7, text: 'Illustrate five differences between supervised and unsupervised learning in the context of data analytics with suitable example.', type: 'long', page: 'long-answers.html' },
        { id: 'q22', num: 22, unit: 2, marks: 7, text: 'Explain the regression models used in data analysis. Discuss its applications.', type: 'long', page: 'long-answers.html' },
        { id: 'q23', num: 23, unit: 1, marks: 7, text: 'Discuss the evolution of analytic scalability from traditional analytics to real-time analytics and predictive analytics.', type: 'long', page: 'long-answers.html' },
        { id: 'q24', num: 24, unit: 1, marks: 7, text: 'Discuss the classification of data. Explain all categories in detail with example.', type: 'long', page: 'long-answers.html' },
        { id: 'q25', num: 25, unit: 2, marks: 7, text: 'Explain Bayesian modeling and Bayesian networks in detail.', type: 'long', page: 'long-answers.html' },
        { id: 'q26', num: 26, unit: 2, marks: 7, text: 'Explain Linear systems analysis and nonlinear dynamics in time series analysis.', type: 'long', page: 'long-answers.html' },
        { id: 'q27', num: 27, unit: 2, marks: 7, text: 'Explain regression modeling and its applications in data analysis. Discuss how multivariate regression extends this approach with suitable examples.', type: 'long', page: 'long-answers.html' },
        { id: 'q28', num: 28, unit: 2, marks: 7, text: 'Evaluate the suitability of SVM and Neural Networks for data classification.', type: 'long', page: 'long-answers.html' },
        { id: 'q29', num: 29, unit: 2, marks: 7, text: 'Explain Kernel Method. List the commonly used Kernel functions in SVM.', type: 'long', page: 'long-answers.html' },
        { id: 'q30', num: 30, unit: 2, marks: 7, text: 'Define Rule Induction. Explain the basic concepts and types of rules used in rule induction.', type: 'long', page: 'long-answers.html' },
        { id: 'q31', num: 31, unit: 2, marks: 7, text: 'Define Neural Networks. List their major components and applications in data analysis.', type: 'long', page: 'long-answers.html' },
        { id: 'q32', num: 32, unit: 2, marks: 7, text: 'Define Univariate Analysis and Multivariate Analysis. List their major characteristics.', type: 'long', page: 'long-answers.html' },
        { id: 'q33', num: 33, unit: 2, marks: 7, text: 'Design a suitable data analysis approach for a dataset containing multiple variables and time-dependent observations. Select appropriate techniques from Regression, PCA, SVM, and Time Series Analysis, and justify your answer.', type: 'long', page: 'long-answers.html' },
        { id: 'q34', num: 34, unit: 1, marks: 7, text: 'Explain the sources and nature of data and classify them with suitable examples.', type: 'long', page: 'long-answers.html' },
        { id: 'q35', num: 35, unit: 1, marks: 7, text: 'Compare analysis and reporting. In business decision-making how does predictive analytics provide more value than descriptive reporting.', type: 'long', page: 'long-answers.html' },
        { id: 'q36', num: 36, unit: 1, marks: 7, text: 'Discuss the key characteristics of Big Data (5Vs). Explain the need for big data platforms and briefly describe some commonly used platforms.', type: 'long', page: 'long-answers.html' },
        { id: 'q37', num: 37, unit: 1, marks: 7, text: 'Explain the concept of big data and discuss the challenges associated with managing Big Data. How do characteristics like Volume, Velocity, Variety, and Veracity impact data analysis.', type: 'long', page: 'long-answers.html' },
        { id: 'q38', num: 38, unit: 1, marks: 7, text: 'Explain the phases of the Data Analytics life cycle in detail.', type: 'long', page: 'long-answers.html' },
        { id: 'q39', num: 39, unit: 2, marks: 7, text: 'Explain Support Vector Machine (SVM) and Kernel methods. Compare Linear and nonlinear kernels with examples and explain how SVM handles nonlinear decision boundaries.', type: 'long', page: 'long-answers.html' },
        { id: 'q40', num: 40, unit: 2, marks: 7, text: 'Explain Neural Networks in detail. Discuss learning, generalization, and competitive learning with real-life examples.', type: 'long', page: 'long-answers.html' },
        { id: 'q41', num: 41, unit: 1, marks: 7, text: 'Analyse the Hadoop architecture in detail. Explain the functions and interaction of HDFS, YARN, and MapReduce with a suitable architecture diagram.', type: 'long', page: 'long-answers.html' },
        { id: 'q42', num: 42, unit: 1, marks: 7, text: 'Explain how data analytics is used in real-world applications such as healthcare, banking, e-commerce, education, and transportation.', type: 'long', page: 'long-answers.html' },
        { id: 'q43', num: 43, unit: 1, marks: 7, text: 'A company has collected large volumes of sales data from different sources. Apply the analytics process and suitable tools to transform the raw data into meaningful insights.', type: 'long', page: 'long-answers.html' },
        { id: 'q44', num: 44, unit: 1, marks: 7, text: 'Why is the Discovery phase crucial in the Data Analytics Lifecycle? Explain the role of Communicating Results and Operationalization in driving business value.', type: 'long', page: 'long-answers.html' },
        { id: 'q45', num: 45, unit: 2, marks: 2, text: 'Differentiate between stochastic search methods and deterministic optimization techniques.', type: 'short', page: 'short-answers.html' },
        { id: 'q46', num: 46, unit: 2, marks: 7, text: 'Explain learning and generalisation in neural networks. Discuss overfitting, underfitting, and the factors affecting generalisation.', type: 'long', page: 'long-answers.html' },
        { id: 'q47', num: 47, unit: 2, marks: 7, text: 'Discuss the relationship between Principal Component Analysis (PCA) and Neural Networks. Explain how Linear Autoencoders and Generalized Hebbian Learning achieve PCA.', type: 'long', page: 'long-answers.html' },
        { id: 'q48', num: 48, unit: 2, marks: 7, text: 'Explain the different components of a Fuzzy Inference System (FIS). Describe the step-by-step working of an inference engine with a suitable example.', type: 'long', page: 'long-answers.html' },
        { id: 'q49', num: 49, unit: 2, marks: 7, text: 'Analyse the process of extracting fuzzy models from data. Differentiate between conventional decision trees and fuzzy decision trees.', type: 'long', page: 'long-answers.html' },
        { id: 'q50', num: 50, unit: 2, marks: 7, text: 'Discuss the three learning paradigms in neural networks: Supervised, Unsupervised (Competitive Learning), and Reinforcement Learning with real-life examples.', type: 'long', page: 'long-answers.html' }
    ];

    function init() {
        var primaryNav = document.querySelector('body > nav');
        var page = window.location.pathname.split('/').pop() || 'index.html';
        
        // Navigation prioritizing Units I & II for ST-1
        var links = [
            ['index.html', 'Overview (ST-1)'],
            ['unit1.html', 'Unit I · Foundations'],
            ['unit2.html', 'Unit II · Methods'],
            ['short-answers.html', 'Short Answers (2M)'],
            ['long-answers.html', 'Long Answers (7M)']
        ];

        if (primaryNav) {
            primaryNav.className = 'site-nav';
            primaryNav.setAttribute('aria-label', 'Primary navigation');
            primaryNav.replaceChildren();

            var brand = document.createElement('a');
            brand.className = 'site-brand';
            brand.href = 'index.html';
            brand.innerHTML = '<span class="brand-mark" aria-hidden="true">I</span><span>IDAV · ST-1 Exam Guide</span>';
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

            // Units III-V reference dropdown
            var extraLi = document.createElement('li');
            extraLi.className = 'nav-details-wrap';
            extraLi.innerHTML = '<details class="nav-details"><summary>Units III–V</summary><div class="nav-dropdown-menu"><a href="unit3.html">Unit III: Streams</a><a href="unit4.html">Unit IV: Itemsets</a><a href="unit5.html">Unit V: Visualization</a></div></details>';
            list.appendChild(extraLi);

            primaryNav.appendChild(list);

            var tools = document.createElement('div');
            tools.className = 'site-tools';
            
            // Search Modal Trigger Button
            var searchBtn = document.createElement('button');
            searchBtn.type = 'button';
            searchBtn.className = 'q-search-trigger';
            searchBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="vertical-align:middle;margin-right:5px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>Find Question <kbd style="font-size:0.7em;opacity:0.8;">/</kbd>';
            searchBtn.title = 'Search all 50 questions (Press / or Ctrl+K)';
            searchBtn.addEventListener('click', openSearchModal);
            tools.appendChild(searchBtn);

            // Font toggle
            var toggle = document.createElement('button');
            toggle.type = 'button';
            toggle.className = 'reading-toggle';
            tools.appendChild(toggle);
            primaryNav.appendChild(tools);

            var sans = false;
            try { sans = localStorage.getItem(readingKey) === 'true'; } catch (error) { /* Private browsing */ }
            function setReadingMode(value) {
                document.body.classList.toggle('reading-sans', value);
                toggle.textContent = value ? 'Aa · Serif' : 'Aa · Sans';
                toggle.setAttribute('aria-label', value ? 'Switch to serif reading text' : 'Switch to sans-serif reading text');
                toggle.setAttribute('aria-pressed', String(value));
            }
            setReadingMode(sans);
            toggle.addEventListener('click', function () {
                sans = !sans;
                setReadingMode(sans);
                requestAnimationFrame(updateTables);
                try { localStorage.setItem(readingKey, String(sans)); } catch (error) { }
            });
        }

        // Global Keyboard Shortcut for Search (Press / or Ctrl+K, or ESC to dismiss)
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                if (modalOverlay && !modalOverlay.hidden && modalOverlay.style.display !== 'none') {
                    e.preventDefault();
                    closeSearchModal();
                }
            } else if ((e.key === '/' || (e.ctrlKey && e.key.toLowerCase() === 'k')) && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                e.preventDefault();
                openSearchModal();
            }
        });

        // Initialize Home-page interactive question search if on index.html
        initHomePageSearch();

        // Responsive Table wrapper
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

        // Back to top button
        var top = document.createElement('button');
        top.type = 'button';
        top.id = 'back-to-top';
        top.textContent = '↑  Back to top';
        top.hidden = true;
        document.body.appendChild(top);
        top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
        function updateTop() { top.hidden = window.scrollY < 650; }
        window.addEventListener('scroll', updateTop, { passive: true });
        updateTop();
    }

    // Modal Search Component
    var modalOverlay = null;
    function openSearchModal() {
        if (!modalOverlay) {
            modalOverlay = document.createElement('div');
            modalOverlay.className = 'q-modal-overlay';
            modalOverlay.innerHTML = [
                '<div class="q-modal-content" role="dialog" aria-modal="true" aria-label="Search Question Bank">',
                '  <div class="q-modal-header">',
                '    <span class="q-modal-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>',
                '    <input type="text" class="q-modal-input" placeholder="Search any question, topic, or keyword (e.g. PCA, 5Vs, kernel, regression)..." autofocus>',
                '    <button type="button" class="q-modal-close" aria-label="Close dialog">&times;</button>',
                '  </div>',
                '  <div class="q-modal-results"></div>',
                '  <div class="q-modal-hint">',
                '    <span>Showing all 50 ST-1 Questions (CO1 &amp; CO2)</span>',
                '    <span>Press ESC to close</span>',
                '  </div>',
                '</div>'
            ].join('');

            document.body.appendChild(modalOverlay);

            var closeBtn = modalOverlay.querySelector('.q-modal-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    closeSearchModal();
                });
            }
            modalOverlay.addEventListener('click', function (e) {
                if (e.target === modalOverlay) {
                    e.preventDefault();
                    closeSearchModal();
                }
            });

            var input = modalOverlay.querySelector('.q-modal-input');
            input.addEventListener('input', function () {
                renderModalResults(input.value.trim().toLowerCase());
            });
        }

        modalOverlay.hidden = false;
        modalOverlay.style.display = 'flex';
        var inp = modalOverlay.querySelector('.q-modal-input');
        inp.value = '';
        renderModalResults('');
        setTimeout(function () { inp.focus(); }, 50);
    }

    function closeSearchModal() {
        if (modalOverlay) {
            modalOverlay.hidden = true;
            modalOverlay.style.display = 'none';
        }
    }

    function renderModalResults(query) {
        if (!modalOverlay) return;
        var container = modalOverlay.querySelector('.q-modal-results');
        container.replaceChildren();

        var filtered = questionsData.filter(function (q) {
            if (!query) return true;
            return ('q' + q.num).includes(query) ||
                   ('unit ' + q.unit).includes(query) ||
                   (q.marks + ' marks').includes(query) ||
                   q.text.toLowerCase().includes(query);
        });

        if (filtered.length === 0) {
            var empty = document.createElement('div');
            empty.className = 'q-empty-msg';
            empty.textContent = 'No questions match "' + query + '". Try terms like PCA, regression, lifecycle, SVM, or 5Vs.';
            container.appendChild(empty);
            return;
        }

        filtered.forEach(function (q) {
            var a = document.createElement('a');
            a.href = q.page + '#' + q.id;
            a.addEventListener('click', closeSearchModal);

            var topRow = document.createElement('div');
            topRow.className = 'q-card-top';

            var qid = document.createElement('span');
            qid.className = 'q-card-id';
            qid.textContent = 'Question ' + q.num;
            topRow.appendChild(qid);

            var badges = document.createElement('div');
            badges.className = 'q-badges';
            badges.innerHTML = '<span class="q-badge ' + (q.unit === 1 ? 'q-badge-u1' : 'q-badge-u2') + '">Unit ' + (q.unit === 1 ? 'I' : 'II') + '</span>' +
                               '<span class="q-badge ' + (q.marks === 2 ? 'q-badge-2m' : 'q-badge-7m') + '">' + q.marks + ' Marks</span>';
            topRow.appendChild(badges);

            var txt = document.createElement('p');
            txt.className = 'q-card-text';
            txt.textContent = q.text;

            a.appendChild(topRow);
            a.appendChild(txt);
            container.appendChild(a);
        });
    }

    // Interactive Search on Index Page
    function initHomePageSearch() {
        var grid = document.getElementById('home-questions-grid');
        var input = document.getElementById('home-questions-input');
        if (!grid || !input) return;

        var activeFilter = 'all';

        function updateGrid() {
            var query = input.value.trim().toLowerCase();
            grid.replaceChildren();

            var filtered = questionsData.filter(function (q) {
                // Category filter
                if (activeFilter === 'unit1' && q.unit !== 1) return false;
                if (activeFilter === 'unit2' && q.unit !== 2) return false;
                if (activeFilter === '2m' && q.marks !== 2) return false;
                if (activeFilter === '7m' && q.marks !== 7) return false;

                // Query filter
                if (!query) return true;
                return ('q' + q.num).includes(query) ||
                       ('unit ' + q.unit).includes(query) ||
                       q.text.toLowerCase().includes(query);
            });

            var countEl = document.getElementById('q-filter-count');
            if (countEl) countEl.textContent = filtered.length + ' of 50 questions';

            if (filtered.length === 0) {
                var empty = document.createElement('div');
                empty.className = 'q-empty-msg';
                empty.textContent = 'No questions match the current filter and search.';
                grid.appendChild(empty);
                return;
            }

            filtered.forEach(function (q) {
                var card = document.createElement('a');
                card.className = 'q-card-item';
                card.href = q.page + '#' + q.id;

                var topRow = document.createElement('div');
                topRow.className = 'q-card-top';

                var qid = document.createElement('span');
                qid.className = 'q-card-id';
                qid.textContent = 'Q' + q.num;
                topRow.appendChild(qid);

                var badges = document.createElement('div');
                badges.className = 'q-badges';
                badges.innerHTML = '<span class="q-badge ' + (q.unit === 1 ? 'q-badge-u1' : 'q-badge-u2') + '">Unit ' + (q.unit === 1 ? 'I' : 'II') + '</span>' +
                                   '<span class="q-badge ' + (q.marks === 2 ? 'q-badge-2m' : 'q-badge-7m') + '">' + q.marks + 'M</span>';
                topRow.appendChild(badges);

                var txt = document.createElement('p');
                txt.className = 'q-card-text';
                txt.textContent = q.text;

                card.appendChild(topRow);
                card.appendChild(txt);
                grid.appendChild(card);
            });
        }

        input.addEventListener('input', updateGrid);

        var chips = document.querySelectorAll('.q-filter-chips .filter-chip');
        chips.forEach(function (chip) {
            chip.addEventListener('click', function () {
                chips.forEach(function (c) { c.classList.remove('active'); });
                chip.classList.add('active');
                activeFilter = chip.getAttribute('data-filter') || 'all';
                updateGrid();
            });
        });

        updateGrid();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
}());

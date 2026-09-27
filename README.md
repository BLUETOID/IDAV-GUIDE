# IDAV ST-1 Exam Guide (Units I & II Focus)

> An exhaustive, exam-focused study and revision guide for **Introduction to Data Analytics & Visualization (IDAV)**, centered strictly on the **ST-1 syllabus (CO1 & CO2)** and the complete **40-question question bank**.

Built with clean HTML5, CSS3, and Vanilla JavaScript—no heavy frameworks, zero external runtime dependencies, 100% offline-ready, responsive, and print-friendly.

---

## Table of Contents

- [Overview & ST-1 Exam Scope](#overview--st-1-exam-scope)
- [Course Syllabus Structure](#course-syllabus-structure)
- [Official ST-1 Question Bank Coverage](#official-st-1-question-bank-coverage)
- [Key Features & New Additions](#key-features--new-additions)
- [Interactive Question Search Engine](#interactive-question-search-engine)
- [Quick Start](#quick-start)
- [Repository File Structure](#repository-file-structure)

---

## Overview & ST-1 Exam Scope

This build of the IDAV Guide is **strictly focused on Units I and II** (Course Outcomes CO1 and CO2):
1. **Unit I: Introduction to Data Analytics & Lifecycle** (08 Lectures · 12 Topics)
2. **Unit II: Data Analysis & Statistical Methods** (08 Lectures · 11 Topics)

All **40 questions** from the official ST-1 Question Bank are fully answered, verified, and cross-referenced with exact numbering (`#q1` to `#q40`):
- **16 Short Answer Questions (2 Marks):** Q1–Q4, Q6–Q17.
- **24 Long Answer Questions (7 Marks):** Q5, Q18–Q40.

*(Note: Reference pages for Units III–V are retained in the codebase for post-ST-1 revision, while the primary site navigation, overview portal, and question bank are dedicated to Units I & II).*

---

## Course Syllabus Structure

### Unit I: Introduction to Data Analytics & Lifecycle (CO1)
- **1. Data Analytics Overview:** Definitions, business importance, 4 types of analytics (Descriptive, Diagnostic, Predictive, Prescriptive), the analytics value chain, industry applications.
- **2. Machine Learning Paradigms:** Supervised (classification vs regression) vs. Unsupervised (clustering, PCA, association rules) learning comparison table (answering **Q21**), semi-supervised, and reinforcement learning.
- **3. Sources and Nature of Data:** Internal, external, machine-generated (IoT), and human-generated (social/clickstream) sources, primary vs secondary collection, sampling pitfalls.
- **4. Classification of Data:** Classification by structure (structured, semi-structured, unstructured) and Stevens' 4 measurement scales (Nominal, Ordinal, Interval, Ratio).
- **5. Characteristics of Data:** Six data quality dimensions (Accuracy, Completeness, Consistency, Timeliness, Validity, Uniqueness), DQM, and FAIR data principles.
- **6. Big Data Platform & Architecture:** Scale-up vs scale-out, Hadoop ecosystem (HDFS, MapReduce, YARN), Apache Spark, Kafka, BigQuery, Lambda vs Kappa architecture.
- **7. The 5Vs of Big Data & Challenges:** Scale (Volume), Speed (Velocity), Diversity (Variety), Trust (Veracity), and Return (Value). 6 core Big Data management challenges and their direct analytical impacts (answering **Q36, Q37**).
- **8. Evolution of Analytic Scalability:** Analytics maturity model, historical evolution from manual spreadsheets and EDW to distributed Spark and cloud lakehouses.
- **9. Analysis vs. Reporting:** Core differences, push vs pull paradigm, Business Intelligence (BI) vs Business Analytics (BA), impact on decision-making.
- **10. The End-to-End Analytic Process Pipeline:** 8-stage operational pipeline (Ingestion → Preprocessing → EDA → Feature Engineering → Modeling → Validation → Deployment → Monitoring) with SVG flowchart.
- **11. Modern Analytic Tools & Visualization Libraries:** Comprehensive tool categories, plus deep dive into the **Top 5 Data Visualization Tools and Libraries** (Tableau, Power BI, Matplotlib, Seaborn, D3.js, Plotly) (answering **Q2**).
- **12. Data Analytics Lifecycle:** 6 iterative phases (Discovery, Data Prep, Model Planning, Model Building, Communicating Results, Operationalization) with SVG cycle diagram and credit scoring case study (answering **Q5, Q38**).
- **13. Key Project Roles & Governance:** Core competencies of Business User, Project Sponsor, Project Manager, BI Analyst, Data Engineer, Data Scientist, DBA, and RACI governance matrix (answering **Q3**).

### Unit II: Data Analysis & Methods (CO2)
- **1. Regression Modeling:** Simple and multiple linear regression, Ordinary Least Squares (OLS) derivation, Gauss-Markov theorem (BLUE), $R^2$, adjusted $R^2$, multicollinearity (VIF), polynomial regression, logistic regression.
- **2. Multivariate Analysis:** Comprehensive definition and 7-row comparison table of Univariate, Bivariate, and Multivariate Analysis (answering **Q9, Q32**), correlation and covariance matrices, Simpson's paradox.
- **3. Bayesian Modeling & Networks:** Bayes' theorem derivation (Prior, Likelihood, Posterior, Evidence), Naive Bayes classifier, Directed Acyclic Graph (DAG) structures, Conditional Probability Tables (CPTs), d-separation, exact and approximate inference (answering **Q16, Q25**).
- **4. Support Vector Machines & Kernel Methods:** Maximum margin hyperplane, support vectors, hard vs soft margin, slack variables, the kernel trick, Mercer's condition, linear vs nonlinear kernels comparison table, and non-linear boundary separation in 3D (answering **Q14, Q29, Q39**).
- **5. Time Series Analysis:** Trend, seasonality, cyclical, and noise decomposition, additive vs multiplicative models, strict vs weak stationarity, Augmented Dickey-Fuller (ADF) test, ACF/PACF, ARIMA modeling, deterministic chaos, Lyapunov exponents, and Takens' delay embedding (answering **Q12, Q26**).
- **6. Rule Induction:** IF-THEN rules, sequential covering (separate-and-conquer), coverage and accuracy/confidence metrics, Laplace estimator, PRISM and RIPPER algorithms (answering **Q13, Q30**).
- **7. Neural Networks:** Artificial neuron (Perceptron), Multi-Layer Perceptrons (MLP), activation functions (Sigmoid, Tanh, ReLU, Softmax), forward pass and backpropagation via chain rule, generalization techniques (dropout, weight decay, early stopping), competitive learning (winner-take-all, Kohonen SOM), and **SVM vs. Neural Networks Comparative Evaluation** (answering **Q10, Q28, Q31, Q40**).
- **8. Principal Component Analysis (PCA):** Eigendecomposition of covariance matrix, variance explained ratio, scree plot and Kaiser criterion, worked numerical example, and the equivalence between PCA and linear autoencoders (answering **Q11, Q20**).
- **9. Fuzzy Logic:** Crisp vs fuzzy sets, membership functions (triangular, trapezoidal, Gaussian), 4-stage Fuzzy Inference System (Fuzzification, Mamdani/Sugeno rule evaluation, aggregation, centroid defuzzification), Wang-Mendel data extraction, Fuzzy Decision Trees, and ANFIS (answering **Q8**).
- **10. Stochastic Search Methods:** No Free Lunch theorem, exploration vs exploitation, Genetic Algorithms (selection, crossover, mutation), Simulated Annealing (Metropolis criterion, cooling schedules), Particle Swarm Optimization (PSO velocity update), applications in feature selection (answering **Q15**).
- **11. Integrated Analytical Architecture:** 4-stage pipeline combining Time Series Analysis (ARIMA), PCA, Regression, and RBF Support Vector Machines for complex multi-variable, longitudinal datasets with complete justification matrix (answering **Q33**).

---

## Official ST-1 Question Bank Coverage

All questions retain their exact numbers from `questions.md`:

| Unit | Short Answers (2 Marks) | Long Answers (7 Marks) | Total Questions |
| :--- | :--- | :--- | :--- |
| **Unit I (CO1)** | Q1, Q2, Q3, Q4, Q6, Q7 *(6)* | Q5, Q18, Q19, Q21, Q23, Q24, Q34, Q35, Q36, Q37, Q38 *(11)* | **17 Questions** |
| **Unit II (CO2)** | Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17 *(10)* | Q20, Q22, Q25, Q26, Q27, Q28, Q29, Q30, Q31, Q32, Q33, Q39, Q40 *(13)* | **23 Questions** |
| **Total** | **16 Short Answers** | **24 Long Answers** | **40 Questions** |

---

## Key Features & New Additions

- **Interactive Question Search & Filter Engine:** Live keyword search on `index.html` plus global keyboard search (`/` or `Ctrl+K`) that searches across all 40 questions in real-time.
- **Filter Chips:** Instant filtering by Unit (All, Unit I, Unit II) and Mark Weight (2-Mark Short, 7-Mark Long).
- **High-Resolution Scalable SVG Diagrams:**
  - Figure 1: Analytics Value Chain & Feedback Loop
  - Figure 2: Big Data 5Vs Pentagon
  - Figure 3: End-to-End Analytic Process Pipeline
  - Figure 4: Six-Phase Data Analytics Lifecycle
  - Figure 5: Support Vector Machine (SVM) Maximum Margin & Support Vectors
  - Figure 6: Multilayer Perceptron (MLP) Forward Pass & Backpropagation
  - Figure 7: Competitive Learning Winner-Take-All Prototype Shift
  - Figure 8: PCA 2D Orthogonal Rotation & Projections
  - Figure 9: Integrated Multi-Variable Longitudinal Pipeline Architecture (Q33)
- **Typography & Theme Controls:** Serif / Sans-serif reading mode toggle with `localStorage` persistence and smooth back-to-top scrolling.
- **Responsive & Accessible:** Keyboard-friendly table scrolling (`tabindex="0"`), clear focus rings, dark/light contrast compliance, and printer-friendly styling.

---

## Quick Start

No build tools, bundlers, or Node.js required. Open directly in any modern browser:

### Option 1: Direct File Opening
Open `index.html` directly in Chrome, Firefox, Safari, or Edge.

### Option 2: Local Python Server (Recommended)
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000/` in your browser.

---

## Repository File Structure

```
.
├── index.html          # ST-1 Exam Master Portal with live 40-question search
├── unit1.html          # Unit I: Introduction, Pipeline, Tools & Lifecycle (12 topics)
├── unit2.html          # Unit II: Data Analysis & Statistical Methods (11 topics)
├── short-answers.html  # 2-Mark Short Answers: Q1–4, Q6–17 (16 answers)
├── long-answers.html   # 7-Mark Long Answers: Q5, Q18–40 (24 answers)
├── shared.js           # Shared navigation, global search modal, live filters, tables
├── style.css           # Design system, responsive grids, search UI, print styles
├── syllabus.md         # Exhaustive official syllabus breakdown for Units I & II
├── questions.md        # Official 40-question ST-1 Question Bank (CO1 & CO2)
├── README.md           # Project documentation
├── unit3.html          # (Reference) Unit III: Mining Data Streams
├── unit4.html          # (Reference) Unit IV: Frequent Itemsets & Clustering
└── unit5.html          # (Reference) Unit V: Data Visualization
```

# Introduction to Data Analytics & Visualization (IDAV)
## Official Course Syllabus & Detailed Lecture Breakdown

> **Primary Focus for ST-1 Exam (CO1 & CO2):** Unit I and Unit II.
> **Reference Textbooks:**
> 1. Michael Berthold, David J. Hand, *Intelligent Data Analysis: An Introduction*, Springer, 2nd Edition.
> 2. EMC Education Services, *Data Science and Big Data Analytics: Discovering, Analyzing, Visualizing and Presenting Data*, Wiley.
> 3. Anand Rajaraman, Jeffrey David Ullman, *Mining of Massive Datasets*, Cambridge University Press.

---

## Unit I: Introduction to Data Analytics & Lifecycle (08 Lectures)

### 1.1 Introduction to Data Analytics
- **Definition & Core Philosophy:** What is Data Analytics? Transforming raw data into actionable business intelligence and scientific insight.
- **Need & Importance of Data Analytics:** Driving business value, evidence-based decision-making vs. intuition-driven decisions, risk mitigation, operational efficiency, personalization.
- **The Analytics Value Chain (Four Types of Analytics):**
  - *Descriptive Analytics:* What happened? (Historical aggregation, summary reporting).
  - *Diagnostic Analytics:* Why did it happen? (Root-cause analysis, drill-down, correlation).
  - *Predictive Analytics:* What is likely to happen? (Statistical forecasting, machine learning models).
  - *Prescriptive Analytics:* What should we do about it? (Optimization, simulation, decision recommendation).
- **Machine Learning & Learning Paradigms in Data Analytics:**
  - *Supervised Learning:* Labeled datasets, target prediction, classification vs. regression, evaluation metrics.
  - *Unsupervised Learning:* Unlabeled data, pattern discovery, clustering, dimensionality reduction, association rule mining.
  - *Semi-Supervised & Reinforcement Learning:* Small labeled seeds, agent-reward optimization loops.
- **Applications of Data Analytics:** Real-world use cases across Banking & Financial Services (fraud detection, credit scoring), Healthcare (diagnostic prediction, patient monitoring), Retail & E-Commerce (recommender systems, churn prediction), Supply Chain, and Smart Manufacturing.

### 1.2 Sources and Nature of Data
- **Sources of Data:**
  - *Internal Sources:* Enterprise databases (OLTP/ERP/CRM), sales transactions, accounting ledgers.
  - *External Sources:* Open government data, third-party APIs, syndicate market research, public data repositories.
  - *Machine-Generated & IoT Sources:* Sensor feeds, telemetry logs, RFID, GPS tracking, smart meters.
  - *Human-Generated & Social Sources:* Social media interactions, customer reviews, clickstream data, survey responses.
- **Nature and Characteristics of Data:**
  - Volatility, velocity, veracity, dimensionality, density, and sparsity.
  - Primary vs. Secondary data collection.
  - Data collection bottlenecks and common pitfalls (sampling bias, missing observations, measurement error).

### 1.3 Classification of Data
- **Classification by Structure:**
  - *Structured Data:* Highly organized, conforms to tabular relational schemas (RDBMS, SQL tables, CSV), explicit datatypes.
  - *Semi-Structured Data:* Self-describing schema, hierarchical key-value or tag-based organization (JSON, XML, YAML, NoSQL document stores).
  - *Unstructured Data:* No predefined data model or organizational schema (natural language text, audio files, images, video feeds, PDFs) — represents ~80% of enterprise data.
- **Classification by Measurement Scale (Stevens' 4 Measurement Scales):**
  - *Nominal Scale:* Qualitative categories with no intrinsic order (gender, blood group, zip code). Permissible statistics: Mode, frequency count.
  - *Ordinal Scale:* Categorical data with meaningful rank/order but unequal intervals (survey ratings, education level, pain scale). Permissible statistics: Median, percentiles, rank correlation.
  - *Interval Scale:* Quantitative scale with equal intervals but no true zero point (temperature in Celsius/Fahrenheit, calendar years). Permissible statistics: Mean, standard deviation, t-tests.
  - *Ratio Scale:* Quantitative scale with equal intervals and an absolute, meaningful zero point (height, weight, salary, transaction amount). Permissible statistics: All mathematical operations (geometric mean, coefficient of variation).
- **Additional Classifications:** Qualitative (Categorical) vs. Quantitative (Numerical); Discrete vs. Continuous; Cross-Sectional vs. Time-Series vs. Panel Data.

### 1.4 Characteristics of Data & Data Quality Dimensions
- **The Six Core Dimensions of Data Quality:**
  1. *Accuracy:* Closeness of recorded data to real-world ground truth.
  2. *Completeness:* Proportion of stored data compared to potential 100% complete records (null value management).
  3. *Consistency:* Non-contradiction of data across disparate databases and tables.
  4. *Timeliness / Currency:* Extent to which data is up-to-date and available when needed for decisions.
  5. *Validity / Conformity:* Adherence of data values to prescribed business rules, formats, and domain constraints.
  6. *Uniqueness:* Absence of duplicate records or redundant entities.
- **Data Quality Management (DQM) & Governance:** Data profiling, automated validation pipelines, deduplication, imputation techniques, FAIR data principles (Findable, Accessible, Interoperable, Reusable).

### 1.5 Big Data Foundations & The 5Vs
- **Concept of Big Data:** Datasets whose scale, diversity, and streaming frequency exceed the storage, networking, and processing capabilities of conventional relational systems.
- **The Core 5Vs of Big Data:**
  1. *Volume:* Massive scale of data generation (terabytes to petabytes and exabytes).
  2. *Velocity:* High arrival rate requiring real-time or low-latency ingestion and stream processing.
  3. *Variety:* Heterogeneity of incoming formats (structured tables, semi-structured logs, unstructured multimedia).
  4. *Veracity:* Uncertainty, noise, biases, and inconsistencies requiring rigorous cleaning and verification.
  5. *Value:* Extracting actionable ROI, decision support, and competitive advantage from the raw data.
- **Extended Vs:** *Variability* (shifting data trends and context), *Validity* (fitness for purpose), *Volatility* (data retention policies).
- **Big Data Management Challenges & Analytical Impacts:**
  - Distributed storage limits, network bandwidth constraints, schema evolution, fault tolerance, data governance, security & privacy (GDPR, HIPAA).

### 1.6 Introduction to Big Data Platforms
- **Role & Need for Big Data Platforms:** Horizontal scaling (scale-out across commodity clusters) vs. vertical scaling (scale-up single servers); distributed fault tolerance.
- **Hadoop Ecosystem:**
  - *HDFS (Hadoop Distributed File System):* Master-slave architecture (NameNode, DataNodes), data block replication, rack awareness.
  - *MapReduce:* Distributed batch parallel execution engine (Map, Shuffle & Sort, Reduce).
  - *YARN (Yet Another Resource Negotiator):* Cluster resource management and task scheduling.
- **Modern Distributed Engines & Cloud Platforms:**
  - *Apache Spark:* In-memory distributed computing, Resilient Distributed Datasets (RDDs), Spark DataFrames, Spark SQL, MLlib.
  - *Apache Kafka:* High-throughput distributed publish-subscribe event streaming and durable log storage.
  - *Cloud Data Warehouses & Query Engines:* Google BigQuery (columnar serverless), Snowflake, Amazon Redshift, Apache Hive.
- **Architectural Paradigms:** *Lambda Architecture* (dual batch and speed layers) vs. *Kappa Architecture* (single unified streaming log).

### 1.7 Evolution of Analytic Scalability
- **Historical Evolution:**
  - *Phase 1 (1970s–1980s):* Manual spreadsheets, centralized mainframe reporting, isolated flat files.
  - *Phase 2 (1990s):* Relational Database Management Systems (RDBMS), Enterprise Data Warehouses (EDW), Star/Snowflake schemas, Online Analytical Processing (OLAP) cubes.
  - *Phase 3 (2000s):* Business Intelligence (BI) dashboards, data mining, statistical packages (SAS, SPSS, early R), scale-up symmetric multiprocessing (SMP).
  - *Phase 4 (2010s):* Big Data revolution, Massively Parallel Processing (MPP), Hadoop/MapReduce, distributed in-memory computing (Spark), scale-out architecture.
  - *Phase 5 (2020s–Present):* Real-time streaming analytics, cloud-native serverless lakehouses, edge analytics, integrated ML pipelines (MLOps).
- **Scale-Up (Vertical) vs. Scale-Out (Horizontal) Scalability:** Cost curves, hardware limitations, elasticity, and fault resilience.

### 1.8 Analysis vs. Reporting
- **Core Differences:**
  - *Reporting:* Translation of raw data into informational summaries; focuses on *what happened*; standard formatted tables/dashboards; reactive; pushes data to users.
  - *Analysis:* Exploration of data to uncover underlying drivers and relationships; focuses on *why did it happen* and *what will happen*; exploratory, hypothesis-driven, interactive; pulls insights from data.
- **Business Intelligence (BI) vs. Business Analytics (BA):**
  - BI focuses on descriptive monitoring and operational KPIs.
  - BA focuses on predictive exploration, statistical optimization, and prescriptive strategy.
- **Impact on Decision-Making:** How predictive analytics shifts decision-making from retrospective post-mortems to proactive, automated, real-time intervention.

### 1.9 Modern Data Analytic Tools & Visualization Libraries
- **Programming Languages & Data Science Ecosystems:**
  - *Python Ecosystem:* NumPy (vectorized numerical computing), Pandas (data manipulation & series/dataframes), Scikit-learn (machine learning models), SciPy (scientific algorithms).
  - *R Language:* Built for statistical computing, CRAN ecosystem, dplyr, tidyr, ggplot2.
- **Data Visualization Tools and Libraries:**
  - *Code-Based Libraries:* Matplotlib (foundation 2D plotting), Seaborn (statistical styling & distribution plots), Plotly (declarative interactive HTML5 charts), D3.js (custom data-driven browser graphics using SVG/Canvas).
  - *Enterprise BI Tools:* Tableau (drag-and-drop visual analytics, dashboard publishing), Microsoft Power BI (Power Query, DAX formulas, Microsoft 365 integration), Looker, Qlik Sense.
- **ETL, Orchestration, and MLOps Platforms:** Apache Airflow, dbt (data build tool), MLflow, DVC, Kubeflow.

### 1.10 End-to-End Analytic Process Workflow
- **The Systematic Analytics Pipeline:**
  1. *Business Problem Formulation:* Frame business goal into measurable analytical target.
  2. *Data Ingestion & Extraction:* Ingest multi-source structured and unstructured data.
  3. *Data Cleaning & Preprocessing (ETL):* Impute missing data, resolve outliers, normalize/standardize variables, encode categorical features.
  4. *Exploratory Data Analysis (EDA):* Univariate/bivariate visualizations, correlation checks, hypothesis screening.
  5. *Feature Engineering & Selection:* Construct high-signal features; remove collinear or redundant predictors.
  6. *Model Training & Hyperparameter Tuning:* Train algorithms using k-fold cross-validation.
  7. *Model Validation & Testing:* Assess generalization performance on holdout test set using domain metrics (AUC, RMSE, F1).
  8. *Operational Deployment & Monitoring:* Package into REST API/microservice; monitor for data drift and model degradation.

### 1.11 Data Analytics Lifecycle
- **Need for a Structured Lifecycle:** Prevents ad-hoc failures, ensures repeatable results, maintains governance, aligns technical deliverables with organizational strategy.
- **The Six Phases of the Data Analytics Lifecycle (EMC / CRISP-DM aligned):**
  - *Phase 1: Discovery:* Define business objectives, formulate research questions, identify data sources, assess initial resources and tools, develop project charter.
  - *Phase 2: Data Preparation:* Setup analytics sandbox, Extract-Transform-Load (ETL/ELT), clean and condition data, perform Exploratory Data Analysis (EDA).
  - *Phase 3: Model Planning:* Select candidate model families, evaluate feature importance, define performance benchmarks, plan validation protocols.
  - *Phase 4: Model Building:* Train candidate algorithms, tune hyperparameters, perform cross-validation, compare validation performance, select final model.
  - *Phase 5: Communicating Results:* Articulate findings, quantify business ROI, translate statistical metrics into executive insights, review model limitations with stakeholders.
  - *Phase 6: Operationalization:* Deploy model into production pipelines, implement automated alerting, deliver user documentation, establish retraining schedule.
- **Cyclic Feedback Loops & Agile Analytics:** The iterative nature of analytics (looping back from Model Building to Data Prep or Discovery).

### 1.12 Key Roles for Successful Analytic Projects
- **Core Project Team Roles:**
  - *Business User / Domain Expert:* Provides real-world operational context, validates business assumptions, evaluates utility of findings.
  - *Project Sponsor:* Champions the project, secures executive funding, defines strategic objectives, evaluates business return on investment.
  - *Project Manager:* Coordinates timelines, milestones, deliverables, sprint tracking, and stakeholder communication.
  - *Business Intelligence (BI) Analyst:* Formulates business questions, produces operational reports, creates dashboards, analyzes historical baseline data.
  - *Data Engineer:* Designs, builds, and maintains data pipelines, data warehouses, ETL processes, and cluster infrastructure.
  - *Data Scientist:* Formulates mathematical hypotheses, designs modeling strategies, builds statistical and machine learning algorithms, optimizes model performance.
  - *Database Administrator (DBA):* Configures database servers, ensures security and access controls, optimizes query execution, maintains database integrity.
- **Role Interaction & Governance:** RACI matrix (Responsible, Accountable, Consulted, Informed) across lifecycle phases.

---

## Unit II: Data Analysis (08 Lectures)

### 2.1 Univariate, Bivariate, and Multivariate Analysis
- **Univariate Analysis:** Analyzing a single variable in isolation; examining distribution, central tendency (mean, median, mode), dispersion (variance, standard deviation, interquartile range), skewness, and kurtosis; visualizations (histograms, box plots, density plots).
- **Bivariate Analysis:** Investigating the relationship between two variables; scatter plots, Pearson/Spearman correlation coefficients, cross-tabulations, contingency tables, two-sample t-tests, chi-square tests.
- **Multivariate Analysis:**
  - Definition & Necessity: Simultaneous analysis of $p \ge 3$ variables; capturing joint distributions, latent structures, and multi-variable interactions.
  - Core Methods Overview: Multiple Regression, Principal Component Analysis (PCA), Factor Analysis, Cluster Analysis, MANOVA (Multivariate Analysis of Variance), Discriminant Analysis, Canonical Correlation Analysis.
  - Covariance and Correlation Matrices: Properties, computation, interpretation, role in identifying multicollinearity and dimensionality reduction.
  - Univariate vs. Multivariate Comparison: Information richness, assumptions, mathematical complexity, and computational demands.

### 2.2 Regression Modeling & Applications
- **Foundations of Regression Analysis:** Dependent (response/target) variable vs. Independent (predictor/explanatory) variables; deterministic vs. statistical relationships.
- **Simple Linear Regression:** Equation $Y = \beta_0 + \beta_1 X + \epsilon$; Ordinary Least Squares (OLS) derivation minimizing sum of squared residuals ($\sum e_i^2$).
- **Multiple Linear Regression:** Equation $Y = \beta_0 + \sum_{j=1}^p \beta_j X_j + \epsilon$; matrix formulation $\mathbf{Y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\epsilon}$; normal equations $\hat{\boldsymbol{\beta}} = (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{Y}$.
- **Multivariate Regression:** Extension where multiple dependent response variables ($\mathbf{Y}_1, \mathbf{Y}_2, \dots, \mathbf{Y}_m$) are simultaneously modeled against a shared set of predictors; matrix formulation $\mathbf{Y}_{n \times m} = \mathbf{X}_{n \times (p+1)}\mathbf{B}_{(p+1) \times m} + \mathbf{E}_{n \times m}$; capturing residual correlations across outcomes.
- **OLS Assumptions (Gauss-Markov Theorem & BLUE Properties):**
  1. *Linearity in parameters.*
  2. *Strict exogeneity ($E[\epsilon | X] = 0$).*
  3. *Homoscedasticity (constant error variance $\text{Var}(\epsilon_i) = \sigma^2$).*
  4. *No autocorrelation ($Cov(\epsilon_i, \epsilon_j) = 0, \forall i \neq j$).*
  5. *No perfect multicollinearity (rank of $\mathbf{X}$ is $p+1$).*
  6. *Normality of residuals (for inference, hypothesis testing, t-statistics, and F-statistics).*
- **Model Evaluation & Diagnostics:** Residual analysis plots, $R^2$ (Coefficient of Determination), Adjusted $R^2$, Mean Squared Error (MSE), Root Mean Squared Error (RMSE), Mean Absolute Error (MAE), Variance Inflation Factor (VIF) for multicollinearity detection.
- **Nonlinear & Classification Regression:** Polynomial regression, Ridge (L2) and Lasso (L1) regularization, Logistic Regression (sigmoid link function, log-odds, cross-entropy loss, binary classification).
- **Applications of Regression in Data Analytics:** House price estimation, sales forecasting, financial risk scoring, marketing attribution.

### 2.3 Bayesian Modeling, Inference, and Bayesian Networks
- **Bayesian Paradigm vs. Frequentist Paradigm:** Probability as subjective degree of belief vs. long-run relative frequency; handling prior knowledge.
- **Bayes' Theorem & Mathematical Derivation:**
  $$P(\theta | D) = \frac{P(D | \theta) \cdot P(\theta)}{P(D)} = \frac{P(D | \theta) \cdot P(\theta)}{\int P(D | \theta) P(\theta) d\theta}$$
  - *Prior $P(\theta)$:* Initial probability distribution of parameter/hypothesis before observing data.
  - *Likelihood $P(D | \theta)$:* Probability of observing data given the parameter.
  - *Marginal Likelihood / Evidence $P(D)$:* Normalizing constant integrating over all parameter states.
  - *Posterior $P(\theta | D)$:* Updated probability distribution incorporating empirical evidence.
- **Naive Bayes Classifier:**
  - Class-conditional independence assumption: $P(X_1, X_2, \dots, X_p | C_k) = \prod_{j=1}^p P(X_j | C_k)$.
  - Maximum A Posteriori (MAP) decision rule.
  - Gaussian, Multinomial, and Bernoulli Naive Bayes variants; applications in text spam filtering and sentiment analysis.
- **Bayesian Networks (Belief Networks / Probabilistic Graphical Models):**
  - *Structure:* Directed Acyclic Graph (DAG) $G = (V, E)$ where nodes represent random variables and directed edges represent direct conditional dependencies.
  - *Conditional Probability Tables (CPT):* Local probability distribution for each node conditioned on its parents $P(X_i | \text{Parents}(X_i))$.
  - *Joint Probability Factorization:* $P(X_1, X_2, \dots, X_n) = \prod_{i=1}^n P(X_i | \text{Parents}(X_i))$.
  - *Conditional Independence & d-Separation:* Serial, diverging (common cause), and converging (v-structure/collider) causal configurations.
- **Inference in Bayesian Networks:**
  - *Exact Inference:* Variable Elimination algorithm, Junction Tree algorithm.
  - *Approximate Inference:* Monte Carlo methods, Markov Chain Monte Carlo (MCMC), Gibbs Sampling.
  - *Applications:* Medical diagnosis systems, fault diagnostic engines in aerospace/industrial machinery, financial credit risk assessment.

### 2.4 Support Vector Machines (SVM) and Kernel Methods
- **Fundamental Principles of SVM:**
  - Optimal separating hyperplane, decision boundary equation $\mathbf{w}^T \mathbf{x} + b = 0$.
  - Geometric Margin vs. Functional Margin: Maximizing geometric margin $\frac{2}{\|\mathbf{w}\|}$ subject to correct classification.
  - Support Vectors: The critical subset of training points lying on the margin boundaries ($\mathbf{w}^T \mathbf{x}_i + b = \pm 1$) that uniquely define the optimal hyperplane.
- **Hard Margin vs. Soft Margin SVM:**
  - Hard margin formulation (linearly separable data, zero tolerance for errors).
  - Soft margin formulation (handling noisy, non-separable data via slack variables $\xi_i \ge 0$).
  - Convex Quadratic Optimization Problem:
    $$\min_{\mathbf{w}, b, \boldsymbol{\xi}} \frac{1}{2} \|\mathbf{w}\|^2 + C \sum_{i=1}^n \xi_i \quad \text{s.t.} \quad y_i(\mathbf{w}^T \mathbf{x}_i + b) \ge 1 - \xi_i, \quad \xi_i \ge 0$$
  - Trade-off parameter $C$: High $C$ penalizes misclassifications heavily (narrow margin, risk of overfitting); low $C$ allows larger margin with more misclassifications (higher bias, lower variance).
- **The Kernel Trick & Kernel Methods:**
  - Mapping non-linearly separable input data $\mathbf{x} \in \mathbb{R}^d$ into a higher (potentially infinite) dimensional Hilbert feature space $\Phi(\mathbf{x}) \in \mathcal{H}$ where linear separation is achievable.
  - Kernel Function definition: $K(\mathbf{x}_i, \mathbf{x}_j) = \langle \Phi(\mathbf{x}_i), \Phi(\mathbf{x}_j) \rangle$ computes inner products directly in original space without explicitly computing expensive or infinite transformation $\Phi(\cdot)$.
  - *Mercer's Theorem & Condition:* Necessary and sufficient conditions for a function to be a valid kernel (continuous symmetric positive semi-definite Gram matrix).
- **Commonly Used Kernel Functions:**
  1. *Linear Kernel:* $K(\mathbf{x}_i, \mathbf{x}_j) = \mathbf{x}_i^T \mathbf{x}_j$ (fast baseline, high-dimensional text data).
  2. *Polynomial Kernel:* $K(\mathbf{x}_i, \mathbf{x}_j) = (\mathbf{x}_i^T \mathbf{x}_j + c)^d$ (models feature interactions of degree $d$).
  3. *Radial Basis Function (RBF) / Gaussian Kernel:* $K(\mathbf{x}_i, \mathbf{x}_j) = \exp(-\gamma \|\mathbf{x}_i - \mathbf{x}_j\|^2)$ (infinite-dimensional feature space; hyperparameter $\gamma = \frac{1}{2\sigma^2}$ controls radius of influence).
  4. *Sigmoid / Hyperbolic Tangent Kernel:* $K(\mathbf{x}_i, \mathbf{x}_j) = \tanh(\alpha \mathbf{x}_i^T \mathbf{x}_j + c)$ (neural network emulation).
- **Multi-Class SVM Strategies:** One-vs-Rest (OvR) with $K$ classifiers; One-vs-One (OvO) with $\frac{K(K-1)}{2}$ pairwise classifiers.
- **Support Vector Regression (SVR):** $\epsilon$-insensitive loss function.

### 2.5 Analysis of Time Series: Linear Systems Analysis & Nonlinear Dynamics
- **Foundations of Time Series:** Sequence of observations indexed in chronological time order; stochastic processes vs. deterministic trends.
- **Components of a Time Series (Decomposition):**
  - *Trend ($T_t$):* Long-term secular movement or progression.
  - *Seasonality ($S_t$):* Periodic fluctuations repeating within fixed, known intervals (e.g., daily, monthly, quarterly).
  - *Cyclical Variation ($C_t$):* Longer-term waves and oscillations related to business or macroeconomic cycles without fixed period.
  - *Irregular / Noise ($I_t$ / $\epsilon_t$):* Unpredictable, random residual variation.
  - *Additive Model:* $Y_t = T_t + S_t + C_t + I_t$ (constant seasonal magnitude).
  - *Multiplicative Model:* $Y_t = T_t \times S_t \times C_t \times I_t$ (seasonal amplitude scales with level of series).
- **Stationarity:**
  - Strict Stationarity vs. Weak (Covariance / Second-Order) Stationarity (constant mean, constant variance, autocovariance depends only on lag $k$).
  - Stationarity Testing: Visual inspection, Augmented Dickey-Fuller (ADF) unit root test, KPSS test.
  - Transforming Non-Stationary Series: First-order differencing ($\Delta Y_t = Y_t - Y_{t-1}$), seasonal differencing, log transformation for variance stabilization.
- **Linear Systems Analysis & Autoregressive Models:**
  - *Autocorrelation Function (ACF)* and *Partial Autocorrelation Function (PACF)* for lag identification.
  - *Autoregressive (AR($p$)) Model:* Current value expressed as linear combination of past $p$ values: $Y_t = c + \sum_{i=1}^p \phi_i Y_{t-i} + \epsilon_t$.
  - *Moving Average (MA($q$)) Model:* Current value expressed as linear combination of past $q$ white noise shocks: $Y_t = \mu + \epsilon_t + \sum_{j=1}^q \theta_j \epsilon_{t-j}$.
  - *ARMA($p, q$) and ARIMA($p, d, q$) Models:* Combining autoregression, differencing of order $d$, and moving averages; Box-Jenkins modeling methodology (Identification, Estimation, Diagnostic Checking, Forecasting).
  - *SARIMA:* Seasonal ARIMA extension $(p,d,q) \times (P,D,Q)_s$.
- **Nonlinear Dynamics & Chaos in Time Series:**
  - Limitations of linear models when dealing with asymmetric cycles, regime shifts, or deterministic chaos.
  - *Phase Space Reconstruction & Delay Coordinate Embedding:* Reconstructing underlying multi-dimensional attractor using delay vectors $\mathbf{x}_t = (Y_t, Y_{t-\tau}, Y_{t-2\tau}, \dots, Y_{t-(m-1)\tau})$ based on **Takens' Embedding Theorem**.
  - *Nonlinear Indicators:* Lyapunov Exponents (quantifying sensitivity to initial conditions / divergence rate of nearby trajectories; positive exponent signifies chaos), Correlation Dimension (fractal dimension of strange attractors), Phase Portraits, Poincare maps.
  - *Nonlinear Models:* Threshold Autoregressive (TAR) models, Smooth Transition Autoregressive (STAR) models, Nonlinear Autoregressive Neural Networks (NARX).

### 2.6 Rule Induction
- **Definition & Paradigm:** Inductive learning process that discovers modular, human-interpretable knowledge in the form of IF-THEN rules directly from training examples.
- **Rule Representation:**
  - Form: $\text{IF } (\text{Condition}_1 \land \text{Condition}_2 \land \dots \land \text{Condition}_k) \text{ THEN } \text{Class } = C_j$.
  - Antecedent (body / condition) and Consequent (head / prediction).
  - Propositional Rules (attribute-value tests) vs. First-Order Inductive Logic (predicates and relations).
- **Sequential Covering (Separate-and-Conquer) Algorithm:**
  - Step 1: Learn a single high-quality rule that covers a subset of positive training examples while avoiding negative examples.
  - Step 2: Remove all examples covered by the learned rule from the training dataset.
  - Step 3: Repeat the process on the remaining dataset until all positive examples are covered or stopping criterion is reached.
- **Rule Evaluation & Quality Metrics:**
  - *Coverage:* Proportion of total dataset instances that satisfy the antecedent: $\text{Coverage}(R) = \frac{n_{\text{covers}}}{N}$.
  - *Accuracy / Confidence:* Precision of the rule: $\text{Accuracy}(R) = \frac{n_{\text{correct}}}{n_{\text{covers}}}$.
  - *Information Gain:* Entropy reduction achieved by adding an attribute condition to the rule antecedent.
  - *Laplace & m-Estimate of Precision:* Mitigating small-sample bias in leaf rules: $\text{Laplace} = \frac{n_{\text{correct}} + 1}{n_{\text{covers}} + k}$.
- **Rule Pruning & Algorithms:**
  - Pre-pruning vs. Post-pruning (Reduced Error Pruning - REP).
  - *PRISM Algorithm:* Fast, modular rule induction for nominal datasets.
  - *RIPPER (Repeated Incremental Pruning to Produce Error Reduction):* State-of-the-art propositional rule inducer with linear scaling $O(n \log n)$, internal validation splits, and MDL (Minimum Description Length) stopping criteria.
  - Comparison: *Decision Lists* (ordered rules with default fallback) vs. *Decision Sets* (unordered rules with conflict resolution voting) vs. *Decision Trees*.

### 2.7 Neural Networks: Learning, Generalization, and Competitive Learning
- **Foundations of Artificial Neural Networks (ANN):**
  - Biological inspiration (synapses, dendrites, axon) vs. computational model.
  - *Artificial Neuron (Perceptron):* Weighted sum of inputs $z = \sum w_i x_i + b$ passed through activation function $a = f(z)$.
  - Multi-Layer Perceptron (MLP) architecture: Input layer, one or more hidden layers, output layer.
- **Activation Functions (Mathematical Forms & Comparisons):**
  - *Sigmoid:* $\sigma(z) = \frac{1}{1 + e^{-z}}$ (outputs in $(0, 1)$, susceptible to vanishing gradients).
  - *Hyperbolic Tangent (Tanh):* $\tanh(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}}$ (zero-centered in $(-1, 1)$, vanishing gradients).
  - *Rectified Linear Unit (ReLU):* $f(z) = \max(0, z)$ (computationally efficient, non-saturating for $z > 0$, prone to "dying ReLU").
  - *Leaky ReLU:* $f(z) = \max(\alpha z, z)$ with small slope $\alpha \approx 0.01$ for $z < 0$.
  - *Softmax:* $\sigma(\mathbf{z})_i = \frac{e^{z_i}}{\sum_j e^{z_j}}$ (multi-class output probability distribution).
- **The Learning Process & Backpropagation Algorithm:**
  - Loss Functions: Mean Squared Error (regression), Binary Cross-Entropy / Log Loss, Multi-Class Categorical Cross-Entropy.
  - Gradient Descent Optimization: Updating weights in opposite direction of loss gradient: $w \leftarrow w - \eta \frac{\partial L}{\partial w}$.
  - Backpropagation via Chain Rule: Computing error signals $\delta$ from output layer backward through hidden layers to update all synaptic weights.
  - Modern Optimizers: Stochastic Gradient Descent (SGD), Mini-batch GD, Momentum, RMSprop, Adam (Adaptive Moment Estimation).
- **Generalization and Overfitting Mitigation:**
  - Bias-Variance Trade-off in deep architectures.
  - Techniques to enforce generalization:
    - *L1 (Lasso) and L2 (Ridge / Weight Decay) Regularization:* Penalizing large weight magnitudes.
    - *Dropout:* Randomly deactivating neuron subsets during training iterations to prevent co-adaptation.
    - *Early Stopping:* Halting training when validation loss begins to increase despite continuing drop in training loss.
    - *K-Fold Cross-Validation & Data Augmentation.*
- **Competitive Learning (Unsupervised Neural Networks):**
  - Philosophy: Output neurons compete among themselves to be activated; only the "winner" updates its weights (**Winner-Take-All / WTA**).
  - Euclidean distance metric: Neuron $k$ wins if $\|\mathbf{x} - \mathbf{w}_k\| = \min_j \|\mathbf{x} - \mathbf{w}_j\|$.
  - Weight Update Rule: $\mathbf{w}_k \leftarrow \mathbf{w}_k + \eta (\mathbf{x} - \mathbf{w}_k)$ pulls winner's weight vector toward input vector.
  - *Kohonen Self-Organizing Maps (SOM):* Preserving topological properties of high-dimensional input space onto a 1D/2D lattice; neighborhood update function $h_{ci}(t)$ allowing neighbors of winner to update weights with decaying spatial influence.
  - *Learning Vector Quantization (LVQ):* Supervised variant of competitive learning.
  - Applications in customer segmentation, speech pattern recognition, and unsupervised high-dimensional data clustering.

### 2.8 Principal Component Analysis (PCA) and Neural Networks
- **PCA as an Unsupervised Dimensionality Reduction Technique:**
  - Objective: Transform $p$ correlated variables into $k < p$ orthogonal, uncorrelated linear combinations (Principal Components) capturing maximal variance.
  - Mathematical Derivation:
    1. Mean-center and standardize data matrix $\mathbf{X}$ to zero mean and unit variance.
    2. Compute $p \times p$ Covariance Matrix $\mathbf{\Sigma} = \frac{1}{n-1}\mathbf{X}^T\mathbf{X}$.
    3. Compute Eigenvalues $\lambda_i$ and Eigenvectors $\mathbf{v}_i$ by solving $\mathbf{\Sigma}\mathbf{v} = \lambda\mathbf{v}$.
    4. Sort eigenvalues in descending order: $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_p \ge 0$.
    5. Calculate Explained Variance Ratio: $\frac{\lambda_i}{\sum_{j=1}^p \lambda_j}$.
    6. Select top $k$ eigenvectors to form projection matrix $\mathbf{W} = [\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k]$.
    7. Project original data: $\mathbf{Z} = \mathbf{X}\mathbf{W}$.
  - Scree Plot, Elbow Rule, and Kaiser Criterion ($\lambda_i > 1$).
- **Connection Between PCA and Neural Networks:**
  - *Linear Autoencoders:* A feedforward neural network with a single linear hidden layer of $k$ units trained with MSE reconstruction loss spans the exact same subspace as the first $k$ principal components (Baldi & Hornik theorem).
  - *Hebbian Learning & Oja's Learning Rule:* Single neuron updating weights via modified Hebbian rule $\Delta \mathbf{w} = \eta (y \mathbf{x} - y^2 \mathbf{w})$ converges to the first principal component without explicit covariance matrix eigendecomposition.
  - *Sanger's Generalized Hebbian Algorithm (GHA):* Multi-neuron neural network extension using Gram-Schmidt orthogonalization that extracts the exact top $k$ principal components in descending order online from streaming data.

### 2.9 Fuzzy Logic: Extracting Fuzzy Models from Data and Fuzzy Decision Trees
- **Foundations of Fuzzy Logic:**
  - Binary/Crisp logic ($x \in \{0, 1\}$) vs. Multi-valued Fuzzy logic ($\mu_A(x) \in [0, 1]$).
  - Linguistic Variables and Linguistic Hedges ("very", "somewhat", "slightly").
  - Membership Functions: Triangular, Trapezoidal, Gaussian, Sigmoidal.
  - Fuzzy Set Operations: Intersection (T-norm: $\min(\mu_A, \mu_B)$), Union (S-norm / T-conorm: $\max(\mu_A, \mu_B)$), Complement ($1 - \mu_A$).
- **The Four Stages of a Fuzzy Inference System (FIS):**
  1. *Fuzzification:* Transforming crisp input numerical values into fuzzy membership degrees using input membership functions.
  2. *Rule Evaluation:* Computing firing strength of IF-THEN linguistic rules using fuzzy logic operators (AND/OR).
     - *Mamdani Inference:* Output membership functions are fuzzy sets clipped or scaled by rule firing strength.
     - *Takagi-Sugeno-Kang (TSK) Inference:* Output consequent is a mathematical function (constant or linear equation of inputs).
  3. *Aggregation:* Combining truncated output fuzzy sets from all activated rules into a single composite fuzzy set.
  4. *Defuzzification:* Converting aggregated fuzzy set back into a crisp numerical control output:
     - *Centroid / Center of Gravity (CoG):* $z^* = \frac{\int z \mu_C(z) dz}{\int \mu_C(z) dz}$.
     - *Bisector of Area (BOA), Mean of Maximum (MOM), Smallest/Largest of Maximum (SOM/LOM).*
- **Extracting Fuzzy Models from Data:**
  - *Wang-Mendel Method:* Generating fuzzy rules from input-output numerical training pairs by assigning data points to maximum membership fuzzy regions.
  - *Clustering-Based Fuzzy Modeling (Fuzzy C-Means / Subtractive Clustering):* Identifying cluster centers in joint input-output space to generate optimal fuzzy rules and membership centers.
- **Fuzzy Decision Trees (FDT):**
  - Integrating fuzzy set theory with decision tree induction (soft partitioning vs. hard crisp splits).
  - Instances possess partial membership across multiple child branches simultaneously.
  - Splitting criteria based on Fuzzy Information Gain / Fuzzy Entropy; robust against boundary noise and measurement uncertainty.
- **Adaptive Neuro-Fuzzy Inference System (ANFIS):** Five-layer hybrid neural-fuzzy network that uses backpropagation and least squares estimation to automatically learn membership function parameters and fuzzy rule weights from data.

### 2.10 Stochastic Search Methods
- **Motivation & Fundamentals:**
  - Limitations of deterministic gradient-based optimization (getting trapped in local optima, requiring continuous/differentiable objective functions, failing in NP-hard/combinatorial spaces).
  - *The No Free Lunch (NFL) Theorem:* No single search algorithm outperforms all others when averaged across all possible objective problems; algorithm choice must align with domain landscape structure.
  - The fundamental trade-off: **Exploration** (broad global search of diverse solution space) vs. **Exploitation** (fine local refinement near promising candidates).
- **Genetic Algorithms (GA):**
  - Evolutionary computational paradigm inspired by Darwinian natural selection.
  - *Chromosome Representation:* Binary strings, integer vectors, or real-valued continuous encodings.
  - *Fitness Function:* Quantitative measure of candidate solution quality.
  - *Selection Mechanisms:* Roulette Wheel (fitness-proportionate), Tournament selection, Rank-based selection.
  - *Genetic Operators:*
    - *Crossover (Recombination):* Single-point, two-point, uniform crossover combining genetic material from two parents.
    - *Mutation:* Random bit flip or Gaussian perturbation to preserve genetic diversity and prevent premature convergence.
    - *Elitism:* Preserving the best individual unaltered into next generation.
- **Simulated Annealing (SA):**
  - Analogy to physical metallurgical annealing (heating metal to high temperature and cooling slowly to achieve minimum energy crystalline lattice).
  - *Metropolis Acceptance Criterion:* Better solutions ($\Delta E < 0$) are always accepted; worse solutions ($\Delta E > 0$) are accepted probabilistically:
    $$P(\text{Accept}) = \exp\left(-\frac{\Delta E}{T}\right)$$
  - *Annealing / Cooling Schedule:* Initial high temperature $T_0$ allows widespread exploration; gradual temperature reduction (geometric cooling $T_{k+1} = \alpha T_k, 0.8 \le \alpha \le 0.99$) shifts algorithm behavior toward pure greedy local descent.
- **Particle Swarm Optimization (PSO):**
  - Swarm intelligence paradigm inspired by flocking behavior of birds and schooling of fish.
  - Swarm of particles moving through multi-dimensional search space.
  - Velocity and Position update equations:
    $$v_i^{(t+1)} = w \cdot v_i^{(t)} + c_1 r_1 (pbest_i - x_i^{(t)}) + c_2 r_2 (gbest - x_i^{(t)})$$
    $$x_i^{(t+1)} = x_i^{(t)} + v_i^{(t+1)}$$
    - $w$: Inertia weight (momentum).
    - $c_1, r_1$: Cognitive acceleration coefficient and uniform random variable.
    - $c_2, r_2$: Social acceleration coefficient and uniform random variable.
- **Stochastic Search vs. Deterministic Optimization Techniques:**
  - *Deterministic Methods (Gradient Descent, Newton-Raphson, Simplex):* Follow fixed mathematical gradients; yield identical trajectories given the same initialization; guarantee exact local/global optima on smooth convex landscapes; fail on non-differentiable, discontinuous, or highly multimodal surfaces.
  - *Stochastic Search Methods (Genetic Algorithms, Simulated Annealing, PSO):* Incorporate controlled randomness and probabilistic transitions; do not require mathematical derivatives; avoid entrapment in local sub-optima via exploration; ideal for NP-hard, non-convex, or combinatorial search spaces (e.g., hyperparameter tuning, feature selection).
- **Applications in Data Analysis:** Feature subset selection ($2^p$ combinatorial search), neural network hyperparameter tuning, clustering without initialization bias, optimal rule extraction.

### 2.11 Comparative Evaluation & Hybrid Method Synthesis
- **Comparative Evaluation: SVM vs. Neural Networks for Data Classification:**
  - *Sample Size & Data Scale:* SVM excels on small-to-medium high-dimensional datasets ($n < 50,000$); Neural Networks excel on large-scale datasets ($n > 100,000$).
  - *Convexity & Optimality:* SVM solves convex quadratic programming (guaranteed global optimum); Neural Networks solve non-convex optimization (susceptible to local minima).
  - *Overfitting & Hyperparameters:* SVM controlled by $C$ and kernel parameter $\gamma$ (high structural risk minimization); Neural Networks require extensive tuning (architecture, learning rate, regularization, dropout, epochs).
  - *Interpretability & Inference:* SVM support vectors isolate decision boundary directly; Neural Networks are distributed "black boxes".
- **Integrated Problem-Solving Architecture (Multi-Variable, Time-Dependent Datasets):**
  - Systematic synthesis combining:
    1. *Time Series Decomposition & Differencing:* Separate trend and seasonality, establish stationarity.
    2. *Principal Component Analysis (PCA):* Compress wide cross-sectional feature spaces, eliminate multicollinearity, denoise variables.
    3. *Regression Modeling:* Quantify linear/monotonic relationships, identify baseline trends, model continuous responses.
    4. *Support Vector Machines / Neural Networks:* Predict complex nonlinear regimes, classification states, or multi-step forward trajectories.

---

## ST-1 Master Concordance: All 50 Questions Mapped to Syllabus

### Unit I Question Concordance (21 Questions: 6 Short, 15 Long)

| Q# | Type / Marks | Question Topic & Statement | Syllabus Section | Solution Anchor |
|:---|:---|:---|:---|:---|
| **Q1** | Short (2M) | Define data analytics and its importance | §1.1 Introduction to Data Analytics | [short-answers.html#q1](short-answers.html#q1) |
| **Q2** | Short (2M) | List 5 Data Visualization tools and libraries | §1.9 Modern Analytic Tools | [short-answers.html#q2](short-answers.html#q2) |
| **Q3** | Short (2M) | Key roles required for successful analytic projects | §1.12 Key Project Roles | [short-answers.html#q3](short-answers.html#q3) |
| **Q4** | Short (2M) | Role of Big Data platform in data analytics | §1.6 Big Data Platforms | [short-answers.html#q4](short-answers.html#q4) |
| **Q5** | Long (7M) | Major phases of Data Analytics Lifecycle | §1.11 Data Analytics Lifecycle | [long-answers.html#q5](long-answers.html#q5) |
| **Q6** | Short (2M) | Why Data Analytics is needed in modern organizations | §1.1 Need & Importance | [short-answers.html#q6](short-answers.html#q6) |
| **Q7** | Short (2M) | 4 sources of data used in data analytics | §1.2 Sources of Data | [short-answers.html#q7](short-answers.html#q7) |
| **Q18** | Long (7M) | Evolution of data analytics need in modern business | §1.1, §1.7 Analytic Evolution | [long-answers.html#q18](long-answers.html#q18) |
| **Q19** | Long (7M) | Compare and contrast analysis and reporting | §1.8 Analysis vs Reporting | [long-answers.html#q19](long-answers.html#q19) |
| **Q21** | Long (7M) | Five differences between supervised & unsupervised learning | §1.1 Learning Paradigms | [long-answers.html#q21](long-answers.html#q21) |
| **Q23** | Long (7M) | Evolution of analytic scalability (traditional → real-time → predictive) | §1.7 Analytic Scalability | [long-answers.html#q23](long-answers.html#q23) |
| **Q24** | Long (7M) | Classification of data (Structured, Semi-structured, Unstructured) | §1.3 Classification of Data | [long-answers.html#q24](long-answers.html#q24) |
| **Q34** | Long (7M) | Sources, nature, and classification of data with examples | §1.2 Sources, §1.3 Structure | [long-answers.html#q34](long-answers.html#q34) |
| **Q35** | Long (7M) | Analysis vs Reporting & Predictive value in decision-making | §1.8 Analysis vs Reporting | [long-answers.html#q35](long-answers.html#q35) |
| **Q36** | Long (7M) | Key characteristics of Big Data (5Vs) & platform landscape | §1.5 Big Data 5Vs, §1.6 Platforms | [long-answers.html#q36](long-answers.html#q36) |
| **Q37** | Long (7M) | Big Data challenges & Volume, Velocity, Variety, Veracity impacts | §1.5 5Vs & Management Challenges | [long-answers.html#q37](long-answers.html#q37) |
| **Q38** | Long (7M) | Complete 6 phases of Data Analytics Lifecycle in detail | §1.11 Data Analytics Lifecycle | [long-answers.html#q38](long-answers.html#q38) |
| **Q41** | Long (7M) | Hadoop Architecture (HDFS, YARN, MapReduce) with diagram | §1.6 Big Data Platforms & Hadoop | [long-answers.html#q41](long-answers.html#q41) |
| **Q42** | Long (7M) | Real-world applications (Healthcare, Banking, E-Commerce, Education, Transport) | §1.1 Applications of Data Analytics | [long-answers.html#q42](long-answers.html#q42) |
| **Q43** | Long (7M) | Multi-source sales pipeline end-to-end transformation case study | §1.10 End-to-End Analytics Workflow | [long-answers.html#q43](long-answers.html#q43) |
| **Q44** | Long (7M) | Discovery Phase importance & Communicating Results / Operationalization | §1.11 Lifecycle Phases 1, 5, 6 | [long-answers.html#q44](long-answers.html#q44) |

### Unit II Question Concordance (29 Questions: 11 Short, 18 Long)

| Q# | Type / Marks | Question Topic & Statement | Syllabus Section | Solution Anchor |
|:---|:---|:---|:---|:---|
| **Q8** | Short (2M) | Short notes on Fuzzy Logic | §2.9 Fuzzy Logic Foundations | [short-answers.html#q8](short-answers.html#q8) |
| **Q9** | Short (2M) | Multivariate analysis definition and importance | §2.1 Multivariate Analysis | [short-answers.html#q9](short-answers.html#q9) |
| **Q10** | Short (2M) | Define Competitive Learning in Neural Networks | §2.7 Neural Networks | [short-answers.html#q10](short-answers.html#q10) |
| **Q11** | Short (2M) | Explain Principal Component Analysis (PCA) | §2.8 Principal Component Analysis | [short-answers.html#q11](short-answers.html#q11) |
| **Q12** | Short (2M) | Time Series Analysis for time-dependent data | §2.5 Time-Series Analysis | [short-answers.html#q12](short-answers.html#q12) |
| **Q13** | Short (2M) | Rule Induction and example of generated rule | §2.6 Rule Induction | [short-answers.html#q13](short-answers.html#q13) |
| **Q14** | Short (2M) | Kernel function application in SVM for nonlinear data | §2.4 Support Vector Machines | [short-answers.html#q14](short-answers.html#q14) |
| **Q15** | Short (2M) | Stochastic search definition & feature selection application | §2.10 Stochastic Search Methods | [short-answers.html#q15](short-answers.html#q15) |
| **Q16** | Short (2M) | Bayesian Network definition and main components | §2.3 Bayesian Modeling | [short-answers.html#q16](short-answers.html#q16) |
| **Q17** | Short (2M) | Regression Analysis definition and two applications | §2.2 Regression Modeling | [short-answers.html#q17](short-answers.html#q17) |
| **Q20** | Long (7M) | PCA main steps with worked numerical example | §2.8 PCA Step-by-Step | [long-answers.html#q20](long-answers.html#q20) |
| **Q21** | Long (7M) | Supervised vs Unsupervised learning differences | §1.1 & §2.1 Learning Paradigms | [long-answers.html#q21](long-answers.html#q21) |
| **Q22** | Long (7M) | Regression models used in data analysis & applications | §2.2 Regression Modeling | [long-answers.html#q22](long-answers.html#q22) |
| **Q25** | Long (7M) | Bayesian modeling & Bayesian networks in detail | §2.3 Bayesian Inference & DAGs | [long-answers.html#q25](long-answers.html#q25) |
| **Q26** | Long (7M) | Linear systems analysis & nonlinear dynamics in time series | §2.5 Time-Series Dynamics | [long-answers.html#q26](long-answers.html#q26) |
| **Q27** | Long (7M) | Regression modeling & multivariate regression extension | §2.2 Multivariate Regression | [long-answers.html#q27](long-answers.html#q27) |
| **Q28** | Long (7M) | Evaluate suitability of SVM vs Neural Networks | §2.11 SVM vs Neural Networks | [long-answers.html#q28](long-answers.html#q28) |
| **Q29** | Long (7M) | Kernel methods and commonly used kernel functions in SVM | §2.4 Kernel Methods & Trick | [long-answers.html#q29](long-answers.html#q29) |
| **Q30** | Long (7M) | Rule induction concepts, rule types (sequential/association) | §2.6 Rule Induction | [long-answers.html#q30](long-answers.html#q30) |
| **Q31** | Long (7M) | Neural Networks major components and applications | §2.7 Neural Networks | [long-answers.html#q31](long-answers.html#q31) |
| **Q32** | Long (7M) | Univariate vs Multivariate Analysis characteristics | §2.1 Univariate & Multivariate | [long-answers.html#q32](long-answers.html#q32) |
| **Q33** | Long (7M) | Design analytics approach for multi-variable time-dependent data | §2.11 Integrated Synthesis | [long-answers.html#q33](long-answers.html#q33) |
| **Q39** | Long (7M) | SVM algorithm, hyperplanes, margins, and linear vs nonlinear kernels | §2.4 Support Vector Machines | [long-answers.html#q39](long-answers.html#q39) |
| **Q40** | Long (7M) | Neural Networks learning, generalization, and competitive learning | §2.7 Neural Networks & Learning | [long-answers.html#q40](long-answers.html#q40) |
| **Q45** | Short (2M) | Differentiate stochastic search vs deterministic optimization | §2.10 Stochastic vs Deterministic | [short-answers.html#q45](short-answers.html#q45) |
| **Q46** | Long (7M) | Neural network learning, generalization, overfitting, and 6 factors | §2.7 Generalization & Overfitting | [long-answers.html#q46](long-answers.html#q46) |
| **Q47** | Long (7M) | Relationship between PCA & Neural Networks (Autoencoders & GHA) | §2.8 PCA & Autoencoders | [long-answers.html#q47](long-answers.html#q47) |
| **Q48** | Long (7M) | Fuzzy Inference System (FIS) components, Mamdani step-by-step | §2.9 Fuzzy Inference Systems | [long-answers.html#q48](long-answers.html#q48) |
| **Q49** | Long (7M) | Extracting fuzzy models from data & Crisp vs Fuzzy Decision Trees | §2.9 Fuzzy Model Extraction & FDT | [long-answers.html#q49](long-answers.html#q49) |
| **Q50** | Long (7M) | Three NN learning paradigms (Supervised, Unsupervised, Reinforcement) | §2.7 Learning Paradigms | [long-answers.html#q50](long-answers.html#q50) |

---

## Unit III: Mining Data Streams (08 Lectures) *(Reference)*
- Stream concepts, stream data model and architecture, stream computing.
- Sampling data in a stream (Vitter's reservoir sampling), filtering streams (Bloom filters).
- Counting distinct elements (Flajolet-Martin, HyperLogLog), estimating moments (AMS algorithm), counting oneness in a window (DGIM algorithm), decaying windows.
- Real-time Analytics Platform (RTAP) applications (Lambda vs. Kappa architectures).
- Case studies: real-time sentiment analysis, stock market predictions.

## Unit IV: Frequent Itemsets and Clustering (08 Lectures) *(Reference)*
- Mining frequent itemsets, market-basket model, Apriori algorithm, association rules.
- Handling large datasets in main memory, limited-pass algorithms (PCY, Multistage, Multihash, SON, Toivonen).
- Counting frequent itemsets in a stream (Lossy Counting).
- Clustering techniques: Hierarchical clustering, K-means, clustering high-dimensional data (curse of dimensionality), CLIQUE, ProCLUS.
- Frequent pattern-based clustering, non-Euclidean space clustering, streaming & parallel clustering (BFR, CURE, CluStream).

## Unit V: Visualization (08 Lectures) *(Reference)*
- Introduction to Visualization and stages, reference model pipeline, computational support, issues, different task types (Amar-Eagan-Stasko taxonomy), data representations.
- Visualization limitations: Display space, rendering time, navigation links.
- Human vision and perception: Preattentive processing, Cleveland-McGill graphical perception hierarchy, Gestalt principles, color theory.
- Exploration of complex information space: Figure captions in visual interfaces, visual objects and data objects, space perception, narrative visualization, and gestures for explanation.
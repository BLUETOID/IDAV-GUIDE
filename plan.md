# Project Plan: IDAV Exam Guide (ST-1)

## 0. Context / Verification (already done, restate for the agent)

The subject is **Introduction to Data Analytics and Visualization (IDAV)**. There are two source documents:

1. **Syllabus** — 5 units, each with a topic list and 8 proposed lectures.
2. **Question Bank (ST-1)** — 40 questions for CO1, CO2.

**Verified mapping of questions to units:**

- **Unit I (Introduction to Data Analytics)** — covers Q1–7, Q17–19, Q23, Q24, Q34–38
  (data analytics definition, sources of data, classification of data, Big Data platform, need/evolution of analytics, lifecycle phases, analysis vs reporting, 5Vs of Big Data, key roles).
- **Unit II (Data Analysis)** — covers Q8–16, Q20–22, Q25–33, Q39–40
  (fuzzy logic, multivariate analysis, competitive learning, PCA, time series, rule induction, kernel methods/SVM, stochastic search, Bayesian modeling/networks, regression, neural networks, univariate vs multivariate, supervised vs unsupervised learning).
- **Unit III (Mining Data Streams)** — 0 questions in this bank.
- **Unit IV (Frequent Itemsets and Clustering)** — 0 questions in this bank.
- **Unit V (Data Visualization)** — 0 questions in this bank.

**Conclusion:** This question bank tests Units I and II only. Units III–V must still be built as full topic-reference pages (per syllabus), but must NOT have invented/fake exam questions attached to them. This distinction must be visible to the student on the Home page and on those unit pages.

---

## 1. Deliverable

A **static 8-page educational site** (no backend, no JS frameworks, no animation libraries). Plain HTML/CSS. Content-first, textbook-style. Every page linked from a consistent navigation.

### Page list

| # | Page | Content |
|---|------|---------|
| 1 | Home | Course overview, full syllabus table, navigation, note on question bank coverage |
| 2 | Unit I | Introduction to Data Analytics + Data Analytics Lifecycle |
| 3 | Unit II | Data Analysis (regression → visualization techniques, full topic list) |
| 4 | Unit III | Mining Data Streams |
| 5 | Unit IV | Frequent Itemsets and Clustering |
| 6 | Unit V | Data Visualization |
| 7 | Short Answer Questions | All 2-mark-style questions from the bank, answered, grouped by unit |
| 8 | Long Answer Questions | All 7-mark-style questions from the bank, answered in full, grouped by unit |

---

## 2. Visual / Design Rules (strict — do not deviate)

- **No emojis** anywhere, in headings, body text, or lists.
- **No hover effects, glow effects, gradients, animations, transitions, or "fancy" UI flourishes.**
- **No decorative icons** used just to look modern.
- Color palette: near-white background, black/dark-gray text, **one** muted accent color (e.g., a single dark blue or maroon) used only for headings/borders — nothing bright, nothing neon.
- Typography: clean serif or clean sans-serif for body text; clear heading hierarchy (H1 for page title, H2 for unit/topic, H3 for sub-topic).
- Layout: simple, readable, print-friendable. Tables where the syllabus itself uses tables (e.g., Home page syllabus table).
- Diagrams must be **real drawn diagrams (SVG)** — labeled axes, labeled nodes, proper shapes and arrows. **No ASCII art diagrams.**
- No filler/marketing sentences ("In today's digital world...", "Data is the new oil...", etc.). Every sentence must carry exam-usable information.
- No "unwanted text" — no taglines, no footers with generic text, no placeholder lorem ipsum.

---

## 3. Content Rules Per Unit Page (Units I–V)

For every topic listed under that unit in the syllabus:

1. **Definition** — one precise, exam-quotable definition.
2. **Explanation** — how it actually works / what it does, in enough depth that a student understands the mechanism, not just the name.
3. **Diagram** (where the topic is visual/structural) — real SVG diagram, properly labeled. Required for at least these topics:
   - Data Analytics Lifecycle → phase flow diagram (6 phases, cyclic/stepwise)
   - Big Data characteristics → 5Vs diagram
   - Regression → scatter plot with fitted line
   - Bayesian Network → DAG with example nodes and conditional probabilities
   - SVM / Kernel methods → 2D plot with hyperplane, margin, support vectors; separate diagram for kernel transform (non-linear → linear)
   - PCA → scatter plot with principal axes overlaid, plus a steps diagram
   - Time Series Analysis → line graph showing trend + seasonality decomposition
   - Neural Networks → layered node-and-edge diagram (input/hidden/output)
   - Fuzzy Logic → membership function graph (e.g., temperature "cold/warm/hot" curves)
   - Stream data architecture → pipeline/box-arrow diagram (source → processor → output)
   - Sampling/filtering streams → simple flow diagram of a data stream with a sampling window
   - Apriori / frequent itemsets → itemset lattice diagram
   - Clustering (K-means, hierarchical) → labeled scatter with clusters; dendrogram for hierarchical
   - CLIQUE / high-dimensional clustering → grid-based subspace diagram
   - Visualization pipeline (Unit V) → stages-of-visualization pipeline diagram
   - Human vision / space-time limitations → simple illustrative diagram of visual field / display space constraint
4. **Real-world example** — one concrete, specific example per major topic (not generic). Examples to use:
   - Regression → predicting house prices from size/location
   - Fuzzy logic → automatic AC/thermostat control
   - Bayesian networks → medical diagnosis (symptom → disease probability)
   - SVM → email spam classification
   - Time series → stock price or sales forecasting
   - Neural networks → handwritten digit recognition
   - Stream mining → real-time Twitter/X sentiment during a live event
   - Frequent itemsets → market basket analysis (bread → butter)
   - Clustering → customer segmentation for marketing
   - Visualization → dashboard for sales/operations monitoring

Unit III, IV, V pages: same depth and diagram standard as Units I–II, but **no question-answer content** attached — just a clear note: "No ST-1 questions from this unit; content provided for full syllabus coverage."

---

## 4. Short Answer Page (2 Marks) — Page 7

- Include every question from the bank that is factual/definitional/short in nature (list-type, "define", "list any 5/4", short notes, single-concept explain).
- Candidates: Q1, Q2, Q3, Q4, Q6, Q7, Q8, Q9 (short form), Q10, Q11 (short form), Q12 (short form), Q13, Q14, Q15, Q16, Q17.
- Each answer: **3–6 lines**, exactly matching what a 2-mark answer needs — no diagrams unless a tiny one is genuinely necessary (e.g., Q13 rule induction example can be one line: `IF income > X THEN loan_approved = yes`).
- Group under sub-headings: "Unit I — Short Answers" and "Unit II — Short Answers".
- No padding, no repeated definitions across answers.

---

## 5. Long Answer Page (7 Marks) — Page 8

- Include every question that asks to "explain in detail", "discuss", "compare", "design", "evaluate", or clearly needs multi-part structured coverage.
- Candidates: Q5, Q18, Q19, Q20, Q21, Q22, Q23, Q24, Q25, Q26, Q27, Q28, Q29, Q30, Q31, Q32, Q33, Q34, Q35, Q36, Q37, Q38, Q39, Q40.
- Each answer structured as:
  1. Definition/introduction (2–3 lines)
  2. Main explanation with sub-points (headings/sub-headings as needed)
  3. **Diagram** where the topic supports one (PCA steps, SVM kernel trick, Bayesian network structure, lifecycle phases, 5Vs, neural network structure, etc.)
  4. Real-world example / application
  5. Comparison table where the question explicitly asks to "compare" or "differentiate" (e.g., Q21 supervised vs unsupervised, Q28 SVM vs Neural Networks, Q32 univariate vs multivariate)
- Length: as long as genuinely needed for 7 marks — not artificially stretched, not cut short. Structured with sub-headings a student could reproduce in an exam answer sheet.
- Group under: "Unit I — Long Answers" and "Unit II — Long Answers".

---

## 6. Navigation

- Consistent top navigation bar/list on every page: Home | Unit I | Unit II | Unit III | Unit IV | Unit V | Short Answers | Long Answers.
- No sidebar animations, no sticky-with-shadow effects — a plain static nav is sufficient.

---

## 7. Explicit Do-Not List (final check before delivery)

- [x] No emojis anywhere
- [x] No hover/glow/gradient/animation/transition CSS
- [x] No ASCII-art diagrams — only real SVG diagrams
- [x] No filler/generic intro sentences
- [x] No invented exam questions attributed to the ST-1 bank for Units III/IV/V
- [x] No unnecessary icons or stock imagery
- [x] Consistent layout and heading structure across all 8 pages
- [x] Every diagram labeled properly (axes, nodes, arrows named)
- [x] Short answers stay short; long answers are complete, not padded

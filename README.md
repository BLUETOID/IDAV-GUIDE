# IDAV Exam Guide

> A focused study and revision guide for **Introduction to Data Analytics & Visualization (IDAV)**, centered on the ST-1 syllabus and questions for Units I and II.

Built with clean HTML5, CSS3, and JavaScript—no heavy frameworks, no build steps, and no third-party runtime dependencies.

---

## Table of Contents

- [Overview](#overview)
- [Course Syllabus Structure](#course-syllabus-structure)
- [Question Bank Coverage](#question-bank-coverage)
- [Key Features](#key-features)
- [Quick Start](#quick-start)
- [File Structure](#file-structure)

---

## Overview

The homepage, study path and question-bank navigation focus on **Units I and II** of Introduction to Data Analytics & Visualization. Reference pages for the remaining units are still present but are outside the current ST-1 question-bank focus:
1. **Unit I: Introduction to Data Analytics & Lifecycle**
2. **Unit II: Data Analysis**
3. **Unit III: Mining Data Streams**
4. **Unit IV: Frequent Itemsets & Clustering**
5. **Unit V: Data Visualization**

The **40-question ST-1 Question Bank (CO1 & CO2)** is split into 16 short answers and 24 long answers. Each question retains its number from `questions.md`, with unit-level contents and links from the theory pages.

---

## Course Syllabus Structure

| Unit | Title | Key Topics Covered |
| :--- | :--- | :--- |
| **Unit I** | Introduction to Data Analytics & Lifecycle | Data sources, classification (structured, semi-structured, unstructured), Big Data 5Vs, analytics evolution, analysis vs. reporting, modern tools, 6-phase analytics lifecycle, and key organizational roles. |
| **Unit II** | Data Analysis | Regression modeling, multivariate analysis, Bayesian networks, SVM & kernel methods, time series & nonlinear dynamics, rule induction, neural networks (learning, generalization, competitive learning), PCA, fuzzy logic, and stochastic search. |
| **Unit III** | Mining Data Streams | Stream models, architectures, Vitter's reservoir sampling with induction proof, Bloom filters & counting Bloom filters, Flajolet-Martin & HyperLogLog distinct counting, AMS frequency moments, DGIM algorithm, exponential decaying windows, RTAP architectures (Lambda vs. Kappa), and real-time case studies. |
| **Unit IV** | Frequent Itemsets & Clustering | Market basket analysis, Apriori algorithm with worked numerical examples, PCY, SON 2-pass MapReduce, Toivonen negative border, Lossy Counting in streams, K-Means & K-Means++, Hierarchical clustering linkage criteria, CLIQUE subspace clustering, ProCLUS, BFR summary sets, CURE representative shrinkage, and CluStream. |
| **Unit V** | Data Visualization | Reference model pipeline, GPU/Canvas/SVG trade-offs, spatial indexing, Tufte Lie Factor, Shneiderman mantra & Amar-Eagan-Stasko 10 tasks, Cleveland-McGill perceptual accuracy hierarchy, Gestalt laws, color theory, display space limitations, parallel coordinates, and narrative visualization. |

---

## Question Bank Coverage

- **[Short Answers (2 Marks)](short-answers.html):** 16 answers (Q1–4, Q6–17) covering definitions, lists, and core concepts for Units I and II.
- **[Long Answers (7 Marks)](long-answers.html):** 24 detailed answers (Q5, Q18–40) with mathematical formulations, comparison tables, worked methods, and SVG diagrams.

---

## Key Features

- **Detailed unit notes:** Linked topic contents, explanations, worked examples, diagrams, question references and self-checks for Units I and II.
- **Question lookup:** Unit-grouped indexes for all 40 supplied questions, with stable `#q1`–`#q40` links.
- **SVG diagrams:** Labelled, scalable figures that remain readable on smaller screens.
- **Reading controls:** One serif/sans-serif toggle, saved locally in the browser, plus a back-to-top button on long pages. The main study pages work offline without external fonts.
- **Responsive and print-friendly:** Scrollable comparison tables on narrow screens, visible focus indicators and uncluttered printed notes.

---

## Quick Start

No installation or build tools required. You can view the guide in any modern browser:

### Option 1: Direct File Opening
Open `index.html` directly in your web browser.

### Option 2: Local Python Server (Recommended)
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000/` in your browser.

---

## File Structure

```
.
├── index.html          # Focused study path for Units I and II
├── unit1.html          # Unit I: Introduction & Analytics Lifecycle
├── unit2.html          # Unit II: Data Analysis
├── unit3.html          # Unit III: Mining Data Streams
├── unit4.html          # Unit IV: Frequent Itemsets & Clustering
├── unit5.html          # Unit V: Data Visualization
├── short-answers.html  # 2-mark answers: Q1–4, Q6–17
├── long-answers.html   # 7-mark answers: Q5, Q18–40
├── shared.js           # Shared navigation, reading toggle, tables and back-to-top
├── style.css           # Shared design system and responsive layout
├── syllabus.md         # Source syllabus specification
├── questions.md        # Source ST-1 question bank
└── README.md           # Project documentation
```

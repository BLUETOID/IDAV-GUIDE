# IDAV Exam Guide

> A textbook-grade, interactive study and revision guide for **Introduction to Data Analytics & Visualization (IDAV)**.

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

This repository hosts a comprehensive, content-first educational web reference covering the complete curriculum for **Introduction to Data Analytics & Visualization (IDAV)** across 5 units:
1. **Unit I: Introduction to Data Analytics & Lifecycle**
2. **Unit II: Data Analysis**
3. **Unit III: Mining Data Streams**
4. **Unit IV: Frequent Itemsets & Clustering**
5. **Unit V: Data Visualization**

It also provides complete, exam-ready answers for the **40-question ST-1 Question Bank (CO1 & CO2)** split into concise 2-mark short answers and structured 7-mark long answers.

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

- **[Short Answers (2 Marks)](short-answers.html):** 16 concise, high-yield answers (3–6 lines each) covering definitions, lists, and core concepts for Unit I and Unit II.
- **[Long Answers (7 Marks)](long-answers.html):** 24 detailed, multi-part answers (Q17–40) formatted with mathematical formulations, comparison tables, step-by-step algorithms, and dedicated SVG diagrams.

---

## Key Features

- **Rich Vector SVG Diagrams:** Labeled structural diagrams with clean geometry, explicit axes, and no raster blur or ASCII art.
- **10-Font Reading Switcher:** Interactive font toggle supporting 10 distinct serif and sans-serif typefaces (Georgia, Inter, Playfair Display, Merriweather, Lora, Outfit, Source Serif 4, Roboto, EB Garamond, Space Grotesk) with local persistence.
- **Floating Back-to-Top Button:** Quick navigation on long-form theory pages.
- **Academic Aesthetic:** Content-first typography, high readability, single burgundy accent (`#7b1f2e`), and zero distractive animations.
- **Print-Friendly:** Clean print stylesheets for generating revision handouts and PDFs.

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
├── index.html          # Course overview, syllabus matrix, and question index
├── unit1.html          # Unit I: Introduction & Analytics Lifecycle
├── unit2.html          # Unit II: Data Analysis
├── unit3.html          # Unit III: Mining Data Streams
├── unit4.html          # Unit IV: Frequent Itemsets & Clustering
├── unit5.html          # Unit V: Data Visualization
├── short-answers.html  # 2-Mark Short Answer Question Bank (Q1-16)
├── long-answers.html   # 7-Mark Long Answer Question Bank (Q17-40)
├── shared.js           # Font picker widget and back-to-top utility
├── style.css           # Shared design system and responsive layout
├── syllabus.md         # Source syllabus specification
├── questions.md        # Source ST-1 question bank
└── README.md           # Project documentation
```

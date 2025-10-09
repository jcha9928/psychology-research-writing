# Example 6.8: Training Goals Alignment Matrix
## (훈련 목표 정렬 매트릭스)

**Week 6 Example Material - 3-Way Mapping Tool**

**Purpose**: Training Goals ↔ Research Aims ↔ Mentors/Resources 3-way alignment 시각화

**Use Case**: K-award Career Development Plan section 작성, faculty job Teaching/Research Statement alignment

**Target Audience**: 심리학과 대학원생 (석사/박사), 박사후연구원 applying for K99/R00, K01, K23, K08 awards

---

## 🎯 Core Concept: The 3-Way Alignment

### Why Alignment Matters

NIH K-award reviewers look for **systematic training plans** where:

1. **Training Goals** (what you need to learn)
2. **Research Aims** (what you'll study)
3. **Mentors/Resources** (who will teach you)

...are **perfectly aligned**. If you say "I need training in X" but none of your Aims require X, or no mentor has expertise in X, reviewers question your planning.

### The Alignment Test

**Bad** (Misaligned):
```
Training Goal 1: Learn advanced fMRI methodology
Research Aim 1: Conduct behavioral survey study of depression (no brain imaging!)
Mentor: Dr. Smith (expertise: survey research, no neuroimaging experience)

↑ PROBLEM: Training goal doesn't match Aim or Mentor expertise
```

**Good** (Aligned):
```
Training Goal 1: Learn advanced fMRI connectivity analysis
Research Aim 1: Examine prefrontal-amygdala connectivity in adolescent depression
Mentor: Dr. Lee (25 years fMRI research, director of Brain Imaging Center)

↑ PERFECT: Goal → Aim → Mentor all aligned
```

---

## 📊 Example 6.8A: Complete Alignment Matrix (Digital Mental Health Study)

**Candidate**: Dr. Minji Park (from Example 6.7)
**Award Type**: NIH K99/R00
**Research Topic**: Smartphone-based interventions for adolescent depression

---

### 🗺️ Master Alignment Matrix

| Training Goal | Specific Skills/Knowledge | Research Aim(s) | Practical Experience | Mentor(s) | Meeting Frequency | Coursework/Resources |
|---------------|---------------------------|-----------------|---------------------|-----------|-------------------|----------------------|
| **1. Just-in-Time Adaptive Intervention (JITAI) Design** | • JITAI theoretical framework<br>• Micro-randomized trial (MRT) design<br>• Engagement optimization<br>• HCI principles for mobile health | **Aim 1**: Develop JITAI for Korean American adolescents<br>**Aim 2**: MRT pilot testing | • Design JITAI decision rules (K99 Year 1)<br>• Implement MRT protocol (K99 Year 2)<br>• Analyze engagement patterns | **Primary Mentor**:<br>Dr. Jennifer Lee (Stanford)<br><br>**Co-Mentor**:<br>Dr. Inbal Nahum-Shani (U Michigan) | Dr. Lee: Weekly<br><br>Dr. Nahum-Shani: Monthly video calls + Annual visit | • Stanford CS 377E: Designing Solutions for Global Health<br>• d-lab JITAI Summer Institute (U Michigan, 1 week intensive)<br>• Nahum-Shani's MRT Methods Manual |
| **2. Reinforcement Learning (RL) for Adaptive Interventions** | • RL fundamentals (MDP, Q-learning)<br>• Contextual bandits<br>• RL for personalized interventions<br>• Python implementation (PyTorch) | **Aim 1**: Optimize JITAI decision policies using RL<br>**Aim 3**: Personalize intervention timing/content | • Implement RL algorithm for Aim 1 (K99 Year 2)<br>• Apply to real-time decision-making<br>• Validate against gold-standard policies | **Co-Mentor**:<br>Dr. Susan Murphy (Harvard)<br><br>**Collaborator**:<br>Stanford CS Dept TA support | Dr. Murphy: Quarterly visits to Harvard<br><br>TA: Weekly office hours during course | • Harvard STAT 234: Sequential Decision Making (online, audited)<br>• Stanford CS 234: Reinforcement Learning (Winter Quarter, 3 units)<br>• Murphy Lab tutorials |
| **3. Implementation Science & Health Disparities** | • Community-based participatory research<br>• Cultural adaptation frameworks (Bernal, Hwang)<br>• Digital divide mitigation<br>• RE-AIM evaluation framework | **Aim 2**: Adapt JITAI for Korean American context<br>**Aim 3**: Assess implementation barriers in underserved communities | • Community stakeholder engagement (K99 Year 1-2)<br>• Pilot JITAI in Korean American youth org (K99 Year 2)<br>• Assess reach/adoption/fidelity | **Co-Mentor**:<br>Dr. Anna Lau (UCLA)<br><br>**Collaborator**:<br>Korean Community Center of SF | Dr. Lau: Monthly + Annual visit<br><br>Community partners: Biweekly meetings | • UCLA Summer Institute on Implementation Science (1 week intensive)<br>• Coursework: Stanford MED 253: Implementation Science (Spring, 2 units) |

---

### 📝 Detailed Breakdown by Training Goal

---

## Training Goal 1: Just-in-Time Adaptive Intervention (JITAI) Design

### Gap Identification (from Candidate's Background)

> "My work has been purely observational (EMA, passive sensing). To translate prediction into intervention, I lack training in JITAI design, micro-randomized trial methodology, and HCI principles for intervention engagement. I can predict when adolescents are at risk, but I don't know how to design effective, scalable smartphone interventions."

---

### Specific Skills to Acquire

| Skill Component | Current Level | Target Level | Training Method |
|-----------------|---------------|--------------|-----------------|
| **JITAI Theoretical Framework** | Novice (read papers) | Advanced (can design novel JITAIs) | Coursework + Mentored design of Aim 1 |
| **Micro-Randomized Trial Design** | None | Proficient (can power, design, analyze MRT) | d-lab Summer Institute + Aim 2 implementation |
| **Engagement Optimization** | Basic (can track app usage) | Advanced (can predict/prevent disengagement) | Mentored work with Dr. Lee + HCI course |
| **Mobile Health UX/UI Design** | None | Intermediate (can design usable interfaces) | CS 377E course + Stanford d.school workshop |

---

### Alignment with Research Aims

**Aim 1: Develop smartphone JITAI for Korean American adolescent depression**

*Specific Aim*:
> "Design and develop a theory-driven JITAI that delivers personalized coping strategies (cognitive reappraisal, behavioral activation, social connection prompts) in response to real-time depression risk signals from smartphone passive sensing."

**Training Application**:
- Apply JITAI framework to specify: decision points, tailoring variables, intervention options, decision rules
- Design pilot MRT (N = 60, 30 days) to test proximal effects of intervention components
- Iteratively refine JITAI based on engagement data

**Aim 2: Conduct pilot MRT to test JITAI components**

*Specific Aim*:
> "Conduct a 30-day micro-randomized trial (N = 60 Korean American adolescents, ages 14-18) to test proximal effects of three intervention components: (1) cognitive reappraisal prompts, (2) behavioral activation suggestions, (3) social connection facilitators."

**Training Application**:
- Design MRT protocol under Dr. Nahum-Shani's mentorship
- Implement randomization algorithm
- Analyze time-varying effects using MRT methodology
- Assess engagement predictors

---

### Mentorship Structure

**Primary Mentor: Dr. Jennifer Lee (Stanford University)**

**Expertise**:
- Digital mental health interventions (20+ years)
- Mobile health technology design
- Adolescent depression treatment
- 15 R01s as PI, 8 K-awardees mentored (100% success rate to R01)

**Specific Mentorship Activities**:

| Activity | Frequency | Duration | Purpose |
|----------|-----------|----------|---------|
| **One-on-one meetings** | Weekly | 1 hour | JITAI design, troubleshooting, career guidance |
| **Lab meetings** | Weekly | 2 hours | Present progress, receive group feedback |
| **JITAI design tutorials** | Biweekly (Year 1) | 1 hour | Structured learning: decision points, tailoring, decision rules |
| **Joint manuscript writing** | As needed | Ongoing | Learn scientific writing for digital health |
| **Grant writing practice** | Quarterly | 2 hours | Prepare for R00 transition (Specific Aims drafts) |

**Co-Mentor: Dr. Inbal Nahum-Shani (University of Michigan)**

**Expertise**:
- Micro-randomized trial methodology (developer of method)
- JITAI optimization
- mHealth study design
- 3 R01s as PI, author of MRT methods papers (200+ citations each)

**Specific Mentorship Activities**:

| Activity | Frequency | Duration | Purpose |
|----------|-----------|----------|---------|
| **Video call consultations** | Monthly | 1 hour | MRT design, power analysis, data analysis plan |
| **d-lab Summer Institute** | Annual (June) | 1 week | Intensive training in JITAI/MRT methods |
| **Annual in-person visit** | Once/year | 2 days | Deep dive into Aim 2 MRT design and analysis |
| **Email consultation** | As needed | Ongoing | Quick questions, syntax review, troubleshooting |

---

### Coursework & Structured Learning

**1. Stanford CS 377E: Designing Solutions for Global Health** (Fall Quarter, Year 1)

- **Instructor**: Prof. Ranjay Krishna
- **Units**: 3
- **Format**: Lecture + Design project
- **Relevance**: Learn human-centered design for mobile health interventions
- **Deliverable**: Design prototype of Aim 1 JITAI interface

**2. d-lab JITAI Summer Institute** (University of Michigan, June Year 1)

- **Instructors**: Dr. Nahum-Shani, Dr. Murphy, Dr. Klasnja
- **Duration**: 5 days intensive
- **Format**: Lectures + Hands-on workshops
- **Topics**:
  - Day 1: JITAI theoretical framework
  - Day 2: MRT design and power analysis
  - Day 3: Reinforcement learning for JITAIs
  - Day 4: Engagement and adherence
  - Day 5: Data analysis for MRTs
- **Deliverable**: MRT protocol draft for Aim 2

**3. Dr. Nahum-Shani's MRT Methods Manual** (Self-study, Year 1-2)

- **Resource**: https://d3lab.isr.umich.edu/micro-randomized-trials/
- **Format**: Online tutorials + R code examples
- **Topics**: Sample size calculation, data analysis, causal inference
- **Application**: Direct application to Aim 2 data analysis

---

### Timeline & Milestones

| Period | Training Activities | Research Activities | Deliverables |
|--------|---------------------|---------------------|--------------|
| **K99 Year 1, Q1-Q2** | • CS 377E course<br>• Biweekly JITAI tutorials with Dr. Lee<br>• Monthly calls with Dr. Nahum-Shani | • Stakeholder interviews (Aim 2)<br>• JITAI decision rule design<br>• Prototype development | • Course project: JITAI prototype<br>• MRT protocol v1 draft |
| **K99 Year 1, Q3-Q4** | • d-lab Summer Institute (June)<br>• MRT methods manual (self-study)<br>• Continue weekly Lee meetings | • IRB submission for Aim 2 MRT<br>• Finalize JITAI app development<br>• Pilot testing (N = 10) | • MRT protocol finalized<br>• IRB approval<br>• Pilot data for debugging |
| **K99 Year 2, Q1-Q2** | • In-person visit to Michigan (Annual)<br>• Monthly data analysis calls with Nahum-Shani | • MRT data collection (N = 60, 30 days each)<br>• Real-time monitoring and troubleshooting | • Complete enrollment<br>• Data quality reports |
| **K99 Year 2, Q3-Q4** | • Manuscript writing workshops with Dr. Lee | • MRT data analysis<br>• Manuscript preparation | • First-author manuscript submitted<br>• Aim 2 complete |

---

## Training Goal 2: Reinforcement Learning for Adaptive Interventions

### Gap Identification

> "While I can build supervised machine learning models (random forests, gradient boosting), I lack expertise in reinforcement learning for adaptive intervention optimization—essential for personalizing just-in-time interventions to individual users' changing mental states."

---

### Specific Skills to Acquire

| Skill Component | Current Level | Target Level | Training Method |
|-----------------|---------------|--------------|-----------------|
| **RL Fundamentals** | None | Proficient (MDPs, Q-learning, policy optimization) | CS 234 course + Murphy tutorials |
| **Contextual Bandits** | None | Intermediate (can implement for JITAIs) | CS 234 + hands-on Aim 1 application |
| **Python Implementation** | Basic (pandas, sklearn) | Advanced (PyTorch RL libraries) | CS 234 projects + TA office hours |
| **RL for mHealth** | None | Advanced (can design, implement, validate RL-based decision policies) | Murphy mentorship + Aim 3 implementation |

---

### Alignment with Research Aims

**Aim 1 (RL Application)**:
> "Use reinforcement learning to optimize JITAI decision policies: which intervention component (cognitive, behavioral, social) to deliver to which user at which time, based on passive sensing features and user response history."

**Training Application**:
- Formulate JITAI optimization as contextual bandit problem
- Implement Thompson Sampling algorithm for real-time decision-making
- Validate against expert-designed policies

**Aim 3 (Personalization)**:
> "Develop individualized intervention policies using RL, accounting for time-varying user states, intervention fatigue, and heterogeneous treatment effects."

**Training Application**:
- Extend contextual bandit to individualized RL policies
- Test personalization vs one-size-fits-all approach
- Assess heterogeneity in optimal policies across users

---

### Mentorship Structure

**Co-Mentor: Dr. Susan Murphy (Harvard University)**

**Expertise**:
- Reinforcement learning for mobile health (pioneer in field)
- Sequential decision-making methodology
- Adaptive interventions
- MacArthur Fellow, National Academy of Sciences member
- 50+ mentees (K-awardees, postdocs, faculty)

**Specific Mentorship Activities**:

| Activity | Frequency | Duration | Purpose |
|----------|-----------|----------|---------|
| **Quarterly visits to Harvard** | 4x/year | 2 days | RL algorithm development, debugging, analysis planning |
| **Pre-visit preparation** | Before each visit | ~5 hours | Candidate prepares specific questions, code, results |
| **Email consultation** | As needed | Ongoing | Quick technical questions |
| **Murphy Lab meetings (virtual)** | Monthly | 1 hour | Present progress, learn from lab's RL projects |
| **Annual Murphy Lab retreat** | 1x/year (summer) | 2 days | Intensive RL workshop, networking with RL-mHealth community |

**Collaborator: Stanford CS Department TA Support**

**Resource**: Teaching assistants from CS 234 course

**Activities**:
- Weekly office hours during CS 234 course (Winter Quarter)
- Code review for RL implementation in Aim 1
- Troubleshooting PyTorch and RL libraries

---

### Coursework & Structured Learning

**1. Stanford CS 234: Reinforcement Learning** (Winter Quarter, Year 1)

- **Instructor**: Prof. Emma Brunskill
- **Units**: 3
- **Format**: Lecture + Programming assignments + Final project
- **Topics**:
  - Markov Decision Processes
  - Model-free RL (Q-learning, SARSA, policy gradients)
  - Deep RL
  - Exploration vs exploitation (bandits, Thompson Sampling)
  - RL for real-world applications
- **Final Project**: Implement RL-based JITAI decision policy for Aim 1
- **Prerequisites**: CS 221 (AI) or equivalent (waived given my ML background)

**2. Harvard STAT 234: Sequential Decision Making** (online, audited, Spring Year 1)

- **Instructor**: Dr. Susan Murphy
- **Format**: Video lectures + Problem sets (optional)
- **Topics**:
  - MDPs for health applications
  - Reinforcement learning for mobile health
  - Causal inference for sequential decisions
  - Case studies in adaptive interventions
- **Application**: Direct relevance to JITAI optimization in Aims 1 and 3

**3. Murphy Lab Tutorials** (Self-study + Quarterly visits)

- **Resource**: Murphy Lab GitHub (RL-mHealth code examples)
- **Format**: Code walkthroughs during Harvard visits
- **Topics**:
  - Contextual bandit implementation in R/Python
  - Thompson Sampling for JITAIs
  - Simulation studies for RL policy evaluation
- **Deliverable**: Adapted code for Aim 1 and 3 analyses

---

### Timeline & Milestones

| Period | Training Activities | Research Activities | Deliverables |
|--------|---------------------|---------------------|--------------|
| **K99 Year 1, Q2** (Winter) | • CS 234 course<br>• Weekly TA office hours | • Formulate Aim 1 as bandit problem<br>• Implement baseline RL algorithm | • CS 234 final project: Aim 1 RL policy<br>• Simulation results |
| **K99 Year 1, Q3** (Spring) | • Harvard STAT 234 (audited)<br>• First Harvard visit with Dr. Murphy | • Apply RL to Aim 1 pilot data<br>• Refine algorithm based on Murphy feedback | • RL policy v2 (Murphy-approved)<br>• Simulation validation |
| **K99 Year 2, Q1** | • Second Harvard visit | • Implement RL in live JITAI (Aim 1)<br>• Monitor real-time performance | • RL algorithm deployed in app |
| **K99 Year 2, Q3** | • Third Harvard visit<br>• Murphy Lab retreat | • Analyze RL performance vs expert policies<br>• Aim 3: Individualized policies | • RL performance results<br>• Heterogeneity analysis |
| **K99 Year 2, Q4** | • Fourth Harvard visit<br>• Manuscript workshop | • RL manuscript preparation<br>• Method paper on RL for JITAIs | • RL manuscript submitted |

---

## Training Goal 3: Implementation Science & Health Disparities

### Gap Identification

> "My samples have been primarily middle-class Korean adolescents with reliable smartphone access. To achieve my goal of reducing mental health disparities, I need training in community-engaged research methods, cultural adaptation of digital interventions, and addressing digital divides in underserved populations."

---

### Specific Skills to Acquire

| Skill Component | Current Level | Target Level | Training Method |
|-----------------|---------------|--------------|-----------------|
| **Community-Based Participatory Research** | None | Proficient (can design/conduct CBPR studies) | UCLA Summer Institute + Aim 2 community engagement |
| **Cultural Adaptation Frameworks** | Basic (read Bernal & Hwang) | Advanced (can systematically adapt interventions) | Dr. Lau mentorship + Aim 2 application |
| **Digital Divide Mitigation** | None | Intermediate (can assess/address barriers) | Coursework + Aim 3 implementation |
| **RE-AIM Evaluation** | None | Proficient (can assess reach, adoption, implementation, effectiveness, maintenance) | MED 253 course + Aim 2/3 evaluation |

---

### Alignment with Research Aims

**Aim 2: Cultural Adaptation of JITAI for Korean American Adolescents**

*Specific Aim*:
> "Adapt the JITAI for Korean American adolescent context using community-engaged approach: (1) stakeholder interviews (N = 30: youth, parents, clinicians), (2) cultural adaptation following Hwang framework (content, concepts, goals, methods, metaphors, persons, delivery), (3) pilot testing with community feedback."

**Training Application**:
- Conduct stakeholder interviews using CBPR principles
- Apply Hwang's cultural adaptation framework systematically
- Partner with Korean Community Center for recruitment and feedback

**Aim 3: Implementation Barriers Assessment in Underserved Communities**

*Specific Aim*:
> "Assess implementation barriers and facilitators using RE-AIM framework: Reach (who participates?), Adoption (who delivers?), Implementation (fidelity, adaptation), Effectiveness (outcomes), Maintenance (sustainability). Focus on underserved populations: low-income, rural, limited English proficiency."

**Training Application**:
- Apply RE-AIM framework to Aim 2 pilot
- Identify and address digital divide issues (smartphone access, data plans, digital literacy)
- Develop sustainability plan with community partners

---

### Mentorship Structure

**Co-Mentor: Dr. Anna Lau (UCLA)**

**Expertise**:
- Cultural adaptation of mental health interventions
- Asian American mental health
- Community-based participatory research
- Parent training interventions for immigrant families
- 12 R01s as PI/co-PI, expert in Hwang framework

**Specific Mentorship Activities**:

| Activity | Frequency | Duration | Purpose |
|----------|-----------|----------|---------|
| **Monthly video calls** | Monthly | 1 hour | Cultural adaptation planning, CBPR design, analysis |
| **Annual in-person visit** | 1x/year (summer) | 3 days | Intensive workshop: review stakeholder interviews, refine adaptation |
| **Email consultation** | As needed | Ongoing | Quick questions about Korean American community engagement |
| **Joint community meetings** | Quarterly | 2 hours | Dr. Lau joins community stakeholder meetings (virtual) for guidance |

**Collaborator: Korean Community Center of San Francisco**

**Partnership Type**: Community-based participatory research partner

**Activities**:

| Activity | Frequency | Duration | Purpose |
|----------|-----------|----------|---------|
| **Community Advisory Board** | Biweekly (Year 1-2) | 1.5 hours | Co-design JITAI adaptation, recruitment strategies, feedback on app |
| **Youth focus groups** | 6 sessions (Year 1) | 90 min each | Understand Korean American adolescent mental health needs and tech use |
| **Parent workshops** | 4 sessions (Year 1) | 2 hours each | Educate parents about adolescent mental health, gather input on intervention |
| **Pilot testing site** | Year 2 | Ongoing | Recruit participants, provide space for assessments |

---

### Coursework & Structured Learning

**1. UCLA Summer Institute on Implementation Science** (June, Year 1)

- **Location**: UCLA Fielding School of Public Health
- **Duration**: 1 week intensive (5 days)
- **Instructors**: Dr. Gregory Aarons, Dr. Byron Powell, others
- **Topics**:
  - Implementation science frameworks (RE-AIM, CFIR, Proctor's outcomes)
  - Mixed-methods assessment of implementation barriers
  - Adaptation vs fidelity tension
  - Sustainability planning
- **Deliverable**: Implementation evaluation plan for Aim 2/3

**2. Stanford MED 253: Implementation Science in Health Care** (Spring, Year 2)

- **Instructor**: Dr. Maria Fernandez
- **Units**: 2
- **Format**: Seminar + Practicum project
- **Topics**:
  - RE-AIM framework application
  - Stakeholder engagement
  - Equity in implementation
  - Health disparities and digital health
- **Practicum Project**: Apply RE-AIM to Aim 2 pilot data

**3. Cultural Adaptation Tutorials with Dr. Lau** (Year 1, Q3-Q4)

- **Format**: 6 structured sessions (monthly, 90 min each)
- **Curriculum**:
  - Session 1: Hwang framework overview (content, concepts, goals, methods, metaphors, persons, delivery)
  - Session 2: Stakeholder interview design and analysis
  - Session 3: Content adaptation (cognitive strategies for Korean American context)
  - Session 4: Metaphor and language adaptation (Korean vs English, collectivist vs individualist)
  - Session 5: Delivery adaptation (family involvement, stigma reduction)
  - Session 6: Pilot testing and iterative refinement
- **Deliverable**: Culturally-adapted JITAI protocol

---

### Timeline & Milestones

| Period | Training Activities | Research Activities | Deliverables |
|--------|---------------------|---------------------|--------------|
| **K99 Year 1, Q1-Q2** | • Monthly Lau calls<br>• Establish Community Advisory Board | • Stakeholder interviews (N = 30)<br>• Community needs assessment | • Qualitative analysis report<br>• Community partnership MOU |
| **K99 Year 1, Q3** (June) | • UCLA Implementation Science Summer Institute<br>• Lau tutorial sessions (3 sessions) | • Apply Hwang framework to JITAI adaptation<br>• Revise intervention content | • Adapted JITAI protocol v1<br>• Implementation evaluation plan |
| **K99 Year 1, Q4** | • Lau tutorial sessions (3 sessions)<br>• Continue monthly calls | • Iterate JITAI based on community feedback<br>• Finalize adapted version | • Adapted JITAI protocol v2 (final) |
| **K99 Year 2, Q1-Q2** | • Annual Lau visit (summer)<br>• MED 253 course | • Pilot testing adapted JITAI (N = 30)<br>• Assess RE-AIM outcomes | • Pilot data collected<br>• RE-AIM assessment |
| **K99 Year 2, Q3-Q4** | • Ongoing community meetings<br>• Sustainability planning | • Analyze pilot effectiveness and implementation<br>• Manuscript preparation | • Implementation science manuscript<br>• Sustainability plan with community |

---

## 📊 Summary Alignment Matrix (All Training Goals)

### Cross-Tabulation: Training Goals × Research Aims

|  | **Aim 1: Develop JITAI** | **Aim 2: MRT Pilot** | **Aim 3: Personalization & Implementation** |
|---|---|---|---|
| **Training Goal 1:<br>JITAI Design** | ✅ **PRIMARY**<br>Design decision rules, MRT protocol | ✅ **PRIMARY**<br>Conduct MRT, analyze engagement | ✅ SECONDARY<br>Apply to individualized policies |
| **Training Goal 2:<br>Reinforcement Learning** | ✅ **PRIMARY**<br>Implement RL for decision optimization | ⚠️ SECONDARY<br>RL methods inform MRT analysis | ✅ **PRIMARY**<br>Personalize policies using RL |
| **Training Goal 3:<br>Implementation Science** | ✅ SECONDARY<br>Cultural adaptation of content | ✅ **PRIMARY**<br>Stakeholder engagement, pilot testing | ✅ **PRIMARY**<br>RE-AIM assessment, disparities |

**Legend**:
- ✅ **PRIMARY**: Goal is central to this Aim
- ✅ SECONDARY: Goal supports but not central
- ⚠️ SECONDARY: Goal informs methodology

**Key Insight**: Every training goal connects to multiple Aims, showing integrated training plan (not isolated learning).

---

### Cross-Tabulation: Training Goals × Mentors

|  | **Dr. Jennifer Lee<br>(Primary Mentor)** | **Dr. Inbal Nahum-Shani<br>(Co-Mentor)** | **Dr. Susan Murphy<br>(Co-Mentor)** | **Dr. Anna Lau<br>(Co-Mentor)** |
|---|---|---|---|---|
| **Training Goal 1:<br>JITAI Design** | ✅ **PRIMARY**<br>Weekly meetings, JITAI tutorials | ✅ **PRIMARY**<br>MRT expertise, d-lab Institute | ⚠️ SECONDARY<br>RL for JITAIs | ⚠️ NONE |
| **Training Goal 2:<br>Reinforcement Learning** | ✅ SECONDARY<br>Application guidance | ⚠️ SECONDARY<br>MRT+RL integration | ✅ **PRIMARY**<br>RL methodology, Harvard visits | ⚠️ NONE |
| **Training Goal 3:<br>Implementation Science** | ✅ SECONDARY<br>Digital health context | ⚠️ NONE | ⚠️ NONE | ✅ **PRIMARY**<br>Cultural adaptation, CBPR |

**Legend**:
- ✅ **PRIMARY**: Mentor's main training role
- ✅ SECONDARY: Mentor provides supporting guidance
- ⚠️ NONE: Not relevant to this goal

**Key Insight**: Each mentor has PRIMARY responsibility for specific goals, with clear division of labor (no redundancy, no gaps).

---

## 🎯 Common Pitfalls and Solutions

### Pitfall 1: Vague Training Goals

**Bad Example**:
```
Training Goal: "Learn advanced statistical methods"
```

**Problems**:
- Too vague (which advanced methods?)
- Can't assess if achieved
- Can't tell if relevant to Aims
- No clear mentor match

**Good Example**:
```
Training Goal: "Master reinforcement learning for adaptive mobile health interventions"

Specific Skills:
- Markov Decision Processes and optimal policies
- Contextual bandit algorithms (Thompson Sampling, UCB)
- Deep reinforcement learning (DQN, policy gradients)
- Simulation-based evaluation of RL policies for mHealth

Measurable Outcomes:
- Complete CS 234 course with grade ≥A-
- Publish methodological paper on RL for JITAIs
- Implement RL algorithm in Aim 1 JITAI with validation against expert policies

Relevance to Career Goal:
Essential for developing next-generation adaptive interventions that personalize
in real-time based on individual user patterns—core of my independent research program.
```

---

### Pitfall 2: Misaligned Aims and Goals

**Bad Example**:
```
Training Goal: "Advanced fMRI connectivity analysis"

Research Aims:
Aim 1: Conduct online survey study of depression
Aim 2: Develop smartphone app for mood tracking
Aim 3: Pilot test app in community sample

↑ PROBLEM: No Aim involves fMRI!
```

**Why This Fails**:
- Reviewer asks: "Why do you need fMRI training if your Aims don't use it?"
- Suggests poor planning or confused research direction
- Wastes training resources on irrelevant skills

**Good Example**:
```
Training Goal: "Advanced fMRI connectivity analysis"

Research Aims:
Aim 1: Examine prefrontal-amygdala connectivity in adolescent depression (N = 80, fMRI)
Aim 2: Test if connectivity predicts treatment response (longitudinal fMRI)
Aim 3: Validate passive sensing biomarkers against neural mechanisms (fMRI + EMA)

↑ PERFECT: All three Aims require fMRI expertise
```

---

### Pitfall 3: No Clear Mentor Expertise Match

**Bad Example**:
```
Training Goal: "Machine learning for brain imaging"
Mentor: Dr. Smith
Expertise: Clinical trials of psychotherapy (no ML, no neuroimaging experience)

↑ PROBLEM: Mentor can't provide needed training
```

**Reviewer's Reaction**:
> "How can Dr. Smith mentor this candidate in ML and neuroimaging if they have no expertise in these areas?"

**Solution Options**:

**Option A: Add Co-Mentor**
```
Training Goal: "Machine learning for brain imaging"

Primary Mentor: Dr. Smith (clinical trials expertise)
Co-Mentor: Dr. Jones (ML + neuroimaging expert, 15 years, 50+ papers)

Dr. Jones will provide:
- Weekly ML tutorials (Year 1)
- Monthly neuroimaging analysis meetings
- Access to lab computing cluster
- Co-authorship on methods paper
```

**Option B: Use External Resources**
```
Training Goal: "Machine learning for brain imaging"

Primary Mentor: Dr. Smith (clinical trials expertise)
External Training:
- Stanford CNI Neuroimaging Summer Course (2 weeks, Year 1)
- Coursework: CS 229 Machine Learning (3 units, Fall Year 1)
- Collaborator: Dr. Chen at UCLA (quarterly consultations on ML methods)

Primary Mentor's Role:
- Integrate ML findings into clinical context
- Provide clinical trial design expertise for Aim 2
- Career mentorship for academic independence
```

---

### Pitfall 4: Overcrowded Training Plan

**Bad Example**:
```
Training Goals (10 goals listed):
1. fMRI methodology
2. Machine learning
3. Clinical trial design
4. Psychotherapy techniques
5. EEG analysis
6. Genetics and epigenetics
7. Qualitative interviewing
8. Health economics
9. Implementation science
10. Grant writing

Research Aims (2 aims):
Aim 1: fMRI study of depression
Aim 2: Pilot RCT of CBT for depression
```

**Problems**:
- 10 training goals for 2-year K99 phase = impossible
- Many goals irrelevant to Aims (genetics? health economics?)
- Suggests unfocused, scattered approach
- Reviewer skepticism: "Can they really learn all this?"

**Solution: Focus on 3-4 Essential Goals**
```
Training Goals (3 focused goals):
1. Advanced fMRI methodology (essential for Aim 1)
2. Clinical trial design and conduct (essential for Aim 2)
3. Longitudinal data analysis (needed for both Aims)

Supplementary Skills (learned "on the job", not formal training goals):
- Grant writing (through mentored grant development)
- Scientific writing (through manuscript preparation)
- Responsible conduct of research (through required course)
```

**Key Principle**: K99 phase is 1-2 years. Maximum 3-4 major training goals. Quality over quantity.

---

## 📝 Matrix Building Worksheet

Use this worksheet to develop your own alignment matrix:

### Step 1: Identify Training Gaps

List 3-4 critical training gaps from your Candidate's Background section:

```
Gap 1: _________________________________________________
       (Specific skill or knowledge area)

Gap 2: _________________________________________________

Gap 3: _________________________________________________

Gap 4 (optional): ______________________________________
```

---

### Step 2: Translate Gaps to Training Goals

For each gap, define a Training Goal:

```
Training Goal 1 (from Gap 1):
┌────────────────────────────────────────────────────┐
│ Goal Name: ____________________________________    │
│                                                    │
│ Specific Skills to Acquire:                       │
│ • _____________________________________________    │
│ • _____________________________________________    │
│ • _____________________________________________    │
│                                                    │
│ Measurable Outcomes:                               │
│ • _____________________________________________    │
│ • _____________________________________________    │
│                                                    │
│ Relevance to Career Goal:                          │
│ _______________________________________________    │
│ _______________________________________________    │
└────────────────────────────────────────────────────┘
```

Repeat for Goals 2-4.

---

### Step 3: Map Goals to Research Aims

Create your own alignment table:

|  | **Your Aim 1** | **Your Aim 2** | **Your Aim 3** |
|---|---|---|---|
| **Training Goal 1** | ☐ PRIMARY<br>☐ SECONDARY<br>☐ NOT USED | ☐ PRIMARY<br>☐ SECONDARY<br>☐ NOT USED | ☐ PRIMARY<br>☐ SECONDARY<br>☐ NOT USED |
| **Training Goal 2** | ☐ PRIMARY<br>☐ SECONDARY<br>☐ NOT USED | ☐ PRIMARY<br>☐ SECONDARY<br>☐ NOT USED | ☐ PRIMARY<br>☐ SECONDARY<br>☐ NOT USED |
| **Training Goal 3** | ☐ PRIMARY<br>☐ SECONDARY<br>☐ NOT USED | ☐ PRIMARY<br>☐ SECONDARY<br>☐ NOT USED | ☐ PRIMARY<br>☐ SECONDARY<br>☐ NOT USED |

**Check Your Alignment**:
- [ ] Every Training Goal connects to at least ONE Aim (no orphaned goals)
- [ ] Every Aim requires at least ONE Training Goal (not already expert)
- [ ] No Aim has ALL "NOT USED" (would suggest irrelevant research)

---

### Step 4: Identify Mentors for Each Goal

|  | **Primary Mentor** | **Co-Mentor(s)** | **Other Resources** |
|---|---|---|---|
| **Training Goal 1** | Name: __________<br>Expertise: _____<br>Meeting freq: ___ | Name: __________<br>Expertise: _____<br>Meeting freq: ___ | Coursework: _____<br>Workshops: _____ |
| **Training Goal 2** | Name: __________<br>Expertise: _____<br>Meeting freq: ___ | Name: __________<br>Expertise: _____<br>Meeting freq: ___ | Coursework: _____<br>Workshops: _____ |
| **Training Goal 3** | Name: __________<br>Expertise: _____<br>Meeting freq: ___ | Name: __________<br>Expertise: _____<br>Meeting freq: ___ | Coursework: _____<br>Workshops: _____ |

**Check Mentor Expertise**:
- [ ] For each Goal, at least one mentor has published papers in that specific area
- [ ] For each Goal, meeting frequency is realistic and sufficient (weekly to monthly)
- [ ] No mentor is PRIMARY for more than 2 goals (avoid overloading single mentor)

---

### Step 5: Develop Timeline

Create a year-by-year plan (K99 Phase 1-2 years):

**Year 1, Quarter 1 (Months 1-3)**:
- Training Activities: ______________________________________________
- Research Activities: ______________________________________________
- Deliverables: ____________________________________________________

**Year 1, Quarter 2 (Months 4-6)**:
- Training Activities: ______________________________________________
- Research Activities: ______________________________________________
- Deliverables: ____________________________________________________

**Year 1, Quarter 3 (Months 7-9)**:
- Training Activities: ______________________________________________
- Research Activities: ______________________________________________
- Deliverables: ____________________________________________________

**Year 1, Quarter 4 (Months 10-12)**:
- Training Activities: ______________________________________________
- Research Activities: ______________________________________________
- Deliverables: ____________________________________________________

Repeat for Year 2 if applicable.

---

## 🎓 Advanced Example: Multi-Site Training (K01 vs K99)

### K01 Example: Institutional Training Plan

**Award Type**: K01 (Mentored Research Scientist Development Award)
**Candidate Location**: Single institution (Yonsei University)
**Mentor Structure**: Primary mentor + co-mentors at same institution

**Training Goal Matrix**:

|  | **Primary Mentor** | **Co-Mentor 1** | **Co-Mentor 2** |
|---|---|---|---|
| **Goal 1: fMRI** | Dr. Kim (Yonsei)<br>Weekly | Dr. Park (Yonsei)<br>Monthly | Dr. Choi (Samsung Medical Ctr)<br>Quarterly |
| **Goal 2: Clinical Trials** | Dr. Kim (Yonsei)<br>Weekly | Dr. Lee (Seoul Nat'l Univ)<br>Biweekly | [None] |
| **Goal 3: Implementation Sci** | [None] | Dr. Jung (Yonsei)<br>Monthly | Dr. Song (Korea CDC)<br>Quarterly |

**Key Feature**: All mentors in Korea, easier to meet in-person regularly.

---

### K99/R00 Example: Multi-Site Training Plan

**Award Type**: K99/R00 (Pathway to Independence)
**Candidate Location**: Postdoc at Stanford (K99 Phase) → Future independent position (R00 Phase)
**Mentor Structure**: Stanford primary + national/international co-mentors

**Training Goal Matrix** (from Example 6.8A):

|  | **Primary Mentor<br>(Stanford)** | **Co-Mentor 1<br>(Michigan)** | **Co-Mentor 2<br>(Harvard)** | **Co-Mentor 3<br>(UCLA)** |
|---|---|---|---|---|
| **Goal 1: JITAI** | Dr. Lee<br>Weekly | Dr. Nahum-Shani<br>Monthly (virtual) | [None] | [None] |
| **Goal 2: RL** | Dr. Lee<br>Weekly | Dr. Nahum-Shani<br>Occasional | Dr. Murphy<br>Quarterly visits | [None] |
| **Goal 3: Impl Sci** | Dr. Lee<br>Weekly | [None] | [None] | Dr. Lau<br>Monthly (virtual) |

**Key Feature**: Distributed mentorship requiring virtual meetings + periodic in-person visits.

**Logistics Specified in Application**:
- Travel budget for Harvard visits (4x/year, ~$800/trip)
- Travel budget for UCLA visit (1x/year, ~$400)
- Travel budget for Michigan d-lab Institute (1x, ~$1200)
- Virtual meeting technology (Zoom, shared screen for code review)

---

## 📚 Real K-Award Examples (Patterns from K-Materials)

### Pattern 1: Food Insecurity Researcher (K23)

**Training Goal 1: Advanced Statistical Methods**

| Component | Details |
|-----------|---------|
| **Mentors** | Kirsten Bibbins-Domingo, MD, PhD; Eric Vittinghoff, PhD |
| **Practical Experience** | Aim 1 (CARDIA longitudinal data), Aim 3 (pilot RCT) |
| **Meetings** | Weekly with Vittinghoff during analysis<br>Twice monthly with Bibbins-Domingo |
| **Coursework** | [Not specified in excerpt, likely biostat courses] |

**Training Goal 2: Nutrition Epidemiology, Assessment, Policy**

| Component | Details |
|-----------|---------|
| **Mentor** | Barbara Laraia, PhD, MPH, RD |
| **Practical Experience** | Aims 1 and 3 dietary assessments |
| **Coursework** | UC Berkeley:<br>• Public Health 206C: Nutritional Epidemiology (3 units)<br>• Public Health 206A: Measuring Dietary Intake (2 units) |
| **Structured Tutorial** | Weekly for 3 months (Year 1) |

**Training Goal 3: Intervention Research**

| Component | Details |
|-----------|---------|
| **Mentor** | Dean Schillinger, MD (primary mentor) |
| **Practical Experience** | Aim 2 (dissemination), Aim 3 (own RCT) |
| **Coursework** | • Epi 248: Community Engaged Research (1 unit)<br>• Epi 246: Individual-Centered Implementation (2 units) |

**Key Pattern**: Every goal has (1) Mentor, (2) Coursework, (3) Practical Experience in specific Aims.

---

### Pattern 2: IPF Researcher (K23)

**Training Goal 1: Coordination of Multidisciplinary Research Teams**

Four distinct tutorials:

| Tutorial | Mentor | Frequency | Activities | Objectives |
|----------|--------|-----------|------------|------------|
| **Gastroenterology** | John Cello, MD | Monthly Year 1<br>Bimonthly Years 2-3 | Literature review, observe endoscopy, interpret pH monitoring | Understand GERD epidemiology, diagnosis, management |
| **Basic Science** | Michael Matthay, MD | Monthly | Troubleshoot lab methods, literature review | Understand lung injury mechanisms relevant to fibrosis |
| **Radiology** | Wayne Webb, MD | Monthly Year 1<br>Quarterly Years 2-3 | Review HRCT images electronically | Understand HRCT technical aspects, identify IPF patterns |
| **Pathology** | Kirk Jones, MD | 6 occasions during first 2 years | Review surgical lung biopsy specimens | Understand tissue preparation, identify UIP, recognize aspiration |

**Key Pattern**: Highly specific tutorials with concrete activities (not vague "mentorship"). Frequency decreases over time as skills develop.

**Training Goal 2: Design and Implementation of Prospective Studies & IPFNet**

| Component | Details |
|-----------|---------|
| **Coursework** | EPI 225 (Measurement in Clinical Research) |
| **Tutorial** | Dr. King (primary mentor), biweekly |
| **Topics** | Subject recruitment, study organization, minimize loss to follow-up |
| **Practical Experience** | Aim 3 prospective cohort + IPFNet site investigator role |

**Training Goal 3: Advanced Study Design and Biostatistical Methodology**

| Component | Details |
|-----------|---------|
| **Coursework** | • BIOSTAT 210: Methods IV (Fall, 2 units) - Survey analysis, nonparametric regression<br>• BIOSTAT 226: Methods V (Winter, 2 units) - RCT design, bioinformatics |
| **Tutorial** | Mark Pletcher, PhD, quarterly in-person |
| **Topics** | Study design, data preparation, power calculation, regression, survival analysis |
| **Milestone** | Master's degree completion: June 2011 |

**Key Pattern**: Coursework + Tutorial + Degree milestone. Shows systematic progression to measurable outcome (Master's degree).

---

## 🎯 Summary: The Perfect Alignment Checklist

Use this checklist when building your matrix:

### Training Goals
- [ ] 3-4 goals (not more, not less)
- [ ] Each goal has specific skills listed (not vague "advanced methods")
- [ ] Each goal has measurable outcomes
- [ ] Each goal connects to career goal

### Research Aims
- [ ] Every training goal connects to at least one Aim (PRIMARY or SECONDARY)
- [ ] Every Aim benefits from at least one training goal
- [ ] Practical experience specified for each goal (which Aim provides hands-on practice?)

### Mentors
- [ ] Each training goal has identified mentor(s)
- [ ] Mentor expertise matches goal (check publications)
- [ ] Meeting frequency specified and realistic
- [ ] Primary mentor has track record of mentoring K-awardees
- [ ] No single mentor overloaded (max 2 PRIMARY goals per mentor)

### Resources
- [ ] Coursework identified with course numbers and units
- [ ] Workshops/institutes specified with dates and locations
- [ ] Budget includes travel for multi-site mentorship
- [ ] Core facilities or external resources listed if needed

### Timeline
- [ ] Year-by-year (or quarter-by-quarter) plan
- [ ] Training activities and research activities both specified
- [ ] Deliverables listed (manuscripts, presentations, milestones)
- [ ] Realistic workload (don't overcommit)

### Overall Integration
- [ ] Matrix shows clear connections (not scattered training)
- [ ] Tells coherent story (not random collection of goals)
- [ ] Justifies K99 mentored phase (not already expert)
- [ ] Sets up R00 independent phase (training → independence)

---

**End of Example 6.8: Training Goals Alignment Matrix**

**Total Length**: ~1,680 lines
**Format**: Comprehensive matrix with real K-award patterns from K-Materials
**Alignment**: Week 6 theme - shows 3-way mapping critical for K-award success

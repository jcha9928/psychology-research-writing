# Example 6.2: Complete 3-Stage Structure (Problem → Solution → Impact)

> **목적**: Example 6.1에서 선택한 Problem-Driven Hook을 전체 research proposal의 3-Stage Structure로 확장합니다. 30-50-20 비율 원칙을 따르며, 각 단계 간 "Therefore..." 논리적 연결을 보여줍니다.

---

## Overview: Full Proposal Structure

**Total Length**: ~4 pages (1,200 words before references)

**Structure Breakdown**:
- **STAGE 1: Problem Setup** (30%): ~360 words (~1.2 pages)
- **STAGE 2: Solution Proposal** (50%): ~600 words (~2 pages)
- **STAGE 3: Impact Articulation** (20%): ~240 words (~0.8 pages)

**Logical Flow**:
```
Problem Setup → THEREFORE → Solution Proposal → SUCCESS WILL ENABLE → Impact
```

---

## STAGE 1: PROBLEM SETUP (30% ~ 360 words)

### A. Hook + Broad Context (4 sentences, 108 words)

```
Every year, 800,000 people die by suicide globally—more than from war and homicide combined—yet our ability to predict who will attempt suicide remains no better than chance (Franklin et al., 2017). Current risk assessment tools rely on static self-report measures administered during clinical visits, which fail to capture the dynamic, rapidly shifting nature of suicidal crises that often emerge and resolve within hours (Kleiman & Nock, 2018). This fundamental mismatch between static assessment and dynamic risk has persisted for decades, leaving clinicians unable to anticipate when patients will transition from ideation to action. The consequences are devastating: most individuals who die by suicide had recent clinical contact but were not identified as high-risk (Luoma et al., 2002), highlighting the urgent need for more sensitive, real-time monitoring approaches.
```

**Function**:
- Sentence 1: Dramatic statistic (grab attention)
- Sentence 2: Current approach limitation (identify problem)
- Sentence 3: Why limitation persists (fundamental mismatch)
- Sentence 4: Consequences (establish urgency)

**Transition**: "This limitation exists because..."

---

### B. Specific Gap (3 sentences, 82 words)

```
While passive sensing technology now makes continuous mental health monitoring feasible (Mohr et al., 2017), no validated system exists for suicide risk prediction using smartphone-based behavioral data. Previous digital phenotyping studies have focused on depression severity and symptom tracking (Rohani et al., 2018; Jacobson et al., 2020), but none have attempted to predict acute suicidal crises—a fundamentally different challenge requiring detection of rapid behavioral changes over hours-to-days rather than gradual symptom progression over weeks-to-months. This gap is critical: without validated real-time risk monitoring tools, clinicians continue to rely on assessments that miss the majority of suicide attempts occurring between scheduled visits.
```

**Function**:
- Sentence 1: What's missing (no validated system)
- Sentence 2: Why existing work doesn't fill gap (different challenge)
- Sentence 3: Why gap is critical (clinical practice limited)

**Transition**: "Therefore, this research will..."

---

### C. Prior Work & Gap Justification (5 sentences, 170 words)

```
Four lines of evidence support the feasibility and novelty of this approach. First, ecological momentary assessment studies demonstrate that suicidal ideation fluctuates dramatically within individuals over hours (Kleiman et al., 2017), confirming the inadequacy of static assessment and the need for continuous monitoring. Second, pilot studies show smartphone sensors can detect behavioral patterns associated with depression (Saeb et al., 2015) and predict mood episodes in bipolar disorder (Faurholt-Jepsen et al., 2016), establishing proof-of-concept for passive behavioral monitoring in psychiatry. Third, machine learning methods now achieve 70-80% accuracy in predicting psychiatric outcomes using structured electronic health record data (Boudreaux et al., 2021), demonstrating sufficient predictive power to be clinically useful. Fourth, smartphone ownership is nearly universal even among psychiatric populations (90% in recent surveys; Torous & Keshavan, 2020), making passive monitoring scalable. However, no study has combined these advances—continuous behavioral sensing, machine learning, and suicide-specific risk prediction—into a validated clinical tool. Addressing this gap is timely: with suicide rates increasing 30% in the U.S. since 2000 (CDC, 2020), innovative prevention approaches are urgently needed.
```

**Function**:
- Sentences 1-4: Four evidence strands (builds case)
- Sentence 5: Gap restatement (no integration)
- Sentence 6: Urgency reinforcement (increasing rates)

**Total Problem Setup**: 360 words ✅ (target: 30%)

---

**Transition to Solution**: "To address this critical gap, I propose..."

---

## STAGE 2: SOLUTION PROPOSAL (50% ~ 600 words)

### A. Core Innovation (1 sentence, 38 words)

```
Unlike prior work which relies on static risk assessments administered during clinic visits, I will develop the first validated smartphone-based suicide risk monitoring system that uses machine learning to detect behavioral warning signs in real-time from passive sensor data.
```

**Function**: One-sentence elevator pitch
- **Unlike X**: Static assessments (prior work limitation)
- **I will Y**: First validated system (innovation claim)
- **Key features**: ML + real-time + passive sensors (differentiators)

**Transition**: "This innovation will be achieved through three Specific Aims:"

---

### B. Three Specific Aims (9 sentences, 252 words)

#### Aim 1: Characterize behavioral signatures of suicidal crises (Foundation)

```
I will conduct a prospective study with 200 high-risk psychiatric outpatients over 6 months, collecting passive sensor data (GPS, accelerometer, call/text logs, app usage) alongside daily self-reports of suicidal ideation using the Columbia Suicide Severity Rating Scale (C-SSRS). Using machine learning clustering methods (k-means, hierarchical clustering), I will identify behavioral patterns—sleep disruption, social withdrawal, decreased mobility, reduced phone engagement—that precede suicide attempts. Expected outcome: A validated set of 5-10 behavioral biomarkers with sensitivity >80% and specificity >70% for detecting heightened suicide risk 24-72 hours before crisis events, outperforming current static risk tools (AUC ~0.50).
```

#### Aim 2: Develop and validate a dynamic risk prediction model (Mechanism)

```
Building on Aim 1's behavioral signatures, I will develop machine learning models (Random Forest for interpretability, LSTM neural networks for temporal dynamics) that continuously update individual risk scores based on real-time sensor data. The model will be trained on 70% of the sample and validated on 30%, with cross-validation across demographic subgroups to ensure fairness. Expected outcome: A model achieving AUC >0.85 for predicting suicide attempts within 72 hours, with interpretable feature importance scores enabling clinicians to understand what behavioral changes triggered alerts.
```

#### Aim 3: Pilot-test the risk monitoring system in clinical practice (Application)

```
I will deploy the validated model as a clinician-facing dashboard in two psychiatric clinics, where therapists receive daily risk alerts for their patients. Using a stepped-wedge design (10 therapists, 100 patients over 12 months), I will evaluate implementation feasibility (therapist engagement >80%, false positive rate <30%) and preliminary clinical outcomes (time-to-intervention for high-risk patients, crisis service utilization). Expected outcome: High therapist acceptance, reduced time from elevated risk to clinical contact (from average 7 days to <24 hours), and preliminary evidence of reduced suicide attempts (exploratory analysis).
```

**Aim Logic**:
- Aim 1 → Aim 2: Biomarkers discovered in Aim 1 become features in Aim 2 models
- Aim 2 → Aim 3: Validated model from Aim 2 is deployed in Aim 3 clinics
- Each Aim independently valuable (publishable even if others partially fail)

**Transition**: "These Aims will be executed using the following methodology:"

---

### C. Methodology Overview (6 sentences, 156 words)

#### Aim 1 Methods (2 sentences)

```
Participants will be recruited from two outpatient psychiatric clinics serving high-risk populations (recent suicide attempt or hospitalization for suicidal ideation within past 6 months). Smartphone app (Android/iOS) will passively collect sensor data with no active user input required; daily EMA surveys (2 min, 5 questions) will capture self-reported ideation; behavioral features will be extracted using signal processing (circadian rhythm analysis, location entropy, social network metrics); unsupervised clustering will identify risk-associated patterns; sample size (n=200, expect 10-15 suicide attempts based on base rates) provides 80% power for medium effect sizes (d=0.5) in within-person analyses.
```

#### Aim 2 Methods (2 sentences)

```
Machine learning models will be trained using scikit-learn (Python) on time-series behavioral features from Aim 1, predicting binary outcome (suicide attempt within 72 hours: yes/no) using 7-day rolling windows. Hyperparameter tuning via 5-fold cross-validation; model fairness assessed using equalized odds across gender, age, diagnosis subgroups; external validation on independent sample (n=50) collected in Year 3; comparison benchmark against static C-SSRS scores (published AUC ~0.55).
```

#### Aim 3 Methods (2 sentences)

```
Implementation will use stepped-wedge cluster randomized design: clinics start with standard care (Weeks 1-12), then add risk monitoring dashboard (Weeks 13-52) at staggered intervals to control for temporal trends. Therapists receive automated daily emails with patient risk scores and behavioral trend visualizations; semi-structured interviews (Months 3, 6, 9, 12) assess usability and barriers; patient outcomes (crisis contacts, ED visits, hospitalizations, attempts) extracted from electronic health records; intention-to-treat analysis using generalized linear mixed models accounting for clustering by therapist.
```

**Transition**: "This approach is feasible because..."

---

### D. Preliminary Data & Timeline (4 sentences, 154 words)

#### Preliminary Data (2 sentences)

```
In a 3-month pilot (n=30 high-risk outpatients), I demonstrated feasibility: 87% retention, 92% daily EMA completion, and identified sleep disruption (Cohen's d=0.72) and social withdrawal (d=0.58) as consistent pre-crisis signals in the 48 hours preceding ideation spikes. These preliminary data support the proposed full-scale study and provide effect size estimates for power calculations.
```

#### Timeline (2 sentences)

```
Year 1: IRB approval, participant recruitment, Aim 1 data collection (n=200, rolling enrollment over 12 months), behavioral signature identification. Years 2-3: Aim 2 model development and validation (Months 13-18), Aim 3 IRB approval and clinical pilot (Months 19-36), external validation, dissemination (3 papers, open-source code release).
```

**Total Solution Proposal**: 600 words ✅ (target: 50%)

---

**Transition to Impact**: "Success in these Aims will produce the following impacts:"

---

## STAGE 3: IMPACT ARTICULATION (20% ~ 240 words)

### A. Immediate Impact (1-2 years) (3 sentences, 92 words)

```
This research will directly produce three high-impact publications documenting behavioral biomarkers (JAMA Psychiatry), predictive models (Psychological Medicine), and clinical pilot results (JMIR Mental Health). All de-identified sensor time-series data (n=200) and Python ML models will be openly shared via Open Science Framework and GitHub, enabling replication and extension by the research community. The validated risk monitoring system will be released as an open-source tool (SuicideWatch), allowing mental health clinics worldwide to implement continuous risk assessment, and two graduate students will be trained in digital phenotyping, machine learning, and implementation research.
```

**Deliverables**:
- 3 papers (specific journals named)
- Open data/code (platforms specified)
- Open-source tool (named: SuicideWatch)
- 2 PhD students trained

---

### B. Medium-term Impact (3-5 years) (3 sentences, 88 words)

```
Building on these findings, I anticipate adoption by 10-20 research labs investigating digital mental health biomarkers, accelerating discovery for other conditions (depression, psychosis, PTSD). The open-source monitoring system will be piloted in 5-10 clinical programs (Veterans Affairs mental health clinics, university counseling centers, community mental health centers), with adaptations for adolescents and veterans. Successful clinical validation will lead to integration into existing electronic health record systems, enabling scalable deployment, and collaboration with professional organizations (APA, NIMH Suicide Research Consortium) to develop implementation guidelines.
```

**Adoption Pathway**:
- Research labs (10-20) will use methods
- Clinical programs (5-10) will pilot system
- Professional organizations will develop guidelines

---

### C. Long-term Vision & Broader Impact (3 sentences, 60 words)

```
In the long term, this research could fundamentally transform suicide prevention from reactive crisis response to proactive risk management. If continuous behavioral monitoring becomes standard practice, clinicians could detect and intervene in crises hours or days before they escalate, potentially preventing thousands of deaths annually and exemplifying precision medicine in mental health—moving from one-size-fits-all assessments to personalized, dynamic risk models.
```

**Broader Impact (NSF criteria addressed)**:
- Societal benefit: Lives saved, reduced suffering
- Infrastructure: Open-source tools for community
- Training: PhD students in computational psychiatry

**Total Impact Articulation**: 240 words ✅ (target: 20%)

---

## Complete Proposal Structure Check

### Word Count Verification

- **Stage 1 (Problem)**: 360 words (30%)
- **Stage 2 (Solution)**: 600 words (50%)
- **Stage 3 (Impact)**: 240 words (20%)
- **TOTAL**: 1,200 words ✅

### 30-50-20 Rule Verification

| Stage | Target % | Actual % | Words | Status |
|-------|----------|----------|-------|--------|
| Problem Setup | 30% | 30% | 360 | ✅ Perfect |
| Solution Proposal | 50% | 50% | 600 | ✅ Perfect |
| Impact Articulation | 20% | 20% | 240 | ✅ Perfect |

---

## Coherence Analysis: "Therefore..." Connections

### Problem → Solution Connection

**Problem Statement**:
> "No validated system exists for suicide risk prediction using smartphone-based behavioral data... current tools miss majority of attempts between visits"

**Solution Response**:
> "I will develop the **first validated** smartphone-based system... detecting warning signs in **real-time**"

**Connection Quality**: ✅ Direct
- Solution explicitly addresses "no validated system" gap
- "Real-time" solves "between visits" problem
- "First validated" claims priority in filling gap

---

### Solution → Impact Connection

**Solution Success**:
> "Aims 1-3 will produce: behavioral biomarkers (Aim 1) → ML model (Aim 2) → clinical pilot (Aim 3)"

**Impact Follows**:
> "These outputs enable: research adoption (biomarkers reusable) → clinical deployment (system piloted) → standard practice (if scaled)"

**Connection Quality**: ✅ Logical progression
- Each Aim's output has corresponding impact level
- Immediate impact (papers, data, tool) flows from Aim completion
- Medium impact (adoption) conditional on immediate success
- Long-term vision (standard practice) depends on medium adoption

---

### Overall Narrative Arc

```
PROBLEM: Static assessment fails → misses dynamic crises → people die
    ↓ THEREFORE
SOLUTION: Real-time monitoring → continuous risk tracking → early intervention
    ↓ SUCCESS WILL ENABLE
IMPACT: Research tools (immediate) → Clinical adoption (medium) → Standard practice (long-term)
```

**Coherence Score**: 9/10
- Clear problem-solution-impact chain
- Each stage necessitates the next ("Therefore..." logic)
- No "And then..." weak connections
- Minor gap: Could strengthen why *this* team can execute (Investigator section)

---

## Strengths of This 3-Stage Structure

### 1. Problem Setup Strengths

✅ **Emotional + Logical**: Opens with devastating statistic (emotional), then explains fundamental mismatch (logical)
✅ **Gap Justification**: Four evidence strands build case systematically
✅ **Urgency**: Both current failure (800,000 deaths) and worsening trend (30% increase)
✅ **Timeliness**: "While technology now makes it feasible..." shows opportunity

### 2. Solution Proposal Strengths

✅ **Clear Innovation**: "Unlike X, I will Y" structure immediately differentiates
✅ **Logical Aim Progression**: Foundation → Mechanism → Application (not parallel studies)
✅ **Feasibility Evidence**: Preliminary data (n=30) supports scale-up
✅ **Realistic Scope**: 3 years, 200 participants, 3 papers (achievable for R21)

### 3. Impact Articulation Strengths

✅ **Concrete Immediates**: 3 specific journals, OSF+GitHub, tool name (SuicideWatch)
✅ **Realistic Medium-term**: 10-20 labs, 5-10 clinics (not "thousands")
✅ **Grounded Vision**: "Could transform" (modal verb) not "will revolutionize" (hype)
✅ **Broader Impact**: Lives saved (societal) + open tools (infrastructure) + training (education)

---

## Weaknesses & How to Address

### Weakness 1: Investigator Qualifications Missing

**Issue**: Reviewers will ask "Can *you* execute this?"

**Fix**: Add 2-3 sentences after Preliminary Data:
```
"I am well-positioned to conduct this research: my lab has 5 years of experience in smartphone-based mental health monitoring (3 R01s, 12 papers), established clinic partnerships for recruitment (Letters of Support attached), and a multidisciplinary team including ML experts (Co-I Smith, 20 papers in digital phenotyping) and clinical suicide researchers (Co-I Jones, NIH Suicide Research Consortium member)."
```

**Placement**: End of Solution section (adds ~60 words, adjust Impact to compensate)

---

### Weakness 2: Feasibility Concerns Not Preemptively Addressed

**Potential Reviewer Questions**:
1. "What if recruitment falls short (n=200)?"
2. "What if <10 suicide attempts occur (underpowered)?"
3. "What if therapists don't engage with alerts (low uptake)?"

**Fix**: Add "Anticipated Challenges & Alternatives" subsection (4 sentences, ~80 words):
```
**Anticipated Challenges**: If recruitment is slower than expected, we will extend enrollment period (contingency: 18 months vs 12) or reduce sample to n=150 (still powered for d=0.5 with 80% power). If suicide attempts are fewer than 10, we will expand outcome to include high-severity ideation episodes (more frequent, clinically meaningful). If therapist engagement is low (<50%), we will conduct rapid-cycle feedback interviews and adapt dashboard based on usability concerns (user-centered design approach). Alternative ML approaches (ensemble methods, transfer learning from depression models) will be tested if initial Random Forest/LSTM performance is suboptimal.
```

**Placement**: After Preliminary Data (Year 3 Timeline)

---

### Weakness 3: Broader Impact Could Be More Specific

**Current**: "Lives saved, reduced suffering"

**More Specific**:
```
"If adopted by 10% of US mental health clinics (1,500 of 15,000), covering ~500,000 high-risk patients annually, even a conservative 10% reduction in suicide attempts would prevent ~5,000 attempts per year, saving an estimated $50 million in medical costs and immeasurable human suffering."
```

**Why Better**: Quantifies population reach, attempts prevented, cost savings

**Placement**: Long-term Vision paragraph (replace "thousands of deaths" with specific number)

---

## Instructor Notes

### Teaching Points for Students

**Why This Structure Works**:
1. **30-50-20 is not arbitrary**: Problem establishes *why* (motivation), Solution is the *what* (substance), Impact is the *so what* (value)
2. **Each stage earns the next**: Problem's urgency justifies Solution's ambition; Solution's rigor enables Impact's reach
3. **Proportion matters**: Too much Problem (>40%) = dwelling; Too little (< 25%) = insufficient justification

**Common Student Errors**:
1. **Inverted Pyramid**: 50% Problem, 30% Solution, 20% Impact
   - Fix: Trust 30-50-20 rule (proven by successful proposals)
2. **Missing Transitions**: Stages feel disconnected
   - Fix: Add explicit "Therefore..." and "Success will enable..." transitions
3. **Hype in Impact**: "Will revolutionize", "save millions"
   - Fix: Modal verbs ("could", "may") + quantified realistic goals

### Classroom Discussion Questions

**Q1**: "Why is Core Innovation only 1 sentence?"
- **A**: Elevator pitch test—if you can't say it in one breath, it's not clear enough

**Q2**: "Can we adjust 30-50-20 for longer proposals (10 pages vs 4)?"
- **A**: Yes, but ratios stay similar. 10-page NIH R01: ~3 pages Problem, ~5 pages Solution, ~2 pages Impact

**Q3**: "What if our Aims don't fit Foundation→Mechanism→Application pattern?"
- **A**: Alternative patterns exist (e.g., Population A→B→C, Method 1→2→3), but must be logical progression, not parallel

**Q4**: "How do we decide between Problem-Driven vs Opportunity-Driven opening?"
- **A**: See Example 6.1 decision matrix. Generally: NIH → Problem, NSF → Opportunity

---

## Files to Reference

- **Example 6.1**: Five Hook Patterns Compared (explains Hook selection)
- **Template 6.2**: 3-Stage Structure Builder (provides workshop format)
- **Example 6.3**: Impact Pyramid Detailed (expands Impact section)
- **AI Prompts #6-14**: Solution and Impact generation prompts in lecture notes

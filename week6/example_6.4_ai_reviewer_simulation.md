# Example 6.4: AI Reviewer Simulation - NIH vs NSF Evaluation

**Purpose**: Demonstrate how to use AI Prompts #15-16 to simulate funding agency reviews and compare NIH vs NSF evaluation criteria.

**Learning Objectives**:
- Understand different evaluation frameworks (NIH vs NSF)
- Identify weaknesses before actual submission
- Develop targeted improvement strategies
- Compare scoring across funding agencies

---

## Research Proposal Being Evaluated

**Title**: Real-Time Suicide Risk Monitoring Through Digital Phenotyping

**Executive Summary** (submitted to AI Reviewer):
```
Every year, 800,000 people die by suicide globally, yet our ability to predict
who will attempt suicide remains no better than chance. Current risk assessment
relies on static self-report measures during clinic visits, failing to capture
the dynamic nature of suicidal crises. I propose developing a smartphone-based
digital phenotyping system using machine learning to detect behavioral warning
signs in real-time.

Specific Aims:
1. Characterize behavioral signatures of suicidal crises (n=200, 6 months)
2. Develop dynamic risk prediction model (AUC >0.85)
3. Pilot-test in clinical practice (10 therapists, 100 patients)

Expected Impact: This research will produce validated biomarkers, open-source
tools, and enable early intervention before crises escalate. Medium-term, 5-10
clinics will adopt the system. Long-term, this could transform suicide
prevention from episodic to continuous monitoring, potentially reducing
suicide attempts by 3-5% in monitored populations.
```

---

## Part 1: NIH-Style Reviewer Simulation

### AI Prompt Used (Prompt #15)

```
You are an NIH Study Section reviewer. Evaluate the following research
proposal according to NIH criteria.

[Executive summary pasted above]

Evaluation Criteria (1-9 scale, 1=exceptional, 9=poor):
1. Significance (30%): Problem importance, impact if successful
2. Innovation (30%): Methodological/conceptual novelty, differentiation
3. Approach (25%): Design appropriateness, reproducibility, controls
4. Investigators (10%): Researcher capability (preliminary data, track record)
5. Environment (5%): Research setting adequacy

For each criterion:
- Score (1-9)
- Strengths (2-3)
- Weaknesses (2-3)
- Specific improvement suggestions

Overall Impact Score (1-9)
Summary Statement (3-4 sentences)
Funding Decision: Exceptional (1-20th percentile) / High (21-40th) /
                  Medium (41-60th) / Low (61-100th)
```

### NIH Reviewer Output

---

#### 1. SIGNIFICANCE (30% weight)
**Score**: 2 (Excellent)

**Strengths**:
- ✅ **Critical public health problem**: Suicide is a leading cause of death with
  significant morbidity/mortality burden
- ✅ **Clear gap**: Current static assessments demonstrably inadequate
  (Franklin et al., 2017 meta-analysis showing chance-level prediction)
- ✅ **Potential impact**: Real-time monitoring could fundamentally change
  suicide prevention paradigm

**Weaknesses**:
- ⚠️ **Modest population impact claim**: 3-5% reduction is conservative but not
  well-justified—what's the evidence base for this estimate?
- ⚠️ **Narrow focus**: Focuses on prediction but doesn't address intervention
  implementation barriers

**Improvement Suggestions**:
1. Provide evidence for the 3-5% reduction estimate (cite similar interventions)
2. Address how real-time alerts will translate to actual intervention delivery
3. Discuss scalability challenges explicitly

---

#### 2. INNOVATION (30% weight)
**Score**: 3 (Excellent)

**Strengths**:
- ✅ **Novel approach**: First study to apply digital phenotyping specifically
  to acute suicidal crises (vs general depression)
- ✅ **Methodological advancement**: Machine learning on passive sensor data
  represents significant methodological innovation
- ✅ **Paradigm shift**: From static snapshots to continuous monitoring is
  conceptually innovative

**Weaknesses**:
- ⚠️ **Limited differentiation from depression research**: Digital phenotyping
  has been used for depression—how is suicide risk detection different?
- ⚠️ **Not clear what's "first"**: Other groups (Kleiman, Nock) have done EMA
  for suicide—clarify novelty

**Improvement Suggestions**:
1. Explicitly contrast with existing digital phenotyping for depression
   (what's unique about suicide?)
2. Cite related work (Kleiman's EMA studies) and differentiate your passive
   sensing approach
3. Specify what features/biomarkers are expected to be suicide-specific

---

#### 3. APPROACH (25% weight)
**Score**: 4 (Very Good)

**Strengths**:
- ✅ **Appropriate sample size**: n=200 for 6 months is reasonable for ML model
  development
- ✅ **Rigorous design**: Prospective longitudinal design with clear timeline
- ✅ **Clinical pilot**: Aim 3 addresses real-world feasibility with stepped-wedge
  design

**Weaknesses**:
- ⚠️ **Missing details on recruitment**: How will you recruit high-risk individuals?
  Retention challenges not addressed
- ⚠️ **No control group in Aim 3**: Pilot lacks comparison condition—hard to
  assess added value
- ⚠️ **Feature extraction not specified**: What specific sensors/features will
  be used? (GPS, accelerometer, screen time?)
- ⚠️ **Validation strategy unclear**: How will you validate ML model beyond
  internal cross-validation?
- ⚠️ **False positive rate**: High false alarm rate could burden clinicians—
  mitigation strategy?

**Improvement Suggestions**:
1. Add recruitment strategy and expected retention rates (cite similar studies)
2. Include comparison condition in Aim 3 (e.g., treatment-as-usual control)
3. Specify sensor data types and feature extraction methods
4. Add external validation cohort or timeline for future validation
5. Discuss acceptable false positive/negative rates and alert threshold tuning

---

#### 4. INVESTIGATORS (10% weight)
**Score**: 5 (Good)

**Strengths**:
- ✅ **Relevant expertise**: Combination of clinical psych + ML expertise is
  appropriate

**Weaknesses**:
- ⚠️ **No preliminary data**: Executive summary lacks any pilot data showing
  feasibility
- ⚠️ **Track record unclear**: No mention of prior publications/grants in this area

**Improvement Suggestions**:
1. **CRITICAL**: Add preliminary data showing:
   - You can recruit and retain high-risk participants
   - Sensor data from pilot study (even n=10-20)
   - Proof-of-concept ML results
2. Include 1-2 key publications or K-award demonstrating capability
3. Specify collaborations (e.g., clinician co-investigators, ML consultant)

---

#### 5. ENVIRONMENT (5% weight)
**Score**: 3 (Excellent)

**Strengths**:
- ✅ **Clinical access**: Mention of 10 therapists suggests clinical partnerships

**Weaknesses**:
- ⚠️ **Infrastructure not described**: IRB approval for high-risk research?
  Data security infrastructure?

**Improvement Suggestions**:
1. Briefly mention institutional resources (clinical sites, IRB experience,
   data security)

---

### NIH Overall Evaluation

**Overall Impact Score**: 3 (Excellent)

**Summary Statement**:
This proposal addresses a critical public health problem with an innovative
approach combining digital phenotyping and machine learning for real-time
suicide risk detection. The significance is high, and the innovation is
substantial. However, the approach section would benefit from more
methodological detail (feature extraction, validation strategy, control
conditions) and—most critically—preliminary data demonstrating feasibility.
The lack of pilot data raises concerns about whether this ambitious project
can be completed within the proposed timeline. With revisions addressing
these weaknesses, this could be a highly competitive application.

**Funding Decision**: **High Priority (21-40th percentile)**
- **Fundable with revisions**: Strong concept, but needs preliminary data to
  move to top tier
- **What would push to Exceptional (1-20th)**:
  - Add pilot data (n=10-20 showing sensor data collection works)
  - Specify ML features/methods clearly
  - Include control group in Aim 3

---

## Part 2: NSF-Style Reviewer Simulation

### AI Prompt Used (Prompt #16)

```
You are an NSF Panel reviewer. Evaluate the following research proposal
according to NSF criteria.

[Same executive summary pasted]

Evaluation Criteria:
1. Intellectual Merit (50%):
   - Advance knowledge in the field?
   - Creative, original, transformative concepts?
   - Well-reasoned and organized approach?
   - Appropriate qualifications and resources?

2. Broader Impact (50%):
   - Benefit to society (specific populations, applications)?
   - Broaden participation of underrepresented groups?
   - Enhance infrastructure for research/education?
   - Dissemination to enhance scientific/technological understanding?

For each criterion:
- Rating (Excellent/Very Good/Good/Fair/Poor)
- Summary (1 paragraph)
- Strengths (2-3)
- Concerns/Weaknesses (2-3)

Overall Rating
Recommendation: Highly Competitive / Competitive / Low Competitive
Summary (3-4 sentences)
```

### NSF Reviewer Output

---

#### 1. INTELLECTUAL MERIT (50% weight)
**Rating**: **Very Good**

**Summary**:
This proposal presents a novel application of digital phenotyping and machine
learning to suicide risk prediction, representing a significant methodological
advance. The approach is conceptually sound, combining prospective data
collection, ML model development, and clinical pilot testing. The research has
potential to transform understanding of suicide risk dynamics. However, the
proposal would benefit from more detail on the computational methods and
preliminary evidence of feasibility.

**Strengths**:
- ✅ **Conceptual innovation**: Shifting from static to dynamic risk assessment
  is transformative for the field
- ✅ **Methodological rigor**: Three-aim structure progresses logically from
  characterization to validation to application
- ✅ **Cross-disciplinary integration**: Bridges clinical psychology, machine
  learning, and digital health—fostering new research directions

**Concerns/Weaknesses**:
- ⚠️ **Preliminary evidence**: No pilot data or proof-of-concept results to
  demonstrate feasibility
- ⚠️ **Computational detail**: Feature engineering approach not specified—
  what makes this different from depression phenotyping?
- ⚠️ **Theoretical framework**: Limited discussion of *why* behavioral signatures
  should predict acute risk (theoretical mechanism?)

**Improvement Suggestions**:
1. Add theoretical framework linking behavioral changes to suicidal ideation/action
2. Provide computational methods detail (features, algorithms, training approach)
3. Include any pilot data demonstrating sensor data can be collected from
   high-risk population

---

#### 2. BROADER IMPACT (50% weight)
**Rating**: **Good**

**Summary**:
The proposal addresses a critical societal problem (suicide prevention) with
clear potential for population health benefit. The planned open-source tool
development and clinical pilot suggest pathways to real-world impact. However,
broader impact could be strengthened with more explicit plans for dissemination,
training, and addressing health disparities.

**Strengths**:
- ✅ **Societal benefit**: Direct application to suicide prevention with potential
  to save lives
- ✅ **Open science**: Commitment to open-source tools and data sharing enhances
  research infrastructure
- ✅ **Clinical translation**: Aim 3 pilot demonstrates pathway from research to
  practice

**Concerns/Weaknesses**:
- ⚠️ **Equity not addressed**: No mention of how this technology will reach
  underserved populations (digital divide, smartphone access)
- ⚠️ **Limited education/training component**: No explicit plan for training
  next-generation researchers
- ⚠️ **Dissemination strategy vague**: "5-10 clinics will adopt" is mentioned
  but pathway unclear
- ⚠️ **Underrepresented groups**: No discussion of recruitment from diverse
  populations or bias mitigation

**Improvement Suggestions**:
1. **CRITICAL for NSF**: Add diversity/inclusion plan:
   - Recruit from safety-net clinics serving low-income/minority populations
   - Analyze ML model fairness across demographic groups
   - Address smartphone access barriers (loan devices?)
2. **Education/training**:
   - Specify PhD student training (2 students mentioned in Impact Pyramid)
   - Develop graduate course or workshop on digital phenotyping methods
3. **Dissemination**:
   - Conference workshops to train other researchers
   - Practitioner-facing materials for clinical implementation
   - Public engagement (e.g., brief for policymakers, APA outreach)
4. **Infrastructure enhancement**:
   - Detailed plan for open dataset (what will be shared, when, how accessed)
   - GitHub repository structure for code/documentation

---

### NSF Overall Evaluation

**Overall Rating**: **Very Good**

**Recommendation**: **Competitive**

**Summary**:
This proposal presents an innovative approach to suicide risk prediction with
strong intellectual merit and clear societal benefit. The combination of
digital phenotyping, machine learning, and clinical translation is
methodologically sophisticated and has transformative potential. However, to
be **highly competitive** for NSF funding, the proposal needs significant
strengthening of the Broader Impact section, particularly around diversity/
inclusion, education/training, and explicit dissemination strategies. NSF
places equal weight on Intellectual Merit and Broader Impact (50/50), and
currently the Broader Impact is underdeveloped relative to the strong
Intellectual Merit.

**What would make this Highly Competitive**:
- Concrete diversity/inclusion plan (recruitment, fairness analysis, accessibility)
- Student training plan (2 PhD students, skills development, career pathways)
- Dissemination strategy (workshops, clinical guidelines, public engagement)
- Infrastructure details (dataset documentation, code tutorials, reuse plan)

**Key Difference from NIH**: NIH scored this "High Priority" primarily based on
Significance + Innovation. NSF is more critical because Broader Impact (50%
of score) is insufficiently developed. For NIH, Broader Impact is a smaller
consideration; for NSF, it's half the evaluation.

---

## Part 3: Side-by-Side Comparison

### Scoring Summary

| Criterion | NIH Score | NSF Rating | Weight NIH | Weight NSF |
|-----------|-----------|------------|------------|------------|
| **Significance** | 2 (Excellent) | — | 30% | — |
| **Innovation** | 3 (Excellent) | — | 30% | — |
| **Approach** | 4 (Very Good) | — | 25% | — |
| **Investigators** | 5 (Good) | — | 10% | — |
| **Environment** | 3 (Excellent) | — | 5% | — |
| **Intellectual Merit** | — | Very Good | — | 50% |
| **Broader Impact** | — | Good | — | 50% |
| **OVERALL** | 3 (Excellent) | Very Good | — | — |
| **Decision** | High Priority (21-40%) | Competitive | — | — |

### Key Differences in Evaluation Philosophy

| Aspect | NIH Focus | NSF Focus |
|--------|-----------|-----------|
| **Problem** | Health impact, disease burden | Advancing fundamental knowledge |
| **Innovation** | Clinical/translational novelty | Conceptual/methodological transformation |
| **Feasibility** | Preliminary data critical | Proof-of-concept helpful but less critical |
| **Impact** | Scientific + clinical outcomes | Scientific + societal + educational outcomes |
| **Diversity** | Minority health disparities | Broadening participation in STEM |
| **Dissemination** | Publications + clinical guidelines | Publications + infrastructure + training |

### Critical Weaknesses by Agency

**NIH's Top Concerns**:
1. ⚠️ **No preliminary data** (Investigators score = 5, pulled down overall score)
2. ⚠️ **Missing methodological details** (Approach score = 4)
3. ⚠️ **No control group** in clinical pilot

**NSF's Top Concerns**:
1. ⚠️ **Broader Impact underdeveloped** (Good vs Excellent, 50% of score)
2. ⚠️ **No diversity/inclusion plan**
3. ⚠️ **Limited education/training component**
4. ⚠️ **Dissemination strategy vague**

---

## Part 4: Improvement Plan Based on Both Reviews

### Priority 1: Add Preliminary Data (NIH Critical)

**Problem**: NIH Investigators score = 5 (weakest score)

**Solution**: Add 1-2 paragraphs preliminary data section

**Content to Add**:
```
Preliminary Data: I have conducted a pilot study (n=15 high-risk outpatients,
IRB approved) demonstrating feasibility. Over 3 months, retention was 87%
(13/15 completed), with average 85% daily sensor data coverage. Exploratory
clustering identified 3 behavioral patterns during periods of elevated suicidal
ideation (measured via daily EMA): (1) social withdrawal (GPS entropy ↓35%,
p<.01), (2) sleep disruption (accelerometer nocturnal movement ↑42%, p<.05),
and (3) app usage changes (screen time ↑28%, p<.05). These preliminary findings
suggest behavioral signatures are detectable, supporting Aim 1 feasibility.
Additionally, I have published 2 papers on digital phenotyping for depression
(Doe et al., 2023, *Psych Med*; Doe et al., 2024, *JMIR*), establishing my
capability in this methodology.
```

**Impact**: Likely moves NIH score from 3 → 2 (Exceptional range, 1-20th percentile)

---

### Priority 2: Strengthen Broader Impact (NSF Critical)

**Problem**: NSF Broader Impact = Good (not Excellent), limiting overall competitiveness

**Solution**: Add 2-3 paragraphs addressing NSF criteria explicitly

**Content to Add**:

#### A. Diversity & Inclusion
```
Broadening Participation: To ensure equitable benefit, I will:
(1) Recruit 50% of participants from safety-net clinics serving low-income and
minority populations (County Hospital, Community Health Center).
(2) Provide loaner smartphones to participants without devices (15-20% expected).
(3) Conduct ML fairness analysis, testing prediction accuracy across demographic
groups (race, gender, age, SES) and adjusting algorithms if disparities detected.
(4) Engage Community Advisory Board (CAB) including suicide attempt survivors
from diverse backgrounds to guide study design and interpretation.
```

#### B. Education & Training
```
Training Next-Generation Researchers: This project will train:
(1) Two PhD students (one computational focus, one clinical implementation focus)
in digital mental health methods—an emerging, high-demand interdisciplinary skill.
(2) Undergraduates from underrepresented groups through our NIMH-funded R25
training program (2 students/year, hands-on experience with data analysis).
(3) I will develop a graduate seminar "Digital Phenotyping in Psychopathology"
(offered Fall 2026), creating curriculum materials to be shared openly.
```

#### C. Dissemination & Infrastructure
```
Enhancing Infrastructure: All research products will be openly shared:
(1) **Data**: De-identified dataset (n=200, 6 months each = 1,200 person-months)
deposited in NIMH Data Archive within 6 months of study completion, enabling
10-15 secondary analyses.
(2) **Code**: GitHub repository with Python ML models, feature extraction scripts,
and analysis notebooks (documented with tutorials for reuse).
(3) **Tools**: SuicideWatch app (patient app + clinician dashboard) as
open-source, facilitating adoption by other research teams and clinics.
(4) **Dissemination**: Conference workshops (annual AAS, ABCT), clinical practice
guidelines (submit to APA Division 12), public brief for policymakers.
```

**Impact**: Likely moves NSF rating from "Competitive" → "Highly Competitive"

---

### Priority 3: Add Methodological Details (Both Agencies)

**Problem**: NIH Approach = 4 (Good, not Excellent); NSF concerned about feature details

**Solution**: Add 1 paragraph specifying computational methods

**Content to Add**:
```
Feature Engineering: From smartphone sensors, I will extract 45 features across
5 domains: (1) Mobility (GPS entropy, location variance, home stay duration),
(2) Sleep (accelerometer-derived sleep duration, sleep onset variability,
nocturnal movement), (3) Social behavior (call/text frequency, call duration
variance, social app usage), (4) Phone usage (screen time, app diversity,
notification response latency), (5) Circadian rhythm (rest-activity patterns
via accelerometer). These features have shown sensitivity to depression
(Mohr et al., 2017) but have not been tested for acute suicide risk. Machine
learning will use Random Forest (for interpretability and non-linear relationships)
and LSTM neural networks (for temporal sequence patterns). Training: 70% of data,
validation: 30% (stratified by outcome to preserve class balance given expected
low base rate ~10-15% attempts).
```

**Impact**: Addresses both NIH and NSF concerns, likely moves scores up

---

### Priority 4: Add Control Group to Aim 3 (NIH)

**Problem**: NIH concerned about pilot lacking comparison condition

**Solution**: Modify Aim 3 design

**Original Aim 3**:
```
Aim 3: Pilot-test risk monitoring system in clinical practice (10 therapists,
100 patients)
```

**Revised Aim 3**:
```
Aim 3: Pilot-test risk monitoring system in clinical practice using a stepped-
wedge cluster randomized design (10 therapists, 100 patients). 5 therapists
will receive SuicideWatch alerts immediately (intervention), while 5 will
continue treatment-as-usual (TAU) for the first 3 months, then cross over to
intervention. Primary outcome: time to therapeutic response (<24hrs alert →
contact). Secondary outcomes: therapist acceptability (System Usability Scale
>80), patient engagement (app retention >70% at 6 months), clinical safety
(suicide attempts, psychiatric hospitalizations—monitored but study not powered
for efficacy). This design allows within-therapist comparison (before/after
alert access) while all patients eventually receive intervention (ethical given
high-risk population).
```

**Impact**: Addresses NIH's most critical Approach weakness

---

## Part 5: Predicted Re-Review Scores After Improvements

### NIH Re-Review (with all improvements)

| Criterion | Original Score | Revised Score | Change |
|-----------|----------------|---------------|--------|
| Significance | 2 | 2 | (unchanged, already strong) |
| Innovation | 3 | 2 | ↑ (feature details clarify novelty) |
| Approach | 4 | 2 | ↑↑ (control group, methods detail) |
| Investigators | 5 | 2 | ↑↑↑ (preliminary data critical) |
| Environment | 3 | 3 | (unchanged) |
| **OVERALL** | **3** | **2** | **↑ (Exceptional, 1-20th percentile)** |

**Funding Decision**: **Exceptional (1-20th percentile)** — Highly likely to be funded

---

### NSF Re-Review (with all improvements)

| Criterion | Original Rating | Revised Rating | Change |
|-----------|-----------------|----------------|--------|
| Intellectual Merit | Very Good | Excellent | ↑ (methods detail, preliminary data) |
| Broader Impact | Good | Excellent | ↑↑ (diversity, training, dissemination) |
| **OVERALL** | **Very Good** | **Excellent** | **↑** |

**Recommendation**: **Highly Competitive** — Strong funding prospect

---

## Part 6: Student Self-Reflection Template

After running AI Reviewer on your own proposal, answer these questions:

### Q1: What was your Overall Impact Score/Rating?
- NIH: _______
- NSF: _______

### Q2: Which criterion received your lowest score?
- NIH: _______
- NSF: _______
- Why do you think this was the weakest area?

### Q3: What was the #1 most critical weakness identified?
[Write 1-2 sentences]

### Q4: What improvements can you make immediately (within 1 day)?
1.
2.
3.

### Q5: What improvements require more work (1-2 weeks)?
1.
2.

### Q6: If submitting to both NIH and NSF, which seems like a better fit? Why?
[Write 3-4 sentences comparing the alignment]

### Q7: How did the AI Reviewer feedback compare to human peer feedback (from Phase 2)?
- Similarities:
- Differences:
- Which was more helpful and why?

---

## Teaching Notes

### Discussion Questions for Class

**Q1: Why did NIH and NSF give different emphasis to various weaknesses?**
- **A**: NIH prioritizes feasibility (hence preliminary data critical). NSF
  prioritizes broader impact and education/training (50% of score). Same proposal
  can be viewed differently depending on agency mission.

**Q2: Is the 3-5% suicide reduction claim helping or hurting the proposal?**
- **A**: It's conservative (good—avoids hype) but NIH reviewer wants justification.
  Better to cite evidence: "Similar digital interventions for depression show
  10-15% symptom reduction (Smith et al., 2022); conservatively estimating 3-5%
  for our more acute population."

**Q3: Should you always add preliminary data?**
- **A**: For NIH, yes—it's critical. For NSF, helpful but less essential (NSF
  funds more exploratory/high-risk research). For career awards (K99, NRSA),
  preliminary data is often required.

**Q4: How do you balance "ambitious" vs "feasible"?**
- **A**: Aim high but show you've thought through risks. Preliminary data
  de-risks ambitious goals. Alternative approaches show you have backup plans.
  "Ambitious but achievable" is the sweet spot.

**Q5: Which agency should this proposal target?**
- **A**: **NIH is better fit** for this specific proposal because:
  - Clear health outcomes (suicide prevention)
  - Clinical translation (Aim 3 pilot)
  - NIH R21 mechanism designed for exploratory/developmental research

  NSF *could* work if:
  - Framed more as "understanding behavioral dynamics of suicide" (basic science)
  - Stronger education/training component
  - Emphasized methodological contribution to computational social science

### Common Student Errors

**Error 1: Taking AI Reviewer scores too literally**
- **Reality**: AI reviewer is a tool, not oracle. Scores help identify weaknesses,
  but don't predict actual funding. Use as diagnostic, not predictive.

**Error 2: Trying to address every single weakness**
- **Reality**: Focus on critical weaknesses (score ≥4 for NIH, "Good" or lower
  for NSF). Minor weaknesses can be acknowledged in limitations.

**Error 3: Adding preliminary data that's too preliminary**
- **Reality**: n=3 pilot is worse than no pilot (looks underpowered). Better to
  say "We have IRB approval and have successfully recruited n=5 in ongoing pilot"
  than to over-interpret tiny sample.

**Error 4: Assuming one proposal fits all agencies**
- **Reality**: Tailor to agency. NIH version emphasizes health impact + feasibility.
  NSF version emphasizes intellectual merit + broader impact + training. Don't
  just change the cover page—revise emphasis.

### Workshop Activity Suggestion

**Red Team / Blue Team Exercise** (15 minutes):
1. **Pair up**: Each pair reviews one person's proposal
2. **Red Team** (10 min): Student A acts as harsh NIH reviewer, identifies 3
   critical weaknesses
3. **Blue Team** (5 min): Student B responds with mitigation strategies
4. **Switch roles**: Student B is Red Team, Student A is Blue Team
5. **Debrief**: What weaknesses were most commonly identified?

This mimics the adversarial review process and prepares students for real peer review.

---

## Key Lessons

### Lesson 1: Different Agencies, Different Priorities
- **NIH**: Significance + Innovation + Feasibility (preliminary data critical)
- **NSF**: Intellectual Merit + Broader Impact (education/training essential)
- **Implication**: One proposal size does NOT fit all—tailor to agency

### Lesson 2: Preliminary Data is Your Best Friend (for NIH)
- Moves Investigators score from 5 → 2 (biggest single improvement)
- Even small pilot (n=10-15) dramatically increases competitiveness
- Shows reviewers: "This person can execute, not just ideate"

### Lesson 3: Broader Impact ≠ Afterthought (for NSF)
- 50% of NSF score—equal to Intellectual Merit
- Requires concrete plans, not vague statements
- Must address: diversity, training, dissemination, infrastructure

### Lesson 4: Address Weaknesses Proactively
- Don't wait for reviewers to ask "Where's the control group?"—build it in
- Don't wait for "How will you recruit?"—specify strategy upfront
- Reviewers reward proposals that anticipate and address concerns

### Lesson 5: AI Reviewer is a Mirror, Not a Judge
- Use it to see your proposal from reviewer perspective
- Iterate multiple times (run AI reviewer → revise → run again)
- Don't aim for perfect score—aim for "Highly Competitive"

---

## Appendix: Full AI Prompts Used

### NIH Reviewer Prompt (Prompt #15)

```
You are an NIH Study Section reviewer with 15 years of experience evaluating
grant proposals. You are thorough, fair, but demanding. Evaluate the following
research proposal according to NIH scoring criteria.

[PASTE YOUR RESEARCH PROPOSAL HERE]

Evaluation Criteria (score 1-9, where 1=exceptional, 9=poor):

1. SIGNIFICANCE (30% weight):
   - Does the project address an important problem or critical barrier?
   - If successful, how will scientific knowledge, technical capability, and/or
     clinical practice be improved?
   - How will successful completion change the concepts, methods, technologies,
     treatments, services, or preventative interventions?

2. INNOVATION (30% weight):
   - Does the application challenge current paradigms or address an innovative
     hypothesis or critical barrier?
   - Are the concepts, approaches, methodologies, instrumentation, or interventions
     novel to one field or novel in a broad sense?
   - Is a refinement, improvement, or new application of theoretical concepts,
     approaches, or methodologies proposed?

3. APPROACH (25% weight):
   - Are the overall strategy, methodology, and analyses well-reasoned and
     appropriate to accomplish the specific aims?
   - Are potential problems, alternative strategies, and benchmarks for success
     presented?
   - If the project is in the early stages of development, will the strategy
     establish feasibility and will particularly risky aspects be managed?

4. INVESTIGATORS (10% weight):
   - Are the PD/PIs, collaborators, and other researchers well suited to the
     project?
   - If Early Stage Investigators or those in the early stages of independent
     careers, do they have appropriate experience and training?
   - If established, have they demonstrated an ongoing record of accomplishments?
   - Is there evidence of preliminary data demonstrating feasibility?

5. ENVIRONMENT (5% weight):
   - Will the scientific environment contribute to the probability of success?
   - Are the institutional support, equipment and other physical resources
     available to the investigators adequate for the project proposed?
   - Will the project benefit from unique features of the scientific environment?

For each criterion, provide:
- Numeric Score (1-9)
- Strengths (2-3 bullet points)
- Weaknesses (2-3 bullet points)
- Specific, actionable improvement suggestions

Then provide:
- Overall Impact Score (1-9, considering all criteria with weights)
- Summary Statement (3-4 sentences synthesizing your evaluation)
- Funding Decision:
  * Exceptional (1-20th percentile): High priority for funding
  * High (21-40th percentile): Fundable if budget permits
  * Medium (41-60th percentile): Needs significant revision
  * Low (61-100th percentile): Not competitive

Be constructive but honest. Identify real weaknesses that would concern a study
section.
```

---

### NSF Reviewer Prompt (Prompt #16)

```
You are an NSF Program Officer and panel reviewer with expertise in behavioral
and cognitive sciences. Evaluate the following research proposal according to
NSF's two merit review criteria.

[PASTE YOUR RESEARCH PROPOSAL HERE]

NSF Merit Review Criteria:

1. INTELLECTUAL MERIT (50% weight):
   The potential to advance knowledge:
   - How important is the proposed activity to advancing knowledge and
     understanding within its own field or across different fields?
   - How well qualified is the proposer to conduct the project?
   - To what extent do the proposed activities suggest and explore creative,
     original, or potentially transformative concepts?
   - Is the plan well-reasoned, well-organized, and based on a sound rationale?
   - How well does the plan incorporate strategies to assess success?

2. BROADER IMPACT (50% weight):
   The potential to benefit society and contribute to the achievement of specific,
   desired societal outcomes:
   - What is the potential for the proposed activity to benefit society or advance
     desired societal outcomes?
   - To what extent does the proposal broaden participation of underrepresented
     groups (e.g., gender, race, disability, geography)?
   - Will the proposal enhance the infrastructure for research and education
     (e.g., facilities, instrumentation, networks, partnerships)?
   - Will results be disseminated broadly to enhance scientific and technological
     understanding?
   - Will the proposal benefit the development of a diverse STEM workforce
     (e.g., training, outreach)?

For each criterion, provide:
- Rating: Excellent / Very Good / Good / Fair / Poor
- Summary paragraph (5-7 sentences) explaining your rating
- Strengths (2-3 bullet points)
- Concerns/Weaknesses (2-3 bullet points)
- Specific suggestions for improvement

Then provide:
- Overall Rating: Excellent / Very Good / Good / Fair / Poor
- Recommendation:
  * Highly Competitive: Recommend for funding without reservation
  * Competitive: Recommend for funding if budget permits
  * Low Competitive: Significant concerns, revision recommended
- Summary (3-4 sentences)

Important Notes for NSF Review:
- Intellectual Merit and Broader Impact are EQUALLY weighted (50/50)
- Be especially critical if Broader Impact is underdeveloped or generic
- NSF values transformative, high-risk research (more tolerance for ambitious goals)
- Education/training components are highly valued
- Diversity/inclusion should be addressed explicitly

Be thorough and constructive. NSF reviewers are known for detailed, substantive
feedback.
```

---

## Final Reflection Prompt for Students

After completing AI Reviewer simulation and reading this example:

**Prompt for Your Reflection (300-500 words)**:
```
1. How did your AI Reviewer scores compare to this example?
   - Better/worse/similar on which criteria?

2. What was your proposal's biggest weakness?
   - How do you plan to address it?

3. Which funding agency (NIH or NSF) is a better fit for your research?
   - Justify based on mission alignment, evaluation criteria, and your strengths

4. Did the AI Reviewer identify weaknesses you hadn't considered?
   - What blind spots did you have?

5. How will you revise your proposal based on this feedback?
   - List 3 concrete changes you'll make

6. What's your confidence level in your revised proposal (1-10)?
   - What would increase your confidence to 9-10?
```

Submit this reflection along with your revised proposal showing improvements
based on AI Reviewer feedback.

---

**End of Example 6.4**

Total: ~1,840 lines

# Example 4.6: Model Peer Review for Bulletproofing

**Purpose**: Demonstrate comprehensive peer review integrating all 6 bulletproofing dimensions

**Use in Workshop**: Model for Template 4.4 (Peer Review Rubric), showing how to provide constructive, evidence-based feedback

---

## Reviewed Paper Context

**Title**: "Effects of Mindfulness-Based Stress Reduction on Academic Burnout in Medical Students: A Randomized Controlled Trial"

**Author**: 학생C (peer being reviewed)

**Study Design**:
- N = 80 medical students (40 MBSR, 40 waitlist control)
- 8-week MBSR program (2-hour weekly sessions + daily home practice)
- Outcomes: Maslach Burnout Inventory (MBI), Mindful Attention Awareness Scale (MAAS)
- Follow-up: Post-intervention (Week 8) + 3-month follow-up

**Excerpts Reviewed**: Methods and Results sections

---

## Peer Review Using Template 4.4 (6-Dimension Rubric)

### DIMENSION 1: REPRODUCIBILITY (0-5)

**Score**: **4/5** ⭐⭐⭐⭐ GOOD

#### ✅ STRENGTHS (What's Included Well):

**Participants** (Complete):
- ✅ Recruitment: "Recruited via email to all first- and second-year medical students at [University] Medical School (October 2024)"
- ✅ Inclusion criteria: "Age 18-30, no current mindfulness practice, no psychiatric medication"
- ✅ Exclusion criteria: "History of bipolar disorder or psychosis, current psychotherapy"
- ✅ Demographics: "M_age = 23.4 (SD=1.8), 52.5% female, 47.5% male, 75% Asian, 15% White, 10% Hispanic/Other"
- ✅ Excluded N: "10 additional participants excluded: 7 did not meet criteria, 2 withdrew before randomization, 1 incomplete baseline. Final N=80."
- ✅ IRB: "Approved by [University] IRB (#2024-MED-456)"

**Materials** (Complete):
- ✅ MBI: Full citation (Maslach & Jackson, 1981), 22 items, 3 subscales (Emotional Exhaustion 9 items, Depersonalization 5 items, Personal Accomplishment 8 items), 7-point frequency scale (0=never, 6=every day), scoring procedure, reliability (current α=.89/.76/.84, normative α=.90/.79/.71), sample items, OSF link
- ✅ MAAS: Full citation (Brown & Ryan, 2003), 15 items, 6-point Likert (1=almost always, 6=almost never), reverse-scored mean (higher=more mindful), reliability (current α=.87, normative α=.82), sample item, availability

**Procedure** (Well-Detailed):
- ✅ MBSR protocol: Based on Kabat-Zinn (1990), 8 weekly 2-hour group sessions + 6-hour silent retreat (Week 6) + daily 45-min home practice (body scan, sitting meditation, yoga), instructor qualifications (certified MBSR teacher, 5 years experience), session structure (didactic 30min + practice 60min + discussion 30min), attendance tracked (M=7.2/8 sessions, SD=0.9)
- ✅ Control: Waitlist (no contact during 8 weeks, received MBSR after 3-month follow-up), same assessment schedule as MBSR group
- ✅ Assessment timing: Baseline (Week 0), Post (Week 8), Follow-up (Week 20±1 week)
- ✅ Platform: Qualtrics surveys, randomization via computerized algorithm (simple randomization, allocation concealment)

**Software** (Complete):
- ✅ R 4.3.1, RStudio 2023.06.1, packages: lme4 1.1-34 (mixed models), emmeans 1.8.7 (contrasts), effectsize 0.8.6 (effect sizes)
- ✅ G*Power 3.1.9.7 (power analysis)
- ✅ Analysis code + data: https://osf.io/xyz789/

#### ⚠️ GAPS (What's Missing or Vague):

**Parameters** (Minor Gap):
- ⚠️ Daily home practice compliance: "Participants logged practice in weekly diaries (M=4.8 days/week, SD=1.3)" - 보고는 했으나, compliance verification method가 명시되지 않음 (self-report만? Audio recordings reviewed?)
- ⚠️ MBSR retreat attendance: "35/40 participants attended full retreat, 5 attended partial (≥4 hours)" - partial attendance가 outcome에 영향을 미쳤는지 분석하지 않음

**Analysis** (Minor Gap):
- ⚠️ Missing data handling: "3 participants lost to follow-up (2 MBSR, 1 control)" - How handled? Listwise deletion? Multiple imputation? ITT vs per-protocol analysis?
- ⚠️ Clustering: Group-based intervention (8 MBSR groups of 5 participants each) - Was clustering (group as random effect) accounted for in analysis? Or treated as independent observations?

#### 💡 SPECIFIC IMPROVEMENTS:

**1. Add Home Practice Compliance Details** (HIGH Priority):
```
BEFORE: "Participants logged practice in weekly diaries (M=4.8 days/week, SD=1.3)"

AFTER: "Participants logged practice in weekly diaries submitted at each session.
        Compliance was verified through instructor review of diaries + random
        spot-checks of audio recordings (20% of participants). Mean practice:
        4.8 days/week (SD=1.3, range 2-7 days), 38 min/day (SD=12). Dose-response
        analysis: Practice days/week correlated with burnout reduction (r=-.32,
        p=.04), suggesting compliance influenced outcomes."
```

**2. Clarify Missing Data Strategy** (HIGH Priority):
```
BEFORE: "3 participants lost to follow-up (2 MBSR, 1 control)"

AFTER: "Missing data: 3 participants lost to 3-month follow-up (2 MBSR, 1 control).
        Primary analysis used intent-to-treat (ITT) with multiple imputation (MI)
        via mice package in R (20 imputations, predictive mean matching). Sensitivity
        analysis with complete cases (N=77) showed results unchanged (Supplementary
        Table S4)."
```

**3. Account for Clustering** (HIGH Priority):
```
BEFORE: [Not mentioned]

AFTER: "MBSR participants were nested within 8 groups (n=5 per group). We accounted
        for clustering by including group as random effect in mixed-effects models
        (lmer function, lme4 package). Intraclass correlation (ICC) for group:
        .08 for MBI, .05 for MAAS (small clustering effects). Results with vs
        without clustering adjustment were similar (Supplementary Table S5)."
```

#### 🎯 PRIORITY: HIGH

Reproducibility score would increase from 4/5 → 5/5 with these 3 additions. Current gaps are not severe (study is still replicable), but addressing them would eliminate ALL ambiguity.

---

### DIMENSION 2: CONTROL STRATEGY (0-5)

**Score**: **3/5** ⭐⭐⭐ ACCEPTABLE

#### ✅ STRENGTHS:

**Strong Elements**:
- ✅ Randomization: "Computerized algorithm with allocation concealment" - eliminates selection bias
- ✅ Baseline equivalence tested: "Independent t-tests confirmed no group differences at baseline on MBI (t(78)=0.45, p=.65, d=0.10) or MAAS (t(78)=0.82, p=.42, d=0.18)" - groups comparable pre-intervention
- ✅ Attendance tracking: "M=7.2/8 sessions attended (SD=0.9), 90% attended ≥6 sessions" - high adherence documented

#### ⚠️ CONCERNS (Alternative Explanations Not Ruled Out):

**1. Waitlist Control is Weak** (MAJOR Concern):
- Problem: Waitlist control는 time/attention/expectancy 효과를 통제하지 못함
- MBSR group: 8주간 매주 2시간 + retreat 6시간 + instructor contact + group support
- Control group: Nothing (no contact, no attention)
- Confounds:
  - **Time/attention**: MBSR의 효과인가, 아니면 단순히 "누군가 나를 신경 써줌" 효과인가?
  - **Expectancy**: MBSR participants는 improvement를 기대 (placebo effect), control은 disappointed ("I'm in the boring control group")
  - **Social support**: Group sessions에서의 peer support가 burnout 감소에 기여했을 수 있음
  - **Non-specific therapeutic factors**: Instructor의 empathy, safe space, validation - 이것들이 mindfulness보다 더 중요했을 수도

Better control: **Active control** (e.g., health education seminars matching MBSR for time/attention/group support, but no mindfulness content)

**2. No Manipulation Check** (MAJOR Concern):
- Problem: MBSR이 실제로 mindfulness를 증가시켰는지 확인하지 않음
- Current evidence: MAAS scores increased in MBSR group (Pre M=3.2 → Post M=4.1, d=0.85)
- BUT: MAAS는 outcome이기도 하고 mechanism이기도 함 (confusing)
- Need: Separate manipulation check (e.g., "Did you practice mindfulness this week?" daily logs → verify MBSR group practiced MORE than control)
- Without manipulation check: "MBSR improved burnout"의 causal pathway가 unclear (mindfulness 증가 때문인가, 다른 이유인가?)

**3. Blinding Not Addressed**:
- Assessors blinded? Participants는 당연히 unblinded (자기가 MBSR 받는지 알 수 있음), 하지만 outcome assessor는 blind 가능 (objective scorer가 MBI responses를 group 모르고 채점)
- Current: Blinding status not reported
- Impact: Experimenter bias 가능성 (though self-report measures라서 less critical)

#### 💡 SPECIFIC IMPROVEMENTS:

**1. Acknowledge Waitlist Control Limitation** (HIGH Priority):
```
ADD to Discussion/Limitations:
"The waitlist control design does not control for non-specific therapeutic factors
(time, attention, group support, expectancy). Therefore, we cannot definitively
attribute burnout reductions to mindfulness practice specifically versus these
alternative mechanisms. Future studies should employ active control conditions
(e.g., health education groups matching MBSR for time/attention/group format but
without mindfulness content) to isolate mindfulness-specific effects. However,
from a clinical perspective, if MBSR reduces burnout through ANY mechanism
(specific or non-specific), it may still be a valuable intervention."
```

**2. Add Manipulation Check Analysis** (MEDIUM Priority):
```
ADD to Results:
"Manipulation Check: To verify that MBSR increased mindfulness practice, we
compared home practice logs between groups. MBSR participants practiced
mindfulness M=4.8 days/week (SD=1.3), whereas waitlist controls reported
M=0.2 days/week (SD=0.5), t(78)=21.3, p<.001, d=4.76 (very large effect).
This confirms successful manipulation: MBSR group engaged in substantially
more mindfulness practice than controls. Furthermore, within MBSR group, practice
days/week correlated with burnout reduction (r=-.32, p=.04), providing preliminary
evidence for a dose-response relationship."
```

**3. Report Blinding Status** (LOW Priority):
```
ADD to Methods:
"Participants were not blinded to group assignment (inherent in intervention design).
Outcome assessors were blinded: MBI and MAAS responses were scored by research
assistants unaware of participants' group membership. However, self-report measures
reduce the impact of assessor bias."
```

#### 🎯 PRIORITY: HIGH

Control strategy would improve from 3/5 → 4/5 with these changes. Current design is acceptable for pilot RCT, but won't convince top-tier journals without active control.

---

### DIMENSION 3: STATISTICAL JUSTIFICATION (0-5)

**Score**: **5/5** ⭐⭐⭐⭐⭐ EXCELLENT

#### ✅ STRENGTHS (Every Choice Defensible):

**Power Analysis** (Exemplary):
- ✅ A priori power analysis: "Based on meta-analysis of MBSR for burnout (d=0.65; Luken & Sammons, 2016), we targeted N=64 (32 per group) for 80% power at α=.05. We oversampled to N=90 to account for 15% attrition, achieving final N=80."
- ✅ Justification: Effect size from meta-analysis (not generic d=0.5)
- ✅ Attrition buffer: Planned 15%, actual attrition 11% (10/90) - good prediction

**Statistical Test Selection** (Appropriate):
- ✅ Mixed-effects model: "2 (Group: MBSR vs Control) × 3 (Time: Baseline, Post, 3-month Follow-up) linear mixed model with random intercept for participants" - correct for repeated measures with unbalanced data (missing 3-month data)
- ✅ Justification: "Mixed models handle missing data via maximum likelihood (ML), reducing bias from listwise deletion"
- ✅ Software specified: "lme4 package (version 1.1-34) in R 4.3.1, lmer() function"

**Effect Size Reporting** (Complete):
- ✅ Cohen's d for pairwise comparisons: "Post-intervention: MBSR vs Control d=0.72, 95% CI [0.27, 1.17] (medium-to-large)"
- ✅ Partial η² for omnibus effects: "Group × Time interaction: F(2,156)=8.45, p<.001, η²_p=.10 (medium)"
- ✅ Interpretation: Labels all effect sizes (small/medium/large) with conventional thresholds

**Assumption Testing** (Thorough):
- ✅ Normality: "Shapiro-Wilk tests for residuals: W=0.98, p=.18 (normality confirmed)"
- ✅ Homogeneity: "Levene's test: F(1,78)=1.89, p=.17 (homogeneity confirmed)"
- ✅ Outliers: "2 outliers winsorized (>3 SD), sensitivity analysis unchanged (Supp Table S6)"

**Multiple Comparison Handling** (Transparent):
- ✅ Post-hoc tests: "Pairwise contrasts using emmeans with Tukey adjustment for 6 comparisons (3 timepoints × 2 groups)"
- ✅ Justification: "Tukey adjustment controls family-wise error rate while maintaining power better than Bonferroni"
- ✅ All comparisons reported: "Full pairwise comparison matrix in Supplementary Table S7 (including non-significant)"

**Alpha Level** (Pre-Specified):
- ✅ "Statistical significance set at α=.05 (two-tailed) per pre-registration (https://osf.io/abc123, registered Sept 2024 before recruitment)"

#### 💡 SPECIFIC IMPROVEMENTS:

None needed! Statistical justification is exemplary. Every choice is:
1. Theoretically justified (power from meta-analysis)
2. Methodologically appropriate (mixed models for repeated measures)
3. Transparently reported (all assumptions, all comparisons)
4. Pre-registered (eliminating post-hoc flexibility concerns)

#### 🎯 PRIORITY: N/A (Perfect score - no improvements needed)

---

### DIMENSION 4: CLAIM-EVIDENCE MATCH (0-5)

**Score**: **4/5** ⭐⭐⭐⭐ GOOD

#### ✅ STRENGTHS (Claims Match Data):

**Appropriate Qualifiers**:
- ✅ "MBSR was associated with significantly greater reductions in emotional exhaustion compared to waitlist control (d=0.72)" - uses "associated with" (not "caused")
- ✅ "These findings provide preliminary evidence that MBSR may reduce burnout in medical students" - "preliminary", "may" (not "proves")
- ✅ "Replication with active control conditions is warranted" - acknowledges need for stronger design

**Effect Size Labels Match Magnitude**:
- ✅ d=0.72 labeled "medium-to-large" ✓ (correct per Cohen: 0.5<d<0.8)
- ✅ d=0.34 labeled "small-to-medium" ✓ (correct per Cohen: 0.2<d<0.5)
- ✅ r=-.32 labeled "weak-to-moderate" ✓ (correct: .1<r<.3 = weak, .3<r<.5 = moderate)

**Statistical vs Practical Significance Addressed**:
- ✅ "While statistically significant (p<.001), the reduction of 5.2 points on the MBI Emotional Exhaustion subscale (range 0-54) represents a 9.6% decrease. This falls below the suggested clinically meaningful threshold of 10 points (West et al., 2016), indicating the effect, while reliable, may be modest in practical terms."

#### ⚠️ CONCERNS (Claims Slightly Stronger Than Evidence):

**1. Abstract Overclaim** (Minor):
```
CURRENT ABSTRACT: "MBSR significantly reduced burnout in medical students."

PROBLEM: "Reduced burnout" 은 causal claim인데, waitlist control로는 causality 입증 불가능 (time/attention confounds)

BETTER: "MBSR was associated with greater burnout reductions compared to waitlist
         control, though causal attribution is limited by the control design."
```

**2. Generalization in Discussion** (Minor):
```
CURRENT DISCUSSION: "MBSR is an effective intervention for medical student burnout."

PROBLEM: "Effective" implies proven efficacy, but:
- Single site (one medical school) → limited external validity
- Single culture (predominantly Asian sample) → cultural generalizability unknown
- Waitlist control → can't rule out non-specific factors

BETTER: "MBSR shows promise as an intervention for reducing burnout in medical
         students at [University], though replication across diverse settings
         and with active control conditions is needed to establish efficacy."
```

**3. Mechanism Claim** (Minor):
```
CURRENT: "Increased mindfulness (MAAS scores) mediated the relationship between
          MBSR and burnout reduction, suggesting that enhanced present-moment
          awareness is the key mechanism."

PROBLEM: Mediation analysis was conducted, BUT:
- MAAS is self-report (same-method bias with MBI)
- Temporal precedence unclear (did mindfulness increase BEFORE burnout decreased? Or simultaneous?)
- Without manipulation check (blinding participants to which group practices more mindfulness), MAAS increase could reflect demand characteristics

BETTER: "Mediation analysis suggested that MAAS increases partially accounted for
         burnout reductions (indirect effect 95% CI [0.12, 0.98]). However, this
         should be interpreted cautiously given same-method bias (both self-report)
         and lack of temporal separation. Future studies should assess mindfulness
         behaviorally (e.g., breath-counting accuracy) to verify the mechanism."
```

#### 💡 SPECIFIC IMPROVEMENTS:

**1. Revise Abstract Claim** (MEDIUM Priority):
```
BEFORE: "MBSR significantly reduced burnout in medical students."

AFTER: "MBSR participants showed significantly greater burnout reductions compared
        to waitlist controls (d=0.72), though causal interpretation is limited by
        the control design."
```

**2. Qualify Discussion Generalization** (MEDIUM Priority):
```
BEFORE: "MBSR is an effective intervention for medical student burnout."

AFTER: "MBSR shows promise for reducing burnout in medical students, with effects
        comparable to prior meta-analytic estimates (d=0.72 vs meta d=0.65).
        However, replication with active controls, diverse samples, and behavioral
        mindfulness measures is needed to establish efficacy and generalizability."
```

**3. Acknowledge Mediation Limitations** (LOW Priority):
```
ADD after mediation results:
"This mediation finding should be interpreted cautiously. Both MAAS (mediator)
and MBI (outcome) were self-report, creating same-method bias. Additionally,
temporal precedence was not established (did MAAS increase occur before MBI
decrease?). Future studies should measure mindfulness behaviorally (e.g.,
breath-counting accuracy) at multiple timepoints to clarify the causal sequence."
```

#### 🎯 PRIORITY: MEDIUM

Claim-evidence match would improve from 4/5 → 5/5 with these revisions. Current claims are mostly appropriate, but Abstract and Discussion have minor overstatements.

---

### DIMENSION 5: STATISTICAL RIGOR (0-5)

**Score**: **5/5** ⭐⭐⭐⭐⭐ EXCELLENT

#### ✅ STRENGTHS (Complete Rigor):

**Effect Sizes + 95% CIs for ALL Tests**:
- ✅ Group × Time interaction: F(2,156)=8.45, p<.001, η²_p=.10, 95% CI [.03, .18] (medium)
- ✅ Post-hoc contrasts: MBSR vs Control at Post: d=0.72, 95% CI [0.27, 1.17]
- ✅ Correlation: Practice days × Burnout reduction r=-.32, 95% CI [-.54, -.06]

**Assumption Testing with Exact Statistics**:
- ✅ Normality: Shapiro-Wilk W=0.98, p=.18
- ✅ Homogeneity: Levene's F(1,78)=1.89, p=.17
- ✅ Sphericity: Not applicable (mixed models don't assume sphericity)

**Outlier Handling**:
- ✅ Detection: >3 SD from group mean
- ✅ Treatment: Winsorized (2 outliers, 2.5% of data)
- ✅ Sensitivity: Results unchanged with exclusion (Supplementary Table S6)

**Multiple Comparison Correction**:
- ✅ Post-hoc: Tukey adjustment for 6 pairwise comparisons
- ✅ Adjusted p-values reported: "MBSR vs Control at Post: p_adj=.002"
- ✅ Justification: "Tukey chosen over Bonferroni for better power while controlling FWER"

**Missing Data Handling**:
- ✅ Approach: Intent-to-treat with multiple imputation (mice package, 20 imputations)
- ✅ Sensitivity: Complete-case analysis (N=77) showed similar results (Supplementary Table S4)

**Transparency**:
- ✅ All statistical tests reported (including non-significant)
- ✅ Supplementary materials include:
  - Full pairwise comparison matrix (Table S7)
  - Sensitivity analyses (Tables S4, S5, S6)
  - Analysis code (R script on OSF)
  - Raw data (de-identified, OSF)

#### 💡 SPECIFIC IMPROVEMENTS:

None needed! Statistical rigor is exemplary:
1. Effect sizes + 95% CIs for every test
2. Assumptions tested and reported
3. Outliers handled with sensitivity check
4. Multiple comparisons corrected appropriately
5. Missing data addressed with robust method
6. Complete transparency (all tests, code, data available)

#### 🎯 PRIORITY: N/A (Perfect score - maintain this standard)

---

### DIMENSION 6: TRANSPARENCY (0-5)

**Score**: **5/5** ⭐⭐⭐⭐⭐ EXCELLENT

#### ✅ STRENGTHS (Exemplary Transparency):

**Pre-Registration**:
- ✅ OSF pre-registration (https://osf.io/abc123, timestamped Sept 2024 before recruitment)
- ✅ Includes: Hypotheses, sample size justification, planned analyses, primary vs secondary outcomes

**Open Materials**:
- ✅ OSF repository (https://osf.io/xyz789/) contains:
  - MBSR session-by-session curriculum and instructor manual
  - MBI and MAAS questionnaires (with permission from copyright holders)
  - Recruitment materials and consent forms
  - Data collection protocols

**Open Data**:
- ✅ De-identified raw data (CSV format) on OSF
- ✅ Data dictionary with variable definitions and coding
- ✅ No missing data without explanation (missing 3-month: 2 MBSR moved away, 1 control no longer enrolled)

**Open Code**:
- ✅ R analysis script on OSF with line-by-line comments
- ✅ Reproducible: Running script on provided data generates exact results reported in paper
- ✅ Includes: Data cleaning, assumption tests, primary analyses, sensitivity analyses, figure generation

**Deviations from Pre-Registration Acknowledged**:
- ✅ "We deviated from pre-registration in one respect: Originally planned 2×2 mixed ANOVA, but switched to linear mixed models (lmer) to handle missing 3-month data (3 participants). This change was made before analyzing outcome data."
- ✅ Honest about why and when deviation occurred

**All Analyses Reported**:
- ✅ Supplementary materials include ALL exploratory analyses, even non-significant:
  - Gender × Group interaction: F(1,76)=0.45, p=.51, η²_p<.01 (non-significant)
  - Age as covariate: β=-0.12, p=.38 (non-significant)
- ✅ "We report all planned and exploratory analyses to avoid selective reporting bias"

**Conflicts of Interest & Funding Disclosed**:
- ✅ "No conflicts of interest to declare. Study funded by [University] Medical Education Research Grant #2024-567. Funding source had no role in study design, data collection, analysis, or manuscript preparation."

#### 💡 SPECIFIC IMPROVEMENTS:

None needed! Transparency is exemplary:
1. Pre-registered (with timestamp)
2. Open materials, data, code (fully reproducible)
3. Deviations acknowledged
4. All analyses reported
5. Funding and conflicts disclosed

This is the GOLD STANDARD for transparency in psychological research.

#### 🎯 PRIORITY: N/A (Perfect score - this is a model to emulate)

---

## Overall Assessment

### TOTAL SCORE: **26/30 (87%)** 🏆 EXCELLENT

┌────────────────────────────────────────────────────────────────────┐
│ DIMENSION BREAKDOWN                                                │
├────────────────────────────────────────────────────────────────────┤
│ 1️⃣ Reproducibility:         4/5 ⭐⭐⭐⭐     (GOOD)                 │
│ 2️⃣ Control Strategy:        3/5 ⭐⭐⭐       (ACCEPTABLE)           │
│ 3️⃣ Statistical Justification: 5/5 ⭐⭐⭐⭐⭐   (EXCELLENT)           │
│ 4️⃣ Claim-Evidence Match:    4/5 ⭐⭐⭐⭐     (GOOD)                 │
│ 5️⃣ Statistical Rigor:       5/5 ⭐⭐⭐⭐⭐   (EXCELLENT)           │
│ 6️⃣ Transparency:            5/5 ⭐⭐⭐⭐⭐   (EXCELLENT)           │
├────────────────────────────────────────────────────────────────────┤
│ **TOTAL**:                **26/30 (87%)**                          │
└────────────────────────────────────────────────────────────────────┘

### OVERALL EVALUATION

**Publication Readiness**: ✅ **READY FOR SUBMISSION** (with minor revisions)

**Strengths**:
1. **Statistical rigor is exemplary**: Effect sizes, CIs, assumptions, corrections - everything top-tier journals require
2. **Transparency is gold standard**: Pre-registration, open data/code, all analyses reported
3. **Well-powered and justified**: Meta-analysis-based power calculation, appropriate statistical tests
4. **Mostly appropriate claims**: Generally matches evidence strength, with minor Abstract/Discussion overstatements

**Weaknesses**:
1. **Waitlist control is weak**: Cannot rule out time/attention/expectancy confounds → limits causal claims
2. **Minor reproducibility gaps**: Home practice verification and clustering adjustment need clarification
3. **Slight overclaiming**: Abstract and Discussion could be more conservative given control design

**Top-Tier Journal Likelihood**:
- **Current manuscript**: 70-80% chance at high-impact psychology journals (e.g., *Journal of Consulting and Clinical Psychology*, *Psychosomatic Medicine*)
- **With revisions**: 85-90% chance if waitlist control limitation is honestly acknowledged and claims are tempered

**Recommended Action**:
1. Address Dimension 1 gaps (home practice, clustering) → 27/30 (90%)
2. Revise Abstract/Discussion to tone down causal/generalization claims → 28/30 (93%)
3. Consider active control follow-up study to strengthen causal inference
4. Submit to *Mindfulness* (impact factor 4.2) or *JCCP* (impact factor 5.5) - very competitive for acceptance

---

## Top 3 Priority Actions

### 🔴 HIGH PRIORITY #1: Acknowledge Waitlist Control Limitation

**Why Critical**:
- Top-tier journals WILL catch this
- Reviewers will question causal claims given weak control
- Honest acknowledgment strengthens rather than weakens paper (shows methodological sophistication)

**Action**:
Add to Discussion/Limitations:
```
"The waitlist control design does not control for non-specific therapeutic factors
(time, attention, group support, expectancy). Therefore, we cannot definitively
attribute burnout reductions to mindfulness practice specifically versus these
alternative mechanisms. Future studies should employ active control conditions
(e.g., health education groups matching MBSR for time/attention/group format but
without mindfulness content) to isolate mindfulness-specific effects."
```

**Also revise Abstract**:
```
CURRENT: "MBSR significantly reduced burnout in medical students."
REVISED: "MBSR participants showed significantly greater burnout reductions
          compared to waitlist controls (d=0.72), though causal interpretation
          is limited by the control design."
```

**Expected Impact**: Prevents "weak control" rejection, demonstrates methodological awareness

---

### 🔴 HIGH PRIORITY #2: Clarify Missing Data and Clustering

**Why Critical**:
- Reproducibility gaps → reviewers cannot verify your analysis decisions
- Clustering (groups nested within MBSR cohorts) is a standard concern in group interventions
- Top journals require explicit statement of missing data handling (ITT vs per-protocol)

**Action 1 - Missing Data**:
Add to Data Analysis:
```
"Missing data: 3 participants lost to 3-month follow-up (2 MBSR, 1 control).
Primary analysis used intent-to-treat (ITT) with multiple imputation (MI) via
mice package in R (20 imputations, predictive mean matching). Sensitivity analysis
with complete cases (N=77) showed results unchanged (Supplementary Table S4)."
```

**Action 2 - Clustering**:
Add to Data Analysis:
```
"MBSR participants were nested within 8 groups (n=5 per group). We accounted for
clustering by including group as random effect in mixed-effects models (lmer
function, lme4 package). Intraclass correlation (ICC) for group: .08 for MBI,
.05 for MAAS (small clustering effects). Results with vs without clustering
adjustment were similar (Supplementary Table S5)."
```

**Expected Impact**: Eliminates reproducibility ambiguity, prevents "insufficient detail" rejection

---

### 🟡 MEDIUM PRIORITY #3: Temper Discussion Generalization

**Why Important** (but not critical):
- Current Discussion says "MBSR is effective" - too strong given single site, waitlist control
- More conservative framing shows scientific humility and sets up follow-up studies

**Action**:
Revise Discussion:
```
CURRENT: "MBSR is an effective intervention for medical student burnout."

REVISED: "MBSR shows promise for reducing burnout in medical students, with
          effects comparable to prior meta-analytic estimates (d=0.72 vs meta
          d=0.65). However, replication with active controls, diverse samples,
          and behavioral mindfulness measures is needed to establish efficacy
          and generalizability."
```

**Expected Impact**: Prevents "overgeneralization" criticism, frames study as strong pilot → follow-up needed

---

## Excellent Practices to Maintain

### ✅ Statistical Rigor (5/5) - Keep This Up!

**What 학생C Did Right**:
- Effect sizes + 95% CIs for EVERY test
- Assumption testing with exact statistics
- Multiple comparison correction (Tukey)
- Sensitivity analyses for outliers and missing data
- Pre-registered analysis plan

**Why This Matters**:
This is what separates accepted papers from rejected papers in top journals. Statistical rigor section scored PERFECT (5/5) - maintain this standard in all future work.

---

### ✅ Transparency (5/5) - Gold Standard!

**What 학생C Did Right**:
- Pre-registration on OSF (timestamped before recruitment)
- Open data, code, materials (fully reproducible)
- All analyses reported (including non-significant)
- Deviations from pre-registration acknowledged
- Funding and conflicts disclosed

**Why This Matters**:
This is the future of psychological research. Journals increasingly REQUIRE open practices. 학생C's transparency is exemplary and should be the model for all students.

---

### ✅ Power Analysis Justification (5/5) - Excellent!

**What 학생C Did Right**:
- Used meta-analysis (Luken & Sammons, 2016, d=0.65) to justify expected effect
- Calculated required N (64) for 80% power at α=.05
- Oversampled to N=90 to account for 15% attrition
- Final N=80 (11% attrition) - excellent retention

**Why This Matters**:
Most students use generic d=0.5 for power analysis. 학생C's meta-analysis-based justification is theoretically grounded and defensible.

---

## Peer Review Summary for 학생C

**Dear 학생C**,

Congratulations on an excellent manuscript! Your study demonstrates strong methodological rigor, exceptional transparency, and sophisticated statistical analysis. With minor revisions addressing the points below, this manuscript will be highly competitive for publication in top-tier journals.

**Major Strengths** (Maintain These):
1. ⭐ **Statistical rigor is exemplary** (5/5) - Effect sizes, CIs, assumptions, corrections all perfect
2. ⭐ **Transparency is gold standard** (5/5) - Pre-registration, open data/code, full reporting
3. ⭐ **Well-powered with meta-analytic justification** - d=0.65 from meta, not generic d=0.5

**Areas for Improvement**:
1. 🔴 **Acknowledge waitlist control limitation** (HIGH Priority) - Add to Abstract + Discussion/Limitations
2. 🔴 **Clarify missing data (ITT + MI) and clustering adjustment** (HIGH Priority) - Add to Data Analysis
3. 🟡 **Temper Discussion generalization** (MEDIUM Priority) - "Shows promise" not "is effective"

**Estimated Score Improvement**:
- Current: 26/30 (87%)
- With all revisions: 28/30 (93%) - HIGHLY COMPETITIVE for *JCCP* or *Mindfulness*

**Recommendation**:
Submit to *Journal of Consulting and Clinical Psychology* (impact factor 5.5) after addressing HIGH priority items. Your statistical rigor and transparency are exactly what top journals look for. The waitlist control is a limitation, but honest acknowledgment will actually STRENGTHEN your paper by demonstrating methodological sophistication.

Great work! This is a model manuscript for the class.

Best regards,
학생D (Peer Reviewer)

---

## How to Use This Example in Workshop

### Individual Preparation (15 minutes before workshop):
1. Students read Example 4.6 (this model peer review)
2. Identify the 6 dimensions and how they're scored
3. Note the structure: Score → Strengths → Concerns → Improvements → Priority

### Peer Review Activity (40 minutes):
1. **Pair Students** (5 min): Match students who wrote similar studies (e.g., 2 intervention studies, 2 correlational studies)
2. **Exchange Methods/Results** (5 min): Students swap excerpts via Figma
3. **Individual Review** (20 min): Each student completes Template 4.4 for partner's work, scoring all 6 dimensions
4. **Pair Discussion** (10 min): Partners discuss reviews, clarify concerns, agree on top 3 priority actions

### Class Debrief (10 minutes):
1. Instructor asks: "What dimension was hardest to score? Why?"
2. Instructor asks: "What surprised you about your partner's feedback?"
3. Instructor highlights: "Common patterns - which dimensions scored lowest across all reviews?"

### Follow-Up Assignment:
- Students revise their Methods/Results based on peer feedback
- Re-score themselves using Template 4.4
- Submit: (1) Original version, (2) Revised version, (3) Self-scoring showing improvement

**Expected Outcome**: Students improve from 18-22/30 (60-73%) to 24-28/30 (80-93%) through structured peer review

---

## Common Peer Review Mistakes to Avoid

### ❌ Mistake #1: "Everything is Perfect" (Grade Inflation)

**Example**: Scoring all dimensions 5/5 when clear gaps exist

**Why Bad**: Not helpful to author, shows reviewer didn't engage critically

**Fix**: Be honest. If reproducibility has gaps (missing software versions), score 3/5 and specify what's missing

---

### ❌ Mistake #2: "Everything is Terrible" (Overly Harsh)

**Example**: Scoring all dimensions 0-2/5 with vague criticisms like "weak methods"

**Why Bad**: Demoralizing, not constructive, doesn't guide improvement

**Fix**: Identify specific strengths BEFORE weaknesses. Use "Before → After" examples to show how to improve.

---

### ❌ Mistake #3: Vague Feedback

**Example**: "Your control group is problematic" (no specifics)

**Why Bad**: Author doesn't know WHAT the problem is or HOW to fix it

**Fix**: Specify: "Waitlist control doesn't control for time/attention. Better: Active control matching MBSR for time (e.g., health education groups)."

---

### ❌ Mistake #4: No Priorities

**Example**: Listing 20 problems without indicating which are critical

**Why Bad**: Overwhelming, author doesn't know where to start

**Fix**: Categorize: HIGH (address before submission), MEDIUM (strengthen paper), LOW (optional refinements)

---

### ❌ Mistake #5: Personal Attacks

**Example**: "This study is poorly designed and shows lack of understanding"

**Why Bad**: Unprofessional, focuses on person not work, violates peer review norms

**Fix**: Focus on work: "The waitlist control design limits causal inference. I recommend active control in future work."

---

## Related Materials

**Templates**:
- `template_4.4_peer_review_rubric.md`: 6-dimension rubric used in this example

**Examples**:
- `example_4.1_bad_methods.md`: Methods with reproducibility gaps (6/30)
- `example_4.2_good_methods.md`: Complete Methods (30/30)
- `example_4.3_bad_results.md`: Results with statistical issues
- `example_4.4_good_results.md`: Bulletproofed Results
- `example_4.5_red_team_blue_team_case.md`: Attack/defense battle case study

**Lecture Notes**:
- `week4/lecture_notes.md`: Complete bulletproofing strategies

---

**Example Version**: 1.0
**Last Updated**: 2025-01-09
**Use**: Week 4 workshop - Model for comprehensive, constructive peer review using 6-dimension rubric with specific, actionable feedback

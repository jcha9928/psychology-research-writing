# Example 6.6: Final Polish & Quality Checklist

**Purpose**: Demonstrate how to use AI Prompts #19-25 to polish a research proposal before submission, addressing feasibility concerns, reducing jargon, balancing excitement vs hype, and conducting final quality checks.

**Learning Objectives**:
- Identify and mitigate feasibility concerns proactively
- Design alternative approaches for risky elements
- Reduce jargon while maintaining precision
- Balance legitimate excitement with avoiding hype
- Conduct systematic pre-submission quality checks

---

## Research Proposal: Before Final Polish

### Current Draft (Needs Polish)

```
TITLE: Novel Multimodal Neuroimaging Approach for Longitudinal Investigation
of Default Mode Network Dysregulation in First-Episode Psychosis: A
Groundbreaking Study

ABSTRACT:
First-episode psychosis (FEP) represents a revolutionary opportunity to
understand the neural basis of schizophrenia spectrum disorders before chronic
illness confounds interpretation. The default mode network (DMN), a critical
intrinsic connectivity network implicated in self-referential processing and
theory of mind, shows paradigm-shifting alterations in psychosis. Using
cutting-edge multimodal neuroimaging (resting-state fMRI, DTI, MEG, and PET),
we will paradigmatically transform understanding of DMN dysfunction by
conducting the first comprehensive investigation of structural, functional,
and metabolic alterations in medication-naïve FEP patients. This groundbreaking
study will recruit 100 FEP patients and 100 matched controls, following them
longitudinally over 3 years with quarterly assessments. We will employ
state-of-the-art machine learning algorithms, including deep convolutional
neural networks and graph theoretical approaches, to identify unprecedented
biomarkers. Expected outcomes include revolutionary new insights into psychosis
neurobiology, game-changing clinical prediction tools, and transformative
therapeutic targets that will fundamentally reshape psychiatric treatment.
```

### Problems Identified

**Problem 1: Hype Overload**
- "Revolutionary", "paradigm-shifting", "groundbreaking", "unprecedented",
  "game-changing", "transformative", "fundamentally reshape"
- Too many superlatives undermine credibility

**Problem 2: Jargon Density**
- "default mode network", "intrinsic connectivity network", "self-referential
  processing", "theory of mind", "resting-state fMRI", "DTI", "MEG", "PET",
  "graph theoretical approaches"
- 10+ technical terms in 150 words—inaccessible to non-specialists

**Problem 3: Feasibility Red Flags**
- 100 medication-naïve FEP patients (very difficult to recruit)
- Quarterly assessments for 3 years (12 time points × 200 participants = 2,400
  visits—retention will be <50%)
- 4 neuroimaging modalities (fMRI + DTI + MEG + PET = $15,000-20,000 per
  participant × 200 = $3-4M imaging costs alone)

**Problem 4: No Contingency Plans**
- What if recruitment is slow?
- What if retention is <70%?
- What if one imaging modality fails?

---

## AI Prompt #19: Feasibility Analysis & Mitigation

### Prompt Used

```
You are a research proposal reviewer focused on feasibility concerns. Analyze
the following proposal for potential feasibility issues and suggest mitigation
strategies.

[Current draft pasted above]

Analysis Request:
1. Identify 3-5 feasibility concerns that reviewers might raise:
   - Sample recruitment challenges
   - Technical difficulties
   - Timeline optimism
   - Resource limitations
   - Retention issues
2. For each concern, provide:
   - Severity (Critical / Moderate / Minor)
   - Mitigation strategy
   - Evidence to support feasibility (if available)

Output Format:
- Concern 1: [Description]
  Severity: [Critical/Moderate/Minor]
  → Mitigation: [Specific strategy]
  → Evidence: [Preliminary data, similar studies, institutional resources]
```

### AI Output: Feasibility Analysis

---

#### CONCERN 1: Medication-Naïve FEP Recruitment (n=100)
**Severity**: 🔴 **CRITICAL**

**Problem**:
Recruiting 100 medication-naïve first-episode psychosis patients is extremely
challenging. Most FEP patients are started on antipsychotics within days of
presentation. Studies attempting similar recruitment report 3-5 years to reach
n=50-60 (Kane et al., 2016; Addington et al., 2018).

**Mitigation Strategies**:
1. **Relax inclusion criteria**:
   - Change "medication-naïve" → "minimally medicated" (<2 weeks antipsychotic
     exposure)
   - Rationale: Captures ~80% more patients while minimizing medication confound
   - Evidence: Meta-analysis shows <2 weeks exposure has minimal brain effects
     (Fusar-Poli et al., 2013)

2. **Multi-site recruitment**:
   - Partner with 3 additional sites (current: 1 site)
   - Sites: Hospital A (current), Hospital B (20 FEP/year), Clinic C (15 FEP/year),
     Clinic D (12 FEP/year)
   - Combined capacity: ~60-70 eligible patients/year → n=100 achievable in 18-24
     months

3. **Alternative sample size**:
   - Primary analysis powered for n=80 (80% power, α=0.05, effect size d=0.6)
   - n=100 provides buffer for 20% attrition
   - If recruitment slower than expected, n=80 still sufficient for Aims 1-2

**Revised Text**:
```
"We will recruit 100 minimally medicated FEP patients (<2 weeks antipsychotic
exposure; Fusar-Poli et al., 2013) through a multi-site consortium of 4
clinical sites serving a catchment area of 2.5 million people. Based on site
admission records (combined 60-70 FEP cases/year), we conservatively estimate
n=100 recruitment within 24 months. Power analysis indicates n=80 provides
adequate power (β=0.80) for primary analyses; n=100 includes 20% buffer for
attrition."
```

---

#### CONCERN 2: Retention Over 3 Years with Quarterly Assessments
**Severity**: 🟡 **MODERATE**

**Problem**:
Longitudinal FEP studies report 40-60% retention at 3 years (Addington et al.,
2018; Lyne et al., 2012). Quarterly assessments (12 time points) increase burden
and reduce retention. Neuroimaging assessments (3-4 hours each) further worsen
attrition.

**Mitigation Strategies**:
1. **Reduce assessment frequency**:
   - Change quarterly → biannual (4 time points instead of 12)
   - Rationale: Captures developmental trajectory while reducing burden
   - Evidence: Symptom changes detectable at 6-month intervals (Kane et al., 2016)

2. **Retention protocol**:
   - Compensation: $100/visit (total $400/participant over 3 years)
   - Flexible scheduling: Evening/weekend appointments
   - Transportation: Uber vouchers or public transit passes
   - Reminder system: SMS/email 1 week before, phone call 2 days before
   - Tracking: Update contact info at each visit, maintain emergency contacts
   - Evidence: Similar protocol achieved 78% retention in our depression study
     (PI's preliminary data)

3. **Intent-to-treat analysis**:
   - Primary analysis uses mixed-effects models (handles missing data)
   - Sensitivity analysis compares completers vs non-completers (check attrition bias)

**Revised Text**:
```
"Participants will complete assessments at baseline, 6, 18, and 36 months
(4 time points), balancing longitudinal coverage with retention feasibility.
We will implement a comprehensive retention protocol including compensation
($100/visit), flexible scheduling, transportation support, and proactive
tracking (details in Retention Plan). Based on this protocol, we achieved 78%
retention at 2 years in our depression neuroimaging study (PI preliminary data,
n=65). We will use mixed-effects models to handle missing data and conduct
sensitivity analyses comparing completers vs non-completers."
```

---

#### CONCERN 3: Four Neuroimaging Modalities (fMRI + DTI + MEG + PET)
**Severity**: 🟡 **MODERATE to 🔴 CRITICAL**

**Problem**:
- **Cost**: $15K-20K per participant × 200 = $3-4M imaging costs (likely exceeds
  R01 budget even at $500K/year × 5 years = $2.5M total)
- **Scan time**: fMRI (45min) + DTI (30min) + MEG (60min) + PET (90min) =
  4-5 hours per session—participant burden too high
- **Complexity**: Coordinating 4 modalities increases scheduling difficulty,
  equipment failure risk

**Mitigation Strategies**:
1. **Prioritize modalities**:
   - **Essential (Aims 1-2)**: fMRI (functional connectivity) + DTI (structural
     connectivity)—core for DMN dysregulation hypothesis
   - **Optional (Aim 3)**: MEG (temporal dynamics), PET (metabolic alterations)—
     nice-to-have but not critical
   - Approach: All participants get fMRI + DTI; subset (n=50/group) gets MEG;
     PET only if additional funding secured

2. **Alternative metabolic measure**:
   - Instead of PET, use fMRI-derived metabolic markers (CMRO2 from BOLD + ASL)
   - Advantages: Same MRI scan, no radiotracer, lower cost
   - Evidence: CMRO2 correlates r=0.7-0.8 with PET glucose metabolism (Tak et al.,
     2014)

3. **Staged design**:
   - **Phase 1 (Years 1-3)**: fMRI + DTI for all (n=200)
   - **Phase 2 (Years 4-5)**: MEG for subset (n=100) if Phase 1 successful
   - Allows early results dissemination, reduces upfront cost

**Revised Text**:
```
"All participants will undergo MRI (3T Siemens Prisma) including resting-state
fMRI and diffusion tensor imaging (DTI) to characterize functional and
structural DMN connectivity (total scan time: 75 minutes). A subset (n=50 per
group) will additionally complete MEG to examine temporal dynamics. We will
derive metabolic proxies from fMRI data (CMRO2 via BOLD + ASL; Tak et al.,
2014) rather than PET, reducing cost and participant burden while capturing
complementary information about neural metabolism. Imaging costs ($7,500/
participant × 200 = $1.5M) are covered by institutional neuroimaging center
subsidies and NIH S10 equipment grants."
```

---

#### CONCERN 4: "First Comprehensive Investigation" Claim
**Severity**: 🟡 **MODERATE**

**Problem**:
Claim of being "first" is risky—reviewers may know of unpublished or recent
work doing something similar.

**Mitigation**:
- Soften claim to "among the first" or "one of few"
- Specify what's novel: "First to combine structural + functional + temporal
  DMN measures in minimally medicated FEP"
- Acknowledge related work: "While prior studies examined DMN using fMRI alone
  (Smith et al., 2015) or in chronic schizophrenia (Jones et al., 2017), ours
  is the first to integrate multimodal imaging in FEP"

**Revised Text**:
```
"This study is among the first to integrate structural (DTI), functional (fMRI),
and temporal (MEG) neuroimaging to comprehensively characterize DMN alterations
in minimally medicated FEP patients. While prior work examined DMN using single
modalities (e.g., Whitfield-Gabrieli et al., 2009) or in chronic patients
(Garrity et al., 2007), the multimodal approach in FEP is novel and addresses
critical gaps..."
```

---

## AI Prompt #20: Alternative Approaches

### Prompt Used

```
You are a research proposal risk management expert. For the following proposal,
design alternative approaches for each Aim in case the primary approach encounters
problems.

[Paste Aims section]

For each Aim:
1. Identify 1-2 scenarios where primary approach might fail
2. Provide alternative approach for each scenario
3. Describe trade-offs (what you gain/lose)
4. Keep to 2-3 sentences per alternative

Format:
"If [primary approach] yields inconclusive results due to [reason], I will
pursue [alternative], which [advantage but also limitation]."
```

### AI Output: Alternative Approaches

---

#### AIM 1 Alternative

**Primary Approach**:
"Characterize DMN functional connectivity differences between FEP and controls
using resting-state fMRI seed-based analysis (seeds: mPFC, PCC, lateral parietal)."

**Scenario 1: Group differences non-significant** (p > 0.05)

**Alternative**:
```
If seed-based analysis yields null results, potentially due to heterogeneity
within FEP group, I will pursue subgroup analysis using unsupervised clustering
(k-means on connectivity matrices, k=2-4), which may identify biologically
distinct FEP subgroups with different DMN profiles, though interpretation is
more exploratory and requires replication.
```

**Trade-offs**:
- ✅ Gain: Captures heterogeneity, may reveal subtypes
- ⚠️ Lose: Less hypothesis-driven, multiple comparisons, needs validation

---

**Scenario 2: Motion artifacts contaminate resting-state data**

**Alternative**:
```
If excessive motion (>25% of FEP participants with >0.5mm framewise displacement)
precludes reliable resting-state connectivity estimation, I will use task-based
fMRI (social cognition tasks activating DMN regions), which constrains head
motion through active engagement, though task compliance may also be impaired
in FEP and tasks probe different DMN functions than rest.
```

**Trade-offs**:
- ✅ Gain: Reduces motion, engaging task
- ⚠️ Lose: Different DMN state (task vs rest), task performance confound

---

#### AIM 2 Alternative

**Primary Approach**:
"Use machine learning (Random Forest) to predict 3-year clinical outcomes from
baseline DMN connectivity features."

**Scenario 1: Predictive accuracy poor** (AUC < 0.65)

**Alternative**:
```
If baseline DMN features alone provide insufficient predictive power (AUC < 0.65),
I will incorporate longitudinal connectivity trajectories (slope of connectivity
change from baseline to 6 months), which capture dynamic illness progression
and typically improve prediction by 10-15% (Norman et al., 2019), though this
reduces sample size to those with complete 6-month data (~80% of n).
```

**Trade-offs**:
- ✅ Gain: Trajectory information more informative than single time point
- ⚠️ Lose: Requires 6-month data (reduces sample, delays prediction)

---

**Scenario 2: Overfitting due to small sample relative to features**

**Alternative**:
```
If model overfitting occurs (cross-validation accuracy >> test accuracy) due
to high feature dimensionality relative to sample size, I will apply principal
component analysis (PCA) for dimensionality reduction, retaining 90% variance
in ~10-15 components, which reduces overfitting risk but loses interpretability
of specific connections driving predictions.
```

**Trade-offs**:
- ✅ Gain: Better generalization, reduced overfitting
- ⚠️ Lose: Less interpretable (components vs connections)

---

## AI Prompt #21: Jargon Minimization

### Prompt Used

```
You are a science communication expert. Reduce jargon in the following text
while maintaining scientific precision.

[Paste abstract or section]

Requirements:
1. Identify unnecessary jargon → suggest plain language alternatives
2. Keep necessary technical terms but add brief explanations at first use
3. Simplify complex sentence structures
4. Aim for "educated non-specialist" comprehension level
5. Preserve scientific accuracy

Output:
- Jargon → Plain language conversion table
- Revised text with accessibility score (1-10, 10=most accessible)
```

### AI Output: Jargon Analysis

---

#### Jargon → Plain Language Conversion Table

| Technical Jargon | Plain Language Alternative | When to Keep Jargon |
|------------------|----------------------------|---------------------|
| "default mode network (DMN)" | "brain regions active during rest and self-reflection" | Keep, but define at first use |
| "intrinsic connectivity network" | "brain network" | Replace (adds no precision) |
| "self-referential processing" | "thinking about oneself" | Replace |
| "theory of mind" | "understanding others' thoughts" | Keep, but define |
| "resting-state fMRI" | "brain imaging during rest" → "resting-state fMRI (brain imaging during rest)" | Keep with definition |
| "DTI" | "diffusion tensor imaging (DTI)" | Keep with full form |
| "MEG" | "magnetoencephalography (MEG)" | Keep with full form |
| "graph theoretical approaches" | "network analysis methods" | Replace |
| "deep convolutional neural networks" | "machine learning algorithms" | Replace (over-specific) |
| "medication-naïve" | "not yet treated with antipsychotics" | Rephrase for clarity |

---

#### Revised Abstract (Jargon-Reduced)

**Before** (Accessibility Score: 3/10):
```
First-episode psychosis (FEP) represents a revolutionary opportunity to
understand the neural basis of schizophrenia spectrum disorders before chronic
illness confounds interpretation. The default mode network (DMN), a critical
intrinsic connectivity network implicated in self-referential processing and
theory of mind, shows paradigm-shifting alterations in psychosis.
```

**After** (Accessibility Score: 8/10):
```
First-episode psychosis (FEP)—the initial occurrence of psychotic symptoms—
offers a critical window to understand brain changes in schizophrenia before
chronic illness and long-term medication complicate interpretation. The default
mode network (DMN), a set of brain regions active during rest and involved in
thinking about oneself and understanding others' perspectives, shows consistent
alterations in psychosis.
```

**Changes**:
- ✅ Added definition: "FEP—the initial occurrence of psychotic symptoms"
- ✅ Simplified: "critical intrinsic connectivity network" → "set of brain regions"
- ✅ Plain language: "self-referential processing and theory of mind" →
  "thinking about oneself and understanding others' perspectives"
- ✅ Removed hype: "revolutionary opportunity" → "critical window"
- ✅ Removed hype: "paradigm-shifting alterations" → "consistent alterations"

---

#### Full Revised Abstract

**Accessibility Score: 8/10** (comprehensible to educated non-specialists while
maintaining scientific precision)

```
TITLE: Multimodal Brain Imaging Investigation of Network Alterations in
First-Episode Psychosis

ABSTRACT:
First-episode psychosis (FEP)—the initial occurrence of psychotic symptoms—
offers a critical window to understand brain changes in schizophrenia before
chronic illness and long-term medication complicate interpretation. The default
mode network (DMN), a set of brain regions active during rest and involved in
self-reflection, shows consistent alterations in psychosis. Using complementary
brain imaging methods (functional MRI to measure brain activity, diffusion
imaging to measure brain structure, and magnetoencephalography to measure
timing), we will comprehensively characterize DMN changes in 100 minimally
medicated FEP patients compared to 100 matched healthy participants. We will
follow participants over 3 years to examine whether baseline brain imaging
patterns predict clinical outcomes. Machine learning algorithms will identify
patterns in brain connectivity that distinguish patients from controls and
predict who will respond well to treatment. Expected outcomes include new
insights into psychosis neurobiology, improved prediction tools for clinical
decision-making, and potential therapeutic targets. This research addresses
fundamental questions about how brain networks are disrupted in psychosis and
could inform earlier, more personalized intervention strategies.
```

**Key Improvements**:
- Jargon reduced from 12 terms to 6 terms (all defined)
- Sentence complexity reduced (avg 22 words → 18 words per sentence)
- Active voice where possible
- Concrete outcomes ("new insights", "improved prediction") instead of hype
  ("revolutionary", "game-changing")

---

## AI Prompt #22: Excitement vs Hype Balance

### Prompt Used

```
You are an academic writing editor. Analyze the following text for hype vs
legitimate excitement. Identify hype expressions and suggest more balanced
alternatives.

[Paste text]

Analysis:
1. Identify hype expressions:
   - Unsupported superlatives ("revolutionary", "groundbreaking")
   - Exaggerated promises
   - Marketing language
2. For each hype expression:
   - Delete (if unnecessary)
   - Tone down (more modest alternative)
   - Add evidence (if claim is legitimate but needs support)
3. Identify legitimate excitement to keep/strengthen:
   - Evidence-based enthusiasm
   - Appropriate use of "first", "novel", "significant"

Output:
- Hype alert: [problematic phrase] → [improved version]
- Legitimate excitement: [phrases to keep]
- Overall tone assessment
```

### AI Output: Hype Analysis

---

#### HYPE ALERT: Problems Identified

| Hype Expression | Problem | Improved Version | Justification |
|----------------|---------|------------------|---------------|
| "revolutionary opportunity" | Overstatement | "critical opportunity" OR "unique window" | More measured, still conveys importance |
| "paradigm-shifting alterations" | Marketing speak | "consistent alterations" OR "substantial changes" | Accurate without hype |
| "paradigmatically transform understanding" | Redundant + hype | "advance understanding" OR "provide new insights" | Realistic contribution |
| "cutting-edge multimodal neuroimaging" | Buzzword | "complementary neuroimaging methods" OR "multimodal neuroimaging" | Method is standard, not cutting-edge |
| "groundbreaking study" (in title) | Self-aggrandizing | Delete | Let reviewers judge if it's groundbreaking |
| "unprecedented biomarkers" | Unsupported claim | "novel biomarkers" OR "candidate biomarkers" | Unless truly first, avoid "unprecedented" |
| "revolutionary new insights" | Double hype | "new insights" OR "important insights" | Insights can speak for themselves |
| "game-changing clinical prediction tools" | Marketing language | "improved prediction tools" OR "clinically useful prediction tools" | Focused on utility, not hype |
| "transformative therapeutic targets" | Overpromise | "potential therapeutic targets" | Acknowledges uncertainty |
| "fundamentally reshape psychiatric treatment" | Grandiose | "inform treatment development" OR "contribute to treatment innovation" | More realistic scope |

---

#### LEGITIMATE EXCITEMENT: Keep These

| Expression | Why It's OK | Evidence Needed |
|------------|-------------|-----------------|
| "first comprehensive investigation" | If accurate, this IS novel | Need literature search showing no prior multimodal DMN study in FEP |
| "significant alterations" | Standard scientific language | Effect sizes d > 0.5 justify "significant" |
| "novel approach" | Appropriate if combining methods in new way | Cite that combo hasn't been done |
| "important questions" | Reasonable framing | Questions are indeed important for field |

---

#### Tone-Balanced Revision

**Before** (Hype Score: 9/10 🔴):
```
This groundbreaking study will paradigmatically transform understanding of DMN
dysfunction by conducting the first comprehensive investigation of structural,
functional, and metabolic alterations in medication-naïve FEP patients. Expected
outcomes include revolutionary new insights into psychosis neurobiology,
game-changing clinical prediction tools, and transformative therapeutic targets
that will fundamentally reshape psychiatric treatment.
```

**After** (Hype Score: 2/10 ✅):
```
This study will advance understanding of DMN dysfunction by conducting one of
the first comprehensive investigations of structural, functional, and temporal
alterations in minimally medicated FEP patients. Expected outcomes include
new insights into early psychosis neurobiology, improved clinical prediction
tools, and potential therapeutic targets that could inform treatment development.
```

**Reductions**:
- ✅ "groundbreaking" → deleted
- ✅ "paradigmatically transform" → "advance"
- ✅ "first comprehensive" → "one of the first" (safer claim)
- ✅ "medication-naïve" → "minimally medicated" (more achievable)
- ✅ "revolutionary new insights" → "new insights"
- ✅ "game-changing clinical prediction tools" → "improved clinical prediction tools"
- ✅ "transformative therapeutic targets" → "potential therapeutic targets"
- ✅ "fundamentally reshape psychiatric treatment" → "could inform treatment
  development"

---

## AI Prompt #25: Final Checklist

### Prompt Used

```
You are a research proposal submission expert. Conduct a comprehensive final
check of the following proposal using this checklist. For each item, indicate
Yes/No/Partial and provide brief comments.

[Paste full proposal]

CONTENT COMPLETENESS:
- [ ] Clear problem statement with significance
- [ ] Innovation explicitly stated
- [ ] 3 Specific Aims well-defined
- [ ] Methodology sufficiently detailed
- [ ] Feasibility addressed (preliminary data, alternatives)
- [ ] Impact articulated (immediate, medium, long-term)
- [ ] Broader Impact included

QUALITY & CLARITY:
- [ ] Opening is compelling (strong hook)
- [ ] Narrative arc is coherent (logical flow)
- [ ] Jargon minimized, accessible to non-specialists
- [ ] No hype, but enthusiasm present
- [ ] Figures/visuals support text

FORMATTING & POLISH:
- [ ] Page limits respected
- [ ] References formatted correctly
- [ ] No typos or grammatical errors
- [ ] Consistent terminology throughout
- [ ] Acronyms defined at first use

STRATEGIC ELEMENTS:
- [ ] Addresses potential reviewer concerns
- [ ] Alternative approaches provided
- [ ] Timeline realistic
- [ ] Budget justified (if applicable)

Provide:
- Readiness score (1-10)
- Top 3 strengths
- Top 3 areas needing improvement before submission
```

### AI Output: Final Checklist Results

---

#### CONTENT COMPLETENESS (7/7 ✅)

| Item | Status | Comment |
|------|--------|---------|
| Clear problem statement | ✅ Yes | Strong hook, FEP as critical window well-established |
| Innovation explicitly stated | ✅ Yes | "One of first to integrate structural + functional + temporal..." |
| 3 Specific Aims well-defined | ✅ Yes | Clear progression: characterize → predict → validate |
| Methodology sufficiently detailed | ✅ Yes | Imaging parameters, sample size, analysis plan all specified |
| Feasibility addressed | ✅ Yes | Multi-site recruitment, retention protocol, preliminary data |
| Impact articulated | ✅ Yes | Immediate (pubs, data), medium (adoption), long-term (practice change) |
| Broader Impact included | ✅ Yes | Student training, open data, clinical translation pathways |

**Subsection Score**: 7/7 (100%) ✅

---

#### QUALITY & CLARITY (4/5 ⚠️)

| Item | Status | Comment |
|------|--------|---------|
| Opening is compelling | ✅ Yes | Strong problem-driven hook with statistics |
| Narrative arc is coherent | ✅ Yes | Good "Therefore..." transitions between sections |
| Jargon minimized | ✅ Yes | Technical terms defined at first use, accessible language |
| No hype, enthusiasm present | ✅ Yes | After revision, hype removed but excitement retained |
| Figures/visuals support text | ⚠️ **MISSING** | **No figures included—add study design flowchart + DMN diagram** |

**Subsection Score**: 4/5 (80%) ⚠️ → Need to add figures

---

#### FORMATTING & POLISH (5/5 ✅)

| Item | Status | Comment |
|------|--------|---------|
| Page limits respected | ✅ Yes | 12 pages (within 15-page NIH R01 Research Strategy limit) |
| References formatted correctly | ✅ Yes | All citations in PubMed format (Author et al., Year) |
| No typos/grammar errors | ✅ Yes | Clean after revision |
| Consistent terminology | ✅ Yes | "FEP", "DMN", "fMRI" used consistently |
| Acronyms defined | ✅ Yes | All acronyms defined at first use |

**Subsection Score**: 5/5 (100%) ✅

---

#### STRATEGIC ELEMENTS (3/4 ⚠️)

| Item | Status | Comment |
|------|--------|---------|
| Addresses reviewer concerns | ✅ Yes | Feasibility concerns proactively addressed in text |
| Alternative approaches provided | ✅ Yes | Alternatives for each Aim in case of failure |
| Timeline realistic | ✅ Yes | 5 years for n=200 with 4 time points is achievable |
| Budget justified | ⚠️ **PARTIAL** | **Imaging costs mentioned ($1.5M) but no detailed budget breakdown** |

**Subsection Score**: 3/4 (75%) ⚠️ → Need detailed budget justification

---

### OVERALL ASSESSMENT

**Readiness Score**: 8.5/10 ✅ (Ready to submit with minor additions)

**Top 3 Strengths**:
1. ✅ **Strong feasibility**: Multi-site recruitment, retention protocol,
   preliminary data all enhance credibility
2. ✅ **Well-balanced tone**: Hype removed, legitimate excitement retained,
   accessible to non-specialists
3. ✅ **Coherent narrative**: Clear problem → innovation → aims → impact flow
   with good transitions

**Top 3 Areas Needing Improvement**:
1. ⚠️ **Add figures** (2 recommended):
   - Figure 1: Study design flowchart (recruitment → assessments → analysis)
   - Figure 2: DMN schematic (showing mPFC, PCC, lateral parietal seeds)
2. ⚠️ **Budget justification**: Add detailed breakdown showing how $1.5M imaging
   costs are covered (institutional subsidies, S10 grants)
3. 🟢 **Minor**: Add 1-2 more citations for DMN alterations in FEP (currently
   only 2 cited—add 3-4 to show robust literature base)

---

### RECOMMENDATION

**Status**: ✅ **APPROVE FOR SUBMISSION** (with minor additions)

**Action Items Before Submission** (estimated time: 4-6 hours):
1. Create 2 figures (Figure 1: Study design, Figure 2: DMN schematic) – 3 hours
2. Add budget justification section (1 paragraph) – 1 hour
3. Add 2-3 more DMN citations – 30 minutes
4. Final proofread – 30 minutes

**Submission Timeline**:
- Complete action items: 1 day
- Internal review by mentor/colleagues: 2-3 days
- Final revisions: 1 day
- **Ready for submission**: Within 1 week

---

## Part 2: Executive Summary Generation

### AI Prompt #23: Executive Summary

### Prompt Used

```
You are an executive summary expert. Compress the following full research
proposal into a 1-page executive summary (300-400 words).

[Paste full proposal]

Requirements:
1. Structure (each 2-3 sentences):
   - Problem & Significance
   - Innovation & Approach
   - Specific Aims (bullet points)
   - Expected Impact
   - Qualifications (brief)
2. Total: 300-400 words
3. Minimal technical detail, maximal comprehension
4. Stand-alone readable (complete story without full proposal)
5. Compelling and accessible
```

### AI Output: Executive Summary (378 words)

---

**EXECUTIVE SUMMARY**

**Problem & Significance**:
Schizophrenia affects 1% of the population and typically emerges in late
adolescence with first-episode psychosis (FEP). Early intervention during FEP
significantly improves long-term outcomes, but we lack biomarkers to predict
which patients will respond well to treatment versus those who will develop
chronic disability. The default mode network (DMN)—brain regions active during
rest and self-reflection—shows consistent disruptions in psychosis, but the
relationship between these brain changes and clinical outcomes remains unclear.
Understanding DMN alterations in FEP, before chronic illness and long-term
medication confound interpretation, could enable personalized treatment decisions.

**Innovation & Approach**:
This study is among the first to integrate structural, functional, and temporal
neuroimaging to comprehensively characterize DMN changes in minimally medicated
FEP patients. While prior work examined single imaging modalities or chronic
patients, our multimodal approach in FEP is novel. We will recruit 100 FEP
patients and 100 matched healthy controls through a multi-site consortium,
following them over 3 years with brain imaging at baseline, 6, 18, and 36 months.
Using machine learning, we will identify brain connectivity patterns that
distinguish patients from controls and predict clinical trajectories.

**Specific Aims**:
- **Aim 1**: Characterize DMN structural and functional connectivity differences
  between FEP patients and controls using MRI
- **Aim 2**: Develop machine learning models to predict 3-year clinical outcomes
  (symptom remission, functional recovery) from baseline brain imaging
- **Aim 3**: Validate prediction models in an independent cohort and assess
  clinical utility for treatment planning

**Expected Impact**:
This research will produce (1) new insights into DMN disruptions in early
psychosis, published in high-impact journals (*Biological Psychiatry*,
*JAMA Psychiatry*); (2) open-source brain imaging datasets and analysis code
to accelerate field progress; (3) validated prediction tools to inform clinical
decision-making (e.g., identifying patients needing intensive vs standard care).
Long-term, adoption of brain-based prediction could enable more personalized,
effective early intervention, improving outcomes for thousands of young people
experiencing first psychosis.

**Qualifications**:
Our team combines expertise in psychosis neurobiology (PI: 15 FEP publications),
neuroimaging methods (Co-I: 50+ fMRI papers), and machine learning (Co-I:
Google Scholar h-index 42). We have institutional support including subsidized
neuroimaging access ($1.5M value) and established FEP recruitment pipelines
(60-70 cases/year across 4 sites).

---

**Word Count**: 378 words ✅

**Stand-Alone Test**: Can a non-specialist understand the full story? ✅ Yes

---

## Part 3: Student Worksheet - Apply to Your Own Proposal

### Checklist: Pre-Submission Quality Checks

**Instructions**: Complete this checklist 1 week before submission deadline.
For each "No" or "Partial", create action item with timeline.

---

#### Section 1: Content Completeness

| Item | Yes/No/Partial | Action Needed (if No/Partial) |
|------|----------------|-------------------------------|
| Clear problem statement with statistics/evidence | _____ | |
| Innovation explicitly stated (how different from prior work) | _____ | |
| 3 Specific Aims with clear objectives | _____ | |
| Methodology detailed enough for expert to assess feasibility | _____ | |
| Preliminary data included (if required for funding mechanism) | _____ | |
| Feasibility concerns addressed proactively | _____ | |
| Alternative approaches for risky elements | _____ | |
| Impact articulated (immediate, medium, long-term) | _____ | |
| Broader Impact (if NSF or required) | _____ | |

**Subsection Score**: _____ / 9

---

#### Section 2: Quality & Clarity

| Item | Yes/No/Partial | Action Needed |
|------|----------------|---------------|
| Opening hook is compelling (not generic) | _____ | |
| Narrative arc: "Therefore..." logic between sections | _____ | |
| Opening-closing echo present | _____ | |
| Central theme repeated throughout | _____ | |
| Jargon minimized, technical terms defined | _____ | |
| Hype removed (no "revolutionary", "groundbreaking") | _____ | |
| Legitimate excitement retained | _____ | |
| Figures/visuals included and informative | _____ | |
| Figure captions stand-alone readable | _____ | |

**Subsection Score**: _____ / 9

---

#### Section 3: Formatting & Polish

| Item | Yes/No/Partial | Action Needed |
|------|----------------|---------------|
| Page limits respected | _____ | |
| Font/margins match agency requirements | _____ | |
| References formatted correctly (PubMed, APA, etc.) | _____ | |
| No typos or grammatical errors | _____ | |
| Consistent terminology (not switching between terms) | _____ | |
| Acronyms defined at first use | _____ | |
| Headings/subheadings clear and informative | _____ | |

**Subsection Score**: _____ / 7

---

#### Section 4: Strategic Elements

| Item | Yes/No/Partial | Action Needed |
|------|----------------|---------------|
| Addresses likely reviewer concerns upfront | _____ | |
| Alternative approaches for each Aim | _____ | |
| Timeline realistic and justified | _____ | |
| Budget matches scope (if applicable) | _____ | |
| Human subjects/animal protocol approved or pending | _____ | |
| Letters of support secured (if collaborative) | _____ | |

**Subsection Score**: _____ / 6

---

### Overall Readiness Assessment

**Total Score**: _____ / 31

**Interpretation**:
- **28-31 (90-100%)**: ✅ Excellent—ready to submit
- **24-27 (75-89%)**: ⚠️ Good—minor improvements needed
- **20-23 (65-74%)**: 🟡 Adequate—significant revision recommended
- **<20 (<65%)**: 🔴 Needs major work—not ready for submission

**My Readiness Score**: _____ / 31 = _____ %

**Top 3 Weaknesses to Address**:
1. _________________________________
2. _________________________________
3. _________________________________

**Timeline to Address**:
- Weakness 1: Due by __________
- Weakness 2: Due by __________
- Weakness 3: Due by __________

**Submission Target Date**: __________

---

## Teaching Notes

### Discussion Questions

**Q1: How much jargon is too much?**
- **A**: If >10% of words are technical terms unfamiliar to educated non-specialists,
  it's too much. Rule of thumb: Define all terms at first use; if you're defining
  >5 terms in one paragraph, simplify.

**Q2: When is "first" okay vs hype?**
- **A**:
  - ✅ OK: "First to combine X + Y in Z population" (specific, verifiable)
  - ⚠️ Risky: "First comprehensive investigation" (what's comprehensive?)
  - ❌ Hype: "First groundbreaking study" (self-aggrandizing)

**Q3: How do you balance ambition vs feasibility?**
- **A**: State ambitious goals but show you've thought through risks. Formula:
  "We aim to [ambitious goal]. Feasibility is supported by [preliminary data,
  institutional resources]. If [risk occurs], we will [alternative]."

**Q4: Should you always include alternative approaches?**
- **A**: For NIH/NSF, yes—shows you've anticipated problems. For journal papers,
  no—already completed work doesn't need alternatives.

**Q5: How much time for final polish?**
- **A**: Plan 1 week minimum. Day 1-2: Checklist. Day 3-4: Revisions. Day 5-6:
  Peer review. Day 7: Final touches.

### Common Student Errors

**Error 1: Checklist as afterthought**
- Wrong: Complete proposal → run checklist day before deadline → realize major
  issues → panic
- Right: Run checklist 1-2 weeks before deadline → systematic addressing →
  stress-free submission

**Error 2: Ignoring "Partial" ratings**
- "Partial" = needs work, not "good enough"
- Treat "Partial" as "No" for high-stakes submissions

**Error 3: Over-reliance on spell-check**
- Spell-check misses: "pubic health" (should be "public"), "trail" (should be "trial")
- Solution: Human proofreader + read aloud

**Error 4: Not testing executive summary stand-alone**
- Give summary to non-expert friend—can they understand the full story?
- If not, revise

---

## Key Lessons

### Lesson 1: Feasibility Concerns = Opportunity to Show Competence
- Don't hide concerns—address them proactively
- Mitigation strategies demonstrate you've thought deeply
- Preliminary data is your best friend

### Lesson 2: Jargon ≠ Sophistication
- Accessible writing ≠ dumbing down
- Define terms, simplify structure, maintain precision
- Non-specialists review your proposal too (program officers, panel members)

### Lesson 3: Hype Undermines Credibility
- Reviewers are experts—they spot hype instantly
- "Revolutionary" makes them skeptical, not excited
- Let the science speak; remove marketing language

### Lesson 4: Checklist is Safety Net, Not Burden
- Catches errors before reviewers do
- Systematic approach reduces anxiety
- Start checklist early (1-2 weeks before deadline)

### Lesson 5: Polish Matters
- Two proposals with identical science—polished one scores higher
- Typos signal carelessness
- Consistency signals rigor

---

## Final Reflection Prompt

After completing all polish steps and checklist:

**Self-Assessment (200-300 words)**:

1. **What was my initial readiness score?** _____ / 31
2. **What is my final readiness score after revisions?** _____ / 31
3. **Improvement**: _____ points
4. **Which improvement had the biggest impact on my confidence?**
   - ☐ Feasibility mitigation strategies
   - ☐ Jargon reduction
   - ☐ Hype removal
   - ☐ Checklist completion
   - ☐ Peer feedback
5. **What surprised me most during final polish?**
6. **If I could give one tip to a colleague about final polish, it would be:**
7. **Am I confident submitting this proposal?** Yes / No / Somewhat
   - If No/Somewhat, what's still needed?

---

**End of Example 6.6**

Total: ~2,180 lines

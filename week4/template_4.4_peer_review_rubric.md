# Template 4.4: Peer Review Rubric for Bulletproofing

**Purpose**: Structured 20-minute peer review integrating all Week 4 bulletproofing dimensions

**Use in Workshop**: Round-robin review (15min) → Feedback synthesis (5min)

**Target**: Comprehensive evaluation across 6 dimensions (30 points total) + actionable feedback

---

## Rubric Philosophy

**"If I were a Nature/Science reviewer, would I recommend acceptance?"**

This rubric combines:
- **Reproducibility** (from Template 4.3)
- **Statistical Rigor** (from Template 4.2)
- **Rejection Prevention** (from Template 4.1)

---

## Figma Canvas Layout (3840×2160px)

### Left Panel (800px wide) - 6-Dimension Rubric [FIXED]

```
┌─────────────────────────────────────────────────────────────────────┐
│ 📋 WEEK 4: BULLETPROOFING PEER REVIEW RUBRIC                        │
│                                                                       │
│ 🎯 Goal: Comprehensive Methods/Results evaluation (30 points total)  │
│                                                                       │
│ Each dimension scored 0-5:                                           │
│ 5 = Excellent (Nature/Science ready)                                 │
│ 4 = Good (minor revisions)                                           │
│ 3 = Acceptable (moderate revisions)                                  │
│ 2 = Weak (major revisions)                                           │
│ 1 = Insufficient (near-complete rewrite)                             │
│ 0 = Missing (section absent)                                         │
│                                                                       │
│ ═════════════════════════════════════════════════════════════════   │
│ DIMENSION 1: REPRODUCIBILITY (0-5)                                  │
│ ═════════════════════════════════════════════════════════════════   │
│                                                                       │
│ **Question**: "Could I replicate this study using only the Methods?" │
│                                                                       │
│ 5/5 - All 6 elements complete:                                       │
│ ✅ Participants (recruitment, criteria, N, demographics, IRB)        │
│ ✅ Materials (source, version, reliability, validity, availability)  │
│ ✅ Procedure (steps, timing, instructions, environment)              │
│ ✅ Parameters (all values, units, ranges specified)                  │
│ ✅ Software/Equipment (name, version, specs, settings)               │
│ ✅ Data Processing (transformation, exclusions, code availability)   │
│                                                                       │
│ 4/5 - Missing 1 element OR minor gaps in 2 elements                  │
│                                                                       │
│ 3/5 - Missing 2 elements OR major gaps in 3+ elements                │
│                                                                       │
│ 2/5 - Missing 3+ elements, many details vague                        │
│                                                                       │
│ 1/5 - Most elements missing, reproduction nearly impossible          │
│                                                                       │
│ 0/5 - Methods section absent or <3 sentences                         │
│                                                                       │
│ **Review Focus**:                                                    │
│ • Could I order same materials?                                      │
│ • Could I set up identical procedure?                                │
│ • Could I run same analysis code?                                    │
│                                                                       │
│ ═════════════════════════════════════════════════════════════════   │
│ DIMENSION 2: CONTROL STRATEGY (0-5)                                 │
│ ═════════════════════════════════════════════════════════════════   │
│                                                                       │
│ **Question**: "Are alternative explanations adequately ruled out?"   │
│                                                                       │
│ 5/5 - Comprehensive control strategy:                                │
│ ✅ Alternative explanations identified                               │
│ ✅ Each alternative addressed with specific control                  │
│ ✅ Manipulation checks reported (and passed)                         │
│ ✅ Confounds measured/controlled (task difficulty, arousal, etc.)    │
│ ✅ Negative controls included (where applicable)                     │
│                                                                       │
│ 4/5 - Strong controls, minor gap (e.g., no negative control)         │
│                                                                       │
│ 3/5 - Basic controls present, some alternatives not addressed        │
│                                                                       │
│ 2/5 - Weak controls, major confounds uncontrolled                    │
│                                                                       │
│ 1/5 - Minimal/no control strategy, multiple alternatives viable      │
│                                                                       │
│ 0/5 - No controls mentioned                                          │
│                                                                       │
│ **Review Focus**:                                                    │
│ • What alternative explanations remain?                              │
│ • Are manipulation checks adequate?                                  │
│ • Are confounds controlled or measured?                              │
│                                                                       │
│ ═════════════════════════════════════════════════════════════════   │
│ DIMENSION 3: STATISTICAL JUSTIFICATION (0-5)                        │
│ ═════════════════════════════════════════════════════════════════   │
│                                                                       │
│ **Question**: "Is every statistical choice defensible?"              │
│                                                                       │
│ 5/5 - Every choice justified:                                        │
│ ✅ Sample size: A priori power analysis (G*Power, α, power, d)       │
│ ✅ Test selection: Matches data structure + assumptions tested       │
│ ✅ Multiple comparisons: Corrected (Bonferroni/FDR) OR hierarchical  │
│ ✅ Effect size: Expected effect justified (pilot/previous work)      │
│ ✅ Assumptions: Tested + violations handled (robust/alternative)     │
│                                                                       │
│ 4/5 - Most justified, minor gap (e.g., no sensitivity analysis)      │
│                                                                       │
│ 3/5 - Basic justification, some choices unexplained                  │
│                                                                       │
│ 2/5 - Weak justification ("standard practice" without evidence)      │
│                                                                       │
│ 1/5 - No justification, choices appear arbitrary                     │
│                                                                       │
│ 0/5 - Statistical approach not specified                             │
│                                                                       │
│ **Review Focus** (Red Team attacks):                                 │
│ • Power adequate for expected effect?                                │
│ • Multiple comparisons addressed?                                    │
│ • Assumptions tested and met?                                        │
│                                                                       │
│ ═════════════════════════════════════════════════════════════════   │
│ DIMENSION 4: CLAIM-EVIDENCE MATCH (0-5)                             │
│ ═════════════════════════════════════════════════════════════════   │
│                                                                       │
│ **Question**: "Do Results claims match data evidence level?"         │
│                                                                       │
│ 5/5 - Perfect match, conservative claims:                            │
│ ✅ Causal claims ONLY if randomized assignment OR temporal precedence│
│ ✅ Correlational design → "associated with" (not "causes")           │
│ ✅ Limited sample → "in this sample" (not "in general")              │
│ ✅ Effect sizes contextualized (field norms, practical significance) │
│ ✅ No overclaiming beyond data                                       │
│                                                                       │
│ 4/5 - Mostly matched, 1-2 slightly strong claims                     │
│                                                                       │
│ 3/5 - Several claims exceed evidence, need toning down               │
│                                                                       │
│ 2/5 - Frequent overclaiming, causal language without evidence        │
│                                                                       │
│ 1/5 - Severe overclaiming, correlation→causation throughout          │
│                                                                       │
│ 0/5 - Results section missing                                        │
│                                                                       │
│ **Review Focus** (Overclaiming detector):                            │
│ • "X causes Y" - is this causal design?                              │
│ • "X is necessary for Y" - sufficiency tested?                       │
│ • "Works in general" - tested in multiple contexts?                  │
│                                                                       │
│ ═════════════════════════════════════════════════════════════════   │
│ DIMENSION 5: STATISTICAL RIGOR (0-5)                                │
│ ═════════════════════════════════════════════════════════════════   │
│                                                                       │
│ **Question**: "Are Results statistically bulletproof?"               │
│                                                                       │
│ 5/5 - Comprehensive rigor:                                           │
│ ✅ Effect sizes + CI for all main results (d, η², r with 95% CI)     │
│ ✅ Descriptive stats complete (M, SD, range for all conditions)      │
│ ✅ Inferential stats complete (test, df, p for all comparisons)      │
│ ✅ Multiple comparison correction applied correctly                  │
│ ✅ Outlier handling transparent (criteria, N, sensitivity analysis)  │
│ ✅ Missing data addressed (mechanism, handling, sensitivity)         │
│ ✅ Robustness checks reported (alternative analyses)                 │
│                                                                       │
│ 4/5 - Most rigorous, missing 1-2 elements (e.g., CI or robustness)   │
│                                                                       │
│ 3/5 - Basic rigor, missing effect sizes OR CI                        │
│                                                                       │
│ 2/5 - Weak rigor, only p-values reported, no effect sizes/CI         │
│                                                                       │
│ 1/5 - Minimal rigor, vague statistics ("significant difference")     │
│                                                                       │
│ 0/5 - No statistical reporting                                       │
│                                                                       │
│ **Review Focus**:                                                    │
│ • p-value + effect size + CI all reported?                           │
│ • Outlier/missing data handling described?                           │
│ • Robustness checks included?                                        │
│                                                                       │
│ ═════════════════════════════════════════════════════════════════   │
│ DIMENSION 6: TRANSPARENCY (0-5)                                     │
│ ═════════════════════════════════════════════════════════════════   │
│                                                                       │
│ **Question**: "Is all relevant information fully disclosed?"         │
│                                                                       │
│ 5/5 - Fully transparent:                                             │
│ ✅ All planned comparisons reported (significant + non-significant)  │
│ ✅ Exploratory vs confirmatory clearly distinguished                 │
│ ✅ Failed manipulation checks disclosed (if any)                     │
│ ✅ All measured variables reported (main text or supplementary)      │
│ ✅ Pre-registration linked (if exists)                               │
│ ✅ Data/code/materials availability stated                           │
│                                                                       │
│ 4/5 - Mostly transparent, minor omissions (e.g., no pre-reg)         │
│                                                                       │
│ 3/5 - Partially transparent, some results possibly omitted           │
│                                                                       │
│ 2/5 - Selective reporting suspected, non-sig results missing         │
│                                                                       │
│ 1/5 - Cherry-picking evident, only favorable results shown           │
│                                                                       │
│ 0/5 - Transparency absent, no disclosure of exclusions/failures      │
│                                                                       │
│ **Review Focus** (p-hacking detector):                               │
│ • Are ALL hypotheses tested and reported?                            │
│ • Exploratory analyses labeled as such?                              │
│ • Data/code availability mentioned?                                  │
│                                                                       │
│ ═════════════════════════════════════════════════════════════════   │
│                                                                       │
│ 🏆 OVERALL ASSESSMENT                                                │
│                                                                       │
│ Total Score: ___/30 (sum of 6 dimensions)                            │
│                                                                       │
│ 27-30 (90-100%): EXCELLENT - Top-tier ready, recommend acceptance    │
│ 24-26 (80-89%): GOOD - Minor revisions, likely accept after revision │
│ 21-23 (70-79%): ACCEPTABLE - Major revisions required                │
│ 18-20 (60-69%): WEAK - Reject, invite resubmission after major work  │
│ <18 (<60%): INSUFFICIENT - Reject without resubmission invitation    │
│                                                                       │
│ Nature/Science threshold: ≥24/30 (80%)                               │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

---

### Right Panel (3040px wide) - Round-Robin Review Zones [SCROLLABLE]

```
┌─────────────────────────────────────────────────────────────────────────┐
│ 🔄 ROUND-ROBIN PEER REVIEW (15 minutes)                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ Each student reviews ONE peer's Methods/Results comprehensively         │
│                                                                          │
│ Pairing: 학생A→B, B→C, C→D, ..., Last→A (circular)                      │
│                                                                          │
│ Review process:                                                          │
│ 1. Read peer's full Methods/Results (5min)                              │
│ 2. Score each of 6 dimensions (5min)                                    │
│ 3. Write specific feedback for each dimension (5min)                    │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│ 📝 REVIEW FORM: 학생A reviewing 학생B's work [1400×1600px]               │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│ 📄 REVIEWED WORK: 학생B's Methods/Results                                │
│ [학생B가 자신의 Methods/Results 전체 텍스트를 여기에 붙여넣음]           │
│                                                                           │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│ 🔍 DIMENSION-BY-DIMENSION REVIEW (by 학생A)                              │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                           │
│ 1️⃣ REPRODUCIBILITY: ___/5                                               │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ ✅ STRENGTHS (what's included well):                                │  │
│ │ • [구체적으로 어떤 요소가 완전히 기술되어 있는가]                  │  │
│ │ • Example: "Participants section excellent - recruitment via       │  │
│ │   Prolific specified with exact screening criteria"                │  │
│ │                                                                     │  │
│ │ ⚠️ GAPS (what's missing or vague):                                  │  │
│ │ • [어떤 reproducibility element가 부족한가]                        │  │
│ │ • Example: "Software version not specified (just 'PsychoPy')"      │  │
│ │ • Example: "No IRB approval statement"                             │  │
│ │                                                                     │  │
│ │ 💡 SPECIFIC IMPROVEMENTS:                                           │  │
│ │ • [정확히 무엇을 어떻게 추가해야 하는가]                           │  │
│ │ • Add: "PsychoPy v2023.1.2"                                        │  │
│ │ • Add: "Approved by [Univ] IRB (Protocol #XXXX)"                   │  │
│ │                                                                     │  │
│ │ 🎯 PRIORITY: [HIGH/MEDIUM/LOW]                                      │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ 2️⃣ CONTROL STRATEGY: ___/5                                              │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ ✅ STRENGTHS:                                                       │  │
│ │ • [어떤 control이 잘 되어 있는가]                                  │  │
│ │ • Example: "Manipulation check reported (97% success rate)"        │  │
│ │                                                                     │  │
│ │ ⚠️ ALTERNATIVE EXPLANATIONS NOT RULED OUT:                          │  │
│ │ • [통제되지 않은 confound는 무엇인가]                              │  │
│ │ • Example: "Task difficulty not controlled across conditions -     │  │
│ │   could explain RT difference"                                     │  │
│ │ • Example: "No negative control (sham condition)"                  │  │
│ │                                                                     │  │
│ │ 💡 SPECIFIC IMPROVEMENTS:                                           │  │
│ │ • Add: "Pilot-tested to match task difficulty (both ~70% accuracy)"│  │
│ │ • Add: "Sham stimulation condition as negative control"            │  │
│ │                                                                     │  │
│ │ 🎯 PRIORITY: [HIGH/MEDIUM/LOW]                                      │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ 3️⃣ STATISTICAL JUSTIFICATION: ___/5                                     │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ ✅ STRENGTHS:                                                       │  │
│ │ • [어떤 통계 선택이 잘 정당화되어 있는가]                          │  │
│ │ • Example: "Power analysis included (G*Power 3.1, α=.05, power=.80,│  │
│ │   d=0.65 from pilot)"                                              │  │
│ │                                                                     │  │
│ │ ⚠️ UNJUSTIFIED OR QUESTIONABLE CHOICES:                             │  │
│ │ • [어떤 통계 선택이 설명이 부족한가]                               │  │
│ │ • Example: "Expected d=0.65 - where does this come from? Need pilot│  │
│ │   data or previous work citation"                                  │  │
│ │ • Example: "3 comparisons, no multiple comparison correction"      │  │
│ │ • Example: "Assumptions not tested (normality, homogeneity)"       │  │
│ │                                                                     │  │
│ │ 💡 SPECIFIC IMPROVEMENTS:                                           │  │
│ │ • Add: "Expected d=0.65 based on pilot study (N=15, d_obs=0.62)"   │  │
│ │ • Add: "Bonferroni correction applied (α_corrected=0.017)"         │  │
│ │ • Add: "Shapiro-Wilk test confirmed normality (all p>.05)"         │  │
│ │                                                                     │  │
│ │ 🎯 PRIORITY: [HIGH/MEDIUM/LOW]                                      │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ 4️⃣ CLAIM-EVIDENCE MATCH: ___/5                                          │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ ✅ CONSERVATIVE CLAIMS (well-matched):                              │  │
│ │ • [어떤 주장이 데이터에 적절히 매칭되어 있는가]                    │  │
│ │ • Example: "Results 'suggest' (not 'prove') - appropriate hedge"   │  │
│ │                                                                     │  │
│ │ 🚨 OVERCLAIMING (claims exceed evidence):                           │  │
│ │ • [어떤 문장이 과도한 주장인가 - 정확히 인용]                      │  │
│ │ • QUOTE: "X causes Y" (line 145)                                   │  │
│ │   → PROBLEM: Correlational design, cannot claim causation          │  │
│ │   → FIX: "X is associated with Y" or "X predicts Y"                │  │
│ │                                                                     │  │
│ │ • QUOTE: "This proves theory Z" (line 167)                         │  │
│ │   → PROBLEM: Alternative theories not ruled out                    │  │
│ │   → FIX: "Consistent with theory Z"                                │  │
│ │                                                                     │  │
│ │ 💡 SPECIFIC REVISIONS:                                              │  │
│ │ • Line 145: Replace "causes" with "is associated with"             │  │
│ │ • Line 167: Replace "proves" with "supports"                       │  │
│ │                                                                     │  │
│ │ 🎯 PRIORITY: [HIGH/MEDIUM/LOW]                                      │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ 5️⃣ STATISTICAL RIGOR: ___/5                                             │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ ✅ REPORTED (complete statistics):                                  │  │
│ │ • Effect sizes: [Yes/No - 어떤 것?]                                 │  │
│ │ • Confidence intervals: [Yes/No]                                   │  │
│ │ • Descriptive stats: [Yes/No - M, SD, range?]                      │  │
│ │ • Multiple comparison correction: [Yes/No/N.A.]                    │  │
│ │                                                                     │  │
│ │ ❌ MISSING:                                                         │  │
│ │ • [어떤 통계량이 빠졌는가]                                         │  │
│ │ • Example: "No effect sizes - only p-values reported"              │  │
│ │ • Example: "No confidence intervals"                               │  │
│ │ • Example: "Outlier handling not described"                        │  │
│ │                                                                     │  │
│ │ 💡 SPECIFIC ADDITIONS NEEDED:                                       │  │
│ │ • Add to each result: "Cohen's d=___, 95% CI [___, ___]"           │  │
│ │ • Add: "Outliers (>3 SD) removed (N=2, 3.3% of sample).            │  │
│ │   Sensitivity analysis with outliers: p=.005 (vs p=.002 without)"  │  │
│ │                                                                     │  │
│ │ 🎯 PRIORITY: [HIGH/MEDIUM/LOW]                                      │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ 6️⃣ TRANSPARENCY: ___/5                                                  │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ ✅ TRANSPARENT PRACTICES:                                           │  │
│ │ • [어떤 투명성 요소가 포함되어 있는가]                             │  │
│ │ • Example: "All 5 planned comparisons reported (3 sig, 2 non-sig)" │  │
│ │ • Example: "Data/code available at OSF link"                       │  │
│ │                                                                     │  │
│ │ 🚩 TRANSPARENCY CONCERNS (possible selective reporting):            │  │
│ │ • [선택적 보고가 의심되는 부분]                                    │  │
│ │ • Example: "Methods mentions 3 questionnaires, Results reports only│  │
│ │   1 - where are the other 2?"                                      │  │
│ │ • Example: "Hypothesis 2 not mentioned in Results - tested but     │  │
│ │   non-significant?"                                                │  │
│ │ • Example: "No pre-registration mentioned (expected for confirmatory│  │
│ │   study)"                                                          │  │
│ │                                                                     │  │
│ │ 💡 SPECIFIC IMPROVEMENTS:                                           │  │
│ │ • Add to Results: "The other 2 questionnaires showed no significant│  │
│ │   effects (see Supplementary Table S2)"                            │  │
│ │ • Add: "Hypothesis 2 was not supported (p=.23, d=0.15)"            │  │
│ │ • Add: "This study was exploratory; future work should pre-register│  │
│ │   hypotheses"                                                      │  │
│ │                                                                     │  │
│ │ 🎯 PRIORITY: [HIGH/MEDIUM/LOW]                                      │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│ 🏆 OVERALL EVALUATION                                                    │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                           │
│ 📊 TOTAL SCORE                                                           │
│ Reproducibility: ___/5                                                   │
│ Control Strategy: ___/5                                                  │
│ Statistical Justification: ___/5                                         │
│ Claim-Evidence Match: ___/5                                              │
│ Statistical Rigor: ___/5                                                 │
│ Transparency: ___/5                                                      │
│ ────────────────────────                                                 │
│ TOTAL: ___/30                                                             │
│                                                                           │
│ 📝 OVERALL VERDICT:                                                      │
│ □ 27-30: EXCELLENT - Recommend acceptance with minor/no revisions        │
│ □ 24-26: GOOD - Recommend minor revisions                                │
│ □ 23-23: ACCEPTABLE - Recommend major revisions                          │
│ □ 18-20: WEAK - Reject, invite resubmission after extensive revision     │
│ □ <18: INSUFFICIENT - Reject without resubmission invitation             │
│                                                                           │
│ ─────────────────────────────────────────────────────────────────────   │
│ 💎 TOP 3 STRENGTHS                                                       │
│ 1. [가장 뛰어난 점 - 구체적으로]                                         │
│ 2. [두 번째 강점]                                                        │
│ 3. [세 번째 강점]                                                        │
│                                                                           │
│ ⚠️ TOP 3 CRITICAL ISSUES (must fix before submission)                    │
│ 1. [HIGH PRIORITY] _______________________________________               │
│ 2. [HIGH PRIORITY] _______________________________________               │
│ 3. [MEDIUM PRIORITY] _____________________________________               │
│                                                                           │
│ 🎯 RECOMMENDED NEXT STEPS (action sequence)                              │
│ Step 1: [First thing to fix - easiest or highest impact]                │
│ Step 2: [Second priority]                                                │
│ Step 3: [Third priority]                                                 │
│                                                                           │
│ 📚 HELPFUL RESOURCES FOR REVISION                                        │
│ • For Reproducibility: Template 4.3 (6-element checklist)                │
│ • For Statistical Justification: Recipe #37 (Power Analysis Reviewer)    │
│ • For Overclaiming: Recipe #38 (Overclaiming Detector)                   │
│ • For Statistical Rigor: Template 4.2 (Red Team attacks)                 │
│ • For Transparency: Recipe #40 (Transparency Checker)                    │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────┐
│ 📝 REVIEW FORM: 학생B reviewing 학생C's work [1400×1600px]               │
├──────────────────────────────────────────────────────────────────────────┤
│ [학생A와 동일한 6-dimension review 구조]                                 │
└──────────────────────────────────────────────────────────────────────────┘

[6-12 review forms total, circular pairing]


┌─────────────────────────────────────────────────────────────────────────┐
│ 💬 FEEDBACK SYNTHESIS ZONE (5 minutes)                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ After receiving peer review, each student synthesizes feedback:         │
│                                                                          │
│ ┌──────────────────────────────────────────────────────────────────┐   │
│ │ 👤 학생B - Synthesis of Received Feedback                        │   │
│ │ (학생A's review of my work)                                      │   │
│ ├──────────────────────────────────────────────────────────────────┤   │
│ │                                                                   │   │
│ │ 📊 My Total Score: ___/30                                         │   │
│ │                                                                   │   │
│ │ 📈 Dimension Scores:                                              │   │
│ │ Reproducibility: ___/5 → Target improvement: ___/5                │   │
│ │ Control Strategy: ___/5 → Target: ___/5                           │   │
│ │ Statistical Justification: ___/5 → Target: ___/5                  │   │
│ │ Claim-Evidence Match: ___/5 → Target: ___/5                       │   │
│ │ Statistical Rigor: ___/5 → Target: ___/5                          │   │
│ │ Transparency: ___/5 → Target: ___/5                               │   │
│ │                                                                   │   │
│ │ ✅ I AGREE with these criticisms:                                 │   │
│ │ • [Peer가 지적한 것 중 타당한 것]                                │   │
│ │ • Example: "True, no effect sizes reported - will add Cohen's d" │   │
│ │                                                                   │   │
│ │ ⚠️ I PARTIALLY AGREE but need clarification:                      │   │
│ │ • [Peer 지적에 대해 확실하지 않은 것]                            │   │
│ │ • Example: "Power analysis - I have it but didn't include in     │   │
│ │   Methods. Will add."                                            │   │
│ │                                                                   │   │
│ │ ❌ I DISAGREE with:                                               │   │
│ │ • [Peer가 잘못 이해한 부분]                                      │   │
│ │ • Example: "Peer said no manipulation check, but it's in lines   │   │
│ │   89-91. Maybe not clear enough - will revise for clarity."      │   │
│ │                                                                   │   │
│ │ 🎯 MY ACTION PLAN (from Top 3 Critical Issues):                   │   │
│ │ Priority 1: [What I'll fix first]                                │   │
│ │ Priority 2: [What I'll fix second]                               │   │
│ │ Priority 3: [What I'll fix third]                                │   │
│ │                                                                   │   │
│ │ 📅 TARGET: Improve to ___/30 by homework submission              │   │
│ │ (Minimum goal: 24/30 = 80% for top-tier submission)              │   │
│ │                                                                   │   │
│ └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Workshop Facilitation Guide

### Setup (Before Class - 10 minutes)

1. **Copy Figma Template**
   - Duplicate peer review canvas
   - Create review form zones (6-12, one per student)
   - Set up circular pairing (A→B→C→...→A)
   - Generate sharing link

2. **Prepare Rubric Panel**
   - Verify all 6 dimensions with 0-5 scoring criteria visible
   - Check examples are clear
   - Ensure overall assessment section complete

3. **Student Preparation**
   - Students should submit their Methods/Results 24 hours before class
   - Instructor assigns pairs and emails assignments
   - Each student comes knowing whose work they'll review

### During Workshop

#### Phase 1: Comprehensive Review (15 minutes)

**Instructor Script**:
> "지금부터 15분간 배정된 동료 1명의 Methods/Results를 종합적으로 평가합니다.
>
> **할 일**:
> 1. 먼저 전체 Methods/Results 읽기 (5분)
> 2. 6가지 dimension 각각 점수 매기기 (5분)
>    - 왼쪽 패널의 0-5 기준 사용
>    - 보수적으로 평가 (애매하면 낮은 점수)
> 3. 각 dimension별로 구체적 피드백 작성 (5분)
>    - ✅ Strengths (무엇이 좋은가)
>    - ⚠️ Gaps/Issues (무엇이 부족한가)
>    - 💡 Specific improvements (정확히 어떻게 고칠 것인가)
>
> **중요**: 피드백은 **구체적**이어야 합니다.
> - ❌ Bad: "Reproducibility is weak"
> - ✅ Good: "Missing software version (add 'PsychoPy v2023.1.2') and IRB approval statement"
>
> **질문**: 학생B의 work를 평가 중인 학생A, 궁금한 것 있으면 Figma comment로 질문하세요!"

**Monitoring**:
- Watch for vague feedback → Intervene: "Be specific - cite line numbers, quote text"
- Look for generous scoring → Remind: "Nature standard is conservative - if any doubt, lower score"
- Identify exceptionally thorough reviews → Highlight with 🏆 emoji

#### Phase 2: Feedback Synthesis (5 minutes)

**Instructor Script**:
> "마지막 5분은 **받은 피드백을 정리**하는 시간입니다.
>
> **각자 자신의 Synthesis Zone으로 이동해서**:
> 1. 받은 total score 확인 (___/30)
> 2. 6가지 dimension별 점수 기록
> 3. 피드백 분류:
>    - ✅ I agree (맞는 지적 - 고칠 것)
>    - ⚠️ I partially agree (확실하지 않음 - 확인할 것)
>    - ❌ I disagree (reviewer 오해 - 설명 필요)
> 4. Action plan 작성 (Top 3 priorities)
> 5. Target score 설정 (최소 24/30 목표)
>
> **Homework에서는**:
> - Action plan 기반으로 Methods/Results 수정
> - Before/After 비교
> - Re-score (self-assessment) 24/30 이상 달성 목표!"

**Facilitation**:
- Encourage students to ask reviewers for clarification (via Figma comments)
- Identify common low-scoring dimensions → Note for class discussion
- Celebrate honest self-assessment: "학생B, 18/30 받고 honest하게 인정 - excellent!"

---

## Post-Workshop

### Class Discussion (5 minutes)

**Discussion Prompts**:

1. **"Class average score는 ___/30입니다. Nature threshold (24/30)와 비교하면?"**
   - If average <20 → "많은 revision 필요. 하지만 명확한 개선 방향 확보!"
   - If average 20-24 → "거의 도달! Homework에서 24 넘기기 충분히 가능!"
   - If average >24 → "Excellent! 이미 top-tier 수준. Polish만 하면 됨!"

2. **"가장 낮은 점수를 받은 dimension은?"**
   - Identify class-wide weakness
   - Example: "Statistical Rigor가 평균 2.1/5 → Homework에서 집중!"

3. **"Review 하면서 가장 배운 것은?"**
   - Student insights: "남의 Methods 보니 내가 뭘 빠뜨렸는지 보임"
   - Student insights: "Overclaiming이 생각보다 흔함 - 조심해야겠다"

4. **"가장 유용했던 피드백 유형은?"**
   - Highlight specific, actionable feedback examples
   - Contrast with vague feedback

### Instructor Analysis

**After class, instructor compiles**:

1. **Score Distribution**:
   ```
   27-30 (Excellent): ___ students
   24-26 (Good): ___ students
   21-23 (Acceptable): ___ students
   18-20 (Weak): ___ students
   <18 (Insufficient): ___ students

   Class Average: ___/30
   ```

2. **Dimension-Specific Averages**:
   ```
   1. Reproducibility: ___/5
   2. Control Strategy: ___/5
   3. Statistical Justification: ___/5
   4. Claim-Evidence Match: ___/5
   5. Statistical Rigor: ___/5
   6. Transparency: ___/5
   ```

3. **Common Issues** (from aggregated feedback):
   - Most frequent gap in Reproducibility: ___
   - Most frequent overclaiming pattern: ___
   - Most frequent statistical rigor issue: ___

---

## Homework Integration

**Students must submit**:

1. **Revised Methods/Results** (incorporating ALL peer feedback)
2. **Revision Documentation** (500 words):
   - Original score: ___/30
   - Target score: ___/30 (minimum 24)
   - Dimension-by-dimension improvements made
   - Before/After examples (1-2 per dimension)
3. **Self-Assessment Re-Score** with evidence for each dimension

**Example Revision Documentation**:
```
DIMENSION 3: STATISTICAL JUSTIFICATION (was 2/5 → now 5/5)

PEER FEEDBACK:
"Expected d=0.65 - where does this come from? Need pilot citation.
No multiple comparison correction for 3 comparisons."

REVISIONS MADE:
1. Added power analysis justification:
   "Expected d=0.65 based on pilot study (N=15, d_observed=0.62,
   95% CI [0.31, 0.93]). A priori power analysis (G*Power 3.1.9.7)
   indicated N=60 provides 81% power at α=.05."

2. Added multiple comparison correction:
   "Bonferroni correction applied for 3 planned comparisons
   (corrected α=.017). All reported p-values are Bonferroni-adjusted."

3. Added assumption testing:
   "Shapiro-Wilk tests confirmed normality for all groups (W>.95,
   p>.05). Levene's test showed homogeneity of variance (F(2,57)=1.23,
   p=.30)."

BEFORE (excerpt):
"We used independent samples t-tests with α=.05."

AFTER (excerpt):
"We used independent samples t-tests. Expected effect size d=0.65
(pilot N=15, d=0.62, 95% CI [0.31, 0.93]). A priori power analysis
(G*Power 3.1.9.7) indicated N=60 provides 81% power at α=.05.
Bonferroni correction applied for 3 planned comparisons
(α_corrected=.017). Assumptions tested: Shapiro-Wilk confirmed
normality (all W>.95, p>.05), Levene's test confirmed homogeneity
(F(2,57)=1.23, p=.30)."

RE-SCORED: 5/5 (all elements now complete)
```

---

## Success Metrics

**Workshop succeeds if**:
- ✅ Every student receives comprehensive 6-dimension review
- ✅ Average peer review length ≥300 words (shows thoroughness)
- ✅ ≥70% of feedback is specific (cites lines, quotes text, provides fixes)
- ✅ Every student creates realistic action plan (target ≥24/30)

**Individual success**:
- 🎯 Understands all 6 bulletproofing dimensions
- 🎯 Can score Methods/Results objectively (not inflated)
- 🎯 Receives actionable, specific feedback
- 🎯 Has clear improvement roadmap for homework

---

## Related Materials

**Templates**:
- `template_4.1_bulletproofing_audit_canvas.md`: AI-assisted vulnerability scanning
- `template_4.2_red_team_blue_team.md`: Statistical rigor gaming
- `template_4.3_reproducibility_checklist.md`: Detailed 6-element self-assessment

**Lecture Notes**:
- `week4/lecture_notes.md`: Full bulletproofing strategies (all sections)

**Previous Week**:
- `week3/template_3.3_peer_review_rubric.md`: Gap discovery peer review (builds on)

**Next Week**:
- `week5/template_5.1_*`: Discussion strategies (uses bulletproofed Methods/Results as foundation)

---

**Template Version**: 1.0
**Last Updated**: 2025-10-09
**Use**: Week 4 workshop - Comprehensive peer review integrating all bulletproofing dimensions (reproducibility, controls, statistics, claims, rigor, transparency)

# Example 4.5: Red Team/Blue Team Game Case Study

**Purpose**: Demonstrate attack/defense battle for statistical rigor training through realistic gameplay

**Use in Workshop**: Model for Template 4.2 (Red Team/Blue Team Game), showing how attacks and defenses work

---

## Game Setup

**Study Context**: Memory consolidation experiment (sleep vs wake groups)
**Blue Team Player (Defender)**: 학생A presenting Methods/Results
**Red Team Player (Attacker)**: 학생B challenging statistical choices
**Instructor Role**: Score attacks and defenses, provide feedback

**Study Overview**:
- N = 60 participants (30 sleep, 30 wake)
- IV: Sleep vs wake during consolidation period (2 hours)
- DV: Memory recall accuracy (% correct on 40-item test)
- Design: Between-subjects experimental design
- Analysis: Independent-samples t-test

---

## Battle Zone: Complete 3-Round Game

### ROUND 1: Sample Size Skeptic Attack

┌────────────────────────────────────────────────────────────────────┐
│ 🗡️ RED TEAM ATTACK #1: Sample Size Skeptic                        │
├────────────────────────────────────────────────────────────────────┤
│ **Attack Type**: #1 (Sample Size Skeptic from Template 4.2)       │
│                                                                     │
│ **Target**: N=60 (30 per group)                                    │
│                                                                     │
│ **Attack Statement**:                                              │
│ "학생A님의 N=30 per group은 통계적 검정력이 부족합니다.           │
│ Medium effect size (d=0.5) 탐지를 위해서는 80% power를 위해        │
│ N=64 per group이 필요한데, 당신은 절반도 안 되는 샘플로 연구했습니다. │
│ 이는 Type II error 위험이 매우 높아서, 실제로 효과가 있어도        │
│ 발견하지 못할 가능성이 큽니다. 논문 reject 사유입니다."            │
│                                                                     │
│ **Evidence**:                                                      │
│ - G*Power 계산: d=0.5, α=.05, power=.80 → N required = 128 total  │
│   (64 per group)                                                   │
│ - 학생A's N=60 total (30 per group) = 47% of required sample      │
│ - Post-hoc power with N=30 per group for d=0.5: only 47%          │
│ - 53% chance of Type II error (missing true effect)               │
│                                                                     │
│ **Citation Support**:                                              │
│ "Cohen (1988) recommends minimum 80% power. Your 47% power is     │
│ unacceptably low for psychological research (Button et al., 2013)." │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ 🛡️ BLUE TEAM DEFENSE #1                                            │
├────────────────────────────────────────────────────────────────────┤
│ **Defense Strategy**: #1 (Evidence-Based Justification)            │
│                                                                     │
│ **My Justification**:                                              │
│ "제 연구의 power analysis는 medium effect (d=0.5)가 아닌 LARGE     │
│ effect (d=0.8)를 기준으로 했습니다. 왜냐하면:                      │
│                                                                     │
│ 1. **Prior meta-analysis evidence**: Sleep consolidation effects는 │
│    typically LARGE (meta d = 0.89; Rasch & Born, 2013 meta-analysis │
│    of 45 studies). 제 연구는 동일한 패러다임 사용 → large effect   │
│    기대 가능.                                                       │
│                                                                     │
│ 2. **My a priori power analysis**:                                 │
│    - Target: d=0.8 (large effect, based on meta-analysis)         │
│    - G*Power: d=0.8, α=.05, power=.80 → N required = 52 total     │
│      (26 per group)                                                │
│    - My N=60 (30 per group) EXCEEDS this requirement (115%)       │
│    - Achieved power for d=0.8: 85% (above 80% threshold)          │
│                                                                     │
│ 3. **Observed effect in my data**: d=0.92 (large), 95% CI         │
│    [0.38, 1.46] → 실제로 large effect 발견했고, meta-analysis와   │
│    일치합니다.                                                      │
│                                                                     │
│ 따라서 제 sample size는 theoretically-justified large effect를      │
│ 탐지하기에 ADEQUATE합니다. Medium effect (d=0.5)를 가정하는 것은    │
│ 제 연구 맥락에서 부적절합니다."                                     │
│                                                                     │
│ **Supporting Evidence**:                                           │
│ - Rasch & Born (2013) meta-analysis: 45 studies, meta d=0.89,     │
│   95% CI [0.72, 1.06]                                              │
│ - My observed effect d=0.92 falls within meta 95% CI → consistent │
│ - A priori power analysis documented in Methods (pre-registered on│
│   OSF before data collection)                                      │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ 📊 ROUND 1 SCORE                                                   │
├────────────────────────────────────────────────────────────────────┤
│ ☑ **BLUE TEAM WINS** (+1 point)                                    │
│                                                                     │
│ **Instructor Feedback**:                                           │
│ "Blue Team의 defense가 우수합니다. Key strengths:                  │
│ 1. Meta-analytic evidence로 large effect 기대를 정당화 (Rasch &   │
│    Born, 2013)                                                     │
│ 2. A priori power analysis가 theoretically-driven (d=0.8 from meta)│
│ 3. Observed effect (d=0.92)가 meta-analysis 95% CI 내에 있어      │
│    예측 타당성 입증                                                 │
│ 4. Pre-registration으로 post-hoc rationalization 방지              │
│                                                                     │
│ Red Team의 attack은 generic medium effect (d=0.5) 가정이 문제.     │
│ 연구 맥락에서 expected effect size는 prior literature에서 derive   │
│ 해야 합니다.                                                        │
│                                                                     │
│ **Teaching Point**: Power analysis는 "N이 클수록 좋다"가 아니라,   │
│ "theoretically expected effect size를 80% power로 탐지할 수 있는   │
│ adequate N"을 구하는 것입니다. Blue Team처럼 meta-analysis로       │
│ expected effect를 justify하면 sample size criticism을 방어할 수    │
│ 있습니다."                                                          │
└────────────────────────────────────────────────────────────────────┘

---

### ROUND 2: Multiple Comparison Hammer Attack

┌────────────────────────────────────────────────────────────────────┐
│ 🗡️ RED TEAM ATTACK #2: Multiple Comparison Hammer                 │
├────────────────────────────────────────────────────────────────────┤
│ **Attack Type**: #2 (Multiple Comparison Hammer from Template 4.2) │
│                                                                     │
│ **Target**: 4 memory tests reported (immediate recall, delayed     │
│             recall, recognition, false alarms)                     │
│                                                                     │
│ **Attack Statement**:                                              │
│ "학생A님은 4개의 memory outcome을 테스트했는데 (immediate, delayed,│
│ recognition, false alarms), multiple comparison correction 없이 각각 │
│ α=.05로 분석했습니다. 이는 심각한 Type I error inflation입니다.    │
│                                                                     │
│ Family-Wise Error Rate (FWER) 계산:                                │
│ - 1 test at α=.05: 5% Type I error                                │
│ - 4 tests at α=.05: 1-(1-.05)^4 = 18.5% Type I error              │
│                                                                     │
│ 즉, 실제로는 차이가 없는데도 18.5% 확률로 우연히 p<.05를 얻을 수   │
│ 있습니다. 현재 4개 중 3개가 p<.05인데, 이 중 최소 1개는 false     │
│ positive일 가능성이 높습니다.                                       │
│                                                                     │
│ Bonferroni correction 적용 시 (α=.05/4=.0125):                     │
│ - Immediate recall: p=.003 → SURVIVE correction ✓                 │
│ - Delayed recall: p=.02 → FAIL correction ✗                       │
│ - Recognition: p=.04 → FAIL correction ✗                          │
│ - False alarms: p=.18 → Already non-significant                   │
│                                                                     │
│ 따라서 correction 후에는 4개 중 1개만 significant합니다. 당신의     │
│ 주요 결론이 무너집니다."                                            │
│                                                                     │
│ **Evidence**:                                                      │
│ - Family-wise error rate = 18.5% (3.7x nominal α=.05)             │
│ - 3 out of 4 "significant" results likely include false positives │
│ - Top-tier journals REQUIRE multiple comparison correction        │
│   (Wigboldus & Dotsch, 2016)                                      │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ 🛡️ BLUE TEAM DEFENSE #2                                            │
├────────────────────────────────────────────────────────────────────┤
│ **Defense Strategy**: #1 (Evidence-Based Justification) + #5       │
│                       (Limitation Acknowledgment)                  │
│                                                                     │
│ **My Justification**:                                              │
│ "저는 4개의 outcome을 분석했지만, 이들은 INDEPENDENT HYPOTHESES를  │
│ 테스트하는 것이 아니라 SINGLE CONSTRUCT (memory consolidation)의   │
│ 다양한 측면을 측정한 것입니다. 따라서 Bonferroni correction은      │
│ 부적절하며, 다음과 같은 이유로 multiple comparison correction을    │
│ 적용하지 않았습니다:                                                │
│                                                                     │
│ 1. **Primary vs Secondary Distinction** (Rothman, 1990):          │
│    - PRIMARY outcome: Delayed recall (a priori pre-registered,     │
│      consolidation의 gold standard measure)                        │
│    - SECONDARY outcomes: Immediate recall, recognition, false      │
│      alarms (exploratory, hypothesis-generating)                   │
│    - Primary outcome만 confirmatory testing (α=.05)                │
│    - Secondary outcomes는 exploratory → 정확한 p-value와 effect    │
│      size 보고로 readers가 판단하도록 함                           │
│                                                                     │
│ 2. **Theoretical Justification**:                                  │
│    - Sleep consolidation은 delayed memory에 SPECIFIC effect를      │
│      가진다는 이론적 예측 (Diekelmann & Born, 2010)                │
│    - Delayed recall이 primary outcome인 이유는 sleep이 시간 경과   │
│      후 memory를 stabilize한다는 mechanistic hypothesis            │
│    - 다른 measures는 이 mechanism의 boundary conditions 탐색       │
│                                                                     │
│ 3. **Effect Size Pattern Supports Specificity**:                   │
│    - Delayed recall: d=0.92 (LARGE effect, p=.02)                 │
│    - Immediate recall: d=0.68 (medium, p=.003) - encoding 차이 반영│
│    - Recognition: d=0.53 (medium, p=.04) - weaker, boundary       │
│    - False alarms: d=0.21 (small, p=.18, ns) - no effect         │
│                                                                     │
│    이 pattern은 sleep이 delayed recall에 STRONGEST effect를 가지며,│
│    다른 measures는 weaker/null → theoretically coherent            │
│                                                                     │
│ 4. **Transparent Reporting**:                                      │
│    - 모든 4개 outcomes + exact p-values + effect sizes + 95% CIs   │
│      보고 (no cherry-picking)                                      │
│    - Supplementary에 correlation matrix 제공 (outcomes not         │
│      independent: r=.45-.68)                                       │
│    - Pre-registration에서 delayed recall을 primary로 명시          │
│      (https://osf.io/abc123)                                       │
│                                                                     │
│ **Limitation Acknowledged**:                                       │
│ "However, I acknowledge that readers may reasonably apply          │
│ conservative corrections. Under Bonferroni (α=.0125), delayed      │
│ recall (p=.02) would not survive. Therefore, I frame this finding  │
│ as preliminary evidence requiring replication rather than          │
│ definitive proof. The large effect size (d=0.92) and consistency   │
│ with meta-analysis (d=0.89) support the robustness of this effect, │
│ but confirmatory replication with pre-specified primary outcome is │
│ warranted."                                                        │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ 📊 ROUND 2 SCORE                                                   │
├────────────────────────────────────────────────────────────────────┤
│ ☑ **TIE** (Red Team +0.5, Blue Team +0.5)                          │
│                                                                     │
│ **Instructor Feedback**:                                           │
│ "이번 round는 TIE입니다. 양측 모두 타당한 포인트가 있습니다:       │
│                                                                     │
│ **Red Team Strengths**:                                            │
│ - FWER calculation이 정확함 (18.5% with 4 tests)                   │
│ - Bonferroni correction 적용 시 delayed recall p=.02가 fail하는 것 │
│   맞음 (α=.0125 threshold)                                         │
│ - Top-tier journals의 실제 rejection 사례 많음                     │
│                                                                     │
│ **Blue Team Strengths**:                                           │
│ - Primary vs secondary distinction이 methodologically sound        │
│   (Rothman, 1990은 널리 인용되는 justification)                    │
│ - Pre-registration으로 primary outcome이 a priori임을 입증         │
│ - Theoretical justification (delayed recall = consolidation gold   │
│   standard)이 설득력 있음                                           │
│ - Effect size pattern (d=.92 > .68 > .53 > .21)이 theoretical     │
│   prediction과 일치                                                 │
│ - Limitation을 acknowledge하고 replication 필요성 인정              │
│                                                                     │
│ **Why TIE?**                                                       │
│ Multiple comparison correction은 field마다 convention이 다릅니다.   │
│ - Neuroscience: 거의 always correct (매우 conservative)            │
│ - Psychology: Primary vs exploratory distinction 자주 사용         │
│ - Clinical trials: Primary endpoint만 α=.05, secondary는 nominal   │
│                                                                     │
│ Blue Team의 approach는 defensible하지만, more conservative         │
│ journals은 reject할 수 있습니다. 가장 안전한 전략:                  │
│ 1. Primary outcome 1개만 pre-register                              │
│ 2. 나머지는 명시적으로 exploratory로 frame                         │
│ 3. Exact p-values + effect sizes + 95% CIs 모두 보고               │
│ 4. Replication study로 follow-up                                   │
│                                                                     │
│ **Teaching Point**: Multiple comparison은 black-and-white issue가  │
│ 아닙니다. Key는 (1) pre-registration, (2) theoretical justification,│
│ (3) transparent reporting, (4) limitation acknowledgment입니다."    │
└────────────────────────────────────────────────────────────────────┘

---

### ROUND 3: Assumption Violator Attack

┌────────────────────────────────────────────────────────────────────┐
│ 🗡️ RED TEAM ATTACK #3: Assumption Violator                        │
├────────────────────────────────────────────────────────────────────┤
│ **Attack Type**: #3 (Assumption Violator from Template 4.2)        │
│                                                                     │
│ **Target**: Independent-samples t-test used without checking       │
│             normality and homogeneity assumptions                  │
│                                                                     │
│ **Attack Statement**:                                              │
│ "학생A님은 t-test를 사용했지만, 이 test의 assumptions를 테스트한   │
│ 증거가 Methods나 Results 어디에도 없습니다. Parametric tests는      │
│ normality와 homogeneity of variance를 가정하는데, 이를 확인하지    │
│ 않으면 결과가 invalid할 수 있습니다.                                │
│                                                                     │
│ 제가 당신의 raw data (N=30 per group)를 봤을 때:                    │
│                                                                     │
│ **Normality Test (Shapiro-Wilk)**:                                 │
│ - Sleep group: W=0.89, p=.004 → VIOLATED (significant deviation)  │
│ - Wake group: W=0.92, p=.03 → VIOLATED (significant deviation)    │
│                                                                     │
│ **Homogeneity Test (Levene's test)**:                              │
│ - F(1,58)=6.23, p=.015 → VIOLATED (unequal variances)             │
│ - Sleep SD=12.3, Wake SD=8.1 (1.52x ratio, exceeds 1.5 guideline) │
│                                                                     │
│ 두 가지 assumptions 모두 위배되었습니다. 따라서:                    │
│ 1. Your t-test p=.02는 Type I error rate이 실제로 α=.05가 아닐 수 │
│    있음 (actual α could be .08-.10 with violations)               │
│ 2. Parametric test 사용 부적절 → non-parametric test (Mann-Whitney)│
│    사용했어야 함                                                    │
│ 3. Mann-Whitney U test 결과: U=312, p=.08 (non-significant!)      │
│                                                                     │
│ 즉, assumption violation을 고려하면 당신의 significant result는    │
│ 사라집니다. 이는 major methodological flaw입니다."                  │
│                                                                     │
│ **Evidence**:                                                      │
│ - Shapiro-Wilk ps < .05 in both groups (normality violated)       │
│ - Levene's F=6.23, p=.015 (homogeneity violated)                  │
│ - Mann-Whitney p=.08 > .05 (non-significant with robust test)     │
│ - APA guidelines recommend assumption testing (Wilcox, 2017)      │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ 🛡️ BLUE TEAM DEFENSE #3                                            │
├────────────────────────────────────────────────────────────────────┤
│ **Defense Strategy**: #2 (Robustness Demonstration) + #3 (Sensitivity│
│                       Analysis)                                     │
│                                                                     │
│ **My Justification**:                                              │
│ "저는 assumptions를 테스트했고, violations를 인지했지만, 다음       │
│ 이유로 t-test 결과가 ROBUST하다고 판단했습니다:                     │
│                                                                     │
│ 1. **Sample Size Robustness** (Central Limit Theorem):            │
│    - N=30 per group는 CLT가 작동하기에 충분한 크기 (N≥30 guideline)│
│    - Monte Carlo simulation (10,000 iterations): Normality         │
│      violations with N=30 → actual Type I error rate = 5.3%        │
│      (vs nominal 5%), negligible inflation                         │
│    - t-test is ROBUST to normality violations with N≥30 (Glass et  │
│      al., 1972; Lumley et al., 2002)                               │
│                                                                     │
│ 2. **Homogeneity Violation is Addressed with Welch's t-test**:    │
│    - Original t-test: t(58)=2.45, p=.02 (equal variances assumed) │
│    - Welch's t-test: t(52.3)=2.38, p=.021 (unequal variances OK)  │
│    - Results virtually identical (p=.02 vs p=.021)                 │
│    - Welch's t DOES NOT assume homogeneity → violation irrelevant  │
│                                                                     │
│ 3. **Multiple Robustness Checks Conducted**:                       │
│    - Bootstrap t-test (10,000 resamples): p=.019, 95% CI for      │
│      mean diff [1.2, 8.7] → excludes zero, consistent with        │
│      parametric result                                             │
│    - Permutation test (10,000 permutations): p=.018 → consistent  │
│    - Bayesian t-test: BF₁₀=4.8 (moderate evidence for H₁)         │
│                                                                     │
│ 4. **Mann-Whitney U Test Misconception**:                          │
│    Red Team이 보고한 Mann-Whitney p=.08은 INCORRECT analysis입니다. │
│    - Mann-Whitney tests RANKS, not means (tests median difference) │
│    - My data는 mean difference가 theoretical interest (consolidation│
│      improves AVERAGE recall, not just median shift)               │
│    - Mann-Whitney는 덜 powerful (effect size는 동일해도 p-value가  │
│      더 큼) → conservative bias                                     │
│    - Correct Mann-Whitney on MY data: U=285, p=.024 (significant!) │
│      Red Team's U=312 p=.08은 계산 오류                             │
│                                                                     │
│ 5. **Supplementary Table S3 with All Tests**:                      │
│    - Student's t-test: p=.020                                      │
│    - Welch's t-test: p=.021                                        │
│    - Bootstrap t-test: p=.019                                      │
│    - Permutation test: p=.018                                      │
│    - Mann-Whitney U: p=.024                                        │
│    - Bayesian t-test: BF₁₀=4.8                                     │
│                                                                     │
│    All 6 tests converge on p<.05 → result is ROBUST across         │
│    parametric, non-parametric, and Bayesian approaches.             │
│                                                                     │
│ **Supporting Evidence**:                                           │
│ - Glass et al. (1972): "The t test is robust to normality violations│
│   with N≥30 per group"                                             │
│ - Lumley et al. (2002): "Welch's t-test robust to heterogeneity"  │
│ - All robustness checks (6 tests) show p<.05 → finding is reliable │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ 📊 ROUND 3 SCORE                                                   │
├────────────────────────────────────────────────────────────────────┤
│ ☑ **BLUE TEAM WINS** (+1 point)                                    │
│                                                                     │
│ **Instructor Feedback**:                                           │
│ "Blue Team의 완벽한 defense입니다. Key strengths:                  │
│                                                                     │
│ 1. **Robustness Demonstration** (Defense Strategy #2):             │
│    - 6가지 다른 statistical tests 모두 수행하여 일관성 입증        │
│    - Welch's t-test로 homogeneity assumption 우회                  │
│    - Bootstrap & permutation으로 distribution-free testing         │
│                                                                     │
│ 2. **Theoretical Knowledge**:                                      │
│    - CLT with N≥30이 normality violations를 mitigate한다는 것을    │
│      정확히 이해                                                    │
│    - Mann-Whitney의 limitation (tests median, not mean; less       │
│      powerful) 파악                                                 │
│                                                                     │
│ 3. **Red Team의 오류 지적**:                                       │
│    - Mann-Whitney U=312 p=.08은 계산 오류 (correct: U=285 p=.024) │
│    - 이는 Red Team이 데이터를 잘못 분석했음을 보여줌               │
│                                                                     │
│ 4. **Supplementary Transparency**:                                 │
│    - All 6 tests를 Supplementary Table에 보고 → no cherry-picking │
│                                                                     │
│ **Red Team의 실수**:                                               │
│ - Assumption violations를 지적한 것은 good attack이지만,            │
│   robustness checks 없이 Mann-Whitney만 제시한 것은 narrow         │
│ - 계산 오류 (U=312 vs correct U=285)는 치명적 실수                  │
│                                                                     │
│ **Teaching Point**: Assumption violations가 발견되면:               │
│ 1. Panic하지 말고 robustness checks 수행                           │
│ 2. Welch's t-test (unequal variances OK)                           │
│ 3. Bootstrap/permutation (distribution-free)                       │
│ 4. Non-parametric alternatives (Mann-Whitney, Wilcoxon)            │
│ 5. ALL tests를 보고하여 일관성 입증                                 │
│                                                                     │
│ If all tests converge → result is robust despite violations.       │
│ Blue Team처럼 systematic robustness demonstration을 하면 assumption│
│ violation attacks를 완벽히 방어할 수 있습니다."                     │
└────────────────────────────────────────────────────────────────────┘

---

## Final Game Score

┌────────────────────────────────────────────────────────────────────┐
│ 🏆 FINAL SCORE                                                     │
├────────────────────────────────────────────────────────────────────┤
│ **Blue Team (Defender)**: 2.5 points                              │
│ **Red Team (Attacker)**: 0.5 points                               │
│                                                                     │
│ **Winner**: 🛡️ BLUE TEAM (학생A) 승리!                            │
└────────────────────────────────────────────────────────────────────┘

---

## Key Lessons from This Battle

### Lesson 1: Power Analysis Requires Theoretical Justification

**What Blue Team Did Right**:
- Used meta-analysis (Rasch & Born, 2013, d=0.89) to justify LARGE effect expectation
- Conducted a priori power analysis for d=0.8 (not generic d=0.5)
- Pre-registered power analysis before data collection (OSF)
- Observed effect (d=0.92) confirmed meta-analytic prediction

**Takeaway**: Don't use generic medium effect (d=0.5) for power analysis. Always justify expected effect size with prior literature.

---

### Lesson 2: Multiple Comparisons Require Primary/Secondary Distinction

**What Blue Team Did Right**:
- Pre-registered delayed recall as PRIMARY outcome
- Labeled other outcomes as SECONDARY/exploratory
- Provided theoretical justification (consolidation mechanism → delayed memory specific)
- Reported ALL 4 outcomes transparently (no cherry-picking)
- Acknowledged limitation (Bonferroni would make delayed recall p=.02 non-significant)

**Takeaway**: Pre-specify primary vs secondary outcomes. Don't test 10 outcomes and report only p<.05 as "primary."

---

### Lesson 3: Assumption Violations ≠ Invalid Results

**What Blue Team Did Right**:
- Acknowledged violations (Shapiro-Wilk p<.05, Levene p<.05)
- Invoked Central Limit Theorem (N≥30 → robust to normality violations)
- Used Welch's t-test (doesn't assume homogeneity)
- Conducted 6 robustness checks (parametric, non-parametric, Bayesian)
- Showed all tests converge on p<.05 → robust finding
- Caught Red Team's calculation error (Mann-Whitney U=312 vs correct U=285)

**Takeaway**: Assumption violations are common. Demonstrate robustness with multiple tests rather than panicking.

---

### Lesson 4: Defense Strategies Work Best in Combination

**Blue Team's Strategy Mix**:
- **Round 1**: Evidence-Based Justification (meta-analysis + pre-registration)
- **Round 2**: Evidence-Based + Limitation Acknowledgment (primary/secondary + honest about Bonferroni issue)
- **Round 3**: Robustness Demonstration + Sensitivity Analysis (6 tests + all converge)

**Takeaway**: Don't rely on single defense. Combine evidence, transparency, robustness checks, and limitation acknowledgment.

---

### Lesson 5: Catch Opponent's Errors

**Blue Team's Critical Catch**:
- Red Team claimed Mann-Whitney U=312, p=.08 (non-significant)
- Blue Team recalculated: correct U=285, p=.024 (significant!)
- This exposed Red Team's calculation error and invalidated their attack

**Takeaway**: Verify opponent's calculations. Catching errors wins rounds.

---

## How to Use This Example in Workshop

### Setup (5 minutes):
1. Pair students (1 Blue Team, 1 Red Team per pair)
2. Assign study context (Blue Team receives Methods/Results excerpt)
3. Explain 3-round battle structure (10 min per round: 3 min attack, 5 min defense, 2 min scoring)

### Round Structure (10 minutes per round × 3 = 30 minutes):
1. **Red Team Attack** (3 min): Choose attack type from Template 4.2, write attack statement in their Figma zone
2. **Blue Team Defense** (5 min): Choose defense strategy, write justification with evidence
3. **Instructor Scoring** (2 min): Announce winner, provide 1-minute feedback highlighting key teaching points

### Debrief (10 minutes):
1. Ask Blue Teams: "Which defense strategy worked best? Why?"
2. Ask Red Teams: "Which attacks were hardest to defend against?"
3. Instructor summary: "Top 3 lessons from today's battles"

### Extension Activity (Optional):
- Students switch roles and replay with different study context
- Students write their own attack/defense pairs for homework
- Best battles are shared in next class as exemplars

---

## Practice Exercise

### Your Turn: Run a Battle with YOUR Data

**Step 1**: Choose 1 statistical decision from your Methods/Results
- Examples: Sample size, statistical test choice, multiple comparisons, assumption handling

**Step 2**: Write Red Team Attack
- Use Template 4.2 attack templates (#1-8)
- Provide evidence and calculations
- Make it as strong as possible

**Step 3**: Write Blue Team Defense
- Use Template 4.2 defense strategies (#1-5)
- Provide supporting evidence (citations, analyses, robustness checks)
- Acknowledge limitations honestly

**Step 4**: Self-Score
- Did defense successfully counter attack?
- What additional evidence would strengthen defense?
- Are there limitations you haven't acknowledged?

**Goal**: Identify weaknesses in your statistical reasoning BEFORE reviewers do

---

## Common Attack/Defense Patterns

### Pattern 1: Sample Size Attacks

**Attack**: "Your N is too small for adequate power"
**Weak Defense**: "N=30 is typical in my field"
**Strong Defense**: "A priori power analysis for LARGE effect (d=0.8 from meta d=0.89) required N=26; my N=30 exceeds this (115%)"

---

### Pattern 2: Multiple Comparison Attacks

**Attack**: "You tested 5 outcomes without Bonferroni correction → inflated FWER"
**Weak Defense**: "These are all related to my hypothesis"
**Strong Defense**: "Pre-registered primary outcome (Outcome 1), others exploratory. Primary vs secondary distinction justified (Rothman, 1990). All 5 outcomes reported transparently."

---

### Pattern 3: Assumption Violation Attacks

**Attack**: "Your data violate normality (Shapiro-Wilk p<.05)"
**Weak Defense**: "Normality violations don't matter much"
**Strong Defense**: "Conducted robustness checks: Welch's t (p=.02), bootstrap (p=.019), permutation (p=.018), Mann-Whitney (p=.024) → all converge on p<.05. Result robust despite violation."

---

### Pattern 4: P-Hacking Accusations

**Attack**: "Your p=.048 looks like p-hacking (just barely <.05)"
**Weak Defense**: "p=.048 is less than .05, so it's significant"
**Strong Defense**: "Pre-registered analysis plan (OSF timestamp before data collection). Effect size (d=0.65) consistent with meta-analysis (d=0.68, CI [0.52, 0.84]). Exact p-value (p=.048) provided for transparency."

---

### Pattern 5: Effect Size Minimization

**Attack**: "Your d=0.35 is a small effect → practically meaningless"
**Weak Defense**: "Cohen (1988) calls d=0.2-0.5 small-to-medium"
**Strong Defense**: "d=0.35 translates to 14% improvement over control (from 60% to 74% accuracy). This exceeds minimal important difference (MID=10%) for this clinical outcome (Smith et al., 2020). Small statistical effect with large practical impact."

---

## Related Materials

**Templates**:
- `template_4.2_red_team_blue_team.md`: Complete game setup with 8 attack types + 5 defense strategies

**Examples**:
- `example_4.1_bad_methods.md`: Reproducibility gaps
- `example_4.2_good_methods.md`: Complete Methods (30/30)
- `example_4.3_bad_results.md`: Results problems (5/5 rejection reasons)
- `example_4.4_good_results.md`: Bulletproofed Results
- `example_4.6_peer_review_model.md`: Model peer review (coming next)

**Lecture Notes**:
- `week4/lecture_notes.md`: Statistical rigor strategies (lines 282-422)

**Recipes**:
- Recipe #37: Power Analysis Reviewer
- Recipe #39: Statistical Rigor Auditor

---

**Example Version**: 1.0
**Last Updated**: 2025-01-09
**Use**: Week 4 workshop - Model for Red Team/Blue Team game demonstrating attack/defense mechanics with realistic gameplay and instructor feedback

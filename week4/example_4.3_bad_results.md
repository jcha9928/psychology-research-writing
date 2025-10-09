# Example 4.3: Bad Results Section (Overclaiming + Weak Statistics)

**Purpose**: Demonstrate critical Results section problems that lead to top-tier journal rejection

**Use in Workshop**: Model for Template 4.1 (Bulletproofing Audit) focusing on rejection reasons #6-10

---

## Research Topic

**Domain**: Social Psychology - Emotion Regulation and Well-Being
**Study Type**: Experimental intervention (cognitive reappraisal training)
**Same study as Examples 4.1-4.2, showing common Results section mistakes**

---

## Bad Results Section (Original)

```
Results

The ANOVA revealed a significant Group × Time interaction for cognitive
reappraisal, F(1,78) = 4.35, p = .04. The training group showed increased
reappraisal use from baseline (M = 4.2) to post-assessment (M = 4.8),
while the control group remained unchanged (baseline M = 4.1,
post-assessment M = 4.2). This demonstrates that our training
successfully improved participants' emotion regulation abilities.

For life satisfaction, we also found a significant Group × Time
interaction, F(1,78) = 3.89, p = .052. Although this was marginally
significant, it still shows a clear trend toward improved well-being
in the training group (baseline M = 22, post-assessment M = 25)
compared to controls (baseline M = 21, post-assessment M = 21).

Additional analyses revealed that age was positively correlated with
baseline reappraisal use (r = .18, p = .04), suggesting that older
participants were already better at emotion regulation. Gender
differences were not significant (p = .12).

These findings prove that cognitive reappraisal training is an
effective intervention for enhancing well-being in college students.
```

---

## Top 10 Rejection Reasons - Which Apply to This Example?

### ✅ APPLIES (5 out of 5 Results-Specific Reasons):

**#6. Overclaiming - Claims Stronger Than Evidence** ✅ SEVERE
- "demonstrates" when data only show correlation
- "prove" instead of "provide evidence for"
- Causality claimed from non-randomized comparisons
- Small effects presented as large practical significance

**#7. Cherry-Picking - Selective Reporting** ✅ MODERATE
- p = .052 treated as "significant" ("marginally significant", "clear trend")
- Age correlation (r = .18, p = .04) reported but gender (p = .12) dismissed
- No mention of potential non-significant findings
- Potential file-drawer problem (reporting only favorable results)

**#8. Statistical Issues - Incomplete/Incorrect Stats** ✅ SEVERE
- No effect sizes reported (no η²_p, no Cohen's d)
- No confidence intervals for any estimate
- M values without SD or SE (impossible to evaluate variability)
- Marginal p-value (.052) treated as significant
- Multiple comparisons (reappraisal, life satisfaction, age, gender) without correction

**#9. Unclear Presentation - Poor Organization/Visualization** ✅ MODERATE
- No table or figure to summarize key findings
- Means reported in-text without structure (hard to compare)
- No visual representation of Group × Time interaction
- Missing descriptive statistics (SD, SE, range, n per cell)

**#10. Weak Effect Sizes - Trivial Effects Hyped** ✅ SEVERE
- Reappraisal change: Training Δ = 0.6, Control Δ = 0.1 (difference = 0.5 on 7-point scale = 7% of range)
- Life satisfaction change: Training Δ = 3, Control Δ = 0 (difference = 3 on 5-35 scale = 10% of range)
- Age-reappraisal correlation: r = .18 (r² = .03 = 3% variance explained) presented as meaningful
- No discussion of practical significance or clinical meaningfulness

---

## AI Audit Results (Recipes #38 Overclaiming + #39 Statistical Rigor)

### Recipe #38: Overclaiming Detector

**프롬프트**:
```
다음 Results 섹션을 읽고, 데이터가 지지하는 것보다 강한 주장(overclaiming)을 찾아줘:

[Results text above]

각 overclaim에 대해:
1. 어떤 표현이 과도한가? (예: "prove", "demonstrate", "cause")
2. 데이터는 실제로 무엇을 보여주는가?
3. 어떻게 수정해야 하는가? (Before → After)
```

**AI Output**:

```
=== OVERCLAIMING ISSUES (5 Critical Problems) ===

1. CAUSALITY OVERCLAIM
   Problem: "This demonstrates that our training successfully improved..."
   What data show: Significant Group × Time interaction (F=4.35, p=.04)
   Issue: "Demonstrates" implies causality, but:
          - No baseline equivalence test reported (groups could differ pre-intervention)
          - No manipulation check (did training actually increase reappraisal DURING training?)
          - Confounds not ruled out (attention, expectancy, demand characteristics)
   Fix:
     BEFORE: "This demonstrates that our training successfully improved..."
     AFTER: "Consistent with our hypothesis, participants who received training
             showed greater increases in reappraisal use compared to controls
             (Group × Time interaction: F(1,78)=4.35, p=.04, η²_p=.05).
             However, alternative explanations (e.g., expectancy effects)
             cannot be ruled out without manipulation checks."

2. "PROVE" OVERCLAIM
   Problem: "These findings prove that cognitive reappraisal training is effective..."
   What data show: Two p-values (.04 and .052), no effect sizes, no replication
   Issue: Science never "proves" - especially not from ONE study with marginal effects
   Fix:
     BEFORE: "These findings prove..."
     AFTER: "These findings provide preliminary evidence that..." OR
            "Consistent with prior research (citations), our results suggest..."

3. GENERALIZATION OVERCLAIM
   Problem: "...effective intervention for enhancing well-being in college students"
   What data show: N=80 from ONE university, ONE measure of well-being (SWLS only)
   Issue: Overgeneralization from narrow sample and single outcome
   Fix:
     BEFORE: "...effective for college students"
     AFTER: "...may be effective for first- and second-year psychology students
             at [University], as measured by the SWLS. Replication with diverse
             samples and multiple well-being indicators is needed."

4. MARGINAL p-VALUE AS "SIGNIFICANT"
   Problem: "Although this was marginally significant, it still shows a clear trend..."
   What p=.052 means: Failed to meet pre-specified α=.05 threshold
   Issue: Post-hoc reframing of null result as "almost significant" is p-hacking
   Fix:
     BEFORE: "marginally significant... clear trend"
     AFTER: "For life satisfaction, the Group × Time interaction did not reach
             statistical significance (F(1,78)=3.89, p=.052, η²_p=.05). While
             the direction of effects was consistent with predictions, this
             finding should be interpreted with caution pending replication."

5. CHERRY-PICKED CORRELATION AS "MEANINGFUL"
   Problem: "age was positively correlated... suggesting that older participants
            were already better at emotion regulation"
   What r=.18 means: 3% variance explained (r²=.03), very weak association
   Issue: Small, likely spurious correlation presented as interpretable finding
   Fix:
     BEFORE: "suggesting that older participants were already better..."
     AFTER: "Exploratory correlation between age and baseline reappraisal was
             weak (r=.18, p=.04), accounting for only 3% of variance. Given
             the narrow age range (18-24) and lack of a priori hypothesis,
             this finding may reflect Type I error and requires replication."
```

---

### Recipe #39: Statistical Rigor Auditor

**프롬프트**:
```
다음 Results 섹션을 읽고, 통계적 엄밀성(statistical rigor) 문제를 찾아줘:

[Results text above]

체크리스트:
1. Effect sizes 보고되었나? (η², d, r)
2. Confidence intervals 보고되었나? (95% CI)
3. Descriptive stats 완전한가? (M, SD, SE, n)
4. Multiple comparisons 보정했나?
5. Assumptions 테스트했나? (normality, homogeneity, etc.)
6. p-values 해석이 적절한가? (p=.052를 "marginally significant"로?)
```

**AI Output**:

```
=== STATISTICAL RIGOR VIOLATIONS (6 Critical Gaps) ===

1. NO EFFECT SIZES ❌
   Missing: Partial η²_p for ANOVA interactions, Cohen's d for pairwise comparisons
   Impact: Cannot evaluate practical significance - F=4.35 could be trivial or meaningful

   Current: "F(1,78) = 4.35, p = .04"
   Should add: "F(1,78) = 4.35, p = .04, η²_p = .05 (small-to-medium effect)"

   Current: "training group showed increased reappraisal (M=4.2 → M=4.8)"
   Should add: "Cohen's d = 0.51 for training group change (95% CI [0.18, 0.84]),
                d = 0.09 for control group change (95% CI [-0.22, 0.40])"

2. NO CONFIDENCE INTERVALS ❌
   Missing: 95% CIs for all means, mean differences, effect sizes
   Impact: Cannot evaluate precision of estimates or compare to prior studies

   Should report:
   - Reappraisal change in training: Δ = 0.6 (95% CI [0.2, 1.0])
   - Reappraisal change in control: Δ = 0.1 (95% CI [-0.3, 0.5])
   - Group difference in change: Δ = 0.5 (95% CI [0.05, 0.95])

   Without CIs, readers can't assess:
   - Uncertainty in estimates (SE)
   - Compatibility with previous effect sizes
   - Clinical/practical significance thresholds

3. INCOMPLETE DESCRIPTIVE STATISTICS ❌
   Current: "M = 4.2" (mean only, no variability)
   Missing: SD or SE for EVERY reported mean
   Impact: Cannot calculate effect sizes, compare to normative data, or verify analyses

   Should report:
   - Training baseline: M = 4.2, SD = 0.8, SE = 0.13, n = 40
   - Training post: M = 4.8, SD = 0.9, SE = 0.14, n = 40
   - Control baseline: M = 4.1, SD = 0.7, SE = 0.11, n = 40
   - Control post: M = 4.2, SD = 0.8, SE = 0.13, n = 40

4. NO MULTIPLE COMPARISON CORRECTION ❌
   Tests reported:
   - Reappraisal Group × Time (p = .04)
   - Life Satisfaction Group × Time (p = .052)
   - Age-Reappraisal correlation (p = .04)
   - Gender differences (p = .12)

   Total: 4 statistical tests reported, likely more conducted (not reported)

   Problem: With 4 tests at α = .05, probability of ≥1 Type I error = 18.5%
            (1 - (1 - .05)^4 = .185)

   Solutions:
   Option 1: Bonferroni correction (α = .05/4 = .0125)
             → Reappraisal p=.04 becomes NON-significant
             → Age p=.04 becomes NON-significant

   Option 2: Pre-specify primary (reappraisal, life satisfaction) vs exploratory
             (age, gender), don't correct primary (Rothman, 1990), correct
             exploratory at α = .05/2 = .025
             → Age p=.04 becomes NON-significant

   Option 3: Report all exact p-values + effect sizes, let readers judge
             (requires transparency about ALL tests conducted, not just significant)

5. p = .052 MISINTERPRETATION ❌
   Current: "marginally significant... clear trend"
   Problem: Post-hoc redefinition of significance threshold is p-hacking

   Correct interpretation:
   "The Group × Time interaction for life satisfaction did not reach statistical
   significance at our pre-specified α = .05 threshold (F(1,78) = 3.89, p = .052,
   η²_p = .05). The observed effect size was small-to-medium (equivalent to
   Cohen's d ≈ 0.45 for the group difference in change). This non-significant
   trend is consistent with our hypothesis but requires replication before
   drawing conclusions."

   Never say: "marginally significant", "approached significance", "trend toward"
   These are all p-hacking red flags

6. NO ASSUMPTION TESTING REPORTED ❌
   Missing: Results of Shapiro-Wilk (normality), Levene (homogeneity), Mauchly
            (sphericity) tests
   Impact: Readers don't know if ANOVA was appropriate or if corrections were needed

   Should report (from Example 4.2):
   "Assumption tests: Shapiro-Wilk tests confirmed normality (all ps > .05),
   Levene's tests confirmed homogeneity of variance (all ps > .05), Mauchly's
   test confirmed sphericity (all ps > .05, no corrections needed)."

   If assumptions violated: "Greenhouse-Geisser correction applied due to
   sphericity violation (ε = 0.87)"
```

---

## Element-by-Element Problems

### PROBLEM 1: Overclaiming Beyond Data

**What's CLAIMED**:
- ❌ "demonstrates that our training successfully improved..." (line 5-6)
- ❌ "prove that cognitive reappraisal training is effective..." (line 18-19)

**What's SUPPORTED by data**:
- ✅ Significant Group × Time interaction for reappraisal (F=4.35, p=.04)
- ✅ Directional effects consistent with predictions

**What's NOT supported**:
- ❌ Causality (no manipulation checks, confounds not ruled out)
- ❌ "Proof" (single study, marginal effects, no replication)
- ❌ "Successful improvement" in emotion regulation abilities (only reappraisal BELIEFS measured via self-report, not actual regulatory success)

**Impact**: Reviewers will reject for overstating conclusions beyond data support

---

### PROBLEM 2: Cherry-Picking Favorable Results

**What's REPORTED as "significant"**:
- ✅ Reappraisal interaction: p = .04 (actually significant)
- ⚠️ Life satisfaction interaction: p = .052 (not significant, but reported as "marginally significant... clear trend")
- ⚠️ Age-reappraisal correlation: r = .18, p = .04 (weak effect, 3% variance)

**What's DISMISSED**:
- Gender: p = .12 → "not significant" (consistent treatment of p > .05)

**Cherry-Picking Red Flags**:
1. **Asymmetric p-value interpretation**: p = .052 presented as "almost there" but p = .12 dismissed
2. **Weak effect hyped**: r = .18 (3% variance) gets causal interpretation ("older participants were already better")
3. **Missing negative results**: What other analyses were conducted but not reported?
4. **File-drawer problem**: Only favorable results published → inflates apparent effect sizes

**Impact**: Reviewers suspect p-hacking and selective reporting

---

### PROBLEM 3: Missing Effect Sizes

**What's REPORTED**:
- F-statistics with p-values: F(1,78) = 4.35, p = .04
- Means: M = 4.2, M = 4.8 (no SD, SE, or CI)
- Correlation: r = .18, p = .04

**What's MISSING**:
- ❌ Partial η²_p for ANOVA interactions (how much variance explained?)
- ❌ Cohen's d for pairwise comparisons (how big is the training effect?)
- ❌ 95% Confidence intervals for all estimates (precision of effects?)
- ❌ Standardized effect sizes (are these effects small, medium, or large?)

**Why this matters**:
- F=4.35 is statistically significant at p=.04, but **how meaningful is it?**
  - Could be η²_p = .05 (5% variance, small effect)
  - Could be η²_p = .15 (15% variance, large effect)
- Training group: M=4.2 → M=4.8 (Δ=0.6)
  - Is this d = 0.2 (small), d = 0.5 (medium), or d = 0.8 (large)?
  - 0.6 on a 7-point scale = 8.6% of range → likely small effect
  - But without SD, can't calculate standardized effect size

**Impact**: Without effect sizes, reviewers cannot evaluate practical significance

---

### PROBLEM 4: Misinterpreting p = .052

**Current text**:
> "For life satisfaction, we also found a significant Group × Time interaction,
> F(1,78) = 3.89, p = .052. Although this was marginally significant, it still
> shows a clear trend toward improved well-being..."

**Problems**:
1. **Calls p = .052 "significant"** when it's NOT (α = .05 threshold not met)
2. **"Marginally significant"** is p-hacking jargon with no statistical meaning
3. **"Still shows a clear trend"** implies the result is meaningful despite failing threshold
4. **Post-hoc threshold adjustment** (moving goalposts after seeing data)

**Correct interpretation**:
> "The Group × Time interaction for life satisfaction did not reach statistical
> significance (F(1,78) = 3.89, p = .052, η²_p = .05). While the direction of
> effects was consistent with predictions, this null finding limits conclusions
> about training effects on well-being."

**Why "marginal significance" is wrong**:
- If α = .05 was chosen a priori, then p = .052 is a FAIL, not "almost significant"
- Treating p = .052 as "trend" but p = .12 as "not significant" is arbitrary
- Either pre-register different thresholds (.10 for exploratory?) or accept null results
- Top-tier journals see "marginally significant" as a red flag for p-hacking

**Impact**: Reviewers will question integrity of statistical inference

---

### PROBLEM 5: No Confidence Intervals

**Current reporting**:
- Reappraisal means: M = 4.2, M = 4.8 (point estimates only)
- Life satisfaction means: M = 22, M = 25 (point estimates only)

**What's missing**: 95% Confidence Intervals showing precision

**Why CIs matter**:
- **Uncertainty quantification**: How much could the true effect vary?
- **Compatibility with prior studies**: Does your CI overlap with meta-analytic estimates?
- **Clinical significance**: Does the CI include or exclude meaningful thresholds?

**Example of what should be reported**:
```
Training group reappraisal change: Δ = 0.6, 95% CI [0.2, 1.0]
Control group reappraisal change: Δ = 0.1, 95% CI [-0.3, 0.5]
Group difference: Δ = 0.5, 95% CI [0.05, 0.95]

Interpretation:
- True training effect likely between 0.05 and 0.95 points on 7-point scale
- Lower bound (0.05) is very small (0.7% of scale range)
- Upper bound (0.95) is small-to-medium (13.6% of scale range)
- Wide CI indicates low precision → need larger N for replication
```

**Impact**: Without CIs, readers can't evaluate precision or compare to other studies

---

### PROBLEM 6: Incomplete Descriptive Statistics

**Current reporting**:
```
Training: baseline M = 4.2, post M = 4.8
Control: baseline M = 4.1, post M = 4.2
```

**What's MISSING**:
- ❌ Standard deviations (SD)
- ❌ Standard errors (SE)
- ❌ Sample sizes per cell (assumed n=40 based on total N=80, but not stated)
- ❌ Ranges or min-max values

**Why this matters**:
- **Cannot calculate effect sizes** without SD (d = Δ / SD_pooled)
- **Cannot verify statistics** (e.g., check if reported F-value is correct)
- **Cannot compare to normative data** (is M=4.2 typical for this scale?)
- **Cannot assess variability** (is there high individual difference?)

**What should be reported** (in table):
```
Measure            Group      Time        M      SD    SE     n
──────────────────────────────────────────────────────────────
Reappraisal        Training   Baseline   4.2    0.8   0.13   40
                              Post       4.8    0.9   0.14   40
                   Control    Baseline   4.1    0.7   0.11   40
                              Post       4.2    0.8   0.13   40

Life Satisfaction  Training   Baseline   22.0   5.2   0.82   40
                              Post       25.0   5.8   0.92   40
                   Control    Baseline   21.0   4.9   0.78   40
                              Post       21.0   5.1   0.81   40
```

**Impact**: Incomplete descriptives prevent readers from evaluating results or conducting meta-analyses

---

### PROBLEM 7: Multiple Comparisons Without Correction

**Tests conducted and reported**:
1. Reappraisal Group × Time: p = .04
2. Life Satisfaction Group × Time: p = .052
3. Age-Reappraisal correlation: p = .04
4. Gender differences: p = .12

**Likely tests conducted but NOT reported**:
- Gender-Reappraisal correlation? (not mentioned)
- Gender-Life Satisfaction differences? (not mentioned)
- Age-Life Satisfaction correlation? (not mentioned)
- Baseline group differences? (assumed equivalent but not tested)
- Other demographics × outcomes? (not mentioned)

**Problem**: With 4+ tests, probability of ≥1 false positive increases

**Family-Wise Error Rate**:
- 1 test at α = .05: 5% chance of Type I error
- 4 tests at α = .05: 1 - (1-.05)^4 = 18.5% chance of ≥1 false positive
- 10 tests at α = .05: 40% chance of ≥1 false positive

**Solutions**:
1. **Bonferroni correction**: α_adjusted = .05 / k tests
   - For 4 tests: α = .0125 → reappraisal p=.04 becomes NON-significant
2. **False Discovery Rate (FDR)**: Control expected proportion of false discoveries (Benjamini-Hochberg)
3. **Pre-specified primary vs exploratory**: Correct only exploratory tests
4. **Report all tests conducted**: Transparency about analyses attempted

**Current approach**: None (reports p-values at α=.05 without acknowledging multiple tests)

**Impact**: Inflated Type I error rate → findings may be false positives

---

### PROBLEM 8: Weak Effects Presented as Important

**Reappraisal Effect**:
- Training group change: M = 4.2 → M = 4.8 (Δ = 0.6 on 7-point scale)
- Control group change: M = 4.1 → M = 4.2 (Δ = 0.1)
- Group difference: 0.6 - 0.1 = 0.5 points

**Practical significance**:
- 0.5 points on 7-point scale = 7.1% of total range (1-7)
- Assuming SD ≈ 0.8 (typical for Likert scales), Cohen's d ≈ 0.5/0.8 = 0.625 (medium effect)
- BUT: Self-report reappraisal beliefs, NOT actual emotion regulation success
- Clinical significance? Unknown (no benchmarks for "meaningful change" on ERQ)

**Life Satisfaction Effect**:
- Training group change: M = 22 → M = 25 (Δ = 3 on 5-35 scale)
- Control group change: M = 21 → M = 21 (Δ = 0)
- Group difference: 3 points

**Practical significance**:
- 3 points on 5-35 scale = 10% of total range
- Assuming SD ≈ 5 (typical for SWLS), Cohen's d ≈ 3/5 = 0.6 (medium effect)
- BUT: p = .052 (not significant)
- Clinical significance? SWLS minimal important difference (MID) = 5 points (Diener et al., 1985)
  → Our Δ = 3 is BELOW the MID threshold

**Age-Reappraisal Correlation**:
- r = .18 → r² = .03 (3% variance explained)
- 97% of variance in reappraisal is DUE TO OTHER FACTORS
- Weak effect presented as interpretable ("older participants were already better")

**Problem**: Small effects presented as large practical importance without:
- Standardized effect sizes (Cohen's d)
- Comparisons to minimal important differences (MIDs)
- Clinical significance thresholds
- Consideration of self-report limitations

**Impact**: Reviewers will see this as hype, not science

---

## Red Flags for Top-Tier Journal Reviewers

### Red Flag #1: "Prove" Language
❌ **Current**: "These findings **prove** that cognitive reappraisal training is effective"

**Why problematic**:
- Science never "proves" - only "provides evidence for"
- Single study with p=.04 and p=.052 is weak evidence, not proof
- Replication, meta-analysis, and theoretical integration required for strong claims

**Fix**: "These findings **provide preliminary evidence that** cognitive reappraisal training may increase self-reported reappraisal use in undergraduate students, consistent with prior research (citations). **Replication with diverse samples and objective regulatory outcomes is needed to confirm these effects.**"

---

### Red Flag #2: "Marginally Significant" for p = .052
❌ **Current**: "Although this was **marginally significant**, it still shows a **clear trend**"

**Why problematic**:
- "Marginally significant" has no statistical definition (arbitrary threshold)
- Post-hoc redefinition of significance is p-hacking
- Either the result meets α=.05 (YES) or it doesn't (NO) - no middle ground

**Fix**: "The Group × Time interaction for life satisfaction **did not reach statistical significance** (F(1,78)=3.89, p=.052, η²_p=.05). While the direction of effects was consistent with predictions, **this null result limits conclusions about training effects on well-being**. Replication with larger samples is needed."

---

### Red Flag #3: No Effect Sizes
❌ **Current**: Only F-statistics and p-values reported

**Why problematic**:
- APA 7th edition REQUIRES effect sizes (η²_p for ANOVA, d for t-tests)
- Without effect sizes, cannot evaluate practical significance
- Meta-analyses cannot include studies without effect sizes

**Fix**: "F(1,78) = 4.35, p = .04, **η²_p = .05 (small-to-medium effect)**. Post-hoc pairwise comparisons: Training group showed medium increase (Cohen's d = 0.51, 95% CI [0.18, 0.84]), control group showed trivial change (d = 0.09, 95% CI [-0.22, 0.40])."

---

### Red Flag #4: Means Without Variability
❌ **Current**: "M = 4.2... M = 4.8" (no SD, SE, or CI)

**Why problematic**:
- Violates APA reporting standards (M must be accompanied by SD or SE)
- Cannot calculate effect sizes or verify analyses
- Impossible to compare to normative data or prior studies

**Fix**: Present full descriptive statistics in table:
```
Training baseline: M = 4.2, SD = 0.8, 95% CI [4.0, 4.4]
Training post: M = 4.8, SD = 0.9, 95% CI [4.5, 5.1]
```

---

### Red Flag #5: Cherry-Picked Correlations
❌ **Current**: "age was positively correlated... (r = .18, p = .04), **suggesting that older participants were already better**"

**Why problematic**:
- r = .18 is weak (3% variance explained)
- Age range is narrow (18-24), restricted range → unreliable correlation
- Exploratory finding (not a priori hypothesis) → likely Type I error
- Causal interpretation ("older = better") from correlational data

**Fix**: "Exploratory analysis: Age and baseline reappraisal showed weak positive correlation (r = .18, p = .04, r² = .03), accounting for only 3% of variance. **Given the narrow age range (18-24) and lack of a priori hypothesis, this finding should be interpreted cautiously and requires replication.**"

---

### Red Flag #6: No Table or Figure
❌ **Current**: All results reported in-text only

**Why problematic**:
- Hard to compare groups, times, and conditions
- Increases cognitive load for readers
- Missing opportunity to visualize interaction patterns
- Top-tier journals expect clear data visualization

**Fix**: Include:
- **Table 1**: Descriptive statistics (M, SD, 95% CI) for all measures by Group × Time
- **Figure 1**: Bar graph or line graph showing Group × Time interaction with error bars (SE or 95% CI)
- **Table 2**: ANOVA results (F, df, p, η²_p) for all effects (Group, Time, Group × Time)

---

## Lessons for Top-Tier Results Sections

### 1. Report Effect Sizes for EVERY Statistical Test

**Mandatory for top-tier journals** (Nature, Science, PNAS, Psychological Science):
- ANOVA: Partial η²_p (.01 small, .06 medium, .14 large)
- t-tests / pairwise: Cohen's d (0.2 small, 0.5 medium, 0.8 large)
- Correlations: r with r² (variance explained)
- Regression: R², β, sr² (semi-partial)

**Example**:
```
The Group × Time interaction was significant, F(1,78) = 4.35, p = .04, η²_p = .05,
indicating a small-to-medium effect. Post-hoc pairwise comparisons revealed that
the training group showed a medium increase in reappraisal use from baseline to
post-assessment (d = 0.51, 95% CI [0.18, 0.84]), whereas the control group showed
a trivial change (d = 0.09, 95% CI [-0.22, 0.40]).
```

---

### 2. Report 95% Confidence Intervals

**For all estimates**: means, mean differences, effect sizes, correlations

**Why CIs matter**:
- Quantify uncertainty (precision of estimate)
- Enable comparison to prior studies (compatibility)
- Evaluate clinical significance (does CI include MID threshold?)
- More informative than p-values alone

**Example**:
```
Training group reappraisal change: Δ = 0.6, 95% CI [0.2, 1.0]
Control group reappraisal change: Δ = 0.1, 95% CI [-0.3, 0.5]

Interpretation: The true training effect is likely between 0.2 and 1.0 points,
which corresponds to d = 0.25 to d = 1.25 (small to large). The wide CI reflects
the modest sample size and suggests replication with larger N is warranted.
```

---

### 3. Complete Descriptive Statistics

**For EVERY mean, report**: M, SD (or SE), 95% CI, n

**Use tables for efficiency**:
```
Table 1. Descriptive Statistics by Group and Time

Measure            Group      Time        M      SD    95% CI          n
───────────────────────────────────────────────────────────────────────
Reappraisal (ERQ)  Training   Baseline   4.2    0.8   [4.0, 4.4]     40
                              Post       4.8    0.9   [4.5, 5.1]     40
                   Control    Baseline   4.1    0.7   [3.9, 4.3]     40
                              Post       4.2    0.8   [3.9, 4.5]     40

Note. ERQ scores range from 1 (low reappraisal) to 7 (high reappraisal).
95% CI = 95% confidence interval for the mean.
```

---

### 4. Address Multiple Comparisons

**If conducting >1 statistical test**, address multiple comparisons:

**Option 1: Pre-specify primary vs exploratory**
```
"Two primary hypotheses were tested (reappraisal, life satisfaction) without
adjustment for multiple comparisons (Rothman, 1990), as they addressed distinct
a priori predictions. Exploratory analyses (age, gender) were corrected using
False Discovery Rate (FDR; Benjamini & Hochberg, 1995) at q = .05."
```

**Option 2: Bonferroni correction**
```
"We conducted 4 statistical tests, so we applied Bonferroni correction
(α_adjusted = .05/4 = .0125). The reappraisal Group × Time interaction
(p = .04) did not survive correction and should be interpreted cautiously."
```

**Option 3: Full transparency**
```
"We report all statistical tests conducted, including non-significant results,
to avoid selective reporting. Readers should consider the family-wise error
rate when evaluating the pattern of findings."
```

---

### 5. Visualize Results with Tables and Figures

**Table 1**: Descriptive statistics (M, SD, 95% CI) by condition
**Figure 1**: Interaction plot with error bars (SE or 95% CI)
**Table 2**: Inferential statistics (F, p, η²_p) for all effects

**Benefits**:
- Easier to compare conditions
- Reduces text length
- Clearer pattern recognition
- Shows raw data transparency

**Example Figure 1 description**:
```
Figure 1. Mean reappraisal use (ERQ scores) by Group and Time. Error bars
represent 95% confidence intervals. The training group showed greater increase
from baseline to post-assessment compared to the control group (Group × Time
interaction: F(1,78) = 4.35, p = .04, η²_p = .05).
```

---

### 6. Interpret Non-Significant Results Correctly

**Don't say**: "marginally significant", "trend toward", "approached significance"

**Do say**:
```
"The Group × Time interaction for life satisfaction did not reach statistical
significance (F(1,78) = 3.89, p = .052, η²_p = .05). While the observed effect
size was small-to-medium and consistent with predictions, this null result limits
conclusions about training effects on well-being. The study may have been
underpowered to detect effects of this magnitude (post-hoc power = 52% at
α = .05, d = 0.45). Replication with N ≥ 146 per group (to achieve 80% power)
is recommended."
```

**Acknowledge null results honestly**:
- Don't dismiss them
- Don't reframe them as "almost significant"
- Calculate post-hoc power to explain why result might be null
- Recommend adequately powered replication

---

### 7. Avoid Overclaiming Beyond Data

**Be precise about what data show**:

❌ **Don't claim**: "prove", "demonstrate causality", "clearly show"
✅ **Do claim**: "provide evidence for", "consistent with", "suggest"

❌ **Don't generalize**: "effective for college students"
✅ **Do qualify**: "may be effective for first-year psychology students at [University], as measured by self-report"

❌ **Don't ignore limitations**: [omit confounds]
✅ **Do acknowledge**: "Alternative explanations (e.g., expectancy effects) cannot be ruled out without active control manipulation checks"

**Example revision**:
```
BEFORE: "These findings prove that cognitive reappraisal training is an
         effective intervention for enhancing well-being in college students."

AFTER: "These findings provide preliminary evidence that brief cognitive
        reappraisal training may increase self-reported reappraisal use
        (d = 0.51, small-to-medium effect) in undergraduate psychology
        students. However, effects on life satisfaction were not statistically
        significant (p = .052), and alternative explanations (expectancy,
        attention) were not ruled out. Replication with active control
        conditions, behavioral regulatory outcomes, and diverse samples is
        needed to evaluate training effectiveness and generalizability."
```

---

### 8. Report Assumptions and Diagnostics

**For parametric tests (ANOVA, t-test), report**:
- Normality tests (Shapiro-Wilk): "All groups ps > .05"
- Homogeneity tests (Levene): "F(1,78) = 1.45, p = .23"
- Sphericity tests (Mauchly): "ps > .05, no corrections needed"
- Outlier handling: "3 outliers winsorized to 3 SD"

**Why this matters**:
- Shows you checked if analysis was appropriate
- Transparent about data quality
- Allows reviewers to evaluate robustness

**Example**:
```
Assumption Testing. Shapiro-Wilk tests confirmed normality for all variables
in both groups at both timepoints (all ps > .05). Levene's tests confirmed
homogeneity of variance for reappraisal (F(1,78) = 1.45, p = .23) and life
satisfaction (F(1,78) = 0.89, p = .35). Mauchly's test confirmed sphericity
(all ps > .05), so no Greenhouse-Geisser corrections were needed. Three
outliers (>3 SD from group mean) were winsorized; sensitivity analyses
showed results were unchanged with outlier exclusion.
```

---

### 9. Evaluate Practical Significance

**Statistical significance ≠ Practical significance**

**For each significant finding, address**:
- **Effect size magnitude**: Small (d=0.2), medium (d=0.5), or large (d=0.8)?
- **Minimal Important Difference (MID)**: Does effect exceed clinically meaningful threshold?
- **Comparison to prior studies**: How does effect compare to meta-analytic estimates?
- **Real-world impact**: What does a 0.6-point increase on a 7-point scale mean for daily life?

**Example**:
```
The training group showed a medium increase in self-reported reappraisal use
(d = 0.51). However, the absolute change (0.6 points on a 7-point scale)
represents only 8.6% of the scale range. Whether this magnitude of change
translates to improved emotion regulation in daily life is unclear without
behavioral or physiological validation. Comparison to previous reappraisal
training studies (meta-analytic d = 0.65; Smith et al., 2020) suggests our
effect is slightly smaller, possibly due to our brief single-session format
versus multi-session protocols in prior work.
```

---

### 10. Acknowledge Limitations Proactively

**Don't wait for Discussion** - address limitations in Results when relevant

**Examples**:
- **Self-report limitation**: "These findings are based on self-reported reappraisal beliefs (ERQ), not behavioral or physiological indicators of regulatory success."
- **Null result**: "The non-significant effect for life satisfaction (p = .052) may reflect insufficient power (post-hoc power = 52%) or weak training effects on global well-being."
- **Exploratory finding**: "The age-reappraisal correlation was exploratory and may reflect Type I error; replication is needed."
- **Missing data**: "Two participants did not complete post-assessment (97.5% retention), limiting conclusions about training effects in these cases."

**Benefits**:
- Shows awareness of study limitations
- Prevents reviewers from identifying problems you didn't acknowledge
- Demonstrates scientific humility and rigor

---

## Practice Exercise

### Your Turn: Bulletproof YOUR Results Section

**Step 1**: Read your current Results section

**Step 2**: Use Template 4.1 (Bulletproofing Audit) to identify Top 10 rejection reasons

**Step 3**: For each problem, write "Before → After" fix

**Example Process**:

```
My Rejection Reason #8 (Statistical Issues): Effect sizes missing

BEFORE: "The ANOVA showed a significant main effect of condition, F(2,57) = 5.23, p = .008."

AFTER: "The ANOVA showed a significant main effect of condition, F(2,57) = 5.23,
        p = .008, η²_p = .16 (large effect). Post-hoc pairwise comparisons
        (Bonferroni-corrected α = .017): Condition A (M = 15.2, SD = 3.1) differed
        significantly from Condition B (M = 12.1, SD = 2.8), d = 1.05, 95% CI
        [0.52, 1.58], p = .003, but not from Condition C (M = 14.0, SD = 3.3),
        d = 0.38, 95% CI [-0.12, 0.88], p = .18."

Rejection Reason Addressed: ✅ Effect sizes (η²_p, d), ✅ 95% CIs, ✅ Descriptives (M, SD),
                            ✅ Multiple comparison correction (Bonferroni)
```

**Goal**: Eliminate all 5 Results-specific rejection reasons (#6-10)

---

## Self-Check Questions

Before claiming your Results section is "bulletproof," ask:

1. ❓ **Effect Sizes**: Did I report standardized effect sizes (η²_p, d, r) for EVERY statistical test?
   - If NO → Add effect sizes with conventional thresholds and interpretations

2. ❓ **Confidence Intervals**: Did I report 95% CIs for all means, mean differences, and effect sizes?
   - If NO → Calculate and report CIs to quantify uncertainty

3. ❓ **Descriptive Statistics**: Did I report M, SD (or SE), and n for EVERY condition and timepoint?
   - If NO → Create a table with complete descriptives

4. ❓ **Overclaiming**: Did I avoid "prove", "demonstrate", and causal language beyond what data support?
   - If NO → Replace with "provide evidence for", "consistent with", "suggest"

5. ❓ **p-value Interpretation**: Did I avoid "marginally significant" or "trend" for p > .05?
   - If NO → Treat p > .05 as null results, discuss low power or need for replication

6. ❓ **Multiple Comparisons**: Did I address family-wise error rate if I conducted >1 test?
   - If NO → Apply correction (Bonferroni, FDR) or justify no correction (a priori primary tests)

7. ❓ **Visualizations**: Did I include tables and figures to summarize key findings?
   - If NO → Create Table 1 (descriptives) and Figure 1 (interaction/main effects)

8. ❓ **Practical Significance**: Did I discuss whether effect sizes are large enough to matter practically?
   - If NO → Compare to MID thresholds, meta-analytic estimates, real-world benchmarks

9. ❓ **Assumptions**: Did I report results of assumption tests (normality, homogeneity, sphericity)?
   - If NO → Add assumption testing results and corrections applied

10. ❓ **Transparency**: Did I report ALL analyses conducted (not just significant ones)?
    - If NO → Add non-significant results or state "all results reported" to avoid file-drawer suspicion

**If you answer NO to any question → Your Results section needs revision using Example 4.4 as a template**

---

## Related Materials

**Templates**:
- `template_4.1_bulletproofing_audit_canvas.md`: AI-assisted audit identifying Top 10 rejection reasons
- `template_4.2_red_team_blue_team.md`: Game for practicing statistical rigor defense
- `template_4.4_peer_review_rubric.md`: Comprehensive peer review for bulletproofing

**Examples**:
- `example_4.1_bad_methods.md`: Methods reproducibility gaps (6/30 score)
- `example_4.2_good_methods.md`: Complete Methods (30/30 score)
- `example_4.4_good_results.md`: Bulletproofed Results with all best practices (coming next)
- `example_4.5_red_team_blue_team_case.md`: Example game battle showing attacks and defenses

**Lecture Notes**:
- `week4/lecture_notes.md`: Complete bulletproofing strategies (lines 282-422: Results section)

**Recipes**:
- Recipe #38: Overclaiming Detector (identify claims stronger than data support)
- Recipe #39: Statistical Rigor Auditor (check effect sizes, CIs, assumptions)
- Recipe #40: Transparency Checker (verify all analyses reported)

---

**Example Version**: 1.0
**Last Updated**: 2025-01-09
**Use**: Week 4 workshop - Model for identifying and fixing critical Results section problems that lead to rejection

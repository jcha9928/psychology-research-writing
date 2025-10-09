# Example 5.3: 3-Pass Revision Case Study

> **목적**: Example 5.1의 논문을 3-Pass Revision 전략(Macro → Meso → Micro)으로 체계적으로 개선하는 과정을 보여줍니다. 각 Pass에서 발견된 문제와 해결 방법을 구체적으로 제시하여, 학생들이 자신의 논문에 동일한 전략을 적용할 수 있도록 합니다.

---

## 📌 사용 맥락

**Workshop Activity 3-5** (25분)에서 사용:
- Activity 3 (10min): 1st Pass (Macro) - 구조 및 논리 점검
- Activity 4 (10min): 2nd Pass (Meso) - 섹션 및 단락 점검
- Activity 5 (5min): 3rd Pass (Micro) - 문장 및 단어 점검

**학생 활동**:
1. Example 5.1의 원본 논문을 3-Pass로 점검
2. 각 Pass에서 이 Case Study의 문제 발견 패턴 학습
3. AI 프롬프트를 사용하여 자신의 논문 개선
4. Before→After 변화를 비교 분석

**Figma 사용**: 없음 (개인 작업 + 페어 토론)

---

## 1st Pass (Macro): 구조 및 논리 점검

### AI 프롬프트 사용

**학생이 사용한 프롬프트**:
```
You are a structural editor for Nature/Science, evaluating overall logic and coherence.

PAPER SECTIONS (paste these):
- Title: "Mindfulness-Based Stress Reduction Reduces Anxiety in College Students: A Randomized Controlled Trial"
- Abstract (last sentence): "These results suggest MBSR can be an effective intervention for reducing anxiety symptoms in college students."
- Introduction (research question/hypothesis): "We hypothesized that an 8-week MBSR program would significantly reduce anxiety symptoms in college students compared to a waitlist control group, and that this effect would be mediated by increased mindfulness skills."
- Methods (1-sentence summary): "We conducted a randomized controlled trial (N=80) comparing MBSR to waitlist control with pre/post anxiety and mindfulness measures."
- Results (1-sentence summary of main finding): "MBSR group showed significantly greater reduction in anxiety (d=0.72) and increase in mindfulness (d=0.68) compared to control."
- Discussion (conclusion paragraph): "In conclusion, our findings provide preliminary evidence that MBSR can be an effective approach for addressing anxiety in college students. However, several limitations should be noted..."

TASK: Evaluate the paper's structural coherence.

1. MESSAGE CONSISTENCY (1-10):
   Do these sections tell ONE consistent story?
   Score: /10
   Issues: ___

2. LOGICAL FLOW (1-10):
   Does Introduction set up Methods, Methods produce Results, Results inform Discussion?
   Score: /10
   Issues: ___

3. GAP-METHOD-RESULT ALIGNMENT (1-10):
   Does the Gap get addressed by the Method and answered by Results?
   Score: /10
   Issues: ___

4. SECTION BALANCE:
   Are sections appropriately proportioned?
   Current: Introduction 43%, Methods 18%, Results 21%, Discussion 18%
   Score: /10
   Issues: ___

5. COHERENCE AS "ONE STORY" (1-10):
   Does the paper read as one unified narrative?
   Score: /10
   Issues: ___

OVERALL MACRO SCORE: /50
CRITICAL ISSUES: (List 3-5 structural problems requiring immediate attention)
```

---

### AI 응답 (Macro-Level Analysis)

#### EVALUATION SCORES:

**1. MESSAGE CONSISTENCY: 6/10**

**Issues**:
- **Title says "Reduces"** (definitive, causal claim) → Too strong for RCT with waitlist control
- **Abstract says "can be effective"** (hedged, suggestive) → Message weakened
- **Discussion conclusion** hedges even more: "preliminary evidence", "can be", "limitations should be noted"
- **Progressive weakening**: Title (strong) → Abstract (moderate) → Discussion (weak)
- **Inconsistent tone**: Reads like the authors lost confidence as they wrote

**Should be**: Pick ONE consistent message level throughout
- Option A (Conservative): "MBSR *associated with* reduced anxiety" (Title, Abstract, Discussion all match)
- Option B (Confident): "MBSR *reduces* anxiety" (Title, Abstract, Discussion all assert causality with caveats)

---

**2. LOGICAL FLOW: 7/10**

**Issues**:
- **Introduction → Methods mismatch**:
  - Introduction suggests mechanistic investigation ("mediated by mindfulness skills")
  - Methods only tests effectiveness (simple pre/post comparison)
  - Missing: Process analysis, dose-response, mechanism exploration
- **Methods → Results works well**: Clean execution of stated design
- **Results → Discussion gap**:
  - Results report statistical significance (p < .001, d=0.72)
  - Discussion jumps to "preliminary evidence" without explaining why (limitation discussion comes too late)

**Should be**:
- Align Introduction with Methods: Either add mechanistic analysis OR simplify Introduction to effectiveness-only claim
- Discussion should first celebrate the strength (large effect size, significant results) THEN discuss limitations

---

**3. GAP-METHOD-RESULT ALIGNMENT: 5/10**

**Critical Issues**:
- **Introduction Gap**: "Limited research on MBSR for *college students specifically*"
  - This is population substitution (incremental gap)
  - NOT a conceptual/mechanistic gap
- **Methods**: Addresses this gap (college students tested)
- **Results**: Confirms effectiveness in college students
- **Problem**: The Gap is too weak for top-tier journals
  - Testing "Does MBSR work in college students?" = incremental
  - Should test: "WHY does MBSR work? What mechanism? Under what conditions?"

**Gap-Method-Result Triangle**:
```
Current (Misaligned):
Gap: "Need data on college students" → Method: RCT in college students → Result: Works in college students
└─> Incremental, predictable

Should be (Aligned):
Gap: "Unknown mechanism of MBSR effects" → Method: RCT + mediation + dose-response → Result: Mindfulness mediates effect
└─> Conceptual, advances theory
```

---

**4. SECTION BALANCE: 4/10**

**Current proportions** (from Example 5.1):
- Introduction: 43% (3,440 words / 8,000 total)
- Methods: 18% (1,440 words)
- Results: 21% (1,680 words)
- Discussion: 18% (1,440 words)

**Issues**:
- **Inverted pyramid problem**:
  - Introduction is LARGEST section (should be 25-30%)
  - Results is TOO SMALL (should be 30-35% for empirical paper)
  - Methods adequate (20-25% is fine)
  - Discussion adequate (20-25% is fine)
- **Psychological Science guideline**: Introduction ≈ Discussion, Methods + Results should be LARGEST

**Should be**:
```
Introduction: 25% (2,000 words) - Cut literature review redundancy
Methods: 22% (1,760 words) - Add reproducibility details
Results: 33% (2,640 words) - Expand exploratory analyses, effect sizes, CIs
Discussion: 20% (1,600 words) - Current length is fine
```

---

**5. COHERENCE AS "ONE STORY": 6/10**

**Issues**:
- **Multiple story lines competing**:
  - Story A (Title): "MBSR reduces anxiety" → Causal claim
  - Story B (Introduction): "MBSR works through mindfulness mechanism" → Mechanistic claim
  - Story C (Methods): "MBSR vs control in college students" → Effectiveness claim
  - Story D (Discussion): "MBSR might be helpful but has limitations" → Suggestive claim
- **Reader confusion**: What IS the main point?
  - Is this a causal claim? (Title says yes, Discussion says no)
  - Is this a mechanistic paper? (Introduction says yes, Results don't test it properly)
  - Is this an effectiveness trial? (Methods say yes, but Gap is too weak)

**Should be**: Pick ONE story and tell it consistently
- **Option 1 (Mechanistic)**: "We tested whether mindfulness skills mediate MBSR's anxiety-reducing effects in college students"
  - Requires: Mediation analysis, process measures, mechanism discussion
- **Option 2 (Effectiveness)**: "We tested whether MBSR reduces anxiety in college students with high stress"
  - Requires: Conservative title, focus on practical implications, clear population scope

---

#### OVERALL MACRO SCORE: 28/50 (56%)

**Interpretation**: Structural coherence is **WEAK**. The paper has significant logical inconsistencies that must be resolved before Meso/Micro revisions.

---

### CRITICAL ISSUES (Top 5 Macro Problems)

#### 🚨 **Critical Issue #1: Message Drift (Title → Abstract → Discussion)**

**Problem**:
- Title: "MBSR **Reduces** Anxiety" (causal, definitive)
- Abstract: "MBSR **can be effective**" (suggestive, hedged)
- Discussion: "**preliminary evidence**" (very weak claim)

**Why this matters**:
- **Reviewers notice immediately**: Inconsistent confidence signals uncertainty
- **Readers confused**: What should I believe?
- **Citation impact reduced**: Weak conclusion = fewer citations

**Solution**:
```
OPTION A (Conservative, recommended for this study):
- Title: "Mindfulness-Based Stress Reduction *Associated with* Reduced Anxiety..."
- Abstract: "These results *suggest* MBSR *is associated with* reduced anxiety..."
- Discussion: "Our findings *demonstrate* that MBSR *is associated with* significant anxiety reduction..."

OPTION B (Confident, requires stronger design):
- Title: "Mindfulness-Based Stress Reduction *Reduces* Anxiety..." (keep current)
- Abstract: "MBSR *significantly reduced* anxiety symptoms..." (strengthen)
- Discussion: "Our findings *demonstrate* that MBSR *reduces* anxiety..." (strengthen)
- Note: Requires active control group to justify causal claims
```

**Action**: Decide which message level is appropriate for the study design, then unify all sections.

---

#### 🚨 **Critical Issue #2: Gap-Method Mismatch**

**Problem**:
- **Introduction suggests** mechanistic investigation:
  - "...mediated by increased mindfulness skills"
  - "...underlying mechanisms remain unclear"
  - Sets up expectation for process analysis
- **Methods only tests** effectiveness:
  - Simple pre/post comparison (MBSR vs control)
  - Mediation mentioned but not primary focus
  - No dose-response, no mechanism manipulation

**Why this matters**:
- **Reviewer 2 (Theoretical)** gave 4.2/10 for this exact reason
- **Overpromise, underdeliver**: Readers expect mechanistic insights, get effectiveness data only
- **Missed opportunity**: Could have investigated mechanism properly

**Solution**:
```
OPTION A (Align Methods to Introduction - add mechanism):
- Add formal mediation analysis (Hayes PROCESS macro)
- Report indirect effects, confidence intervals
- Add exploratory analysis: mindfulness change → anxiety change correlation
- Discuss mechanism in Results and Discussion

OPTION B (Align Introduction to Methods - simplify claims):
- Remove mechanistic language from Introduction
- Focus on effectiveness: "Limited evidence for MBSR in college students"
- Acknowledge mechanism as future direction, not current study aim
- Simplify Research Question to effectiveness only
```

**Action**: Either strengthen Methods (Option A) or simplify Introduction (Option B). Current mismatch is unacceptable.

---

#### 🚨 **Critical Issue #3: Incremental Gap (Population Substitution)**

**Problem**:
- **Current Gap**: "MBSR has been studied in clinical populations, but limited research on college students"
- **Gap Type**: Incremental (population substitution without theoretical justification)
- **Why this is weak**:
  - Testing "Does X work in population Y?" without new theory
  - Predictable answer: "Yes, probably works similarly"
  - No advance in understanding

**Why this matters**:
- **Reviewer 2** identified this as "insufficient novelty for top-tier journal"
- **Nature/Science/Psychological Science** require conceptual advances, not population tests
- **Re-targeting necessary**: This gap fits mid-tier journals (PLOS ONE, Frontiers), not top-tier

**Solution**:
```
OPTION A (Strengthen Gap to Conceptual):
- Argue that college students are QUALITATIVELY DIFFERENT from clinical populations
  - Different stressor types (academic vs. chronic illness)
  - Different developmental stage (emerging adulthood)
  - Different mechanisms (performance anxiety vs. generalized anxiety)
- Add theoretical framework: Why might MBSR work DIFFERENTLY in college students?
- Requires: Moderation analysis (e.g., does academic stress moderate MBSR effects?)

OPTION B (Accept Incremental Gap, re-target journal):
- Keep current Gap
- Re-target to mid-tier applied journals:
  - Journal of American College Health
  - Anxiety, Stress, & Coping
  - Mindfulness
- These journals value population-specific data
- Higher acceptance probability, faster publication
```

**Action**: Either strengthen Gap theoretically (Option A, requires significant re-analysis) OR accept incremental nature and re-target journal (Option B, recommended).

---

#### 🚨 **Critical Issue #4: Inverted Pyramid (Section Balance)**

**Problem**:
```
Current:
Introduction: 43% (TOO LONG)
Methods: 18% (adequate)
Results: 21% (TOO SHORT)
Discussion: 18% (adequate)
```

**Why this matters**:
- **Empirical papers** should have largest Results section (30-35%)
- **Top-heavy Introduction** signals:
  - Excessive literature review
  - Defensive gap justification (because gap is weak)
  - Insufficient focus on data
- **Reviewers notice**: "More review than research"

**Solution**:
```
Target proportions:
Introduction: 25% (2,000 words) - CUT 1,440 words
  - Remove redundant literature review
  - Simplify gap justification
  - Focus on 1-2 key theories only

Methods: 22% (1,760 words) - ADD 320 words
  - Add reproducibility details (alpha values, compliance tracking)
  - Add power analysis justification

Results: 33% (2,640 words) - ADD 960 words
  - Add exploratory analyses
  - Add effect size confidence intervals
  - Add subgroup analyses (e.g., high vs low baseline anxiety)

Discussion: 20% (1,600 words) - ADD 160 words
  - Current length adequate
```

**Action**: Redistribute content to emphasize Results over Introduction.

---

#### 🚨 **Critical Issue #5: Inconsistent "One Story" Narrative**

**Problem**:
- **Four competing storylines**:
  1. Causal effectiveness (Title)
  2. Mechanistic understanding (Introduction)
  3. Population-specific testing (Methods)
  4. Preliminary suggestive evidence (Discussion)
- **Reader confusion**: "What IS the main claim?"

**Why this matters**:
- **Reviewers see lack of focus**: "The authors don't seem to know what they're claiming"
- **Citation impact**: Ambiguous conclusions get cited less
- **Journal fit**: Unclear story makes it hard to target appropriate journal

**Solution**:
```
Pick ONE story and tell it consistently:

STORY A (Mechanistic - for top-tier journals):
- Title: "Mindfulness Skills Mediate the Anxiety-Reducing Effects of MBSR in College Students"
- Introduction: Focus on mechanism, not population
- Methods: Emphasize mediation analysis
- Results: Lead with indirect effects
- Discussion: Theoretical implications of mechanism
- Requires: Strengthening mediation analysis

STORY B (Effectiveness - for mid-tier journals):
- Title: "MBSR Associated with Reduced Anxiety in College Students: An RCT"
- Introduction: Focus on practical need for college interventions
- Methods: Standard RCT description
- Results: Standard outcome analysis
- Discussion: Practical implications for college counseling
- Requires: Simplifying Introduction, re-targeting journal

STORY C (Population Heterogeneity - if you have moderation data):
- Title: "MBSR Effects on Anxiety Vary by Academic Stress Level in College Students"
- Introduction: Focus on for whom MBSR works
- Methods: Include moderation analysis
- Results: Lead with interaction effects
- Discussion: Personalized intervention implications
- Requires: Adding moderation analysis (if data allows)
```

**Action**: Choose ONE story (recommend Story B for this dataset), then revise all sections for consistency.

---

### Macro-Level Revision Plan

**Priority 1 (Critical - Must Fix)**:
1. **Unify message consistency**: Choose conservative or confident tone, apply throughout
2. **Resolve Gap-Method mismatch**: Align Introduction with Methods (simplify Introduction recommended)
3. **Address incremental gap**: Accept and re-target journal (recommended) OR strengthen gap theoretically

**Priority 2 (Important - Should Fix)**:
4. **Rebalance sections**: Cut Introduction to 25%, expand Results to 33%
5. **Pick one story**: Choose Story B (Effectiveness) and revise for consistency

**Expected Outcome**:
- Macro Score improvement: 28/50 → 42/50 (84%)
- Structural coherence acceptable for submission
- Ready for Meso-Level revision

**Estimated Time**: 4-6 hours of revision

---

## 2nd Pass (Meso): 섹션 및 단락 점검

### AI 프롬프트 사용

**학생이 사용한 프롬프트**:
```
You are a section-level editor for Nature/Science, evaluating paragraph coherence and flow.

TASK: Evaluate these sections for paragraph-level quality.

INTRODUCTION (3 paragraphs):

[Paragraph 1]
"Anxiety disorders are among the most prevalent mental health conditions affecting college students, with recent estimates suggesting that up to 40% of students experience clinically significant anxiety symptoms (Pedrelli et al., 2015). The transition to college involves numerous stressors, including academic pressures, social adjustments, and increased independence, all of which can contribute to elevated anxiety levels (Beiter et al., 2015). Traditional treatment approaches, such as cognitive-behavioral therapy (CBT) and pharmacotherapy, have shown efficacy in reducing anxiety symptoms (Bandelow et al., 2015), but barriers such as stigma, cost, and limited access to mental health services often prevent students from seeking help (Eisenberg et al., 2011). Consequently, there is a growing need for accessible, evidence-based interventions that can be implemented in college settings."

[Paragraph 2]
"Mindfulness-Based Stress Reduction (MBSR) is an 8-week group intervention that combines mindfulness meditation, body awareness, and yoga to reduce stress and improve well-being (Kabat-Zinn, 1990). The program typically involves weekly 2.5-hour sessions and daily home practice of mindfulness exercises. Mindfulness is defined as the practice of paying attention to the present moment with an attitude of openness, curiosity, and acceptance (Kabat-Zinn, 2003). Research has shown that MBSR is effective in reducing anxiety symptoms across various populations, including patients with generalized anxiety disorder (Hofmann et al., 2010), cancer patients (Carlson & Garland, 2005), and individuals with chronic pain (Kabat-Zinn et al., 1985). Meta-analyses have reported medium to large effect sizes for MBSR interventions on anxiety outcomes (Hofmann et al., 2010; Khoury et al., 2015)."

[Paragraph 3]
"While MBSR has demonstrated efficacy in clinical populations, limited research has examined its effectiveness specifically in college students. College students represent a unique population with distinct stressors and developmental challenges that may influence treatment response. Furthermore, the mechanisms underlying MBSR's anxiety-reducing effects remain unclear. Some researchers have suggested that increases in mindfulness skills, such as present-moment awareness and non-judgmental acceptance, may mediate the relationship between MBSR participation and anxiety reduction (Gu et al., 2015; van der Velden et al., 2015). However, few studies have directly tested this mediation hypothesis in college samples. The present study aimed to address these gaps by conducting a randomized controlled trial (RCT) to evaluate the effectiveness of MBSR in reducing anxiety symptoms among college students and to examine whether changes in mindfulness skills mediate this effect. We hypothesized that an 8-week MBSR program would significantly reduce anxiety symptoms in college students compared to a waitlist control group, and that this effect would be mediated by increased mindfulness skills."

EVALUATION CRITERIA:

For each paragraph:
1. PARAGRAPH UNITY (1-10):
   - Does the paragraph have ONE clear topic?
   - Do all sentences support that topic?
   - Score: /10
   - Issues: ___

2. TOPIC SENTENCE CLARITY (1-10):
   - Is the first sentence a clear topic sentence?
   - Does it forecast the paragraph content?
   - Score: /10
   - Issues: ___

3. OLD→NEW INFORMATION FLOW (1-10):
   - Does each sentence build on the previous one?
   - Is there a clear progression?
   - Score: /10
   - Issues: ___

4. PARAGRAPH LENGTH & FOCUS:
   - Is the paragraph appropriately sized (5-8 sentences)?
   - Too long = needs splitting
   - Too short = needs development
   - Score: /10
   - Issues: ___

OVERALL MESO SCORE: /120 (3 paragraphs × 4 criteria × 10 points)
```

---

### AI 응답 (Meso-Level Analysis of Introduction)

#### **Paragraph 1 Evaluation**

**1. PARAGRAPH UNITY: 4/10**

**Issues**:
- **Doing THREE jobs in one paragraph**:
  1. Establishing prevalence (sentence 1)
  2. Describing college-specific stressors (sentence 2)
  3. Discussing treatment barriers (sentences 3-4)
- **Should be split**:
  - Paragraph 1A: Prevalence + severity
  - Paragraph 1B: Treatment options + barriers

**Fix**:
```
BEFORE (4 sentences doing 3 jobs):
"Anxiety disorders are among the most prevalent... barriers... prevent students from seeking help."

AFTER (Split into 2 paragraphs):

Paragraph 1A (Prevalence & Impact):
"Anxiety disorders are among the most prevalent mental health conditions affecting college students, with recent estimates suggesting that up to 40% of students experience clinically significant anxiety symptoms (Pedrelli et al., 2015). The transition to college involves numerous stressors, including academic pressures, social adjustments, and increased independence, all of which can contribute to elevated anxiety levels (Beiter et al., 2015). These anxiety symptoms can significantly impair academic performance, social functioning, and overall quality of life (Eisenberg et al., 2009)."

Paragraph 1B (Treatment Options & Barriers):
"Traditional treatment approaches, such as cognitive-behavioral therapy (CBT) and pharmacotherapy, have shown efficacy in reducing anxiety symptoms (Bandelow et al., 2015). However, barriers such as stigma, cost, and limited access to mental health services often prevent students from seeking help (Eisenberg et al., 2011). Consequently, there is a growing need for accessible, evidence-based interventions that can be implemented in college settings."
```

---

**2. TOPIC SENTENCE CLARITY: 7/10**

**Strength**:
- First sentence IS a topic sentence
- Clearly introduces main topic (anxiety in college students)

**Weakness**:
- **Too specific too soon**: Jumps to prevalence statistics immediately
- **Better approach**: Start with broader statement, then narrow to specifics

**Fix**:
```
BEFORE:
"Anxiety disorders are among the most prevalent mental health conditions affecting college students, with recent estimates suggesting that up to 40%..."

AFTER:
"Anxiety represents a major public health concern on college campuses nationwide. Recent estimates suggest that up to 40% of college students experience clinically significant anxiety symptoms (Pedrelli et al., 2015), making anxiety disorders among the most prevalent mental health conditions in this population."

Why better:
- Starts broad ("major public health concern")
- Narrows to specifics (40% prevalence)
- Old→New flow: "Anxiety" (Old) → "40% prevalence" (New)
```

---

**3. OLD→NEW INFORMATION FLOW: 6/10**

**Issues**:
- **Sentence 2-3 connection is rough**:
  ```
  S2: "The transition to college involves numerous stressors..."
  S3: "Traditional treatment approaches, such as CBT..."
  ```
  - JUMP from stressors to treatments without transition
  - Missing link: "These stressors contribute to high anxiety rates"

**Fix**:
```
BEFORE (Rough transition):
S2: "The transition to college involves numerous stressors, including academic pressures, social adjustments, and increased independence, all of which can contribute to elevated anxiety levels (Beiter et al., 2015)."
S3: "Traditional treatment approaches, such as cognitive-behavioral therapy (CBT)..."

AFTER (Smooth transition):
S2: "The transition to college involves numerous stressors, including academic pressures, social adjustments, and increased independence, all of which can contribute to elevated anxiety levels (Beiter et al., 2015)."
S2b (NEW): "Given the high prevalence and significant impact of anxiety in this population, effective interventions are critically needed."
S3: "Traditional treatment approaches, such as cognitive-behavioral therapy (CBT)..."

Why better:
- S2 ends with "elevated anxiety"
- S2b picks up "anxiety" (Old) and introduces "interventions" (New)
- S3 picks up "interventions" (Old) and introduces "CBT" (New)
```

---

**4. PARAGRAPH LENGTH & FOCUS: 5/10**

**Issues**:
- **4 sentences**: Appropriate length
- **BUT doing 3 jobs**: Prevalence + Stressors + Treatment barriers
- **Should be 2 paragraphs**

**Fix**: Already shown in PARAGRAPH UNITY fix above (split into 1A and 1B)

---

**Paragraph 1 Score: 22/40 (55%)** → Needs splitting and smoother transitions

---

#### **Paragraph 2 Evaluation**

**1. PARAGRAPH UNITY: 8/10**

**Strength**:
- **ONE clear topic**: MBSR definition and evidence
- All sentences support this topic

**Minor issue**:
- Sentence 5 (meta-analyses) feels like start of new idea
- Could be moved to new paragraph about "strength of evidence"

**Currently acceptable** but could be optimized by splitting

---

**2. TOPIC SENTENCE CLARITY: 9/10**

**Strength**:
- Excellent topic sentence: "Mindfulness-Based Stress Reduction (MBSR) is an 8-week group intervention..."
- Clearly introduces MBSR (main topic)
- Forecasts paragraph content (definition → evidence)

**Very minor improvement possible**:
```
BEFORE:
"Mindfulness-Based Stress Reduction (MBSR) is an 8-week group intervention that combines mindfulness meditation, body awareness, and yoga to reduce stress and improve well-being (Kabat-Zinn, 1990)."

AFTER (slightly broader opening):
"Mindfulness-based interventions have emerged as promising approaches for anxiety reduction. One widely studied program, Mindfulness-Based Stress Reduction (MBSR), is an 8-week group intervention that combines mindfulness meditation, body awareness, and yoga (Kabat-Zinn, 1990)."

Why better:
- Connects to previous paragraph topic (interventions)
- Old→New: "interventions" (from P1) → "MBSR" (New)
```

---

**3. OLD→NEW INFORMATION FLOW: 9/10**

**Strength**:
- Excellent progression:
  1. Define MBSR (New)
  2. Describe format (builds on MBSR)
  3. Define mindfulness (component of MBSR)
  4. Evidence in populations (MBSR effectiveness)
  5. Meta-analyses (strength of evidence)
- Each sentence builds logically on previous

**Only minor improvement**: Connect sentence 3 better
```
BEFORE:
S2: "The program typically involves weekly 2.5-hour sessions and daily home practice of mindfulness exercises."
S3: "Mindfulness is defined as the practice of paying attention to the present moment..."

AFTER:
S2: "The program typically involves weekly 2.5-hour sessions and daily home practice of mindfulness exercises."
S2b (NEW): "Central to MBSR is the cultivation of mindfulness, defined as the practice of paying attention to the present moment with an attitude of openness, curiosity, and acceptance (Kabat-Zinn, 2003)."

Why better:
- Explicitly links "mindfulness exercises" (S2) to "mindfulness definition" (S3)
```

---

**4. PARAGRAPH LENGTH & FOCUS: 8/10**

**Strength**:
- 5 sentences: Appropriate length
- Focused on MBSR definition and evidence

**Minor issue**:
- Could split into 2 paragraphs:
  - P2A: MBSR definition and format (sentences 1-3)
  - P2B: MBSR effectiveness evidence (sentences 4-5)
- Current version acceptable but slightly dense

---

**Paragraph 2 Score: 34/40 (85%)** → Generally strong, minor optimizations possible

---

#### **Paragraph 3 Evaluation**

**1. PARAGRAPH UNITY: 3/10**

**Major Issues**:
- **Doing FOUR jobs in one paragraph**:
  1. Identifying gap (limited college research)
  2. Justifying uniqueness of college students
  3. Discussing mechanisms
  4. Stating research aims and hypotheses
- **Should be split into 3 paragraphs**:
  - P3A: Gap (limited college research)
  - P3B: Mechanisms (mediation hypothesis)
  - P3C: Research aims and hypotheses

**Fix**:
```
BEFORE (1 paragraph, 6 sentences, 4 topics):
"While MBSR has demonstrated efficacy... mediated by increased mindfulness skills."

AFTER (3 paragraphs):

Paragraph 3A (Gap - College Students):
"While MBSR has demonstrated efficacy in clinical populations, limited research has examined its effectiveness specifically in college students. College students represent a unique population with distinct stressors and developmental challenges that may influence treatment response. Understanding MBSR's effectiveness in this population is therefore critical for developing evidence-based campus mental health interventions."

Paragraph 3B (Mechanism Gap):
"Furthermore, the mechanisms underlying MBSR's anxiety-reducing effects remain unclear. Some researchers have suggested that increases in mindfulness skills, such as present-moment awareness and non-judgmental acceptance, may mediate the relationship between MBSR participation and anxiety reduction (Gu et al., 2015; van der Velden et al., 2015). However, few studies have directly tested this mediation hypothesis in college samples."

Paragraph 3C (Research Aims):
"The present study aimed to address these gaps by conducting a randomized controlled trial (RCT) to evaluate the effectiveness of MBSR in reducing anxiety symptoms among college students and to examine whether changes in mindfulness skills mediate this effect. We hypothesized that an 8-week MBSR program would significantly reduce anxiety symptoms in college students compared to a waitlist control group, and that this effect would be mediated by increased mindfulness skills."

Why better:
- Each paragraph has ONE topic
- Logical progression: Gap A → Gap B → How we address both
- Easier to read and understand
```

---

**2. TOPIC SENTENCE CLARITY: 5/10**

**Issues**:
- **Current first sentence**: "While MBSR has demonstrated efficacy in clinical populations, limited research has examined its effectiveness specifically in college students."
- **This is a good topic sentence** for Gap A (college students)
- **BUT paragraph also covers**:
  - Gap B (mechanisms)
  - Research aims
  - Hypotheses
- **Topic sentence doesn't forecast** the full paragraph content

**Fix** (shown in split above):
- P3A topic sentence: "While MBSR has demonstrated efficacy in clinical populations..."
- P3B topic sentence: "Furthermore, the mechanisms underlying MBSR's anxiety-reducing effects remain unclear."
- P3C topic sentence: "The present study aimed to address these gaps..."

Each topic sentence now forecasts its paragraph content.

---

**3. OLD→NEW INFORMATION FLOW: 4/10**

**Issues**:
- **Sentence 3-4 transition is ROUGH**:
  ```
  S3: "Furthermore, the mechanisms underlying MBSR's anxiety-reducing effects remain unclear."
  S4: "Some researchers have suggested that increases in mindfulness skills..."
  ```
  - JUMP from "mechanisms unclear" to "mediation hypothesis"
  - Missing transition: "One proposed mechanism is..."

**Fix**:
```
BEFORE:
S3: "Furthermore, the mechanisms underlying MBSR's anxiety-reducing effects remain unclear."
S4: "Some researchers have suggested that increases in mindfulness skills, such as present-moment awareness and non-judgmental acceptance, may mediate..."

AFTER:
S3: "Furthermore, the mechanisms underlying MBSR's anxiety-reducing effects remain unclear."
S3b (NEW): "One proposed mechanism is that MBSR works by enhancing mindfulness skills, which in turn reduce anxiety."
S4: "Specifically, some researchers have suggested that increases in mindfulness skills, such as present-moment awareness and non-judgmental acceptance, mediate the relationship between MBSR participation and anxiety reduction (Gu et al., 2015; van der Velden et al., 2015)."

Why better:
- S3 ends with "mechanisms unclear" (Old)
- S3b introduces "mindfulness skills as mechanism" (New)
- S4 elaborates on "mindfulness skills" (Old from S3b)
```

---

**4. PARAGRAPH LENGTH & FOCUS: 2/10**

**Major Issues**:
- **6 sentences doing 4 jobs**: WAY too much
- **Violates "one paragraph, one idea" principle**
- **Reader cognitive overload**: Too many concepts in one paragraph

**Fix**: Split into 3 paragraphs as shown above

---

**Paragraph 3 Score: 14/40 (35%)** → Needs major restructuring (split into 3 paragraphs)

---

### MESO-LEVEL ANALYSIS SUMMARY (Introduction)

#### Overall Introduction Meso Score: 70/120 (58%)

**Interpretation**: Meso-level quality is **WEAK**. Significant paragraph-level restructuring needed.

---

### CRITICAL ISSUES (Top 5 Meso Problems)

#### 🚨 **Meso Issue #1: Paragraph 1 Doing 3 Jobs (Split Required)**

**Problem**:
- Prevalence + Stressors + Treatment barriers in ONE paragraph
- Violates "one paragraph, one idea" principle

**Fix**: Split into Paragraph 1A (Prevalence) + Paragraph 1B (Treatment barriers)
**Priority**: Critical
**Time**: 30 minutes

---

#### 🚨 **Meso Issue #2: Paragraph 3 Doing 4 Jobs (Split Required)**

**Problem**:
- College gap + Mechanism gap + Research aims + Hypotheses in ONE paragraph
- Most severe paragraph unity violation
- 6 sentences, 4 topics = cognitive overload

**Fix**: Split into Paragraph 3A (College gap) + Paragraph 3B (Mechanism gap) + Paragraph 3C (Research aims)
**Priority**: Critical
**Time**: 45 minutes

---

#### 🚨 **Meso Issue #3: Rough Transitions (Old→New Flow Violations)**

**Problem**:
- P1: S2→S3 jump (stressors → treatments, missing link)
- P3: S3→S4 jump (mechanisms unclear → mediation hypothesis, missing "One proposed mechanism...")

**Fix**: Add transitional sentences to bridge Old→New gaps
**Priority**: Important
**Time**: 20 minutes

---

#### 🚨 **Meso Issue #4: Methods Section Reproducibility Gaps**

**Problem** (from separate Methods evaluation):
- Missing: Cronbach's alpha values for measures
- Missing: Home practice compliance tracking
- Missing: Attrition reasons
- Missing: Randomization method details

**Fix**: Add missing methodological details
**Priority**: Critical (affects Reviewer 1 score)
**Time**: 1 hour

---

#### 🚨 **Meso Issue #5: Results Section Overclaiming**

**Problem** (from separate Results evaluation):
- "MBSR **reduced** anxiety" → Too causal for waitlist control design
- "Mindfulness skills **mediated** the effect" → Mediation not properly tested (missing temporal precedence, no sensitivity analysis)

**Fix**: Use conservative language:
- "MBSR **was associated with** reduced anxiety"
- "Mindfulness changes **were associated with** anxiety changes, **consistent with a mediational pathway**"

**Priority**: Critical (affects credibility)
**Time**: 45 minutes

---

### Meso-Level Revision Plan

**Priority 1 (Critical - Must Fix)**:
1. Split Paragraph 1 into 2 paragraphs (30 min)
2. Split Paragraph 3 into 3 paragraphs (45 min)
3. Add reproducibility details to Methods (1 hour)
4. Fix overclaiming language in Results (45 min)

**Priority 2 (Important - Should Fix)**:
5. Add transitional sentences for Old→New flow (20 min)
6. Optimize Paragraph 2 (minor) (15 min)

**Expected Outcome**:
- Meso Score improvement: 70/120 → 100/120 (83%)
- Paragraph-level coherence acceptable
- Ready for Micro-Level revision

**Estimated Time**: 3-4 hours

---

## 3rd Pass (Micro): 문장 및 단어 점검

### AI 프롬프트 사용

**학생이 사용한 프롬프트**:
```
You are a sentence-level editor for Nature/Science, evaluating clarity and precision.

TASK: Evaluate these sentences for micro-level quality.

SAMPLE SENTENCES (from Abstract and Discussion):

[Abstract - Sentence 3]
"The effectiveness of such interventions may depend on increased mindfulness skills, though this mediation pathway has not been well-established."

[Abstract - Sentence 7]
"These results suggest MBSR can be an effective intervention for reducing anxiety symptoms in college students."

[Discussion - Sentence 4]
"The investigation of the effectiveness of MBSR in this population is therefore of considerable importance."

[Discussion - Sentence 9]
"Our findings provide preliminary evidence that participation in an 8-week MBSR program can lead to reductions in anxiety symptoms and increases in mindfulness skills."

[Results - Sentence 2]
"The MBSR group, when compared to the waitlist control group at post-intervention, showed significantly greater reduction in anxiety symptoms."

EVALUATION CRITERIA:

For each sentence:

1. HEDGING DENSITY (1-10):
   - Count hedging words: "may", "might", "can", "could", "suggest", "appear", "seem", "preliminary", "possible"
   - 0-1 hedges = acceptable (9-10/10)
   - 2 hedges = borderline (6-8/10)
   - 3+ hedges = excessive (1-5/10)
   - Score: /10
   - Hedges found: ___
   - Fix: ___

2. NOMINALIZATION (1-10):
   - Find nominalized verbs: "-tion", "-ment", "-ance", "-ence", "-ness"
   - Convert to active verbs
   - Score: /10 (10 = no nominalizations, 1 = heavy)
   - Nominalizations found: ___
   - Fix: ___

3. SUBJECT-VERB DISTANCE (1-10):
   - Count words between subject and verb
   - ≤5 words = excellent (10/10)
   - 6-10 words = acceptable (6-9/10)
   - >10 words = too far (1-5/10)
   - Score: /10
   - Distance: ___ words
   - Fix: ___

4. CLARITY & CONCISENESS (1-10):
   - Remove unnecessary words
   - Simplify complex phrasing
   - Score: /10
   - Wordiness issues: ___
   - Fix: ___

OVERALL MICRO SCORE: /200 (5 sentences × 4 criteria × 10 points)
BEFORE → AFTER for each sentence
```

---

### AI 응답 (Micro-Level Analysis)

#### **Sentence 1 (Abstract)**: "The effectiveness of such interventions may depend on increased mindfulness skills, though this mediation pathway has not been well-established."

**1. HEDGING DENSITY: 3/10**

**Hedges found**:
- "may depend" (hedge 1)
- "has not been well-established" (hedge 2)

**Problem**: **TWO hedges** in one sentence = excessive uncertainty
- First hedge: "may depend" (uncertainty about relationship)
- Second hedge: "not well-established" (uncertainty about evidence)
- **Cumulative effect**: Reader thinks "The authors don't know if this is true"

**Fix**:
```
BEFORE (2 hedges):
"The effectiveness of such interventions may depend on increased mindfulness skills, though this mediation pathway has not been well-established."

AFTER (0 hedges):
"Some evidence suggests mindfulness skills mediate intervention effectiveness, but direct tests of this pathway remain limited."

Why better:
- Removed "may" (hedge 1)
- Removed "not well-established" (hedge 2)
- Replaced with factual statement: "direct tests remain limited" (statement of fact, not hedge)
- Shorter: 17 words → 15 words
```

**Score after fix**: 9/10

---

**2. NOMINALIZATION: 4/10**

**Nominalizations found**:
- "effectiveness" (nominalized from "effective")
- "interventions" (nominalized from "intervene")
- "mediation" (nominalized from "mediate")

**Problem**: **THREE nominalizations** in 15 words = very noun-heavy
- Makes sentence static and abstract
- Hides the actors and actions

**Fix**:
```
BEFORE (3 nominalizations):
"The effectiveness of such interventions may depend on increased mindfulness skills, though this mediation pathway has not been well-established."

AFTER (0 nominalizations):
"Some evidence suggests mindfulness skills mediate how effectively interventions reduce anxiety, but direct tests of this pathway remain limited."

Why better:
- "effectiveness" → "how effectively... reduce" (verb form)
- "mediation" → "mediate" (verb)
- "interventions" → kept (acceptable as subject)
- More dynamic: Actions are now verbs
```

**Score after fix**: 9/10

---

**3. SUBJECT-VERB DISTANCE: 8/10**

**Analysis**:
- Subject: "effectiveness"
- Verb: "may depend"
- Distance: 3 words ("of such interventions")
- **Acceptable** (≤5 words)

**No fix needed** (distance is fine)

---

**4. CLARITY & CONCISENESS: 5/10**

**Wordiness issues**:
- "The effectiveness of such interventions" = 5 words for simple concept
- "has not been well-established" = 5 words for "remains unclear"

**Fix**:
```
BEFORE (17 words):
"The effectiveness of such interventions may depend on increased mindfulness skills, though this mediation pathway has not been well-established."

AFTER (15 words):
"Some evidence suggests mindfulness skills mediate intervention effectiveness, but direct tests of this pathway remain limited."

Reduction: 17 → 15 words (12% shorter)
```

**Score after fix**: 9/10

---

**Sentence 1 Final Score**:
- Before: 20/40 (50%)
- After: 35/40 (88%)
- Improvement: +38%

---

#### **Sentence 2 (Abstract)**: "These results suggest MBSR can be an effective intervention for reducing anxiety symptoms in college students."

**1. HEDGING DENSITY: 5/10**

**Hedges found**:
- "suggest" (hedge 1)
- "can be" (hedge 2)

**Problem**: **TWO hedges** = double uncertainty
- "suggest" implies weak evidence
- "can be" implies conditionality
- Combined: "We weakly found that MBSR might work sometimes"

**Fix**:
```
BEFORE (2 hedges):
"These results suggest MBSR can be an effective intervention for reducing anxiety symptoms in college students."

AFTER (0 hedges):
"These results demonstrate that MBSR reduces anxiety symptoms in college students."

Why better:
- "suggest" → "demonstrate" (stronger, appropriate for p<.001, d=0.72)
- "can be an effective intervention for reducing" → "reduces" (direct, active verb)
- Shorter: 16 words → 11 words (31% reduction)
```

**Score after fix**: 10/10

---

**2. NOMINALIZATION: 6/10**

**Nominalizations found**:
- "intervention" (nominalized from "intervene")
- "reducing" (gerund, borderline nominalization)

**Fix**:
```
BEFORE:
"...MBSR can be an effective intervention for reducing anxiety symptoms..."

AFTER:
"...MBSR reduces anxiety symptoms..."

Why better:
- "intervention for reducing" → "reduces" (verb)
- Removed two nominalizations
```

**Score after fix**: 10/10

---

**3. SUBJECT-VERB DISTANCE: 9/10**

**Analysis**:
- Subject: "results"
- Verb: "suggest"
- Distance: 1 word ("These")
- **Excellent**

**No fix needed**

---

**4. CLARITY & CONCISENESS: 4/10**

**Wordiness issues**:
- "can be an effective intervention for reducing" = 7 words for "reduces"
- This is the classic "to be + nominalization" pattern Williams warns against

**Fix** (already shown):
```
BEFORE (16 words):
"These results suggest MBSR can be an effective intervention for reducing anxiety symptoms in college students."

AFTER (11 words):
"These results demonstrate that MBSR reduces anxiety symptoms in college students."

Reduction: 16 → 11 words (31% shorter)
```

**Score after fix**: 10/10

---

**Sentence 2 Final Score**:
- Before: 24/40 (60%)
- After: 39/40 (98%)
- Improvement: +38%

---

#### **Sentence 3 (Discussion)**: "The investigation of the effectiveness of MBSR in this population is therefore of considerable importance."

**1. HEDGING DENSITY: 8/10**

**Hedges found**: None (surprisingly)

**No fix needed** (but other problems are severe)

---

**2. NOMINALIZATION: 1/10**

**Nominalizations found**:
- "investigation" (nominalized from "investigate")
- "effectiveness" (nominalized from "effective")
- "importance" (nominalized from "important")

**Problem**: **THREE nominalizations in 13 words** = 23% of words are -tion/-ness
- This is EXTREME nominalization density
- Sentence has no real action
- Classic "zombie noun" pattern

**Fix**:
```
BEFORE (3 nominalizations):
"The investigation of the effectiveness of MBSR in this population is therefore of considerable importance."

AFTER (0 nominalizations):
"Investigating whether MBSR effectively reduces anxiety in college students is therefore important."

OR (even better - show WHY it's important):
"Understanding MBSR's effectiveness is important because it could inform college mental health services."

Why better:
- "investigation" → "investigating" (gerund as subject, more active)
- "effectiveness" → "effectively reduces" (verb phrase)
- "importance" → "important" (adjective)
- Added context (WHY important)
- Shorter: 16 words → 13 words
```

**Score after fix**: 9/10

---

**3. SUBJECT-VERB DISTANCE: 4/10**

**Analysis**:
- Subject: "investigation"
- Verb: "is"
- Distance: **10 words** ("of the effectiveness of MBSR in this population")
- **Borderline unacceptable** (limit is 10 words)

**Fix** (from nominalization fix):
```
AFTER:
"Investigating whether MBSR effectively reduces anxiety in college students is therefore important."

New distance:
- Subject: "Investigating... students" (gerund phrase)
- Verb: "is"
- Distance: 9 words (acceptable)
```

**Score after fix**: 7/10

---

**4. CLARITY & CONCISENESS: 2/10**

**Wordiness issues**:
- "The investigation of" = 3 words for "Investigating"
- "the effectiveness of" = 3 words for "whether... effectively"
- "is... of considerable importance" = 4 words for "is important"
- **Total waste**: 10 words that could be 3 words

**Fix**:
```
BEFORE (16 words with extreme redundancy):
"The investigation of the effectiveness of MBSR in this population is therefore of considerable importance."

AFTER (13 words):
"Understanding MBSR's effectiveness is important because it could inform college mental health services."

Reduction: 16 → 13 words (19% shorter)
PLUS: Added meaningful content (WHY important)
```

**Score after fix**: 9/10

---

**Sentence 3 Final Score**:
- Before: 15/40 (38%) ← **Worst sentence**
- After: 33/40 (83%)
- Improvement: +45%

---

#### **Sentence 4 (Discussion)**: "Our findings provide preliminary evidence that participation in an 8-week MBSR program can lead to reductions in anxiety symptoms and increases in mindfulness skills."

**1. HEDGING DENSITY: 4/10**

**Hedges found**:
- "preliminary" (hedge 1)
- "evidence" (borderline hedge - signals uncertainty)
- "can lead to" (hedge 2)

**Problem**: **TWO clear hedges** + "evidence" = triple uncertainty
- "preliminary" signals "not final, not confident"
- "can lead to" signals "might, possibly"
- Combined: "We think maybe this might work but we're not sure"

**Fix**:
```
BEFORE (2-3 hedges):
"Our findings provide preliminary evidence that participation in an 8-week MBSR program can lead to reductions in anxiety symptoms and increases in mindfulness skills."

AFTER (0 hedges):
"Our findings demonstrate that an 8-week MBSR program reduces anxiety symptoms and increases mindfulness skills."

Why better:
- "preliminary evidence" → "demonstrate" (appropriate for significant results)
- "can lead to" → present tense (direct claim)
- "participation in" → removed (unnecessary)
- "reductions in" → "reduces" (verb)
- Shorter: 26 words → 15 words (42% reduction!)
```

**Score after fix**: 10/10

---

**2. NOMINALIZATION: 3/10**

**Nominalizations found**:
- "participation" (nominalized from "participate")
- "reductions" (nominalized from "reduce")
- "increases" (nominalized from "increase")

**Problem**: **THREE nominalizations** making sentence noun-heavy

**Fix** (from hedging fix):
```
BEFORE:
"...participation in an 8-week MBSR program can lead to reductions in anxiety symptoms and increases in mindfulness skills."

AFTER:
"...an 8-week MBSR program reduces anxiety symptoms and increases mindfulness skills."

Why better:
- "participation in... can lead to reductions" → "reduces" (single verb)
- "increases in" → "increases" (verb)
- Eliminated all three nominalizations
```

**Score after fix**: 10/10

---

**3. SUBJECT-VERB DISTANCE: 6/10**

**Analysis**:
- Subject: "findings"
- Verb: "provide"
- Distance: 1 word ("Our")
- **Excellent** (subject-verb distance is fine)

**BUT** subordinate clause has problem:
- Subject: "participation"
- Verb: "can lead"
- Distance: **7 words** ("in an 8-week MBSR program")
- Acceptable but not ideal

**Fix** (from nominalization fix):
```
AFTER:
Subject: "program"
Verb: "reduces"
Distance: 2 words ("8-week MBSR")
Better!
```

**Score after fix**: 9/10

---

**4. CLARITY & CONCISENESS: 3/10**

**Wordiness issues**:
- "provide preliminary evidence that" = 4 words for "demonstrate that"
- "participation in" = 2 words (unnecessary)
- "can lead to reductions in" = 5 words for "reduces"
- "increases in" = 2 words for "increases"
- **Total**: 13 wasted words out of 26 = 50% waste!

**Fix**:
```
BEFORE (26 words, 50% waste):
"Our findings provide preliminary evidence that participation in an 8-week MBSR program can lead to reductions in anxiety symptoms and increases in mindfulness skills."

AFTER (15 words, <10% waste):
"Our findings demonstrate that an 8-week MBSR program reduces anxiety symptoms and increases mindfulness skills."

Reduction: 26 → 15 words (42% shorter)
```

**Score after fix**: 10/10

---

**Sentence 4 Final Score**:
- Before: 16/40 (40%)
- After: 39/40 (98%)
- Improvement: +58% ← **Biggest improvement**

---

#### **Sentence 5 (Results)**: "The MBSR group, when compared to the waitlist control group at post-intervention, showed significantly greater reduction in anxiety symptoms."

**1. HEDGING DENSITY: 10/10**

**Hedges found**: None

**Excellent** (no fix needed)

---

**2. NOMINALIZATION: 5/10**

**Nominalizations found**:
- "reduction" (nominalized from "reduce")

**Fix**:
```
BEFORE:
"...showed significantly greater reduction in anxiety symptoms."

AFTER:
"...reduced anxiety symptoms significantly more than controls."

Why better:
- "showed... reduction in" → "reduced" (verb)
- "significantly greater" → "significantly more" (clearer)
```

**Score after fix**: 9/10

---

**3. SUBJECT-VERB DISTANCE: 3/10**

**Analysis**:
- Subject: "group" (MBSR group)
- Verb: "showed"
- Distance: **13 words** ("when compared to the waitlist control group at post-intervention")
- **UNACCEPTABLE** (>10 word limit)

**Problem**: Long interrupting phrase separates subject from verb

**Fix**:
```
BEFORE (13-word distance):
"The MBSR group, when compared to the waitlist control group at post-intervention, showed significantly greater reduction in anxiety symptoms."

AFTER (2-word distance):
"At post-intervention, the MBSR group reduced anxiety symptoms significantly more than the waitlist control group."

Why better:
- Moved time phrase to beginning
- Subject "group" immediately followed by verb "reduced"
- Distance: 2 words (excellent)
```

**Score after fix**: 10/10

---

**4. CLARITY & CONCISENESS: 5/10**

**Wordiness issues**:
- "when compared to" = 3 words for "than" (or can be removed with restructuring)
- "showed significantly greater reduction in" = 5 words for "reduced... significantly more"
- "at post-intervention" = 2 words, but placement is awkward

**Fix**:
```
BEFORE (21 words):
"The MBSR group, when compared to the waitlist control group at post-intervention, showed significantly greater reduction in anxiety symptoms."

AFTER (18 words):
"At post-intervention, the MBSR group reduced anxiety symptoms significantly more than the waitlist control group."

Reduction: 21 → 18 words (14% shorter)
```

**Score after fix**: 8/10

---

**Sentence 5 Final Score**:
- Before: 23/40 (58%)
- After: 37/40 (93%)
- Improvement: +35%

---

### MICRO-LEVEL ANALYSIS SUMMARY

#### Overall Micro Score (5 sentences):

| Sentence | Before Score | After Score | Improvement |
|----------|--------------|-------------|-------------|
| S1 (Abstract) | 20/40 (50%) | 35/40 (88%) | +38% |
| S2 (Abstract) | 24/40 (60%) | 39/40 (98%) | +38% |
| S3 (Discussion) | 15/40 (38%) | 33/40 (83%) | +45% |
| S4 (Discussion) | 16/40 (40%) | 39/40 (98%) | +58% |
| S5 (Results) | 23/40 (58%) | 37/40 (93%) | +35% |
| **TOTAL** | **98/200 (49%)** | **183/200 (92%)** | **+43%** |

**Interpretation**: Micro-level quality improved from **WEAK (49%)** to **STRONG (92%)** through systematic sentence-level revision.

---

### Common Micro-Level Patterns (Lessons Learned)

#### **Pattern 1: Double/Triple Hedging**
- **Problem**: "Results *suggest* MBSR *can be* effective" (2 hedges)
- **Fix**: Choose ONE hedge or remove all: "Results *demonstrate* MBSR effectiveness"
- **Rule**: Max 1 hedge per sentence

#### **Pattern 2: Nominalization Chains**
- **Problem**: "The *investigation* of the *effectiveness* of MBSR" (2 nominalizations in sequence)
- **Fix**: Convert to verbs: "*Investigating* whether MBSR *works*"
- **Rule**: Max 1 nominalization per sentence

#### **Pattern 3: Subject-Verb Interruption**
- **Problem**: "The MBSR group, [13 words], showed..." (subject-verb distance = 13)
- **Fix**: Move interrupting phrase: "At post-intervention, the MBSR group showed..." (distance = 2)
- **Rule**: Keep subject and verb within 5-10 words

#### **Pattern 4: "To Be" + Nominalization Bloat**
- **Problem**: "MBSR *can be* an effective *intervention* for *reducing*..." (11 words)
- **Fix**: Use direct verb: "MBSR *reduces*..." (2 words)
- **Rule**: Replace "be + nominalization" with verb

#### **Pattern 5: Filler Phrases**
- **Common fillers**: "provide evidence that", "it is important to note", "it has been shown that"
- **Fix**: Delete: "Evidence shows that" → "We found"
- **Rule**: Delete all filler phrases

---

### Micro-Level Revision Plan

**Priority 1 (Critical - Entire Paper)**:
1. **Hedge Audit** (30 min):
   - Find all hedging words (Ctrl+F: "may", "might", "can", "could", "suggest", "preliminary")
   - Reduce to max 1 hedge per sentence
   - Replace weak hedges with stronger verbs when data supports it

2. **Nominalization Hunt** (45 min):
   - Find all -tion, -ment, -ness, -ance, -ence words
   - Convert to verbs where possible
   - Aim for <2 nominalizations per sentence

3. **Subject-Verb Distance Check** (30 min):
   - Identify sentences where subject and verb are >10 words apart
   - Restructure to bring them closer (<5 words ideal)

4. **Wordiness Reduction** (1 hour):
   - Remove filler phrases
   - Replace "to be + nominalization" with verbs
   - Target 20-30% word count reduction

**Priority 2 (Important - Specific Sections)**:
5. **APA 7th Edition Compliance** (45 min):
   - Fix in-text citations (check "and" vs "&")
   - Add missing DOIs to references
   - Check alphabetical order

6. **Grammar/Spelling Final Check** (30 min):
   - Use Grammarly or similar tool
   - Check subject-verb agreement
   - Check tense consistency

**Expected Outcome**:
- Micro Score improvement: 98/200 → 180/200 (90%)
- Sentence-level clarity excellent
- Paper ready for submission

**Estimated Time**: 3-4 hours

---

## Final Summary: 3-Pass Revision Impact

### Score Improvements by Pass

| Pass Level | Before Score | After Score | Improvement | Priority |
|------------|--------------|-------------|-------------|----------|
| **1st Pass (Macro)** | 28/50 (56%) | 42/50 (84%) | +28% | CRITICAL |
| **2nd Pass (Meso)** | 70/120 (58%) | 100/120 (83%) | +25% | IMPORTANT |
| **3rd Pass (Micro)** | 98/200 (49%) | 183/200 (92%) | +43% | IMPORTANT |
| **TOTAL** | **196/370 (53%)** | **325/370 (88%)** | **+35%** | - |

---

### Hierarchical Revision Logic

**Why this order matters**:

1. **Macro first** (구조):
   - Fix big problems (message drift, gap-method mismatch, section balance)
   - No point polishing sentences if entire structure is wrong
   - 35% of total issues found at Macro level

2. **Meso second** (단락):
   - Fix paragraph unity and transitions
   - Sentence-level edits don't help if paragraphs are incoherent
   - 30% of total issues found at Meso level

3. **Micro last** (문장):
   - Polish individual sentences
   - Only after structure and paragraphs are solid
   - 35% of total issues found at Micro level
   - **Highest improvement rate** (+43%) because specific, actionable fixes

**Total revision time**: 10-14 hours (spread across 2-3 days)

**Outcome**: Paper improved from **Reject/Major Revision** (53%) to **Minor Revision/Accept** (88%)

---

## 학습 포인트

### 학생들이 배워야 할 것

1. **체계적 점검의 위력**:
   - 한 번에 모든 걸 점검하려 하면 → 놓치는 게 많음
   - 3-Pass로 나누면 → 체계적, 효율적

2. **큰 것부터 고쳐야**:
   - Macro 문제 (gap-method mismatch) 해결 전에 문장 다듬기 = 시간 낭비
   - 구조 → 단락 → 문장 순서 엄수

3. **AI 프롬프트 활용**:
   - 각 Pass마다 특화된 프롬프트 사용
   - 구체적 평가 기준 제시 (1-10 scale)
   - Before → After 예시 요청

4. **수치화된 개선**:
   - 53% → 88% (+35%) 개선 가능
   - 각 Pass의 기여도 측정 가능
   - 우선순위 설정에 도움

5. **시간 투자 대비 효과**:
   - Macro: 4-6시간 투자 → +28% 개선
   - Meso: 3-4시간 투자 → +25% 개선
   - Micro: 3-4시간 투자 → +43% 개선
   - **총 10-14시간으로 Reject → Accept 가능**

---

## Workshop에서 활용 방법

**Activity 3-5** (25분) 동안:

1. **학생 개인 작업** (15분):
   - 자신의 논문을 AI로 3-Pass 점검
   - 각 Pass 결과를 Template 5.2에 기록
   - Critical issues 우선순위 설정

2. **페어 토론** (7분):
   - 2명씩 짝지어 서로의 3-Pass 결과 비교
   - "너는 Macro에서 X 문제 발견했구나, 나도 비슷해"
   - 서로의 우선순위에 동의하는지 피드백

3. **전체 공유** (3분):
   - 가장 common한 Macro/Meso/Micro 문제 3가지
   - 효과적이었던 AI 프롬프트 공유
   - 수정 계획 간략히 발표

**Instructor 역할**:
- 학생들의 3-Pass 결과 모니터링
- Common patterns 실시간 정리
- 모범 사례 (좋은 AI 프롬프트, 효과적 수정) 공유
- 다음 단계 (Peer Review) 안내

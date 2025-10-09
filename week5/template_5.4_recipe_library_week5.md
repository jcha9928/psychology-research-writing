# Week 5 - Template 5.4: Recipe Library (Cumulative Best Practices)

**Workshop Duration**: Ongoing accumulation throughout semester
**Objective**: Curate and share successful AI prompt recipes for final paper polishing
**Canvas Size**: 3840×2160px (Figma collaborative canvas)

---

## Canvas Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ LEFT PANEL (800×2160px) - RECIPE ORGANIZATION SYSTEM                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ 📚 WEEK 2 RECIPES - Nature/Science Abstract Writing (10 recipes)           │
│ 🔍 WEEK 3 RECIPES - Gap Discovery & Validation (10 recipes)                │
│ 🛡️ WEEK 4 RECIPES - Methods/Results Bulletproofing (6 recipes)            │
│ ✨ WEEK 5 RECIPES - AI Reviewer Simulation & 3-Pass Revision (15 recipes)  │
│                                                                              │
│ [Recipe rating system: ⭐⭐⭐⭐⭐]                                          │
│ [Use case tags: #diagnostic #revision #polishing]                           │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ RIGHT PANEL (3040×2160px) - RECIPE CARDS & STUDENT CONTRIBUTIONS          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  NEW RECIPE SUBMISSION ZONE (3040×600px)                                    │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │ Students submit recipes that worked well for them                  │    │
│  │ Template: Name, Use Case, Prompt, Results, Rating                  │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  CURATED RECIPE LIBRARY (3040×1560px, scrollable)                           │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │ WEEK 5 TOP RECIPES (sorted by rating)                              │    │
│  │ • Recipe #41: Macro-Level Story Coherence Checker (5.0★)           │    │
│  │ • Recipe #42: Paragraph Old→New Flow Analyzer (4.8★)               │    │
│  │ • Recipe #43: Nominalization Hunter (4.7★)                          │    │
│  │ [Each recipe: Name, Prompt, Example, Rating, Who submitted]        │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Purpose of Recipe Library

### Why Cumulative Collection?

**Knowledge Sharing Culture**:
- ✅ **Collective wisdom** - students learn from each other's successful strategies
- ✅ **Accelerated learning** - don't reinvent the wheel, use proven recipes
- ✅ **Quality calibration** - see what "works" based on peer ratings
- ✅ **Personalization** - adapt recipes to individual writing style

**Beyond Individual Discovery**:
- ❌ Each student discovers prompts alone → slow, inefficient
- ✅ Class shares discoveries → exponential learning

**Cumulative Advantage**:
- Week 2: 10 recipes (Abstract writing)
- Week 3: +10 recipes (Gap discovery) → 20 total
- Week 4: +6 recipes (Bulletproofing) → 26 total
- Week 5: +15 recipes (Revision) → **41 total recipes**
- Week 6: +10 recipes (Proposal writing) → **51 total recipes**

By semester end, students have **51 battle-tested recipes** for all aspects of scientific writing.

---

## Recipe Card Template

Each recipe includes:

```markdown
═══════════════════════════════════════════════════════════════════════
📋 RECIPE #__ : [Recipe Name]
═══════════════════════════════════════════════════════════════════════

🎯 USE CASE:
[What specific problem does this solve? When should you use it?]

📝 PROMPT:
```
[Full AI prompt template that students can copy-paste]
```

💡 WHY IT WORKS:
[Explanation of the strategy - why does this prompt get good results?]

📊 EXAMPLE RESULTS:
[Before/After comparison showing the improvement]

⭐ RATING: ___/5
[Based on peer voting: How useful was this recipe?]

👤 CONTRIBUTED BY: [Student ID or "Class consensus"]
[Recognition for students who share effective recipes]

🏷️ TAGS: [#diagnostic / #structural / #paragraph / #sentence / #polishing]
[Helps students find recipes by category]

═══════════════════════════════════════════════════════════════════════
```

---

## Week 5 Recipe Collection (15 Recipes)

### 🔭 MACRO-LEVEL RECIPES (Structural Revision)

---

#### Recipe #41: Story Coherence Checker

**USE CASE**: After completing full draft, check if paper tells "one coherent story" from Title to Conclusion

**PROMPT**:
```
You are a structural editor for Nature/Science, evaluating narrative coherence.

I will provide key sections of my paper. Assess whether they tell ONE consistent story.

PAPER SECTIONS:
- Title: [paste title]
- Abstract conclusion (last sentence): [paste]
- Introduction research question: [paste]
- Methods summary (1 sentence): [paste]
- Results main finding (1 sentence): [paste]
- Discussion conclusion paragraph: [paste]

TASK:
1. STORY COHERENCE (1-10):
   Do these sections tell one unified story, or do they seem like different papers?
   - If Title promises X, does Discussion deliver X?
   - If Introduction asks Q, do Results answer Q?
   Score: /10
   Issues: ___

2. MESSAGE DRIFT ANALYSIS:
   Summarize the main message from each section (1 sentence each):
   - Title says: ___
   - Abstract says: ___
   - Introduction asks: ___
   - Results find: ___
   - Discussion concludes: ___

   ALIGNMENT CHECK: Do these 5 messages align? [Yes/No]
   If No, identify where the drift occurs: ___

3. RECOMMENDED FIXES:
   To create ONE coherent story, which section(s) should be revised?
   Specific suggestions: ___
```

**WHY IT WORKS**: Forces AI to compare all key sections simultaneously, catching message drift that's hard to see when writing section-by-section

**EXAMPLE RESULTS**:
```
BEFORE:
- Title: "Mindfulness Training Reduces Anxiety in College Students"
- Discussion conclusion: "Results were mixed, suggesting mindfulness may have limited effects. More research is needed."
→ DRIFT: Title claims effect, Discussion hedges

AFTER:
- Revised Title: "Mindfulness and Anxiety Reduction: A Randomized Controlled Trial"
- Revised Discussion: "Mindfulness training produced moderate anxiety reduction (d=0.72), supporting its efficacy in high-stress college populations."
→ ALIGNED: Both present the finding as moderate, positive effect
```

**RATING**: ⭐⭐⭐⭐⭐ (5.0/5)
**CONTRIBUTED BY**: Student_07 (improved overall scores from 6.5/10 to 9/10)
**TAGS**: #diagnostic #structural #coherence

---

#### Recipe #42: Gap-Method-Result Triangle Validator

**USE CASE**: Verify that your Introduction gap, Methods approach, and Results finding are all aligned

**PROMPT**:
```
You are a logic checker for top-tier journals.

I will provide three key elements of my paper. Check if they form a logical triangle.

ELEMENTS:
1. GAP (from Introduction): [paste gap statement, 2-3 sentences]
2. METHOD (approach used): [paste methods summary, 2-3 sentences]
3. RESULT (main finding): [paste results summary, 2-3 sentences]

TASK:
Evaluate the logical consistency:

1. GAP → METHOD ALIGNMENT:
   Does the Method address the Gap identified?
   - If Gap is conceptual (theory/mechanism), is Method designed to test theory?
   - If Gap is methodological, does Method introduce new technique?
   Score: [Perfect match / Good match / Partial mismatch / Major mismatch]
   Explanation: ___

2. METHOD → RESULT ALIGNMENT:
   Can the Method produce the Result claimed?
   - Do Results go beyond what Method can support (overclaiming)?
   - Are Results unexpectedly weak given the Method?
   Score: [Perfectly aligned / Well aligned / Some overclaiming / Major overclaiming]
   Explanation: ___

3. GAP → RESULT CLOSURE:
   Do Results actually fill the Gap identified in Introduction?
   - If Gap was "we don't know X," do Results tell us X?
   - If Gap was "theory A vs B," do Results distinguish them?
   Score: [Gap fully addressed / Partially addressed / Not addressed]
   Explanation: ___

4. OVERALL TRIANGLE:
   GAP → METHOD → RESULT → back to GAP
   Is this a closed loop (logical consistency) or broken chain?

   Visualization:
   GAP ("We don't know X")
    ↓
   METHOD ("We tested X")
    ↓
   RESULT ("We found X is Y")
    ↓
   CLOSURE ("Now we know X is Y, filling the gap")

   Status: [Closed loop / Partially closed / Broken chain]

5. RECOMMENDED FIXES (if not closed loop):
   - Fix Gap statement to match Method/Result? OR
   - Reframe Method to better address Gap? OR
   - Adjust Result claims to match Method capabilities?
   Specific suggestions: ___
```

**WHY IT WORKS**: Catches common mismatch where Introduction identifies conceptual gap but Methods only do population substitution

**EXAMPLE RESULTS**:
```
BEFORE:
Gap: "No theory explains HOW mindfulness reduces anxiety"
Method: "We tested mindfulness in college students (N=80, RCT)"
Result: "Mindfulness reduced anxiety (d=0.72, p<.001)"
→ BROKEN: Gap asks HOW (mechanism), Method/Result just shows THAT it works

AFTER:
Revised Gap: "Mindfulness mechanisms are understudied in high-stress populations"
Revised Method: "We tested mindfulness with mediation analysis (stress-buffering pathway)"
Revised Result: "Mindfulness reduced anxiety via decreased perceived stress (b=0.65, 95% CI [0.12, 1.35])"
→ CLOSED LOOP: Gap → mechanistic test → mediation finding
```

**RATING**: ⭐⭐⭐⭐⭐ (5.0/5)
**CONTRIBUTED BY**: Student_03 (caught gap-method mismatch that reviewers would reject)
**TAGS**: #diagnostic #structural #logic #alignment

---

#### Recipe #43: Section Balance Analyzer

**USE CASE**: Check if sections are appropriately balanced (not 8-page Intro + 2-page Results)

**PROMPT**:
```
You are a structural editor evaluating section proportions.

PAPER INFO:
- Total word count: [e.g., 8000 words]
- Introduction: [e.g., 3000 words, 37.5%]
- Methods: [e.g., 1500 words, 18.75%]
- Results: [e.g., 1200 words, 15%]
- Discussion: [e.g., 2300 words, 28.75%]

TASK:
1. IDEAL PROPORTIONS for empirical papers:
   - Introduction: 20-25%
   - Methods: 20-25%
   - Results: 25-30%
   - Discussion: 25-30%

2. YOUR PROPORTIONS:
   [AI calculates and displays as percentages]

3. IMBALANCE DIAGNOSIS:
   - Which section is too long? ___
   - Which section is too short? ___
   - Severity: [Minor / Moderate / Severe]

4. SPECIFIC RECOMMENDATIONS:
   - Introduction: [Trim by X words / Expand by Y words / OK as is]
   - Methods: [Trim / Expand / OK]
   - Results: [Trim / Expand / OK]
   - Discussion: [Trim / Expand / OK]

5. TRIMMING STRATEGIES (if section too long):
   For [Section], suggest:
   - Which paragraphs are tangential and could be cut?
   - Which details could be moved to Supplementary Materials?
   - Which redundant content could be merged?

6. EXPANSION STRATEGIES (if section too short):
   For [Section], suggest:
   - What critical information is missing?
   - What details would improve reproducibility/clarity?
   - What examples would strengthen the argument?
```

**WHY IT WORKS**: Quantifies imbalance objectively (percentages), provides specific trimming/expansion strategies

**EXAMPLE RESULTS**:
```
BEFORE:
- Introduction: 3500 words (44%) ← TOO LONG
- Methods: 1200 words (15%) ← TOO SHORT
- Results: 1800 words (22%) ← OK
- Discussion: 1500 words (19%) ← TOO SHORT
→ SEVERE IMBALANCE

AFTER (following AI suggestions):
- Introduction: Trimmed 1500 words (cut 2 literature review paragraphs)
- Methods: Added 600 words (expanded Participants, Materials, Procedure)
- Results: Kept as is
- Discussion: Added 700 words (expanded limitations, future directions)
→ NEW PROPORTIONS: 25% / 22% / 22% / 31% = BALANCED
```

**RATING**: ⭐⭐⭐⭐ (4.5/5)
**CONTRIBUTED BY**: Student_11 (fixed "inverted pyramid" structure)
**TAGS**: #structural #balance #proportion

---

### 🔬 MESO-LEVEL RECIPES (Paragraph & Section Revision)

---

#### Recipe #44: Paragraph Unity Checker

**USE CASE**: Check if each paragraph has ONE clear main idea (not multiple jobs)

**PROMPT**:
```
You are a paragraph-level editor evaluating unity and coherence.

PARAGRAPH TO ANALYZE:
[Paste one paragraph]

TASK:
1. MAIN IDEA IDENTIFICATION:
   What is the ONE main idea of this paragraph (1 sentence)?
   Main idea: ___

2. UNITY CHECK:
   Does EVERY sentence support this main idea?
   - List sentences that DO support: [sentence numbers]
   - List sentences that DON'T support (off-topic): [sentence numbers]
   Unity score: ___/5
   - 5 = All sentences support main idea
   - 3 = Most sentences support, some tangents
   - 1 = Multiple ideas mixed, no clear focus

3. JOBS COUNT:
   How many different "jobs" is this paragraph doing?
   - Job 1: ___
   - Job 2: ___ (if applicable)
   - Job 3: ___ (if applicable)
   Jobs count: ___ (ideal = 1)

4. DIAGNOSIS:
   [If Jobs > 1]
   This paragraph is doing [#] jobs and should be split into [#] paragraphs.

   SPLITTING STRATEGY:
   - New Paragraph 1 (Job 1): Sentences [list]
   - New Paragraph 2 (Job 2): Sentences [list]
   - New Paragraph 3 (Job 3): Sentences [list]

5. TOPIC SENTENCE EVALUATION:
   Does the first sentence clearly state the main idea?
   - Yes: Topic sentence is clear
   - No: Topic sentence is missing or unclear

   [If No]
   SUGGESTED TOPIC SENTENCE:
   "___" (insert at beginning of paragraph)

6. REVISED PARAGRAPH(S):
   [Provide split paragraphs with clear topic sentences]
```

**WHY IT WORKS**: Identifies "Frankenstein paragraphs" that try to do too much, provides clear splitting logic

**EXAMPLE RESULTS**:
```
BEFORE (1 paragraph doing 3 jobs):
"Previous research shows mindfulness reduces anxiety (Tang et al., 2015). We used the STAI because it has high reliability. College students face unique stressors compared to clinical populations."
→ JOBS: (1) Literature review, (2) Measure justification, (3) Population rationale

AFTER (split into 3 paragraphs):
P1: "Previous research demonstrates mindfulness reduces anxiety via attention regulation (Tang et al., 2015) and emotion reappraisal (Garland et al., 2017)."

P2: "College students represent a critical test case because they face unique stressors (academic pressure, social transition) that may modulate mindfulness effects."

P3 (moved to Methods): "We measured anxiety using the State-Trait Anxiety Inventory (STAI; Spielberger, 1983), which has high reliability (α=.89) and validity."
```

**RATING**: ⭐⭐⭐⭐⭐ (4.9/5)
**CONTRIBUTED BY**: Student_05 (fixed all paragraph unity issues)
**TAGS**: #paragraph #unity #splitting

---

#### Recipe #45: Old→New Flow Analyzer

**USE CASE**: Check if sentences flow smoothly (old info first → new info last)

**PROMPT**:
```
You are a flow editor evaluating Old→New information structure.

PARAGRAPH TO ANALYZE:
[Paste paragraph with sentences numbered]

1. ___
2. ___
3. ___
4. ___

TASK:
For each adjacent sentence pair, check Old→New flow:

SENTENCE 1→2 TRANSITION:
- Sentence 1 NEW info (what's introduced): ___
- Sentence 2 OLD info (what it starts with): ___
- MATCH? [Yes / No / Partial]
- If No: How to fix? ___

SENTENCE 2→3 TRANSITION:
[Same analysis]

SENTENCE 3→4 TRANSITION:
[Same analysis]

OVERALL FLOW SCORE: ___/5
- 5 = All transitions smooth (old→new maintained)
- 3 = Most transitions OK, some abrupt
- 1 = Choppy, no connection between sentences

VISUAL FLOW MAP:
Sentence 1: Introduces "anxiety reduction" (NEW)
           ↓
Sentence 2: Starts with "This reduction..." (OLD=anxiety reduction) → introduces "mechanism" (NEW)
           ↓
Sentence 3: Starts with "The mechanism..." (OLD=mechanism) → introduces "neural pathway" (NEW)
           ↓
Sentence 4: Starts with "This pathway..." (OLD=neural pathway) → conclusion (NEW)

DIAGNOSIS:
- Smooth chain: [Yes / No]
- Breaks at: [sentence #]
- Recommended fix: ___

REVISED PARAGRAPH (with smooth flow):
[Rewrite sentences to establish Old→New chain]
```

**WHY IT WORKS**: Visualizes the information chain, shows exact points where flow breaks

**EXAMPLE RESULTS**:
```
BEFORE (choppy flow):
1. "Mindfulness training reduced anxiety (d=0.72)." [NEW: anxiety reduction]
2. "Participants completed the STAI at pre-test and post-test." [NEW: STAI - NO CONNECTION]
3. "This reduction was mediated by stress." [OLD: reduction - connects to #1, but #2 interrupted]
→ BREAK: Sentence 2 introduces unrelated info (STAI), disrupting flow

AFTER (smooth flow):
1. "Mindfulness training reduced anxiety (d=0.72)." [NEW: anxiety reduction]
2. "This reduction was mediated by decreased perceived stress." [OLD: reduction, NEW: mediation]
3. "The mediation effect (b=0.65) suggests stress-buffering mechanism." [OLD: mediation, NEW: mechanism]
4. "We measured anxiety using the STAI at pre- and post-test." [Moved STAI info to end]
→ SMOOTH: Each sentence builds on previous
```

**RATING**: ⭐⭐⭐⭐ (4.7/5)
**CONTRIBUTED BY**: Student_09 (transformed choppy paragraphs)
**TAGS**: #paragraph #flow #coherence #old-new

---

#### Recipe #46: Section Transition Checker

**USE CASE**: Ensure smooth transitions between sections (Intro→Methods, Results→Discussion)

**PROMPT**:
```
You are a transition editor for top-tier journals.

SECTION TRANSITION TO ANALYZE:
[Paste last paragraph of Section A + first paragraph of Section B]

Example:
INTRODUCTION (last paragraph):
"___"

METHODS (first paragraph):
"___"

TASK:
1. TRANSITION QUALITY (1-5):
   - 5 = Seamless bridge, reader knows why we're moving to next section
   - 3 = Functional but abrupt
   - 1 = Jarring jump, confusing
   Score: ___

2. BRIDGE ANALYSIS:
   Does the last sentence of Section A connect to first sentence of Section B?
   - Last sentence of [Section A]: "___"
   - First sentence of [Section B]: "___"
   - Connection: [Yes / No / Weak]

3. TRANSITION STRATEGIES (if score <4):
   Option 1: Add bridge sentence at end of Section A
   "___" (signals what's coming next)

   Option 2: Add bridge sentence at start of Section B
   "___" (refers back to Section A, then moves forward)

   Option 3: Revise both (for seamless transition)
   [Show revised last sentence of A + first sentence of B]

4. RECOMMENDED TRANSITION PATTERN:
   [Use one of these]
   - Question→Answer: Intro ends with RQ, Methods starts with "To answer this..."
   - Promise→Delivery: Intro ends with "We tested...", Methods starts with "Specifically, we..."
   - Problem→Solution: Intro ends with "This gap remains," Methods starts with "To address this gap..."
```

**WHY IT WORKS**: Provides 3 specific transition strategies, models effective patterns

**EXAMPLE RESULTS**:
```
BEFORE (abrupt jump):
INTRODUCTION (ending): "Thus, mindfulness mechanisms remain unclear."
METHODS (opening): "Eighty participants were recruited from introductory psychology courses."
→ TRANSITION SCORE: 2/5 (jarring jump from gap to recruitment details)

AFTER (smooth transition):
INTRODUCTION (ending): "Thus, mindfulness mechanisms remain unclear. To address this gap, we tested the stress-buffering hypothesis using mediation analysis in a randomized controlled trial."
METHODS (opening): "Eighty participants were recruited from introductory psychology courses..."
→ TRANSITION SCORE: 5/5 (bridge sentence connects gap to method)
```

**RATING**: ⭐⭐⭐⭐ (4.3/5)
**CONTRIBUTED BY**: Student_12 (improved section transitions)
**TAGS**: #section #transition #flow

---

### 🔍 MICRO-LEVEL RECIPES (Sentence & Word Revision)

---

#### Recipe #47: Nominalization Hunter

**USE CASE**: Find and fix nominalization (actions hidden in nouns instead of verbs)

**PROMPT**:
```
You are a nominalization detective.

SENTENCES TO ANALYZE (paste 10-15 sentences):
1. ___
2. ___
[...]

TASK:
For each sentence, detect nominalization and provide active verb version.

SENTENCE 1: "[paste sentence]"

NOMINALIZATION DETECTION:
- Nominalizations found: [list all -tion, -ment, -ance, -ence words]
  Example: "investigation", "reduction", "examination"

- Are these nominalized verbs? [Yes/No]
  - investigation → investigate (verb)
  - reduction → reduce (verb)
  - examination → examine (verb)

ACTORS HIDDEN:
- Who is doing the action? [identify subject]
  Example: "Investigation of anxiety" → WHO investigated? [researchers]

REVISED VERSION (active verbs):
BEFORE: "Investigation of the effect of mindfulness on anxiety reduction was conducted."
AFTER: "We investigated how mindfulness reduces anxiety."

IMPROVEMENTS:
- Word count: 12 words → 7 words (42% shorter)
- Clarity: Passive nominalization → Active verb
- Subject: Hidden → "We" (clear actor)

[Repeat for all sentences]

SUMMARY:
- Total nominalizations found: ___
- Sentences with 2+ nominalizations (highest priority): [list]
- Average word reduction: ___% (after fixing)
- Top 5 nominalizations to fix:
  1. Sentence #___: "___" → "___"
  2. Sentence #___: "___" → "___"
  3. Sentence #___: "___" → "___"
  4. Sentence #___: "___" → "___"
  5. Sentence #___: "___" → "___"
```

**WHY IT WORKS**: Systematically detects all nominalizations, shows word count reduction (motivating!)

**EXAMPLE RESULTS**:
```
BEFORE (heavy nominalization):
"The investigation of the relationship between mindfulness training and anxiety reduction showed significant improvement in psychological well-being."
→ Nominalizations: investigation, relationship, training, reduction, improvement
→ 17 words

AFTER (active verbs):
"We investigated how mindfulness training reduces anxiety and improves well-being."
→ Verbs: investigated, training (kept), reduces, improves
→ 11 words (35% shorter)
```

**RATING**: ⭐⭐⭐⭐⭐ (4.8/5)
**CONTRIBUTED BY**: Student_02 (reduced word count by 25% across paper)
**TAGS**: #sentence #nominalization #concision #clarity

---

#### Recipe #48: Hedging Audit

**USE CASE**: Find excessive hedging ("may", "might", "some", "often") and decide what's justified

**PROMPT**:
```
You are a hedging auditor for top-tier journals.

SECTION TO ANALYZE (paste Introduction or Discussion):
[paste text]

TASK:
1. HEDGING WORD DETECTION:
   Find all instances of:
   - Modal verbs: may, might, could, would
   - Vague quantifiers: some, many, few, several, often, generally
   - Uncertainty phrases: "it is possible that", "it seems that", "tends to"

   LIST ALL INSTANCES:
   - Sentence location: [quote sentence]
   - Hedging word(s): [highlight]
   - Frequency: [count total]

2. HEDGE JUSTIFICATION:
   For EACH hedge, evaluate:

   HEDGE: "Some research suggests..."
   - Is hedging justified? [Yes / No]
     - YES if: Genuine uncertainty (mixed evidence, correlational data, small sample)
     - NO if: Strong evidence exists (meta-analyses, large RCT, replicated finding)
   - Recommended action: [Keep / Remove / Strengthen]

   HEDGE: "Mindfulness may reduce anxiety"
   - Is hedging justified? [Yes / No]
   - If meta-analysis shows d=0.63 (p<.001, N=20 studies), hedging is UNJUSTIFIED
   - Recommended: "Mindfulness reduces anxiety (d=0.63, Hofmann et al., 2010)"

3. HEDGING DENSITY:
   - Total hedges: ___
   - Hedges per 100 words: ___ (ideal: <3 per 100 words)
   - Verdict: [Acceptable / Excessive hedging / Under-hedged]

4. PRIORITY FIXES (top 5 unjustified hedges):
   1. Sentence: "___"
      BEFORE: "Some research suggests mindfulness may reduce anxiety"
      AFTER: "Three meta-analyses show mindfulness reduces anxiety (d=0.63, Hofmann et al., 2010)"

   2. [repeat for top 5]

5. KEEP vs REMOVE DECISION TREE:
   KEEP hedging when:
   - Evidence is genuinely mixed
   - Single study (not replicated)
   - Correlational design (can't claim causation)
   - Small sample or pilot study

   REMOVE hedging when:
   - Meta-analytic evidence (strong consensus)
   - Large RCT with pre-registration
   - Replicated finding across labs
   - Overwhelming mechanistic evidence
```

**WHY IT WORKS**: Distinguishes justified vs unjustified hedging, provides decision tree for each case

**EXAMPLE RESULTS**:
```
BEFORE (excessive hedging):
"Some research suggests that mindfulness training may often lead to possible reductions in anxiety symptoms in certain populations."
→ Hedges: some, may, often, possible, certain (5 in one sentence!)

AFTER (evidence-based confidence):
"Three meta-analyses show mindfulness training reduces anxiety (d=0.63, Hofmann et al., 2010)."
→ Hedges: 0 (strong evidence justifies confident claim)

JUSTIFIED HEDGE (kept):
"Mindfulness may reduce anxiety via attention regulation, though the mechanism requires further investigation."
→ Hedge justified: mechanism is genuinely uncertain (not yet established)
```

**RATING**: ⭐⭐⭐⭐ (4.6/5)
**CONTRIBUTED BY**: Student_06 (strengthened claims appropriately)
**TAGS**: #sentence #hedging #confidence #clarity

---

#### Recipe #49: Subject-Verb Distance Reducer

**USE CASE**: Fix sentences where subject and verb are >10 words apart (hard to parse)

**PROMPT**:
```
You are a sentence structure editor.

SENTENCES TO ANALYZE (paste 10-15 long sentences):
1. ___
2. ___
[...]

TASK:
For each sentence, measure subject-verb distance and fix if >10 words.

SENTENCE: "[paste sentence]"

1. IDENTIFY CORE:
   - Subject: [identify main noun/pronoun]
   - Main verb: [identify action]
   - Words between subject-verb: ___ words

2. DIAGNOSIS:
   - If ≤10 words: OK
   - If 11-15 words: Moderate problem
   - If 16-20 words: Serious problem
   - If >20 words: Very serious problem

3. INTERRUPTION TYPE:
   What's interrupting subject-verb connection?
   - [ ] Relative clause ("who...", "which...")
   - [ ] Prepositional phrases ("of...", "in...", "with...")
   - [ ] Parenthetical info ("including...", "such as...")
   - [ ] Modifiers (adjectives, adverbs)

4. FIX STRATEGY:
   Choose one:
   - Option A: Split into 2 sentences
   - Option B: Move modifiers AFTER verb
   - Option C: Replace relative clause with simpler structure

   BEFORE: "Participants, who were recruited from introductory psychology courses and who completed informed consent forms and who passed eligibility screening, received training."
   → Subject: Participants, Verb: received, Distance: 18 words

   AFTER (Option A - Split):
   "Participants received training. They were recruited from introductory psychology courses, completed informed consent, and passed eligibility screening."
   → Subject-verb distance: 1 word

   AFTER (Option B - Move modifiers):
   "Participants received training after completing informed consent and passing eligibility screening. They were recruited from introductory psychology courses."
   → Subject-verb distance: 1 word

5. IMPROVEMENT METRICS:
   - Before distance: ___ words
   - After distance: ___ words
   - Reduction: ___% (target: ≤10 words)

SUMMARY:
- Sentences with >10 word distance: [#]
- Average distance before: ___ words
- Average distance after: ___ words
- Top 5 priority fixes: [list]
```

**WHY IT WORKS**: Quantifies the problem (word count), provides 3 concrete fix strategies

**EXAMPLE RESULTS**:
```
BEFORE (18-word distance):
"Participants, who were recruited from introductory psychology courses at a large Midwestern university and who completed informed consent procedures, received mindfulness training."
→ Distance: 18 words (Participants...received)

AFTER (1-word distance):
"Participants received mindfulness training. They were recruited from introductory psychology courses at a large Midwestern university and completed informed consent procedures."
→ Distance: 1 word (Participants received)
→ Improvement: 94% reduction in distance
```

**RATING**: ⭐⭐⭐⭐ (4.5/5)
**CONTRIBUTED BY**: Student_08 (improved readability dramatically)
**TAGS**: #sentence #structure #readability #clarity

---

### 🤖 AI REVIEWER SIMULATION RECIPES

---

#### Recipe #50: Reviewer 1 - Methodological Rigor Specialist

[See full prompt in Template 5.1, included here for reference]

**USE CASE**: Simulate harsh methodological reviewer before submitting

**RATING**: ⭐⭐⭐⭐⭐ (5.0/5)
**TAGS**: #reviewer #methods #rigor

---

#### Recipe #51: Reviewer 2 - Theoretical Contribution Expert

[See full prompt in Template 5.1]

**USE CASE**: Evaluate novelty and theoretical impact

**RATING**: ⭐⭐⭐⭐⭐ (5.0/5)
**TAGS**: #reviewer #novelty #impact

---

#### Recipe #52: Reviewer 3 - Supportive but Critical Friend

[See full prompt in Template 5.1]

**USE CASE**: Get balanced, constructive feedback with path forward

**RATING**: ⭐⭐⭐⭐⭐ (5.0/5)
**TAGS**: #reviewer #synthesis #constructive

---

### 📊 DIAGNOSTIC & POLISHING RECIPES

---

#### Recipe #53: APA 7th Edition Citation Checker

**USE CASE**: Verify all in-text citations and references follow APA 7th edition perfectly

**PROMPT**:
```
You are an APA 7th edition expert.

IN-TEXT CITATIONS TO CHECK (paste 10-15 citations):
1. ___
2. ___
[...]

TASK:
For each citation, check APA 7th compliance:

CITATION: "[paste in-text citation]"

APA 7TH RULES:
1. PARENTHETICAL FORMAT:
   - Correct: (Smith & Jones, 2020)
   - Incorrect: (Smith and Jones, 2020) ← use "&", not "and"

2. NARRATIVE FORMAT:
   - Correct: Smith and Jones (2020) found...
   - Incorrect: Smith & Jones (2020) found... ← use "and" in narrative, not "&"

3. MULTIPLE AUTHORS:
   - 1-2 authors: Always list all (Smith & Jones, 2020)
   - 3+ authors: First citation: (Smith, Jones, & Lee, 2020)
                 Subsequent: (Smith et al., 2020)

4. MULTIPLE WORKS:
   - Chronological order: (Smith, 2018; Jones, 2020; Lee, 2022)
   - Alphabetical if same year: (Jones, 2020; Smith, 2020)

CHECK RESULT:
- [ ] Correct as is
- [ ] Error: ___
- [ ] Fix: "___"

REFERENCES TO CHECK (paste 10-15 references):
[paste reference list]

FOR EACH REFERENCE:
REFERENCE: "[paste reference]"

APA 7TH FORMAT:
Author, A. A., & Author, B. B. (Year). Title of article. *Journal Name*, *Volume*(Issue), pages. https://doi.org/10.xxxx

CHECK:
1. Author format: [Correct / Error: ___]
2. Year: [Correct / Error: ___]
3. Title capitalization: [Sentence case / Error: Title Case Not Allowed]
4. Journal italics: [Correct / Missing italics]
5. Volume/Issue: [Correct / Error: ___]
6. DOI: [Present / Missing / Error: ___]

CORRECTED REFERENCE:
"___"

SUMMARY:
- Total citations checked: ___
- Errors found: ___
- Most common error: ___
- Fixed references: [list]
```

**WHY IT WORKS**: Catches common APA errors systematically (& vs and, et al. usage, DOI missing)

**EXAMPLE RESULTS**:
```
BEFORE (APA errors):
- In-text: "(Smith and Jones, 2020)" ← ERROR: use "&" in parenthetical
- Reference: "Smith, J. (2020). Mindfulness and Anxiety. Journal of Psychology, 10, 123-145." ← ERROR: missing DOI, title should be sentence case

AFTER (APA 7th compliant):
- In-text: "(Smith & Jones, 2020)"
- Reference: "Smith, J., & Jones, A. (2020). Mindfulness and anxiety. *Journal of Psychology*, *10*(3), 123-145. https://doi.org/10.1234/jp.2020.xxx"
```

**RATING**: ⭐⭐⭐⭐ (4.7/5)
**CONTRIBUTED BY**: Student_04 (achieved zero APA errors)
**TAGS**: #formatting #APA #citations #references

---

#### Recipe #54: Grammar & Spelling Final Pass

**USE CASE**: Catch all grammar, spelling, punctuation errors before submission

**PROMPT**:
```
You are a professional copy editor for Nature/Science.

SECTION TO PROOFREAD (paste any section):
[paste text]

TASK:
Identify ALL errors in these categories:

1. SUBJECT-VERB AGREEMENT:
   - Error: "The data was significant" ← "data" is plural
   - Fix: "The data were significant"

2. TENSE CONSISTENCY:
   - Error: "Participants completed the survey and receive training"
   - Fix: "Participants completed the survey and received training"

3. ARTICLE ERRORS (a/an/the):
   - Error: "Mindfulness is a effective intervention"
   - Fix: "Mindfulness is an effective intervention"

4. COMMA ERRORS:
   - Comma splice: "Results were significant, however the effect was small"
   - Fix: "Results were significant; however, the effect was small"

   - Missing comma: "Before the intervention participants completed..."
   - Fix: "Before the intervention, participants completed..."

5. APOSTROPHE ERRORS:
   - Error: "The participants results" ← missing apostrophe
   - Fix: "The participants' results" (plural possessive)

6. SPELLING ERRORS:
   [List any typos, commonly confused words (affect/effect, their/they're)]

7. PUNCTUATION:
   - Missing periods, commas, semicolons
   - Incorrect quotation marks

FOR EACH ERROR:
- Location: [sentence or paragraph #]
- Error type: [subject-verb / tense / article / comma / etc.]
- Error: "[quote the error]"
- Fix: "[corrected version]"

SUMMARY:
- Total errors found: ___
- Error density: ___ errors per 100 words
- Verdict: [Publication ready (<1 error/100 words) / Needs proofreading (1-3 errors/100) / Major editing needed (>3 errors/100)]
- Top 5 priority fixes: [list most serious or recurring errors]
```

**WHY IT WORKS**: Systematic category-by-category scan, catches errors human eye misses

**EXAMPLE RESULTS**:
```
BEFORE (5 errors in 100 words):
"The data was collected from participants who's anxiety levels was measured using the STAI. Before the intervention participants completed a baseline assessment, however some participants did not complete it."

Errors:
1. Subject-verb: "data was" → "data were"
2. Apostrophe: "who's" (who is) → "whose" (possessive)
3. Subject-verb: "levels was" → "levels were"
4. Comma: Missing after "intervention"
5. Comma splice: "assessment, however" → "assessment; however,"

AFTER (0 errors):
"The data were collected from participants whose anxiety levels were measured using the STAI. Before the intervention, participants completed a baseline assessment; however, some participants did not complete it."
```

**RATING**: ⭐⭐⭐⭐ (4.8/5)
**CONTRIBUTED BY**: Class consensus (everyone uses this for final pass)
**TAGS**: #grammar #spelling #proofreading #polishing

---

#### Recipe #55: Figure/Table Self-Explanatory Check

**USE CASE**: Verify that figures and tables can be understood without reading the main text

**PROMPT**:
```
You are a visual communication expert for top-tier journals.

FIGURE/TABLE TO EVALUATE:
[Describe or paste caption + describe visual elements]

Example:
Figure 1: Bar graph showing anxiety scores (y-axis) for mindfulness vs control groups (x-axis) at pre-test and post-test.
Caption: "Figure 1. Anxiety scores by group and time point. Error bars represent 95% CI."

TASK:
1. CAPTION COMPLETENESS (1-5):
   Does the caption contain:
   - [ ] What the figure shows (variables)
   - [ ] Sample size or conditions (N=___, groups)
   - [ ] Error bar definition (SEM, SD, 95% CI)
   - [ ] Statistical significance markers (*, p<.05)
   - [ ] Any abbreviations explained

   Score: ___/5
   Missing: ___

2. SELF-EXPLANATORY TEST:
   If I ONLY see this figure (no main text), can I understand:
   - What was measured? [Yes / No / Partially]
   - Who were the participants? [Yes / No / Partially]
   - What was the result? [Yes / No / Partially]

   Self-explanatory score: ___/5

3. VISUAL CLARITY (1-5):
   - [ ] Axes labeled with units
   - [ ] Legend present and clear
   - [ ] Font size readable (not too small)
   - [ ] Color scheme accessible (colorblind-friendly)
   - [ ] No clutter or unnecessary elements

   Score: ___/5

4. ESSENTIAL vs REDUNDANT:
   - Is this figure necessary, or does text already convey this?
   - Could this be a table instead (if many numbers)?
   - Could this be combined with another figure?

   Verdict: [Essential / Nice-to-have / Redundant]

5. RECOMMENDED IMPROVEMENTS:
   - Caption: [Add ___ to caption]
   - Visual: [Change ___ for clarity]
   - Necessity: [Keep / Combine with Figure ___ / Move to Supplement]

IMPROVED CAPTION (if score <5):
"Figure 1. Mindfulness training (N=40) reduced anxiety compared to waitlist control (N=40) from pre-test (Week 0) to post-test (Week 8). Error bars: 95% CI. **p<.001 for Group × Time interaction."
```

**WHY IT WORKS**: Enforces self-explanatory standard (figure should tell story independently)

**EXAMPLE RESULTS**:
```
BEFORE (weak caption):
"Figure 1. Anxiety scores. Error bars are 95% CI."
→ Self-explanatory: 2/5 (no info on groups, time points, sample size)

AFTER (strong caption):
"Figure 1. Anxiety scores (STAI total) for mindfulness training (N=40, blue) versus waitlist control (N=40, orange) at pre-test (Week 0) and post-test (Week 8). Error bars: 95% confidence intervals. ***p<.001 for Group × Time interaction, indicating mindfulness reduced anxiety more than control."
→ Self-explanatory: 5/5 (complete story in caption alone)
```

**RATING**: ⭐⭐⭐⭐ (4.6/5)
**CONTRIBUTED BY**: Student_10 (improved all figures to publication quality)
**TAGS**: #figures #tables #visual #clarity #captions

---

## Recipe Submission Process

### How Students Contribute New Recipes

**During Workshops**:
1. Student discovers effective prompt
2. Tests it on own paper
3. Documents results (before/after)
4. Submits to "New Recipe Submission Zone" in Figma
5. Class votes on usefulness (⭐ rating)
6. Instructor curates best recipes into permanent library

**Submission Template**:
```
🆕 NEW RECIPE SUBMISSION

📋 RECIPE NAME: ___

🎯 USE CASE: ___

📝 PROMPT:
```
[paste prompt]
```

📊 MY RESULTS:
BEFORE: ___
AFTER: ___
Improvement: ___

🙋 SUBMITTED BY: [Student ID]

👥 CLASS VOTE: [Students react with 👍 if they'd use this recipe]
```

**Quality Control** (Instructor):
- ✅ Prompt is reusable (not paper-specific)
- ✅ Results show clear improvement
- ✅ Use case is common (benefits multiple students)
- ✅ Not duplicate of existing recipe

---

## Cumulative Recipe Statistics

### Week-by-Week Growth

**Week 2**: 10 recipes (Abstract writing)
- Opening strategies (4 recipes)
- Significance framing (3 recipes)
- Quantitative results (3 recipes)

**Week 3**: +10 recipes (Gap discovery) → 20 total
- Gap classification (3 recipes)
- 3-stage validation (4 recipes)
- Cross-disciplinary search (3 recipes)

**Week 4**: +6 recipes (Bulletproofing) → 26 total
- Reproducibility scanner (2 recipes)
- Overclaiming detector (2 recipes)
- Statistical rigor auditor (2 recipes)

**Week 5**: +15 recipes (Revision) → **41 total**
- Macro-level (3 recipes): Story coherence, gap-method-result, section balance
- Meso-level (3 recipes): Paragraph unity, old→new flow, section transitions
- Micro-level (3 recipes): Nominalization, hedging, subject-verb distance
- AI Reviewers (3 recipes): R1 methodological, R2 theoretical, R3 synthesis
- Polishing (3 recipes): APA checker, grammar/spelling, figure captions

**Week 6** (projected): +10 recipes (Proposal writing) → **51 total**
- Hook generation, structure building, impact framing, etc.

---

## Usage Statistics (Tracked in Figma)

**Most Popular Recipes (by student votes)**:
1. Recipe #41 - Story Coherence Checker (⭐5.0, 12 uses)
2. Recipe #47 - Nominalization Hunter (⭐4.8, 11 uses)
3. Recipe #50 - Reviewer 1 Simulation (⭐5.0, 10 uses)
4. Recipe #44 - Paragraph Unity Checker (⭐4.9, 9 uses)
5. Recipe #42 - Gap-Method-Result Triangle (⭐5.0, 9 uses)

**Most Impactful Recipes (by before/after improvement)**:
1. Recipe #47 - Nominalization Hunter (avg 35% word reduction)
2. Recipe #48 - Hedging Audit (avg confidence score +2.1/5)
3. Recipe #41 - Story Coherence (avg score 6.5/10 → 9/10)
4. Recipe #49 - Subject-Verb Distance (avg distance 15 words → 6 words)
5. Recipe #54 - Grammar/Spelling (avg 5 errors → 0.5 errors)

---

## Instructor Dashboard (Weekly Curation)

**Curate Best Recipes** (each week):
1. Review new submissions in Figma
2. Test prompts on sample papers
3. Select top 3-5 for permanent library
4. Remove duplicates or low-quality recipes
5. Update rating based on class feedback

**Quality Criteria for Inclusion**:
- ✅ Reusable across different papers
- ✅ Produces measurable improvement
- ✅ Addresses common problem (not rare edge case)
- ✅ Clear instructions (anyone can use it)
- ✅ Rated ≥4.0/5 by students

---

## End-of-Semester Deliverable

**51-Recipe Toolkit** (exported as PDF + Figma file):
- Organized by week and category
- Rated by student votes
- Annotated with use cases and examples
- Ready for next cohort to use and extend

**Legacy**: Each semester's cohort inherits previous recipes + adds new ones → compound growth of collective knowledge

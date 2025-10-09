# Week 5 - Template 5.2: 3-Pass Revision Worksheet (Macro → Meso → Micro)

**Workshop Duration**: 25 minutes
**Objective**: Systematically improve paper through 3-level revision (Structure → Sections → Sentences)
**Canvas Size**: 3840×2160px (Figma collaborative canvas)

---

## Canvas Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ LEFT PANEL (800×2160px) - 3-PASS FRAMEWORK & CHECKLISTS                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ 🔭 1ST PASS - MACRO LEVEL (Structure & Logic)                              │
│ 🔬 2ND PASS - MESO LEVEL (Sections & Paragraphs)                           │
│ 🔍 3RD PASS - MICRO LEVEL (Sentences & Words)                              │
│                                                                              │
│ [Detailed checklists for each pass]                                         │
│ [AI prompt templates for each level]                                        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ RIGHT PANEL (3040×2160px) - STUDENT REVISION ZONES                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PASS 1: MACRO (3040×700px)                                                 │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ AI Diagnostic + Structural Issues + Fix Plan                         │  │
│  │ Student records: Issue → Before → After → Verification               │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  PASS 2: MESO (3040×700px)                                                  │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ Section/Paragraph Issues + Coherence Fixes                           │  │
│  │ Student records: Paragraph ID → Problem → Revision                   │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  PASS 3: MICRO (3040×700px)                                                 │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ Sentence-level Clarity Issues + Before→After Examples                │  │
│  │ Student records: Sentence → Problem Type → Fixed Version             │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Pedagogical Rationale: Why 3 Passes?

### The Problem with 1-Pass Revision
❌ **Cognitive overload** - trying to fix everything at once
❌ **Inefficiency** - polishing sentences you might delete
❌ **Inconsistency** - fix paragraph 1, forget what you did by paragraph 10
❌ **Missing big issues** - get lost in word choice, miss structural flaws

### The Solution: Hierarchical Revision
✅ **1st Pass (Macro)** - Fix big structural problems FIRST (don't waste time polishing sections you might delete)
✅ **2nd Pass (Meso)** - Fix paragraph logic AFTER structure is solid
✅ **3rd Pass (Micro)** - Polish sentences LAST when everything else is fixed

### Analogy: Renovating a House
- **Macro** = Fix foundation and load-bearing walls first (structure)
- **Meso** = Arrange rooms and furniture second (layout)
- **Micro** = Paint walls and decorate last (aesthetics)

**You wouldn't paint walls in a room you might demolish!**

---

## LEFT PANEL: 3-Pass Framework & Checklists

### 🔭 1ST PASS - MACRO LEVEL (Structure & Logic)

**Time**: 10 minutes
**Scope**: Whole paper (bird's eye view)
**Goal**: Ensure paper tells one coherent story from Title to Conclusion

#### Macro-Level Checklist

| Item | Question | Fix If... |
|------|----------|-----------|
| **1. Message Consistency** | Do Title, Abstract conclusion, Introduction RQ, and Discussion conclusion say the same thing? | They tell different stories |
| **2. Logical Flow** | Does Introduction → Methods → Results → Discussion follow naturally? | Sections feel disconnected |
| **3. Gap-Method-Result Triangle** | Does Methods address the Gap, and do Results answer the question? | Mismatch between what you promised and delivered |
| **4. Structural Balance** | Are section lengths appropriate (no 1-page Intro + 10-page Methods)? | Severe imbalance in section sizes |
| **5. Narrative Arc** | Does the paper build tension (Introduction) → climax (Results) → resolution (Discussion)? | Feels flat or aimless |

#### AI Prompt for Macro-Level Diagnostic

```
ROLE: You are a structural editor for Nature/Science, evaluating overall logic and coherence.

PAPER SECTIONS (paste these):
- Title: ___
- Abstract (last sentence): ___
- Introduction (research question/hypothesis): ___
- Methods (1-sentence summary): ___
- Results (1-sentence summary of main finding): ___
- Discussion (conclusion paragraph): ___

TASK: Evaluate the paper's structural coherence.

1. MESSAGE CONSISTENCY (1-10):
   Do these sections tell ONE consistent story, or multiple different stories?
   - If 8-10: Consistent message throughout
   - If 5-7: Mostly consistent, minor discrepancies
   - If 1-4: Major inconsistencies, confusing narrative
   Score: /10
   Issues: ___

2. LOGICAL FLOW (1-10):
   Does Introduction set up Methods, Methods produce Results, Results inform Discussion?
   - Are there logical gaps or jumps?
   - Does each section connect naturally to the next?
   Score: /10
   Issues: ___

3. GAP-METHOD-RESULT ALIGNMENT (1-10):
   Does the Gap identified in Introduction get addressed by the Method and answered by Results?
   - Introduction Gap: [AI summarizes the gap]
   - Methods Approach: [AI summarizes the approach]
   - Results Finding: [AI summarizes the finding]
   - MATCH? [Yes/Partial/No]
   Score: /10
   Issues: ___

4. STRUCTURAL BALANCE:
   Based on the summaries, do section lengths seem appropriate?
   - Red flags: Very long Methods but short Results, Long Introduction but thin Discussion
   Concerns: ___

5. NARRATIVE ARC:
   Does this paper have a compelling story?
   - Hook in Introduction?
   - Tension building?
   - Satisfying resolution in Discussion?
   Strengths: ___
   Weaknesses: ___

OVERALL MACRO SCORE: /10

TOP 3 STRUCTURAL ISSUES (if score <8):
1. ___
2. ___
3. ___

RECOMMENDED FIXES:
1. ___
2. ___
3. ___
```

#### Common Macro-Level Problems & Fixes

**Problem 1: Message Drift**
- **Symptom**: Title says "X improves Y", but Discussion concludes "more research needed on X"
- **Fix**: Align Title/Abstract/Discussion around core finding
  - **Before Title**: "Mindfulness Training Reduces Anxiety in College Students"
  - **Before Discussion**: "Results were mixed, suggesting mindfulness may not be effective..."
  - **After**: Either strengthen Discussion OR change Title to "Exploring Mindfulness Effects..."

**Problem 2: Gap-Method Mismatch**
- **Symptom**: Introduction identifies conceptual gap, but Methods just replicate with new population
- **Fix**: Either reframe Introduction gap as incremental OR redesign study (if possible)
  - **Before Gap**: "No theory explains why mindfulness works"
  - **Before Method**: "We tested mindfulness in college students" (population substitution)
  - **After Gap**: "Mindfulness mechanisms unknown in high-stress populations" (better match)

**Problem 3: Results Don't Answer Introduction Question**
- **Symptom**: Introduction asks "Does X cause Y?", Results show "X correlates with Y"
- **Fix**: Align question with design OR acknowledge limitation
  - **Before RQ**: "Does mindfulness cause anxiety reduction?" (causal)
  - **Before Design**: Cross-sectional survey (correlational)
  - **After RQ**: "Is mindfulness associated with anxiety reduction?" (correlational)

**Problem 4: Inverted Pyramid (wrong structure)**
- **Symptom**: 8-page Introduction, 2-page Methods, 1-page Results, 3-page Discussion
- **Fix**: Trim Introduction literature review, expand Results with details
  - **Ideal ratio**: Intro 25%, Methods 20%, Results 30%, Discussion 25%

**Problem 5: Flat Narrative (no story arc)**
- **Symptom**: Paper feels like "we did X, we found Y, the end" - no compelling reason to care
- **Fix**: Add tension in Introduction (why this matters), build to climax in Results, provide satisfying resolution in Discussion
  - **Before Intro ending**: "We tested if X affects Y."
  - **After Intro ending**: "Resolving this question has implications for theory A and application B. We tested..."

---

### 🔬 2ND PASS - MESO LEVEL (Sections & Paragraphs)

**Time**: 10 minutes
**Scope**: Individual sections and paragraphs
**Goal**: Each paragraph does one clear job, paragraphs flow logically

#### Meso-Level Checklist

| Item | Question | Fix If... |
|------|----------|-----------|
| **1. Paragraph Unity** | Does each paragraph have ONE main idea? | Paragraph jumps between multiple topics |
| **2. Topic Sentences** | Is the first sentence a clear topic sentence? | First sentence is detail, not overview |
| **3. Old→New Flow** | Does each sentence start with old info, end with new? | Paragraphs feel choppy or disjointed |
| **4. Paragraph Transitions** | Do paragraphs connect to each other logically? | Abrupt topic changes between paragraphs |
| **5. Section Coherence** | Do all paragraphs in a section support the section's goal? | Off-topic paragraphs or tangents |

#### AI Prompt for Meso-Level Diagnostic

```
ROLE: You are a paragraph-level editor, evaluating coherence and flow.

SECTION TO ANALYZE (paste one section):
[Introduction OR Methods OR Results OR Discussion]

TASK: Evaluate paragraph structure and flow.

For EACH paragraph, analyze:

PARAGRAPH 1:
1. Main idea: [What is this paragraph about in 1 sentence?]
2. Topic sentence quality (1-5):
   - 5 = Clear topic sentence that previews the paragraph
   - 3 = Topic sentence present but unclear
   - 1 = No clear topic sentence
   Score: /5

3. Unity (1-5):
   - 5 = All sentences support the main idea
   - 3 = Some sentences off-topic
   - 1 = Multiple ideas mixed together
   Score: /5

4. Old→New flow (1-5):
   - 5 = Each sentence builds on previous (smooth)
   - 3 = Some abrupt shifts
   - 1 = Choppy, no connection between sentences
   Score: /5

5. Issues: ___
6. Suggested fix: ___

[Repeat for PARAGRAPH 2, 3, 4, 5...]

SECTION-LEVEL EVALUATION:
1. Do paragraphs follow logical order? (1-5): /5
2. Are transitions between paragraphs smooth? (1-5): /5
3. Does the section build toward a clear conclusion? (1-5): /5

OVERALL MESO SCORE: /5

TOP 3 PARAGRAPH ISSUES:
1. Paragraph #_: ___
2. Paragraph #_: ___
3. Paragraph #_: ___

RECOMMENDED FIXES:
1. ___
2. ___
3. ___
```

#### Common Meso-Level Problems & Fixes

**Problem 1: Paragraph Doing Two Jobs**
- **Symptom**: Paragraph starts with literature review, then jumps to methods justification
- **Fix**: Split into two paragraphs
  - **Before**: "Previous research on anxiety shows X, Y, Z. We used the STAI because it is reliable. Our study recruited..."
  - **After**: [P1] "Previous research shows X, Y, Z." [P2] "We used STAI because..."

**Problem 2: Missing Topic Sentence**
- **Symptom**: Paragraph starts with a detail: "Smith et al. (2020) found..."
- **Fix**: Add topic sentence that previews the paragraph
  - **Before**: "Smith et al. (2020) found that mindfulness reduces anxiety. Jones et al. (2021) replicated this..."
  - **After**: "**Several studies demonstrate mindfulness-anxiety link.** Smith et al. (2020) found..."

**Problem 3: Old→New Violation**
- **Symptom**: Sentence 2 introduces new concept unrelated to Sentence 1's ending
  - **Before**: "Mindfulness training reduced anxiety (*new info: anxiety reduction*). Participants were recruited from psychology courses (*new info: participants - no connection*)."
  - **After**: "Mindfulness training reduced anxiety (*new*). This anxiety reduction (*old*) was measured using STAI (*new*)."

**Problem 4: Abrupt Paragraph Transition**
- **Symptom**: Paragraph 1 ends on Topic A, Paragraph 2 starts on unrelated Topic B
- **Fix**: Add transition sentence or reorder paragraphs
  - **Before P1 ending**: "...suggesting mindfulness affects attention."
  - **Before P2 opening**: "Depression is a major public health problem." (abrupt shift)
  - **After**: Add bridge sentence: "While attention has been studied extensively, *depression* - which shares neural substrates with attention - remains underexplored."

**Problem 5: Section Bloat (too many paragraphs)**
- **Symptom**: Introduction has 12 paragraphs covering loosely related topics
- **Fix**: Apply "5-paragraph rule" - merge related paragraphs, cut tangents
  - **Before Introduction structure**: [12 paragraphs: mindfulness history, anxiety definitions, college students stress, meditation types, neuroscience, clinical trials, questionnaires, ...]
  - **After**: [5 paragraphs: (1) Anxiety problem, (2) Mindfulness theory, (3) Evidence for mindfulness-anxiety link, (4) Gaps in literature, (5) Current study]

---

### 🔍 3RD PASS - MICRO LEVEL (Sentences & Words)

**Time**: 5 minutes (in workshop; full pass takes longer at home)
**Scope**: Individual sentences and word choices
**Goal**: Every sentence is clear, concise, and grammatically correct

#### Micro-Level Checklist

| Item | Question | Fix If... |
|------|----------|-----------|
| **1. Vague Words** | Are "some", "often", "may" used excessively? | Hedging weakens claims unnecessarily |
| **2. Nominalization** | Are actions in verbs (not nouns)? | "Investigation of" instead of "investigated" |
| **3. Subject-Verb Distance** | Are subject and verb ≤10 words apart? | Long interruptions between subject-verb |
| **4. Passive Voice** | Is passive used strategically (not by default)? | Passive hides actors when they matter |
| **5. Grammar/Spelling** | Zero errors in grammar, spelling, punctuation? | Any typos, agreement errors, etc. |

#### AI Prompt for Micro-Level Diagnostic

```
ROLE: You are a copy editor for a top-tier journal, ensuring sentence-level clarity.

SENTENCES TO ANALYZE (paste 15-20 sentences from any section):
1. ___
2. ___
3. ___
[...]

TASK: Identify sentence-level problems and provide fixes.

For EACH sentence, check:

SENTENCE 1: "[paste sentence]"
1. Vague words? [List any: some, many, often, may, might, generally, etc.]
2. Nominalization? [List any: investigation, examination, utilization → investigate, examine, use]
3. Subject-verb distance: [Count words between subject and main verb]
   - If >10 words: Flag as "too long"
4. Passive voice? [Yes/No - is it justified or unnecessary?]
5. Grammar/spelling errors? [List any]
6. Clarity score (1-5): /5
   - 5 = Crystal clear
   - 3 = Understandable but awkward
   - 1 = Confusing or ambiguous

REVISED VERSION (if score <5):
"___"

[Repeat for each sentence]

SUMMARY:
- Most common issue: ___
- Sentences needing revision: #___, #___, #___
- Overall clarity: ___/5

TOP 5 PRIORITY FIXES:
1. Sentence #___: [Before → After]
2. Sentence #___: [Before → After]
3. Sentence #___: [Before → After]
4. Sentence #___: [Before → After]
5. Sentence #___: [Before → After]
```

#### Common Micro-Level Problems & Fixes

**Problem 1: Hedging Overload**
- **Symptom**: "Some research suggests that mindfulness may often reduce anxiety in certain populations."
- **Fix**: Be specific or confident
  - **After**: "Three meta-analyses show mindfulness reduces anxiety (d=0.63, Cohen et al., 2020)."

**Problem 2: Nominalization**
- **Symptom**: "Investigation of the effect of mindfulness on anxiety reduction was conducted."
- **Fix**: Turn nouns back into verbs
  - **After**: "We investigated how mindfulness reduces anxiety."
  - **Nominalization**: investigation → investigated, effect → affects, reduction → reduces

**Problem 3: Subject-Verb Separation**
- **Symptom**: "Participants, who were recruited from introductory psychology courses and who completed informed consent and who passed eligibility screening, *received* training."
- **Fix**: Move modifiers after verb OR split sentence
  - **After**: "Participants received training. They were recruited from psychology courses, completed informed consent, and passed eligibility screening."

**Problem 4: Unjustified Passive**
- **Symptom**: "Anxiety was measured using the STAI." (Who measured? When?)
- **Fix**: Use active voice when actor matters
  - **After**: "Researchers measured anxiety using the STAI at pre-test and post-test."
  - **Keep passive when**: "The STAI was developed by Spielberger (1983)" - developer is known from citation, focus is on STAI

**Problem 5: Ambiguous Pronouns**
- **Symptom**: "Mindfulness training and cognitive therapy were compared. *It* was more effective."
- **Fix**: Repeat the noun instead of using "it"
  - **After**: "Mindfulness training and cognitive therapy were compared. *Mindfulness training* was more effective."

**Problem 6: Grammar Errors**

| Error Type | Before | After |
|------------|--------|-------|
| Subject-verb agreement | "The results *was* significant" | "The results *were* significant" |
| Tense inconsistency | "Participants completed the survey and *receive* training" | "...completed... and *received*..." |
| Article error | "Mindfulness is *a* effective intervention" | "Mindfulness is *an* effective intervention" |
| Comma splice | "Results were significant, however the effect was small" | "Results were significant; however, the effect was small" |
| Apostrophe error | "The participants' results" (multiple) vs "The participant's results" (one) | Check singular vs plural |

---

## RIGHT PANEL: Student Revision Zones

### PASS 1: MACRO - Structural Revision Zone (10 min)

**Activity**: Run Macro AI diagnostic → Identify top 3 structural issues → Plan fixes

**Student Worksheet Template**:

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    PASS 1: MACRO-LEVEL REVISION                        ║
╚═══════════════════════════════════════════════════════════════════════╝

📥 INPUT (Paper Sections Submitted to AI):
- Title: ___
- Abstract conclusion: ___
- Introduction RQ: ___
- Methods summary: ___
- Results summary: ___
- Discussion conclusion: ___

🤖 AI DIAGNOSTIC OUTPUT:

📊 SCORES:
- Message Consistency: ___/10
- Logical Flow: ___/10
- Gap-Method-Result Alignment: ___/10
- Structural Balance: [Comments]
- Narrative Arc: [Comments]
- OVERALL MACRO SCORE: ___/10

🚨 TOP 3 STRUCTURAL ISSUES:
1. ___
2. ___
3. ___

🔧 REVISION PLAN:

ISSUE 1: ___
├─ Current state: ___
├─ Target state: ___
├─ Specific fix: ___
├─ Sections affected: [Title/Abstract/Intro/Methods/Results/Disc]
├─ Estimated time: ___ minutes
└─ Priority: [HIGH/MED/LOW]

ISSUE 2: ___
├─ Current state: ___
├─ Target state: ___
├─ Specific fix: ___
├─ Sections affected: ___
├─ Estimated time: ___ minutes
└─ Priority: [HIGH/MED/LOW]

ISSUE 3: ___
├─ Current state: ___
├─ Target state: ___
├─ Specific fix: ___
├─ Sections affected: ___
├─ Estimated time: ___ minutes
└─ Priority: [HIGH/MED/LOW]

✅ VERIFICATION (after fixes):
- [ ] Re-run Macro AI diagnostic
- [ ] New overall score: ___/10 (target: ≥8/10)
- [ ] Issues resolved? [Yes/No - explain]

⏱️ ACTUAL TIME SPENT: ___ minutes
```

**Example Filled Worksheet**:

```
🚨 TOP 3 STRUCTURAL ISSUES:
1. Message drift - Title says "reduces anxiety" but Discussion says "mixed results"
2. Gap-Method mismatch - Intro identifies conceptual gap but Methods is population substitution
3. Inverted pyramid - 8-page Intro, 2-page Results

🔧 REVISION PLAN:

ISSUE 1: Message Drift
├─ Current: Title claims causal effect, Discussion hedges
├─ Target: Consistent message - either claim effect or frame as exploratory
├─ Specific fix: Change Title from "Mindfulness Reduces Anxiety" to "Mindfulness and Anxiety Reduction: An RCT"
│              Strengthen Discussion conclusion with effect size (d=0.72, large effect)
├─ Sections: Title + Discussion conclusion paragraph
├─ Time: 30 min
└─ Priority: HIGH

ISSUE 2: Gap-Method Mismatch
├─ Current: Intro says "no theory explains how mindfulness works", Methods just tests if it works in college students
├─ Target: Intro gap matches Methods design
├─ Specific fix: Reframe Intro gap as "mindfulness mechanisms understudied in high-stress populations"
│              Add exploratory hypothesis about stress-buffering mechanism
├─ Sections: Introduction paragraphs 3-4
├─ Time: 45 min
└─ Priority: HIGH

ISSUE 3: Inverted Pyramid
├─ Current: Intro 8 pages (too long), Results 2 pages (too short)
├─ Target: Intro ~4 pages, Results ~5 pages
├─ Specific fix: Cut Intro literature review (12 paragraphs → 5), expand Results with mediation analysis details
├─ Sections: Introduction (trim) + Results (expand)
├─ Time: 90 min
└─ Priority: MED

✅ VERIFICATION:
- [x] Re-ran Macro diagnostic
- New score: 8.5/10 (up from 6.2/10)
- Issues resolved: Issue 1 & 2 YES, Issue 3 partial (still trimming Intro)
```

---

### PASS 2: MESO - Section/Paragraph Revision Zone (10 min)

**Activity**: Run Meso AI diagnostic on ONE section → Fix top 3 paragraph issues → Verify coherence

**Student Worksheet Template**:

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    PASS 2: MESO-LEVEL REVISION                         ║
╚═══════════════════════════════════════════════════════════════════════╝

📌 SECTION SELECTED: [Introduction / Methods / Results / Discussion]
(Choose the section with most critical issues from Macro Pass)

📥 INPUT (Section Submitted to AI):
[Paste entire section with paragraph numbers]

🤖 AI DIAGNOSTIC OUTPUT:

PARAGRAPH-BY-PARAGRAPH SCORES:
┌──────┬──────────────┬────────┬───────┬──────────┬────────┐
│ Para │ Main Idea    │ Topic  │ Unity │ Old→New  │ Score  │
│  #   │ (1 sentence) │ Sent   │       │ Flow     │ /5     │
├──────┼──────────────┼────────┼───────┼──────────┼────────┤
│  1   │ ___          │ ___/5  │ ___/5 │ ___/5    │ ___/5  │
│  2   │ ___          │ ___/5  │ ___/5 │ ___/5    │ ___/5  │
│  3   │ ___          │ ___/5  │ ___/5 │ ___/5    │ ___/5  │
│  4   │ ___          │ ___/5  │ ___/5 │ ___/5    │ ___/5  │
│  5   │ ___          │ ___/5  │ ___/5 │ ___/5    │ ___/5  │
└──────┴──────────────┴────────┴───────┴──────────┴────────┘

SECTION-LEVEL SCORES:
- Logical paragraph order: ___/5
- Smooth transitions: ___/5
- Clear section goal: ___/5
- OVERALL MESO SCORE: ___/5

🚨 TOP 3 PARAGRAPH ISSUES:
1. Paragraph #___: ___
2. Paragraph #___: ___
3. Paragraph #___: ___

🔧 PARAGRAPH REVISION:

PARAGRAPH #___ BEFORE:
"___[paste original paragraph]___"

ISSUE: ___

FIX STRATEGY:
- [ ] Split into 2 paragraphs (if doing 2 jobs)
- [ ] Add topic sentence at beginning
- [ ] Reorder sentences for Old→New flow
- [ ] Add transition from previous paragraph
- [ ] Cut off-topic sentences
- [ ] Other: ___

PARAGRAPH #___ AFTER:
"___[paste revised paragraph]___"

VERIFICATION:
- Topic sentence present? [Yes/No]
- All sentences support main idea? [Yes/No]
- Old→New flow smooth? [Yes/No]
- Transition from previous paragraph? [Yes/No]
- NEW SCORE (self-assessed): ___/5

[Repeat for Paragraph 2, 3...]

✅ SECTION IMPROVEMENT:
- Before: ___/5
- After: ___/5 (target: ≥4/5)
- Time spent: ___ minutes
```

**Example Filled Worksheet**:

```
📌 SECTION: Introduction

🚨 TOP 3 PARAGRAPH ISSUES:
1. Paragraph 2: Doing two jobs (literature review + methods justification)
2. Paragraph 4: No topic sentence (starts with "Smith et al. found...")
3. Paragraph 3→4: Abrupt transition (P3 ends on attention, P4 starts on depression)

🔧 PARAGRAPH 2 REVISION:

BEFORE:
"Previous research shows mindfulness reduces anxiety through attention regulation (Tang et al., 2015) and emotion reappraisal (Garland et al., 2017). We chose the STAI as our anxiety measure because it has high reliability (α=.89) and validity. Our study builds on this literature by examining college students."

ISSUE: One paragraph doing 3 jobs - literature review + measure justification + study positioning

FIX STRATEGY:
- [x] Split into 2 paragraphs
- New P2: Literature review on mechanisms
- New P3: Study positioning (move measure justification to Methods)

PARAGRAPH 2 AFTER:
"Previous research identifies two key mechanisms: attention regulation (Tang et al., 2015) and emotion reappraisal (Garland et al., 2017). These mechanisms explain *how* mindfulness reduces anxiety, not just *that* it does."

PARAGRAPH 3 AFTER (new):
"Building on this mechanistic understanding, the current study examines whether these pathways operate in college students - a high-stress population where mindfulness interventions are increasingly common but mechanisms remain untested."

VERIFICATION:
- Topic sentence in P2? YES - "Previous research identifies two key mechanisms"
- All sentences support main idea? YES - all about mechanisms
- Old→New flow? YES - "mechanisms" repeated from P2 to P3
- NEW SCORE: 5/5 (was 2/5)
```

---

### PASS 3: MICRO - Sentence/Word Revision Zone (5 min)

**Activity**: Run Micro AI diagnostic on 15-20 problem sentences → Fix top 5 clarity issues

**Student Worksheet Template**:

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    PASS 3: MICRO-LEVEL REVISION                        ║
╚═══════════════════════════════════════════════════════════════════════╝

📌 SENTENCES SELECTED: [From section with most clarity issues]
(Select 15-20 sentences that seem wordy, unclear, or awkward)

📥 INPUT (Sentences Submitted to AI):
1. ___
2. ___
[...]
15. ___

🤖 AI DIAGNOSTIC OUTPUT:

SENTENCE-BY-SENTENCE ANALYSIS:
┌────┬─────────┬────────────┬─────────┬─────────┬─────────┬────────┐
│ #  │ Vague   │ Nominal-   │ Subj-V  │ Passive │ Grammar │ Clarity│
│    │ Words   │ ization    │ Dist.   │ OK?     │ Errors  │ /5     │
├────┼─────────┼────────────┼─────────┼─────────┼─────────┼────────┤
│ 1  │ ___     │ ___        │ ___ wd  │ Y/N     │ ___     │ ___/5  │
│ 2  │ ___     │ ___        │ ___ wd  │ Y/N     │ ___     │ ___/5  │
│ 3  │ ___     │ ___        │ ___ wd  │ Y/N     │ ___     │ ___/5  │
└────┴─────────┴────────────┴─────────┴─────────┴─────────┴────────┘

🚨 TOP 5 PRIORITY FIXES (AI-identified):
1. Sentence #___: ___
2. Sentence #___: ___
3. Sentence #___: ___
4. Sentence #___: ___
5. Sentence #___: ___

🔧 SENTENCE REVISION:

SENTENCE #___ (Clarity: ___/5)

BEFORE:
"___"

PROBLEMS IDENTIFIED:
- [ ] Vague words: ___
- [ ] Nominalization: ___
- [ ] Subject-verb distance: ___ words (>10)
- [ ] Unjustified passive
- [ ] Grammar error: ___
- [ ] Other: ___

FIX APPLIED:

AFTER:
"___"

IMPROVEMENT:
- Removed: ___
- Changed: ___ → ___
- Clarified: ___
- NEW CLARITY: ___/5

[Repeat for sentences 2, 3, 4, 5...]

✅ OVERALL IMPROVEMENT:
- Average clarity before: ___/5
- Average clarity after: ___/5 (target: ≥4.5/5)
- Most common issue fixed: ___
- Time spent: ___ minutes
```

**Example Filled Worksheet**:

```
🚨 TOP 5 PRIORITY FIXES:
1. Sentence 3: Hedging overload + nominalization
2. Sentence 7: Subject-verb distance 18 words
3. Sentence 10: Unjustified passive
4. Sentence 12: Ambiguous "it"
5. Sentence 15: Nominalization + subject-verb agreement error

🔧 SENTENCE 3:

BEFORE (Clarity: 2/5):
"Some research suggests that mindfulness training may often lead to reductions in anxiety symptoms in certain populations."

PROBLEMS:
- [x] Vague words: some, may, often, certain
- [x] Nominalization: reductions → reduces
- [ ] Subject-verb distance: OK (7 words)

AFTER (Clarity: 5/5):
"Three meta-analyses show mindfulness training reduces anxiety (d=0.63, Cohen et al., 2020)."

IMPROVEMENT:
- Removed: some, may, often, certain (hedging)
- Changed: reductions → reduces (nominalization)
- Clarified: "certain populations" → "meta-analyses" (specific)
- Added: effect size (d=0.63) for precision

---

🔧 SENTENCE 7:

BEFORE (Clarity: 2/5):
"Participants, who were recruited from introductory psychology courses and who completed informed consent forms and who passed eligibility screening criteria, received mindfulness training."

PROBLEMS:
- [x] Subject-verb distance: 18 words (Participants...received)

AFTER (Clarity: 5/5):
"Participants received mindfulness training. They were recruited from introductory psychology courses, completed informed consent, and passed eligibility screening."

IMPROVEMENT:
- Split into 2 sentences
- Subject-verb distance: 1 word (Participants received)

---

🔧 SENTENCE 10:

BEFORE (Clarity: 3/5):
"Anxiety was measured using the STAI."

PROBLEMS:
- [x] Unjustified passive (who measured? when?)

AFTER (Clarity: 5/5):
"Researchers measured anxiety using the STAI at pre-test (Week 0) and post-test (Week 8)."

IMPROVEMENT:
- Active voice: "Researchers measured"
- Added context: when (Week 0, Week 8)

---

✅ OVERALL IMPROVEMENT:
- Before: 2.4/5
- After: 4.8/5
- Most common issue: Hedging words + nominalization
```

---

## Workshop Timeline (25 minutes)

### Minutes 1-10: Pass 1 (Macro)
- **Min 1-3**: Instructor demos Macro AI prompt with example paper
- **Min 4-8**: Students run Macro diagnostic on their papers
- **Min 9-10**: Quick share - "What was your biggest structural issue?"

### Minutes 11-20: Pass 2 (Meso)
- **Min 11-12**: Instructor demos Meso AI prompt (1 section)
- **Min 13-19**: Students run Meso diagnostic on their worst section
- **Min 20**: Quick share - "Which paragraph needed most work?"

### Minutes 21-25: Pass 3 (Micro)
- **Min 21-22**: Instructor demos Micro AI prompt (5 sentences)
- **Min 23-24**: Students run Micro diagnostic on 10 problem sentences
- **Min 25**: Wrap-up - "What's the #1 fix you'll make tonight?"

---

## Success Criteria

**For Students**:
- ✅ Completed all 3 passes (Macro/Meso/Micro)
- ✅ Identified specific issues at each level (not vague "improve clarity")
- ✅ Created concrete before→after fixes for at least 3 issues
- ✅ Scored improvements (before vs after) at each level
- ✅ Has prioritized action plan for post-workshop revision

**For Instructors** (quality checks):
- ✅ All students filled out all 3 passes (monitor Figma zones)
- ✅ Students' fixes are specific (not generic "rewrite paragraph")
- ✅ Improvements are measurable (scores increased)
- ✅ Students understand WHY each fix matters (not just copying AI suggestions)
- ✅ Class discussion identified common patterns (e.g., "80% of us had hedging problems")

---

## Integration Across Workshop Activities

### From AI Diagnostic (Template 5.1) → 3-Pass Revision (Template 5.2)

**AI Diagnostic provides**:
- Critical issues list (from 3 reviewers)
- Prioritized problems by category (methodological, theoretical, presentation)

**3-Pass Revision executes fixes**:
- **Macro Pass** fixes structural issues flagged by Reviewer 3 (e.g., message drift)
- **Meso Pass** fixes section issues flagged by Reviewers 1 & 2 (e.g., Methods too vague, Discussion doesn't address results)
- **Micro Pass** fixes sentence issues flagged by all reviewers (e.g., hedging, passive voice)

**Handoff Script** (Instructor):
> "Now you know WHAT to fix from AI Diagnostic. The 3-Pass Revision shows you HOW to fix it systematically. Don't try to fix everything at once - that's overwhelming. Fix big problems first (Macro), then section problems (Meso), then polish sentences (Micro)."

---

## Common Pitfalls & Solutions

### Pitfall 1: Student skips Macro, goes straight to Micro
**Symptom**: Spends 20 minutes polishing sentences in Introduction paragraph 5, then realizes in Macro pass they need to delete that paragraph
**Solution**: Enforce strict order - "No Micro fixes until Macro is done!"
**Analogy**: "Don't polish the paint on a wall you're going to demolish"

### Pitfall 2: AI gives generic feedback ("improve clarity")
**Symptom**: AI says "improve paragraph coherence" without specifics
**Solution**: Revise prompt with "Give 3 specific examples with before→after"
```
"For each issue, provide:
1. Exact quote of the problem (verbatim text)
2. What's wrong (one sentence explanation)
3. Fixed version (show the improvement)"
```

### Pitfall 3: Student overwhelmed by too many issues
**Symptom**: Micro diagnostic found 47 problems, student paralyzed
**Solution**: "Fix top 5 only in workshop, do rest at home"
**Instructor**: Help prioritize - "Which 5 issues appear most frequently? Fix those patterns."

### Pitfall 4: Student's "after" version is worse than "before"
**Symptom**: Student tried to fix nominalization but made sentence ungrammatical
**Solution**: Peer check - pair students to validate each other's fixes
**Template**: "Read your AFTER sentence to a partner. Can they understand it better than BEFORE?"

### Pitfall 5: Student can't assess if fix worked
**Symptom**: Made changes but unsure if actually improved
**Solution**: Re-run AI diagnostic on fixed version, compare scores
```
Before: Clarity 2.4/5
After: Clarity 4.8/5
Improvement: +2.4 points = SUCCESS
```

---

## Instructor Facilitation Notes

### Pre-Class Prep (15 min):
1. **Copy Figma template** for 3-Pass Revision Worksheet
2. **Prepare example paper** to demonstrate each pass
   - Select a real student paper (anonymized) OR published paper with known issues
   - Pre-run all 3 AI diagnostics to show expected outputs
3. **Create cheat sheet** of most common issues for this class
   - Review last week's Gap Discovery + Bulletproofing results
   - Predict: "This class probably struggles with hedging and nominalization"

### During Workshop:

**Macro Pass (Minutes 1-10)**:
- **Live demo**: Show your screen, paste paper sections into AI prompt, interpret output
- **Key teaching moment**: "See how AI caught message drift? Title says X, Discussion says Y"
- **Monitor**: Watch for students stuck on "what sections to paste" - guide them
- **Intervene**: If student gets score 3/10, help prioritize - "Fix message drift FIRST"

**Meso Pass (Minutes 11-20)**:
- **Demo paragraph splitting**: Show before (2-job paragraph) → after (2 separate paragraphs)
- **Highlight Old→New violations**: "See how this paragraph jumps? Old info first, then new"
- **Monitor**: Students often skip topic sentences - remind them to check
- **Intervene**: If paragraph scores 1/5, suggest "Start with main idea sentence"

**Micro Pass (Minutes 21-25)**:
- **Demo nominalization fix**: "Investigation of anxiety → We investigated anxiety"
- **Show before→after impact**: "Before 18 words, after 8 words - 56% shorter!"
- **Monitor**: Students sometimes over-correct (remove all hedging, even justified)
- **Intervene**: "Keep hedging when uncertainty is real (e.g., 'suggests' for correlational)"

### Post-Workshop:
- **Export Figma** to PDF for student records
- **Identify class patterns**:
  - "90% had subject-verb distance >10 words"
  - "70% had hedging overload"
  - "50% had nominalization"
- **Update future workshops**: If class struggles with X, add more examples of X

---

## Pedagogical Rationale

### Why Hierarchical Revision?

**Cognitive Load Theory**: Human working memory is limited (7±2 items). Trying to fix structure + paragraphs + sentences simultaneously exceeds capacity.

**Solution**: Reduce cognitive load by focusing on ONE level at a time:
- Macro Pass: "Am I fixing BIG problems? Ignore small stuff for now."
- Meso Pass: "Now that structure is solid, are paragraphs logical?"
- Micro Pass: "Finally, polish sentences - structure won't change anymore."

### Why AI-Assisted?

**Objectivity**: AI doesn't have ego investment - catches issues human writer misses due to "curse of knowledge"

**Speed**: Human feedback takes days/weeks - AI gives instant diagnostic

**Consistency**: AI applies same criteria to every sentence - humans get fatigued

**BUT**: AI is a tool, not replacement for judgment. Students must:
- Evaluate if AI's criticism is valid
- Decide which fixes to implement
- Verify improvements with re-scoring

### Learning Outcomes:

1. **Systematic revision skill** - ability to revise hierarchically (not randomly)
2. **Self-editing capacity** - catch own errors before submission
3. **Pattern recognition** - identify recurring problems (e.g., "I always use nominalization")
4. **Quality standards** - internalize top-tier journal expectations
5. **Efficiency** - revise in 3 focused passes instead of 10 scattered edits

---

## Example: Complete 3-Pass Revision Case Study

**BEFORE ALL PASSES** (original paragraph from Introduction):

"There has been some research suggesting that mindfulness-based interventions may be beneficial for the reduction of anxiety symptoms. The investigation of mindfulness in college student populations is important because these individuals often experience high levels of stress. Previous studies have found that mindfulness training programs, which involve meditation and awareness exercises, can lead to improvements in various mental health outcomes. However, the specific mechanisms underlying these effects remain unclear, and more research is needed to understand how mindfulness exerts its effects on anxiety in different populations."

**Problems** (multi-level):
- **Macro**: Paragraph tries to do 3 jobs (literature review + importance + gap)
- **Meso**: No clear topic sentence, Old→New flow broken
- **Micro**: Hedging ("some research", "may be"), nominalization ("reduction", "investigation"), passive voice

---

**AFTER MACRO PASS**: Split into 3 paragraphs with clear jobs

*Paragraph 1 (Literature review):*
"There has been some research suggesting that mindfulness-based interventions may be beneficial for the reduction of anxiety symptoms. Previous studies have found that mindfulness training programs, which involve meditation and awareness exercises, can lead to improvements in various mental health outcomes."

*Paragraph 2 (Importance):*
"The investigation of mindfulness in college student populations is important because these individuals often experience high levels of stress."

*Paragraph 3 (Gap):*
"However, the specific mechanisms underlying these effects remain unclear, and more research is needed to understand how mindfulness exerts its effects on anxiety in different populations."

**Improvement**: Now each paragraph has one job. But still has Meso and Micro problems.

---

**AFTER MESO PASS**: Add topic sentences, fix Old→New flow

*Paragraph 1 (with topic sentence + Old→New):*
"**Mindfulness-based interventions reduce anxiety across multiple populations.** Meta-analyses show moderate-to-large effects (d=0.63, Hofmann et al., 2010), with benefits for clinical and subclinical anxiety. These effects persist at 6-month follow-up (Khoury et al., 2013), suggesting mindfulness produces durable anxiety reduction."

*Paragraph 2 (with topic sentence + Old→New):*
"**College students are a critical population for anxiety intervention research.** This population experiences high stress (42% report severe anxiety; ACHA, 2019), but existing interventions show limited efficacy in college settings. Mindfulness-based programs are increasingly offered on campuses, yet evidence for their effectiveness in this specific population remains mixed."

*Paragraph 3 (with topic sentence + Old→New):*
"**Despite promising effects, mechanisms of mindfulness-based anxiety reduction remain unclear.** Most studies test whether mindfulness works, not how it works. Understanding mechanisms is critical for optimizing interventions and predicting who benefits most."

**Improvement**: Now has clear topic sentences, smooth Old→New flow. But still has Micro problems (hedging, nominalization).

---

**AFTER MICRO PASS**: Remove hedging, fix nominalization, activate verbs

*Paragraph 1 (final version):*
"**Mindfulness-based interventions reduce anxiety across multiple populations.** Meta-analyses show moderate-to-large effects (d=0.63, Hofmann et al., 2010), with benefits for clinical and subclinical anxiety. These effects persist at 6-month follow-up (Khoury et al., 2013), demonstrating durable anxiety reduction."
- Removed hedging: "may be beneficial" → "reduce anxiety"
- Active verb: "suggesting" → "demonstrating"

*Paragraph 2 (final version):*
"**College students are a critical population for anxiety intervention research.** Forty-two percent report severe anxiety (ACHA, 2019), yet existing interventions show limited efficacy in college settings. Campuses increasingly offer mindfulness-based programs, but evidence for their effectiveness in this population remains mixed."
- Removed vague: "This population experiences high stress" → "42% report severe anxiety" (specific data)
- Active verb: "are offered" → "offer" (campuses as subject)

*Paragraph 3 (final version):*
"**Despite promising effects, mindfulness mechanisms remain unclear.** Most studies test whether mindfulness works, not how it works. Understanding mechanisms is critical for optimizing interventions and predicting who benefits most."
- Removed nominalization: "mechanisms of mindfulness-based anxiety reduction" → "mindfulness mechanisms"
- Removed hedging: "more research is needed" → direct statement of what's unclear

---

**COMPARISON**:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Word count | 107 | 114 | +7 (added precision) |
| Hedging words | 5 | 1 | -80% |
| Nominalization | 4 | 0 | -100% |
| Paragraph jobs | 1 paragraph doing 3 jobs | 3 paragraphs, 1 job each | Clear structure |
| Topic sentences | 0 | 3 | +3 |
| Specific data | 0 | 2 (d=0.63, 42%) | Evidence-based |
| Clarity (1-10) | 4 | 9 | +5 points |

**Key Takeaway**: 3-Pass Revision transformed a weak, muddy paragraph into 3 crisp, evidence-based paragraphs with clear logic. This is the difference between rejection and acceptance.

---

## Assessment Rubric (for instructors)

| Criterion | Excellent (5) | Good (4) | Acceptable (3) | Weak (2) | Insufficient (1) |
|-----------|---------------|----------|----------------|----------|------------------|
| **Completion** | All 3 passes done with examples | 3 passes done, some examples | 2 passes done | 1 pass only | Minimal effort |
| **Specificity** | Exact quotes, before→after for all fixes | Most fixes have before→after | Some before→after | Vague fixes | No examples |
| **Improvement** | Scores increased 2+ points per pass | +1-2 points per pass | +0.5-1 point | No clear improvement | Scores decreased |
| **Understanding** | Explains WHY each fix matters | Explains some rationales | Minimal explanation | No rationale | Doesn't understand |
| **Independence** | Did all 3 passes without help | Needed minor help | Needed substantial help | Heavily assisted | Could not complete |

**Target**: Students score 4-5 (Good to Excellent) on all criteria, showing mastery of hierarchical revision.

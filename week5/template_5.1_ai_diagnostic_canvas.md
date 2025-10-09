# Week 5 - Template 5.1: AI Diagnostic Canvas (3-Reviewer Simulation)

**Workshop Duration**: 25 minutes
**Objective**: Simulate peer review with 3 AI reviewers to identify critical issues before submission
**Canvas Size**: 3840×2160px (Figma collaborative canvas)

---

## Canvas Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ LEFT PANEL (800×2160px) - REVIEWER ROLES & CRITERIA                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ 🔬 REVIEWER 1: Methodological Rigor Specialist                             │
│ 📚 REVIEWER 2: Theoretical Contribution Expert                             │
│ 🤝 REVIEWER 3: Supportive but Critical Friend                              │
│                                                                              │
│ [Detailed evaluation criteria for each reviewer]                            │
│ [Decision categories: Accept/Minor/Major/Reject]                            │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ RIGHT PANEL (3040×2160px) - STUDENT EXPERIMENT ZONES                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ZONE A (1200×700px)     ZONE B (1200×700px)     ZONE C (1200×700px)      │
│  ┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐      │
│  │ REVIEWER 1       │   │ REVIEWER 2       │   │ REVIEWER 3       │      │
│  │ Input-Prompt-    │   │ Input-Prompt-    │   │ Input-Prompt-    │      │
│  │ Output           │   │ Output           │   │ Output           │      │
│  │ Student fills    │   │ Student fills    │   │ Student fills    │      │
│  │ with AI results  │   │ with AI results  │   │ with AI results  │      │
│  └──────────────────┘   └──────────────────┘   └──────────────────┘      │
│                                                                              │
│  SYNTHESIS ZONE (3040×700px)                                                │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │ COMBINED FEEDBACK & ACTION PLAN                                    │    │
│  │ Student synthesizes all 3 reviews + creates priority list          │    │
│  │ Critical Issues (must fix) / Important Issues / Minor Issues        │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## LEFT PANEL: Reviewer Roles & Evaluation Criteria

### 🔬 REVIEWER 1: Methodological Rigor Specialist

**Role**: Methodological police - catches technical flaws that lead to rejection

**Focus Areas**:
- Reproducibility: Can another researcher replicate this?
- Controls: Are alternative explanations ruled out?
- Sample size: Is statistical power adequate?
- Statistical rigor: Are analyses appropriate and transparent?
- Validation: Are measures reliable and valid?

**Evaluation Criteria** (1-10 scale for each):

| Criterion | Score | Description |
|-----------|-------|-------------|
| Reproducibility | /10 | All details for replication present? |
| Control strategy | /10 | Alternative explanations excluded? |
| Sample size/power | /10 | Justified by power analysis? |
| Statistical rigor | /10 | Appropriate methods + assumptions checked? |
| Transparency | /10 | All results reported (no cherry-picking)? |

**Decision Categories**:
- ✅ **Accept**: All scores ≥8, no critical flaws
- 📝 **Minor Revision**: Scores 6-7, fixable issues
- 🔧 **Major Revision**: Scores 4-5, serious flaws but salvageable
- ❌ **Reject**: Any score ≤3, fatal methodological problems

**Key Questions to Ask**:
1. Can I replicate this study with the information provided?
2. Are there confounds that weren't controlled?
3. Is the sample size justified or arbitrary?
4. Were statistical assumptions checked?
5. Are effect sizes and CIs reported for all tests?

---

### 📚 REVIEWER 2: Theoretical Contribution Expert

**Role**: Novelty gatekeeper - evaluates if this advances the field

**Focus Areas**:
- Gap quality: Conceptual or merely incremental?
- Novelty: Truly new or predictable extension?
- Theory advancement: Does this change how we think?
- Broader impact: Will the field care?
- Literature integration: Proper context and connection?

**Evaluation Criteria** (1-10 scale for each):

| Criterion | Score | Description |
|-----------|-------|-------------|
| Gap quality | /10 | Conceptual/Mechanistic vs Incremental? |
| Novelty | /10 | Surprising findings or expected? |
| Theory advancement | /10 | Challenges/extends existing theory? |
| Broader impact | /10 | Multi-subdiscipline interest? |
| Literature integration | /10 | Properly situated in context? |

**Decision Categories**:
- ✅ **Accept**: Gap score ≥8, Novelty ≥8, Impact ≥7
- 📝 **Minor Revision**: Gap ≥7, needs better framing
- 🔧 **Major Revision**: Gap 5-6, incremental contribution
- ❌ **Reject**: Gap ≤4, too incremental for top-tier journal

**Key Questions to Ask**:
1. Is this a conceptual gap or population/method substitution?
2. Are the findings surprising or predictable from existing theory?
3. Does this change how we think about the phenomenon?
4. Will researchers outside this narrow area care?
5. Is the literature review comprehensive and fair?

---

### 🤝 REVIEWER 3: Supportive but Critical Friend

**Role**: Integrative synthesizer - balances criticism with constructive guidance

**Focus Areas**:
- Validate Reviewer 1 & 2's concerns
- Identify paper's greatest strength
- Identify paper's greatest weakness
- Assess if issues are fixable
- Provide constructive path forward

**Evaluation Framework**:

**Agree with Reviewer 1 (Methodological)?**
- ✅ Fully agree: [explain why methodological concerns are valid]
- ⚖️ Partially agree: [some concerns valid, others overstated]
- ❌ Disagree: [methodological rigor is actually sufficient]

**Agree with Reviewer 2 (Theoretical)?**
- ✅ Fully agree: [explain why novelty/impact concerns are valid]
- ⚖️ Partially agree: [some concerns valid, but contribution exists]
- ❌ Disagree: [theoretical contribution is substantial]

**Paper's Greatest Strength** (pick one):
- Novel conceptual framework
- Exceptionally rigorous methods
- High impact/broad significance
- Beautiful integration of literatures
- Clear writing and presentation

**Paper's Greatest Weakness** (pick one):
- Insufficient novelty
- Methodological flaws
- Overclaiming beyond data
- Poor literature integration
- Unclear writing/logic

**Decision Categories**:
- ✅ **Accept**: Strengths >> Weaknesses, ready to publish
- 📝 **Minor Revision**: Strong paper, needs polishing
- 🔧 **Major Revision**: Has potential, needs substantial work
- ❌ **Reject**: Fatal flaws or insufficient contribution

**Final Recommendation Template**:
```
DECISION: [Accept/Minor/Major/Reject]

RATIONALE:
- Reviewer 1's methodological concerns: [Valid/Partially valid/Overstated]
- Reviewer 2's theoretical concerns: [Valid/Partially valid/Overstated]
- Overall assessment: [Synthesis]

PATH FORWARD:
[If not Accept, provide 3-5 concrete actionable suggestions]
1. ___
2. ___
3. ___
```

---

## RIGHT PANEL: Student Experiment Zones

### Activity 1: Three Reviewer Simulations (15 minutes total)

**Instructions for Students**:
1. **Select your paper sections** for each reviewer:
   - Reviewer 1: Methods + Results
   - Reviewer 2: Introduction + Discussion
   - Reviewer 3: Full paper or key excerpts
2. **Use the AI prompts** (provided below) for each reviewer
3. **Record results** in your designated zone (A/B/C)
4. **Document**: Input (paper section) + Prompt (used) + Output (AI feedback)

---

### ZONE A: Reviewer 1 Simulation (Methodological Rigor)

**Prompt Template** (copy to ChatGPT/Claude):

```
You are Reviewer 1 for Nature Neuroscience/Psychological Science - a methodological rigor specialist.

Evaluate the following paper sections for submission to a top-tier journal.

PAPER SECTIONS:
[Paste your Methods section]
[Paste your Results section]

EVALUATION TASK:
Rate each criterion (1-10) and explain your score:

1. REPRODUCIBILITY (1-10): Can another researcher replicate this study?
   - Are participants described in detail (recruitment, demographics, inclusion/exclusion)?
   - Are materials specified (measures, stimuli, equipment with versions/models)?
   - Are procedures step-by-step clear?
   - Are all parameters reported (timing, trials, counterbalancing)?
   - Are software and analysis scripts detailed?
   Score: /10
   Explanation: ___

2. CONTROL STRATEGY (1-10): Are alternative explanations ruled out?
   - Are critical confounds identified and controlled?
   - Is the control condition appropriate (not just "no treatment")?
   - Are experimenter effects minimized (blinding)?
   Score: /10
   Explanation: ___

3. SAMPLE SIZE/POWER (1-10): Is the sample justified?
   - Is there a power analysis (a priori or meta-analytic)?
   - Is the target effect size reasonable?
   - Is the achieved power ≥0.80?
   Score: /10
   Explanation: ___

4. STATISTICAL RIGOR (1-10): Are analyses appropriate?
   - Are statistical tests appropriate for the design?
   - Are assumptions checked (normality, homogeneity)?
   - Are multiple comparisons corrected?
   - Are effect sizes + 95% CIs reported for all tests?
   Score: /10
   Explanation: ___

5. TRANSPARENCY (1-10): Are all results reported?
   - Are all tested hypotheses reported (not selective)?
   - Are non-significant results included?
   - Are exclusions/outliers justified?
   Score: /10
   Explanation: ___

OVERALL SCORES:
- Average: /10
- Strongest aspect: ___
- Weakest aspect: ___

DECISION: [Accept / Minor Revision / Major Revision / Reject]

CRITICAL ISSUES (must fix for acceptance):
1. ___
2. ___
3. ___

IMPORTANT ISSUES (should fix):
1. ___
2. ___
```

**Student Recording Template** (in Zone A):

```
=== REVIEWER 1 SIMULATION ===

📥 INPUT (what I submitted):
- Methods: [1-2 sentence summary]
- Results: [1-2 sentence summary]

🤖 PROMPT USED:
- Reviewer 1 methodological rigor evaluation

📊 AI OUTPUT (scores):
- Reproducibility: ___/10
- Control strategy: ___/10
- Sample size/power: ___/10
- Statistical rigor: ___/10
- Transparency: ___/10
- AVERAGE: ___/10

✅/❌ DECISION: [Accept/Minor/Major/Reject]

🚨 CRITICAL ISSUES:
1. ___
2. ___
3. ___

⚠️ IMPORTANT ISSUES:
1. ___
2. ___

💡 MY REACTION:
- Agree? [Yes/Partially/No - explain]
- Fixable? [Yes/No - explain]
- Priority level: [High/Medium/Low]
```

---

### ZONE B: Reviewer 2 Simulation (Theoretical Contribution)

**Prompt Template** (copy to ChatGPT/Claude):

```
You are Reviewer 2 for Nature/Science - a theoretical contribution expert who evaluates novelty and impact.

Evaluate the following paper sections for submission to a top-tier journal.

PAPER SECTIONS:
[Paste your Introduction section]
[Paste your Discussion section]

EVALUATION TASK:
Rate each criterion (1-10) and explain your score:

1. GAP QUALITY (1-10): Is this a conceptual gap or merely incremental?
   - Conceptual gap = new theory/mechanism/framework (score 8-10)
   - Mechanistic gap = new causal pathway (score 7-9)
   - Incremental gap = new population/method only (score 1-4)
   - Is the gap clearly articulated?
   - Does it matter to the broader field?
   Score: /10
   Type: [Conceptual/Mechanistic/Incremental]
   Explanation: ___

2. NOVELTY (1-10): Are the findings surprising?
   - Could findings be predicted from existing theory? (if yes, lower score)
   - Do findings challenge current assumptions?
   - Are findings unexpected or counterintuitive?
   Score: /10
   Explanation: ___

3. THEORY ADVANCEMENT (1-10): Does this change how we think?
   - Does it extend existing theory in meaningful ways?
   - Does it propose a new framework/mechanism?
   - Does it reconcile contradictory findings?
   Score: /10
   Explanation: ___

4. BROADER IMPACT (1-10): Will the field care?
   - Does it interest researchers beyond this narrow area?
   - Does it have cross-disciplinary relevance?
   - Does it have applied/translational potential?
   Score: /10
   Explanation: ___

5. LITERATURE INTEGRATION (1-10): Is the context appropriate?
   - Is the review comprehensive (not cherry-picked)?
   - Are connections to related work clear?
   - Are limitations of past work fairly presented?
   Score: /10
   Explanation: ___

OVERALL SCORES:
- Average: /10
- Strongest aspect: ___
- Weakest aspect: ___

NOVELTY vs INCREMENTALISM:
- This work is: [Highly novel / Moderate novelty / Incremental / Very incremental]
- Justification: ___

DECISION: [Accept / Minor Revision / Major Revision / Reject]

KEY CONCERNS:
1. ___
2. ___
3. ___

SUGGESTIONS FOR IMPROVEMENT:
1. ___
2. ___
```

**Student Recording Template** (in Zone B):

```
=== REVIEWER 2 SIMULATION ===

📥 INPUT (what I submitted):
- Introduction: [1-2 sentence summary]
- Discussion: [1-2 sentence summary]

🤖 PROMPT USED:
- Reviewer 2 theoretical contribution evaluation

📊 AI OUTPUT (scores):
- Gap quality: ___/10 [Type: ___]
- Novelty: ___/10
- Theory advancement: ___/10
- Broader impact: ___/10
- Literature integration: ___/10
- AVERAGE: ___/10

🎯 NOVELTY ASSESSMENT:
- Classification: [Highly novel/Moderate/Incremental/Very incremental]
- Justification: ___

✅/❌ DECISION: [Accept/Minor/Major/Reject]

🚨 KEY CONCERNS:
1. ___
2. ___
3. ___

💡 SUGGESTIONS:
1. ___
2. ___

💡 MY REACTION:
- Agree with novelty assessment? [Yes/No - explain]
- How to strengthen theoretical contribution: ___
```

---

### ZONE C: Reviewer 3 Simulation (Supportive but Critical Friend)

**Prompt Template** (copy to ChatGPT/Claude):

```
You are Reviewer 3 for a top-tier journal - a supportive but critical friend who synthesizes the other reviewers' feedback and provides balanced, constructive guidance.

You have read Reviewer 1's methodological concerns and Reviewer 2's theoretical concerns (student: paste the AI outputs from Zones A and B here).

PAPER:
[Paste full paper or key sections: Title, Abstract, Introduction conclusion, Methods summary, Results summary, Discussion conclusion]

EVALUATION TASK:

1. VALIDATE REVIEWER 1's METHODOLOGICAL CONCERNS:
   Do you agree with Reviewer 1's assessment?
   - ✅ Fully agree: [explain why methodological concerns are valid]
   - ⚖️ Partially agree: [which concerns are valid, which are overstated]
   - ❌ Disagree: [explain why methodological rigor is actually sufficient]

2. VALIDATE REVIEWER 2's THEORETICAL CONCERNS:
   Do you agree with Reviewer 2's assessment?
   - ✅ Fully agree: [explain why novelty/impact concerns are valid]
   - ⚖️ Partially agree: [some concerns valid, but contribution exists]
   - ❌ Disagree: [explain why theoretical contribution is substantial]

3. PAPER'S GREATEST STRENGTH (pick ONE):
   - [ ] Novel conceptual framework
   - [ ] Exceptionally rigorous methods
   - [ ] High impact/broad significance
   - [ ] Beautiful integration of literatures
   - [ ] Clear writing and presentation
   Explanation: ___

4. PAPER'S GREATEST WEAKNESS (pick ONE):
   - [ ] Insufficient novelty (too incremental)
   - [ ] Methodological flaws (not rigorous enough)
   - [ ] Overclaiming (claims > evidence)
   - [ ] Poor literature integration
   - [ ] Unclear writing/logic
   Explanation: ___

5. ARE THE ISSUES FIXABLE?
   - Major issues: [Yes/No - explain]
   - Timeline: [Minor revision = 1-2 weeks, Major = 2-3 months]

DECISION: [Accept / Minor Revision / Major Revision / Reject]

RATIONALE:
___

PATH FORWARD (3-5 concrete, actionable suggestions):
1. ___
2. ___
3. ___
4. ___
5. ___
```

**Student Recording Template** (in Zone C):

```
=== REVIEWER 3 SIMULATION ===

📥 INPUT (what I submitted):
- Reviewer 1 feedback: [summary]
- Reviewer 2 feedback: [summary]
- Full paper key sections

🤖 PROMPT USED:
- Reviewer 3 supportive but critical friend

📊 AI OUTPUT:

🔬 RE: REVIEWER 1 (Methodological):
- Agreement level: [Fully/Partially/Disagree]
- Explanation: ___

📚 RE: REVIEWER 2 (Theoretical):
- Agreement level: [Fully/Partially/Disagree]
- Explanation: ___

💪 GREATEST STRENGTH: ___
⚠️ GREATEST WEAKNESS: ___

🔧 FIXABLE?
- Issues fixable: [Yes/No]
- Estimated timeline: [1-2 weeks / 2-3 months]

✅/❌ DECISION: [Accept/Minor/Major/Reject]

📝 RATIONALE: ___

🛠️ PATH FORWARD:
1. ___
2. ___
3. ___
4. ___
5. ___
```

---

## SYNTHESIS ZONE: Combined Feedback & Action Plan (10 minutes)

**Instructions for Students**:
1. Review all 3 AI reviewer reports
2. Identify common themes across reviewers
3. Prioritize issues by severity and fixability
4. Create concrete action plan

**Synthesis Template**:

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    3-REVIEWER SYNTHESIS                                ║
╚═══════════════════════════════════════════════════════════════════════╝

📊 DECISION SUMMARY:
┌─────────────┬──────────────────────────────────────────────────────┐
│ Reviewer 1  │ [Accept / Minor / Major / Reject]                     │
│ Reviewer 2  │ [Accept / Minor / Major / Reject]                     │
│ Reviewer 3  │ [Accept / Minor / Major / Reject]                     │
│ CONSENSUS   │ [Majority decision]                                   │
└─────────────┴──────────────────────────────────────────────────────┘

🎯 COMMON THEMES (mentioned by 2+ reviewers):
1. ___
2. ___
3. ___

🚨 CRITICAL ISSUES (must fix or paper will be rejected):
┌────┬─────────────────────────┬──────────────┬─────────────────────┐
│ #  │ Issue                   │ Which Rev?   │ Estimated Time      │
├────┼─────────────────────────┼──────────────┼─────────────────────┤
│ 1  │ ___                     │ [R1/R2/R3]   │ [hours/days]        │
│ 2  │ ___                     │ [R1/R2/R3]   │ [hours/days]        │
│ 3  │ ___                     │ [R1/R2/R3]   │ [hours/days]        │
└────┴─────────────────────────┴──────────────┴─────────────────────┘

⚠️ IMPORTANT ISSUES (should fix for stronger paper):
┌────┬─────────────────────────┬──────────────┬─────────────────────┐
│ #  │ Issue                   │ Which Rev?   │ Estimated Time      │
├────┼─────────────────────────┼──────────────┼─────────────────────┤
│ 1  │ ___                     │ [R1/R2/R3]   │ [hours/days]        │
│ 2  │ ___                     │ [R1/R2/R3]   │ [hours/days]        │
│ 3  │ ___                     │ [R1/R2/R3]   │ [hours/days]        │
└────┴─────────────────────────┴──────────────┴─────────────────────┘

✅ MINOR ISSUES (nice to fix if time permits):
1. ___
2. ___
3. ___

📅 ACTION PLAN (prioritized):
┌──────────┬─────────────────────────┬─────────────┬──────────────┐
│ Priority │ Task                    │ Deadline    │ Status       │
├──────────┼─────────────────────────┼─────────────┼──────────────┤
│ 1 (HIGH) │ ___                     │ [today]     │ [ ] Not done │
│ 2 (HIGH) │ ___                     │ [tomorrow]  │ [ ] Not done │
│ 3 (MED)  │ ___                     │ [this week] │ [ ] Not done │
│ 4 (MED)  │ ___                     │ [this week] │ [ ] Not done │
│ 5 (LOW)  │ ___                     │ [optional]  │ [ ] Not done │
└──────────┴─────────────────────────┴─────────────┴──────────────┘

⏱️ TOTAL ESTIMATED TIME: ___ hours/days

🎯 EXPECTED OUTCOME AFTER REVISIONS:
- Current likelihood: [Accept / Minor / Major / Reject]
- After fixes: [Accept / Minor / Major / Reject]
- Justification: ___

💡 NEXT IMMEDIATE STEP:
[What will you do in the next 30 minutes?]
___
```

---

## Workshop Timeline (25 minutes)

### Phase 1: Individual AI Simulations (15 min)

**Minutes 1-5**: Reviewer 1 (Methodological)
- Copy paper sections (Methods + Results)
- Run AI prompt
- Record scores and critical issues in Zone A

**Minutes 6-10**: Reviewer 2 (Theoretical)
- Copy paper sections (Introduction + Discussion)
- Run AI prompt
- Record novelty assessment and concerns in Zone B

**Minutes 11-15**: Reviewer 3 (Synthesis)
- Copy Reviewer 1 & 2 outputs + full paper
- Run AI prompt
- Record final decision and path forward in Zone C

### Phase 2: Synthesis & Action Planning (10 min)

**Minutes 16-20**: Individual synthesis
- Identify common themes across 3 reviews
- Categorize issues (Critical/Important/Minor)
- Estimate time needed for each fix

**Minutes 21-25**: Peer sharing
- 3-4 students volunteer to share their synthesis
- What were the harshest criticisms?
- What were surprising strengths?
- Class discussion: Are AI reviewers harsher/easier than real reviewers?

---

## Success Criteria

**For Students**:
- ✅ Completed all 3 reviewer simulations
- ✅ Identified at least 3 critical issues
- ✅ Created prioritized action plan
- ✅ Realistic time estimates for fixes
- ✅ Clear next immediate step

**For Instructors** (facilitation checklist):
- ✅ All students connected to Figma and accessing prompts
- ✅ Monitor progress in Zones A/B/C (intervene if stuck)
- ✅ Highlight exemplar syntheses with @mentions
- ✅ Facilitate peer discussion about harsh vs fair feedback
- ✅ Collect common critical issues for class patterns

---

## Common Pitfalls & Solutions

### Pitfall 1: AI too harsh or too lenient
**Symptom**: All scores <5 or all scores >8
**Solution**: Revise prompt with comparative language:
```
"Compare this Methods section to typical Nature Neuroscience standards.
Is it above average (8-10), average (6-7), or below average (1-5)?"
```

### Pitfall 2: Generic feedback without specifics
**Symptom**: AI says "improve clarity" without examples
**Solution**: Add to prompt:
```
"For each issue, provide:
- Exact location (section, paragraph)
- Specific problem (quote the problematic text)
- Concrete fix (before → after example)"
```

### Pitfall 3: Student overwhelmed by too many issues
**Symptom**: 20+ issues, student doesn't know where to start
**Solution**: Instructor helps prioritize:
- Pick top 3 critical issues (those that lead to rejection)
- Ignore minor issues for now
- Focus on fixable problems (ignore "run another study" suggestions)

### Pitfall 4: AI suggests unrealistic fixes
**Symptom**: "Conduct a new study with N=500" when student has N=60
**Solution**: Reframe prompt:
```
"Given the existing data (N=60), how can I maximize rigor and transparency?
What analyses or reporting can I improve WITHOUT collecting new data?"
```

---

## Instructor Facilitation Notes

### Pre-Class Setup (10 min before class):
1. **Copy Figma template** for Week 5 AI Diagnostic Canvas
2. **Adjust student zones** (typically 6-12 zones for class size)
3. **Test AI prompts** yourself with a sample paper to ensure quality
4. **Prepare example** of good vs bad synthesis for demonstration

### During Class:

**Minutes 1-5**: Quick demo
- Show how to copy paper section → paste into AI prompt → record output
- Demonstrate one Reviewer 1 simulation live
- Answer questions about prompt usage

**Minutes 6-15**: Monitor & assist
- Watch student zones in real-time
- Identify students stuck (not filling out zones)
- Provide hints via Figma comments: "@StudentA - try adding your power analysis section to help AI evaluate sample size"
- React to good outputs with 👍 emoji

**Minutes 16-20**: Highlight exemplars
- @mention students with particularly insightful syntheses
- Ask 2-3 students to share screen and walk through their synthesis
- Facilitate discussion: "Class, do you agree with this priority ranking?"

**Minutes 21-25**: Wrap-up
- Quick poll: "How many got Accept vs Revision vs Reject?"
- Pattern identification: "Most common critical issue in this class was ___"
- Transition: "Next activity is 3-Pass Revision to fix these issues systematically"

### Post-Class:
- **Export Figma to PDF** for student records
- **Identify class-wide patterns** (e.g., 80% had power analysis issues)
- **Update Recipe Library** with best reviewer prompts from students

---

## Example Student Work

### Exemplar: Student Zone A (Reviewer 1) Output

```
=== REVIEWER 1 SIMULATION ===

📥 INPUT:
- Methods: Sleep deprivation + memory consolidation (TMR during nap)
- Results: Selective consolidation for high-utility items

🤖 PROMPT USED: Reviewer 1 methodological rigor

📊 AI OUTPUT:
- Reproducibility: 9/10 (excellent detail on TMR protocol)
- Control strategy: 7/10 (good control group, but no sham TMR condition)
- Sample size/power: 8/10 (N=60, power=.85 for d=0.65)
- Statistical rigor: 9/10 (mixed-effects models, assumptions checked)
- Transparency: 8/10 (reported all outcomes, but didn't pre-register)
- AVERAGE: 8.2/10

✅ DECISION: Minor Revision

🚨 CRITICAL ISSUES:
1. Add sham TMR condition to rule out auditory stimulation effects
2. Clarify blinding procedures (were scorers blind to condition?)

⚠️ IMPORTANT ISSUES:
1. Consider pre-registering replication study
2. Add robustness checks (remove outliers, re-run)

💡 MY REACTION:
- Agree? YES - the sham TMR issue is real, I should address it
- Fixable? YES - can add sham analysis post-hoc from pilot data
- Priority: HIGH - will add to Discussion as limitation + future direction
```

**Why This Is Good**:
- ✅ Specific scores with rationale
- ✅ Clear critical vs important distinction
- ✅ Student agrees and has a fix plan
- ✅ Realistic about what's possible (can't rerun study, but can address in Discussion)

---

### Exemplar: Synthesis Zone Output

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    3-REVIEWER SYNTHESIS                                ║
╚═══════════════════════════════════════════════════════════════════════╝

📊 DECISION SUMMARY:
┌─────────────┬──────────────────────────────────────────────────────┐
│ Reviewer 1  │ Minor Revision (8.2/10 methodological)               │
│ Reviewer 2  │ Minor Revision (7.8/10 theoretical, good gap)        │
│ Reviewer 3  │ Minor Revision (strengths > weaknesses, fixable)     │
│ CONSENSUS   │ Minor Revision - strong paper, needs polishing       │
└─────────────┴──────────────────────────────────────────────────────┘

🎯 COMMON THEMES (mentioned by 2+ reviewers):
1. Sham TMR control missing (R1, R3)
2. Broader impact could be clearer (R2, R3)
3. Discussion limitations section too brief (R1, R2)

🚨 CRITICAL ISSUES:
┌────┬────────────────────────────────────┬──────────┬────────────┐
│ 1  │ Address sham TMR limitation        │ R1, R3   │ 2 hours    │
│ 2  │ Strengthen broader impact framing  │ R2, R3   │ 3 hours    │
└────┴────────────────────────────────────┴──────────┴────────────┘

⚠️ IMPORTANT ISSUES:
┌────┬────────────────────────────────────┬──────────┬────────────┐
│ 1  │ Expand limitations section         │ R1, R2   │ 2 hours    │
│ 2  │ Add robustness checks to Results   │ R1       │ 4 hours    │
│ 3  │ Improve Figure 2 clarity           │ R3       │ 2 hours    │
└────┴────────────────────────────────────┴──────────┴────────────┘

📅 ACTION PLAN:
┌──────────┬───────────────────────────────────┬─────────────┬──────┐
│ 1 (HIGH) │ Add sham TMR paragraph to Disc    │ Today PM    │ [ ]  │
│ 2 (HIGH) │ Rewrite Abstract broader impact   │ Tomorrow AM │ [ ]  │
│ 3 (MED)  │ Run robustness checks, update Res │ This week   │ [ ]  │
│ 4 (MED)  │ Expand limitations (3→5 items)    │ This week   │ [ ]  │
│ 5 (LOW)  │ Redesign Figure 2                 │ Optional    │ [ ]  │
└──────────┴───────────────────────────────────┴─────────────┴──────┘

⏱️ TOTAL ESTIMATED TIME: 13 hours (doable this week)

🎯 EXPECTED OUTCOME:
- Current: Minor Revision (all 3 reviewers)
- After fixes: Accept (addressed all critical concerns)
- Justification: No fatal flaws, just missing pieces that are easy to add

💡 NEXT IMMEDIATE STEP:
Write sham TMR limitation paragraph in Discussion (30 min task)
```

**Why This Is Good**:
- ✅ Clear consensus across reviewers (all said Minor Revision)
- ✅ Identified common themes (not isolated complaints)
- ✅ Realistic timeline (13 hours total)
- ✅ Prioritized by impact (HIGH = affects decision, MED = improves paper, LOW = nice-to-have)
- ✅ Concrete next step (not vague "improve paper")

---

## AI Prompt Variations for Different Journals

### For Nature/Science (strictest standards):
```
"You are a Reviewer 1 for Nature/Science - among the most selective journals
(acceptance rate <5%). Your standards are exceptionally high. Only groundbreaking
work with flawless methods should be Accepted. Be critical but fair."
```

### For Psychological Science (rigorous but field-specific):
```
"You are a Reviewer 1 for Psychological Science - a top psychology journal
emphasizing methodological rigor and replication. Focus on reproducibility,
power, and transparency. Accept rate ~10%."
```

### For specialized journals (JCCP, Cognition, etc.):
```
"You are a Reviewer 1 for [Journal Name] - a top [subfield] journal.
Evaluate with standards appropriate for this field (acceptance rate ~15-20%).
Be rigorous but recognize disciplinary norms."
```

**Instructor Tip**: Have students specify their target journal in the prompt for calibrated feedback.

---

## Integration with 3-Pass Revision (Next Activity)

**Handoff to Template 5.2**:

After completing AI Diagnostic Canvas, students will have:
- ✅ Critical issues list (from 3 reviewers)
- ✅ Prioritized action plan
- ✅ Specific sections needing revision

This feeds directly into **3-Pass Revision Worksheet** (Template 5.2):
- **1st Pass (Macro)**: Fix structural issues flagged by Reviewer 3
- **2nd Pass (Meso)**: Fix section/paragraph issues flagged by Reviewers 1 & 2
- **3rd Pass (Micro)**: Fix sentence-level issues flagged by all reviewers

**Instructor Transition Script**:
> "Great! Now you know what to fix. The 3-Pass Revision strategy will help you fix these issues systematically. We'll start with big structural problems (Macro), then section problems (Meso), then sentence problems (Micro). This prevents you from polishing sentences in a paragraph you might delete later."

---

## Assessment Rubric (for instructors evaluating student work)

| Criterion | Excellent (5) | Good (4) | Acceptable (3) | Weak (2) | Insufficient (1) |
|-----------|---------------|----------|----------------|----------|------------------|
| **Completeness** | All 3 reviewers + synthesis done | 3 reviewers done, synthesis partial | 2 reviewers + partial synthesis | 1 reviewer only | None or minimal |
| **Specificity** | Exact issues with locations + quotes | Issues identified but general | Vague issues without examples | Too general to act on | Not specific at all |
| **Prioritization** | Clear Critical/Important/Minor + rationale | Good separation but weak rationale | Some prioritization, no rationale | No clear priorities | Random listing |
| **Actionability** | Concrete next steps with timeline | Next steps clear but no timeline | Vague next steps | Not actionable | No plan |
| **Realism** | Time estimates realistic, fixes feasible | Mostly realistic, minor overestimation | Some unrealistic fixes | Mostly unrealistic | Completely unrealistic |

**Target**: Students should score 4-5 (Good to Excellent) on all criteria.

---

## Troubleshooting

### Problem: Student's paper gets all "Reject" decisions
**Diagnosis**: Either paper has fundamental flaws OR AI is being too harsh
**Solution**:
1. Review the AI output - are criticisms valid?
2. If valid: Student needs major rethinking (consider switching to different research question)
3. If too harsh: Revise prompt to be more balanced, ask for "path to acceptance"

### Problem: Student's paper gets all "Accept" decisions
**Diagnosis**: Either paper is truly excellent OR AI is being too lenient
**Solution**:
1. Have student run Reviewer prompts again with stricter language: "Be hypercritical"
2. Instructor spot-check: Ask student to share paper, verify if it's really Accept-level
3. If truly excellent: Challenge student to aim for even higher-tier journal

### Problem: AI gives contradictory feedback (R1 says good, R2 says bad on same issue)
**Diagnosis**: Different reviewers focus on different aspects (this is realistic!)
**Solution**:
1. Teach student this is normal - real peer review also has contradictions
2. Use Reviewer 3 to arbitrate the disagreement
3. Student judgment call: Which concern is more valid for target journal?

### Problem: Student stuck on "what section to paste" for Reviewer 1
**Diagnosis**: Unclear instructions or student hasn't finished writing Methods/Results
**Solution**:
1. Provide clear guidance: "For Reviewer 1, paste your entire Methods section + Results section"
2. If sections incomplete: "Use what you have - feedback will help you complete it"
3. Minimum viable input: At least have Methods procedure + Results main analysis

---

## Pedagogical Rationale

### Why 3 Reviewers?
- **Real peer review uses 2-3 reviewers** - this simulates actual process
- **Triangulation** - convergent criticism is more credible than single opinion
- **Balanced feedback** - Reviewer 3 prevents overly harsh or lenient judgments

### Why AI Simulation Before Human Peer Review?
- **Immediate feedback** - no waiting for human reviewers
- **Unlimited iterations** - students can revise and re-simulate
- **Objective** - AI won't be influenced by personal relationships or fatigue
- **Prepares for real feedback** - students learn to handle criticism constructively

### Learning Outcomes:
1. **Self-assessment skill** - ability to see your work through critical lens
2. **Feedback integration** - synthesizing multiple perspectives
3. **Prioritization** - distinguishing critical from minor issues
4. **Action planning** - creating realistic improvement roadmap
5. **Resilience** - handling criticism without defensiveness

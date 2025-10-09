# Example 4.1: Bad Methods Section (Missing Reproducibility)

**Purpose**: Show critical reproducibility gaps that lead to rejection

**Use in Workshop**: Model for Template 4.1 (Bulletproofing Audit) and Template 4.3 (Reproducibility Checklist)

---

## Research Topic

**Domain**: Social Psychology - Emotion Regulation and Well-Being
**Study Type**: Experimental intervention (cognitive reappraisal training)
**Inspired by**: Real psychology studies with common Methods section weaknesses

---

## Bad Methods Section (Original)

```
Participants

Eighty undergraduate students participated in the study for course credit.
They were randomly assigned to two groups: cognitive reappraisal training
(n=40) or control (n=40).

Materials and Procedure

Participants completed questionnaires measuring emotion regulation and
well-being. The training group received cognitive reappraisal training,
while the control group received no intervention. Sessions lasted
approximately 60 minutes. All participants completed post-intervention
assessments two weeks later.

Data Analysis

Data were analyzed using ANOVA to compare groups on emotion regulation
and well-being scores. Statistical significance was set at p < .05.
```

---

## Reproducibility Checklist Score: 6/30 (20%) ❌ INSUFFICIENT

### Element-by-Element Analysis

#### ELEMENT 1: PARTICIPANTS - 1/5 ⚠️ INSUFFICIENT

**What's PRESENT**:
- ✅ Final N (80 total, 40 per group)
- ✅ Population (undergraduate students)
- ✅ Compensation (course credit)
- ✅ Random assignment mentioned

**What's MISSING** (🔴 CRITICAL GAPS):
- ❌ Recruitment method/source (which courses? how recruited?)
- ❌ Inclusion/exclusion criteria (any restrictions? screening?)
- ❌ Demographics (M age, SD, gender distribution, etc.)
- ❌ Excluded N + reasons (were any participants excluded? how many? why?)
- ❌ IRB approval statement

**Impact**: Reviewer cannot verify sample representativeness or reproduce recruitment

---

#### ELEMENT 2: MATERIALS - 0/5 ❌ MISSING

**What's PRESENT**:
- (None - only vague mentions)

**What's MISSING** (🔴 CRITICAL GAPS):
- ❌ Questionnaire names/sources (which specific scales?)
- ❌ Versions (many scales have multiple versions)
- ❌ Reliability data (Cronbach's α for current sample)
- ❌ Validity evidence (citations, normative data)
- ❌ Sample items or scale availability
- ❌ Number of items, response format, scoring

**Impact**: Impossible to obtain same measures → Cannot replicate

**Specific Problem**: "questionnaires measuring emotion regulation and well-being"
- Which emotion regulation scale? ERQ? DERS? CERQ? BRIEF-COPE?
- Which well-being scale? SWLS? WEMWBS? WHO-5? PERMA?

---

#### ELEMENT 3: PROCEDURE - 1/5 ⚠️ INSUFFICIENT

**What's PRESENT**:
- ✅ General flow (training → 2-week wait → post-assessment)
- ✅ Session duration (~60 minutes)
- ✅ Random assignment

**What's MISSING** (🔴 CRITICAL GAPS):
- ❌ Step-by-step protocol (What exactly happened in each session?)
- ❌ Training content details (What is "cognitive reappraisal training"? What techniques taught?)
- ❌ Number of training sessions (1 session? Multiple?)
- ❌ Instructions (verbatim or paraphrased - what were participants told?)
- ❌ Environment details (individual vs group? in-person vs online?)
- ❌ Trainer qualifications (who delivered training? What training did they have?)
- ❌ Control group activity (did they do ANYTHING for 60 minutes, or just "no intervention"?)

**Impact**: Cannot design comparable intervention → Cannot replicate training protocol

**Specific Problem**: "received cognitive reappraisal training"
- What techniques? Restructuring negative thoughts? Perspective-taking? Distancing?
- How delivered? Video? Live instructor? Written materials?
- How many sessions? 1 × 60min? 3 × 20min?

---

#### ELEMENT 4: PARAMETERS - 0/5 ❌ MISSING

**What's PRESENT**:
- (None - all parameters vague)

**What's MISSING** (🔴 CRITICAL GAPS):
- ❌ Training dosage (exactly how long was training component?)
- ❌ Assessment timing (exact 2-week interval, or variable?)
- ❌ Session structure (how were 60 minutes allocated?)
- ❌ Practice/homework assignments (did participants practice between sessions?)

**Impact**: Cannot standardize intervention dose → Results may depend on unmeasured parameters

---

#### ELEMENT 5: SOFTWARE/EQUIPMENT - 0/5 ❌ MISSING

**What's PRESENT**:
- (Nothing mentioned)

**What's MISSING** (🔴 CRITICAL GAPS):
- ❌ Survey software (Qualtrics? Google Forms? Paper-pencil?)
- ❌ Version/platform
- ❌ Training delivery platform (if online)
- ❌ Randomization method (software? Manual? Random number generator?)

**Impact**: Cannot reproduce data collection procedures

---

#### ELEMENT 6: DATA PROCESSING & ANALYSIS - 2/5 ⚠️ WEAK

**What's PRESENT**:
- ✅ Analysis type (ANOVA)
- ✅ Comparison structure (groups compared)
- ✅ Alpha level (p < .05)

**What's MISSING** (🔴 CRITICAL GAPS):
- ❌ Software/version (SPSS? R? What version?)
- ❌ Data preprocessing (outlier handling? missing data? transformations?)
- ❌ Exclusion criteria (were any participants excluded from analysis? Why?)
- ❌ Assumptions testing (normality? homogeneity of variance?)
- ❌ Effect size measure (eta-squared? Cohen's d?)
- ❌ Multiple comparison correction (if testing multiple outcomes)
- ❌ Analysis code availability

**Impact**: Cannot verify statistical choices or reproduce exact analysis

---

## AI Audit Results (Recipe #35: Reproducibility Vulnerability Scanner)

**Prompt**:
```
"다음 Methods 섹션을 읽고, 다른 연구자가 재현하려 할 때 막힐 수 있는 지점 10가지를 찾아줘:
[Methods text above]

각 지점에 대해:
1. 무엇이 불명확한가?
2. 어떤 정보가 추가로 필요한가?
3. Before → After 예시"
```

**AI Output**:

```
=== REPRODUCIBILITY VULNERABILITIES (10 Critical Points) ===

1. PARTICIPANT RECRUITMENT
   Problem: "Eighty undergraduate students participated" - from where? how recruited?
   Missing: Recruitment method, source (which university? which courses?)
   Fix:
     BEFORE: "Eighty undergraduate students participated"
     AFTER: "Eighty undergraduate students from Introductory Psychology courses
             at [University Name] were recruited via course announcement and
             SONA participant pool. Recruitment occurred October-November 2024."

2. INCLUSION/EXCLUSION CRITERIA
   Problem: No screening criteria mentioned
   Missing: Any participant requirements or restrictions?
   Fix:
     BEFORE: [Not mentioned]
     AFTER: "Inclusion criteria: (1) Native English speakers, (2) 18-25 years old,
             (3) no current psychotherapy or psychiatric medication. Exclusion
             criteria: (4) History of severe mental illness (schizophrenia, bipolar
             disorder) per self-report."

3. DEMOGRAPHICS
   Problem: No demographic information provided
   Missing: Age, gender, ethnicity, education level
   Fix:
     BEFORE: [Not mentioned]
     AFTER: "Participants (M_age = 19.2 years, SD = 1.4, range 18-24; 52 female,
             28 male; 45% White, 25% Asian, 15% Hispanic, 15% Other) were all
             undergraduate students in their first or second year."

4. EXCLUDED PARTICIPANTS
   Problem: No mention of exclusions or attrition
   Missing: Were any participants excluded? How many? Why?
   Fix:
     BEFORE: [Not mentioned]
     AFTER: "Five additional participants were recruited but excluded: 3 failed
             attention checks (<80% accuracy), 1 did not complete post-assessment,
             1 withdrew consent. Final N=80."

5. EMOTION REGULATION MEASURE
   Problem: "questionnaires measuring emotion regulation" - which one?
   Missing: Scale name, version, reliability, sample items
   Fix:
     BEFORE: "questionnaires measuring emotion regulation"
     AFTER: "Emotion Regulation Questionnaire (ERQ; Gross & John, 2003), 10-item
             version measuring Reappraisal (6 items) and Suppression (4 items).
             Responses: 1 (strongly disagree) to 7 (strongly agree). Cronbach's α
             in current sample: Reappraisal=.82, Suppression=.76 (normative α=.79,
             .73; Gross & John, 2003). Sample item: 'When I want to feel less
             negative emotion, I change what I'm thinking about.' Full scale
             available at https://osf.io/xyz123/"

6. WELL-BEING MEASURE
   Problem: "questionnaires measuring well-being" - which one?
   Missing: Scale name, version, reliability, sample items
   Fix:
     BEFORE: "questionnaires measuring well-being"
     AFTER: "Satisfaction With Life Scale (SWLS; Diener et al., 1985), 5-item
             measure. Responses: 1 (strongly disagree) to 7 (strongly agree),
             summed (range 5-35). Cronbach's α=.88 (current), .87 (normative;
             Diener et al., 1985). Sample item: 'In most ways my life is close to
             my ideal.'"

7. TRAINING PROTOCOL DETAILS
   Problem: "received cognitive reappraisal training" - what exactly?
   Missing: Training content, delivery method, structure
   Fix:
     BEFORE: "received cognitive reappraisal training"
     AFTER: "Training protocol: 60-minute single-session intervention delivered
             via video presentation (pre-recorded instructor). Content: (1) Psycho-
             education on emotion regulation (10min), (2) Cognitive reappraisal
             techniques demonstration (20min; e.g., reframing negative events,
             perspective-taking), (3) Guided practice with 5 scenarios (20min with
             feedback), (4) Homework planning (10min; daily reappraisal diary).
             Training manual and video available at https://osf.io/abc123/"

8. CONTROL GROUP ACTIVITY
   Problem: "control group received no intervention" - did they do ANYTHING?
   Missing: What happened during their 60 minutes?
   Fix:
     BEFORE: "control group received no intervention"
     AFTER: "Active control: 60-minute health documentary viewing (content-matched
             for attention and time, no emotion regulation content). Documentary:
             'The Human Body: Systems' (BBC, 2018). Participants completed same
             homework logs (not reviewed)."

9. POST-ASSESSMENT TIMING
   Problem: "two weeks later" - exact interval? How enforced?
   Missing: Exact timing, variability, scheduling method
   Fix:
     BEFORE: "completed post-intervention assessments two weeks later"
     AFTER: "Post-assessment scheduled exactly 14 days (±1 day) after intervention,
             administered via same Qualtrics platform. Email reminders sent at Days
             12 and 13. Compliance: 78/80 completed on Day 14, 2 on Day 15."

10. DATA ANALYSIS SOFTWARE
    Problem: "analyzed using ANOVA" - what software? Version? Exact test?
    Missing: Software, version, preprocessing, assumptions
    Fix:
      BEFORE: "analyzed using ANOVA"
      AFTER: "Analyzed using R v4.2.1 (R Core Team, 2022), aov() function from
              stats package. Preprocessing: Outliers (>3 SD from group mean) winsorized
              (N=3, 3.8%). Missing data: Listwise deletion (N=0 missing). Assumptions:
              Shapiro-Wilk tests confirmed normality (all p>.05), Levene's test
              confirmed homogeneity of variance (F(1,78)=1.45, p=.23). 2×2 mixed
              ANOVA (Group × Time) with Greenhouse-Geisser correction if sphericity
              violated. Effect sizes: partial η². Analysis code: https://osf.io/def456/"
```

---

## Top 10 Rejection Reasons - Which Apply?

### ✅ APPLIES TO THIS EXAMPLE:

**1. Insufficient detail for reproduction** ✅ SEVERE
- Cannot reproduce recruitment, measures, training, analysis

**3. Sample size/power issues** ✅ MODERATE
- N=80 mentioned but no power analysis justification

**5. Validation gaps** ✅ SEVERE
- No reliability/validity data for measures
- No manipulation check for training effectiveness

---

## Model Revision (Bulletproofed Version)

**See Example 4.2 (Good Methods Section) for complete revised version**

---

## Red Flags in Original Methods

### Red Flag #1: Vague Scale References
❌ "questionnaires measuring emotion regulation and well-being"

**Why problematic**:
- Dozens of emotion regulation scales exist (ERQ, DERS, CERQ, etc.)
- Dozens of well-being scales exist (SWLS, WEMWBS, etc.)
- Impossible to obtain same measures

**Fix**: Always specify exact scale name, version, source

---

### Red Flag #2: Undefined Intervention
❌ "received cognitive reappraisal training"

**Why problematic**:
- "Cognitive reappraisal" is broad category, not specific protocol
- No details on delivery, duration, content
- Cannot design comparable intervention

**Fix**: Provide step-by-step protocol or link to detailed manual

---

### Red Flag #3: No-Intervention Control
❌ "control group received no intervention"

**Why problematic**:
- What did they do for 60 minutes? Nothing?
- Confounds: attention, expectancy, time, social interaction
- Better design: active control (time-matched alternative activity)

**Fix**: Use active control group with comparable time/attention

---

### Red Flag #4: Generic Analysis Statement
❌ "analyzed using ANOVA"

**Why problematic**:
- Which ANOVA? One-way? Two-way? Mixed? Repeated measures?
- What software? What assumptions tested?
- No preprocessing described (outliers? missing data?)

**Fix**: Specify exact test, software, preprocessing, assumptions

---

## Lessons for Students

### How to Avoid These Mistakes

**1. USE THE 6-ELEMENT CHECKLIST SYSTEMATICALLY**

Before submitting Methods, verify each element scores ≥4/5:
1. ✅ Participants: Recruitment + criteria + demographics + excluded N + IRB
2. ✅ Materials: Names + versions + reliability + validity + availability
3. ✅ Procedure: Steps + timing + instructions + environment
4. ✅ Parameters: All values + units + ranges specified
5. ✅ Software: Names + versions + settings
6. ✅ Analysis: Preprocessing + exclusions + assumptions + code

**2. BE SPECIFIC, NOT GENERAL**

- ❌ "questionnaires" → ✅ "Emotion Regulation Questionnaire (ERQ; Gross & John, 2003)"
- ❌ "training" → ✅ "60-min single-session video-delivered protocol (manual: OSF link)"
- ❌ "ANOVA" → ✅ "2×2 mixed ANOVA using R v4.2.1, aov() function"

**3. PROVIDE MATERIAL ACCESSIBILITY**

If using standard scales → Cite source + report reliability
If using custom materials → Provide OSF/GitHub link
If using proprietary tools → Provide enough detail for others to obtain

**4. USE ACTIVE CONTROLS (Not "No Intervention")**

❌ Bad: "Control received no intervention"
✅ Good: "Active control: time-matched health documentary (no emotion regulation content)"

**Rationale**: Active controls eliminate confounds (attention, expectancy, time)

**5. PREEMPTIVELY ANSWER REVIEWER QUESTIONS**

Common reviewer questions to address in Methods:
- "How did you determine sample size?" → Add power analysis
- "How reliable are your measures?" → Report Cronbach's α
- "How did you handle outliers/missing data?" → Specify preprocessing
- "Can others access your materials?" → Provide OSF links

---

## Practice Exercise

### Your Turn: Score YOUR Methods Section

**Use Template 4.3 (Reproducibility Checklist):**

1. Read your own Methods section
2. Score each of 6 elements (0-5)
3. Identify TOP 3 gaps (elements scoring <3)
4. Write "Before → After" fixes for each gap

**Goal**: Achieve ≥24/30 (80%) total score

---

## Self-Check Questions

Before claiming your Methods is "reproducible," ask:

1. ❓ Could a researcher in my field obtain the exact same measures/materials using only my Methods section?
   - If NO → Add sources, versions, links

2. ❓ Could someone replicate my procedure step-by-step without asking me for clarification?
   - If NO → Add chronological steps, timing, instructions

3. ❓ Could someone verify my sample is comparable to mine using my participant details?
   - If NO → Add demographics, criteria, recruitment method

4. ❓ Could someone run the exact same analysis using my description?
   - If NO → Add software, version, preprocessing, code link

**If you answer NO to any question → Your Methods needs revision!**

---

## Related Materials

**Templates**:
- `template_4.1_bulletproofing_audit_canvas.md`: AI-assisted audit process
- `template_4.3_reproducibility_checklist.md`: Detailed 6-element scoring

**Examples**:
- `example_4.2_good_methods.md`: Model Methods section (all 6 elements complete)
- `example_4.6_peer_review_model.md`: Peer review identifying these gaps

**Lecture Notes**:
- `week4/lecture_notes.md`: Reproducibility strategies (section 2.1, lines 119-183)

**Recipes**:
- Recipe #35: Reproducibility Vulnerability Scanner (AI audit)
- Recipe #36: Alternative Explanation Generator (control strategy)

---

**Example Version**: 1.0
**Last Updated**: 2025-10-09
**Use**: Week 4 workshop - Model for identifying and fixing reproducibility gaps in Methods sections

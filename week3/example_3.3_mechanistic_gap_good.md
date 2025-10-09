# Example 3.3: Mechanistic Gap (✅ Good Example)

**Purpose**: Show what a mechanistic gap looks like (HOW questions, causal mechanisms)

**Use in Workshop**: Model example for understanding Mechanistic gaps (distinct from Conceptual gaps)

---

## Research Topic

**Domain**: Clinical Psychology/Neuroscience - Anxiety and Mindfulness
**Inspired by**: Tang et al. (2015 PNAS), Hölzel et al. (2011 Psychiatry Research)
**Student**: 가상 학생C

---

## Gap Statement

> "Mindfulness meditation reduces anxiety symptoms (8-week interventions show d=0.6-0.8 effect sizes), but the **neural mechanisms** remain unknown. We hypothesize that mindfulness works by **disrupting Default Mode Network (DMN)-amygdala connectivity** that maintains anxiety rumination.
>
> In an RCT (N=60, mindfulness vs. active control), we will test whether 8-week MBSR (Mindfulness-Based Stress Reduction) reduces DMN-amygdala resting-state functional connectivity (rs-fMRI), and whether this reduction **mediates** anxiety symptom improvement. This will establish DMN-amygdala decoupling as the causal mechanism, informing mechanism-based treatment development."

---

## What Is a Mechanistic Gap?

### Mechanistic vs Conceptual Gaps

| Aspect | Conceptual Gap | Mechanistic Gap |
|--------|----------------|-----------------|
| **Core question** | WHAT framework explains X? | HOW does X cause Y? |
| **Focus** | New theory/paradigm | Causal pathway/process |
| **Novelty** | Challenges assumptions | Reveals black box |
| **Output** | Framework (e.g., "selective consolidation") | Mechanism (e.g., "DMN-amygdala decoupling") |
| **Example** | "Memory consolidation is utility-based" | "Mindfulness disrupts DMN-amygdala" |
| **Journal fit** | Theory-focused (e.g., Psychological Review) | Mechanism-focused (e.g., Nature Neuroscience) |

**This example** focuses on **mechanism** (not new framework):
- We KNOW mindfulness reduces anxiety (established effect)
- We DON'T KNOW how it works (mechanism unknown)
- This gap asks: **What neural pathway mediates the effect?**

---

## Why This Is a Mechanistic Gap

### 1. Gap Type Classification

**AI Classification** (using Recipe #5):

```
Gap Type: ✅ MECHANISTIC (also Translational)

Reasoning:
- KNOWN EFFECT: Mindfulness reduces anxiety (meta-analyses confirm d=0.6-0.8)
- UNKNOWN MECHANISM: Neural pathways not identified
- CAUSAL CHAIN: Proposes testable mediation pathway
  (Mindfulness → DMN-amygdala↓ → Anxiety↓)
- INTERVENTION-BASED: Can manipulate cause (mindfulness) → test mediator

Not Conceptual because:
- Doesn't propose new framework for anxiety itself
- Builds on existing theories (DMN in rumination, amygdala in anxiety)
- Focuses on HOW existing intervention works

Classification Confidence: 90%
```

**Manual Analysis**:
- ✅ **Mechanistic**: Identifies causal chain (A → B → C)
- ✅ **Translational**: Mechanism informs better interventions
- ⚠️ **Not fully Conceptual**: Doesn't challenge anxiety theory itself (uses existing DMN/amygdala framework)

---

### 2. Three Tests Applied

#### Test 1: SURPRISE (놀라움) - ✅ PASS (4/5)

**Question**: "Is the mechanism prediction surprising?"

**Predictions**:
1. **Specific mechanism**: DMN-amygdala connectivity (not vague "brain changes")
2. **Direction**: Disruption (not strengthening)
3. **Mediation**: Connectivity change explains symptom change (not just co-occurring)

**Why Surprising**:
- ✅ **Specific pathway**: Most studies just show "brain changes" - this predicts WHICH pathway
- ✅ **Disruption**: Counterintuit ive that breaking connections (not building them) helps
- ⚠️ **Not paradigm-shift**: Builds on existing DMN/amygdala research (not entirely new)

**AI Surprise Score**: 4/5
```
Moderately surprising:
- Specific mechanism (DMN-amygdala) more surprising than vague "prefrontal activation"
- Disruption (not enhancement) is counterintuitive
- But: DMN involvement in rumination is known (Raichle et al., 2001; Kaiser et al., 2015)
- So: Novel application, not paradigm shift
```

**Why not 5/5?**
- DMN in rumination is established
- Amygdala in anxiety is established
- Novel part: Mindfulness disrupts DMN-amygdala **coupling** (this IS surprising)

---

#### Test 2: CONSEQUENTIAL (영향력) - ✅ PASS (5/5)

**Mechanistic Impact**:
- ✅ **Treatment development**: Knowing mechanism → optimize dosage (how long/intense?)
- ✅ **Personalization**: Who has high DMN-amygdala? → Predict responders
- ✅ **Alternative interventions**: If DMN-amygdala is target, other methods could work (e.g., neurofeedback, TMS)
- ✅ **Biomarker**: DMN-amygdala could be treatment monitoring biomarker

**Stakeholder Analysis** (Recipe #20):

```
Stakeholders:

1. CLINICAL PSYCHOLOGISTS
   - Current: Deliver mindfulness without knowing mechanism
   - Change: Dose-finding (how many weeks?), responder prediction (screen DMN-amygdala)
   - Impact: Evidence-based treatment optimization

2. NEUROSCIENTISTS
   - Current: Correlate mindfulness with various brain regions (no clear target)
   - Change: Focus on DMN-amygdala as causal node
   - Impact: Mechanistic theories of anxiety regulation

3. PSYCHIATRISTS/INTERVENTIONISTS
   - Current: Limited tools beyond mindfulness (medication, CBT)
   - Change: New targets (DMN neuromodulation via TMS, neurofeedback)
   - Impact: Mechanism-based intervention development

4. PATIENTS
   - Current: "Mindfulness helps, but I don't know why"
   - Change: Understanding increases adherence ("I'm rewiring DMN-amygdala")
   - Impact: Treatment engagement and compliance

Impact Score: 5/5
```

**Why 5/5?**
- Mechanistic knowledge enables multiple downstream actions
- Both theoretical (neuroscience theory) and practical (treatment optimization)
- Multiple stakeholders with specific action changes

---

#### Test 3: TRACTABLE (실현가능성) - ✅ PASS (5/5)

**Methods Required**:

1. **8-week MBSR intervention**
   - Status: ✅ Standardized protocol (Kabat-Zinn, 1990)
   - Fidelity: Certified instructor, established curriculum

2. **Resting-state fMRI (rs-fMRI) connectivity**
   - Status: ✅ Standard method for DMN-amygdala connectivity
   - Analysis: Seed-based or ICA approaches (widely used)

3. **RCT design with active control**
   - Control: Relaxation training (same time/attention, no mindfulness)
   - Status: ✅ Used in previous studies (Tang et al., 2015)

4. **Mediation analysis**
   - Statistical: Bootstrapped mediation (Hayes, 2013)
   - Status: ✅ Established method

**Resource Estimate**:

```
Time: 12-15 months
- Recruitment (3 months): N=60 (mindfulness=30, control=30)
- Intervention (2 months): 8-week MBSR + control
- Follow-up (1 month): Post-intervention assessments
- Data collection (6 months total, overlapping participants)
- Analysis (3 months): rs-fMRI preprocessing, connectivity, mediation

Budget: $80,000-100,000
- fMRI scans: $40K (N=60 × 2 scans × $350/scan)
- MBSR instructor: $15K (8 weeks × 2 cohorts)
- Participants: $18K (N=60 × $300 compensation)
- Research staff: $25K (coordinator, part-time)

Sample Size: N=60
- Power: Mediation analysis, medium effect (α²β = 0.14), power=0.8
- Attrition: 20% expected → recruit N=75

Feasibility: HIGH (all established methods, standard RCT)
```

**Barriers & Mitigation**:

| Barrier | Mitigation |
|---------|------------|
| Participant compliance (8 weeks) | Weekly check-ins, app-based tracking, incentives |
| fMRI motion artifacts | Strict motion QC, exclude high-motion participants |
| Specificity (is it DMN-amygdala or other regions?) | Include control regions (e.g., visual cortex) to test specificity |

**Feasibility Score**: 5/5 (all methods established, standard budget/timeline)

---

### Final Verdict

| Test | Score | Status |
|------|-------|--------|
| Surprise | 4/5 | ✅ PASS |
| Consequential | 5/5 | ✅ PASS |
| Tractable | 5/5 | ✅ PASS |
| **Overall** | **4.7/5** | **✅ EXCELLENT** |

**Decision**: ✅ **PROCEED** - Competitive for Nature Neuroscience, Biological Psychiatry

---

## Mechanistic Gap Structure

### Anatomy of This Gap Statement

```
"Mindfulness meditation reduces anxiety symptoms (8-week interventions
show d=0.6-0.8 effect sizes),"
```
→ **ESTABLISHED EFFECT**: Cites known finding (not questioning IF it works)

```
"but the neural mechanisms remain unknown."
```
→ **MECHANISM GAP**: Explicitly states HOW is unknown

```
"We hypothesize that mindfulness works by disrupting Default Mode
Network (DMN)-amygdala connectivity that maintains anxiety rumination."
```
→ **PROPOSED MECHANISM**: Specific pathway (not vague "brain changes")

```
"In an RCT (N=60, mindfulness vs. active control),"
```
→ **DESIGN**: Shows causal design (RCT, not correlation)

```
"we will test whether 8-week MBSR reduces DMN-amygdala resting-state
functional connectivity (rs-fMRI),"
```
→ **MEDIATOR TEST**: Measures proposed mechanism

```
"and whether this reduction mediates anxiety symptom improvement."
```
→ **MEDIATION**: Tests causal chain (A → B → C)

```
"This will establish DMN-amygdala decoupling as the causal mechanism,
informing mechanism-based treatment development."
```
→ **IMPACT**: States why mechanism matters (treatment optimization)

---

## Mechanistic Gap Template

### General Structure

**For ANY mechanistic gap**:

1. **Established Effect**: "X causes Y (evidence: [cite effect size/studies])"
2. **Mechanism Unknown**: "but HOW X causes Y remains unclear"
3. **Proposed Mechanism**: "We hypothesize X works via [specific pathway/process]"
4. **Mediation Design**: "Using [method], we will test whether [mediator] explains X→Y"
5. **Causal Test**: Include manipulation or temporal precedence
6. **Impact**: "This will inform [treatment/theory development]"

### Applied to Other Topics

**Example 1: Exercise and Depression**
```
"Exercise reduces depression (d=0.6, Schuch et al., 2016 meta-analysis),
but mechanisms are unknown. We hypothesize exercise works via
hippocampal neurogenesis (measured by MR spectroscopy). In an RCT
(exercise vs. stretching control), we will test whether neurogenesis
mediates depression improvement."
```

**Example 2: Sleep Deprivation and Risk-Taking**
```
"Sleep deprivation increases risk-taking (d=0.4, Killgore et al., 2006),
but neural mechanisms are unclear. We hypothesize sleep loss disrupts
prefrontal-amygdala regulation. Using fMRI during risky decisions, we
will test whether reduced prefrontal activation mediates the sleep
deprivation → risk-taking relationship."
```

**Example 3: Placebo Analgesia**
```
"Placebo reduces pain (d=0.5, Hróbjartsson & Gøtzsche, 2010), but
mechanisms are debated (expectation vs. conditioning?). We hypothesize
placebo works via endogenous opioid release (measured by PET). Using
naloxone (opioid antagonist), we will test whether blocking opioids
eliminates placebo analgesia."
```

---

## Key Differences: Conceptual vs Mechanistic

### When to Choose Mechanistic Gap

**Choose Mechanistic Gap if**:
- ✅ Effect is established (X → Y known)
- ✅ Mechanism is unknown (HOW unknown)
- ✅ You can measure mediator (brain, behavior, biomarker)
- ✅ You can manipulate cause or mediator
- ✅ Goal: Optimize interventions (not create new theory)

**Choose Conceptual Gap if**:
- ✅ Effect challenges existing theory
- ✅ You propose NEW framework
- ✅ Goal: Change how we THINK about phenomenon

**This Example** is mechanistic because:
- Effect known: Mindfulness → anxiety reduction (established)
- Mechanism unknown: HOW it works (gap)
- Proposes pathway: DMN-amygdala decoupling (mediator)
- Measures mediator: rs-fMRI connectivity (method)
- Goal: Treatment optimization (not theory change)

---

## Practice Exercise

### Identify Mechanistic Gaps in YOUR Field

**Step 1**: Find established effects
- What interventions work? (with effect sizes)
- What correlations are robust? (replicated findings)

**Step 2**: Ask "HOW?"
- What pathway explains this effect?
- What mediates the relationship?

**Step 3**: Propose specific mechanism
- Not vague ("brain changes")
- Specific pathway/process (DMN-amygdala, neurogenesis, etc.)

**Step 4**: Design mediation test
- Measure mediator + outcome
- Test A → B → C pathway
- Ideally: Manipulate A or B causally

---

## Common Pitfalls

### Pitfall #1: Vague Mechanisms

**❌ Bad**: "We will examine brain changes underlying mindfulness effects"
- Problem: "Brain changes" is too vague

**✅ Good**: "We will test whether DMN-amygdala decoupling mediates mindfulness effects"
- Solution: Specific pathway named

---

### Pitfall #2: Correlation, Not Mediation

**❌ Bad**: "We will correlate mindfulness practice hours with DMN-amygdala connectivity"
- Problem: Correlation ≠ mechanism

**✅ Good**: "We will test whether connectivity change MEDIATES symptom improvement"
- Solution: Mediation analysis (causal pathway test)

---

### Pitfall #3: Assumed, Not Tested

**❌ Bad**: "Mindfulness likely works via improved emotion regulation"
- Problem: No test, just assumption

**✅ Good**: "We will measure emotion regulation (ERQ) and test mediation"
- Solution: Measure proposed mediator, test formally

---

## Related Materials

**Templates**:
- `template_3.1_gap_discovery_canvas.md`: Mechanistic gap classification
- `template_3.2_3stage_validation_worksheet.md`: Feasibility of mediation designs

**Examples**:
- `example_3.2_conceptual_gap_good.md`: CONTRAST conceptual vs mechanistic
- `example_3.4_validation_success.md`: Could use this mindfulness gap

**Recipes**:
- Recipe #5: Classifies mechanistic gaps
- Recipe #10: Can adapt to generate mechanistic hypotheses

---

**Example Version**: 1.0
**Last Updated**: 2025-10-09
**Use**: Week 3 workshops - Mechanistic gap model

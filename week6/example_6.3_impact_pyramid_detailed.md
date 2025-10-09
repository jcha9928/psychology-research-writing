# Example 6.3: Impact Pyramid Detailed Breakdown (3 Levels)

> **목적**: Template 6.3 Impact Pyramid Worksheet를 사용하여, Example 6.2의 Impact 섹션(240 words)을 훨씬 더 구체적이고 상세한 3-Level Pyramid로 확장합니다. 각 레벨마다 측정 가능한 deliverables, 채택 경로, 장기 비전을 제시합니다.

---

## Overview: Impact Pyramid Structure

**Total Impact Section**: ~800-1,000 words (expanded from 240 words in Example 6.2)

**3 Levels**:
- **Level 1 (Immediate, 1-2 years)**: 100% achievable, concrete deliverables
- **Level 2 (Medium-term, 3-5 years)**: ~70% likely, conditional on Level 1 success
- **Level 3 (Long-term, 10+ years)**: ~30% likely, visionary but grounded

**NSF Broader Impact Integration**: Addressed throughout all 3 levels

---

## LEVEL 1: IMMEDIATE IMPACT (1-2 years)

**Likelihood**: 100% (guaranteed deliverables within project duration)

---

### A. Publications (3 papers, specific journals)

#### Paper 1: Behavioral Biomarkers of Suicidal Crises

**Target Journal**: JAMA Psychiatry (Impact Factor: 31.4)
- **Rationale**: Top-tier clinical psychiatry journal, high visibility for suicide research
- **Timeline**: Submit Month 18 (after Aim 1 completion), expect 6-month review
- **Content**: Findings from Aim 1 (n=200 prospective study)
  - 5-10 behavioral signatures identified (sleep, social, mobility patterns)
  - Sensitivity/specificity for 24-72 hour prediction window
  - Comparison with static C-SSRS assessment (baseline benchmark)
- **Expected Citation Impact**: JAMA Psych papers in suicide research average 50-100 citations within 3 years
- **Replication Potential**: Method section will enable other labs to collect similar data

#### Paper 2: Machine Learning Model for Dynamic Risk Prediction

**Target Journal**: Psychological Medicine (Impact Factor: 10.6)
- **Rationale**: Premier journal for computational psychiatry, peer audience includes ML-informed clinicians
- **Timeline**: Submit Month 30 (after Aim 2 validation)
- **Content**: ML model development, validation, fairness analysis
  - Random Forest vs LSTM comparison
  - AUC >0.85 for 72-hour prediction
  - Subgroup performance (gender, age, diagnosis)
  - Feature importance interpretation (what behaviors drive risk scores)
- **Methodological Contribution**: First validated ML suicide prediction model using passive sensors
- **Open Science**: Model code released on GitHub (see Data/Code Sharing below)

#### Paper 3: Clinical Pilot Implementation

**Target Journal**: JMIR Mental Health (Impact Factor: 5.0)
- **Rationale**: Leading digital health journal, implementation science focus
- **Timeline**: Submit Month 39 (after Aim 3 pilot)
- **Content**: Stepped-wedge trial results (10 therapists, 100 patients)
  - Therapist engagement (% alerts reviewed)
  - Usability feedback (semi-structured interviews)
  - Preliminary outcomes (time-to-intervention, crisis utilization)
- **Implementation Value**: Barrier/facilitator analysis guides future deployments
- **Pragmatic Focus**: Real-world clinic constraints (vs controlled research setting)

**Total Publication Impact**:
- 3 papers in high-impact journals (cumulative IF: 47.0)
- Different audiences: Clinical psychiatrists (JAMA Psych), Computational researchers (Psych Med), Implementation scientists (JMIR)
- Open access versions on preprint servers (PsyArXiv) for broad dissemination

---

### B. Data & Code Sharing (Open Science)

#### Dataset Release

**Platform**: Open Science Framework (OSF)
- **URL**: osf.io/[project_id] (created upon project start, public upon publication)
- **Content**: De-identified time-series data from n=200 participants
  - 6 months per participant = 1,200 person-months of data
  - Behavioral features: Sleep patterns (duration, onset, variability), social activity (call/text frequency, social app usage), mobility (GPS entropy, home time %), phone engagement (screen time, app diversity)
  - Clinical outcomes: Daily C-SSRS scores, crisis events (ED visits, hospitalizations, attempts)
- **Format**: CSV files + data dictionary + codebook
- **Reuse Potential**:
  - Other researchers can test alternative ML models
  - Cross-condition comparisons (depression, PTSD, bipolar)
  - Method replication in different populations (adolescents, veterans)

**Expected Reuse**: 10-15 secondary analyses within 3 years (based on similar digital phenotyping datasets)

#### Code Repository

**Platform**: GitHub (github.com/[PI_username]/suicide-risk-monitoring)
- **Content**:
  - Behavioral feature extraction scripts (Python, ~2,000 lines)
  - ML model training/validation code (scikit-learn, Keras)
  - Statistical analysis notebooks (Jupyter)
  - Visualization functions (matplotlib, seaborn)
- **Documentation**: README with usage examples, dependencies, citation guidelines
- **License**: MIT License (permissive open-source)
- **Maintenance**: Active for 3 years minimum (bug fixes, user support via GitHub Issues)

**Expected Impact**:
- GitHub stars: 50-100 (based on similar digital mental health repos)
- Forks: 20-30 (adaptation for other studies)
- Issues/questions: 30-50 (community engagement)

---

### C. Tools & Protocols Developed

#### SuicideWatch Monitoring System

**Description**: Open-source smartphone app + clinician dashboard for continuous suicide risk monitoring

**Components**:
1. **Patient-Facing Smartphone App** (Android + iOS)
   - Passive data collection (no user action required after setup)
   - Privacy-preserving: Data encrypted, locally processed before transmission
   - Minimal battery impact (<5% drain per day)
   - Daily EMA survey (2 min, 5 questions on mood/ideation)

2. **Clinician Dashboard** (Web-based)
   - Daily risk scores for patient panel (color-coded: green/yellow/red)
   - Behavioral trend visualizations (sleep, social, mobility graphs)
   - Alert system (email + SMS for high-risk periods)
   - Patient drill-down (detailed view of specific behavioral changes)

**Target Users**:
- Mental health clinics serving high-risk populations
- Psychiatric outpatient programs (hospital-affiliated, community)
- Crisis intervention services (suicide prevention hotlines, mobile crisis teams)
- Research labs studying suicide or digital mental health

**Deployment Requirements**:
- Electronic health record (EHR) integration capability (HL7 FHIR standard)
- Clinic IT infrastructure (HIPAA-compliant data storage)
- Therapist training (2-hour workshop on dashboard use + risk interpretation)

**Distribution**:
- GitHub repository (code)
- Docker container (turnkey deployment)
- User manual (clinician guide, patient consent forms)
- Training video (30 min tutorial)

**Expected Uptake**: 5-10 clinics within 2 years post-publication (based on outreach at conferences)

---

### D. Student Training (2 PhD students)

#### Student 1: Computational Focus

**Background**: Clinical psychology PhD student with programming experience
**Skills Trained** (3-year immersion):
1. **Digital Phenotyping Methods**:
   - Smartphone sensor data collection and processing
   - Behavioral feature engineering (time-series analysis, signal processing)
   - Privacy-preserving data handling (HIPAA compliance)
2. **Machine Learning for Mental Health**:
   - Supervised learning (classification, time-series prediction)
   - Model validation (cross-validation, fairness metrics)
   - Interpretable ML (feature importance, SHAP values)
3. **Implementation Research**:
   - Stepped-wedge trial design
   - Mixed-methods evaluation (quantitative outcomes + qualitative usability)

**Dissertations Products**:
- 3 first-author papers (Aims 1-3)
- Conference presentations (5-7 talks at APS, ABCT, Digital Health conferences)
- Software contributions (GitHub commits, documentation)

**Career Trajectory**: Academic position in computational clinical psychology OR industry role (digital health startup, tech company mental health team)

#### Student 2: Clinical Implementation Focus

**Background**: Clinical psychology PhD student interested in suicide prevention
**Skills Trained**:
1. **Suicide Risk Assessment**:
   - C-SSRS administration and interpretation
   - Crisis intervention protocols
   - Safety planning with high-risk patients
2. **Implementation Science**:
   - Barrier/facilitator analysis
   - Stakeholder engagement (therapists, clinic administrators)
   - Rapid-cycle quality improvement
3. **Data Science Literacy** (not expertise, but collaboration-ready):
   - Understanding ML model outputs (precision, recall, false positive rates)
   - Interpreting risk scores for clinical decision-making

**Dissertation Products**:
- 2 first-author papers (Aim 3 implementation, qualitative usability study)
- Implementation guide development (for other clinics)

**Career Trajectory**: Academic position with suicide research/prevention focus OR clinical administrator role (directing evidence-based practices in healthcare systems)

---

### Summary: Level 1 Deliverables (100% Guaranteed)

| Category | Quantity | Specific Deliverable | Platform | Timeline |
|----------|----------|---------------------|----------|----------|
| Publications | 3 | JAMA Psych, Psych Med, JMIR | Journals | Months 18, 30, 39 |
| Data | 1 dataset | 200 participants, 6 months each | OSF | Month 39 |
| Code | 1 repository | ML models, analysis scripts | GitHub | Month 39 |
| Tools | 1 system | SuicideWatch app + dashboard | GitHub + Docker | Month 36 |
| Training | 2 PhDs | Computational + Implementation | N/A | Years 1-5 |

**Total Direct Impact**: Research community (data/code/tool reuse), Clinical community (SuicideWatch adoption), Next-generation workforce (2 trained PhDs)

---

## LEVEL 2: MEDIUM-TERM IMPACT (3-5 years)

**Likelihood**: ~70% (conditional on Level 1 success + active dissemination)

---

### A. Research Method Adoption (10-20 labs)

#### Target Labs (Specific Examples)

**Digital Mental Health Labs**:
1. **Mohr Lab** (Northwestern): Leading digital health interventions, likely early adopter
2. **Onnela Lab** (Harvard): Social network analysis + digital phenotyping expertise
3. **Choudhury Lab** (U Washington): Computational social science + mental health

**Suicide Research Labs**:
4. **Franklin Lab** (Florida State): Suicide prediction meta-analysis authors, ideal collaboration
5. **Kleiman Lab** (Rutgers): Ecological momentary assessment experts, methods synergy
6. **Nock Lab** (Harvard): Premier suicide researcher, high-impact adoption

**Clinical Psychology Programs** (10-14 additional labs):
- Training programs adding digital phenotyping to curriculum (e.g., Penn, UCLA, Yale clinical programs)
- Researcher-clinician teams testing methods in different populations (adolescents, veterans, borderline personality disorder)

#### Adoption Pathway

**Year 3** (Post-publication):
- Conference presentations (Association for Psychological Science, Society for Research in Psychopathology)
- Workshops at major conferences (hands-on tutorial using our GitHub code)
- Direct outreach (email sharing preprints to 50 identified labs)

**Years 4-5**:
- Collaborative grants (R01 applications with adopting labs as multi-site studies)
- Method papers in Behavior Research Methods, Clinical Psychological Science (citeable methodology resource)
- Summer institute course (teaching digital phenotyping using our data/code)

**Measurement of Success**:
- Citations (target: 200+ citations within 3 years for JAMA Psych paper)
- GitHub forks and stars (target: 50+ forks indicating method reuse)
- Follow-up studies (target: 10+ papers using our methods or data)

**Realistic Rationale**:
- Open data/code lowers barriers (no need to collect new data to start)
- Methods applicable to multiple conditions (not suicide-specific)
- Growing NIMH funding for digital phenotyping (~$50M annually, increasing)

---

### B. Clinical Program Development (5-10 clinics)

#### Target Clinical Settings

**Veterans Affairs (VA) Mental Health Clinics** (2-3 sites):
- **Why Likely**: VA invested in digital health infrastructure (VA App Store, VA Video Connect)
- **High-Risk Population**: Veterans have 1.5× higher suicide rate than general population
- **Implementation Pathway**: Collaborate with VA National Mental Health Technology Transfer Center
- **Timeline**: Years 4-5 (pilot in 2-3 VA sites post-successful Aim 3)

**University Counseling Centers** (2-3 sites):
- **Why Likely**: Young adult suicide epidemic (2nd leading cause of death ages 15-24)
- **Tech-Savvy Population**: 98% smartphone ownership among college students
- **Implementation Pathway**: Partnerships with counseling center directors (Letters of Support from 5 centers already secured)
- **Timeline**: Years 3-4 (universities more agile than VA, faster adoption)

**Community Mental Health Centers (CMHCs)** (1-2 sites):
- **Why Likely**: Safety-net providers serving underserved populations, interested in cost-effective innovations
- **Implementation Pathway**: Collaborate with state mental health authorities (e.g., Massachusetts DMH Digital Health Initiative)
- **Timeline**: Years 4-5 (slower due to resource constraints, need external funding for implementation)

**Inpatient/Crisis Settings** (1-2 sites):
- **Why Likely**: Psychiatric hospitals and crisis units need post-discharge monitoring (high-risk period)
- **Implementation Pathway**: Adapt SuicideWatch for transition of care (hospital → outpatient)
- **Timeline**: Year 5+ (requires additional validation for different context)

#### Program Development Support

**Training & Technical Assistance**:
- Annual workshops at Association for Behavioral and Cognitive Therapies (ABCT) conference
- Webinar series (6 sessions covering: setup, therapist training, risk interpretation, quality improvement)
- Consultation hours (2 hours/week for implementing sites)

**Adaptation Resources**:
- Population-specific modules (adolescent version with parent consent, veteran version with VA EHR integration)
- Customization guide (how to adjust risk thresholds, alert frequency based on clinic capacity)

**Implementation Evaluation**:
- Pilot studies at each site (6-12 months, n=20-50 patients)
- Implementation outcomes tracked: Adoption (% therapists using), Fidelity (alerts reviewed?), Acceptability (therapist satisfaction), Appropriateness (fit with workflow)
- Publish implementation case studies (JMIR Implementation Science)

**Realistic Rationale**:
- 5-10 clinics = feasible with dedicated dissemination effort (not passive diffusion)
- Demonstrated feasibility in Aim 3 reduces implementation risk
- External implementation funding available (e.g., NIMH R01 for clinical trials, foundation grants for suicide prevention)

---

### C. Policy & Guideline Influence

#### Institutional Level (More Achievable)

**American Psychological Association (APA)**:
- **Target**: APA Clinical Practice Guidelines for Suicide Risk Assessment
  - Last revised: 2013
  - Next revision: ~2027 (10-year cycle)
- **Influence Pathway**: Present findings to APA Practice Guideline Committee, advocate for technology integration section
- **Expected Outcome**: Guidelines mention digital monitoring as "emerging approach" with "preliminary evidence"
- **Timeline**: Years 6-8 (guideline revision is slow)

**National Suicide Prevention Lifeline**:
- **Target**: Technology integration standards for crisis services
- **Influence Pathway**: Collaborate with Vibrant Emotional Health (Lifeline administrator), present at annual National Suicide Prevention Conference
- **Expected Outcome**: Pilot integration of SuicideWatch with crisis follow-up services (post-hotline-call monitoring)
- **Timeline**: Years 4-5

#### National Level (Aspirational)

**NIMH Suicide Research Consortium**:
- **Target**: Best practices for digital risk monitoring
- **Influence Pathway**: Join Consortium (application-based, need strong track record), contribute to Consortium white papers
- **Expected Outcome**: Digital monitoring included in NIMH research priorities and funding announcements
- **Timeline**: Years 5-7

**Centers for Medicare & Medicaid Services (CMS)**:
- **Target**: Reimbursement codes for digital mental health monitoring
- **Influence Pathway**: Provide evidence of clinical utility and cost-effectiveness to inform policy
- **Expected Outcome (Stretch)**: CPT code for "remote mental health monitoring" (similar to remote patient monitoring for chronic diseases)
- **Timeline**: Years 7-10+ (healthcare reimbursement policy changes slowly)

**Realistic Rationale**:
- Institutional influence (APA, Lifeline) is feasible with strong data
- National policy influence (CMS) is aspirational but possible with sustained effort and coalition-building
- Policy impact depends on clinical effectiveness evidence (why Aim 3 outcomes are critical)

---

### D. Follow-Up Funding (R01 Scale-Up)

#### Proposed R01 Application (Months 30-36)

**Title**: "Multi-Site Randomized Trial of Smartphone-Based Suicide Risk Monitoring"

**Budget**: $2.5 million direct costs, 5 years

**Aims**:
- **Aim 1**: Multi-site RCT (n=1,000, 10 clinics) testing SuicideWatch vs standard care
  - Primary outcome: Suicide attempts (6-month follow-up)
  - Secondary outcomes: Crisis service utilization, hospitalization days, quality of life
- **Aim 2**: Cost-effectiveness analysis (healthcare utilization costs, QALYs gained)
- **Aim 3**: Implementation toolkit development (train-the-trainer model, sustainability planning)

**Innovation Beyond R21**:
- Scale (200 → 1,000 participants)
- Rigor (single-site pilot → multi-site RCT)
- Health economics (cost-effectiveness for policymakers)

**Positioning Strategy**:
- R21 establishes feasibility → R01 tests effectiveness
- Strong preliminary data (3 papers from R21)
- Multi-site design increases generalizability
- Cost-effectiveness addresses payer concerns (Medicaid, private insurance)

**Likelihood**: ~60% (competitive but well-positioned)
- NIH R01 funding rate: ~15-20% overall, but ~40-50% for renewal applications from successful R21/R03
- Strong track record from R21 (3 high-impact pubs) increases competitiveness

#### Alternative Funding Pathways (if R01 not funded)

**Foundation Grants**:
- American Foundation for Suicide Prevention (AFSP) Innovation Grant ($250K, 2 years)
- Brain & Behavior Research Foundation (NARSAD) Young Investigator ($75K, 2 years)

**Industry Partnerships**:
- Digital health companies (e.g., Headspace Health, Ginger, Spring Health) interested in suicide risk monitoring
- Licensing SuicideWatch technology (revenue supports further development)

**Pragmatic Trials**:
- Patient-Centered Outcomes Research Institute (PCORI) Pragmatic Trials ($3-5M, comparative effectiveness in real-world settings)

---

### Summary: Level 2 Impacts (70% Likely)

| Domain | Target | Metric | Timeline |
|--------|--------|--------|----------|
| Research Adoption | 10-20 labs | Citations, GitHub forks | Years 3-5 |
| Clinical Programs | 5-10 clinics | Pilots launched, patients monitored | Years 3-5 |
| Policy Influence | APA, Lifeline | Guidelines updated, standards adopted | Years 4-8 |
| Follow-Up Funding | R01 ($2.5M) | Grant awarded, RCT launched | Years 4-9 |

**Conditional Dependencies**:
- Level 2 success requires Level 1 completion (papers published, data/code released)
- Active dissemination needed (not passive diffusion)
- External funding (R01 or equivalent) required for scale-up

---

## LEVEL 3: LONG-TERM VISION (10+ years)

**Likelihood**: ~30% (transformative but uncertain, depends on cumulative evidence and field momentum)

---

### A. Paradigm Shift: Static → Dynamic Risk Assessment

#### Current Paradigm (2024)

**Episodic, Clinic-Based Risk Assessment**:
- **When**: During scheduled appointments (weekly, biweekly, monthly)
- **How**: Clinical interview + self-report measures (C-SSRS, Beck Scale for Suicide Ideation)
- **Data**: Snapshot at one time point
- **Limitation**: Misses dynamic fluctuations between visits

**Evidence of Failure**:
- 50% of suicide deaths occur within 3 months of last clinical contact (Luoma et al., 2002)
- Most individuals rated "low risk" at last visit before attempt (Large et al., 2017)
- Prediction accuracy: No better than chance (AUC ~0.50-0.55; Franklin et al., 2017)

#### Envisioned Paradigm (2035+)

**Continuous, Data-Driven Risk Monitoring**:
- **When**: 24/7 passive monitoring (smartphones ubiquitous)
- **How**: Behavioral sensors + ML algorithms + periodic clinical check-ins
- **Data**: Continuous time-series, personalized baselines
- **Advantage**: Detects rapid escalations hours-to-days before crisis

**Transformation Components**:
1. **Personalized Risk Models**: Individual baselines (not population norms)
   - Example: For Patient A, 4 hours sleep = red flag; for Patient B, normal
2. **Contextual Alerts**: Integrate location, social context (e.g., social isolation + location change)
3. **Adaptive Thresholds**: ML models learn from false positives, adjust sensitivity over time
4. **Clinician Augmentation**: Not replacement—alerts guide clinical judgment, not replace it

**Analogies to Other Fields**:
- **Diabetes Care**: Fingerstick glucose tests (episodic) → Continuous Glucose Monitoring (CGM) = standard of care
- **Cardiology**: Annual EKGs (episodic) → Wearable heart monitors for arrhythmia patients
- **Suicide Prevention**: Static assessments → Continuous behavioral monitoring (our vision)

**Realistic Probability**: 30%
- **Why possible**: Technology trajectory (smartphones, wearables), growing evidence base
- **Why uncertain**: Requires sustained investment, clinical culture change, privacy/ethics resolution

---

### B. Practice Transformation: Integration into Standard Care

#### Scope of Adoption (Optimistic Scenario)

**10% of US Mental Health Clinics**:
- Total US mental health clinics: ~15,000 (SAMHSA, 2020)
- 10% = 1,500 clinics
- Average high-risk patient load: ~300 per clinic
- **Total Coverage**: 450,000 high-risk patients annually

**20% Adoption Among High-Risk Patients**:
- High-risk psychiatric population in US: ~2 million (recent attempt or hospitalization)
- 20% coverage = 400,000 patients monitored
- Even conservative 10% reduction in attempts = 40,000 attempts prevented over 5 years

#### Practice Integration Mechanisms

**Electronic Health Record (EHR) Integration**:
- SuicideWatch data flows into Epic, Cerner (dominant EHR systems)
- Risk scores appear in therapist dashboards alongside vitals, medications
- Alerts trigger clinical workflows (e.g., safety planning, crisis contact)

**Workflow Adaptation**:
- **Before session**: Therapist reviews risk trend (past week's behavioral data)
- **During session**: Discusses behavioral changes (e.g., "I noticed your sleep dropped to 4 hours Tuesday—what happened?")
- **After session**: Updates safety plan based on current risk level

**Training Pipeline**:
- Graduate programs: Digital mental health modules in clinical training
- Continuing education: Annual workshops at professional conferences (APA, ABCT)
- Certification: Digital Mental Health Specialist credential (like Cognitive-Behavioral Therapy certification)

#### Barriers to Overcome (Why 30% Probability)

**Technical Barriers**:
- EHR integration complexity (each system requires custom APIs)
- Data security/privacy (HIPAA compliance for continuous monitoring)
- Algorithm bias (ensuring fairness across demographic groups)

**Clinical Barriers**:
- Therapist skepticism (over-reliance on technology vs clinical judgment)
- Alert fatigue (too many false positives reduce engagement)
- Liability concerns (if system misses a suicide, is clinic liable?)

**Systemic Barriers**:
- Reimbursement (CMS doesn't pay for digital monitoring currently)
- Digital divide (underserved populations lack smartphones/data plans)
- Regulatory approval (FDA classification unclear for clinical decision support)

**Mitigation Strategies** (Increase Likelihood):
- **Transparency**: Interpretable ML (clinicians understand *why* risk is elevated)
- **Augmentation not Replacement**: Emphasize decision support, not autonomous decisions
- **Equity Focus**: Provide subsidized phones/data for low-income patients
- **Policy Advocacy**: Engage policymakers early (CMS, FDA) to shape regulations

---

### C. Population-Level Outcomes: Suicide Rate Reduction

#### Current US Suicide Burden (2020)

- **Annual deaths**: 45,979 (CDC, 2020)
- **Rate**: 14.0 per 100,000 population
- **Trend**: +30% increase since 2000 (10.4 → 14.0 per 100,000)

#### Projected Impact (Conservative Estimates)

**Scenario 1: 10% Clinic Adoption, 10% Attempt Reduction**
- High-risk patients monitored: 450,000
- Attempt rate among high-risk: ~20% per year = 90,000 attempts
- 10% reduction = 9,000 attempts prevented
- Case fatality rate (attempt → death): ~5% = 450 deaths prevented annually

**Scenario 2: 20% Clinic Adoption, 15% Attempt Reduction**
- High-risk patients monitored: 900,000
- Attempts: 180,000 per year
- 15% reduction = 27,000 attempts prevented
- Deaths prevented: ~1,350 annually

**Population-Level Rate Change**:
- Even Scenario 2 (optimistic): 1,350 deaths / 45,979 total = 3% reduction in national suicide rate
- Not a silver bullet (suicide is multifactorial), but meaningful contribution

**Other Population Benefits**:
- **Reduced suffering**: Suicide attempts cause lasting trauma even when non-fatal
- **Healthcare cost savings**: Average suicide attempt costs ~$30,000 (medical + indirect costs)
  - 27,000 attempts prevented × $30,000 = $810 million saved annually (Scenario 2)
- **Family impact**: Each suicide affects 135 people on average (grief, economic loss)

**Measurement**:
- Track national suicide rates via CDC Wonder database (annual data)
- Ecological studies correlating monitoring system adoption with regional suicide rates
- Attribution challenge (many interventions simultaneously, hard to isolate effect)

**Realistic Probability**: <30% for measurable population impact
- **Why uncertain**: Diffusion takes decades (e.g., antidepressants available since 1980s, suicide rate still increased)
- **Why possible**: Digital health scales faster than medication (no manufacturing constraints)

---

### D. Cross-Disciplinary Integration: Computational Clinical Psychology

#### Emergent Field: Computational Approaches to Mental Health

**Current Landscape (2024)**:
- Fragmented: Computer scientists study ML methods, psychologists study suicide, rarely collaborate
- Funding silos: NIMH funds mental health, NSF funds CS, cross-institute grants rare
- Training gaps: CS PhDs lack clinical knowledge, Psychology PhDs lack ML skills

**Envisioned Integration (2035+)**:
- **New Interdisciplinary Field**: "Computational Clinical Psychology" or "Digital Mental Health Science"
- **Bridging Three Disciplines**:
  1. **Computer Science**: ML, mobile sensing, human-computer interaction
  2. **Clinical Psychology**: Psychopathology, assessment, intervention
  3. **Statistics/Biostatistics**: Time-series analysis, causal inference, personalized medicine

#### Institutional Manifestations

**Academic Programs**:
- Joint PhD programs (e.g., "Clinical Science and Data Science" dual degree)
- Training grants (T32) for computational clinical psychology
- Summer institutes (like Woods Hole for neuroscience, but for digital mental health)

**Research Infrastructure**:
- National digital phenotyping consortium (standardized data collection protocols)
- Shared computational resources (cloud-based ML platforms for researchers)
- Data repositories (like UK Biobank, but for digital mental health data)

**Funding Mechanisms**:
- NIH-NSF joint solicitations (computational approaches to mental health)
- Cross-institute centers (NIMH + NIDA + NIAAA for substance/suicide comorbidity)

**Professional Societies & Journals**:
- New society: "Society for Computational Clinical Science"
- New journals: "Journal of Digital Mental Health" (currently scattered across Clinical Psych Science, JMIR, CHI)
- Annual conference (currently subsumed in larger conferences)

#### SuicideWatch as Catalyst

**How This Research Contributes**:
- **Demonstration Project**: Shows ML can work for high-stakes clinical decisions (not just research)
- **Training Model**: 2 PhD students bridge CS and Clinical Psych (scalable training approach)
- **Open Science**: Shared data/code accelerates field development (vs proprietary silos)
- **Cross-Condition Extension**: Methods applicable to psychosis, PTSD, addiction (not suicide-specific)

**Analogous Historical Examples**:
- Cognitive Neuroscience emerged 1980s-90s from Cognitive Psych + Neuroscience convergence
- Computational Neuroscience emerged 1990s-2000s from Neuroscience + Computer Science

**Realistic Probability**: 40% (higher than other Level 3 impacts)
- **Why likely**: Academic fields evolve faster than clinical practice; training next generation easier than changing current clinicians
- **Why uncertain**: Requires sustained institutional commitment (university programs, funding agencies)

---

### Summary: Level 3 Transformative Impacts (30% Likely)

| Vision | Mechanism | Indicator of Success | Timeline |
|--------|-----------|---------------------|----------|
| **Paradigm Shift** | Static → Dynamic assessment becomes standard | 25% of high-risk patients monitored continuously | 2035+ |
| **Practice Transformation** | EHR integration, training pipelines | 10% of US clinics adopt monitoring | 2030+ |
| **Population Impact** | Reduced suicide attempts/deaths | 3-5% reduction in national suicide rate | 2035+ |
| **Disciplinary Integration** | Computational Clinical Psych field emerges | PhD programs, journals, funding mechanisms | 2030+ |

**Cumulative Dependencies**:
- Level 3 requires Level 2 success (clinical adoption, policy support)
- Level 2 requires Level 1 success (strong evidence base)
- Timeline: 10-15 years minimum (Level 1: Years 1-2, Level 2: Years 3-5, Level 3: Years 10+)

---

## Broader Impact Summary (NSF Criteria Addressed)

### Criterion 1: Advancing Discovery While Promoting Teaching, Training, and Learning

- **Training**: 2 PhD students in digital phenotyping + ML + implementation research
- **Curriculum**: Methods will be taught in graduate courses (clinical psychology, computer science)
- **Discovery**: Open data/code enables other researchers to make discoveries

### Criterion 2: Broadening Participation of Underrepresented Groups

- **Patient Diversity**: Recruitment from safety-net clinics (underserved populations)
- **Fairness Analysis**: Aim 2 tests model performance across demographic subgroups (prevent algorithmic bias)
- **Accessibility**: Subsidized smartphones for low-income participants (reduce digital divide)

### Criterion 3: Enhancing Infrastructure for Research and Education

- **Data Infrastructure**: Open dataset (OSF) enables future research
- **Tool Infrastructure**: SuicideWatch system (GitHub) enables clinical/research use
- **Methodological Infrastructure**: Validated protocols for digital phenotyping in suicide research

### Criterion 4: Benefiting Society (Health, Prosperity, Welfare, Security)

- **Health**: Reduced suicide attempts and deaths (thousands of lives saved if scaled)
- **Economic**: Healthcare cost savings ($810M annually in Scenario 2)
- **Welfare**: Reduced family/community trauma from suicide

### Criterion 5: Disseminating Findings Broadly to Enhance Scientific and Technological Understanding

- **Academic**: 3 papers, 5-7 conference talks, workshops
- **Clinical**: Training webinars, implementation guides
- **Public**: Media outreach (press releases for JAMA Psych paper), patient advocacy groups (AFSP, NAMI)

**Total NSF Broader Impact Score**: Addresses all 5 criteria with specific, measurable plans

---

## Instructor Notes

### Teaching Points

**Why 3 Levels Matter**:
1. **Reviewers want to see realism**: Level 1 (100% achievable) shows you're not over-promising
2. **But also ambition**: Level 3 (transformative vision) shows big-picture thinking
3. **Progression is key**: Each level builds on previous (not independent)

**Common Student Errors**:
1. **All levels too conservative**: Level 3 should be ambitious (30% likely, not 90%)
2. **Level 1 too vague**: "Publish papers" → Need journal names, timelines
3. **Level 3 pure hype**: "Will end suicide" → Use modal verbs "could reduce"

### Discussion Questions

**Q1**: "Why is Level 3 population impact only 3-5% reduction, not 30%?"
- **A**: Suicide is multifactorial (not all caused by missed early warning signs). Our system addresses *one* piece (dynamic risk assessment). Other interventions needed (means restriction, social determinants, etc.)

**Q2**: "Shouldn't Level 2 (70% likely) be more conservative?"
- **A**: 70% reflects *conditional* probability (given Level 1 success + active dissemination). If you publish 3 strong papers + release open tools, 10-20 labs will adopt (this is realistic based on digital health history)

**Q3**: "Can we skip Level 3 if we're not sure it will happen?"
- **A**: No. Reviewers (especially NSF) want to see long-term vision. Use modal verbs ("could", "may") to show appropriate uncertainty while still being inspirational.

---

## Files to Reference

- **Template 6.3**: Impact Pyramid Worksheet (provides detailed structure)
- **Example 6.2**: Complete 3-Stage Structure (shows brief impact version)
- **AI Prompts #11-14**: Impact articulation prompts in lecture notes

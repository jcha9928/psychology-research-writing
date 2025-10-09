# Template 6.4: Recipe Library Week 6 (Research Proposals)

> **목적**: Week 6에서 학생들이 발견한 성공적인 AI 프롬프트, 전략, 예시를 수집하고 공유합니다. 각 student의 실험 결과를 실시간으로 평가하고, 가장 효과적인 "recipes"를 공동 라이브러리에 추가하여 모두가 활용할 수 있도록 합니다.

---

## 📌 사용 맥락

**사용 시점**: Workshop Phase 2-3 동안 지속적으로 업데이트

**Activity**: 개별 실험 (각 phase별 5min) + 동료 평가 (3min) + 큐레이션 (2min)
- **목표**: 각자 시도한 prompts와 결과를 공유 → 가장 효과적인 것 선별 → 전체가 재사용
- **Figma**: 실시간 collaborative curation, 주차별 누적

**학습 목표**:
1. **Experimentation**: 다양한 prompt variations 시도
2. **Peer Learning**: 동료의 성공/실패에서 배우기
3. **Quality Calibration**: 어떤 prompt가 왜 더 효과적인지 판단
4. **Recipe Reuse**: 검증된 prompts를 자신의 연구에 적용

---

## Figma Canvas 구조

**Canvas Size**: 5760 × 2160px (wider for accumulation)

### Left Panel (960px) - Evaluation Criteria & Instructions

**Section 1: Recipe Evaluation Criteria** (Read-only, 960 × 600px)

```
┌─────────────────────────────────────────────────────────────┐
│ ⭐ Recipe Rating Criteria (1-5 scale)                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ 1. EFFECTIVENESS (1-5)                                      │
│    Does the output achieve the stated goal?                │
│    5 = Perfect, 3 = Acceptable, 1 = Failed                  │
│                                                             │
│ 2. SPECIFICITY (1-5)                                        │
│    Is the output specific and concrete (not generic)?      │
│    5 = Highly specific, 1 = Vague generalities             │
│                                                             │
│ 3. REUSABILITY (1-5)                                        │
│    Can others adapt this prompt for their research?        │
│    5 = Easily adaptable, 1 = Too custom                    │
│                                                             │
│ 4. EFFICIENCY (1-5)                                         │
│    How much iteration was needed to get good output?       │
│    5 = First try, 3 = 2-3 tries, 1 = Many iterations       │
│                                                             │
│ 5. NOVELTY (1-5)                                            │
│    Is this prompt variation new/clever?                    │
│    5 = Novel approach, 3 = Standard, 1 = Obvious           │
│                                                             │
│ TOTAL SCORE: __/25                                          │
│                                                             │
│ 🏆 RECIPE LIBRARY THRESHOLD: ≥ 20/25                        │
│    (Only top-rated recipes added to library)               │
│                                                             │
│ VOTING:                                                     │
│ Each student votes for Top 3 recipes from all experiments  │
│ Most-voted recipes automatically added to library          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Section 2: Experiment Protocol** (Read-only, 960 × 600px)

```
┌─────────────────────────────────────────────────────────────┐
│ 🧪 AI Experiment Protocol (Per Phase)                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ PHASE-SPECIFIC EXPERIMENTS:                                 │
│                                                             │
│ Phase 1: Hook Generation (5 experiments)                    │
│ • Try 1 prompt per Hook pattern (Problem/Opportunity/etc)  │
│ • Vary: Opening style, statistic emphasis, urgency level   │
│ • Record: Input + Prompt + Output + Self-rating            │
│                                                             │
│ Phase 2: 3-Stage Structure (3 experiments)                  │
│ • Experiment 1: Core Innovation phrasing                   │
│ • Experiment 2: 3 Specific Aims generation                 │
│ • Experiment 3: Impact articulation                        │
│                                                             │
│ Phase 3: AI Reviewer (2 experiments)                        │
│ • Try NIH-style vs NSF-style reviewer                      │
│ • Compare: Strictness, focus areas, feedback usefulness    │
│                                                             │
│ DOCUMENTATION FORMAT (Each Experiment):                     │
│ ┌─────────────────────────────────────────────────────┐    │
│ │ INPUT: [Your research topic/content]                │    │
│ │                                                     │    │
│ │ PROMPT: [Exact prompt used]                         │    │
│ │                                                     │    │
│ │ OUTPUT: [AI's response, first 3-4 sentences]        │    │
│ │                                                     │    │
│ │ RATING: Effectiveness __/5, Specificity __/5, etc.  │    │
│ │ TOTAL: __/25                                        │    │
│ │                                                     │    │
│ │ WHAT WORKED: [Key success factors]                  │    │
│ │ WHAT DIDN'T: [Limitations/failures]                 │    │
│ │ VARIATION IDEA: [How to improve further]            │    │
│ └─────────────────────────────────────────────────────┘    │
│                                                             │
│ PEER REVIEW (After Experiments):                            │
│ • Read 3-4 other students' experiments                     │
│ • Rate using criteria (left panel)                         │
│ • Vote for Top 3 across all students                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Section 3: Week 6 Quick Reference** (Read-only, 960 × 500px)

```
┌─────────────────────────────────────────────────────────────┐
│ 📚 Week 6 Prompt Categories                                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ A. Hook Generation (#1-5): 5 patterns                       │
│ B. Problem Setup (#6-7): Broad significance, gap uniqueness │
│ C. Solution Design (#8-10): Innovation, Aims, methodology   │
│ D. Impact Articulation (#11-14): 3 levels + Broader Impact  │
│ E. AI Reviewer (#15-16): NIH-style, NSF-style              │
│ F. Storytelling (#17-18): Narrative arc, Opening-Closing    │
│ G. Feasibility (#19-20): Concerns, alternatives             │
│ H. Final Polish (#21-25): Jargon, hype, summary, visuals    │
│                                                             │
│ (See full prompts in lecture notes)                         │
│                                                             │
│ WEEK 6 FOCUS:                                               │
│ Unlike previous weeks (abstract, gap, methods), Week 6      │
│ focuses on PERSUASION and VISION:                           │
│ • Compelling hooks (grab attention)                         │
│ • Broader impact (societal value)                           │
│ • Storytelling (coherent narrative)                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### Right Panel (4800px) - Experiment Zones + Recipe Library

**Layout**:
- **Top Row (2160px height)**: 6 Student Experiment Zones (800px each × 6 = 4800px)
- **Bottom Row (2160px height)**: Cumulative Recipe Library (grows throughout workshop)

---

## Top Row: Student Experiment Zones (800px × 2160px each)

**Individual Student Zone Structure**: 800px × 2160px vertical

### Part 1: Phase 1 Experiments - Hook Generation (800px × 720px)

```
┌────────────────────────────────────────────────────────┐
│ Student A - Phase 1: Hook Generation                   │
├────────────────────────────────────────────────────────┤
│                                                        │
│ EXPERIMENT 1: Problem-Driven Hook                      │
│ ┌────────────────────────────────────────────────────┐ │
│ │ INPUT: "Suicide prevention, digital phenotyping"   │ │
│ │                                                    │ │
│ │ PROMPT: "You are an NIH proposal expert. Write a  │ │
│ │ Problem-Driven Hook for suicide risk monitoring   │ │
│ │ using smartphone data. Start with a statistic,    │ │
│ │ identify fundamental gap, propose solution. 3-4   │ │
│ │ sentences."                                        │ │
│ │                                                    │ │
│ │ OUTPUT: "Every year, 800,000 people die by        │ │
│ │ suicide globally, yet our ability to predict who  │ │
│ │ will attempt suicide remains no better than       │ │
│ │ chance (Franklin et al., 2017). Current risk..."  │ │
│ │                                                    │ │
│ │ RATING:                                            │ │
│ │ Effectiveness: 5/5 (strong statistic + gap)       │ │
│ │ Specificity: 4/5 (clear proposal)                 │ │
│ │ Reusability: 5/5 (adaptable template)             │ │
│ │ Efficiency: 5/5 (first try)                       │ │
│ │ Novelty: 3/5 (standard approach)                  │ │
│ │ TOTAL: 22/25                                       │ │
│ │                                                    │ │
│ │ WHAT WORKED: Specifying "statistic + gap +        │ │
│ │              solution" in prompt                   │ │
│ │ WHAT DIDN'T: Could be more compelling comparison  │ │
│ │ VARIATION: Add "more than war and homicide" for   │ │
│ │            dramatic comparison                     │ │
│ └────────────────────────────────────────────────────┘ │
│                                                        │
│ EXPERIMENT 2: Opportunity-Driven Hook                  │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [Same format as Experiment 1]                      │ │
│ │ ...                                                │ │
│ └────────────────────────────────────────────────────┘ │
│                                                        │
│ [Continue for Experiments 3-5...]                      │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

### Part 2: Phase 2 Experiments - 3-Stage Structure (800px × 720px)

```
┌────────────────────────────────────────────────────────┐
│ PHASE 2: 3-Stage Structure Building                    │
├────────────────────────────────────────────────────────┤
│                                                        │
│ EXPERIMENT 1: Core Innovation (Prompt #8)              │
│ ┌────────────────────────────────────────────────────┐ │
│ │ INPUT: "Smartphone-based suicide risk monitoring  │ │
│ │        using passive behavioral data"              │ │
│ │                                                    │ │
│ │ PROMPT VARIATION TRIED:                            │ │
│ │ "Write core innovation as: 'Unlike prior work     │ │
│ │ which [limitation], I will [innovation].' Focus   │ │
│ │ on what makes my approach UNIQUE. One sentence."  │ │
│ │                                                    │ │
│ │ OUTPUT: "Unlike prior work which relies on static │ │
│ │ risk assessments administered during clinic       │ │
│ │ visits, I will develop the first validated        │ │
│ │ smartphone-based suicide risk monitoring system   │ │
│ │ that uses machine learning to detect behavioral   │ │
│ │ warning signs in real-time from passive sensor    │ │
│ │ data."                                             │ │
│ │                                                    │ │
│ │ RATING: 24/25 (Excellent!)                         │ │
│ │ • Clear contrast with prior work                  │ │
│ │ • "First validated" emphasizes novelty            │ │
│ │ • Specific method (ML + passive sensors)          │ │
│ │                                                    │ │
│ │ WHAT WORKED: "Unlike X, I will Y" structure       │ │
│ │              forces clear differentiation          │ │
│ │ TIP: Adding "first" emphasizes priority claim     │ │
│ └────────────────────────────────────────────────────┘ │
│                                                        │
│ EXPERIMENT 2: 3 Specific Aims (Prompt #9)              │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [Foundation → Mechanism → Application progression] │ │
│ │ ...                                                │ │
│ └────────────────────────────────────────────────────┘ │
│                                                        │
│ EXPERIMENT 3: Impact Pyramid (Prompt #11-13)           │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [Immediate → Medium → Long-term]                   │ │
│ │ ...                                                │ │
│ └────────────────────────────────────────────────────┘ │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

### Part 3: Phase 3 Experiments - AI Reviewer (800px × 720px)

```
┌────────────────────────────────────────────────────────┐
│ PHASE 3: AI Reviewer Simulation                        │
├────────────────────────────────────────────────────────┤
│                                                        │
│ EXPERIMENT 1: NIH-style Reviewer (Prompt #15)          │
│ ┌────────────────────────────────────────────────────┐ │
│ │ PROMPT VARIATION:                                  │ │
│ │ "You are a tough but fair NIH Study Section       │ │
│ │ reviewer. Evaluate this proposal using NIH        │ │
│ │ criteria. Be CRITICAL - identify weaknesses that  │ │
│ │ would prevent funding. Score 1-9 (1=best)."       │ │
│ │                                                    │ │
│ │ OUTPUT HIGHLIGHTS:                                 │ │
│ │ • Significance: 2 (excellent)                      │ │
│ │ • Innovation: 3 (good)                             │ │
│ │ • Approach: 4 (concerns about feasibility)        │ │
│ │   - Weakness: "Sample size may be underpowered   │ │
│ │     for ML model training"                         │ │
│ │   - Weakness: "No contingency plan if recruitment │ │
│ │     falls short"                                   │ │
│ │                                                    │ │
│ │ RATING: 23/25                                      │ │
│ │ • Very specific weaknesses (actionable)           │ │
│ │ • Helped identify blind spots in my proposal      │ │
│ │                                                    │ │
│ │ WHAT WORKED: Adding "Be CRITICAL" to prompt made  │ │
│ │              AI more thorough (not just positive) │ │
│ │ ACTION: Added power analysis + recruitment plan   │ │
│ └────────────────────────────────────────────────────┘ │
│                                                        │
│ EXPERIMENT 2: NSF-style Reviewer (Prompt #16)          │
│ ┌────────────────────────────────────────────────────┐ │
│ │ [Intellectual Merit + Broader Impact focus]        │ │
│ │ ...                                                │ │
│ └────────────────────────────────────────────────────┘ │
│                                                        │
│ PEER FEEDBACK RECEIVED (Sticky Notes from others):    │
│ ┌────────────────────────────────────────────────────┐ │
│ │ 👍 Student B: "Your Core Innovation prompt (Exp 1) │ │
│ │    is excellent - I'm using that structure!"      │ │
│ │                                                    │ │
│ │ 💡 Student C: "Try adding 'first time' or 'novel' │ │
│ │    to emphasize innovation more"                   │ │
│ │                                                    │ │
│ │ ⭐ Instructor: "Great prompt variation for AI      │ │
│ │    Reviewer - adding to Recipe Library!"          │ │
│ └────────────────────────────────────────────────────┘ │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## Bottom Row: Cumulative Recipe Library (4800px × 2160px)

**Structure**: Organized by category, grows throughout workshop

### Section 1: Hook Generation Recipes (1200px × 2160px)

```
┌────────────────────────────────────────────────────────────────┐
│ 🏆 RECIPE LIBRARY - Hook Generation (Problem/Opportunity/etc)  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ RECIPE #1: Problem-Driven with Dramatic Comparison             │
│ ┌────────────────────────────────────────────────────────────┐ │
│ │ CONTRIBUTOR: Student A                                     │ │
│ │ VOTES: ⭐⭐⭐⭐⭐ (5 votes)                                      │ │
│ │ RATING: 22/25                                               │ │
│ │                                                            │ │
│ │ PROMPT TEMPLATE:                                           │ │
│ │ "You are an NIH proposal expert. Write a Problem-Driven   │ │
│ │ Hook for [TOPIC]. Requirements:                           │ │
│ │ 1. Start with statistic + dramatic comparison             │ │
│ │    (e.g., 'more than X and Y combined')                   │ │
│ │ 2. Identify fundamental gap (not incremental)             │ │
│ │ 3. Propose solution in one sentence                       │ │
│ │ 4. Total: 3-4 sentences                                   │ │
│ │ 5. Include one citation for statistic"                    │ │
│ │                                                            │ │
│ │ EXAMPLE INPUT: "Suicide prevention, digital monitoring"   │ │
│ │                                                            │ │
│ │ EXAMPLE OUTPUT:                                            │ │
│ │ "Every year, 800,000 people die by suicide globally—more │ │
│ │ than from war and homicide combined—yet our ability to... │ │
│ │                                                            │ │
│ │ WHY IT WORKS:                                              │ │
│ │ • "X more than Y combined" creates dramatic urgency       │ │
│ │ • Gap is fundamental ("no better than chance") not minor  │ │
│ │ • Solution is concrete ("smartphone-based system")        │ │
│ │                                                            │ │
│ │ ADAPTATIONS FOR YOUR RESEARCH:                             │ │
│ │ • Replace [TOPIC] with your area                          │ │
│ │ • Find comparable statistics (WHO, CDC, etc.)             │ │
│ │ • Ensure gap is truly fundamental to the problem          │ │
│ └────────────────────────────────────────────────────────────┘ │
│                                                                │
│ RECIPE #2: Opportunity-Driven with Recent Advance              │
│ ┌────────────────────────────────────────────────────────────┐ │
│ │ CONTRIBUTOR: Student D                                     │ │
│ │ VOTES: ⭐⭐⭐⭐ (4 votes)                                       │ │
│ │ RATING: 21/25                                               │ │
│ │                                                            │ │
│ │ PROMPT TEMPLATE:                                           │ │
│ │ "Write an Opportunity-Driven Hook emphasizing recent      │ │
│ │ technological/methodological advances in [FIELD]. Show    │ │
│ │ how this advance creates opportunity to solve [PROBLEM]   │ │
│ │ that was previously intractable. Cite recent paper        │ │
│ │ (2020+) for the advance."                                 │ │
│ │                                                            │ │
│ │ EXAMPLE: "Recent advances in large language models..."    │ │
│ │                                                            │ │
│ │ WHY IT WORKS:                                              │ │
│ │ • Timeliness (recent = 2020+) shows cutting-edge          │ │
│ │ • "Previously intractable" justifies why now, not before  │ │
│ │                                                            │ │
│ │ TIP: Search Google Scholar for "[your field] 2024" to     │ │
│ │      find recent advances                                  │ │
│ └────────────────────────────────────────────────────────────┘ │
│                                                                │
│ [Continue with Recipe #3-5 for other Hook patterns...]         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Section 2: Core Innovation & Aims Recipes (1200px × 2160px)

```
┌────────────────────────────────────────────────────────────────┐
│ 🏆 RECIPE LIBRARY - Core Innovation & Specific Aims            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ RECIPE #6: "Unlike X, I will Y" Innovation Statement           │
│ ┌────────────────────────────────────────────────────────────┐ │
│ │ CONTRIBUTOR: Student A                                     │ │
│ │ VOTES: ⭐⭐⭐⭐⭐⭐ (6 votes - Highest!)                           │ │
│ │ RATING: 24/25                                               │ │
│ │                                                            │ │
│ │ PROMPT TEMPLATE:                                           │ │
│ │ "Write core innovation for [RESEARCH TOPIC] using this    │ │
│ │ exact structure: 'Unlike prior work which [limitation],   │ │
│ │ I will [innovation].' Requirements:                       │ │
│ │ 1. Identify ONE key limitation of current approaches     │ │
│ │ 2. Your innovation directly solves that limitation       │ │
│ │ 3. Add 'first' or 'novel' if truly new                   │ │
│ │ 4. Exactly ONE sentence (25-35 words)"                   │ │
│ │                                                            │ │
│ │ EXAMPLE:                                                   │ │
│ │ "Unlike prior work which relies on static risk           │ │
│ │ assessments, I will develop the first validated          │ │
│ │ smartphone-based suicide risk monitoring system that     │ │
│ │ uses machine learning to detect behavioral warning       │ │
│ │ signs in real-time."                                      │ │
│ │                                                            │ │
│ │ WHY IT WORKS:                                              │ │
│ │ • "Unlike X" forces you to articulate differentiation    │ │
│ │ • "I will Y" makes your contribution crystal clear       │ │
│ │ • One sentence = elevator pitch clarity                  │ │
│ │                                                            │ │
│ │ INSTRUCTOR NOTE:                                           │ │
│ │ "This is the best Core Innovation prompt I've seen.      │ │
│ │ Forces clear contrast with prior work. Use this!"        │ │
│ └────────────────────────────────────────────────────────────┘ │
│                                                                │
│ RECIPE #7: 3 Aims with Foundation→Mechanism→Application        │
│ ┌────────────────────────────────────────────────────────────┐ │
│ │ CONTRIBUTOR: Student B                                     │ │
│ │ VOTES: ⭐⭐⭐⭐⭐ (5 votes)                                      │ │
│ │ RATING: 23/25                                               │ │
│ │                                                            │ │
│ │ PROMPT TEMPLATE:                                           │ │
│ │ "Structure 3 Specific Aims for [RESEARCH GOAL] using:    │ │
│ │ Aim 1 (Foundation): Characterize/Identify [basic finding] │ │
│ │ Aim 2 (Mechanism): Determine/Test why [mechanism works]  │ │
│ │ Aim 3 (Application): Develop/Pilot [real-world use]      │ │
│ │                                                            │ │
│ │ Requirements:                                              │ │
│ │ • Each Aim: 2-3 sentences (goal + method + outcome)      │ │
│ │ • Aim 2 builds on Aim 1 results                          │ │
│ │ • Aim 3 applies Aim 2 understanding                      │ │
│ │ • Each Aim valuable even if others fail"                 │ │
│ │                                                            │ │
│ │ WHY IT WORKS:                                              │ │
│ │ • Clear progression: Foundation → Understanding → Use     │ │
│ │ • Derisking: Each Aim produces publishable results       │ │
│ │ • Reviewers understand logic flow immediately            │ │
│ │                                                            │ │
│ │ COMMON MISTAKE TO AVOID:                                   │ │
│ │ "Three parallel studies (A, B, C in same population)"    │ │
│ │ → Instead: Sequential build (A enables B enables C)       │ │
│ └────────────────────────────────────────────────────────────┘ │
│                                                                │
│ [Recipe #8-10...]                                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Section 3: Impact & Broader Impact Recipes (1200px × 2160px)

```
┌────────────────────────────────────────────────────────────────┐
│ 🏆 RECIPE LIBRARY - Impact Pyramid & Broader Impact            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ RECIPE #11: Immediate Impact with Quantification               │
│ ┌────────────────────────────────────────────────────────────┐ │
│ │ CONTRIBUTOR: Student C                                     │ │
│ │ VOTES: ⭐⭐⭐⭐ (4 votes)                                       │ │
│ │ RATING: 22/25                                               │ │
│ │                                                            │ │
│ │ PROMPT TEMPLATE:                                           │ │
│ │ "List Immediate Impact (1-2 years) for [RESEARCH] with    │ │
│ │ specific numbers:                                          │ │
│ │ • Papers: How many, which journals (name 2-3)             │ │
│ │ • Data/code: What exactly, where shared (OSF/GitHub)      │ │
│ │ • Tools: What developed, for whom                         │ │
│ │ • Training: How many students, which skills               │ │
│ │                                                            │ │
│ │ Be conservative (achievable in 1-2yr). Use real journal   │ │
│ │ names and platforms."                                      │ │
│ │                                                            │ │
│ │ EXAMPLE OUTPUT:                                            │ │
│ │ "3 papers: (1) Behavioral biomarkers in JAMA Psychiatry, │ │
│ │ (2) ML model in Psychological Medicine, (3) Clinical      │ │
│ │ pilot in JMIR Mental Health. De-identified data (n=200)   │ │
│ │ on OSF, Python ML models on GitHub. 2 PhD students..."   │ │
│ │                                                            │ │
│ │ WHY IT WORKS:                                              │ │
│ │ • Specific > Vague ("3 papers" > "publish research")     │ │
│ │ • Real journals show you know the field                  │ │
│ │ • Numbers make it measurable/accountable                 │ │
│ │                                                            │ │
│ │ TIP: Check impact factors to show appropriate targets    │ │
│ └────────────────────────────────────────────────────────────┘ │
│                                                                │
│ RECIPE #12: Broader Impact WHO + HOW Specification             │
│ ┌────────────────────────────────────────────────────────────┐ │
│ │ CONTRIBUTOR: Student E                                     │ │
│ │ VOTES: ⭐⭐⭐⭐⭐ (5 votes)                                      │ │
│ │ RATING: 23/25                                               │ │
│ │                                                            │ │
│ │ PROMPT TEMPLATE:                                           │ │
│ │ "Write Broader Impact for [RESEARCH] answering:           │ │
│ │ WHO benefits beyond academia? (Be specific: patients,     │ │
│ │ clinicians, teachers, policymakers, which population?)    │ │
│ │ HOW do they benefit? (What changes for them specifically?)│ │
│ │                                                            │ │
│ │ Address 2 NSF criteria:                                    │ │
│ │ 1. [Teaching/Underrepresented/Infrastructure/Societal]    │ │
│ │ 2. [Another criterion]                                     │ │
│ │                                                            │ │
│ │ Avoid: Generic 'advances science', 'benefits society'     │ │
│ │ Include: Concrete examples with numbers if possible"      │ │
│ │                                                            │ │
│ │ EXAMPLE:                                                   │ │
│ │ "WHO: High-risk psychiatric outpatients (~2M in US),      │ │
│ │ mental health clinicians, suicide prevention programs     │ │
│ │ HOW: Patients receive earlier intervention (crisis        │ │
│ │ detected hours/days earlier). Clinicians gain objective   │ │
│ │ risk data (improving decisions). Programs can scale       │ │
│ │ monitoring without adding staff. NSF criteria: (1)        │ │
│ │ Societal benefit (lives saved, reduced suffering), (2)    │ │
│ │ Infrastructure (open-source tools for research community)"│ │
│ │                                                            │ │
│ │ WHY IT WORKS:                                              │ │
│ │ • WHO is specific (not just "people")                     │ │
│ │ • HOW explains mechanism of benefit                       │ │
│ │ • Maps to NSF criteria explicitly                        │ │
│ └────────────────────────────────────────────────────────────┘ │
│                                                                │
│ [Recipe #13-15...]                                             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Section 4: AI Reviewer & Polish Recipes (1200px × 2160px)

```
┌────────────────────────────────────────────────────────────────┐
│ 🏆 RECIPE LIBRARY - AI Reviewer & Final Polish                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ RECIPE #16: Critical NIH Reviewer (Stress-Test Mode)           │
│ ┌────────────────────────────────────────────────────────────┐ │
│ │ CONTRIBUTOR: Student A                                     │ │
│ │ VOTES: ⭐⭐⭐⭐⭐⭐ (6 votes)                                     │ │
│ │ RATING: 23/25                                               │ │
│ │                                                            │ │
│ │ PROMPT VARIATION (Enhanced Prompt #15):                    │ │
│ │ "You are a TOUGH BUT FAIR NIH Study Section reviewer.     │ │
│ │ Evaluate this proposal using NIH criteria (Significance,  │ │
│ │ Innovation, Approach, Investigators, Environment).        │ │
│ │                                                            │ │
│ │ Be CRITICAL - your job is to identify weaknesses that    │ │
│ │ would prevent funding. Score 1-9 (1=best, 9=worst).       │ │
│ │                                                            │ │
│ │ For each criterion:                                        │ │
│ │ • Score with justification                                │ │
│ │ • 2-3 Strengths                                            │ │
│ │ • 2-3 Weaknesses (be specific and actionable)             │ │
│ │                                                            │ │
│ │ Overall: Would you fund this? Why or why not?            │ │
│ │                                                            │ │
│ │ [Paste proposal text]"                                    │ │
│ │                                                            │ │
│ │ WHY THIS VARIATION WORKS BETTER:                           │ │
│ │ • "TOUGH BUT FAIR" → AI is more critical (not just nice) │ │
│ │ • "Be CRITICAL" → elicits real weaknesses                │ │
│ │ • "Actionable" → feedback you can actually use           │ │
│ │ • "Would you fund?" → forces binary decision             │ │
│ │                                                            │ │
│ │ WHAT STUDENTS DISCOVERED:                                  │ │
│ │ Standard Prompt #15 → AI too positive (grade inflation)  │ │
│ │ This variation → AI identified real blind spots          │ │
│ │ Example blind spot found: "No power analysis for Aim 2"  │ │
│ │                                                            │ │
│ │ INSTRUCTOR VALIDATION:                                     │ │
│ │ "This is exactly right. Default AI is too encouraging.   │ │
│ │ You need to FORCE critical evaluation. Excellent!"       │ │
│ └────────────────────────────────────────────────────────────┘ │
│                                                                │
│ RECIPE #17: Hype Detector & Modal Verb Converter               │
│ ┌────────────────────────────────────────────────────────────┐ │
│ │ CONTRIBUTOR: Student F                                     │ │
│ │ VOTES: ⭐⭐⭐⭐ (4 votes)                                       │ │
│ │ RATING: 21/25                                               │ │
│ │                                                            │ │
│ │ PROMPT TEMPLATE (Based on #22):                            │ │
│ │ "Read my research proposal and identify HYPE language:    │ │
│ │ • Over-promises: 'will revolutionize', 'paradigm shift'   │ │
│ │ • Superlatives without evidence: 'best', 'only'           │ │
│ │ • Absolute claims: 'will' vs 'could', 'may'               │ │
│ │                                                            │ │
│ │ For each hype instance:                                    │ │
│ │ BEFORE → AFTER (using modal verbs)                        │ │
│ │                                                            │ │
│ │ Modal verbs to use: could, may, might, has potential to, │ │
│ │ is likely to                                               │ │
│ │                                                            │ │
│ │ [Paste proposal text]"                                    │ │
│ │                                                            │ │
│ │ EXAMPLE OUTPUT:                                            │ │
│ │ BEFORE: "This will revolutionize suicide prevention"     │ │
│ │ AFTER: "This could transform suicide prevention          │ │
│ │         approaches"                                        │ │
│ │                                                            │ │
│ │ BEFORE: "Will save millions of lives"                     │ │
│ │ AFTER: "Has potential to improve outcomes for high-risk  │ │
│ │         populations"                                       │ │
│ │                                                            │ │
│ │ WHY IT WORKS:                                              │ │
│ │ • Reviewers HATE hype - this catches it automatically    │ │
│ │ • Modal verbs show appropriate scientific humility       │ │
│ │ • Specific > Grandiose ("high-risk populations" >        │ │
│ │   "millions of lives")                                    │ │
│ └────────────────────────────────────────────────────────────┘ │
│                                                                │
│ [Recipe #18-20...]                                             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Workshop Workflow (Integrated into Phases 1-3)

### During Each Phase:

**Minute 0-5** (Individual Experiments):
- Students try 2-3 prompt variations
- Document: Input + Prompt + Output + Rating
- Self-evaluate using criteria (left panel)

**Minute 5-8** (Peer Review):
- Students read 3-4 others' experiments
- Rate using 5 criteria
- Add sticky note feedback

**Minute 8-10** (Voting & Curation):
- Each student votes for Top 3 experiments (across all students)
- Instructor highlights most-voted
- Best recipes added to Library (bottom row)

**Real-time Updates**:
- Library grows throughout workshop
- Students can reference Library for later phases
- Instructor adds ⭐ to exceptional recipes

---

## Instructor Facilitation Guide

### Before Workshop

**Setup**:
1. Copy Figma template
2. Create 6-12 student columns (top row)
3. Pre-populate left panel reference materials
4. Prepare bottom row for Library accumulation

**Announce**:
- "Today's goal: Build Recipe Library together"
- "Your successful prompts will help everyone"
- "Vote for Top 3 - best ones added to library for all to use"

---

### During Workshop

**Phase 1 (Hook Generation - 10 min total)**:

*Minute 0-5 (Experiments)*:
- "Try 2-3 Hook patterns with prompt variations"
- "Document what works and what doesn't"
- "Rate honestly - we want to find the BEST, not just good"

**Circulating**:
- "Student A's Problem-Driven prompt is excellent - great variation"
- "Student C, try adding 'dramatic comparison' to your statistic"
- "Nice! Your Opportunity-Driven hook is very timely"

*Minute 5-8 (Peer Review)*:
- "Read 3-4 others' experiments, rate using criteria"
- "Which prompts produced the strongest hooks?"

*Minute 8-10 (Curation)*:
- "Vote for your Top 3 (can't vote for yourself)"
- *Count votes, announce top 2-3*
- "Student A's Problem-Driven recipe wins! Adding to Library..."
- *Copy recipe to bottom row, add ⭐⭐⭐⭐⭐*

---

**Phase 2 (3-Stage Structure - 10 min total)**:

*Same format as Phase 1*

**Key Curation Moment**:
- "Student A's 'Unlike X, I will Y' prompt got 6 votes - highest ever!"
- "This is now our standard template for Core Innovation"
- *Add to Library with instructor endorsement*

---

**Phase 3 (AI Reviewer - 10 min total)**:

*Focus on prompt variations that make AI more critical*

**Highlight**:
- "Many of you found default AI Reviewer too nice"
- "Student A's 'TOUGH BUT FAIR' variation fixes this"
- "This is a meta-lesson: You need to tune AI's 'personality' for the task"

---

### After Workshop

**Debrief (3 min)**:
- "What did you learn from others' prompts?"
- "Which recipe will you use for your own proposal?"
- "Any surprises? (e.g., Critical AI Reviewer finding blind spots)"

**Key Takeaways**:
1. **Prompt Engineering is Iterative**: First try rarely optimal, variations matter
2. **Peer Learning Accelerates Discovery**: 6 students = 6× experiments
3. **Specificity Wins**: Best prompts had detailed requirements (not vague)
4. **Community Curation Builds Quality**: Voting ensures only best recipes survive

**Library Export**:
- Export Recipe Library to PDF
- Share with all students for final proposal writing
- Archive for future cohorts (semester-to-semester learning)

---

## Assessment Rubric (for instructor use)

**Experimentation (10 points)**:
- Number of variations tried (3 pts): ≥5 experiments
- Documentation quality (3 pts): Complete Input/Prompt/Output/Rating
- Self-rating honesty (2 pts): Realistic self-assessment
- What Worked/Didn't notes (2 pts): Reflective analysis

**Peer Engagement (10 points)**:
- Peer reviews completed (4 pts): Rated ≥3 others' experiments
- Feedback quality (3 pts): Specific, constructive sticky notes
- Voting participation (3 pts): Voted for Top 3

**Recipe Contribution (10 points)**:
- Recipe quality (5 pts): ≥1 recipe rated ≥20/25
- Library additions (3 pts): ≥1 recipe added to library
- Community value (2 pts): Votes received from peers

**Total**: 30 points

---

## Integration with Other Templates

**Feeds FROM**:
- Templates 6.1-6.3: Experiments are based on these workshop activities

**Feeds TO**:
- Student final proposals: Best recipes used for actual writing
- Future cohorts: Library archived for next semester's students

**Continuous Improvement**:
- Each semester's Library builds on previous
- Instructor curates "Hall of Fame" recipes
- Students contribute new variations annually

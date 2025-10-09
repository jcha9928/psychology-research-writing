# Template 3.1: Gap Discovery Canvas

**Week 3 - Research Gap Discovery & Validation**
**Activity**: Individual AI-assisted gap discovery experimentation (20 minutes)
**Canvas Size**: 3840×2160px (Figma)

---

## Purpose

Students experiment with AI prompt recipes to discover and classify research gaps in their own work. This template provides:
- Gap taxonomy reference (always visible)
- Individual experiment zones for AI interaction
- Self-classification mechanism (Incremental vs Conceptual/Mechanistic/Translational)
- Real-time peer review capability
- Growing recipe library

---

## Canvas Layout

### Overall Structure
```
┌─────────────────────────────────────────────────────────────────────┐
│ WEEK 3: GAP DISCOVERY CANVAS                                         │
│ 연구 Gap 발견 및 분류 실험실                                          │
└─────────────────────────────────────────────────────────────────────┘

[Left Panel: 800px]          [Right Panel: 3040px]
전략 참조 (고정)              AI 실험 영역 (스크롤)

📚 Gap Taxonomy              🧪 학생 실험 영역
🎯 Good Gap Criteria
💡 Example Prompts           [학생 A~L 작업 영역들]

                             📚 Recipe Library (하단 누적)
```

### Dimensions
- **Total Canvas**: 3840px (W) × 2160px (H)
- **Left Panel**: 800px (W) × 2160px (H) - Fixed reference
- **Right Panel**: 3040px (W) × Variable (H) - Scrollable workspace
- **Student Zone**: 700px (W) × 400px (H) each
- **Grid**: 2 columns × 6-12 rows (adjustable for class size)

---

## Left Panel: 전략 참조 (Strategy Reference)

### Section 1: Gap Taxonomy (0-600px from top)

```markdown
┌─────────────────────────────────────────────────────────────────┐
│ 📚 GAP TAXONOMY                                                  │
│ Research Gap의 4가지 유형                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ ❌ INCREMENTAL GAP (피해야 할 유형)                              │
│ • 단순 확장: 새로운 population, context에서 기존 연구 반복       │
│ • 예시: "대학생 대상 연구 → 중년 대상으로 확장"                  │
│ • 문제: 이론적 기여 없음, 예측 가능한 결과                       │
│ • Top-tier 저널: ❌ 거의 불가능                                  │
│                                                                  │
│ ✅ CONCEPTUAL GAP (목표 유형 #1)                                 │
│ • 새로운 이론적 틀: 기존 가정을 뒤집는 framework                 │
│ • 예시: "기억 공고화는 강도 기반 → 효용 기반 선택"               │
│ • 특징: Counterintuitive prediction, paradigm shift             │
│ • Top-tier 저널: ✅ Nature, Science 가능                         │
│                                                                  │
│ ✅ MECHANISTIC GAP (목표 유형 #2)                                │
│ • 작동 원리 규명: X가 Y를 일으키는 HOW 질문                      │
│ • 예시: "Mindfulness가 불안을 줄이는 신경 메커니즘"              │
│ • 특징: Causal chain, testable interventions                    │
│ • Top-tier 저널: ✅ Nature Neuroscience, PNAS 가능               │
│                                                                  │
│ ✅ TRANSLATIONAL GAP (목표 유형 #3)                              │
│ • 실질적 응용: 기초 발견을 임상/교육/정책으로 전환               │
│ • 예시: "실험실 인지 훈련 → 학교 현장 적용 프로토콜"             │
│ • 특징: Real-world impact, implementation science                │
│ • Top-tier 저널: ✅ Nature Medicine, Science Translational       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Color Coding**:
- Incremental: Light red background (#FFE5E5)
- Conceptual: Light green background (#E5F5E5)
- Mechanistic: Light blue background (#E5F0FF)
- Translational: Light yellow background (#FFF9E5)

---

### Section 2: Good Gap Criteria (600-1200px from top)

```markdown
┌─────────────────────────────────────────────────────────────────┐
│ 🎯 GOOD GAP CRITERIA (3가지 테스트)                              │
│ 당신의 Gap이 정말 가치 있는가?                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ TEST 1: SURPRISE (놀라움) ⭐⭐⭐                                  │
│                                                                  │
│ ❓ Key Question:                                                 │
│ "당신의 예측이 counterintuitive한가, 아니면 예상 가능한가?"      │
│                                                                  │
│ ✅ Pass Examples:                                                │
│ • "약하게 인코딩된 기억도 효용이 높으면 공고화된다"              │
│   (기존: 강하게 인코딩 → 공고화 가정 뒤집음)                     │
│ • "나이 들수록 동조가 위협 회피가 아닌 관계 유지 기능"           │
│   (기존: 동조 = 단순히 감소 가정 뒤집음)                         │
│                                                                  │
│ ❌ Fail Examples:                                                │
│ • "중년에서도 대학생과 비슷한 패턴 예상"                         │
│   (예측 가능, 놀라움 없음)                                       │
│                                                                  │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                  │
│ TEST 2: CONSEQUENTIAL (영향력) ⭐⭐⭐                             │
│                                                                  │
│ ❓ Key Question:                                                 │
│ "당신의 발견이 이론을 바꾸거나 실질적 응용을 가능하게 하는가?"   │
│                                                                  │
│ ✅ Pass Examples:                                                │
│ • 이론적 영향: "공고화 이론을 강도 기반 → 효용 기반으로 전환"    │
│ • 방법론적 영향: "새로운 측정 도구 개발 가능"                    │
│ • 응용적 영향: "교육/치료 개입 설계 원리 제공"                   │
│                                                                  │
│ ❌ Fail Examples:                                                │
│ • "40-60세에서도 비슷한 결과 발견"                               │
│   (demographic description일 뿐, 이론/응용 변화 없음)            │
│                                                                  │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                  │
│ TEST 3: TRACTABLE (실현가능성) ⭐⭐⭐                             │
│                                                                  │
│ ❓ Key Question:                                                 │
│ "현재 방법론으로 테스트 가능한가?"                               │
│                                                                  │
│ ✅ Pass Examples:                                                │
│ • 기술 존재: "Closed-loop TMR, 해마 디코딩 기법 확립됨"          │
│ • 자원 현실적: "N=40, fMRI 스캔 10회 - 표준 예산 내"             │
│ • 통제 가능: "Active control group 설계 가능"                    │
│                                                                  │
│ ❌ Fail Examples:                                                │
│ • "인간 뇌에 전극 이식 필요" (윤리적/기술적 불가능)              │
│ • "N=5000 필요, 예산 $10M" (비현실적 자원)                       │
│                                                                  │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                  │
│ 🎯 DECISION RULE:                                                │
│ • All 3 Pass → ✅ Excellent Gap (proceed!)                      │
│ • 1-2 Fail → ⚠️ Revise Gap (refine before proceeding)          │
│ • All 3 Fail → ❌ Abandon Gap (pivot to different topic)        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Interactive Elements**:
- Clickable ⭐ icons to show importance hierarchy
- Hover tooltips on examples (show full context)

---

### Section 3: Example Prompts (1200-2160px from top)

```markdown
┌─────────────────────────────────────────────────────────────────┐
│ 💡 AI PROMPT RECIPES (Gap Discovery)                             │
│ 강의 노트에서 선별한 핵심 레시피                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ 📌 RECIPE #5: Gap Type Classifier                               │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                  │
│ 🎯 Purpose: AI가 당신의 gap을 분류하고 개선 방향 제시            │
│                                                                  │
│ 🤖 Prompt:                                                       │
│ ```                                                              │
│ You are a Nature Psychology editor. Evaluate this research gap: │
│                                                                  │
│ GAP: [당신의 gap statement 붙여넣기]                             │
│                                                                  │
│ Classify as:                                                     │
│ - Incremental (simple extension)                                 │
│ - Conceptual (new theoretical framework)                         │
│ - Mechanistic (new understanding of how it works)                │
│ - Translational (new real-world applications)                    │
│                                                                  │
│ Then assess:                                                     │
│ 1. Surprise: Are predictions counterintuitive? (1-5)             │
│ 2. Consequence: Would this change theory or enable apps? (1-5)   │
│ 3. Tractable: Can this be tested with current methods? (1-5)     │
│                                                                  │
│ Provide: Classification, 3 scores, reasoning, improvement tips.  │
│ ```                                                              │
│                                                                  │
│ ✅ Expected Output:                                              │
│ • Gap classification with justification                          │
│ • 3 scores (Surprise/Consequential/Tractable)                    │
│ • Specific suggestions to elevate gap                            │
│                                                                  │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                  │
│ 📌 RECIPE #10: Conceptual Gap Generator                         │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                  │
│ 🎯 Purpose: Incremental gap을 Conceptual gap으로 전환            │
│                                                                  │
│ 🤖 Prompt:                                                       │
│ ```                                                              │
│ My current research gap:                                         │
│ [당신의 incremental gap 붙여넣기]                                │
│                                                                  │
│ This seems incremental. Help me elevate it to conceptual by:     │
│                                                                  │
│ 1. Identifying the core ASSUMPTION in current theories           │
│ 2. Finding a PUZZLE that assumption cannot explain               │
│ 3. Proposing a NEW FRAMEWORK with testable mechanism             │
│ 4. Generating a COUNTERINTUITIVE prediction                      │
│                                                                  │
│ Use this template:                                               │
│ "Current theory assumes [X]. This fails to explain [puzzle].     │
│  We propose [new framework]: [mechanism]. Using [method],        │
│  we will test [prediction], proving [causal claim]."             │
│ ```                                                              │
│                                                                  │
│ ✅ Expected Output:                                              │
│ • Identified assumption + puzzle                                 │
│ • New framework with mechanism                                   │
│ • Testable counterintuitive prediction                           │
│ • Complete gap statement (Nature/Science style)                  │
│                                                                  │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                  │
│ 📌 RECIPE #15: Cross-Disciplinary Gap Finder                    │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                  │
│ 🎯 Purpose: 인접 분야에서 이미 해결된 문제인지 확인 (Stage 1)    │
│                                                                  │
│ 🤖 Prompt:                                                       │
│ ```                                                              │
│ My research topic: [당신의 주제]                                 │
│ My proposed gap: [당신의 gap]                                    │
│                                                                  │
│ Search these adjacent fields:                                    │
│ - Neuroscience (if I'm in psychology)                            │
│ - AI/Machine Learning (for computational models)                 │
│ - Organizational Behavior (for social psychology)                │
│ - Economics (for decision-making)                                │
│                                                                  │
│ For each field:                                                  │
│ 1. Has this gap been addressed?                                  │
│ 2. What solutions exist?                                         │
│ 3. What remains unsolved in my specific context?                 │
│                                                                  │
│ Conclude: Is my gap truly novel or already solved elsewhere?     │
│ ```                                                              │
│                                                                  │
│ ✅ Expected Output:                                              │
│ • Adjacent field findings (what's been done)                     │
│ • Gaps that remain in YOUR context                               │
│ • Novelty assessment (1-5 score)                                 │
│                                                                  │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                  │
│ 💡 TIP: Copy-paste these prompts into ChatGPT/Claude            │
│    오른쪽 실험 영역에 Input-Prompt-Output 기록하세요             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Interaction**:
- Click recipe number → Opens full lecture notes reference
- Copy button for each prompt
- "Try this prompt" → Pre-fills student's experiment zone

---

## Right Panel: AI 실험 영역 (Experiment Workspace)

### Layout Grid

```
┌───────────────────────────────────────────────────────────────────┐
│ 🧪 AI GAP DISCOVERY EXPERIMENT                                    │
│ 각자의 연구 주제로 Gap 발견 실험 (20분)                            │
├───────────────────────────────────────────────────────────────────┤
│                                                                    │
│ [Student A Zone]        [Student B Zone]                          │
│  700×400px               700×400px                                │
│                                                                    │
│ [Student C Zone]        [Student D Zone]                          │
│  700×400px               700×400px                                │
│                                                                    │
│ [Student E Zone]        [Student F Zone]                          │
│  700×400px               700×400px                                │
│                                                                    │
│ [... continue for 6-12 students ...]                              │
│                                                                    │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                    │
│ 📚 RECIPE LIBRARY (하단 누적 영역)                                │
│ 이번 수업에서 발견된 최고의 레시피들                               │
│                                                                    │
│ [Recipe cards added during class...]                              │
│                                                                    │
└───────────────────────────────────────────────────────────────────┘
```

---

### Individual Student Zone Template

Each zone (700×400px) has identical structure:

```markdown
┌──────────────────────────────────────────────────────────────┐
│ 👤 학생A 실험 영역                                            │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│ 📝 연구 주제 (1-2 sentences):                                │
│ ┌────────────────────────────────────────────────────────┐  │
│ │ [학생이 직접 입력]                                      │  │
│ │                                                         │  │
│ └────────────────────────────────────────────────────────┘  │
│                                                               │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                               │
│ 🤖 사용한 Recipe: #___ (왼쪽 패널에서 선택)                  │
│ ┌────────────────────────────────────────────────────────┐  │
│ │ Recipe Name: _______________                            │  │
│ └────────────────────────────────────────────────────────┘  │
│                                                               │
│ 💬 AI 결과 (복사-붙여넣기):                                  │
│ ┌────────────────────────────────────────────────────────┐  │
│ │ [AI 응답 전체 붙여넣기]                                 │  │
│ │                                                         │  │
│ │                                                         │  │
│ │                                                         │  │
│ └────────────────────────────────────────────────────────┘  │
│                                                               │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                               │
│ ⭐ Gap Type (AI 분류 결과):                                  │
│ □ Incremental (❌ avoid)                                     │
│ □ Conceptual (✅ target)                                     │
│ □ Mechanistic (✅ target)                                    │
│ □ Translational (✅ target)                                  │
│                                                               │
│ 📊 AI Scores:                                                 │
│ • Surprise: ___/5                                             │
│ • Consequential: ___/5                                        │
│ • Tractable: ___/5                                            │
│                                                               │
│ 🎯 Next Step (AI 제안):                                       │
│ ┌────────────────────────────────────────────────────────┐  │
│ │ [AI가 제안한 개선 방향 요약]                            │  │
│ └────────────────────────────────────────────────────────┘  │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

**Interactive Features**:
- Text boxes: Auto-expanding
- Checkboxes: Radio buttons (only one gap type selected)
- Sticky notes: Students can add colored notes for questions/insights
- Comment threads: Peers can comment on any element

**Color Coding**:
- Border color matches gap type:
  - Red border: Incremental
  - Green border: Conceptual
  - Blue border: Mechanistic
  - Yellow border: Translational

---

### Recipe Library Section (Bottom, Cumulative)

```markdown
┌───────────────────────────────────────────────────────────────┐
│ 📚 WEEK 3 RECIPE LIBRARY                                       │
│ 이번 수업에서 발견된 최고의 Gap Discovery 프롬프트              │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│ ⭐⭐⭐⭐⭐ 5-STAR RECIPES (instructor curated during class)   │
│                                                                │
│ [초기에는 비어있음 - 수업 중 강사가 추가]                       │
│                                                                │
│ ┌─────────────────────────────────────────────────────────┐  │
│ │ 🏆 Recipe by 학생___                                     │  │
│ │ "______________________" (recipe name)                   │  │
│ │                                                          │  │
│ │ 📝 Use Case: [어떤 상황에서]                             │  │
│ │ 🤖 Prompt: [실제 프롬프트]                               │  │
│ │ 💡 Why It Works: [효과적인 이유]                         │  │
│ │ 📊 Peer Rating: ___/5.0 (N명 평가)                       │  │
│ └─────────────────────────────────────────────────────────┘  │
│                                                                │
│ [More recipe cards added during class...]                     │
│                                                                │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                │
│ 📖 FROM LECTURE (reference - 기본 레시피)                     │
│                                                                │
│ • Recipe #5: Gap Type Classifier                              │
│ • Recipe #10: Conceptual Gap Generator                        │
│ • Recipe #15: Cross-Disciplinary Gap Finder                   │
│ [링크 to full lecture notes]                                  │
│                                                                │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                │
│ 🔗 CUMULATIVE LIBRARY                                          │
│ • Week 2 Best Recipes → [Link to Week 2 canvas]               │
│ • Week 3 Best Recipes → YOU ARE HERE                          │
│ • Week 4 Best Recipes → [TBD]                                 │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

**Interaction**:
- During class: Instructor drags excellent student work → Recipe library
- Real-time voting: Students upvote recipes (⭐ rating system)
- Export function: Save recipe library as PDF at end of class

---

## Figma Implementation Guide

### Colors

**Left Panel (Reference)**:
- Background: #F5F5F5 (light gray)
- Headers: #2C3E50 (dark blue-gray)
- Body text: #34495E (medium gray)
- Accent: #3498DB (blue for interactive elements)

**Right Panel (Workspace)**:
- Background: #FFFFFF (white)
- Student zones:
  - Border: 2px solid, color based on gap type
  - Background: #FAFAFA (very light gray)
- Recipe library:
  - Background: #FFF9E5 (light yellow - "treasure" feeling)
  - 5-star cards: Gold border (#FFD700)

### Typography

**Left Panel**:
- Headers: Inter Bold, 18px, #2C3E50
- Subheaders: Inter SemiBold, 14px, #34495E
- Body: Inter Regular, 12px, #34495E
- Code blocks: Monaco, 11px, #E74C3C

**Right Panel**:
- Section headers: Inter Bold, 16px, #2C3E50
- Labels: Inter Medium, 12px, #7F8C8D
- Input text: Inter Regular, 12px, #2C3E50
- AI output: Monaco, 11px, #27AE60 (green = AI voice)

### Spacing

- Section margins: 24px
- Element padding: 16px
- Text line height: 1.5
- Between student zones: 32px vertical, 40px horizontal

---

## Facilitation Script

### Setup (Before Class)

1. **Duplicate template** from master Figma file
2. **Adjust student zones**: Add/remove zones based on class size (6-12 typical)
3. **Generate sharing link**: Edit permissions enabled
4. **Send link** to students 5 minutes before class

### During Activity (20 minutes)

**Minutes 0-2: Introduction**
- "You have 20 minutes to discover and classify YOUR research gap using AI"
- "Left panel: Reference (gap types, criteria, prompts)"
- "Right panel: Your experiment zone - pick one, record everything"
- "Goal: Identify if your gap is Incremental (bad) or Conceptual/Mechanistic/Translational (good)"

**Minutes 2-15: Individual Work**
- Students work in their zones
- Monitor progress: Check if students are stuck
- Instant help: Comment on their zone if they need guidance
- Identify good examples: React with 🔥 emoji on excellent work

**Minutes 15-18: Quick Share**
- "⭐ Star rating time! Visit 2-3 classmates' zones"
- "React with emoji: 🔥 (excellent), 💡 (interesting), ❓ (question)"
- "Leave one comment: What's strong? What's unclear?"

**Minutes 18-20: Curation**
- Instructor highlights 2-3 best examples
- Drag to Recipe Library (if student discovered novel prompt variation)
- Announce: "These will be in our cumulative library!"

### After Activity

**Export**:
- PDF export of full canvas (for student reference)
- Screenshot of Recipe Library (share in course materials)

**Transition**:
- "You've classified your gaps. Next: We'll VALIDATE them with 3-stage process."
- "→ Move to Template 3.2: 3-Stage Validation Worksheet"

---

## Common Issues & Solutions

### Issue 1: "I don't have a research topic yet"
**Solution**: Provide 3 generic psychology topics as examples:
- "Sleep and memory consolidation"
- "Social media and mental health"
- "Mindfulness and anxiety"

**Prompt them**: "Pick one, run Recipe #5, see what AI suggests as gaps"

### Issue 2: "AI keeps saying my gap is incremental"
**Solution**:
- This is GOOD feedback - don't ignore it!
- Guide them to Recipe #10 (Conceptual Gap Generator)
- Comment on their zone: "Try elevating with Recipe #10 - focus on finding the ASSUMPTION to challenge"

### Issue 3: "AI response is too long/complex"
**Solution**:
- Add to prompt: "Answer in under 200 words. Use bullet points."
- Teach them to extract key info: "Copy only the 3 scores + classification"

### Issue 4: Students not engaging with peers
**Solution**:
- Assign pairs: "Student A, review Student B's gap"
- Incentivize: "Best peer comment gets recipe in library"

---

## Success Metrics

**Process Metrics** (during activity):
- All students complete their zone: >90%
- Peer comments given: >2 per student
- Instructor interventions needed: <5

**Outcome Metrics** (end of activity):
- Students correctly classify their gap: >70%
- Students identify at least 1 weakness: >80%
- Students have concrete next step: >90%

**Engagement Metrics**:
- Emoji reactions given: >20 total
- Recipe library cards added: 2-4
- Students report "useful" in post-activity poll: >85%

---

## Integration with Week 3 Workflow

**Before This Template**:
- Week 3 Lecture (15-20 min): Gap taxonomy, 3 tests, validation overview

**This Template** (20 min):
- Individual gap discovery and classification

**After This Template**:
- Template 3.2: 3-Stage Validation Worksheet (25 min)
- Template 3.3: Peer Review (20 min)
- Template 3.4: Recipe Library (embedded throughout)

---

## Files and Links

**Related Materials**:
- `week3/lecture_notes.md`: Full AI recipes (#1-30)
- `week3/example_3.1_incremental_gap_bad.md`: What NOT to do
- `week3/example_3.2_conceptual_gap_good.md`: Target excellence
- `week1/figma_workshop_guide.md`: General Figma setup instructions

**Master Template**:
- Figma file: `Week3_GapDiscovery_Canvas_Master.fig`
- Duplicate for each class session

---

**Template Version**: 1.0
**Last Updated**: 2025-10-09
**Author**: Claude (based on comprehensive plan)

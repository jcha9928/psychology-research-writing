# Template 4.1: Bulletproofing Audit Canvas

**Purpose**: 25-minute AI-assisted systematic audit of Methods/Results for Top 10 rejection reasons

**Use in Workshop**: Individual experimentation (12min) → Peer review (8min) → Group curation (5min)

**Target**: Identify and fix vulnerabilities BEFORE reviewer critique

---

## Figma Canvas Layout (3840×2160px)

### Left Panel (800px wide) - Reference Materials [FIXED, ALWAYS VISIBLE]

```
┌─────────────────────────────────────────────────────────────────────┐
│ 🎯 WEEK 4 WORKSHOP: BULLETPROOFING AUDIT                            │
│                                                                       │
│ 📋 Top 10 Rejection Reasons                                         │
│                                                                       │
│ === METHODS SECTION (Top 5) ===                                     │
│                                                                       │
│ 1️⃣ INSUFFICIENT DETAIL FOR REPRODUCTION                             │
│    ❌ "다른 연구자가 이 연구를 재현할 수 없다"                       │
│    - 자극 생성 과정 불명확                                          │
│    - 통계 파라미터 누락                                             │
│    - 실험 환경 세부사항 생략                                        │
│                                                                       │
│ 2️⃣ INADEQUATE CONTROLS                                              │
│    ❌ "대안 설명을 배제하지 못했다"                                 │
│    - Confound 변수 통제 안 됨                                       │
│    - Negative control 없음                                          │
│    - Manipulation check 누락                                        │
│                                                                       │
│ 3️⃣ SAMPLE SIZE/POWER ISSUES                                         │
│    ❌ "통계적 검정력이 부족하다"                                    │
│    - N 정당화 없음 ("관례상 30명")                                  │
│    - Multiple comparison 고려 안 됨                                 │
│    - Expected effect size 근거 없음                                 │
│                                                                       │
│ 4️⃣ INAPPROPRIATE STATISTICS                                         │
│    ❌ "분석 방법이 데이터 구조에 맞지 않다"                         │
│    - 가정 위배 (normality, homogeneity)                             │
│    - 잘못된 검정 선택 (paired vs unpaired)                          │
│    - Nested/hierarchical 구조 무시                                  │
│                                                                       │
│ 5️⃣ VALIDATION GAPS                                                  │
│    ❌ "측정 도구/방법의 타당성 입증 부족"                           │
│    - Cronbach's α 보고 안 됨                                        │
│    - Manipulation check 실패 언급 없음                              │
│    - Inter-rater reliability 누락                                   │
│                                                                       │
│ === RESULTS SECTION (Top 5) ===                                     │
│                                                                       │
│ 6️⃣ OVERCLAIMING                                                     │
│    ❌ "데이터가 뒷받침하지 않는 주장"                               │
│    - Correlation을 causation으로 주장                               │
│    - "X is necessary for Y" (sufficiency 미검증)                    │
│    - Generalization 근거 없음                                       │
│                                                                       │
│ 7️⃣ CHERRY-PICKING                                                   │
│    ❌ "일부 결과만 선택적 보고"                                     │
│    - Hypothesis에 맞는 것만 보고                                    │
│    - Failed manipulation checks 숨김                                │
│    - Non-significant results 누락                                   │
│                                                                       │
│ 8️⃣ STATISTICAL ISSUES                                               │
│    ❌ "다중 비교 보정 누락, p-hacking 의심"                         │
│    - 20개 비교 중 1개만 유의 → 그것만 보고                         │
│    - Bonferroni/FDR 보정 없음                                       │
│    - Outlier 처리 불투명                                            │
│                                                                       │
│ 9️⃣ UNCLEAR PRESENTATION                                             │
│    ❌ "핵심 결과가 무엇인지 불명확"                                 │
│    - 엄청난 양의 결과 나열                                          │
│    - Primary vs secondary outcomes 구분 없음                        │
│    - Figure/Table 불일치                                            │
│                                                                       │
│ 🔟 WEAK EFFECT SIZES                                                │
│    ❌ "통계적 유의성은 있지만 실질적 의미 미약"                     │
│    - p < 0.001 but Cohen's d = 0.1                                  │
│    - Practical significance 논의 없음                               │
│    - MCID (minimum clinically important difference) 미달            │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ 🤖 AI Prompt Recipes                                                 │
│                                                                       │
│ RECIPE #35: Reproducibility Vulnerability Scanner                   │
│ ```                                                                   │
│ "다음 Methods 섹션을 읽고, 다른 연구자가 재현하려 할 때              │
│ 막힐 수 있는 지점 10가지를 찾아줘:                                  │
│ [Methods text]                                                       │
│                                                                       │
│ 각 지점에 대해:                                                      │
│ 1. 무엇이 불명확한가?                                               │
│ 2. 어떤 정보가 추가로 필요한가?                                     │
│ 3. Before → After 예시"                                             │
│ ```                                                                   │
│                                                                       │
│ RECIPE #36: Alternative Explanation Generator                       │
│ ```                                                                   │
│ "내 연구 디자인:                                                     │
│ - Manipulation: [설명]                                               │
│ - Expected result: [설명]                                            │
│                                                                       │
│ 생성해줘:                                                            │
│ 1. Alternative explanations (조작 외 요인 5가지)                    │
│ 2. 각 alternative를 배제하기 위한 control                           │
│ 3. 리뷰어가 지적할 confound 3가지                                   │
│ 4. 현재 Methods에서 충분히 다뤄진 alternative는?                    │
│ 5. 추가해야 할 control은?"                                          │
│ ```                                                                   │
│                                                                       │
│ RECIPE #37: Power Analysis Reviewer                                 │
│ ```                                                                   │
│ "내 연구:                                                            │
│ - Expected effect size: d = [value] (근거: [pilot/previous])        │
│ - Sample size: N = [value]                                           │
│ - Planned comparisons: [number]                                      │
│                                                                       │
│ 리뷰어 관점 평가:                                                    │
│ 1. Effect size 현실적인가?                                          │
│ 2. Multiple comparison 보정 후 power 충분한가?                      │
│ 3. 샘플 사이즈 정당화 보강할 점은?                                  │
│ 4. 리뷰어 예상 질문 3가지 + 방어 전략"                              │
│ ```                                                                   │
│                                                                       │
│ RECIPE #38: Overclaiming Detector                                   │
│ ```                                                                   │
│ "다음 Results 문장들 분석:                                           │
│ [Results text]                                                       │
│                                                                       │
│ 각 문장:                                                             │
│ 1. Claim type (causal/correlational/mechanistic/general)            │
│ 2. Evidence level (direct/indirect/suggestive)                      │
│ 3. Overclaiming risk (1-10)                                          │
│ 4. Conservative alternative phrasing                                 │
│                                                                       │
│ 가장 위험한 overclaim 3개 지적 + 수정 방법"                         │
│ ```                                                                   │
│                                                                       │
│ RECIPE #39: Statistical Rigor Auditor                               │
│ ```                                                                   │
│ "내 Results:                                                         │
│ - Analysis: [통계 방법]                                              │
│ - Comparisons: [횟수]                                                │
│ - Reported stats: [통계량]                                           │
│                                                                       │
│ 리뷰어가 문제 삼을 부분:                                             │
│ 1. Assumption violations (어떤 가정 문제?)                          │
│ 2. Multiple comparison issues (보정 충분?)                          │
│ 3. P-hacking risks (의심받을 분석 선택?)                            │
│ 4. Missing robustness checks (추가 분석 필요?)                      │
│                                                                       │
│ 각 문제: 구체적 지적 + 방어 전략 + 추가 분석"                       │
│ ```                                                                   │
│                                                                       │
│ RECIPE #40: Transparency Checker                                    │
│ ```                                                                   │
│ "연구 계획:                                                          │
│ - Hypotheses: [list]                                                 │
│ - Planned comparisons: [list]                                        │
│ - Measured variables: [list]                                         │
│                                                                       │
│ 현재 Results: [text]                                                 │
│                                                                       │
│ 투명성 평가:                                                         │
│ 1. Planned 대비 보고 비율 (%)                                        │
│ 2. 누락된 결과는?                                                    │
│ 3. Exploratory vs Confirmatory 구분 명확한가?                       │
│ 4. Selective reporting 의심 부분?                                   │
│                                                                       │
│ 개선: Main 추가 결과 + Supplementary 옮길 결과 + 문구 제안"          │
│ ```                                                                   │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ 📊 Evaluation Criteria                                               │
│                                                                       │
│ 🔴 CRITICAL (Must fix before submission):                            │
│    - Methods reproducibility <3/5                                    │
│    - No sample size justification                                    │
│    - Major overclaiming detected                                     │
│    - Multiple comparison not addressed                               │
│                                                                       │
│ 🟡 MAJOR (Reviewer will likely question):                            │
│    - Some reproducibility gaps                                       │
│    - Weak control strategy                                           │
│    - Missing effect sizes or CIs                                     │
│    - Selective reporting suspected                                   │
│                                                                       │
│ 🟢 MINOR (Strengthen if possible):                                   │
│    - Could add more detail                                           │
│    - Additional robustness checks beneficial                         │
│    - Practical significance could be clearer                         │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

---

### Right Panel (3040px wide) - Student Work Zones [SCROLLABLE]

```
┌─────────────────────────────────────────────────────────────────────────┐
│ 📝 INDIVIDUAL BULLETPROOFING AUDIT ZONES (12 minutes)                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ 각 학생은 자신의 Methods/Results 섹션을 AI로 audit                      │
│ - Top 10 rejection reasons 중 어떤 것이 자신의 약점인지 식별           │
│ - Recipe #35-40 중 최소 2개 이상 사용                                   │
│ - Before/After 개선안 작성                                              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│ 👤 학생A - Methods Bulletproofing [700×900px]                            │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│ 📌 My Current Methods (핵심 부분만 요약):                                │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ [학생이 자신의 Methods 섹션 핵심 부분 복사-붙여넣기]               │  │
│ │ (Participants, Materials, Procedure, Analysis 각 1-2 문장씩)       │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ 🤖 Recipe Used: #___ (왼쪽 패널에서 선택)                                │
│                                                                           │
│ 🔍 AI Audit Results (복사-붙여넣기):                                     │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ [AI가 발견한 취약점 10가지]                                        │  │
│ │                                                                     │  │
│ │ Vulnerability 1: [문제점]                                          │  │
│ │ - Missing info: [필요한 정보]                                      │  │
│ │ - Fix: [개선 방법]                                                 │  │
│ │                                                                     │  │
│ │ Vulnerability 2: ...                                               │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ ⚠️ My Top 3 Critical Issues (from AI results):                          │
│ 🔴 1. [가장 심각한 문제]                                                 │
│    → Rejection Reason: #___ (왼쪽 패널 1-10 중 선택)                     │
│                                                                           │
│ 🟡 2. [중요한 문제]                                                      │
│    → Rejection Reason: #___                                               │
│                                                                           │
│ 🟢 3. [개선하면 좋은 문제]                                               │
│    → Rejection Reason: #___                                               │
│                                                                           │
│ ✏️ Before → After Fix (가장 심각한 1개만):                              │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ ❌ BEFORE:                                                          │  │
│ │ [원래 Methods 문장/단락]                                           │  │
│ │                                                                     │  │
│ │ ✅ AFTER:                                                           │  │
│ │ [개선된 문장/단락 - 구체적 정보 추가]                             │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────┐
│ 👤 학생A - Results Bulletproofing [700×900px]                            │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│ 📌 My Current Results (핵심 주장만 요약):                                │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ [학생이 자신의 Results 섹션 핵심 주장 3-5개 복사]                  │  │
│ │ (각 주요 결과별로 1-2 문장씩)                                      │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ 🤖 Recipe Used: #___ (Overclaiming Detector 또는 Statistical Auditor)    │
│                                                                           │
│ 🚨 Overclaiming Detection (복사-붙여넣기):                               │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ Sentence 1: [원문]                                                 │  │
│ │ - Claim type: [causal/correlational/mechanistic/general]           │  │
│ │ - Evidence level: [direct/indirect/suggestive]                     │  │
│ │ - Overclaiming risk: ___/10                                        │  │
│ │ - Conservative alternative: [수정 제안]                            │  │
│ │                                                                     │  │
│ │ Sentence 2: ...                                                    │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ 🔴 Highest Risk Claim (risk ≥7):                                         │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ ❌ ORIGINAL CLAIM:                                                  │  │
│ │ [과도한 주장이 담긴 문장]                                          │  │
│ │                                                                     │  │
│ │ ⚠️ Why Overclaiming:                                                │  │
│ │ [데이터와 주장의 불일치 설명]                                      │  │
│ │                                                                     │  │
│ │ ✅ CONSERVATIVE CLAIM:                                              │  │
│ │ [데이터에 맞게 수정된 문장]                                        │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ 📊 Statistical Rigor Check:                                              │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ ✅ Reported:                                                        │  │
│ │ • Effect sizes (d, η², r): [Yes/No]                                │  │
│ │ • Confidence intervals (95% CI): [Yes/No]                          │  │
│ │ • Multiple comparison correction: [Yes/No/N.A.]                    │  │
│ │ • Assumption testing: [Yes/No]                                     │  │
│ │                                                                     │  │
│ │ ❌ Missing:                                                         │  │
│ │ [누락된 통계량/검정 리스트]                                        │  │
│ │                                                                     │  │
│ │ 💡 AI Suggestion:                                                   │  │
│ │ [추가해야 할 통계 보고 내용]                                       │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────┐
│ 👤 학생B - Methods Bulletproofing [700×900px]                            │
├──────────────────────────────────────────────────────────────────────────┤
│ [학생A와 동일한 구조]                                                    │
└──────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────┐
│ 👤 학생B - Results Bulletproofing [700×900px]                            │
├──────────────────────────────────────────────────────────────────────────┤
│ [학생A와 동일한 구조]                                                    │
└──────────────────────────────────────────────────────────────────────────┘

[6-12 students total, each with Methods + Results pair]


┌─────────────────────────────────────────────────────────────────────────┐
│ 💬 PEER REVIEW ZONE (8 minutes)                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ Pair up: Each student reviews ONE peer's bulletproofing work            │
│ - 학생A → 학생B 평가                                                     │
│ - 학생B → 학생C 평가                                                     │
│ - ...                                                                    │
│                                                                          │
│ Use Figma comments (C key) on peer's zones:                             │
│ ✅ "Excellent fix! Reproducibility improved from 2/5 to 4/5"             │
│ ⚠️ "Still need to add manipulation check results"                       │
│ 💡 "Try Recipe #36 for alternative explanations - found 2 more controls" │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────┐
│ 🏆 RECIPE LIBRARY - WEEK 4 BULLETPROOFING (5 minutes curation)          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ Instructor nominates best bulletproofing strategies discovered in class │
│                                                                          │
│ [Recipe cards will be added during class based on student discoveries]  │
│                                                                          │
│ Placeholder for instructor curation:                                    │
│                                                                          │
│ ┌──────────────────────────────────────────────────────────────────┐   │
│ │ 🏆 Recipe #41 by 학생___ (nominated)                             │   │
│ │ "________________"                                                │   │
│ │ ⭐⭐⭐⭐⭐ (to be voted)                                           │   │
│ ├──────────────────────────────────────────────────────────────────┤   │
│ │ 📝 Use Case:                                                      │   │
│ │ [When is this recipe most useful?]                               │   │
│ │                                                                   │   │
│ │ 🤖 Prompt:                                                        │   │
│ │ ```                                                               │   │
│ │ [Exact prompt that worked well]                                  │   │
│ │ ```                                                               │   │
│ │                                                                   │   │
│ │ 💡 Why It Works:                                                  │   │
│ │ [Mechanism explanation]                                           │   │
│ │                                                                   │   │
│ │ 📊 Results Example:                                               │   │
│ │ Before: [original problematic text]                              │   │
│ │ After: [improved text after using recipe]                        │   │
│ └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│ [Additional recipe cards added during workshop]                         │
│                                                                          │
│ Link to previous weeks:                                                 │
│ ← Week 3 Recipe Library | Week 5 Recipe Library (coming) →              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Workshop Facilitation Guide

### Setup (Before Class - 10 minutes)

1. **Copy Figma Template**
   - Duplicate this template canvas
   - Adjust number of student zones (6-12 typical)
   - Generate sharing link with edit permissions

2. **Prepare Reference Panel**
   - Verify all 10 rejection reasons visible
   - Check all 6 recipes (#35-40) are complete
   - Ensure evaluation criteria clear

3. **Send to Students**
   - Email Figma link 5 minutes before class
   - Include brief instruction: "Open link, find your zone"

### During Workshop

#### Phase 1: Individual Audit (12 minutes)

**Instructor Script**:
> "지금부터 12분간 자신의 Methods/Results를 AI로 audit합니다.
>
> **단계:**
> 1. 자신의 zone 찾기 (이름 확인)
> 2. Methods/Results 핵심 부분 복사 (각 3-5 문장)
> 3. Recipe #35-40 중 최소 2개 사용
> 4. AI 결과 붙여넣기
> 5. Top 3 critical issues 식별
> 6. 가장 심각한 1개 Before→After 수정
>
> **목표**: Top 10 rejection reasons 중 어떤 것이 내 약점인지 파악!"

**Monitoring Tips**:
- Watch for students stuck on recipe selection → Suggest Recipe #35 (easiest starting point)
- Look for good Before→After examples → React with 👍 emoji
- Identify common vulnerabilities across students → Note for discussion

#### Phase 2: Peer Review (8 minutes)

**Instructor Script**:
> "이제 8분간 동료 1명의 audit 결과를 평가합니다.
>
> **Round-robin pairs**: 학생A→B, B→C, C→D, ...
>
> **평가 기준**:
> 1. ✅ Excellent fix: Rejection reason 완전히 해결
> 2. ⚠️ Still need: 추가 필요한 개선사항
> 3. 💡 Suggestion: 도움될 만한 recipe/전략
>
> **Figma에서 C키 눌러 comment 남기세요!**"

**Facilitation**:
- Encourage specific feedback (not "good job")
- Model good comments: "@학생B Recipe #36 써보세요 - alternative explanation 2개 더 찾을 수 있어요"
- Highlight constructive criticism examples

#### Phase 3: Recipe Curation (5 minutes)

**Instructor Script**:
> "마지막 5분은 오늘 발견한 best bulletproofing 전략을 공유합니다.
>
> **제가 지금 canvas를 돌면서**:
> - 특히 효과적이었던 Before→After 사례
> - 새로운 recipe 변형
> - 독창적 audit 접근법
>
> **을 Recipe Library에 추가하겠습니다.
> 투표는 다음 주까지 Figma에서!"**

**Curation Process**:
1. Scroll through all student zones
2. Identify 2-3 exemplary strategies (bookmark with @everyone mention)
3. Add to Recipe Library with student credit
4. Take screenshot for next week's reference

---

## Post-Workshop

### Export and Archive

1. **Export to PDF**: File → Export → PDF (full canvas)
2. **Save Screenshots**: Capture best Before→After examples
3. **Recipe Collection**: Copy new recipes to Week 4 lecture notes

### Follow-up

Students continue bulletproofing their Methods/Results for homework:
- Address all critical issues (🔴) before next class
- Incorporate peer feedback
- Submit bulletproofing documentation (see lecture notes assignment)

---

## Technical Notes

### Figma Shortcuts
- **N key**: Add Sticky Note for problem identification
- **C key**: Add Comment for peer feedback
- **Spacebar + drag**: Pan across large canvas
- **Cmd/Ctrl + scroll**: Zoom in/out

### Common Issues

**"AI gave generic advice, not specific to my Methods"**
→ Solution: Include exact Methods text in prompt (not just "I have a Methods section")

**"I don't know which recipe to start with"**
→ Solution: Always start with Recipe #35 (Reproducibility Scanner) - easiest entry point

**"AI found 10 problems, I can't fix all in 12 minutes"**
→ Solution: Fix only Top 1 critical issue now, rest for homework

**"My Results has no overclaiming - AI gave me nothing"**
→ Solution: Try Recipe #39 (Statistical Rigor Auditor) instead

---

## Success Metrics

**Workshop succeeds if**:
- ✅ Every student identifies at least 3 critical vulnerabilities
- ✅ Every student completes 1 Before→After fix
- ✅ Peer reviews provide specific, actionable feedback
- ✅ At least 2 new recipes added to library

**Individual success**:
- 🎯 Can classify own weaknesses into Top 10 rejection reasons
- 🎯 Can use AI to systematically audit Methods/Results
- 🎯 Can write bulletproofed text (reproducible, controlled, rigorous)

---

## Related Materials

**Templates**:
- `template_4.2_red_team_blue_team.md`: Game-based statistical rigor practice
- `template_4.3_reproducibility_checklist.md`: Detailed 6-element scoring
- `template_4.4_peer_review_rubric.md`: Comprehensive peer evaluation

**Lecture Notes**:
- `week4/lecture_notes.md`: Full bulletproofing strategies (718 lines)

**Previous Week**:
- `week3/template_3.4_recipe_library_week3.md`: Gap discovery recipes (builds on)

**Next Week**:
- `week5/template_5.1_*`: Discussion section strategies (uses bulletproofed Methods/Results)

---

**Template Version**: 1.0
**Last Updated**: 2025-10-09
**Use**: Week 4 workshop - Bulletproofing audit with AI-assisted systematic review

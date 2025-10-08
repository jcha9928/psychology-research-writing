# Week 3 Revision Strategy: Systematic Gap Identification Workflows

## 핵심 목표
Remove: RAG 개념 설명 (윤경생 박사 강의와 중복)
Add: 체계적 연구 공백 발견 및 검증 워크플로우 (탑 5% 논문을 위한 실전 전략)

---

## 1. 탑티어 저널의 "Gap" 기준

### 1.1 일반 저널 vs Nature/Science의 Gap 차이
**일반 저널에서 허용되는 Gap:**
- "이 조건에서는 아직 실험이 안 됐다" (incremental gap)
- "이 집단에서는 측정이 안 됐다" (population gap)
- "이 방법으로는 시도가 안 됐다" (methodological gap)

**Nature/Science가 요구하는 Gap:**
- **Conceptual gap**: 기존 이론으로 설명할 수 없는 현상
- **Mechanistic gap**: 알려진 현상의 작동 원리가 불명확
- **Translational gap**: 기초 발견이 응용으로 연결 안 됨
- **Paradox/Contradiction**: 서로 모순되는 연구 결과들

### 1.2 실습: Gap Quality 평가
**활동:**
- 학생들에게 5개의 gap statement 제시 (incremental 2개 + conceptual 3개)
- 각각이 Nature/Science에 적합한지 투표 및 토론
- AI에게 "이 gap이 탑티어 저널에 적합한지" 평가 요청

**프롬프트 레시피:**
- "다음 research gap을 평가해줘: (1) Incremental vs Conceptual gap 분류, (2) Nature/Science 적합성 점수 (1-10), (3) Gap을 더 강화하려면 어떻게 프레이밍해야 하는지 제안해줘."

---

## 2. 체계적 Gap 발견 워크플로우

### 2.1 Stage 1: Broad Landscape Mapping (전체 지형 파악)
**목표:** 연구 분야의 현재 consensus와 주요 논쟁 파악

**AI 활용 전략:**
```
Step 1: Topic Landscape Query
"[Your topic]에 대한 최근 10년간 연구의 주요 발견 5가지와
아직 해결되지 않은 핵심 질문 3가지를 요약해줘.
각 항목에 대표 논문 제목을 포함해줘."

Step 2: Contradiction Mining
"[Your topic] 연구에서 서로 모순되거나 일치하지 않는
연구 결과들을 찾아줘. 왜 이런 불일치가 생겼는지 가능한 이유도 제시해줘."

Step 3: Cross-disciplinary Connection
"[Your topic]과 관련이 있지만 아직 연결되지 않은
다른 분야의 최신 발견 3가지를 제안해줘."
```

**학생 산출물:**
- Landscape map (consensus + debates + unexplored areas)
- AI가 제시한 내용을 실제 논문으로 검증 (최소 5편)

---

### 2.2 Stage 2: Critical Review Analysis (비판적 분석)
**목표:** 기존 연구의 한계점 체계적으로 식별

**4가지 한계 유형:**
1. **Methodological limitations**: 측정 방법, 샘플 사이즈, 통제 조건
2. **Theoretical limitations**: 설명력 한계, 대안 이론 부재
3. **Generalizability limitations**: 특정 조건/집단에만 적용
4. **Translational limitations**: 실제 응용으로의 연결 부재

**AI-powered Limitation Mining:**
```
"다음 논문들의 한계점을 4가지 카테고리로 분석해줘:
[논문 초록 5개 입력]

각 카테고리별로:
1. 공통적으로 나타나는 한계점
2. 이 한계점들이 만드는 research gap
3. 이 gap을 해결하면 얻을 수 있는 임팩트"
```

**동료 검증 프로토콜:**
- 2명의 동료와 한계점 리스트 교환
- "이 한계점이 실제로 중요한 gap인가?" 평가
- AI를 활용해 가장 유망한 gap 3개 선별

---

### 2.3 Stage 3: Gap Validation (공백 검증)
**목표:** 발견한 gap이 실제로 연구되지 않았는지 확인

**False Gap 방지 전략:**
많은 학생들이 "gap을 발견했다!"고 생각했지만 실제로는:
- 이미 다른 분야에서 연구됨
- 최근 논문에서 다뤄짐 (문헌 검색 부족)
- 기술적/윤리적 이유로 연구 불가능

**AI-assisted Gap Validation:**
```
"내가 발견한 gap: [gap statement]

다음을 확인해줘:
1. 이 gap을 다룬 최근 5년 논문이 있는가? (있다면 어떤 논문?)
2. 이 gap이 연구되지 않은 이유가 무엇일 수 있는가?
   (기술적 한계? 윤리적 문제? 낮은 우선순위?)
3. 이 gap을 연구하려면 어떤 새로운 방법/도구가 필요한가?
4. 이 gap이 '진짜 gap'이라면, 왜 지금이 연구하기 좋은 시점인가?"
```

**검증 체크리스트:**
- [ ] Google Scholar에서 유사 연구 검색 (키워드 5개 조합)
- [ ] AI 제시 논문들을 실제로 읽고 gap 여부 재확인
- [ ] 동료 3명에게 "이 gap이 진짜인가?" 질문
- [ ] 지도교수/전문가에게 최종 검증

---

## 3. Gap Statement Crafting (공백 진술 작성)

### 3.1 약한 Gap Statement vs 강한 Gap Statement
**약한 예시:**
- "X에 대한 연구가 부족하다"
- "Y 조건에서는 측정되지 않았다"
- "Z 방법은 아직 시도되지 않았다"

**강한 예시:**
- "X와 Y 사이의 모순은 기존 이론으로 설명할 수 없으며, 새로운 메커니즘을 시사한다"
- "Z 현상이 발견되었지만, 이를 일으키는 근본 원리는 불명확하다"
- "A에서의 성공적 발견이 B로 전환되지 못하는 이유가 밝혀지지 않았다"

### 3.2 AI를 활용한 Gap Statement 강화
**워크플로우:**
```
Step 1: 초안 작성
학생이 gap을 1-2문장으로 기술

Step 2: AI 강화 요청
"다음 gap statement를 Nature/Science 수준으로 강화해줘:
[초안]

다음 요소들을 포함해서:
1. 왜 이 gap이 중요한가 (broader significance)
2. 기존 연구들이 이 gap을 해결하지 못한 이유
3. 이 gap을 해결하면 얻을 수 있는 conceptual/practical advance
4. 3가지 버전으로 제시 (각각 다른 framing 전략)"

Step 3: 동료 피드백
3가지 버전 중 어느 것이 가장 설득력 있는가?

Step 4: 최종 정제
선택된 버전을 AI로 다시 정제
```

---

## 4. 문헌 리뷰의 Gap-Driven 구조화

### 4.1 전통적 구조 vs Gap-Driven 구조
**전통적 구조 (약함):**
- "A는 X를 발견했다. B는 Y를 발견했다. C는 Z를 발견했다."
- → 단순 나열, gap이 드러나지 않음

**Gap-Driven 구조 (강함):**
```
1. Established Knowledge (확립된 지식)
   "우리는 X에 대해 이것을 안다"

2. Emerging Challenges (새로운 도전)
   "그러나 최근 발견들은 이 지식에 의문을 제기한다"

3. Critical Gap (핵심 공백)
   "이런 의문들이 모여서 다음 gap을 만든다"

4. Opportunity (기회)
   "새로운 방법/관점이 이 gap을 해결할 수 있게 한다"
```

### 4.2 AI를 활용한 구조 변환
**프롬프트 레시피:**
```
"다음 문헌 리뷰를 gap-driven 구조로 재구성해줘:
[현재 문헌 리뷰]

재구성 시:
1. Established knowledge (consensus) 섹션
2. Emerging challenges (contradictions/limitations) 섹션
3. Critical gap statement (what we don't know) 섹션
4. Research opportunity (why now is the time) 섹션

각 섹션에서 어떤 논문들을 인용할지 제안해줘."
```

---

## 5. Gap의 Feasibility 평가

### 5.1 "발견 가능한 Gap" vs "연구 불가능한 Gap"
**좋은 Gap의 조건:**
- [ ] Addressable: 현재 기술/방법으로 연구 가능
- [ ] Significant: 해결 시 분야에 의미 있는 기여
- [ ] Novel: 실제로 연구되지 않음
- [ ] Timely: 지금 연구하기에 적절한 시기

**나쁜 Gap의 특징:**
- [ ] Too broad: "의식의 본질은 무엇인가" (해결 불가)
- [ ] Trivial: 해결해도 임팩트가 미미
- [ ] Already solved: 문헌 검색 부족으로 놓침
- [ ] Premature: 필요한 기술/이론이 아직 준비 안 됨

### 5.2 AI-powered Feasibility Check
```
"내가 발견한 gap: [gap statement]

다음을 평가해줘:
1. Addressability (1-10점): 현재 방법으로 연구 가능한가?
   - 필요한 방법/도구/자원 리스트
   - 각각의 접근 가능성 평가

2. Significance (1-10점): 해결 시 임팩트는?
   - 학문적 기여 (어떤 이론/개념에 영향?)
   - 실용적 기여 (어떤 응용 가능?)

3. Novelty (1-10점): 실제로 연구 안 됐는가?
   - 유사 연구 5개 제시
   - 내 gap과의 차이점 설명

4. Timeliness (1-10점): 지금이 적기인가?
   - 최근 기술/방법의 발전
   - 사회적/학문적 urgency

종합 점수 및 추천 (계속 진행 vs 다른 gap 탐색)"
```

---

## 6. 동료 Gap Review 프로토콜

### 6.1 Structured Gap Peer Review
**각 학생이 2명의 동료 gap을 평가:**

**평가 양식:**
```
Gap Statement: [동료가 제시한 gap]

1. Gap Quality (1-5점)
   □ Incremental gap (1-2점)
   □ Methodological gap (3점)
   □ Conceptual/Mechanistic gap (4-5점)

2. Novelty Verification (1-5점)
   - 내가 아는 유사 연구: [있다면 제시]
   - 실제 gap인 것 같은가?

3. Significance (1-5점)
   - 해결하면 분야에 어떤 임팩트?
   - Broad scientific community가 관심 가질까?

4. Feasibility (1-5점)
   - 현재 기술/방법으로 연구 가능한가?
   - 현실적인 타임라인?

5. 건설적 피드백
   - 이 gap을 더 강화하려면?
   - 대안 framing 제안
   - 추가로 검토할 문헌
```

### 6.2 피드백 통합 워크플로우
```
학생 gap 초안 →
AI 강화 버전 3개 생성 →
동료 2명 평가 →
평가 결과를 AI에 입력 →
"동료 피드백을 반영한 최종 gap statement와
이를 뒷받침할 문헌 리스트 제시" 요청 →
최종안
```

---

## 7. 실습 워크플로우 (90분 수업 기준)

### Phase 1: Gap Discovery (30분)
- **Activity 1** (15분): AI를 활용한 landscape mapping
  - 각자 자신의 연구 주제로 contradiction mining
  - Cross-disciplinary connection 탐색

- **Activity 2** (15분): Critical review analysis
  - 주요 논문 5편의 한계점을 4가지 카테고리로 분류
  - AI로 공통 한계점에서 gap 도출

### Phase 2: Gap Validation & Crafting (30분)
- **Activity 3** (15분): Gap validation
  - AI로 false gap 체크
  - Google Scholar로 실제 검증

- **Activity 4** (15분): Gap statement crafting
  - AI로 3가지 버전 생성
  - 강한 gap statement 요소 포함 여부 체크

### Phase 3: Peer Review (20분)
- 2명의 동료 gap을 structured template로 평가
- 피드백 주고받기

### Phase 4: 최종 정제 + 공유 (10분)
- AI를 활용해 피드백 반영
- 가장 효과적이었던 gap discovery 전략 공유

---

## 8. 과제 및 평가

### 과제: "My Research Gap - Validated & Justified"
1. **Gap Discovery Documentation:**
   - Landscape mapping 결과
   - Critical review analysis (논문 5편 이상)
   - Gap validation 과정 (검색 키워드, 확인한 논문, AI 검증)

2. **Gap Statement:**
   - 최종 gap statement (150-200 words)
   - Gap-driven 문헌 리뷰 구조 (500 words)

3. **AI 활용 과정:**
   - 사용한 프롬프트 레시피 5개 이상
   - 각 단계에서 AI가 어떻게 도움이 됐는지
   - AI의 한계 및 인간 판단이 필요했던 지점

4. **Peer Review 반영:**
   - 받은 피드백 요약
   - 피드백을 어떻게 반영했는지

### 평가 기준:
- **Gap Quality** (35%): Conceptual depth, novelty, significance
- **Validation Rigor** (25%): 체계적 검증, false gap 방지
- **AI 활용 효과성** (25%): 전략적 프롬프트 사용, 비판적 검토
- **동료 피드백 품질** (15%): 구체성, 건설성, 반영 여부

---

## 9. 학습 목표 재정의

**변경 전 (RAG 개념 중심):**
- RAG 기법의 원리 이해
- AI를 활용한 문헌 검색 및 요약 방법 학습
- Hallucination 문제 인식

**변경 후 (Gap 발견 전략 중심):**
- Incremental vs Conceptual gap 구분 및 탑티어 기준 파악
- 체계적 gap discovery 워크플로우 실행 (landscape mapping → critical analysis → validation)
- 강한 gap statement crafting 및 gap-driven 문헌 리뷰 구조화
- AI를 활용한 gap 검증 및 feasibility 평가
- **궁극 목표**: Nature/Science급 research gap 발견 및 정당화 능력 개발

# 3주차 강의노트: AI 활용Ⅱ – 체계적 Research Gap 발견 및 검증

> **전제**: 윤경생 박사님 강의에서 RAG (Retrieval-Augmented Generation) 기법을 이미 학습했다는 전제하에 진행합니다. 본 강의에서는 RAG **기술**이 아닌, "어떤 Gap이 탑티어 저널에 적합한가?" 그리고 "어떻게 체계적으로 Gap을 발견하고 검증하는가?"에 집중합니다.

## 학습 목표
- **Incremental vs Conceptual gap** 구분 및 탑티어 기준 파악
- **체계적 gap discovery 워크플로우** 실행 (landscape mapping → critical analysis → validation)
- **강한 gap statement crafting** 및 gap-driven 문헌 리뷰 구조화
- AI를 활용한 gap 검증 및 feasibility 평가
- **궁극 목표: Nature/Science급 research gap 발견 및 정당화 능력 개발**

---

## 📚 수업 전 준비 (과제)

**필수 과제**: Literature review 초안 + Gap statement 작성
- Introduction 섹션의 문헌 리뷰 부분 (800-1000 words)
- 자신의 연구 gap을 1-2 단락으로 명확히 서술
- Week 2에서 작성한 초록의 gap을 확장하는 형태도 가능
- 완벽하지 않아도 됨 - 수업에서 AI로 개선하고 검증할 예정

---

## 🎓 90분 Workshop 구조

**강의 15-20분** + **Workshop/Discussion 70-75분**

학생들은 자신의 literature review와 gap statement를 가지고 와서:
- AI로 gap의 질을 평가 (Incremental vs Conceptual)
- 체계적 gap validation 워크플로우 실행
- False gap 걸러내기
- Gap-driven 구조로 재구성
- 동료 피드백 및 개선

---

## 📊 90분 In-Class Workshop 진행

### 짧은 강의 (15-20분)

**핵심 개념 리뷰:**

## 1. 탑티어 저널의 "Gap" 기준

### 1.1 일반 저널 vs Nature/Science의 Gap 차이

| Gap 유형 | 일반 저널 (허용) | Nature/Science (요구) |
|---------|-----------------|---------------------|
| **Incremental** | ✅ "이 조건에서는 아직 실험 안 됨" | ❌ 탑티어 부적합 |
| **Population** | ✅ "이 집단에서는 측정 안 됨" | ❌ 탑티어 부적합 |
| **Methodological** | ✅ "이 방법으로는 시도 안 됨" | ⚠️ 방법이 혁신적이면 가능 |
| **Conceptual** | ⚠️ 드물지만 허용 | ✅ **이론으로 설명 안 됨** |
| **Mechanistic** | ⚠️ 드물지만 허용 | ✅ **작동 원리 불명확** |
| **Translational** | 가끔 허용 | ✅ **기초→응용 연결 안 됨** |
| **Paradox** | 드물게 허용 | ✅ **모순 결과들 존재** |

### 1.2 실습: Gap Quality 평가

**활동:**
교수가 제시하는 5개의 gap statement:
1. "작업 기억과 주의의 관계가 노인 집단에서는 측정되지 않았다" (incremental)
2. "A와 B 연구는 반대 결과를 보고했지만, 왜 다른지 설명되지 않았다" (paradox/conceptual)
3. "X 현상이 관찰되지만, 어떤 신경 메커니즘이 이를 일으키는지 불명확하다" (mechanistic)
4. "fMRI로는 연구됐지만 EEG로는 시도 안 됐다" (methodological)
5. "동물 모델에서 성공했지만, 인간 치료로 전환되지 못했다" (translational)

**질문:**
- 각각이 Nature/Science에 적합한지 투표
- AI에게 평가 요청 후 비교

**AI 프롬프트 레시피:**
```
"다음 5개 research gap을 평가해줘. 각각에 대해:
(1) Gap 유형 분류 (incremental/conceptual/mechanistic/translational/paradox)
(2) Nature/Science 적합성 점수 (1-10)
(3) 적합하지 않다면, 어떻게 프레이밍하면 강화될지 제안

[Gap 1] ...
[Gap 2] ...
...
"
```

---

## 2. 체계적 Gap 발견 워크플로우

### Stage 1: Broad Landscape Mapping (전체 지형 파악)

**목표:** 연구 분야의 현재 consensus와 주요 논쟁 파악

#### AI 활용 전략

**Step 1: Topic Landscape Query**
```
프롬프트:
"[Your topic]에 대한 최근 10년간 연구의 주요 발견 5가지와
아직 해결되지 않은 핵심 질문 3가지를 요약해줘.
각 항목에 대표 논문 제목을 포함해줘."
```

**Step 2: Contradiction Mining**
```
프롬프트:
"[Your topic] 연구에서 서로 모순되거나 일치하지 않는
연구 결과들을 찾아줘. 왜 이런 불일치가 생겼는지 가능한 이유도 제시해줘."
```

**Step 3: Cross-disciplinary Connection**
```
프롬프트:
"[Your topic]과 관련이 있지만 아직 연결되지 않은
다른 분야의 최신 발견 3가지를 제안해줘."
```

#### 학생 산출물
- **Landscape map**: Consensus + Debates + Unexplored areas
- **검증**: AI가 제시한 논문 중 최소 5편을 Google Scholar에서 실제 확인

---

### Stage 2: Critical Review Analysis (비판적 분석)

**목표:** 기존 연구의 한계점 체계적으로 식별

#### 4가지 한계 유형

1. **Methodological limitations**
   - 측정 방법의 한계 (정밀도, 타당도)
   - 샘플 사이즈 부족
   - 통제 조건 미흡

2. **Theoretical limitations**
   - 설명력 한계 (현상 설명 못함)
   - 대안 이론 부재
   - 예측력 제한

3. **Generalizability limitations**
   - 특정 조건/집단에만 적용
   - 실험실 환경에만 국한
   - 문화적 특수성

4. **Translational limitations**
   - 기초 발견 → 실제 응용 연결 안 됨
   - 임상/산업 적용 어려움
   - 스케일업 문제

#### AI-powered Limitation Mining

```
프롬프트:
"다음 논문들의 한계점을 4가지 카테고리로 분석해줘:

[논문 1 초록]
[논문 2 초록]
[논문 3 초록]
[논문 4 초록]
[논문 5 초록]

각 카테고리별로:
1. 공통적으로 나타나는 한계점
2. 이 한계점들이 만드는 research gap
3. 이 gap을 해결하면 얻을 수 있는 임팩트"
```

#### 동료 검증 프로토콜
- 2명의 동료와 한계점 리스트 교환
- "이 한계점이 실제로 중요한 gap인가?" 평가
- AI를 활용해 가장 유망한 gap 3개 선별

---

### Stage 3: Gap Validation (공백 검증)

**목표:** 발견한 gap이 실제로 연구되지 않았는지 확인

#### False Gap 방지 전략

**많은 학생들이 하는 실수:**
- ❌ "Gap을 발견했다!" → 실제로는 다른 분야에서 이미 연구됨
- ❌ 최근 논문에서 다뤄짐 (문헌 검색 부족)
- ❌ 기술적/윤리적 이유로 연구 불가능

#### AI-assisted Gap Validation

```
프롬프트:
"내가 발견한 gap: [gap statement]

다음을 확인해줘:
1. 이 gap을 다룬 최근 5년 논문이 있는가? (있다면 어떤 논문?)
2. 이 gap이 연구되지 않은 이유가 무엇일 수 있는가?
   (기술적 한계? 윤리적 문제? 낮은 우선순위?)
3. 이 gap을 연구하려면 어떤 새로운 방법/도구가 필요한가?
4. 이 gap이 '진짜 gap'이라면, 왜 지금이 연구하기 좋은 시점인가?"
```

#### 검증 체크리스트
- [ ] Google Scholar에서 유사 연구 검색 (키워드 5개 조합)
- [ ] AI 제시 논문들을 실제로 읽고 gap 여부 재확인
- [ ] 동료 3명에게 "이 gap이 진짜인가?" 질문
- [ ] 지도교수/전문가에게 최종 검증

---

## 3. Gap Statement Crafting (공백 진술 작성)

### 3.1 약한 Gap Statement vs 강한 Gap Statement

#### ❌ 약한 예시
- "X에 대한 연구가 부족하다" → 모호함, 왜 중요한지 불명확
- "Y 조건에서는 측정되지 않았다" → Incremental gap, 탑티어 부적합
- "Z 방법은 아직 시도되지 않았다" → Methodological gap, 혁신성 없으면 부적합

#### ✅ 강한 예시
- "X와 Y 사이의 모순은 기존 이론으로 설명할 수 없으며, 새로운 메커니즘을 시사한다"
  → Conceptual gap + 이론적 의미

- "Z 현상이 발견되었지만, 이를 일으키는 근본 원리는 불명확하다"
  → Mechanistic gap + 발견의 중요성

- "A에서의 성공적 발견이 B로 전환되지 못하는 이유가 밝혀지지 않았다"
  → Translational gap + 응용 가능성

### 3.2 AI를 활용한 Gap Statement 강화

**워크플로우:**
```
Step 1: 학생이 gap을 1-2문장으로 기술

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

## 4. Gap-Driven 문헌 리뷰 구조화

### 4.1 전통적 구조 vs Gap-Driven 구조

#### ❌ 전통적 구조 (약함)
```
"Smith (2020)는 X를 발견했다. Jones (2021)는 Y를 발견했다.
Brown (2022)는 Z를 발견했다."

문제점:
- 단순 나열, gap이 드러나지 않음
- 연결성 부족
- 비판 없음
```

#### ✅ Gap-Driven 구조 (강함)
```
1. Established Knowledge (확립된 지식)
   "우리는 X에 대해 이것을 안다" (여러 연구 통합)

2. Emerging Challenges (새로운 도전)
   "그러나 최근 발견들은 이 지식에 의문을 제기한다" (모순/한계)

3. Critical Gap (핵심 공백)
   "이런 의문들이 모여서 다음 gap을 만든다" (명확한 gap statement)

4. Research Opportunity (기회)
   "새로운 방법/관점이 이 gap을 해결할 수 있게 한다" (본 연구의 기여)
```

### 4.2 AI를 활용한 구조 변환

**프롬프트 레시피:**
```
"다음 문헌 리뷰를 gap-driven 구조로 재구성해줘:
[현재 문헌 리뷰]

재구성 시:
1. Established knowledge (consensus) 섹션
   - 여러 연구를 통합해서 "우리가 아는 것"
2. Emerging challenges (contradictions/limitations) 섹션
   - 모순/한계를 명확히
3. Critical gap statement (what we don't know) 섹션
   - 해결되지 않은 핵심 질문
4. Research opportunity (why now is the time) 섹션
   - 왜 지금 이 gap을 연구할 수 있는가

각 섹션에서 어떤 논문들을 인용할지 제안해줘."
```

---

## 5. Gap의 Feasibility 평가

### 5.1 "발견 가능한 Gap" vs "연구 불가능한 Gap"

#### ✅ 좋은 Gap의 조건
- [ ] **Addressable**: 현재 기술/방법으로 연구 가능
- [ ] **Significant**: 해결 시 분야에 의미 있는 기여
- [ ] **Novel**: 실제로 연구되지 않음 (검증 완료)
- [ ] **Timely**: 지금 연구하기에 적절한 시기

#### ❌ 나쁜 Gap의 특징
- [ ] **Too broad**: "의식의 본질은 무엇인가" (해결 불가)
- [ ] **Trivial**: 해결해도 임팩트가 미미
- [ ] **Already solved**: 문헌 검색 부족으로 놓침
- [ ] **Premature**: 필요한 기술/이론이 아직 준비 안 됨

### 5.2 AI-powered Feasibility Check

```
프롬프트:
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

종합 점수 (평균) 및 추천:
- 7점 이상: 계속 진행
- 5-7점: gap statement 강화 후 재평가
- 5점 미만: 다른 gap 탐색 권장"
```

---

## 6. 동료 Gap Review 프로토콜

### 6.1 Structured Gap Peer Review

**각 학생이 2명의 동료 gap을 평가:**

```
=== Gap Statement: ________________
[동료가 제시한 gap statement]

1. Gap Quality (1-5점): ___
   분류:
   □ Incremental gap (1-2점) - 탑티어 부적합
   □ Methodological gap (3점) - 혁신성 있으면 가능
   □ Conceptual/Mechanistic/Translational gap (4-5점) - 탑티어 적합

2. Novelty Verification (1-5점): ___
   - 내가 아는 유사 연구가 있는가?
     [있다면 논문 제목/저자 제시]
   - 실제 gap인 것 같은가?
   - Google Scholar 검색 추천 키워드:

3. Significance (1-5점): ___
   - 해결하면 분야에 어떤 임팩트?
   - Broad scientific community가 관심 가질까?
   - Societal/clinical relevance는?

4. Feasibility (1-5점): ___
   - 현재 기술/방법으로 연구 가능한가?
   - 현실적인 타임라인? (학위 논문 범위 내?)
   - 필요한 자원은? (장비, 예산, 전문성)

=== 건설적 피드백:
이 gap을 더 강화하려면:

대안 framing 제안:

추가로 검토할 문헌:
```

### 6.2 피드백 통합 워크플로우

```
학생 gap 초안
   ↓
AI 강화 버전 3개 생성
   ↓
동료 2명 평가 (structured template)
   ↓
평가 결과를 AI에 입력
   ↓
프롬프트: "동료 피드백을 반영한 최종 gap statement와
이를 뒷받침할 문헌 리스트 제시"
   ↓
최종안
```

---

## Workshop 실습 (70-75분)

### Phase 1: Gap Discovery (20분)

**Activity 1 (10분): AI를 활용한 landscape mapping**
- 각자 자신의 연구 주제로 contradiction mining
- Cross-disciplinary connection 탐색
- AI 제시 논문 중 3편 Google Scholar 검증

**Activity 2 (10분): Critical review analysis**
- 주요 논문 5편의 한계점을 4가지 카테고리로 분류
- AI로 공통 한계점에서 gap 도출
- 가장 유망한 gap 3개 선별

### Phase 2: Gap Validation & Crafting (25분)

**Activity 3 (12분): Gap validation**
- AI로 false gap 체크
- Google Scholar로 실제 검증 (키워드 5개 조합)
- 동료에게 "진짜 gap인가?" 질문

**Activity 4 (13분): Gap statement crafting**
- AI로 3가지 버전 생성 (다른 framing)
- 강한 gap statement 요소 포함 여부 체크
  - Broader significance?
  - 기존 연구가 해결 못한 이유?
  - Conceptual/practical advance?

### Phase 3: Peer Review (20분)

**Activity 5: Structured gap peer review**
- 2명의 동료 gap을 template로 평가 (15분)
- 피드백 주고받기 (5분)

### Phase 4: 최종 정제 + 공유 (10분)

**Activity 6: AI를 활용한 피드백 반영**
- 동료 피드백을 반영한 최종안 생성 (7분)
- 가장 효과적이었던 gap discovery 전략 공유 (3분)
  - 어떤 AI 프롬프트가 유용했는가?
  - False gap을 어떻게 걸러냈는가?

**총 Workshop 시간: 75분 (강의 15-20분 포함하면 90-95분)**

---

## 과제 (다음 주까지)

### "My Research Gap - Validated & Justified"

**제출물:**

1. **Gap Discovery Documentation (800 words)**
   - **Landscape mapping 결과**
     - Consensus 3가지
     - Debates/contradictions 3가지
     - Unexplored areas 2가지
   - **Critical review analysis**
     - 논문 5편 이상 분석
     - 각 논문의 한계점 (4가지 카테고리)
     - 공통 한계점에서 도출한 gap
   - **Gap validation 과정**
     - Google Scholar 검색 키워드 및 결과
     - 확인한 논문 리스트 (유사 연구 있었는가?)
     - AI 검증 결과

2. **Gap Statement (150-200 words)**
   - 최종 gap statement (1-2 단락)
   - 포함 요소:
     - 왜 이 gap이 중요한가 (broader significance)
     - 기존 연구가 해결 못한 이유
     - Conceptual/practical advance

3. **Gap-driven 문헌 리뷰 구조 (500 words)**
   - Established knowledge (consensus)
   - Emerging challenges (contradictions/limitations)
   - Critical gap (what we don't know)
   - Research opportunity (why now)

4. **AI 활용 과정 (500 words)**
   - 사용한 프롬프트 레시피 **5개 이상**
   - 각 단계에서 AI가 어떻게 도움이 됐는지
   - AI의 한계 및 인간 판단이 필요했던 지점
   - False gap을 걸러낸 과정

5. **Peer Review 반영 (300 words)**
   - 받은 피드백 요약 (4가지 평가 항목별)
   - 각 피드백을 어떻게 반영했는지

### 평가 기준

- **Gap Quality (35%)**
  - Conceptual/Mechanistic/Translational depth
  - Novelty (false gap 아님)
  - Significance (broad impact)

- **Validation Rigor (25%)**
  - 체계적 검증 과정 (landscape → critical → validation)
  - False gap 방지 (Google Scholar 검색 기록)
  - 동료/전문가 검증

- **AI 활용 효과성 (25%)**
  - 전략적 프롬프트 사용 (5개 이상)
  - 비판적 검토 (AI 출력을 그대로 사용하지 않음)
  - 단계별 정제

- **동료 피드백 품질 (15%)**
  - 구체성 (모호한 평가 아닌 구체적 지적)
  - 건설성 (비판 + 개선 방안)
  - 반영 여부

---

## 핵심 메시지

### 탑티어 Gap의 조건
```
Conceptual/Mechanistic/Translational (Incremental 아님)
     +
체계적 Validation (False gap 아님)
     +
Broader Significance (전공자만이 아닌 넓은 임팩트)
     +
Feasibility (현재 기술로 연구 가능)
     =
Nature/Science급 Research Gap
```

### RAG의 역할
> "윤경생 강의에서 RAG **기술**을 배웠다면,
> 본 강의에서는 RAG를 '탑티어 Gap 발견'이라는 **목표**에 전략적으로 활용."

---

## 토론 주제

1. **Gap 유형**: 자신의 gap이 incremental인가, conceptual인가? 동료들은 동의하는가?

2. **False Gap 경험**: AI가 제시한 gap 중 실제로 이미 연구된 것이 있었는가?

3. **Validation 전략**: Gap이 진짜인지 확인하는 가장 효과적인 방법은?

4. **Broader Significance**: 자신의 gap을 "왜 Nature 리뷰어가 관심 가져야 하는가?"로 설명한다면?

---

## 다음 주 준비사항

- **Methods 및 Results 섹션 초안 작성**
  - 실험 설계 및 절차 구체적으로 서술
  - 주요 결과를 표/그림으로 정리 (가능한 경우)
  - Reproducibility checklist 충족 여부 체크

- **윤경생 강의 복습**
  - Chain-of-Thought (CoT) 프롬프팅 복습
  - 다음 주는 CoT를 "Methods/Results Bulletproofing"에 어떻게 활용하는지 배움

---

## 참고 자료

### 추천 읽기
- Nature/Science Introduction 섹션 10편
  - Gap statement가 어떻게 제시되는지 분석
  - Gap-driven 구조 패턴 파악

### 프롬프트 레시피 라이브러리
- 공유 게시판에서 동료들의 효과적 gap discovery 프롬프트 참고
- Contradiction mining, false gap check 프롬프트 적극 공유

### AI 도구 추천
- **Perplexity/Elicit**: 문헌 검색 및 모순 발견
- **ChatGPT**: Gap statement 강화, feasibility 평가
- **Claude**: 비판적 gap 검증, alternative explanation 생성
- **Google Scholar**: 최종 validation (AI 결과 확인 필수)

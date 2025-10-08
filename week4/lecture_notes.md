# 4주차 강의노트: AI 활용Ⅲ – Methods/Results Bulletproofing 전략

> **전제**: 윤경생 박사님 강의에서 Chain-of-Thought (CoT) 프롬프팅을 이미 학습했다는 전제하에 진행합니다. 본 강의에서는 CoT **기법**이 아닌, "어떻게 하면 탑티어 저널 리뷰어의 methodological/statistical 공격을 방어할 수 있는 Methods/Results를 작성하는가?"에 집중합니다.

## 학습 목표
- **탑티어 저널의 Methods/Results 거부 사유** 파악 및 예방
- **Reproducibility, control, statistical rigor** 체크리스트 실행
- **Overclaiming 방지 및 transparent reporting** 전략 적용
- AI를 활용한 self-critique 및 preemptive reviewer response
- **궁극 목표: 리뷰어의 methodological/statistical 공격을 방어할 수 있는 Methods/Results 작성 능력 개발**

---

## 1. 탑티어 저널의 Methods/Results 거부 사유

### 1.1 Common Rejection Patterns

#### Methods 섹션 거부 사유 (Top 5)

1. **Insufficient detail for reproduction**
   - "다른 연구자가 이 연구를 재현할 수 없다"
   - 예: 자극 생성 과정 불명확, 통계 파라미터 누락

2. **Inadequate controls**
   - "대안 설명을 배제하지 못했다"
   - 예: Confound 변수 통제 안 됨, negative control 없음

3. **Sample size/power issues**
   - "통계적 검정력이 부족하다"
   - 예: N 정당화 없음, multiple comparison 고려 안 됨

4. **Inappropriate statistics**
   - "분석 방법이 데이터 구조에 맞지 않다"
   - 예: 가정 위배, 잘못된 검정 선택

5. **Validation gaps**
   - "측정 도구/방법의 타당성 입증 부족"
   - 예: Manipulation check 없음, 신뢰도/타당도 보고 안 됨

#### Results 섹션 거부 사유 (Top 5)

1. **Overclaiming**
   - "데이터가 뒷받침하지 않는 주장"
   - 예: Correlation을 causation으로 주장

2. **Cherry-picking**
   - "일부 결과만 선택적 보고"
   - 예: Hypothesis에 맞는 것만 보고, 안 맞는 것 숨김

3. **Statistical issues**
   - "다중 비교 보정 누락, p-hacking 의심"
   - 예: 20개 비교 중 1개만 유의 → 그것만 보고

4. **Unclear presentation**
   - "핵심 결과가 무엇인지 불명확"
   - 예: 엄청난 양의 결과 나열, 중요도 구분 안 됨

5. **Weak effect sizes**
   - "통계적 유의성은 있지만 실질적 의미 미약"
   - 예: p < 0.001 but Cohen's d = 0.1

### 1.2 실습: Rejection Reason 진단

**활동:**
교수가 제시하는 3개의 Methods/Results 예시를 읽고, 각각의 거부 사유를 10가지 카테고리에서 찾기

**AI 프롬프트 레시피:**
```
"다음 Methods 섹션을 Nature 리뷰어 관점에서 평가해줘:
[Methods text]

다음 5가지 측면에서 약점을 지적:
1. Reproducibility (재현성)
2. Controls (통제)
3. Sample size/power (샘플/검정력)
4. Statistical appropriateness (통계 적절성)
5. Validation (타당성)

각 약점에 대해:
- 구체적 문제점
- 리뷰어가 제기할 질문
- 개선 방안"
```

---

## 2. Methods 섹션 Bulletproofing 전략

### 2.1 Reproducibility Checklist

**"다른 연구자가 정확히 재현할 수 있는가?"**

#### 필수 포함 요소

- [ ] **Participants/Subjects**
  - 모집 방법 및 장소
  - Inclusion/exclusion criteria (구체적 기준)
  - N (최종 분석 포함 + excluded N + 이유)
  - Demographics (M age, SD, gender, education 등)

- [ ] **Materials**
  - 자극/도구의 구체적 설명
  - 출처 (published source, custom-made)
  - 버전 (소프트웨어, 척도)
  - 신뢰도/타당도 (Cronbach's α, validation reference)

- [ ] **Procedure**
  - Step-by-step protocol (순서대로)
  - 각 단계의 타이밍/지속 시간
  - 지시문 (verbatim or paraphrased)
  - 실험 환경 (조명, 거리, 화면 크기 등)

- [ ] **Parameters**
  - 모든 변수의 정확한 값
  - 범위, 단위
  - Randomization/counterbalancing 방법

- [ ] **Software/Equipment**
  - 이름, 버전, manufacturer
  - 설정값 (resolution, sampling rate 등)

- [ ] **Data processing**
  - Raw data → analyzed data 변환 과정
  - Preprocessing steps (filtering, normalization 등)
  - Exclusion criteria for trials/participants

#### AI-assisted Reproducibility Audit

```
프롬프트:
"다음 Methods 섹션을 읽고, 다른 연구자가 재현하려 할 때
막힐 수 있는 지점 10가지를 찾아줘:
[Methods text]

각 지점에 대해:
1. 무엇이 불명확한가?
2. 어떤 정보가 추가로 필요한가?
3. 구체적으로 어떻게 기술해야 하는가?
   (Before → After 예시 포함)"
```

**예시 출력:**
```
지점 1: "Participants were recruited online"
문제: 어떤 플랫폼? 어떤 광고 문구?
필요 정보: 모집 플랫폼, 광고 내용, screening 절차
개선:
Before: "Participants were recruited online"
After: "Participants were recruited via Prolific (www.prolific.co)
       using the screening criteria: native English speakers,
       18-35 years old, no history of neurological disorders"
```

---

### 2.2 Control Strategy Validation

**"대안 설명을 충분히 배제했는가?"**

#### 4가지 Control 유형

1. **Positive controls**
   - 기대되는 효과가 실제로 나타나는가?
   - 예: Known effective manipulation이 예상대로 작동하는지 확인

2. **Negative controls**
   - 효과가 없어야 할 조건에서 실제로 없는가?
   - 예: Sham stimulation 조건에서 효과 없음

3. **Confound controls**
   - 혼재 변수를 통제했는가?
   - 예: Task difficulty, arousal, expectation 통제

4. **Validation controls**
   - 측정이 의도한 것을 측정하는가?
   - 예: Manipulation check, attention check

#### AI-powered Alternative Explanation Generator

```
프롬프트:
"내 연구 디자인:
- Manipulation: [설명]
- Measurement: [설명]
- Expected result: [설명]

다음을 생성해줘:
1. Alternative explanations
   (내 조작 외에 결과를 설명할 수 있는 요인 5가지)
2. 각 alternative를 배제하기 위한 control 조건
3. 리뷰어가 지적할 가능성이 높은 confound 3가지
4. 각 confound를 다루는 방법

그리고 현재 내 Methods에서:
- 충분히 다뤄진 alternative는?
- 추가해야 할 control은?"
```

---

### 2.3 Statistical Power & Sample Size Justification

**"샘플 사이즈가 충분한가?"**

#### ❌ 약한 정당화 (거부 위험)
- "Previous studies used similar N" → 관례만 따름
- "We recruited as many as possible" → 계획 없음
- "N=30 is standard" → 근거 없음

#### ✅ 강한 정당화 (통과 가능)
- **A priori power analysis**
  - 예상 효과 크기 (d = 0.5, based on pilot study)
  - α = 0.05, power (1-β) = 0.80
  - 필요 N 계산 (G*Power 사용)

- **Effect size justification**
  - 왜 이 효과 크기를 기대하는가?
  - Pilot data or previous work citation

- **Sensitivity analysis**
  - 달성 가능한 minimum detectable effect
  - "With N=60, we can detect d ≥ 0.52"

- **Multiple comparisons**
  - Bonferroni/FDR 보정 후에도 충분한 power

#### AI-assisted Power Analysis Reviewer

```
프롬프트:
"내 연구 계획:
- Expected effect size: d = [value]
  (근거: [pilot/previous work])
- Sample size: N = [value]
- Alpha: 0.05
- Planned comparisons: [number]

리뷰어 관점에서 평가해줘:
1. Expected effect size가 현실적인가?
   (너무 크거나 작지 않은가?)
2. Multiple comparison 보정을 고려하면 power가 충분한가?
3. 샘플 사이즈 정당화에서 보강할 점은?
4. Sensitivity analysis 결과를 어떻게 제시해야 하는가?

그리고:
- 리뷰어가 제기할 가능성 높은 질문 3가지
- 각 질문에 대한 방어 전략"
```

---

## 3. Results 섹션 Bulletproofing 전략

### 3.1 Overclaiming Prevention

**"주장이 데이터를 넘어서지 않는가?"**

#### 흔한 Overclaiming 패턴

| Claim | Data | Problem | Conservative Alternative |
|-------|------|---------|--------------------------|
| "X **causes** Y" | Correlation between X and Y | Correlation ≠ Causation | "X is **associated with** Y" |
| "X is **necessary** for Y" | Y decreases when X is removed | Sufficiency not tested | "X **contributes to** Y" |
| "Our method **works in general**" | Tested in one specific condition | Generalization unsupported | "Our method works **in [condition]**" |
| "This **proves** theory Z" | Consistent with theory Z | Alternative theories not ruled out | "These findings are **consistent with** theory Z" |

#### AI-powered Claim Checker

```
프롬프트:
"다음 Results 문장들을 분석해줘:
[Results text with claims]

각 문장에 대해:
1. Claim type (causal/correlational/mechanistic/general)
2. Evidence level (direct/indirect/suggestive)
3. Overclaiming risk (1-10)
4. Conservative alternative phrasing

그리고:
- 가장 위험한 overclaim 3개 지적
- 각각을 데이터에 맞게 수정하는 방법"
```

---

### 3.2 Statistical Rigor Verification

**"통계 분석이 방어 가능한가?"**

#### Critical Checkpoints

- [ ] **Assumption testing**
  - Normality, homogeneity of variance, independence
  - 가정 위배 시 대안 분석 (non-parametric, transformation)

- [ ] **Multiple comparisons**
  - 보정 방법 명시 (Bonferroni, FDR, permutation)
  - Family-wise error rate vs false discovery rate

- [ ] **Effect sizes**
  - p-value만이 아닌 effect size + CI 보고
  - Cohen's d, η², r 등 (분석에 맞게)

- [ ] **Outlier handling**
  - 처리 방법 (removal, winsorization, robust methods)
  - 영향 평가 (with vs without outliers)

- [ ] **Missing data**
  - 처리 방법 (listwise deletion, imputation, mixed models)
  - Sensitivity analysis (different methods 비교)

- [ ] **Robustness checks**
  - Alternative analysis로 결과 확인
  - 예: Parametric + non-parametric 둘 다 보고

#### AI-assisted Statistical Review

```
프롬프트:
"내 Results 섹션:
- Analysis: [통계 분석 방법]
- Comparisons: [비교 횟수]
- Reported stats: [제시한 통계량]

리뷰어가 통계적으로 문제 삼을 수 있는 부분:
1. Assumption violations (어떤 가정이 문제?)
2. Multiple comparison issues (보정이 충분한가?)
3. P-hacking risks (의심받을 수 있는 분석 선택은?)
4. Missing robustness checks (어떤 추가 분석 필요?)

각 문제에 대해:
- 구체적 지적 내용
- 방어 전략
- 추가할 분석/보고 내용"
```

---

### 3.3 Transparent Reporting

**"모든 결과를 투명하게 보고했는가?"**

#### Selective reporting 위험 신호
- ❌ Hypothesis에 맞지 않는 결과 누락
- ❌ 일부 조건/측정치만 보고
- ❌ Failed manipulation checks 언급 없음
- ❌ Exploratory analysis를 confirmatory처럼 보고

#### ✅ 완전 투명 보고 전략

**Main Results:**
- 모든 planned comparison 보고 (유의/비유의 모두)
- Primary outcome measures 전부

**Supplementary:**
- 모든 측정 변수 결과 (메인에 안 들어간 것도)
- Manipulation checks
- Assumption testing 결과
- Robustness checks
- Excluded data + 이유
- Exploratory analyses (명확히 표시)

**Open Science:**
- Pre-registration (있다면 링크)
- Data/code availability statement
- Materials availability

#### AI-powered Transparency Checker

```
프롬프트:
"내 연구 계획:
- Hypotheses: [list]
- Planned comparisons: [list]
- Measured variables: [list]

현재 Results 섹션:
[Results text]

투명성 평가:
1. Planned 대비 보고된 비율 (%)
2. 누락된 결과가 있는가? 어떤 것?
3. Exploratory vs Confirmatory 구분이 명확한가?
4. Selective reporting 의심받을 수 있는 부분은?

개선 방안:
- Main에 추가할 결과
- Supplementary로 옮길 결과
- 투명성 강화를 위한 문구 제안"
```

---

## 4. Preemptive Reviewer Response 전략

### 4.1 "Reviewer가 물어볼 질문" 예측

#### AI를 활용한 Anticipated Questions 생성

```
프롬프트:
"내 Methods/Results:
[전체 텍스트]

Nature/Science 리뷰어가 제기할 가능성이 높은 질문 10가지를 생성해줘.
각 질문에 대해:
1. 질문 유형 (reproducibility/controls/statistics/interpretation)
2. 심각도 (critical/major/minor)
3. 현재 Methods/Results에서 답변이 있는가?
4. 없다면, Methods/Results에 추가할 내용
5. Rebuttal letter에서 답변할 내용

우선순위 순으로 정렬해줘."
```

#### Preemptive Defense 삽입
- **Critical questions** → Methods/Results에 직접 답변 추가
- **Major questions** → Supplementary에서 다룸
- **Minor questions** → Rebuttal에서만 대응

---

### 4.2 Methods/Results Cross-Validation

**"Methods에서 약속한 것을 Results에서 전부 다뤘는가?"**

#### 흔한 불일치
- ❌ Methods에서 언급한 분석이 Results에 없음
- ❌ Results의 분석이 Methods에 설명 안 됨
- ❌ Control 조건을 Methods에서 언급했지만 Results에 결과 없음
- ❌ Exclusion criteria 언급했지만 excluded N 보고 안 됨

#### AI-powered Consistency Checker

```
프롬프트:
"내 Methods 섹션:
[Methods text]

내 Results 섹션:
[Results text]

일관성 체크:
1. Methods에 있지만 Results에 없는 분석/측정/조건
2. Results에 있지만 Methods에 설명 없는 분석
3. 용어 불일치 (같은 것을 다르게 지칭)
4. 숫자 불일치 (N, df 등)

각 불일치에 대해:
- 문제 유형
- 수정 방법 (Methods 추가 vs Results 추가 vs 삭제)"
```

---

## 5. Effect Size & Significance 통합 보고

### 5.1 P-value만으로는 부족

#### ❌ 약한 보고
"p < 0.05이므로 유의하다"

#### ✅ 강한 보고 (권장 템플릿)
```
"Group A (M = 85.3, SD = 12.1) significantly outperformed
Group B (M = 72.4, SD = 10.8), t(98) = 5.43, p < .001,
Cohen's d = 1.12, 95% CI [0.71, 1.53]"
```

**포함 요소:**
- Descriptive stats (M, SD)
- Inferential stats (t, df, p)
- Effect size (Cohen's d)
- Confidence interval (95% CI)

---

### 5.2 Practical Significance vs Statistical Significance

**"통계적으로 유의하지만 실질적 의미는?"**

#### AI를 활용한 Practical Significance 평가

```
프롬프트:
"내 주요 발견:
- Effect size: Cohen's d = [value]
- Comparison: [experimental vs control/baseline/previous work]

다음을 평가해줘:
1. 이 effect size가 해당 분야에서 어느 정도 크기인가?
   (small/medium/large 절대 기준 말고, 분야 맥락에서)
2. Practical significance는?
   - 실제 응용 관점에서 의미 있는 차이인가?
   - Minimum clinically/practically important difference와 비교하면?
3. Effect size를 보고할 때 추가할 맥락 정보
   - 비교 대상 (이전 연구, 이론적 예측, 실용적 기준)
   - 신뢰구간 해석

리뷰어가 '통계적으로만 유의하고 실질적 의미 없다'고
지적할 위험이 있는가?"
```

---

## 6. 동료 Methods/Results Review 프로토콜

### 6.1 Structured Peer Review Template

**각 학생이 2명의 동료 Methods/Results를 평가:**

```
=== METHODS 평가 ===

1. Reproducibility (1-5점): ___
   - 내가 이 연구를 재현하려 할 때 막힐 부분:
   - 추가로 필요한 정보:

2. Controls (1-5점): ___
   - Alternative explanations이 충분히 배제됐는가?
   - 내가 리뷰어라면 추가할 control:

3. Statistical Justification (1-5점): ___
   - Sample size 정당화가 설득력 있는가?
   - 분석 방법이 데이터 구조에 적합한가?

=== RESULTS 평가 ===

4. Claim-Evidence Match (1-5점): ___
   - Overclaiming 위험이 있는 문장 (있다면 지적):
   - 보수적으로 수정할 방법:

5. Statistical Rigor (1-5점): ___
   - 빠진 통계량/검정:
   - Multiple comparison 처리 적절한가?

6. Transparency (1-5점): ___
   - 선택적 보고 의심 부분:
   - 추가로 보고해야 할 결과:

=== 종합 ===
- 가장 큰 약점 1가지:
- 개선 우선순위 top 3:
- Nature/Science 제출 준비도 (1-10):
```

---

## 실습 워크플로우 (90분 수업)

### Phase 1: Bulletproofing Audit (30분)

**Activity 1 (15분): Methods reproducibility check**
- AI로 재현성 취약점 10가지 도출
- 각 취약점 개선 방법 논의

**Activity 2 (15분): Results claim checker**
- Overclaiming 위험 문장 식별
- Effect size + practical significance 평가

### Phase 2: Statistical Rigor (25분)

**Activity 3 (15분): Power analysis review**
- AI로 sample size 정당화 강화
- Multiple comparison 보정 체크

**Activity 4 (10분): Transparency audit**
- Selective reporting 위험 평가
- 추가 보고 필요 항목 리스트

### Phase 3: Peer Review (25분)

**Activity 5: Structured peer review**
- 2명 동료 평가 (template 사용)
- 리뷰어 질문 예측 및 방어 전략 논의

### Phase 4: 최종 개선 + 공유 (10분)

**Activity 6: AI로 피드백 통합**
- 받은 피드백 반영한 개선안 생성
- 가장 효과적이었던 bulletproofing 전략 공유

---

## 과제 (다음 주까지)

### "My Methods/Results - Bulletproofed"

**제출물:**

1. **Methods 섹션 완성 (800-1000 words)**
   - Reproducibility checklist 전부 충족
   - Control strategy 정당화
   - Statistical power/sample size 근거
   - 6가지 필수 요소 모두 포함

2. **Results 섹션 완성 (600-800 words)**
   - 모든 주요 결과 (effect size + CI + p)
   - Figure/Table 최소 1개
   - Overclaiming 없는 conservative claims
   - Transparent reporting

3. **Bulletproofing Documentation (800 words)**
   - **AI를 활용한 self-critique 결과**
     - Reproducibility audit (10 vulnerable points)
     - Alternative explanation check
     - Statistical review
   - **예상 리뷰어 질문 5개 + 방어 전략**
     - Critical questions (어떻게 Methods/Results에 답변?)
     - Major questions (Supplementary plan)
   - **Transparency checklist 충족 증빙**
     - 모든 planned comparison 보고 확인
     - Exploratory vs confirmatory 구분

4. **AI 활용 과정 (500 words)**
   - 사용한 프롬프트 레시피 **5개 이상**
   - 각 레시피의 효과 및 한계
   - AI의 한계 및 인간 판단이 필요했던 지점

5. **Peer Review 반영 (300 words)**
   - 받은 피드백 요약 (6가지 평가 항목별)
   - 각 피드백을 어떻게 반영했는지

### 평가 기준

- **Reproducibility & Rigor (40%)**
  - 재현성 (6가지 요소 충족)
  - Control (alternative explanation 배제)
  - 통계 정당화 (power analysis, appropriate tests)

- **Transparent Reporting (25%)**
  - 완전한 결과 보고 (모든 planned comparison)
  - Overclaiming 방지 (claim-evidence match)
  - Open science practices

- **Reviewer-Ready (20%)**
  - 예상 질문 대응 (preemptive defense)
  - Methods/Results 일관성
  - Effect size + practical significance

- **AI 활용 & Peer Review (15%)**
  - 효과적 프롬프트 (5개 이상)
  - 비판적 검토 및 개선
  - 동료 피드백 반영

---

## 핵심 메시지

### Bulletproof Methods/Results의 조건
```
Reproducibility (6가지 요소)
     +
Control (alternative explanation 배제)
     +
Statistical Rigor (power, assumptions, effect size)
     +
Transparent Reporting (모든 결과, no overclaiming)
     +
Preemptive Defense (예상 질문에 미리 답변)
     =
Nature/Science 리뷰어가 공격할 틈 없는 Methods/Results
```

### CoT의 역할
> "윤경생 강의에서 CoT **기법**을 배웠다면,
> 본 강의에서는 CoT를 '리뷰어 공격 방어'라는 **목표**에 전략적으로 활용."

---

## 토론 주제

1. **Reproducibility**: 자신의 Methods에서 가장 취약한 부분은? 어떻게 보강할 것인가?

2. **Overclaiming**: Results에서 데이터를 넘어서는 주장을 하고 있지 않은가?

3. **Statistical rigor**: Multiple comparison을 고려하면 결과가 여전히 유의한가?

4. **Reviewer questions**: 리뷰어가 가장 공격할 가능성이 높은 부분은?

---

## 다음 주 준비사항

- **Discussion 섹션 초안 작성**
  - 결과의 broader implications
  - 한계점 및 future directions
  - Conclusion

- **전체 논문 통합**
  - Abstract → Introduction → Methods → Results → Discussion
  - 일관성 체크
  - 최종 검토

---

## 참고 자료

### 추천 읽기
- Nature/Science Methods 섹션 10편
  - 어떻게 reproducibility를 달성하는지
  - Control strategy 패턴 파악

- APA Publication Manual (7th ed.)
  - Statistical reporting guidelines
  - Effect size reporting standards

### 프롬프트 레시피 라이브러리
- 공유 게시판에서 동료들의 효과적 bulletproofing 프롬프트 참고
- Reproducibility audit, statistical review 프롬프트 적극 공유

### AI 도구 추천
- **ChatGPT**: Reproducibility audit, alternative explanation generation
- **Claude**: Statistical review, reviewer question prediction
- **Perplexity**: 통계 방법 best practices 검색
- **G*Power**: Power analysis (AI가 아닌 전용 소프트웨어)

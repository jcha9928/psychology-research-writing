# Comprehensive Revision Plan: Weeks 2-4 Transformation
## 심리과학 연구방법 - 라이팅 강의 개편 전략

---

## 📋 Executive Summary

### 개편 목적
윤경생 박사의 AI 개념 강의 (RAG, CoT, Prompt Engineering 등)와의 중복을 제거하고, **"어떻게 하면 탑티어 저널에 출판할 만한 탑 5%의 논문을 쓸 것인가"**라는 궁극적 학습 목표에 집중

### 핵심 변화
| Week | 변경 전 (AI 개념 중심) | 변경 후 (탑티어 출판 전략 중심) |
|------|------------------------|--------------------------------|
| **Week 2** | 프롬프트 엔지니어링 기초 + 초록 작성 | **Nature/Science 초록 전략** (고임팩트 opening, broad significance, 정량적 결과) |
| **Week 3** | RAG 개념 설명 + 문헌 리뷰 | **체계적 Gap 발견 워크플로우** (conceptual gap, validation, gap-driven 구조) |
| **Week 4** | CoT 프롬프팅 + 방법/결과 | **Methods/Results Bulletproofing** (재현성, 통계 rigor, overclaiming 방지) |

### 교육 철학 전환
- **개념 설명** → **실전 응용 전략**
- **AI 도구 이해** → **AI를 활용한 논문 품질 향상**
- **일반적 글쓰기** → **탑 5% 논문 작성 기법**
- **개인 학습** → **레시피 공유 + 동료 피드백 문화**

---

## 🎯 Ultimate Learning Goal 연결성

### 탑 5% 논문의 3가지 핵심 요소
```
1. 고임팩트 초록 (Week 2)
   ↓
   "Nature/Science 편집자가 full text를 읽고 싶게 만드는가?"

2. 설득력 있는 Gap (Week 3)
   ↓
   "리뷰어가 '이거 해야겠다'고 공감하는 연구 동기가 있는가?"

3. 방어 가능한 Methods/Results (Week 4)
   ↓
   "리뷰어가 공격할 틈이 없는 방법론과 투명한 결과 보고인가?"
```

### 통합 워크플로우
```
Week 2: 임팩트 있는 초록 작성
    ↓
Week 3: 초록의 gap statement를 체계적으로 정당화
    ↓
Week 4: Gap을 해결하는 Methods/Results를 bulletproof하게 작성
    ↓
Result: 탑티어 저널 제출 가능한 논문 완성
```

---

## 📊 Before/After 상세 비교

### Week 2: AI 활용 I - 초록

#### Before (AI 개념 중심)
```markdown
## 학습 목표
- 프롬프트 엔지니어링 기초 이해
- AI 도구를 글쓰기 보조 도구로 활용
- 효과적인 초록 작성법 습득

## 주요 내용
1. 프롬프트의 구성요소 (Instruction, Context, Input, Output)
2. Temperature, Top-k, Top-p 파라미터 이해
3. Few-shot learning으로 초록 스타일 학습
4. AI 윤리 및 한계점

## 실습
- ChatGPT에 초록 초안 입력 → 피드백 받기
- 다양한 프롬프트 변형 시도
```

**문제점:**
- 윤경생 박사 강의와 100% 중복 (프롬프트 구성요소, 파라미터, few-shot 등)
- AI 개념 이해에 시간 소비, 실제 탑티어 초록 전략은 부족
- "어떻게 하면 Nature/Science에 실릴 만한 초록을 쓰는가?"에 대한 답 부재

#### After (탑티어 출판 전략 중심)
```markdown
## 학습 목표
- Nature/Science급 초록의 차별화 요소 파악 및 적용
- 고임팩트 opening 및 significance framing 전략 습득
- 정량적 결과 제시 및 novelty 강조 기법 마스터
- **궁극 목표**: 탑 5% 논문 초록 작성 능력 개발

## 주요 내용
1. 탑티어 vs 일반 저널 초록 차별화 요소 분석
2. 고임팩트 Opening의 4가지 패턴 (problem/gap/opportunity/challenge-driven)
3. Broad Significance Framing (좁은 기여 → 넓은 임팩트)
4. 정량적 결과 강화 전략 (340% improvement vs "significant")
5. 탑티어 저널 거부 사유 방지 (5가지 rejection reasons)

## 실습
- Nature/Science 초록 5편 vs 중위권 저널 초록 비교 분석
- AI로 4가지 opening 패턴 생성 → 동료 투표
- Significance를 broader context로 확장 (AI-assisted)
- 동료 피드백 프로토콜 (structured peer review)
- 프롬프트 레시피 공유 세션
```

**개선점:**
- ✅ AI 개념 중복 제거 (윤경생 강의에 맡김)
- ✅ 탑티어 저널 specific 전략 (Nature/Science 기준)
- ✅ 실전 응용 중심 (분석 → 적용 → 피드백 → 개선)
- ✅ 레시피 공유 문화 (각자의 효과적 프롬프트 공유)

---

### Week 3: AI 활용 II - 문헌 리뷰

#### Before (RAG 개념 중심)
```markdown
## 학습 목표
- RAG 기법의 원리 이해
- AI를 활용한 문헌 검색 및 요약
- Hallucination 문제 인식

## 주요 내용
1. RAG란? (Retrieval-Augmented Generation)
   - 검색-증강 생성의 원리
   - Vector DB, Embedding의 이해
2. RAG 활용 시나리오
   - 방대한 문헌 데이터베이스 검색
   - 관련 논문 자동 요약
3. Hallucination 문제와 해결
   - 잘못된 정보 생성 위험
   - 팩트 체크의 중요성

## 실습
- Perplexity/Elicit로 문헌 검색
- AI 요약 결과 검증
```

**문제점:**
- RAG 개념은 윤경생 강의에서 이미 다룸 (완전 중복)
- "문헌을 찾는 방법"만 다루고, "어떤 gap을 찾아야 탑티어인가?"는 없음
- 기술 이해에 집중, 실제 탑티어 논문의 gap 발견 전략 부족

#### After (Gap 발견 전략 중심)
```markdown
## 학습 목표
- Incremental vs Conceptual gap 구분 및 탑티어 기준 파악
- 체계적 gap discovery 워크플로우 실행
- 강한 gap statement crafting 및 gap-driven 문헌 리뷰 구조화
- **궁극 목표**: Nature/Science급 research gap 발견 및 정당화 능력 개발

## 주요 내용
1. 탑티어 저널의 "Gap" 기준
   - Incremental gap (일반 저널) vs Conceptual/Mechanistic gap (Nature/Science)
   - Paradox, Contradiction, Translational gap의 가치
2. 체계적 Gap 발견 워크플로우
   - Stage 1: Landscape mapping (consensus + debates 파악)
   - Stage 2: Critical review (4가지 한계 유형 식별)
   - Stage 3: Gap validation (false gap 방지)
3. Gap Statement Crafting
   - 약한 gap → 강한 gap 변환 전략
   - AI-assisted framing (3가지 버전 생성)
4. Gap-Driven 문헌 리뷰 구조
   - Established → Challenges → Critical Gap → Opportunity
5. Gap의 Feasibility 평가
   - Addressable, Significant, Novel, Timely 체크

## 실습
- AI로 contradiction mining + cross-disciplinary connection
- 논문 5편의 한계점 4가지 카테고리 분석
- Gap validation (Google Scholar + AI 검증)
- 3가지 gap statement 버전 생성 → 동료 투표
- Structured gap peer review
```

**개선점:**
- ✅ RAG 개념 중복 제거 (기술은 윤경생 강의 활용)
- ✅ "어떤 gap이 탑티어에 적합한가?" 명확한 기준 제시
- ✅ False gap 방지 (학생들이 자주 하는 실수 예방)
- ✅ Gap-driven 구조화 (단순 나열이 아닌 gap 중심 스토리)

---

### Week 4: AI 활용 III - 방법/결과

#### Before (CoT 개념 중심)
```markdown
## 학습 목표
- Chain-of-Thought 프롬프팅 이해
- AI를 활용한 논리 검증
- 단계별 추론으로 Methods/Results 개선

## 주요 내용
1. CoT란?
   - AI의 단계별 추론 유도
   - "Let's think step by step" 프롬프트
2. CoT 활용 시나리오
   - 가설→방법→결과→결론 논리 검증
   - 통계 분석 단계별 확인
3. Methods/Results 작성 원칙
   - 재현성, 투명성, 완결성

## 실습
- AI에 논리 검증 요청
- CoT 프롬프트로 단계별 체크
```

**문제점:**
- CoT 개념은 윤경생 강의에서 이미 다룸 (중복)
- "논리를 검증하는 방법"은 다루지만, "탑티어 저널 리뷰어가 공격하는 지점"은 없음
- 일반적인 Methods/Results 원칙만 제시, 탑티어 specific 전략 부족

#### After (Bulletproofing 전략 중심)
```markdown
## 학습 목표
- 탑티어 저널의 Methods/Results 거부 사유 파악 및 예방
- Reproducibility, control, statistical rigor 체크리스트 실행
- Overclaiming 방지 및 transparent reporting 전략 적용
- **궁극 목표**: 리뷰어의 methodological/statistical 공격을 방어할 수 있는 Methods/Results 작성 능력 개발

## 주요 내용
1. 탑티어 저널 거부 사유
   - Methods 5가지 (재현성, control, power, 통계, 타당성)
   - Results 5가지 (overclaiming, cherry-picking, p-hacking, 불명확, weak effect)
2. Methods Bulletproofing
   - Reproducibility checklist (6가지 필수 요소)
   - Control strategy validation (4가지 control 유형)
   - Power analysis justification (weak vs strong 근거)
3. Results Bulletproofing
   - Overclaiming prevention (claim-evidence 매칭)
   - Statistical rigor verification (6가지 checkpoints)
   - Transparent reporting (selective reporting 방지)
4. Preemptive Reviewer Response
   - 예상 질문 10가지 생성 (AI-assisted)
   - Methods/Results cross-validation
5. Effect Size + Practical Significance
   - P-value 넘어선 통합 보고
   - 분야 맥락에서 의미 평가

## 실습
- AI로 재현성 취약점 10가지 도출 → 개선
- Alternative explanation generator (control 보강)
- Power analysis reviewer (정당화 강화)
- Overclaiming checker (보수적 표현 변환)
- 예상 리뷰어 질문 + 방어 전략 작성
- Structured peer review (6가지 측면)
```

**개선점:**
- ✅ CoT 개념 중복 제거 (단계별 사고는 윤경생 강의 활용)
- ✅ 리뷰어 관점 중심 (공격 지점 예측 + 방어 전략)
- ✅ Preemptive defense (문제가 되기 전에 선제 대응)
- ✅ 실전 bulletproofing (체크리스트 기반 systematic approach)

---

## 🔄 Implementation Timeline

### Phase 1: 준비 (개강 2주 전)
```
Week -2:
□ 개편된 강의 자료 작성 완료
  - Week 2 lecture notes 개편
  - Week 3 lecture notes 개편
  - Week 4 lecture notes 개편

□ 실습 자료 준비
  - Nature/Science 초록 예시 10편
  - Gap statement 좋은 예/나쁜 예 10개
  - Methods/Results bulletproofing 체크리스트

□ AI 프롬프트 레시피 라이브러리 구축
  - Week 2용 프롬프트 10개
  - Week 3용 프롬프트 15개
  - Week 4용 프롬프트 15개

Week -1:
□ 학생 사전 안내
  - 윤경생 강의에서 AI 개념 학습 필수
  - 본 강의는 탑티어 출판 전략에 집중
  - 프롬프트 레시피 공유 문화 강조

□ 온라인 플랫폼 설정
  - 프롬프트 레시피 공유 게시판
  - 동료 피드백 템플릿 업로드
```

### Phase 2: 실행 (Week 2-4)
```
각 주차 공통 구조 (90분 수업):

1. 도입 (10분)
   - 이번 주 탑티어 전략 소개
   - 윤경생 강의와의 연결점 (AI 개념은 알고 있다는 전제)

2. 전략 강의 (20분)
   - 탑티어 기준 제시 (Nature/Science 예시)
   - Before/After 비교 (일반 vs 탑티어)
   - 핵심 체크리스트 제공

3. AI-assisted 실습 (40분)
   - 단계별 워크플로우 실행
   - AI 프롬프트 레시피 활용
   - 실시간 결과 공유

4. 동료 피드백 (15분)
   - Structured peer review
   - 건설적 비판 문화

5. 레시피 공유 (5분)
   - 가장 효과적이었던 프롬프트 발표
   - 공유 게시판에 업로드
```

### Phase 3: 평가 및 개선 (Week 5 이후)
```
Week 5:
□ 학생 피드백 수집
  - 개편된 내용이 도움이 됐는가?
  - AI 개념 중복 제거가 적절했는가?
  - 추가로 필요한 전략은?

□ 프롬프트 레시피 라이브러리 업데이트
  - 학생들이 공유한 효과적 프롬프트 추가
  - 카테고리별 정리 (초록/gap/methods/results)

Mid-semester:
□ 중간 점검
  - 학생들의 논문 초안 품질 평가
  - 탑티어 기준 도달 비율 측정
  - 개선이 필요한 영역 식별

End of semester:
□ 최종 평가
  - 탑 5% 논문 기준 충족도
  - AI 활용 효과성
  - 동료 피드백 문화 정착도
```

---

## 📚 Resource Preparation Checklist

### Week 2 Resources
```
□ Nature/Science 초록 분석 자료
  - 최근 5년 Nature/Science 초록 10편 (심리학/신경과학)
  - 같은 주제 중위권 저널 초록 10편
  - 차별화 요소 비교 표

□ Opening 패턴 예시
  - Problem-driven 예시 5개
  - Gap-driven 예시 5개
  - Opportunity-driven 예시 5개
  - Challenge-driven 예시 5개

□ Significance Framing 예시
  - 약한 significance → 강한 significance 변환 10개
  - Broad impact statement 템플릿

□ AI 프롬프트 레시피
  - Opening 4가지 패턴 생성 프롬프트
  - Significance 확장 프롬프트
  - 결과 강화 (정량화) 프롬프트
  - Self-critique (5가지 rejection reason) 프롬프트

□ 동료 피드백 템플릿
  - Opening Impact (1-5)
  - Novelty Clarity (1-5)
  - Result Strength (1-5)
  - Broad Significance (1-5)
```

### Week 3 Resources
```
□ Gap 분류 예시
  - Incremental gap 10개 (일반 저널 수준)
  - Conceptual gap 10개 (Nature/Science 수준)
  - Mechanistic gap 5개
  - Translational gap 5개

□ 문헌 리뷰 예시
  - Gap-driven 구조 좋은 예 5개 (Nature/Science)
  - 단순 나열 구조 나쁜 예 5개 (일반 저널)

□ AI 프롬프트 레시피
  - Landscape mapping (contradiction mining)
  - Critical review (4가지 한계 분석)
  - Gap validation (false gap 체크)
  - Gap statement 강화 (3가지 버전)
  - Feasibility 평가 (4가지 기준)

□ 동료 피드백 템플릿
  - Gap Quality (1-5)
  - Novelty Verification (1-5)
  - Significance (1-5)
  - Feasibility (1-5)
  - 건설적 피드백 가이드
```

### Week 4 Resources
```
□ 거부 사유 예시
  - Methods 거부 사례 10개 (실제 리뷰어 코멘트)
  - Results 거부 사례 10개 (overclaiming, p-hacking 등)

□ Bulletproofing 체크리스트
  - Reproducibility 6가지 요소
  - Control 4가지 유형
  - Statistical rigor 6가지 checkpoint
  - Transparency checklist

□ AI 프롬프트 레시피
  - Reproducibility audit (취약점 10가지)
  - Alternative explanation generator
  - Power analysis reviewer
  - Overclaiming checker
  - Statistical rigor verification
  - 예상 리뷰어 질문 생성
  - Figure critique

□ 동료 피드백 템플릿
  - Methods 평가 (3개 항목, 1-5점)
  - Results 평가 (3개 항목, 1-5점)
  - 종합 (약점, 우선순위, 준비도)
```

---

## 🎓 Pedagogical Strategies

### 1. "윤경생 강의 → 우리 강의" 연결 전략
```
매 수업 도입부 (5분):

"윤경생 박사님 강의에서 [AI 개념]을 배웠죠?
오늘은 그 개념을 '탑티어 저널 출판'이라는 목표에
어떻게 응용하는지 배웁니다.

개념 이해 (윤경생) → 전략적 응용 (우리)

예:
- Week 2: 프롬프트 엔지니어링 → Nature/Science 초록 전략
- Week 3: RAG → 체계적 Gap 발견
- Week 4: CoT → Methods/Results Bulletproofing"
```

### 2. "레시피 공유" 문화 조성
```
매 수업 마무리 (5분):

"오늘 가장 효과적이었던 프롬프트를 공유해주세요"

포맷:
- 프롬프트: [실제 사용한 프롬프트]
- 목적: [무엇을 개선하려 했는가?]
- 효과: [어떤 결과를 얻었는가?]
- 한계: [AI가 놓친 것은?]

→ 공유 게시판에 누적
→ 다음 주 도입부에 베스트 레시피 소개
```

### 3. "동료 피드백" 체계화
```
Structured Peer Review 원칙:

1. 구체성: "좋다/나쁘다" 대신 "이 부분이 왜 효과적/문제인지"
2. 건설성: 비판 + 개선 방안 항상 함께
3. 기준 기반: 탑티어 저널 기준에 맞춰 평가
4. 상호 학습: 남의 것을 평가하면서 내 것도 개선

템플릿 활용:
- 모든 평가 항목 1-5점 + 이유
- "내가 리뷰어라면 이렇게 지적할 것" 관점
```

### 4. "AI는 도구, 판단은 인간" 강조
```
매 실습 후 reflection (5분):

"AI가 제안한 것 중:
- 바로 채택한 것은? (왜?)
- 수정한 것은? (어떻게?)
- 거부한 것은? (왜?)

→ AI의 한계를 인식하고
→ 비판적으로 활용하는 능력 개발"
```

---

## 📈 Success Metrics

### 학생 수준 평가
```
과제 평가 기준:

Week 2 - 초록:
□ Nature/Science 차별화 요소 3가지 이상 포함
□ 고임팩트 opening (4가지 패턴 중 하나)
□ Broad significance framing
□ 정량적 결과 제시
□ 5가지 rejection reason 모두 방어 가능

Week 3 - Gap:
□ Conceptual/Mechanistic gap (incremental 아님)
□ 체계적 validation (false gap 아님)
□ 강한 gap statement (3가지 요소 포함)
□ Gap-driven 문헌 리뷰 구조
□ Feasibility 4가지 기준 충족

Week 4 - Methods/Results:
□ Reproducibility checklist 전부 충족
□ Control strategy 명확히 정당화
□ Statistical power/sample size 근거 있음
□ Overclaiming 없음 (claim-evidence 매칭)
□ Transparent reporting (모든 결과)
□ 예상 리뷰어 질문 5개 + 방어 전략

종합:
□ AI 활용 효과성 (프롬프트 품질, 비판적 검토)
□ 동료 피드백 품질 (구체성, 건설성, 반영)
```

### 강의 수준 평가
```
학기 중:
□ 학생 만족도 설문 (개편 내용이 도움이 됐는가?)
□ AI 개념 중복 제거가 적절했는가?
□ 프롬프트 레시피 공유 활성화 정도
□ 동료 피드백 문화 정착도

학기 말:
□ 최종 논문 초안의 탑티어 기준 충족도
  - 초록: Nature/Science 수준 (외부 평가자 blind review)
  - Gap: Conceptual depth (외부 평가자 평가)
  - Methods/Results: Bulletproof 정도 (외부 평가자 평가)

□ 학생 능력 향상도
  - 사전 (Week 1) vs 사후 (Week 5) 논문 품질 비교
  - 탑티어 기준 충족 비율 증가

□ 레시피 라이브러리 품질
  - 얼마나 많은 유용한 프롬프트가 공유됐는가?
  - 다음 학기 재사용 가능성
```

---

## 🚀 Next Steps

### Immediate Actions (개강 전)
1. **강의 노트 완전 개편**
   - [ ] Week 2 lecture_notes.md 전면 수정
   - [ ] Week 3 lecture_notes.md 전면 수정
   - [ ] Week 4 lecture_notes.md 전면 수정

2. **실습 자료 준비**
   - [ ] Nature/Science 초록 10편 수집 및 분석 자료 작성
   - [ ] Gap 예시 20개 (good/bad) 작성
   - [ ] Methods/Results 거부 사례 20개 수집

3. **AI 프롬프트 레시피 라이브러리 구축**
   - [ ] Week 2용 10개
   - [ ] Week 3용 15개
   - [ ] Week 4용 15개
   - [ ] 공유 게시판 템플릿 작성

4. **동료 피드백 시스템 구축**
   - [ ] Structured review 템플릿 3개 (Week 2, 3, 4)
   - [ ] 피드백 가이드라인 작성
   - [ ] 평가 rubric 명확화

### During Semester
1. **지속적 개선**
   - 매주 학생 피드백 수집
   - 프롬프트 레시피 라이브러리 업데이트
   - 효과적인 전략 강화, 비효과적인 것 수정

2. **문화 조성**
   - 레시피 공유 활성화 (인센티브 제공)
   - 건설적 동료 피드백 문화 정착
   - "AI는 도구, 판단은 인간" 강조

### Post-Semester
1. **평가 및 반성**
   - 학생 능력 향상도 측정
   - 탑티어 기준 충족도 평가
   - 개선이 필요한 부분 식별

2. **다음 학기 준비**
   - 레시피 라이브러리 정리 및 큐레이션
   - 효과적이었던 예시 보존
   - 강의 자료 업데이트

---

## 💡 Key Takeaways

### 개편의 핵심 철학
```
1. 중복 제거
   AI 개념 (RAG, CoT, Prompt Engineering) → 윤경생 강의
   탑티어 출판 전략 → 우리 강의

2. 목표 집중
   "어떻게 하면 탑 5% 논문을 쓸 것인가?"
   → 모든 내용이 이 목표에 기여

3. 실전 응용
   개념 이해 → 전략적 응용
   일반 원칙 → 탑티어 specific 기법

4. 공유 문화
   개인 학습 → 레시피 공유 + 동료 피드백
   경쟁 → 협력적 성장
```

### 성공의 핵심 요소
```
1. 명확한 탑티어 기준 제시
   - Nature/Science 예시 활용
   - "무엇이 다른가?" 구체적으로 제시

2. 체계적 워크플로우
   - 단계별 체크리스트
   - AI-assisted systematic approach

3. 지속적 피드백
   - 동료 피드백 (structured)
   - AI 피드백 (비판적 검토 필수)
   - 자기 reflection

4. 레시피 누적
   - 효과적 프롬프트 공유
   - 집단 지성 활용
   - 다음 학기 자산
```

---

## 📝 Appendix: Quick Reference

### 개편 전후 비교 요약표
| 측면 | Before | After |
|------|--------|-------|
| **초점** | AI 개념 이해 | 탑티어 출판 전략 |
| **중복** | 윤경생 강의와 100% 중복 | 중복 제거, 응용에 집중 |
| **목표** | 일반적 글쓰기 능력 | 탑 5% 논문 작성 능력 |
| **방법** | 개인 학습 | 레시피 공유 + 동료 피드백 |
| **평가** | 글쓰기 완성도 | 탑티어 기준 충족도 |

### 3주 연결 구조
```
Week 2: 고임팩트 초록
   ↓ (초록의 gap을 어떻게 정당화?)
Week 3: 설득력 있는 Gap
   ↓ (gap을 어떻게 해결?)
Week 4: 방어 가능한 Methods/Results
   ↓
탑티어 저널 논문 완성
```

### 핵심 프롬프트 패턴
```
Week 2 (초록):
"다음 초록을 Nature 편집자 관점에서..."
"4가지 opening 패턴으로 재작성해줘..."
"Broader implications 3가지를 제시해줘..."

Week 3 (Gap):
"이 gap이 incremental인가 conceptual인가?"
"Contradiction을 찾아줘..."
"False gap 체크: 이미 연구됐는가?"

Week 4 (Methods/Results):
"재현성 취약점 10가지를 찾아줘..."
"Alternative explanation 5가지를 생성해줘..."
"Overclaiming 위험 문장을 지적해줘..."
```

---

**최종 점검:**
- [ ] 윤경생 강의 중복 완전 제거
- [ ] 탑티어 출판 전략에만 집중
- [ ] 체계적 워크플로우 제공
- [ ] 레시피 공유 + 동료 피드백 문화
- [ ] Ultimate goal에 모든 내용 기여: **"탑 5% 논문 작성"**

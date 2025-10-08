# Overlap Analysis: Dr. Lee's Materials vs My Course

## Executive Summary

Dr. Lee's course (Weeks 1-6) provides comprehensive technical foundations of LLMs and AI tools. My course should **eliminate concept explanations** and **focus exclusively on application strategies** for creating top-tier publications.

**Strategic Shift:** From "What is X?" → "How to use X for top 5% papers?"

---

## Dr. Lee's Coverage (What Students Already Know)

### Week 1 (Dr. Lee): AI/LLM Foundations
**Concepts Taught:**
- AI vs LLM distinction
- Foundation models (self-supervised learning, "빈칸채우기")
- LLM applications in psychology (measurement, experimentation, practice)
- AI agents concept
- Emergent abilities

**Student Takeaway:** Students understand what LLMs are and how they're trained.

### Week 2-3 (Dr. Lee): Prompt Engineering Foundations
**Concepts Taught:**
- Prompt structure: Instruction, Context, Input, Output
- LLM parameters:
  - Temperature (0-1 range, creativity control)
  - Top-k, Top-p sampling
  - Max tokens
- In-context learning:
  - Zero-shot (no examples)
  - One-shot (1 example)
  - Few-shot (multiple examples)
- Meta-learning and emergence
- Fine-tuning vs In-context learning
- Alignment and RLHF:
  - 3-step process: demonstration data → reward model → PPO optimization
- Chain of Thought (CoT):
  - Basic CoT prompting
  - Step-by-step reasoning
  - Train-time vs test-time compute
  - Scaling laws
- Advanced prompting:
  - Prompt chaining
  - ReACT prompting (reasoning + action)
  - Tree of Thought (ToT)
  - Generator-Verifier Gap
  - Self-consistency techniques

**Student Takeaway:** Students know HOW to write effective prompts and WHAT CoT/ReACT mean.

### Week 5 (Dr. Lee): RAG Foundations
**Concepts Taught:**
- Why LLMs hallucinate (statistical patterns, knowledge gaps, "probable" vs "truthful")
- RAG (Retrieval Augmented Generation):
  - Definition: Retrieval + Generation
  - RAG vs Fine-tuning (when to use each)
  - RAG architecture (Retriever → Knowledge Base → Augmented Prompt → LLM)
- Embedding systems:
  - Keyword search (exact words)
  - Semantic search (similar meaning)
  - TF-IDF, BM25
- Retriever systems

**Student Takeaway:** Students understand WHAT RAG is and HOW it works architecturally.

---

## MY Course - What to REMOVE (Redundant Concepts)

### Week 2 (My Course): AI 활용 I - 초록 작성

**REMOVE These Concept Explanations:**
- ❌ What prompt engineering is
- ❌ Prompt structure (Instruction, Context, Input, Output) - already taught
- ❌ Temperature/Top-p/Top-k explanations - already taught
- ❌ What zero-shot/one-shot/few-shot means - already taught

**KEEP & REFOCUS:**
- ✅ HOW to use prompts SPECIFICALLY for abstract writing
- ✅ Strategies for crafting abstracts that editors read
- ✅ Comparative prompting for multiple abstract versions
- ✅ Evaluation criteria specific to top-tier journal abstracts

### Week 3 (My Course): AI 활용 II - 문헌 리뷰 (RAG)

**REMOVE These Concept Explanations:**
- ❌ What RAG is - already taught
- ❌ RAG architecture - already taught
- ❌ RAG vs Fine-tuning - already taught
- ❌ How embedding works - already taught
- ❌ TF-IDF/BM25 technical details - already taught

**KEEP & REFOCUS:**
- ✅ HOW to use RAG SPECIFICALLY for literature review
- ✅ Strategies for comprehensive literature synthesis
- ✅ Building custom knowledge bases for research domains
- ✅ Identifying gaps in literature using RAG
- ✅ Citation management and verification

### Week 4 (My Course): AI 활용 III - 방법/결과 (CoT)

**REMOVE These Concept Explanations:**
- ❌ What Chain of Thought is - already taught
- ❌ How CoT works technically - already taught
- ❌ CoT vs standard prompting - already taught
- ❌ What scratchpad tracing is - already taught

**KEEP & REFOCUS:**
- ✅ HOW to use CoT SPECIFICALLY for Methods/Results validation
- ✅ Strategies for detecting logical gaps in research design
- ✅ Using CoT to verify statistical reasoning
- ✅ Identifying alternative explanations for results

### Week 5 (My Course): AI 활용 IV - 퇴고/리뷰 (AI Reviewer)

**REMOVE These Concept Explanations:**
- ❌ What RLHF is - already taught
- ❌ How AI alignment works - already taught
- ❌ General AI agent concepts - already taught

**KEEP & REFOCUS:**
- ✅ HOW to simulate top-tier journal reviewers
- ✅ Strategies for iterative revision
- ✅ Multi-reviewer panel simulation
- ✅ Weakness diagnosis and remediation
- ✅ Journal-specific review criteria

---

## Revised Focus for Each Week

### Week 1: 인간 중심 글쓰기 (No AI)
**Current Status:** Already focused on human-centered writing
**No Changes Needed:** This week establishes writing fundamentals before AI introduction

### Week 2: AI 활용 I - 초록 작성
**New Focus:** "How to craft Nature/Science-grade abstracts using AI"

**Remove:**
- All prompt engineering basics (Dr. Lee taught this)
- Temperature/parameter explanations (Dr. Lee taught this)

**Add/Emphasize:**
- Top-tier journal abstract analysis (what makes Nature abstracts compelling?)
- Comparative abstract generation (generate 10, select best)
- Hook strategies for opening sentences
- Significance articulation for broad impact
- AI-assisted A/B testing with feedback

### Week 3: AI 활용 II - 문헌 리뷰 (RAG)
**New Focus:** "How to conduct comprehensive literature reviews that identify high-impact gaps"

**Remove:**
- RAG technical explanations (Dr. Lee taught this)
- Embedding/retriever architecture (Dr. Lee taught this)

**Add/Emphasize:**
- Building domain-specific literature databases
- Systematic gap identification strategies
- Synthesis across conflicting findings
- Theoretical contribution identification
- Citation network analysis for impact prediction

### Week 4: AI 활용 III - 방법/결과 (CoT)
**New Focus:** "How to bulletproof Methods/Results against top-tier reviewer criticism"

**Remove:**
- CoT concept explanations (Dr. Lee taught this)
- Train-time vs test-time compute (Dr. Lee taught this)

**Add/Emphasize:**
- Methods reproducibility checklist for top journals
- Alternative explanation generation and refutation
- Statistical power validation
- Confound detection and control
- Results interpretation robustness checks

---

## Key Principles for Revision

### 1. **Assume Prior Knowledge**
Students already know:
- What LLMs are and how they work
- Prompt engineering fundamentals
- CoT, RAG, RLHF concepts
- Parameter tuning (temperature, top-k, top-p)

### 2. **Focus on Application**
Every section should answer:
- "How does this help me get published in Nature/Science/Psych Science?"
- "What specific strategies do top 5% papers use?"
- "How do I operationalize this concept for my research?"

### 3. **Provide Concrete Workflows**
Replace:
- ❌ "CoT helps with reasoning"
With:
- ✅ "Use this 3-step CoT workflow to validate your statistical logic: [specific prompt template]"

### 4. **Emphasize Strategic Thinking**
- Not "What is prompt engineering?" (Dr. Lee taught this)
- But "What prompt strategy gets your abstract noticed by Nature editors?" (application)

---

## Revision Checklist

For each section in Weeks 2-4, verify:

- [ ] **No concept explanations** that Dr. Lee already taught
- [ ] **Clear connection** to top-tier publication goal
- [ ] **Concrete prompts** ready to use (not just theory)
- [ ] **Specific examples** from top journals
- [ ] **Evaluation criteria** for success
- [ ] **Practical workflows** students can follow immediately

---

## Example Transformation

### ❌ BEFORE (Concept Teaching):
```markdown
## Chain of Thought (CoT)

### CoT란?
AI가 추론을 단계별로 수행 → 논리 구조 검증

**프롬프트:**
"내 연구의 가설→방법→결과→결론 논리를 단계별로 검증해줘"
```

### ✅ AFTER (Application Strategy):
```markdown
## Methods 논리 검증 전략

### Top-Tier Reviewers가 찾는 논리 결함
Nature/Science 심사위원들이 거절하는 흔한 논리 문제:
1. Confound 미통제
2. 대안 설명 미검토
3. 통계 검정력 불충분

### 3-Step 논리 검증 Workflow

**Step 1: Confound 탐지 프롬프트**
```
내 연구 설계를 검토하고 혼입 변인을 찾아줘:
가설: [...]
방법: [...]
어떤 제3변인이 결과를 설명할 수 있나?
```

**Step 2: 대안 설명 생성 프롬프트**
```
다음 결과에 대한 3가지 대안 설명을 제시해줘:
결과: [...]
각 대안이 얼마나 그럴듯한지 평가하고,
내 데이터로 각 대안을 기각할 수 있는지 분석해줘.
```

**Step 3: 검정력 검증 프롬프트**
```
내 통계 분석의 검정력을 평가해줘:
샘플 크기: [...]
효과 크기: [...]
알파 수준: [...]
더 필요한 데이터가 있나? Nature 기준으로 충분한가?
```

### 실전 예시: Nature 논문 분석
[실제 Nature 논문의 Methods 섹션 분석...]
```

---

## Summary

**Core Principle:** My course assumes students have Dr. Lee's technical foundation and focuses exclusively on **strategic application for top-tier publication**.

Every revision should pass this test:
> "Does this section teach students HOW to use X to get published, not WHAT X is?"

If it explains concepts Dr. Lee taught → DELETE
If it provides publication strategies → KEEP and ENHANCE

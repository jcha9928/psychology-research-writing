# 심리과학 연구방법 - 롸이팅 (Psychology Research Writing Course)

## 📚 Course Overview

6주 집중 대학원 논문 작성 과정 (심리학과 석사/박사)
- **대상**: 심리학과 대학원생 (석사/박사)
- **목표**: "어떻게 하면 탑티어 저널에 출불할 만한 탑 5%의 논문을 쓸 것인가"
- **구조**: IMRaD format (Introduction, Methods, Results, and Discussion)
- **AI 도구**: ChatGPT, Claude, Perplexity, Elicit

## 🎯 Ultimate Learning Goal

**"어떻게 하면 탑티어 저널에 출판할 만한 탑 5%의 논문을 쓸 것인가"**

이 목표를 달성하기 위해:
- AI 툴을 적극적으로 사용
- 각자의 레시피를 공유
- 결과를 공유하고 서로 피드백
- 개념 설명보다는 실전 전략에 집중

## ⚠️ CRITICAL CONTEXT: Week 2-4 Revision Principle

**윤경생 박사님의 AI 개념 강의와 중복 제거**

학생들은 윤경생 박사님 강의에서 이미 다음을 학습했습니다:
- Prompt Engineering 기초 (Instruction, Context, Input, Output)
- Parameters (Temperature, Top-k, Top-p)
- In-context Learning (zero-shot, one-shot, few-shot)
- RAG (Retrieval-Augmented Generation)
- Chain-of-Thought (CoT) prompting
- RLHF, Multimodal models

따라서 Week 2-4는 **개념 설명을 완전히 제거**하고 **실전 전략에만 집중**:

| Week | 변경 전 | 변경 후 |
|------|---------|---------|
| Week 2 | 프롬프트 엔지니어링 기초 | Nature/Science 초록 전략 |
| Week 3 | RAG 개념 설명 | 체계적 Gap 발견 워크플로우 |
| Week 4 | CoT 개념 설명 | Methods/Results Bulletproofing |

## 📁 File Structure

```
.
├── CLAUDE.md                           # This file
├── 강의계획.md                         # Overall course structure
├── overlap_analysis.md                 # Analysis of overlap with 윤경생's lectures
│
├── claudedocs/                         # Strategy documents (for instructors)
│   ├── comprehensive_revision_plan.md  # Master implementation plan
│   ├── week2_revision_strategy.md      # Nature/Science abstract strategies
│   ├── week3_revision_strategy.md      # Gap discovery workflows
│   ├── week4_revision_strategy.md      # Methods/Results bulletproofing
│   └── figma_workshop_weeks2-6.md      # Figma AI workshop strategies (Week 2-6)
│
├── week1/                              # Human-centered writing (no AI)
│   ├── lecture_notes.md                # Original detailed notes (reference)
│   ├── lesson_notes_compressed_90min.md # Compressed slides: 62→23 (90min workshop)
│   ├── workshop_materials.md           # Bad Sentences + Bad Paragraphs + Smart Revising (Figma integrated)
│   ├── bad_paragraphs_real_papers.md   # 4 real PLOS ONE/MDPI paragraphs with before/after analysis
│   ├── teaching_guide_90min.md         # Minute-by-minute teaching guide (Figma facilitation)
│   └── figma_workshop_guide.md         # Figma workshop comprehensive guide
│
├── week2/                              # AI 활용 I - 초록
│   └── lecture_notes.md                # Nature/Science abstract strategies (395 lines)
│
├── week3/                              # AI 활용 II - 문헌 리뷰
│   └── lecture_notes.md                # Systematic gap discovery (553 lines)
│
├── week4/                              # AI 활용 III - 방법/결과
│   └── lecture_notes.md                # Methods/Results bulletproofing (718 lines)
│
├── week5/                              # Discussion section
│   └── lecture_notes.md
│
├── week6/                              # Peer review & revision
│   └── lecture_notes.md
│
└── 윤경생슬라이드/                     # Dr. Yoon's AI concept lectures
    ├── 1주차.pdf
    ├── 2주차.pdf                       # 68-page Prompt Engineering lecture
    └── 3주차.pdf
```

## 📖 Weekly Structure

### Week 1: Human-Centered Writing (no AI)
**90-Minute Figma Workshop Model** (62 slides → 23 slides, 63% compression)

**Structure**:
- Lecture: 35 min (23 slides) - 10 core principles
- **Figma Workshop: 50 min (56%)** - Real-time collaborative practice
- Wrap-up: 5 min - Q&A, assignment

**10 Core Principles**:
1. **Lesson 1** (주어-동사): Actions in verbs, subjects as subjects, keep them close
2. **Lesson 2** (응집성): Old→New flow, strategic passive, paragraph coherence
3. **Lesson 3** (간결성): Remove unnecessary words, simple language, simple subjects, limit modifiers

**Figma Workshop Components**:
- **Stage 1A** (15min): Bad Sentences 수술실 - 10 sentences on shared canvas
  - Individual work with Sticky Notes
  - Real-time peer review with comments
  - Instructor live feedback
- **Stage 1B** (15min): Bad Paragraphs from Real Papers - 4 paragraphs from actual PLOS ONE 2024 paper
  - Students select 2 of 4 paragraphs to analyze
  - Paragraph-level analysis (Old→New flow, coherence)
  - Real-world application of Week 1 principles
- **Stage 2** (20min): Smart Revising with 7-step checklist
  - Personal work zones for each student
  - Peer feedback through Figma comments
  - Live progress monitoring

**Why Figma?**:
- ✅ Real-time collaboration - see everyone's work simultaneously
- ✅ Instant feedback - comments and reactions in real-time
- ✅ Visual learning - compare good/bad examples side-by-side
- ✅ Persistent record - workshop results saved for future reference

**Materials**:
- `lesson_notes_compressed_90min.md`: 23 slides with core concepts + best examples
- `workshop_materials.md`: Practice materials with Figma instructions (now includes Bad Paragraphs)
- `bad_paragraphs_real_papers.md`: 4 real paper paragraphs with detailed analysis
- `teaching_guide_90min.md`: Minute-by-minute guide with Figma facilitation
- `figma_workshop_guide.md`: Comprehensive Figma setup and operation guide

### Week 2: AI 활용 I - Nature/Science급 초록 작성
**NO PROMPT ENGINEERING BASICS** (students already learned from 윤경생)

Focus areas:
- Top-tier abstract differentiation (Nature/Science vs general journals)
- 4 opening patterns (Problem/Gap/Opportunity/Challenge-driven)
- Broad significance framing
- Quantitative result presentation
- 40+ AI prompt recipes for abstract writing

### Week 3: AI 활용 II - 체계적 Research Gap 발견
**NO RAG CONCEPT EXPLANATIONS** (students already learned from 윤경생)

Focus areas:
- Gap classification (Conceptual vs Incremental)
- 3-stage gap validation workflow
- False gap prevention strategies
- Cross-disciplinary connection mining
- 30+ AI prompt recipes for gap discovery

### Week 4: AI 활용 III - Methods/Results Bulletproofing
**NO COT CONCEPT EXPLANATIONS** (students already learned from 윤경생)

Focus areas:
- Top 10 rejection reasons for Methods/Results
- Reproducibility checklist (6 critical elements)
- Control validation strategies
- Overclaiming prevention
- Statistical rigor verification
- 40+ AI prompt recipes for bulletproofing

### Week 5-6: Discussion, Peer Review, Revision
- Discussion section strategies
- Structured peer review protocols
- Iterative improvement workflows

## 🎓 Teaching Philosophy

### 90-Minute Class Structure

**Week 1 Structure** (Workshop Model):
1. **IMRaD 오리엔테이션** (5분): Course roadmap
2. **핵심 원칙 강의** (30분): 10 principles with key examples
3. **Workshop Stage 1** (20분): Bad Sentences practice
4. **Workshop Stage 2** (20분): Smart Revising on own writing
5. **통합 정리 & Q&A** (15분): Wrap-up and assignment

**Week 2-6 Structure** (AI-Enhanced):
1. **개념 리뷰** (10분): Brief recap (students already know AI concepts)
2. **전략 강의** (20분): Top-tier publication strategies
3. **프롬프트 레시피 공유** (20분): Share successful AI prompts
4. **실습** (30분): Apply strategies to own research
5. **피어 리뷰** (10분): Structured feedback sessions

**Key Principle**: Practice > Theory (minimum 40% hands-on time)

### Recipe Sharing Culture
- Students share their successful AI prompts
- Build a collective knowledge base
- Learn from each other's workflows
- Iterate and improve recipes together

### Structured Peer Review
- Use provided templates (in lecture notes)
- Focus on top-tier journal criteria
- Constructive feedback protocols
- Evidence-based suggestions

## 🎨 Figma Interactive Workshops

### Overview
All workshops (Week 1-6) use **Figma real-time collaborative canvas** for interactive, engaging learning experiences.

### Why Figma Across All Weeks?
- **Real-time Collaboration**: All students see each other's work simultaneously
- **Instant Feedback**: Comments, reactions, and instructor guidance in real-time
- **Visual Learning**: Side-by-side comparison of approaches and results
- **Persistent Record**: Workshop results archived for future reference
- **Scalable**: Works for 6-50 students equally well

### Week 1: Human-Centered Writing Workshop
**Canvas Structure**:
- Left Panel: Writing principles reference (read-only)
- Right Area: Bad Sentences + Smart Revising work zones
- Student work with Sticky Notes
- Real-time peer review with comments

**Key Features**:
- Individual Sticky Notes for problem identification
- Collaborative peer feedback
- Live instructor curation
- Model answers revealed progressively

### Week 2-6: AI-Enhanced Workshops
**Canvas Structure**:
- Left Panel: Strategy reference + evaluation criteria + example prompts
- Right Area: Individual student experiment zones
- Recipe library section (accumulates over weeks)

**3-Stage Process**:
1. **Individual Experimentation** (10min): Students test AI prompts, record Input-Prompt-Output in their zones
2. **Peer Review** (10min): Students evaluate each other's results using criteria, provide feedback via comments
3. **Collective Curation** (10min): Instructor highlights best recipes, adds to recipe library

**Week-Specific Adaptations**:
- **Week 2**: Opening strategy experiments, significance framing
- **Week 3**: Gap discovery validation, 3-stage workflow
- **Week 4**: Red Team/Blue Team bulletproofing game
- **Week 5**: Discussion section construction
- **Week 6**: Round-robin comprehensive peer review

### Recipe Library (Cumulative)
A persistent section in Figma that grows each week:
```
Week 2 Best Recipes:
• Problem-Driven Opening (학생C, 4.8/5)
• Quantitative Result Emphasis (학생A, 4.6/5)

Week 3 Best Recipes:
• Conceptual Gap Discovery (학생B, 4.9/5)
• 3-Stage Validation (학생D, 4.7/5)

[Continues Week 4-6...]
```

### Instructor Facilitation
**Real-time Monitoring**:
- Watch all student zones simultaneously
- Instant feedback via comments
- Highlight good examples with @mentions
- Guide struggling students with hints

**Quality Curation**:
- React to good work with emojis/comments
- Share exceptional examples with @everyone
- Build recipe library from best contributions
- Export to PDF after each session

### Setup Requirements
**Before Class** (10 minutes prior):
1. Copy Figma template for the week
2. Adjust student work zones (6-12 typical)
3. Generate sharing link with edit permissions
4. Send link to students via email/messaging

**Class Start** (5 minutes):
1. Confirm all students connected
2. Quick Figma tour (N key for notes, C key for comments)
3. Show canvas structure
4. Begin lecture

### Technical Notes
- **No app installation required**: Works in any browser
- **Auto-save**: No manual saving needed
- **Concurrent editing**: Figma handles conflicts automatically
- **Export options**: PDF, images, or keep in Figma permanently

### Files
- `week1/figma_workshop_guide.md`: Week 1 complete guide with canvas layouts, scripts, troubleshooting
- `claudedocs/figma_workshop_weeks2-6.md`: Week 2-6 strategies, AI experiment structures, recipe library system

## 🔑 Key Documents

### For Understanding Course Philosophy
- `강의계획.md`: Overall course structure and goals
- `overlap_analysis.md`: Why Week 2-4 were completely revised
- `claudedocs/comprehensive_revision_plan.md`: Complete implementation plan

### For Understanding Week-Specific Strategies
- `claudedocs/week2_revision_strategy.md`: Nature/Science abstract strategies
- `claudedocs/week3_revision_strategy.md`: Gap discovery workflows
- `claudedocs/week4_revision_strategy.md`: Methods/Results bulletproofing

### For Teaching
**Week 1** (Workshop Model):
- `week1/lesson_notes_compressed_90min.md`: 23 slides, 10 core principles (RECOMMENDED)
- `week1/workshop_materials.md`: Bad Sentences + Smart Revising checklist
- `week1/teaching_guide_90min.md`: Minute-by-minute guide with scripts
- `week1/lecture_notes.md`: Original detailed notes (reference only)

**Week 2-6** (AI-Enhanced):
- `week2/lecture_notes.md`: Top-tier abstract writing (395 lines)
- `week3/lecture_notes.md`: Systematic gap discovery (553 lines)
- `week4/lecture_notes.md`: Methods/Results bulletproofing (718 lines)

## 💡 Common Tasks

### Adding New AI Prompt Recipes
1. Identify the week and section
2. Follow the existing format:
   ```markdown
   ### [Recipe Number]. [Recipe Name]
   **목적**: [What this achieves]
   **프롬프트**:
   ```
   [Actual prompt template]
   ```
   **결과 평가 기준**: [How to evaluate output]
   ```
3. Add to the appropriate section in `weekN/lecture_notes.md`

### Updating Strategies
1. Consult `claudedocs/weekN_revision_strategy.md` for strategic direction
2. Modify `weekN/lecture_notes.md` for student-facing content
3. Ensure no AI concept explanations creep back in
4. Focus on practical application and top-tier publication criteria

### Creating New Examples
- Use real Nature/Science papers as examples
- Provide both "before" and "after" versions
- Include specific metrics (e.g., citation counts, impact factors)
- Explain why the "after" version is better for top-tier journals

## 🚫 What NOT to Do

**DO NOT add AI concept explanations to Week 2-4:**
- ❌ "프롬프트는 Instruction, Context, Input, Output으로 구성됩니다" (students already know)
- ❌ "Temperature는 생성의 무작위성을 조절합니다" (students already know)
- ❌ "RAG는 외부 문서를 검색하여 답변합니다" (students already know)
- ❌ "CoT는 단계별로 사고하게 합니다" (students already know)

**DO add application strategies:**
- ✅ "Nature 초록은 일반 초록과 다르게 broad significance를 강조합니다"
- ✅ "Gap validation을 위한 3단계 워크플로우를 사용하세요"
- ✅ "Methods 섹션의 reproducibility checklist 6가지 항목"

## 🎯 Success Metrics

Students should be able to:
1. Write Nature/Science-level abstracts with differentiated opening strategies
2. Systematically discover and validate conceptual gaps (not incremental gaps)
3. Bulletproof Methods/Results sections against top-tier journal rejection
4. Use AI tools effectively (not just know what they are)
5. Share prompts, results, and provide structured peer feedback
6. Apply strategies to their own research immediately

## 📝 Notes for Future Claude Instances

### General Principles
- This is **not a software project** - it's course material
- No code to build, test, or deploy
- Focus on content quality, pedagogical effectiveness, and strategic alignment
- Always check overlap with 윤경생's lectures before adding content
- The ultimate goal is always: "어떻게 하면 탑 5%의 논문을 쓸 것인가"
- Students are psychology graduate students, not computer science students
- Examples should come from psychology/neuroscience research when possible
- All AI tool usage should be practical and immediately applicable to research writing

### Week 1 Specific Guidelines
- **Use the compressed workshop model**: `lesson_notes_compressed_90min.md` is the primary teaching material
- **Practice-first philosophy**: Minimum 40% hands-on time (44% achieved in current design)
- **Cognitive load management**: 10 core principles is the limit, not 40+
- **Workshop over lecture**: 20min practice > 20min theory explanation
- **Peer learning**: Always include pair/group activities
- **Original materials**: `lecture_notes.md` is reference only, not for teaching
- If adding content: Compress first, then add to workshop materials, not lecture slides

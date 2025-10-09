# Template 4.2: Red Team / Blue Team Statistical Rigor Game

**Purpose**: 20-minute competitive game to practice attacking and defending statistical choices

**Use in Workshop**: Team formation (2min) → Attack phase (8min) → Defense phase (8min) → Scoring (2min)

**Target**: Develop reviewer mindset + robust statistical justification skills

---

## Game Concept

**Red Team (Attackers)**: Play the role of skeptical Nature/Science reviewers
- Find weaknesses in statistical analysis
- Challenge assumptions, power, multiple comparisons
- Identify p-hacking risks and overclaiming

**Blue Team (Defenders)**: Justify their statistical choices
- Provide evidence-based rationale
- Show robustness checks
- Preempt common reviewer attacks

**Winning**: Blue Team wins if they successfully defend 70%+ of Red Team attacks

---

## Figma Canvas Layout (3840×2160px)

### Left Panel (800px wide) - Game Rules & Attack/Defense Library [FIXED]

```
┌─────────────────────────────────────────────────────────────────────┐
│ ⚔️ WEEK 4 GAME: RED TEAM vs BLUE TEAM                               │
│                                                                       │
│ 🎯 Game Objective                                                    │
│                                                                       │
│ RED TEAM (Attackers):                                                │
│ • Find statistical vulnerabilities in Blue Team's Methods/Results    │
│ • Each successful attack = 1 point                                   │
│ • Use "Attack Templates" below                                       │
│                                                                       │
│ BLUE TEAM (Defenders):                                               │
│ • Justify statistical choices with evidence                          │
│ • Each successful defense = 1 point                                  │
│ • Use "Defense Strategies" below                                     │
│                                                                       │
│ WINNING:                                                             │
│ • Blue Team must defend ≥70% of attacks                              │
│ • Red Team wins if they land >30% attacks                            │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ 🔴 RED TEAM: Attack Templates                                        │
│                                                                       │
│ ATTACK 1: Sample Size Skeptic                                       │
│ "Your N is too small to detect this effect size reliably.           │
│ With N=[their N] and expected d=[value], your power is <80%.         │
│ How do you justify this sample?"                                     │
│                                                                       │
│ Defense must include:                                                │
│ ☑ A priori power analysis with effect size justification            │
│ ☑ Sensitivity analysis (minimum detectable effect)                  │
│ ☑ Post-hoc power >80% OR acknowledge limitation                     │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ ATTACK 2: Multiple Comparison Hammer                                │
│ "You report [X] comparisons without correction. This inflates        │
│ Type I error to α=[calculated value]. Why is this acceptable?"       │
│                                                                       │
│ Defense must include:                                                │
│ ☑ Bonferroni/FDR correction applied OR                              │
│ ☑ Hierarchical testing strategy OR                                  │
│ ☑ Pre-specified primary vs secondary outcomes                       │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ ATTACK 3: Assumption Violator                                       │
│ "Your [test name] assumes [normality/homogeneity/independence].      │
│ Your data shows [skewness/heterogeneity/nesting]. How do you         │
│ justify this choice?"                                                │
│                                                                       │
│ Defense must include:                                                │
│ ☑ Assumption testing results (Shapiro-Wilk, Levene's test) OR       │
│ ☑ Robustness justification (t-test robust to mild violations) OR    │
│ ☑ Alternative analysis (non-parametric, transformation)             │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ ATTACK 4: P-Hacker Accusation                                       │
│ "You report only significant results. Did you test other            │
│ hypotheses/measures/analyses that didn't work? This looks like      │
│ selective reporting."                                                │
│                                                                       │
│ Defense must include:                                                │
│ ☑ Pre-registration evidence OR                                      │
│ ☑ Report all planned comparisons (sig + non-sig) OR                 │
│ ☑ Clearly label exploratory analyses                                │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ ATTACK 5: Effect Size Minimizer                                     │
│ "Your p<0.001 is impressive, but Cohen's d=[small value].            │
│ This is statistically significant but practically meaningless.       │
│ Why should we care?"                                                 │
│                                                                       │
│ Defense must include:                                                │
│ ☑ Field-specific effect size norms (cite previous work) OR          │
│ ☑ Practical significance argument (MCID, real-world impact) OR      │
│ ☑ Theory-based expected effect size                                 │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ ATTACK 6: Outlier Inquisitor                                        │
│ "How did you handle outliers? If you removed them, did you          │
│ cherry-pick to get significant results? Show me with/without         │
│ outliers comparison."                                                │
│                                                                       │
│ Defense must include:                                                │
│ ☑ Pre-specified outlier criterion (e.g., ±3 SD) OR                  │
│ ☑ Robust methods (Winsorization, MAD) OR                            │
│ ☑ Sensitivity analysis (with vs without outliers)                   │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ ATTACK 7: Missing Data Doubter                                      │
│ "You excluded [N] participants. This could bias results.             │
│ How do you know excluded data is missing completely at random?"      │
│                                                                       │
│ Defense must include:                                                │
│ ☑ MCAR/MAR/MNAR analysis (Little's test) OR                          │
│ ☑ Sensitivity analysis (multiple imputation vs listwise) OR         │
│ ☑ Full data in Supplementary                                        │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ ATTACK 8: Causation Overstepper                                     │
│ "Your design is [correlational/cross-sectional] but you claim        │
│ X 'causes' Y. This is overclaiming. How do you justify causal        │
│ language?"                                                           │
│                                                                       │
│ Defense must include:                                                │
│ ☑ Randomized assignment evidence OR                                 │
│ ☑ Temporal precedence data OR                                       │
│ ☑ Revise to correlational language ("associated with", not "causes")│
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ 🔵 BLUE TEAM: Defense Strategies                                     │
│                                                                       │
│ STRATEGY 1: Evidence-Based Justification                            │
│ "We chose [analysis] based on [cite methodology paper].              │
│ This is standard in our field (see [cite 3 recent papers])."         │
│                                                                       │
│ Red Team counter-attack:                                             │
│ ⚠️ "Just because it's common doesn't make it correct"                │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ STRATEGY 2: Robustness Demonstration                                │
│ "We tested this with [alternative analysis]. Results hold:           │
│ - Original analysis: p=0.003, d=0.65                                 │
│ - Alternative (non-parametric): p=0.005, d=0.62                      │
│ Conclusion: Robust to analysis choice."                              │
│                                                                       │
│ Red Team counter-attack:                                             │
│ ⚠️ "Why didn't you report this in main text?"                        │
│ Blue Team counter: "Added to Supplementary, ref in main"             │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ STRATEGY 3: Sensitivity Analysis                                    │
│ "We conducted sensitivity analysis:                                  │
│ - With outliers (N=60): p=0.002, d=0.70                              │
│ - Without outliers (N=57): p=0.001, d=0.68                           │
│ Effect remains significant and similar magnitude."                   │
│                                                                       │
│ Red Team counter-attack:                                             │
│ ⚠️ "But effect weakened (0.70→0.68), suggests fragility"            │
│ Blue Team counter: "Δd=0.02 is negligible (95% CI overlap)"         │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ STRATEGY 4: Pre-Registration Shield                                 │
│ "Our analysis plan was pre-registered (OSF link: [URL])              │
│ before data collection. All reported tests were pre-specified."      │
│                                                                       │
│ Red Team counter-attack:                                             │
│ ⚠️ "You deviated from pre-reg in [aspect]"                           │
│ Blue Team counter: "Deviation noted in Methods, exploratory results  │
│ clearly labeled"                                                     │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ STRATEGY 5: Limitation Acknowledgment                               │
│ "We acknowledge this limitation in Discussion (lines 456-460).       │
│ Our power analysis (post-hoc) showed 75%, slightly below 80%         │
│ convention. Future studies should use N≥75."                          │
│                                                                       │
│ Red Team response:                                                   │
│ ✅ "Honest acknowledgment. Acceptable if pilot/exploratory."         │
│                                                                       │
│ ─────────────────────────────────────────────────────────────────── │
│                                                                       │
│ 📊 Scoring Guide                                                     │
│                                                                       │
│ SUCCESSFUL ATTACK (Red Team scores):                                │
│ • Blue Team cannot provide evidence-based justification              │
│ • Blue Team admits mistake/oversight                                 │
│ • Blue Team defense is "it's common practice" (not good enough)      │
│                                                                       │
│ SUCCESSFUL DEFENSE (Blue Team scores):                               │
│ • Provides citation/evidence for choice                              │
│ • Shows robustness/sensitivity analysis                              │
│ • Pre-registration evidence                                          │
│ • Honest limitation acknowledgment (if minor)                        │
│                                                                       │
│ INVALID ATTACK (Red Team loses point):                               │
│ • Attack based on misunderstanding of Blue Team's method             │
│ • Attack already addressed in Methods/Results                        │
│                                                                       │
│ INVALID DEFENSE (Blue Team loses point):                             │
│ • Circular reasoning ("because we chose it")                         │
│ • Appeal to authority without evidence                               │
│ • Deflection without addressing core concern                         │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

---

### Right Panel (3040px wide) - Battle Zones [SCROLLABLE]

```
┌─────────────────────────────────────────────────────────────────────────┐
│ ⚔️ BATTLE ZONES (8 min attack + 8 min defense = 16 min total)          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ Teams alternate: Red attacks → Blue defends → Scoring                   │
│ Each pair has 3-4 rounds of attack-defense                              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│ ⚔️ BATTLE 1: 학생A (Blue) vs 학생B (Red) [1400×800px]                   │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│ 📘 BLUE TEAM (학생A) - Defender                                          │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ 📊 My Statistical Choices (요약):                                  │  │
│ │ - Analysis: [e.g., independent samples t-test]                     │  │
│ │ - Sample size: N=60 (30 per group)                                 │  │
│ │ - Expected effect: d=0.65 (based on pilot, N=15)                   │  │
│ │ - Multiple comparisons: 3 planned (primary outcome + 2 secondary)  │  │
│ │ - Outlier handling: Removed N=3 (>3 SD from mean)                  │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ 📕 RED TEAM (학생B) - Attacker                                           │
│                                                                           │
│ 🗡️ ATTACK ROUND 1:                                                      │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ Attack Type: #___ (왼쪽 패널 Attack 1-8 중 선택)                   │  │
│ │                                                                     │  │
│ │ Attack Statement:                                                  │  │
│ │ [학생B가 작성: 왜 학생A의 선택이 문제인지 구체적으로 지적]        │  │
│ │                                                                     │  │
│ │ Evidence/Reasoning:                                                │  │
│ │ [숫자/계산/citation으로 뒷받침]                                    │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ 🛡️ DEFENSE RESPONSE (학생A):                                            │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ Defense Strategy: #___ (왼쪽 패널 Strategy 1-5 중 선택)            │  │
│ │                                                                     │  │
│ │ My Justification:                                                  │  │
│ │ [학생A가 작성: 왜 이 선택이 정당한지 evidence 제시]               │  │
│ │                                                                     │  │
│ │ Supporting Evidence:                                               │  │
│ │ - Citation: [방법론 논문 또는 선행 연구]                          │  │
│ │ - Analysis: [추가 분석 결과, 예: sensitivity analysis]            │  │
│ │ - OR: Acknowledge limitation (if applicable)                       │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ 📊 ROUND 1 SCORE:                                                        │
│ ☑ Attack Success (Red +1) ___ OR Defense Success (Blue +1) ___           │
│ Reasoning: [instructor or peer vote]                                     │
│                                                                           │
│ ─────────────────────────────────────────────────────────────────────   │
│                                                                           │
│ 🗡️ ATTACK ROUND 2:                                                      │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ [학생B의 두 번째 attack - 다른 취약점 공격]                        │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ 🛡️ DEFENSE RESPONSE:                                                    │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ [학생A의 defense]                                                  │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│ 📊 ROUND 2 SCORE: Attack ___ OR Defense ___                              │
│                                                                           │
│ ─────────────────────────────────────────────────────────────────────   │
│                                                                           │
│ 🗡️ ATTACK ROUND 3: [if time permits]                                    │
│ ...                                                                       │
│                                                                           │
│ 🏆 BATTLE 1 FINAL SCORE:                                                 │
│ Red Team (학생B): ___/3 attacks landed                                   │
│ Blue Team (학생A): ___/3 defenses successful                             │
│                                                                           │
│ Winner: [Blue if ≥2/3 defended, Red if ≥2/3 attacks landed]              │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────┐
│ ⚔️ BATTLE 2: 학생C (Blue) vs 학생D (Red) [1400×800px]                   │
├──────────────────────────────────────────────────────────────────────────┤
│ [Battle 1과 동일한 구조]                                                 │
└──────────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────────────────────────────────────────────┐
│ ⚔️ BATTLE 3: 학생E (Blue) vs 학생F (Red) [1400×800px]                   │
├──────────────────────────────────────────────────────────────────────────┤
│ [Battle 1과 동일한 구조]                                                 │
└──────────────────────────────────────────────────────────────────────────┘

[3-6 battles total, depending on class size]


┌─────────────────────────────────────────────────────────────────────────┐
│ 🏆 CHAMPIONSHIP SCOREBOARD (2 min final scoring)                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ 📊 Team Performance Summary                                             │
│                                                                          │
│ ┌──────────────┬─────────────┬─────────────┬────────────────────────┐  │
│ │ Battle       │ Blue Team   │ Red Team    │ Winner                 │  │
│ ├──────────────┼─────────────┼─────────────┼────────────────────────┤  │
│ │ Battle 1     │ 학생A: 2/3  │ 학생B: 1/3  │ 🔵 Blue (67% defense)  │  │
│ │ Battle 2     │ 학생C: 1/3  │ 학생D: 2/3  │ 🔴 Red (67% attacks)   │  │
│ │ Battle 3     │ 학생E: 3/3  │ 학생F: 0/3  │ 🔵 Blue (100% defense) │  │
│ │ Battle 4     │ ...         │ ...         │ ...                    │  │
│ └──────────────┴─────────────┴─────────────┴────────────────────────┘  │
│                                                                          │
│ 🏅 Overall Statistics                                                    │
│ - Blue Team Win Rate: ___% (battles won / total battles)                │
│ - Red Team Win Rate: ___%                                               │
│ - Most Common Successful Attack: #___ (Sample Size Skeptic)             │
│ - Strongest Defense Strategy: #___ (Pre-Registration Shield)            │
│                                                                          │
│ 💡 Class Insights                                                        │
│ [Instructor notes common patterns]                                      │
│ - Weakest area: [e.g., "Power analysis justification - 4/6 teams        │
│                  couldn't defend"]                                       │
│ - Strongest area: [e.g., "Multiple comparison handling - 5/6 defended"] │
│ - Surprising finding: [e.g., "Pre-registration mentioned by 0 teams"]   │
│                                                                          │
│ 📚 Lessons for Homework                                                  │
│ 1. Add to all Methods: [common missing element]                         │
│ 2. Strengthen in Results: [common vulnerability]                        │
│ 3. Pre-emptive defense: [most successful attack to address proactively] │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Workshop Facilitation Guide

### Setup (Before Class - 10 minutes)

1. **Copy Figma Template**
   - Duplicate this game board canvas
   - Create battle zones for N/2 pairs (if 12 students → 6 battles)
   - Generate sharing link

2. **Team Assignment**
   - Pair students strategically (similar research areas helpful)
   - Alternate roles: Each student plays Blue once, Red once
   - Send pairing announcement before class

3. **Prep Attack/Defense Library**
   - Ensure all 8 attacks + 5 defenses are visible
   - Verify scoring guide clarity

### During Workshop

#### Phase 0: Team Formation (2 minutes)

**Instructor Script**:
> "지금부터 20분간 Red Team vs Blue Team 게임을 합니다!
>
> **역할**:
> - **Blue Team (Defender)**: 자신의 statistical choices를 정당화
> - **Red Team (Attacker)**: 동료의 통계 선택에서 약점 찾기
>
> **중요**: Red Team이 되면 '까칠한 리뷰어' 역할이에요.
> 진짜 Nature 리뷰어처럼 skeptical하게!
>
> **Pairing**: [스크린에 pairing 공개]
> Battle 1: 학생A (Blue) vs 학생B (Red)
> Battle 2: 학생C (Blue) vs 학생D (Red)
> ...
>
> 각자 자신의 Battle Zone으로 이동!"

#### Phase 1: Attack Phase (8 minutes)

**Instructor Script**:
> "첫 8분은 **Red Team의 attack time**입니다.
>
> **Red Team 할 일**:
> 1. Blue Team의 통계 선택 읽기 (상단 요약)
> 2. 왼쪽 패널 Attack 1-8 중 적용 가능한 것 선택
> 3. 구체적으로 attack 작성 (숫자/계산 포함)
> 4. 3-4 rounds 공격 (하나당 2분)
>
> **Blue Team은**:
> - Attack을 읽으면서 defense 준비
> - 아직 답변하지 말고 생각만!
>
> **시작!**"

**Monitoring**:
- Red Teams가 generic attack 쓰면 → "Be specific! Calculate actual power or Type I error"
- Red Teams가 막히면 → "Try Attack #1 (Sample Size) or #2 (Multiple Comparison) - easiest"
- Good attacks에 🎯 emoji로 react

#### Phase 2: Defense Phase (8 minutes)

**Instructor Script**:
> "이제 8분은 **Blue Team의 defense time**입니다.
>
> **Blue Team 할 일**:
> 1. 각 attack에 대해 defense 작성
> 2. 왼쪽 패널 Strategy 1-5 참고
> 3. Evidence 필수 (citation, analysis, pre-reg)
> 4. 못 막으면 honest acknowledgment
>
> **Red Team은**:
> - Defense 읽으면서 counter-attack 생각
> - Defense가 weak하면 지적 (Figma comment)
>
> **시작!**"

**Facilitation**:
- Watch for weak defenses: "Just because it's common" → Invalid
- Encourage honest acknowledgment: "Acknowledging limitation is valid defense if minor"
- Highlight good defenses with ✅ emoji

#### Phase 3: Scoring (2 minutes)

**Instructor Script**:
> "마지막 2분은 scoring입니다.
>
> **각 battle에서**:
> - Attack-defense pair마다 승자 결정
> - Blue Team이 ≥70% 방어 → Blue 승
> - Red Team이 ≥30% 공격 성공 → Red 승
>
> **Scoring 기준** (왼쪽 패널 참고):
> - Successful attack: Blue가 evidence 못 대거나 인정
> - Successful defense: Citation/analysis/pre-reg 제시
>
> 지금 자신의 battle 점수 매기고,
> Championship Scoreboard에 결과 입력!"

**Facilitation**:
- Quickly scan battles for disputes → Adjudicate if needed
- Identify patterns: "4/6 teams couldn't defend power analysis → homework focus"
- Take screenshot of scoreboard for next week reference

---

## Post-Workshop

### Debrief Discussion (5 minutes)

**Discussion Questions**:
1. "Red Team으로 했을 때 가장 공격하기 쉬웠던 약점은?"
   - Common answer: "Sample size justification - nobody had power analysis"

2. "Blue Team으로 했을 때 가장 방어하기 어려웠던 attack은?"
   - Reveals class-wide weak points

3. "가장 강력했던 defense strategy는?"
   - Highlight: Pre-registration, sensitivity analysis

4. "이 게임에서 배운 것을 자신의 Methods/Results에 어떻게 적용?"
   - Homework preparation

### Key Takeaways to Emphasize

**For Red Team Experience**:
> "Red Team 역할을 해보면서 **리뷰어의 눈**으로 보는 연습을 했습니다.
> 앞으로 자신의 Methods를 쓸 때 스스로에게 이 8가지 attack을 해보세요!"

**For Blue Team Experience**:
> "Blue Team 역할에서 **defense는 evidence가 전부**임을 배웠습니다.
> '관례상', '일반적으로'는 defense가 아니에요.
> Citation, 추가 분석, pre-registration - 이게 진짜 defense!"

**Strategic Insight**:
> "가장 좋은 defense는 **preemptive defense**입니다.
> Methods/Results를 쓸 때 리뷰어의 예상 질문에 미리 답하세요.
> 예: 'Power analysis indicated N=60 adequate for d=0.65 at 80% power (G*Power 3.1)'"

---

## Homework Integration

**Students should**:
1. Apply all 8 Red Team attacks to own Methods/Results (self-audit)
2. Write preemptive defenses in Methods section
3. Add robustness checks to Results section
4. Document this in "Bulletproofing Documentation" assignment

**Example Homework Addition**:
```
Before Game: "We used independent samples t-test with N=60."

After Game (with preemptive defense):
"We used independent samples t-test with N=60 (30 per group).
A priori power analysis (G*Power 3.1) indicated this sample size
provides 82% power to detect d=0.65 (based on pilot data, N=15)
at α=0.05. We applied Bonferroni correction for 3 planned
comparisons (corrected α=0.017). Assumption testing confirmed
normality (Shapiro-Wilk p>.05) and homogeneity of variance
(Levene's p=.23). Sensitivity analysis with non-parametric
Mann-Whitney U test yielded consistent results (p=.004)."
```

---

## Success Metrics

**Game succeeds if**:
- ✅ Every pair completes 3+ attack-defense rounds
- ✅ Students cite specific Attack/Defense numbers (shows library usage)
- ✅ At least 50% of defenses include evidence (not just "it's common")
- ✅ Scoreboard reveals class-wide patterns (instructor can address in debrief)

**Individual success**:
- 🎯 Can identify statistical vulnerabilities (Red Team skill)
- 🎯 Can provide evidence-based justification (Blue Team skill)
- 🎯 Understands reviewer mindset and expectations
- 🎯 Can write preemptive defenses in own Methods/Results

---

## Common Issues & Solutions

**Issue: "Red Team too nice, didn't really attack"**
Solution: Instructor models aggressive attack: "Let me show you. '학생A, your N=30 gives only 45% power for d=0.5. Why submit underpowered study?'"

**Issue: "Blue Team just says 'everyone does this'"**
Solution: Instructor rules invalid defense, Red Team scores: "Appeal to common practice without evidence = failed defense"

**Issue: "Students don't know how to calculate power/Type I error"**
Solution: Provide calculator links in Figma (G*Power online, Bonferroni calculator)

**Issue: "Time runs out, only 1-2 rounds completed"**
Solution: OK! Quality over quantity. Even 2 good attack-defense rounds build skills.

---

## Related Materials

**Templates**:
- `template_4.1_bulletproofing_audit_canvas.md`: Identifies vulnerabilities systematically
- `template_4.3_reproducibility_checklist.md`: Detailed element-by-element review
- `template_4.4_peer_review_rubric.md`: Comprehensive evaluation criteria

**Lecture Notes**:
- `week4/lecture_notes.md`: Full statistical rigor strategies (section 3.2, lines 319-366)

**Previous Week**:
- `week3/template_3.3_peer_review_rubric.md`: Builds on peer feedback skills

**Next Week**:
- `week5/template_5.1_*`: Discussion section (uses bulletproofed Methods/Results)

---

## Customization Options

**For Smaller Classes** (<6 students):
- Each student plays both roles (Blue and Red) sequentially
- 10 min Blue defense → 10 min role swap → Red attack

**For Larger Classes** (>12 students):
- Create multiple rounds (tournament bracket)
- Winners of Round 1 battles face each other in Round 2
- Final championship battle (best Blue vs best Red)

**For Advanced Classes**:
- Add Attack #9: "Questionable Research Practices Detector"
- Add Defense Strategy #6: "Open Science Triple Defense" (pre-reg + data + code)
- Increase difficulty: Require quantitative attacks (exact power calculations)

---

**Template Version**: 1.0
**Last Updated**: 2025-10-09
**Use**: Week 4 workshop - Game-based statistical rigor training with adversarial review practice

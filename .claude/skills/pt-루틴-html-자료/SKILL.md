---
name: pt-루틴-html-자료
description: 회원용 운동 루틴 가이드를 모바일 HTML로 만들 때 사용한다. 케렌시아 피트니스(Querencia Fitness, Trainer Woo)의 정해진 디자인 시스템과 루틴표 레이아웃(wtable + ex-tag '중 택1' 구조)을 그대로 따라야 한다. "OO 회원 루틴 자료 만들어줘", "n분할 루틴 HTML" 요청에 발동한다.
---

# PT 루틴 HTML 자료 제작 사양

## ★ 0. 최우선 절대 규칙 (다른 모든 규칙보다 먼저 읽고 지킬 것)

이 작업은 **새 HTML을 작성하는 작업이 아니다. 기존 템플릿의 내용만 바꿔치기하는 작업이다.**

**참조 파일 경로 (두 파일 모두 반드시 읽는다)**
- **빈 템플릿**: `C:\Users\kgw57\OneDrive\바탕 화면\Mr.woo\[회원용 루틴만들기]\template_검수용초안.html` — 구조·클래스·CSS의 기준. 이 파일을 복제해 텍스트만 교체한다.
- **완성 샘플**: `C:\Users\kgw57\OneDrive\바탕 화면\Mr.woo\[회원용 루틴만들기]\template_검수용샘플.html` — 실제 완성된 결과물. 섹션 구성·문장 톤·루틴표 밀도를 이 파일과 비교해 맞춘다.

1. **반드시 빈 템플릿(`template_검수용초안.html`) 전체를 끝까지 읽는다.** (도중에 끊지 말 것.)
2. **완성 샘플(`template_검수용샘플.html`)도 끝까지 읽어 결과물 품질 기준을 파악한다.**
3. **빈 템플릿을 그대로 복제한 뒤, 그 위에서 텍스트만 교체한다.** HTML 뼈대를 처음부터 새로 쓰는 것을 절대 금지한다.
4. `<style>` 블록, 모든 CSS 클래스 이름, 클래스 구조는 **한 글자도 바꾸지 않는다.** 그대로 둔다.
5. 교체해도 되는 것은 **눈에 보이는 텍스트 값뿐**이다: 회원 이름, 레벨/분할 배지 글자, day 제목·근육·설명, 부위명, 종목명, 횟수, 세트 숫자, 원칙·팁·참고문헌 문장.

→ 만약 두 파일 중 하나라도 읽지 못했다면, **작업을 진행하지 말고 파일명을 명시해 보고**한다. 기억이나 일반 지식으로 새 디자인을 만들어내지 않는다.

## ★ 절대 금지

- ❌ `onclick`, `toggle`, `addEventListener` 등 **JavaScript 동작 코드를 추가하는 것** — 이 자료는 완전 정적 HTML이다.
- ❌ `acc-item`, `acc-head`, `acc-body`, `acc-arrow`, `acc-hint`, `day-toggle`, `day-arrow`, `day-panel` 등 **아코디언·토글 관련 클래스를 쓰는 것** — 해당 CSS와 구조는 템플릿에 존재하지 않는다.
- ❌ `day-card`, `week-grid`, `header`, `container` 등 **새 클래스명을 만드는 것** → 반드시 아래 정식 클래스만 쓴다.
- ❌ `.cover`, `.rpe-card`, `.wtable-card`를 빼먹는 것
- ❌ 컬러·폰트만 가져오고 레이아웃을 새로 짜는 것
- ❌ 표를 일반 `<table>`이나 그리드로 재해석하는 것

## 1. 반드시 포함되어야 하는 정식 클래스 (자가 검증용)

출력 HTML에는 아래 클래스가 **반드시** 들어 있어야 한다. 작업 후 직접 확인한다.
`cover`, `cover-level`, `cover-split`, `principles`, `metrics-grid`, `rpe-card`, `rpe-bars`,
`day-section`, `day-hdr`, `day-num-badge`, `wcard-area`, `wtable-card`, `wtable-thead`,
`wtable-row`, `wtd-part`, `part-choice`, `ex-tags`, `ex-tag`, `ex-num`, `ex-line-last`,
`ex-tag-last`, `wtd-reps`, `wtd-sets`, `tips-wrap`, `tip-item`, `refs`, `doc-footer`.
→ 이 중 하나라도 빠졌으면 빈 템플릿을 다시 복제해 작업을 처음부터 한다.

## 2. 기본 골격

- `body`: `max-width:430px; margin:0 auto;` (반응형). 템플릿 값 유지.
- 본문 `Noto Sans KR`, 제목 `Noto Serif KR`. 디자인 토큰(`--forest` 등 CSS 변수)은 template 그대로.
- **JavaScript 없음.** 모든 내용은 항상 펼쳐진 상태. onclick·toggle 절대 사용 금지.

## 3. 문서 섹션 순서 (template와 동일)

1. `.cover` — 레벨 배지 + 분할 배지, h1(회원명 + `<em>` lime 강조), `.cover-sub`(Querencia Fitness · Trainer Woo)
2. `.principles` — `.section-hdr` → `.lead-box`(1~2문장 요약) → `ul`(짧은 원칙 불릿) → `.metrics-grid`(구분/분할/세트/휴식)
3. `.rpe-card` — RPE 가이드(막대 1~10, 목표 구간만 진하게) → 축 → 목표 pill → `.rpe-desc-box`(2~3줄 이내) → `.rpe-guide-banner`
4. `.day-section` × 분할 수 — `.day-hdr`(정적, 클릭 없음) + `.wcard-area > .wtable-card` (항상 펼쳐진 상태)
5. `.tips-wrap` — `.tip-item` × 항목 수 (h4 제목 + ul 불릿, 항상 표시)
6. `.refs` — 참고 문헌 (실존 확인된 것만)
7. `.doc-footer` — 좌: "OO 회원님 n분할 루틴 가이드 · Querencia Fitness", 우: "TRAINER WOO"

## 4. 텍스트 톤 & 길이 원칙

- **루틴 개요(lead-box)**: 1~2문장. 분할 구조 + 핵심 목표만.
- **원칙 불릿(principles li)**: `**키워드** — 한 줄 설명` 형식. 1줄 이내.
- **RPE 설명(rpe-desc-box)**: 2~3줄 이내. 숫자·기준만.
- **DAY 설명(day-desc)**: 1~2문장. 마침표마다 줄바꿈.
- **Trainer Tips(tip-item li)**: 항목당 1~2문장. 짧고 직접적으로.
→ 긴 문단 금지. 회원이 한눈에 파악할 수 있어야 한다.

## 5. 루틴표(wtable) 구조 — 가장 중요

- 4열 그리드(부위/종목/횟수/세트). 헤더 `.wtable-thead`, 각 줄 `.wtable-row`.
- `.wtd-part`: 부위명. 선택지 여러 개면 `has-choice` + `<span class="part-choice">중 택1</span>`.
- 종목 칸 `.ex-tags`: 각 종목 `.ex-tag` 앞에 `.ex-num`(원형 번호). **마지막 종목 줄은 `.ex-line-last`로 감싸고 ex-tag에 `.ex-tag-last`**.
- 단일 종목은 `.ex-num` 없이 `.ex-tag-last`만.
- `.wtd-reps`(rep-num+REP), `.wtd-sets`(set-num+SET). 값 없으면 "-".
- 워밍업/쿨다운 줄은 `.row-center`.

## 6. 콘텐츠 원칙 (CLAUDE.md 상속)

- 회원 안전 최우선 / 정확성 우선 / 창의적 날조 금지 → **CLAUDE.md 원칙 1·2·3 상속. 이 파일에서 재서술하지 않는다.**
- 참고 문헌은 WebSearch 실시간 검색으로 실존 확인된 것만 포함한다.
- 큐잉·피드백은 **큐잉-원칙 스킬**이 단독 관리한다. 레벨 표기는 초급·중급·상급으로 통일.

## 7. 작업 순서 (이대로 실행)

1. `template_검수용초안.html`을 끝까지 읽는다.
2. `template_검수용샘플.html`을 끝까지 읽어 품질 기준을 파악한다.
3. 빈 템플릿을 복제한다.
4. 보이는 텍스트 값만 회원 데이터로 교체한다(클래스·구조·스타일 불변).
5. 위 "1. 정식 클래스" 목록이 모두 들어있는지 확인한다.
6. 파일명 `n분할_루틴_회원명.html`로 저장한다.

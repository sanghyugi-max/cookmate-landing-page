/* ============================================================
   쿡메이트 페이지 수정 설정 — 대부분의 수정은 이 파일에서 합니다.
   따옴표 안의 문구를 수정하고 저장한 다음 브라우저를 새로고침하세요.
   항목 추가: 배열 [ ... ] 안의 { ... } 한 묶음을 복사하세요.
   문자열 안에서 줄바꿈은 \n, 큰따옴표는 \" 로 입력합니다.
   ============================================================ */
window.COOKMATE_CONFIG = {
  meta: {
    title: "쿡메이트 | 업소용 자동직화구이기",
    description: "반복되는 굽기 작업을 자동화하는 쿡메이트. 작동 방식, 제품 정보와 매장 도입 조건을 확인하세요."
  },
  brand: { name: "COOKMATE", korean: "쿡메이트", descriptor: "업소용 자동직화구이기", footer: "매장의 조리 흐름을 생각합니다.", copyright: "© COOKMATE. All rights reserved." },
  // 실제 자료를 모두 반영한 뒤 false로 변경하세요. 개별 placeholder 표시는 별도입니다.
  draft: { show: true, text: "제작 시안 · 영상, 제품 사양, 사례 및 상담 정보를 등록한 뒤 배포해 주세요." },
  navigation: [ { label: "작동 방식", target: "how" }, { label: "도입 장점", target: "benefits" }, { label: "제품 정보", target: "specs" }, { label: "자주 묻는 질문", target: "faq" } ],
  buttons: { consult: "도입 상담하기", watch: "작동 영상 보기", phone: "전화 상담", skip: "본문 바로가기", backTop: "맨 위로", youtube: "유튜브에서 보기" },
  // 전화는 숫자와 +, -만 사용. 상담 URL은 https://로 시작하는 실제 주소를 입력합니다.
  contact: { phone: "", url: "", pending: "상담 정보 등록 필요", note: "상담 채널 준비 중입니다. 실제 전화번호 또는 상담 링크를 등록해 주세요.", business: "[등록 필요] 회사명 · 대표자 · 사업자등록번호 · 주소", hours: "[등록 필요] 상담 운영시간" },
  hero: {
    eyebrow: "주방의 반복 작업을 바꾸는 선택",
    title: "삼겹살, 이제 사람이\n뒤집지 마세요.",
    description: "반복되는 굽기 작업은 자동화하고,\n직원은 매장에 필요한 다른 일에 집중하세요.",
    tags: ["업소용 조리 자동화", "일관된 조리 과정", "매장별 도입 상담"],
    mediaLabel: "COOKMATE / PRODUCT FILM",
    mediaTitle: "직화의 맛,\n더 간결한 조리 과정.",
    mediaNote: "실제 제품의 작동 영상으로 확인하세요."
  },
  // ★ 영상 교체: type은 "mp4" 또는 "youtube". src만 바꾸면 됩니다.
  // mp4 예: { type: "mp4", src: "assets/demo.mp4", poster: "assets/poster.jpg", ... }
  // youtube 예: src: "https://www.youtube.com/watch?v=실제영상ID"
  // youtu.be / shorts / embed 링크도 지원합니다. 유튜브는 인터넷 연결이 필요합니다.
  video: {
  type: "youtube",
  src: "https://youtu.be/pU8GiZ0rLJM?si=g4k1iwGHsNIHNKs5",
  poster: "", captions: "", captionsLabel: "한국어 자막", captionLanguage: "ko" },
  problem: { eyebrow: "01 / 주방의 고민", title: "바쁜 시간일수록,\n굽는 일에 묶이지 않도록.", intro: "주문이 몰리는 순간, 매장의 조리 흐름을 점검해 보세요.", items: [ { title: "계속 필요한 굽기 인력", text: "직원이 불 앞에서 고기를 뒤집느라 다른 작업에 손을 쓰기 어렵나요?" }, { title: "사람마다 다른 조리 결과", text: "담당자가 바뀔 때마다 익힘 정도를 다시 맞추고 있나요?" }, { title: "피크타임에 밀리는 주문", text: "반복 작업에 시간이 쏠려 전체 제공 흐름이 늦어지나요?" } ] },
  how: { eyebrow: "02 / 작동 방식", title: "투입부터 완성까지,\n한눈에 보이는 조리 흐름.", intro: "아래는 설명용 흐름입니다. 실제 모델의 작동 순서와 지원 기능을 확인해 수정해 주세요.", placeholder: true, items: [ { title: "재료 투입", text: "메뉴에 맞게 준비한 재료를 투입합니다." }, { title: "조리 조건 설정", text: "재료에 맞는 지원 설정값을 적용합니다." }, { title: "자동 조리", text: "기기의 작동 상태와 조리 과정을 확인합니다." }, { title: "완성 및 제공", text: "익힘 상태를 확인하고 메뉴를 완성합니다." } ] },
  benefits: { eyebrow: "03 / 도입 장점", title: "기능을 넘어,\n주방의 일하는 방식으로.", intro: "매장에서 기대하는 변화를 기준으로 도입을 검토하세요. 효과는 메뉴, 운영 방식과 제품 모델에 따라 달라집니다.", items: [ { title: "반복 작업 부담 완화", text: "굽기 작업에 집중되던 인력의 역할을 재검토할 수 있습니다." }, { title: "조리 과정 표준화", text: "메뉴에 맞는 조리 기준을 정하고 직원 간 작업 편차를 관리합니다." }, { title: "피크타임 흐름 개선", text: "준비·조리·제공으로 이어지는 작업 동선을 함께 설계합니다." }, { title: "매장에 맞춘 도입", text: "메뉴, 필요 처리량, 설치 공간을 확인해 적합성을 상담합니다." } ] },
  cases: { eyebrow: "04 / 실제 사용 사례", title: "우리 매장과 닮은 사례를\n확인해 보세요.", intro: "확인된 납품 사례와 사용자의 동의를 받은 후기만 게시합니다.", items: [ { category: "설치 사례", title: "매장 설치 사진과 운영 사례", text: "업종 / 사용 메뉴 / 설치 환경 / 활용 방식을 입력해 주세요.", image: "", alt: "실제 매장 설치 사진", placeholder: true }, { category: "고객 리뷰", title: "현장에서 전하는 사용 경험", text: "고객의 실제 후기와 매장명, 사용 기간을 입력해 주세요.", image: "", alt: "실제 고객 매장 사진", placeholder: true } ] },
  comparison: { eyebrow: "05 / BEFORE & AFTER", title: "반복하던 작업,\n어떻게 달라질까요?", intro: "자동화 도입을 검토할 때의 비교 예시입니다. 실제 지원 기능과 운영 조건을 확인하세요.", before: "기존 조리 방식", after: "자동화 도입 시 검토할 변화", rows: [ ["직원이 수시로 뒤집는 작업", "자동 조리로 반복 작업 부담 완화"], ["개인의 경험에 의존하는 굽기", "메뉴별 조리 기준 정립"], ["굽기 작업에 집중되는 인력", "준비·제공 업무와 역할 분담"], ["숙련자의 노하우 위주 교육", "표준 조리 과정 중심의 교육"] ] },
  specs: { eyebrow: "06 / 제품 사양", title: "도입 전, 꼼꼼하게 확인하세요.", intro: "설치 공간과 매장의 사용 환경에 맞는지 상담 시 함께 확인합니다.", rows: [ { label: "제품명 / 모델명", value: "쿡메이트 자동직화구이기 / 모델명 등록 필요", placeholder: true }, { label: "제품 크기 (W × D × H)", value: "실측 크기 및 단위 등록 필요", placeholder: true }, { label: "전원 / 가스 조건", value: "전압·소비전력·가스 종류 등록 필요", placeholder: true }, { label: "1회 투입량 / 시간당 처리량", value: "시험 조건을 포함한 공식 수치 등록 필요", placeholder: true }, { label: "조리시간", value: "재료·투입량별 기준 등록 필요", placeholder: true }, { label: "재질 / 중량", value: "공식 제품 정보 등록 필요", placeholder: true }, { label: "설치 조건", value: "배기·급배수·이격거리 등 확인 후 등록", placeholder: true } ] },
  faq: { eyebrow: "07 / FAQ", title: "도입 전에 자주 묻는 질문", items: [ { question: "어떤 메뉴에 사용할 수 있나요?", answer: "돼지고기 삼겹살, 목살, 양념갈비, 쪽갈비, 닭발, 막창 등 대부분의 고기 구이가 가능합니다.", placeholder: false }, { question: "설치에 필요한 공간과 설비는 무엇인가요?", answer: "가로폭 최소 500mm ~ 1100mm와 세로폭700mm 공간만 확보되면 설치 가능합니다.(모델별 스펙이 상이하니 위 표를 참고해주세요). 덕트(후드)시설 필수이며 가스배관 연결이 필요합니다.", placeholder: true }, { question: "세척과 유지관리는 어떻게 하나요?", answer: "본품은 싱크대 구조로 내부 물세척이 가능하고 배수를 위한 밸브가 장착되어 있습니다. 전용바스켓의 경우 코팅바스켓은 물세척으로 편하게 세척이 가능합니다.", placeholder: true }, { question: "배송 및 A/S 조건은 어떻게 되나요?", answer: "배송은 직접 배송이 원칙입니다(일부 상황에 따라 택배 또는 용달로 진행될 수도 있습니다.). 구매일로부터 1년간 무상보증 기간이며 이후부터는 유상으로 진행됩니다. ", placeholder: true } ] },
  cta: { eyebrow: "LET’S COOK BETTER", title: "우리 매장에 맞는지,\n함께 확인해 보세요.", text: "사용 메뉴와 예상 조리량, 설치 공간을 알려주시면\n도입 상담을 더 구체적으로 진행할 수 있습니다." },
  labels: { placeholder: "자료 등록 필요", example: "설명 예시 · 실제 정보 확인 필요", image: "실제 사진 등록 필요", number: "단계" }
};

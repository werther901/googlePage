// 준비중 알림 함수
const ready = () => {
  alert("준비중 입니다.");
};

// 점 9개 데이터
const data = [
  { id: 1, name: "계정", img: "./images/google_search_icon.png" },
  { id: 2, name: "드라이브", img: "./images/google_search_icon.png" },
  { id: 3, name: "Gmail", img: "./images/google_search_icon.png" },
  { id: 4, name: "YouTube", img: "./images/google_search_icon.png" },
  { id: 5, name: "Gemini", img: "./images/google_search_icon.png" },
  { id: 6, name: "지도", img: "./images/google_search_icon.png" },
  { id: 7, name: "검색", img: "./images/google_search_icon.png" },
  { id: 8, name: "Calendar", img: "./images/google_search_icon.png" },
  { id: 9, name: "뉴스", img: "./images/google_search_icon.png" },
  { id: 10, name: "사진", img: "./images/google_search_icon.png" },
  { id: 11, name: "Meet", img: "./images/google_search_icon.png" },
  { id: 12, name: "번역", img: "./images/google_search_icon.png" },
  { id: 13, name: "Sheets", img: "./images/google_search_icon.png" },
  { id: 14, name: "Docs", img: "./images/google_search_icon.png" },
  { id: 15, name: "Slides", img: "./images/google_search_icon.png" },
  { id: 16, name: "Google one", img: "./images/google_search_icon.png" },
  { id: 17, name: "쇼핑", img: "./images/google_search_icon.png" },
  { id: 18, name: "Google Store", img: "./images/google_search_icon.png" },
  { id: 19, name: "Play", img: "./images/google_search_icon.png" },
  { id: 20, name: "금융", img: "./images/google_search_icon.png" },
  { id: 21, name: "Keep", img: "./images/google_search_icon.png" },
  { id: 22, name: "내 광고 센터", img: "./images/google_search_icon.png" },
  { id: 23, name: "클래스룸", img: "./images/google_search_icon.png" },
  { id: 24, name: "채팅", img: "./images/google_search_icon.png" },
  { id: 25, name: "어스", img: "./images/google_search_icon.png" },
  { id: 26, name: "저장됨", img: "./images/google_search_icon.png" },
  { id: 27, name: "아트 앤 컬처", img: "./images/google_search_icon.png" },
  { id: 28, name: "Google Ads", img: "./images/google_search_icon.png" },
  { id: 29, name: "Merchant Center", img: "./images/google_search_icon.png" },
  { id: 30, name: "주소록", img: "./images/google_search_icon.png" },
  { id: 31, name: "여행", img: "./images/google_search_icon.png" },
  { id: 32, name: "Forms", img: "./images/google_search_icon.png" },
  { id: 33, name: "도서", img: "./images/google_search_icon.png" },
  { id: 34, name: "Google 웹스토어", img: "./images/google_search_icon.png" },
  { id: 35, name: "비밀번호 관리자", img: "./images/google_search_icon.png" },
  { id: 36, name: "Google 애널리틱스", img: "./images/google_search_icon.png" },
  { id: 37, name: "Blogger", img: "./images/google_search_icon.png" },
];

let addData = document.querySelector(".addData");

data.forEach((data, i) => {
  console.log(data.name);

  addData.innerHTML += `<li class="dropHover col-4">
                  <a class="dropdown-item" href="#" onclick="ready()">
                    <div class="imgSize">
                      <img src="${data.img}" alt="search_icon" />
                    </div>
                    <div class="dropTitle">${data.name}</div>
                  </a>
                </li>`;
});

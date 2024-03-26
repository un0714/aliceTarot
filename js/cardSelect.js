//뒤로가기 클릭시 메인페이지로 이동
function indexBtn() {
  window.location.href = "../index.html";
}

//cardShuffle
let cards = new Array(22);
//just loop through the cards:
for (let i = 0; i < cards.length; i++) {
  cards[i] = i;
}

// console.log('cards : ', cards);

const cards2 = [
  { src: "/images/1.png", cardId: 0 },
  { src: "/images/2.png", cardId: 1 },
  { src: "/images/3.png", cardId: 2 },
  { src: "/images/4.png", cardId: 3 },
  { src: "/images/5.png", cardId: 4 },
  { src: "/images/6.png", cardId: 5 },
  { src: "/images/7.png", cardId: 6 },
  { src: "/images/8.png", cardId: 7 },
  { src: "/images/9.png", cardId: 8 },
  { src: "/images/10.png", cardId: 9 },
  { src: "/images/11.png", cardId: 10 },
  { src: "/images/12.png", cardId: 11 },
  { src: "/images/13.png", cardId: 12 },
  { src: "/images/14.png", cardId: 13 },
  { src: "/images/15.png", cardId: 14 },
  { src: "/images/16.png", cardId: 15 },
  { src: "/images/17.png", cardId: 16 },
  { src: "/images/18.png", cardId: 17 },
  { src: "/images/19.png", cardId: 18 },
  { src: "/images/20.png", cardId: 19 },
  { src: "/images/21.png", cardId: 20 },
  { src: "/images/22.png", cardId: 21 },
];

const getProperties = (i) => {
  return { card: cards2[i].src, cardId: cards2[i].cardId };
};

let url = window.location.search;

let param = url.split("=");

const sortPage = param[1];

if (sortPage == 2) {
  let x = document.getElementsByClassName("textWrap_title")[0];
  x.innerText = "이번 한주는 어떨까요?";
  let y = document.getElementsByClassName("spanText")[0];
  y.innerText = "나의 이번주";
} else if (sortPage == 3) {
  let x = document.getElementsByClassName("textWrap_title")[0];
  x.innerText = "이번 한달은 어떨까요?";
  let y = document.getElementsByClassName("spanText")[0];
  y.innerText = "나의 한달";
  let z = document.getElementsByClassName("spanNum")[0];
  z.innerText = "7장";
} else if (sortPage == 4) {
  let x = document.getElementsByClassName("textWrap_title")[0];
  x.innerText = "오늘 나의 애정운은?";
  let y = document.getElementsByClassName("spanText")[0];
  y.innerText = "오늘의 애정";
} else if (sortPage == 5) {
  let x = document.getElementsByClassName("textWrap_title")[0];
  x.innerText = "내 애인의 속마음은?";
  let y = document.getElementsByClassName("spanText")[0];
  y.innerText = "썸";
} else if (sortPage == 6) {
  let x = document.getElementsByClassName("textWrap_title")[0];
  x.innerText = "내 애인의 속마음은?";
  let y = document.getElementsByClassName("spanText")[0];
  y.innerText = "연인";
} else if (sortPage == 7) {
  let x = document.getElementsByClassName("textWrap_title")[0];
  x.innerText = "지금도 솔로, 미래도 솔로?";
  let y = document.getElementsByClassName("spanText")[0];
  y.innerText = "미래연인";
  let z = document.getElementsByClassName("spanNum")[0];
  z.innerText = "3장";
} else if (sortPage == 8) {
  let x = document.getElementsByClassName("textWrap_title")[0];
  x.innerText = "미안... 우린 여기까지인가봐";
  let y = document.getElementsByClassName("spanText")[0];
  y.innerText = "이별";
  let z = document.getElementsByClassName("spanNum")[0];
  z.innerText = "3장";
} else if (sortPage == 9) {
  let x = document.getElementsByClassName("textWrap_title")[0];
  x.innerText = "나의 금전운을 알 수 있을까?";
  let y = document.getElementsByClassName("spanText")[0];
  y.innerText = "금전";
} else if (sortPage == 10) {
  let x = document.getElementsByClassName("textWrap_title")[0];
  x.innerText = "원하는 직장에 가게 될까?";
  let y = document.getElementsByClassName("spanText")[0];
  y.innerText = "일자리";
} else if (sortPage == 11) {
  let x = document.getElementsByClassName("textWrap_title")[0];
  x.innerText = "너의 마음을 볼 수 있다면!";
  let y = document.getElementsByClassName("spanText")[0];
  y.innerText = "관계";
} else if (sortPage == 12) {
  let x = document.getElementsByClassName("textWrap_title")[0];
  x.innerText = "운명같은 사랑이 올까?";
  let y = document.getElementsByClassName("spanText")[0];
  y.innerText = "사랑 가이드";
} else if (sortPage == 13) {
  let x = document.getElementsByClassName("textWrap_title")[0];
  x.innerText = "우리 헤어져? 말아?";
  let y = document.getElementsByClassName("spanText")[0];
  y.innerText = "연애 가이드";
} else if (sortPage == 14) {
  let x = document.getElementsByClassName("textWrap_title")[0];
  x.innerText = "나는 어떻게 살아가야 하지?";
  let y = document.getElementsByClassName("spanText")[0];
  y.innerText = "라이프 가이드";
} else if (sortPage == 15) {
  let x = document.getElementsByClassName("textWrap_title")[0];
  x.innerText = "나는 과연 누구인가?";
  let y = document.getElementsByClassName("spanText")[0];
  y.innerText = "멘탈 가이드";
}

const shuffle = (cards) => {
  for (let i = 0; i < cards.length; i++) {
    //Fisher-Yates shuffle
    const rnd = (Math.random() * i) | 0;
    const tmp = cards[i];
    cards[i] = cards[rnd];
    cards[rnd] = tmp;
  }
  return cards;
};

setTimeout(() => {
  shuffle(cards);
  let cardsListDom = document.createElement("div");
  cardsListDom.className = "card_box";
  cardsListDom.innerHTML = CreateCard(getProperties);
  document.getElementById("boxCard").appendChild(cardsListDom);

  let cardWrap = document.querySelector("#cardWrap");
  let cardWrapWidth = cardWrap.getBoundingClientRect().width;
  let cardWrapHeight = cardWrap.getBoundingClientRect().height;
  let cardBind = Array.from(document.querySelectorAll("#cardWrap .card_bind"));
  let cardWidth = (cardWrapWidth - 40) / 6;
  let cardHeight = cardWidth * 1.706349206349206;

  cardBind.map((el, index) => {
    el.setAttribute(
      "style",
      `position: absolute; left: ${(index % 6) * (cardWidth + 8)}px; top: ${
        Math.floor(index / 6) * (cardHeight + 8)
      }px; width: ${cardWidth}px; height: ${cardHeight}px; transform: inherit;`
    );
  });
}, 100);

const CreateCard = (cardList) => {
  let List = cardList;
  let arr = cards.map(cardList);
  let stringText = "";
  arr.forEach(function (element, index, array) {
    // console.log('array :', array);
    let ca = arr[index].card;
    let cardId = arr[index].cardId;

    stringText += `<div class="card_bind" data-id="${cardId}">
                    <div class="front"></div>
                    <div class="back" style="background : url(${ca}) no-repeat 50% 50%; background-size:cover;"></div>
                  </div>`;
  });

  return stringText;
};

const givePresent = () => {};
const pre = document.createElement("pre");

document.body.appendChild(pre);

var elementButton = document.getElementById("button");
elementButton.addEventListener(
  "click",
  function () {
    var el = document.querySelector(".card_box");

    let promise = new Promise(function (resolve, reject) {
      el.classList.add("spread");
      setTimeout(() => resolve("done"), 1000);
    });
    promise.then((res) => {
      if (res === "done") {
        el.classList.remove("spread");
      }
    });
  },
  false
);

//애니메이션 셔플이 끝날 때 클래스 넣어주기
//뒤집는 함수 넣어 주기
setTimeout(() => {
  var el = document.querySelector(".card_box");
  el.classList.add("show_back");

  let cardBind = Array.from(document.querySelectorAll(".card_bind"));

  let cardArr = new Array();

  for (let i = 0; i < cardBind.length; i++) {
    cardBind[i].addEventListener("click", function () {
      cardBind[i].classList.add("on");
      cardArr.push(this.dataset.id);

      if (sortPage == 3) {
        if (cardArr.length === 7) {
          setTimeout(() => {
            location.href = "loading.html?card=" + cardArr;
          }, 500);
        }
      } else if (sortPage == 7 || sortPage == 8) {
        if (cardArr.length === 3) {
          setTimeout(() => {
            location.href = "loading.html?card=" + cardArr;
          }, 500);
        }
      } else {
        if (cardArr.length === 1) {
          setTimeout(() => {
            location.href = "loading.html?card=" + cardArr;
          }, 500);
        }
      }
    });
  }
}, 200);

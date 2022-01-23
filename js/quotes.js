const quotes = [
  {
    quote: "시곈 롤렉스 아니 파텍필립으로 떡상을 해, 스테이크가 주식이 돼",
    author: "- mahns",
  },
  {
    quote: "추운 게 싫어서 더 위로 가려면 여름에 가",
    author: "- mahns",
  },
  {
    quote: "내 실력은 keep myself So, kick your ass",
    author: "- mahns",
  },
  {
    quote: "키보드를 두드리는 두 손은 저 동과 트도록 떠들어 외롭지 않네",
    author: "- mahns",
  },
  {
    quote: "연고도 없이 올라온 빌딩 숲 마음 속 상처는 아물 줄 모르네",
    author: "- mahns",
  },
  {
    quote:
      "내 랩톤은 그립톡 쓰고 없음 못 써 그렇다고 쓰진 않아 왕관, like 립톤",
    author: "- mahns",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

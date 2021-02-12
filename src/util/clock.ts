const dateToHangul = (date: Date) => {
  let ret = "";
  const hour = date.getHours();
  const minute = date.getMinutes();
  const minute10 = Math.floor(minute / 10);
  const minute1 = minute % 10;
  const numbersHourStr = [
    "열두",
    "한",
    "두",
    "세",
    "네",
    "다섯",
    "여섯",
    "일곱",
    "여덟",
    "아홉",
    "열",
    "열한",
  ];
  const numbersMinStr = [
    "",
    "일",
    "이",
    "삼",
    "사",
    "오",
    "육",
    "칠",
    "팔",
    "구",
  ];
  ret += hour === 12 ? "정오" : hour >= 7 && hour <= 17 ? "낮" : "밤";
  ret += numbersHourStr[hour % 12];
  ret += "시";
  ret +=
    minute10 > 1 ? numbersMinStr[minute10] + "십" : minute10 === 1 ? "십" : "";
  ret += minute1 >= 5 && minute1 <= 9 ? "오" : "";
  ret += minute !== 0 ? "분" : "";

  // 7 ~ 15시 : 낮
  // 나머지: 밤
  return ret;
};

export { dateToHangul };
// 정오

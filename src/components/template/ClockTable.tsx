import { useRef } from "react";
import Ceil from "../atom/Cell";
import Row from "../molecule/Row";
import Table from "../molecule/Table";

const data = [
  "낮",
  "다",
  "일",
  "세",
  "네",
  "여",
  "섯",
  "곱",
  "열",
  "한",
  "덟",
  "아",
  "홉",
  "두",
  "시",
  "밤",
  "정",
  "이",
  "삼",
  "십",
  "사",
  "오",
  "십",
  "오",
  "분",
];

let realData: { [key: string]: number } = {
  낮: 1,
  다: 1,
  일: 1,
  세: 1,
  네: 1,
  여: 1,
  섯: 1,
  곱: 1,
  열: 1,
  한: 1,
  덟: 1,
  아: 1,
  홉: 1,
  두: 1,
  시: 1,
  밤: 1,
  정: 1,
  이: 1,
  삼: 1,
  십: 2,
  사: 1,
  오: 2,
  분: 1,
};

// 위에 것이 아니라 받은 스트링의 마진을 계산해야 할듯

const perRow = 5;
const rows = Math.ceil(data.length / perRow);
const times = (repeat: number) => {
  return Array(repeat).fill(true);
};

export default function ClockTable(props: { dateString: string }) {
  const { dateString } = props;
  let rests: { [key: string]: number } = {};
  dateString.split("").forEach((char) => {
    if (!rests[char]) rests[char] = 1;
    else rests[char]++;
  });

  return (
    <>
      <div style={{ color: "rgb(233,233,233)" }}>{new Date() + ""}</div>
      <Table>
        <tbody>
          {times(rows).map((_, ri) => {
            return (
              <Row key={"clock-row-" + ri}>
                {times(perRow).map((_, ci) => {
                  const myword = data[perRow * ri + ci];
                  return (
                    <Ceil
                      key={"clock-ceil-" + ri + "-" + ci}
                      color={rests[myword]-- >= 1 ? "rgb(233,233,233)" : ""}
                    >
                      {myword}
                    </Ceil>
                  );
                })}
              </Row>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

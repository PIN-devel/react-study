import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";

const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.locale("ko"); // import "moment/locale/ko";
dayjs.extend(utc); //import moment from "moment-timezone";
dayjs.extend(timezone);

//size:2kb But, 트리쉐이킹 안됨, 간단한 date 처리용

export default function DayJsExample() {
  const dayjsDate = dayjs();
  const newDayjsDate = dayjsDate.add(1, "week");
  const cloneNewDayjsDate = newDayjsDate.add(1, "week");

  const [date, setDate] = useState("");

  const dayRef = useRef(null);

  const handleDayChange = (event) => {
    setDate(dayjs(event.target.value, "YYYY-MM-DD").format("dddd"));
  };

  useEffect(() => {
    console.log(dayjs.tz.guess());
  }, []);

  return (
    <div>
      <h1>Day.js</h1>
      <div>Immutable Check</div>
      <div className="">
        {dayjsDate.format()}
        <br />
        {newDayjsDate.format()}
        <br />
        {cloneNewDayjsDate.format()}
      </div>
      <br />
      <div className="">Summer Time in New York</div>
      <div className="">
        {dayjs
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(1, "day")
          .format()}
      </div>
      <div className="">
        {dayjs
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(24, "hour")
          .format()}
      </div>
      <br />
      <div className="">Leap Year korea</div>
      <div className="">
        {dayjs("2017-01-01 13:00:00").subtract(1, "y").format()}
      </div>
      <div className="">
        {dayjs
          .tz("2017-01-01 13:00:00", "Asia/Seoul")
          .subtract(365, "d")
          .format()}
      </div>
      <br />
      <div className="">한국어</div>
      <div className="">{dayjs().format("YYYY년 MM월 DD일")}</div>
      <br />
      <div className="">요일 찾기</div>
      <div className="">
        <input type="date" onChange={handleDayChange} ref={dayRef} />
        <div>{date}</div>
      </div>
      <br />
      <div className="">날짜 비교</div>
      <div className="">
        <div>{dayjs().diff(dayjs("2000-01-01"), "day")}일 차이</div>
      </div>
    </div>
  );
}

// import moment from "moment";
import moment from "moment-timezone"; //tz 사용하기 위함
import { useEffect, useRef, useState } from "react";
import "moment/locale/ko";

// !!!! Moment는 공식적으로 더이상 사용을 권유하지 않는다. size issue
// Moment 공식 추천 대체 라이브러리: Luxon, Day.js, date-fns, js-Joda

export default function MomentExample() {
  const momentDate = moment();
  const newMomentDate = momentDate.add(1, "week");
  const cloneNewMomentDate = newMomentDate.clone().add(1, "week");

  const [date, setDate] = useState("");

  const dayRef = useRef(null);

  const handleDayChange = (event) => {
    setDate(moment(event.target.value, "YYYY-MM-DD").format("dddd"));
  };

  useEffect(() => {
    // console.log(moment.tz.names());
    console.log(moment.tz.guess());
  }, []);

  return (
    <div>
      <h1>Moment</h1>
      <div>Immutable Check</div>
      <div className="">
        {momentDate.format()}
        <br />
        {newMomentDate.format()}
        <br />
        {cloneNewMomentDate.format()}
      </div>
      <br />
      <div className="">Summer Time in New York</div>
      <div className="">
        {moment
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(1, "day")
          .format()}
      </div>
      <div className="">
        {moment
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(24, "hour")
          .format()}
      </div>
      <br />
      <div className="">Leap Year korea</div>
      <div className="">
        {moment("2017-01-01 13:00:00").subtract(1, "y").format()}
      </div>
      <div className="">
        {moment
          .tz("2017-01-01 13:00:00", "Asia/Seoul")
          .subtract(365, "d")
          .format()}
      </div>
      <br />
      <div className="">한국어</div>
      <div className="">{moment().format("YYYY년 MM월 DD일")}</div>
      <br />
      <div className="">요일 찾기</div>
      <div className="">
        <input type="date" onChange={handleDayChange} ref={dayRef} />
        <div>{date}</div>
      </div>
      <br />
      <div className="">날짜 비교</div>
      <div className="">
        <div>{moment().diff(moment("2000-01-01"), "day")}일 차이</div>
      </div>
    </div>
  );
}

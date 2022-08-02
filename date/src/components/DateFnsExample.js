import { useEffect, useRef, useState } from "react";

import { sub, differenceInDays } from "date-fns";

//트리쉐이킹
import { add } from "date-fns";
import { addWeeks } from "date-fns";
import { format } from "date-fns";
import { lightFormat } from "date-fns";

//time zone
import { format as formatTimezone, toDate } from "date-fns-tz";

//locale
import { ko } from "date-fns/locale";

export default function DateFnsExample() {
  const dateFnsDate = new Date();
  const newDateFnsDate = add(dateFnsDate, { weeks: 1 });
  const cloneNewDateFnsDate = addWeeks(newDateFnsDate, 1);

  const [date, setDate] = useState("");

  const dayRef = useRef(null);

  const handleDayChange = (event) => {
    setDate(format(new Date(event.target.value), "EEEE", { locale: ko }));
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Date-fns</h1>
      <div>Immutable Check</div>
      <div className="">
        {lightFormat(dateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(newDateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(cloneNewDateFnsDate, "yyyy-MM-dd")}
      </div>
      <br />
      <div className="">Summer Time in New York</div>
      <div className="">
        {formatTimezone(
          add(new Date("2018-03-10 13:00:00"), { days: 1 }),
          "yyyy-MM-dd HH:mm:ssXXX",
          {
            timeZone: "America/New_York",
          }
        )}
      </div>
      <div className="">
        {format(
          add(
            toDate(new Date("2018-03-10 13:00:00"), {
              timeZone: "America/New_York",
            }),
            { hours: 24 }
          ),
          "yyyy-MM-dd HH:mm:ssXXX"
        )}
      </div>
      <br />
      <div className="">Leap Year korea</div>
      <div className="">
        {format(
          sub(new Date("2017-01-01 13:00:00"), { years: 1 }),
          "yyyy-MM-dd"
        )}
      </div>
      <div className="">
        {format(
          sub(new Date("2017-01-01 13:00:00"), { days: 365 }),
          "yyyy-MM-dd"
        )}
      </div>
      <br />
      <div className="">한국어</div>
      {/* <div className="">{dayjs().format("YYYY년 MM월 DD일")}</div> */}
      <br />
      <div className="">요일 찾기</div>
      <div className="">
        <input type="date" onChange={handleDayChange} ref={dayRef} />
        <div>{date}</div>
      </div>
      <br />
      <div className="">날짜 비교</div>
      <div className="">
        <div>{differenceInDays(new Date(), new Date("2000-01-01"))}일 차이</div>
      </div>
    </div>
  );
}

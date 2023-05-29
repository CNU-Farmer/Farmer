import React, { useState, forwardRef, useRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import ko from "date-fns/locale/ko";

import "../css/DatePickerBox.css";

registerLocale("ko", ko);

const DatePickerBox = function () {
  const calendarRef = useRef();
  const [selectedtDate, setSelectedDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="datapicker-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const closeDatePicker = () => {
    calendarRef.current.setOpen(false);
  };

  return (
    <DatePicker
      ref={calendarRef}
      locale="ko"
      dateFormat="yyyy/MM/dd"
      maxDate={new Date()}
      disabledKeyboardNavigation // 다른 월의 같은 날짜 자동 select 방지
      popperModifiers={{
        preventOverflow: { enabled: true },
      }}
      popperPlacement="auto"
      selected={selectedtDate}
      shouldCloseOnSelect={false}
      onChange={(date) => setSelectedDate(date)}
      placeholderText="날짜 선택하기"
      customInput={<ExampleCustomInput />}
      dayClassName={(d) =>
        d.getDate() === selectedtDate.getDate()
          ? "selectedDay"
          : "unselectedDay"
      }
      calendarClassName="datepicker-custom-calendar"
      renderCustomHeader={({
        date,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div className="datepicker-custom-header">
          <div className="month-day">
            {getYear(date)}년 {getMonth(date) + 1}월
          </div>
          <div className="datepicker-header-btn">
            <div
              className="btn_month btn_month-prev"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              {"<"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div
              className="btn_month btn_month-next"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              {">"}
            </div>
          </div>
        </div>
      )}
    >
      <div>
        <button className="datepicker-confirm-btn" onClick={closeDatePicker}>
          확인
        </button>
      </div>
    </DatePicker>
  );
};

export default DatePickerBox;

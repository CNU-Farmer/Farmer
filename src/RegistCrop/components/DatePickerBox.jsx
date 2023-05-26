import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import ko from 'date-fns/locale/ko';

import '../css/DatePickerBox.css'

registerLocale("ko", ko);

const DatePickerBox = function () {
    const [selectedtDate, setSelectedDate] = useState(new Date());
    return(
        <DatePicker 
            locale="ko"
            className="datepicker"
            dateFormat="yyyy/MM/dd"
            maxDate={new Date()}
            disabledKeyboardNavigation // 다른 월의 같은 날짜 자동 select 방지
            popperModifiers={{
                preventOverflow: { enabled: true}
            }}
            popperPlacement="auto"
            selected={selectedtDate} 
            shouldCloseOnSelect={false}
            onChange={(date) => setSelectedDate(date)} 
            placeholderText="날짜 선택하기" 
            dayClassName={(d) => (d.getDate() === selectedtDate.getDate() ? "selectedDay" : "unselectedDay")}
            renderCustomHeader={({
                date,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
                decreaseMonth,
                increaseMonth,
              }) => (
                <div className="datepicker-header">
                    <div className="month-day">
                        {getYear(date)}년 {getMonth(date)}월
                    </div>
                    <div className="datepicker-header-btn">
                        <div
                            className="btn_month btn_month-prev"
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                        >
                            {"<"}
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
        />
    )
};

export default DatePickerBox;
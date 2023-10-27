import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import "react-datepicker/dist/react-datepicker.css";
import "./css/Calendar.css";
import BottomNav from "../BottomNav/BottomNav";
import SelectCropProfile from "./components/SelectCropProfile";
import TodoModal from "./components/TodoModal";

const Calendar = () => {
  const crops = [
    {
      id: "1",
      species: "상추",
      name: "상추도사",
      harvesting: "1주전",
      latest_watered_date: "2022.04.11",
      scheduled_watered_date: null,
    },
    {
      id: "2",
      species: "배추",
      name: "배추도사",
      harvesting: "1주전",
      latest_watered_date: "2022.04.11",
      scheduled_watered_date: null,
    },
    {
      id: "3",
      species: "대파",
      name: "대파도사",
      harvesting: "1주전",
      latest_watered_date: "2022.04.11",
      scheduled_watered_date: null,
    },
  ];

  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <SelectCropProfile items={crops} />
      <hr className="profile-line"></hr>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          setOpen(true);
        }}
        dateFormatCalendar="yyyy년 MM월"
        onInputClick={(e) => {}}
        inline
        locale={ko}
      />
      <TodoModal
        isOpen={isOpen}
        setOpen={setOpen}
        date={startDate}
        latest_watered_date={crops.latest_watered_date}
      />
      <BottomNav />
    </>
  );
};

export default Calendar;

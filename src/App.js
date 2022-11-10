import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

export default function App() {
  const today = new Date();
  const [dateState, setDateState] = useState(new Date());
  const changeDate = e => {
    setDateState(e)
  }
  let gap = dateState.getTime() - today.getTime();
  let result = Math.ceil(gap / (1000 * 60 * 60 * 24));
  return (
    <>
      <Calendar
        value={dateState}
        onChange={changeDate}
      />
      <p>오늘 날짜는 {moment(today).format('yyyy-MM-DD')}입니다.</p> 
      <p>선택하신 날짜는 {moment(dateState).format('yyyy-MM-DD')}입니다.</p>
      <p>D-day까지 {result}일 남았습니다.</p>
    </>
  )
}


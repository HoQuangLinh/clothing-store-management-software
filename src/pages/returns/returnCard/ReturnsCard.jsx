import React, { useState, useRef } from "react";
import './returnCard.css';
const options = [
  "Toàn bộ",
  "Hôm nay",
  "Hôm qua",
  "Tuần này",
  "Tuần trước",
  "Tháng này",
  "Tháng trước",
];
const ReturnsCard = ({ title }) => {
  const wrapperRef = useRef(null);
  const [display, setDisplay] = useState(false);
  const [input, setInput] = useState("");
  //get List filter
  const filterName = options.filter((value) => {
    if (!input) return options;
    return value.toLowerCase().indexOf(input.toLowerCase()) !== -1;
  });

  window.addEventListener("mousedown", (e) => {
    //  console.log(wrapperRef.current);
    const wrap = wrapperRef.current;
    console.log({ eventtarget: e.target, wrap });

    if (wrap && !wrap.contains(e.target)) {
      setDisplay(false);
    }
  });
  return (
    <div className="returns-card" ref={wrapperRef}>
      <div className='opstion'>
        <input
          placeholder="Lựa chọn..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          onClick={() => {
            setDisplay(true);
          }}
        />
        <button className='buttonUI'> Áp dụng </button>
      </div>
      {display && (
        <div className="returns-list-filter">
          {filterName.map((value, index) => {
            return (
              <div
                onClick={(e) => {
                  setInput(value);
                  setDisplay(false);
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ReturnsCard;

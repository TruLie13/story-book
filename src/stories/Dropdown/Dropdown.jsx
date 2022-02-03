import React, { useState } from "react";

const Dropdown = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const change = (e) => {
    setSelectedValue(e.target.value);
    props.set(e);
  };

  return (
    <div>
      <select
        value={selectedValue}
        onChange={(e) => change(e)}
        onClick={(e) => props.set(e)}
      >
        {props.option.map((item, idx) => (
          <option key={idx} value={item.value} name={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      {/* <p>{selectedValue}</p> */}
      <br></br>
      <br></br>
    </div>
  );
};

export default Dropdown;

import React from "react";

const Input = ({ clear, value, ...rest }) => {
  const [inputValue, setInputValue] = React.useState(value || "");

  return (
    <div>
      <div>
        <input
          {...rest}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </div>
      {clear && (
        <div>
          <button onClick={() => setInputValue("")}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default Input;

import { useState } from "react";
import "./combobox.css";
function Combobox() {
  const [title, setTitle] = useState("Tất cả");
  const [isActive, setIsActive] = useState(false);
  const options = ["Tất cả", "Quần thun", "Quần đùi", "Áo sơ mi"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <p>{title}</p>
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setTitle(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Combobox;

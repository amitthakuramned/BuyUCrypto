import React, { useEffect, useState } from "react";

const SortButtons = (props: any) => {
  const { label, btnUpActive, btnDownActive ,keyName} = props;

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName: any) => {
    setSelectedButton(buttonName);
    if (buttonName === "up") {
        btnUpActive({key:keyName,assend:true});
      }else{
        btnUpActive({key:keyName,assend:false});
      }
      if (buttonName === "down") {
        btnDownActive({key:keyName,dessend:true});
      }else{
        btnDownActive({key:keyName,dessend:false});
      }
  };

  return (
    <div className="sortingContainer">
      <div className="label">
        <h4>{label}</h4>
      </div>
      <div className="sortBtn">
        <button
          className={`sort-button ${selectedButton === "up" ? "active" : ""}`}
          onClick={() => handleButtonClick("up")}
        >
          &#9650; {/* Up arrow */}
        </button>
        <button
          className={`sort-button ${selectedButton === "down" ? "active" : ""}`}
          onClick={() => handleButtonClick("down")}
        >
          &#9660; {/* Down arrow */}
        </button>
      </div>
    </div>
  );
};

export default SortButtons;

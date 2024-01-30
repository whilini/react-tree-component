import { useState } from "react";
import StringLineList from "./StringLineList";

const StringLineItem = ({ level, childList, lineList, title }) => {
  const [open, setOpne] = useState(false);

  return (
    <li>
      <div className="tree-item">
        {lineList.length < 2 ? null : (
          <div className="indent-container">
            {lineList.map((bool, idx) => {
              return idx < lineList.length - 1 ? (
                <span className="indent-item" key={idx}>
                  {bool}
                </span>
              ) : null;
            })}
          </div>
        )}
        {childList && (
          <span
            className="indent-item folder-btn"
            onClick={() => setOpne((prev) => !prev)}
          >
            {open ? "-" : "+"}
          </span>
        )}
        {!childList && (
          <span className="indent-item">
            {lineList.at(-1) === "" ? "└" : "├"}
          </span>
        )}
        <span>{title}</span>
      </div>
      {open ? (
        <StringLineList
          level={level + 1}
          childList={childList}
          lineList={lineList}
        />
      ) : null}
    </li>
  );
};

export default StringLineItem;

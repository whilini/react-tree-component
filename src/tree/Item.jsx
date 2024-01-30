import { useState } from "react";
import List from "./List";

const Item = ({ level, childList, title }) => {
  const [open, setOpne] = useState(false);
  const depth = [];
  for (let i = 0; i <= level - 1; i++) {
    depth.push(<span className="indent-item" key={i}></span>);
  }

  return (
    <li>
      <div className="tree-item">
        <div className="indent-container">
          {depth}
          {childList ? (
            <span
              className="indent-item folder-btn"
              onClick={() => setOpne((prev) => !prev)}
            >
              {open ? "-" : "+"}
            </span>
          ) : (
            <span className="indent-item"></span>
          )}
        </div>
        <span>{title}</span>
      </div>
      {open ? <List level={level + 1} childList={childList} /> : null}
    </li>
  );
};

export default Item;

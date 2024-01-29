import { useState } from "react";
import List from "./List";

const Item = ({ level, childList, lineList, title }) => {
  const [open, setOpne] = useState(false);
  const depth = [];
  for (let i = 0; i < level; i++) {
    depth.push(<span className="indent-item" key={i}></span>);
  }
  // console.log(depth);
  // console.log(childList);
  return (
    <li>
      <div className="tree-item">
        {depth.length === 0 ? null : (
          <span className="indent-container">
            {lineList.map((bool, idx) => (
              <span className="indent-item" key={idx}>
                {bool}
              </span>
            ))}
            {/* {depth} */}
          </span>
        )}
        <span
          className={`indent-item ${childList ? "folder-btn" : null}`}
          onClick={() => setOpne((prev) => !prev)}
        >
          {!childList ? "" : open ? "-" : "+"}
        </span>
        <span>{title}</span>
      </div>
      {open ? (
        <List level={level + 1} childList={childList} lineList={lineList} />
      ) : null}
    </li>
  );
};

export default Item;

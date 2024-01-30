import { useState } from "react";
import LineList from "./LineList";
import { treeItem } from "./LineList";

const LineItem = ({ level, childList, lineList, title }) => {
  const [open, setOpne] = useState(false);

  return (
    <li>
      <div className="tree-item">
        {lineList.length === 0 ? null : (
          <div className="indent-container">
            {lineList.map((el, idx) => {
              if (idx === lineList.length - 1) {
                switch (el) {
                  case treeItem.hsnc:
                    return (
                      <span className={`indent-item ${el}`} key={idx}>
                        ├
                      </span>
                    );
                  case treeItem.nsnc:
                    return (
                      <span className={`indent-item ${el}`} key={idx}>
                        └
                      </span>
                    );
                  default:
                    return (
                      <span
                        className={`indent-item folder ${el}`}
                        key={idx}
                        onClick={() => setOpne((prev) => !prev)}
                      >
                        {open ? "-" : "+"}
                      </span>
                    );
                }
              } else {
                return (
                  <span
                    className={`indent-item ${el}`}
                    key={idx}
                    onClick={() => setOpne((prev) => !prev)}
                  ></span>
                );
              }
            })}
          </div>
        )}
        <span>{title}</span>
      </div>
      {open ? (
        <LineList level={level + 1} childList={childList} lineList={lineList} />
      ) : null}
    </li>
  );
};

export default LineItem;

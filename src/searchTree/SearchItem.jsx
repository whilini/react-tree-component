import SearchList from "./SearchList";
import { useDispatch, useSelector } from "react-redux";
import { onClickFolder } from "../redux/treeSlice";

const SearchItem = ({ id, level, childList, title, indent }) => {
  const dispatch = useDispatch();
  const expandedKeys = useSelector((state) => state.tree.expandedKeys);

  return (
    <li>
      <div className="tree-item">
        <div className="indent-container">
          {indent}
          {childList ? (
            <span
              className="indent-item folder-btn"
              onClick={() => dispatch(onClickFolder(id))}
            >
              {expandedKeys.includes(id) ? "-" : "+"}
            </span>
          ) : (
            <span className="indent-item"></span>
          )}
        </div>
        <span>{title}</span>
      </div>
      {expandedKeys.includes(id) ? (
        <SearchList level={level} childList={childList} />
      ) : null}
    </li>
  );
};

export default SearchItem;

import { useState } from "react";
import SearchItem from "./SearchItem";

const SearchList = ({ level = 0, childList: treeList }) => {
  const indent = [];
  for (let i = 0; i <= level - 1; i++) {
    indent.push(<span className="indent-item" key={i}></span>);
  }
  return (
    <ul>
      {treeList?.map((tree) => (
        <SearchItem
          key={tree.key}
          level={level + 1}
          childList={tree.children}
          id={tree.key}
          title={tree.title}
          indent={indent}
        />
      ))}
    </ul>
  );
};

export default SearchList;

import StringLineItem from "./StringLineItem";
export const treeItem = {
  hshc: "folder",
  hsnc: "last-folder",
  nshc: "leaf",
  nsnc: "last-leaf",
};

const StringLineList = ({ level, childList: treeList, lineList = [] }) => {
  return (
    <ul>
      {treeList?.map((tree, idx) => {
        if (!tree.lineList) tree.lineList = [];
        let lastItem = "";
        if (treeList[idx + 1]) {
          lastItem = tree.children ? treeItem.hshc : treeItem.hsnc;
        } else {
          lastItem = tree.children ? treeItem.nshc : treeItem.nsnc;
        }
        tree.lineList = [...lineList, treeList[idx + 1] ? "│" : ""];
        return (
          <StringLineItem
            key={tree.key}
            level={level}
            childList={tree.children}
            lineList={tree.lineList}
            title={tree.title}
          />
        );
      })}
    </ul>
  );
};

export default StringLineList;

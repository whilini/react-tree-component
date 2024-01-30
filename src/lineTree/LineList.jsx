import LineItem from "./LineItem";
export const treeItem = {
  hshc: "folder",
  nshc: "last-folder",
  hsnc: "leaf",
  nsnc: "last-leaf",
};

const LineList = ({ level, childList: treeList, lineList = [] }) => {
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
        tree.lineList = [...lineList, lastItem];
        return (
          <LineItem
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

export default LineList;

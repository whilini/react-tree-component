import Item from "./item";

const List = ({ level, childList: treeList }) => {
  return (
    <ul>
      {treeList?.map((tree) => (
        <Item
          key={tree.key}
          level={level}
          childList={tree.children}
          title={tree.title}
        />
      ))}
    </ul>
  );
};

export default List;

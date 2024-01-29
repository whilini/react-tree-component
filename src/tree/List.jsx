import Item from "./item";

const List = ({ level, childList, lineList = [] }) => {
  return (
    <ul>
      {childList?.map((el, idx) => {
        if (!el.lineList || lineList) el.lineList = [];
        const lastItem = el.childList
          ? "│"
          : idx !== childList.length - 1
          ? "│"
          : "└";
        el.lineList = [...lineList, lastItem];
        console.log(el);
        return (
          <Item
            key={el.key}
            level={level}
            childList={el.children}
            lineList={el.lineList}
            title={el.title}
          />
        );
      })}
    </ul>
  );
};

export default List;

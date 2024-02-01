import SearchBar from "./SearchBar";
import SearchList from "./../searchTree/SearchList";
import { treeData as defaultData, generatedTreeData } from "../App";
import { useCallback, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { expandParentKeys } from "../redux/treeSlice";

const Container = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const getParentKey = useCallback((targetKey, tree, parentKeys = []) => {
    for (const node of tree) {
      if (node.key === targetKey) {
        // 현재 노드가 대상 키와 일치하는 경우, 현재까지의 부모 키를 추가하고 리턴
        return [...parentKeys];
      }

      if (node.children) {
        // 현재 노드에 자식이 있다면 재귀적으로 자식 노드에서 부모 키를 찾음
        const result = getParentKey(targetKey, node.children, [
          ...parentKeys,
          node.key,
        ]);

        // 부모 키를 찾았다면 결과를 리턴
        if (result.length > 0) {
          return result;
        }
      }
    }

    // 부모 키를 찾지 못한 경우 빈 배열 리턴
    return [];
  }, []);

  const onChange = (e) => {
    const { value } = e.target;

    let newExpandedKeys = [];
    generatedTreeData.map((item) => {
      if (item.title.indexOf(value) > -1) {
        return newExpandedKeys.push(...getParentKey(item.key, treeData));
      }
    });
    newExpandedKeys = newExpandedKeys.filter(
      (item, i, self) => !!(item && self.indexOf(item) === i)
    );

    dispatch(expandParentKeys(newExpandedKeys));
    setSearchValue(value);
  };

  const treeData = useMemo(() => {
    const loop = (data) =>
      data.map((item) => {
        const strTitle = item.title;
        const index = strTitle.indexOf(searchValue);
        const beforeStr = strTitle.substring(0, index);
        const afterStr = strTitle.slice(index + searchValue.length);
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span className="site-tree-search-value">{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{strTitle}</span>
          );
        if (item.children) {
          return { title, key: item.key, children: loop(item.children) };
        }

        return {
          title,
          key: item.key,
        };
      });

    return loop(defaultData);
  }, [searchValue]);
  return (
    <div>
      <SearchBar onChange={onChange} />
      <SearchList childList={treeData} />
    </div>
  );
};

export default Container;

import "./App.css";
import List from "./tree/List";
import StringLineList from "./stringLineTree/StringLineList";
import LineList from "./lineTree/LineList";
import SearchList from "./searchTree/SearchList";
import { useState, createContext } from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import Container from "./searchBar/Container";

export const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        children: [
          {
            title: "parent 1-0-0",
            key: "0-0-0-0",
            children: [
              {
                title: "leaf",
                key: "0-0-0-0-0",
              },
              {
                title: "leaf",
                key: "0-0-0-0-1",
              },
              {
                title: "leaf",
                key: "0-0-0-0-2",
              },
            ],
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
          {
            title: "leaf",
            key: "0-0-0-2",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: "leaf",
            key: "0-0-1-0",
          },
        ],
      },
      {
        title: "parent 1-2",
        key: "0-0-2",
        children: [
          {
            title: "leaf",
            key: "0-0-2-0",
          },
          {
            title: "leaf",
            key: "0-0-2-1",
          },
        ],
      },
    ],
  },
  {
    title: "parent 2",
    key: "2",
    children: [
      {
        title: "parent 2-0",
        key: "2-0",
        children: [
          {
            title: "parent 2-0-0",
            key: "2-0-0",
            children: [
              {
                title: "leaf",
                key: "2-0-0-0",
              },
              {
                title: "leaf",
                key: "2-0-0-1",
              },
              {
                title: "leaf",
                key: "2-0-0-2",
              },
            ],
          },
          {
            title: "leaf",
            key: "2-0-1",
          },
          {
            title: "leaf",
            key: "2-0-2",
          },
        ],
      },
      {
        title: "parent 2-1",
        key: "2-1",
        children: [
          {
            title: "leaf",
            key: "2-1-0",
          },
        ],
      },
      {
        title: "parent 2-2",
        key: "2-2",
        children: [
          {
            title: "leaf",
            key: "2-2-0",
          },
          {
            title: "leaf",
            key: "2-2-1",
          },
        ],
      },
    ],
  },
];

export const generatedTreeData = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { key, title } = node;
    generatedTreeData.push({ key, title });
    if (node.children) {
      generateList(node.children);
    }
  }
};

generateList(treeData);

function App() {
  return (
    <>
      <h1>Tree</h1>
      {/* <List level={0} childList={treeData} /> */}
      {/* <StringLineList level={0} childList={treeData} /> */}
      {/* <LineList level={0} childList={treeData} /> */}
      <Provider store={store}>
        <Container />
      </Provider>
    </>
  );
}

export default App;

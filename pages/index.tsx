import { useState } from "react";
import { atom, useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

const todoListState = atom({
  key: "todoListState",
  default: [],
});

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div className="flex items-center mb-2">
      <input
        type="text"
        value={item.name}
        onChange={editItemText}
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      />
      <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
      <button
        onClick={deleteItem}
        className="bg-red-500 px-2 py-1 rounded shadow-xl text-white font-black"
      >
        X
      </button>
    </div>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        name: inputValue,
        isComplete: false,
      },
    ]);
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={inputValue}
        placeholder="What needs to be done?"
        onChange={onChange}
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 rounded-r-none"
      />
      <button
        onClick={addItem}
        className="px-3 py-2 bg-indigo-600 rounded shadow-xl text-white font-black uppercase rounded-l-none"
      >
        Add
      </button>
    </div>
  );
}

export default function IndexPage() {
  const todoList = useRecoilValue(todoListState);
  return (
    <div className="container mx-auto max-w-3xl">
      <h1 className="text-6xl font-thin">Todo List</h1>
      <hr className="mb-4" />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}

import { useAtom } from "jotai";
import {
  listState,
  List,
  selectedListState,
  todosState,
  Todo,
} from "lib/state";

export default function useLists() {
  const [lists, setList] = useAtom(listState);
  const [selectedIndex, setSelectedIndex] = useAtom(selectedListState);
  const [_, setTodoList] = useAtom(todosState);
  const addList = (values: List) => {
    setList((lists) => {
      lists.push(values);
    });
  };
  const editList = (values: List, index: number) =>
    setList((lists) => {
      lists[index] = values;
    });

  const deleteList = (index: number) =>
    setList((lists) => {
      lists.splice(index, 1);
    });

  const setSelected = (index: number) => {
    setSelectedIndex(index);
    if (lists[index]?.todos) {
      setTodoList(lists[index].todos);
    }
  };

  const setTodos = (todos: Todo[]) => {
    setList((lists) => {
      if (selectedIndex || selectedIndex === 0) {
        lists[selectedIndex].todos = todos;
        if (todos.length > 0 && todos.every((v) => v.isComplete === true)) {
          lists[selectedIndex].isComplete = true;
        } else {
          lists[selectedIndex].isComplete = false;
        }
      }
    });
  };

  return {
    addList,
    editList,
    deleteList,
    setSelected,
    setTodos,
    selectedIndex,
    lists,
  };
}

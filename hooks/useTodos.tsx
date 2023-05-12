import { useAtom } from "jotai";
import { todosState, Todo } from "lib/state";
import useLists from "./useLists";
import { useEffect } from "react";

export default function useTodos() {
  const [todos, setTodoList] = useAtom(todosState);
  const { setTodos } = useLists();
  const addTodo = (values: Todo) => {
    setTodoList((todos) => {
      todos.push(values);
    });
  };
  const editTodo = (values: Todo, index: number) =>
    setTodoList((todos) => {
      todos[index] = values;
    });

  const deleteTodo = (index: number) =>
    setTodoList((todos) => {
      todos.splice(index, 1);
    });

  useEffect(() => {
    setTodos(todos);
  }, [todos]);

  return {
    addTodo,
    editTodo,
    deleteTodo,
    todos,
    setTodoList,
  };
}

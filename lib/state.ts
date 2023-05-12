import { withImmer } from "jotai-immer";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type Todo = {
  id: string;
  name: string;
  isComplete: boolean;
};

export type List = {
  id: string;
  title: string;
  todos: Todo[];
  isComplete: boolean;
};

const baseTodosState = atom<Todo[]>([]);
const baseSelectedList = atom<number | undefined>(undefined);

const baseListState = atomWithStorage<List[]>("todo_lists", []);

export const todosState = withImmer<Todo[]>(baseTodosState);
export const listState = withImmer<List[]>(baseListState);
export const selectedListState = withImmer<number | undefined>(
  baseSelectedList
);

import { atomWithStorage } from "jotai/utils";

const todoListState = atomWithStorage('todo_list', []);

export default todoListState;

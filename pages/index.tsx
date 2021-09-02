import { useAtom } from "jotai";
import todoListState from "lib/state";
import Head from "next/head";
import TodoItemCreator from "shared/TodoCreator";
import TodoItem from "shared/TodoItem";

export default function IndexPage() {
  const [todoList] = useAtom(todoListState);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <div className="px-4 md:px-0 container mx-auto bg-white/50 max-w-4xl">
        <div className="flex min-h-screen">
          <div className="w-full md:px-16">
            <h1 className="text-4xl font-thin uppercase text-white my-8">Todo List</h1>
            <TodoItemCreator />
            <div className="border-b border-gray-300 my-4" />
            {todoList.map((todoItem) => (
              <TodoItem item={todoItem} key={todoItem.id} />
            ))}
            <div
              data-cy="no-todo-items-title"
              className={`transition-all ease-in-out duration-200 my-4 ${
                todoList.length === 0 ? "opacity-1" : "opacity-0"
              }`}
            >
              <h3 className="text-gray-600 font-thin text-4xl text-center my-4">
                Nothing to do... Enjoy your day
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

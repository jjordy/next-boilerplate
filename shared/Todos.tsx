"use client";
import { DndContext } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import useTodos from "hooks/useTodos";
import TodoItem from "shared/TodoItem";

export default function Todos() {
  const { todos, setTodoList } = useTodos();
  return (
    <>
      <DndContext
        onDragEnd={(event) => {
          const { active, over } = event;
          if (active.id !== over?.id) {
            const oldIndex = todos.findIndex((v) => v.id === active.id);
            const newIndex = todos.findIndex((v) => v.id === over?.id);
            setTodoList(arrayMove(todos, oldIndex, newIndex));
          }
        }}
      >
        <SortableContext items={todos}>
          {todos.map((todoItem, idx) => (
            <TodoItem item={todoItem} key={todoItem.id} idx={idx} />
          ))}
        </SortableContext>
      </DndContext>
      <div
        data-cy="no-todo-items-title"
        className={`transition-all ease-in-out duration-200 my-4 ${
          todos.length === 0 ? "opacity-1" : "opacity-0"
        }`}
      >
        <h3 className="text-gray-600 font-thin text-4xl text-center my-4">
          Nothing to do... Enjoy your day
        </h3>
      </div>
    </>
  );
}

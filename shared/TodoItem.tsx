import type { Todo } from "lib/state";
import Button from "./Button";
import Switch from "./Switch";
import useTodos from "hooks/useTodos";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragIcon from "./icons/DragIcon";
import TrashIcon from "./icons/TrashIcon";
import { useState } from "react";
import Input from "./Input";

export default function TodoItem({ item, idx }: { item: Todo; idx: number }) {
  const [editTodoText, setEditTodoText] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });
  const { editTodo, deleteTodo, todos } = useTodos();
  const index = todos.findIndex((listItem) => listItem === item);
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      className="mb-2 bg-slate-700 text-white drop-shadow-2xl rounded-xl"
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <div className="flex flex-wrap">
        <div className="md:w-4/6 mb-4 md:mb-0 flex items-center">
          <div className="p-4  rounded-l" {...listeners}>
            <DragIcon />
          </div>
          <div
            className={`w-full text-2xl p-4 ${
              item.isComplete ? "line-through" : ""
            }`}
          >
            <div onDoubleClick={() => setEditTodoText(!editTodoText)}>
              {editTodoText ? (
                <div className="flex items-center">
                  <Input
                    value={item.name}
                    onChange={(evt) =>
                      editTodo({ ...item, name: evt.target.value }, idx)
                    }
                  />
                  <Button
                    onClick={() => setEditTodoText(false)}
                    className="rounded-l-none self-stretch"
                  >
                    Save
                  </Button>
                </div>
              ) : (
                item.name
              )}
            </div>
          </div>
        </div>
        <div className="md:w-2/6 flex items-center justify-end space-x-2">
          <div className="flex items-center">
            <Switch
              checked={item.isComplete}
              onChange={(v) => editTodo({ ...item, isComplete: v }, index)}
            />
          </div>
          <Button onClick={() => deleteTodo(index)} variant="danger">
            <TrashIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

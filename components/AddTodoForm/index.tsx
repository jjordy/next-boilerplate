"use client";

import { Todo } from "lib/state";
import { useForm } from "react-hook-form";
import Input from "shared/Input";
import { twMerge } from "tailwind-merge";
import Button from "shared/Button";
import useTodos from "hooks/useTodos";
import shortid from "shortid";

const addTodoBtnStyles = ["px-6", "rounded-r-lg", "rounded-l-none"];

const defaultValues = {
  isComplete: false,
  name: "",
  id: "",
};

export default function AddTodoForm() {
  const { addTodo } = useTodos();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Todo>({
    defaultValues,
  });
  return (
    <div className="flex items-start mb-4">
      <form
        onSubmit={handleSubmit((values) => {
          addTodo({ ...values, id: shortid() });
          reset();
        })}
        className="w-full flex"
      >
        <Input
          placeholder="What needs to be done?"
          error={errors?.name?.message}
          {...register("name", {
            required: { message: "Task name is required", value: true },
          })}
          action={
            <Button type="submit" className={twMerge(addTodoBtnStyles)}>
              Add
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </Button>
          }
        />
      </form>
    </div>
  );
}

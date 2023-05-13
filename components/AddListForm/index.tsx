"use client";

import { List, Todo } from "lib/state";
import { useForm } from "react-hook-form";
import Input from "shared/Input";
import { twMerge } from "tailwind-merge";
import Button from "shared/Button";
import useLists from "hooks/useLists";
import shortid from "shortid";
import PlusIcon from "shared/icons/PlusIcon";

const addTodoBtnStyles = ["px-6", "rounded-r-lg", "rounded-l-none"];

const defaultValues = {
  isComplete: false,
  title: "",
  id: "",
  todos: [],
};

export default function AddListForm() {
  const { addList } = useLists();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<List>({
    defaultValues,
  });
  return (
    <div className="flex items-start mb-4">
      <form
        onSubmit={handleSubmit((values) => {
          addList({ ...values, id: shortid() });
        })}
        className="w-full flex"
      >
        <Input
          placeholder="Name your list"
          error={errors?.title?.message}
          {...register("title", {
            required: { message: "List name is required", value: true },
          })}
          action={
            <Button type="submit" className={twMerge(addTodoBtnStyles)}>
              Add
              <PlusIcon className="ml-2" />
            </Button>
          }
        />
      </form>
    </div>
  );
}

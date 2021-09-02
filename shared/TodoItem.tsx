import { useAtom } from "jotai";
import todoListState from "lib/state";
import { removeItemAtIndex, replaceItemAtIndex } from "utils";
import { Controller, useForm } from "react-hook-form";
import Input from "./Input";
import { Switch } from "@headlessui/react";
import Button from "./Button";

export default function TodoItem({ item }) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({ defaultValues: item });
  const [todoList, setTodoList] = useAtom(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (values) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      ...values,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div className="mb-2">
      <form onSubmit={handleSubmit(editItemText)}>
        <div className="flex flex-wrap">
          <div className="md:w-4/6 mb-4 md:mb-0">
            <Input
              {...register("name", { required: { message: "Name is required", value: true } })}
              error={errors?.name?.message}
              data-cy={`todo-item-name-input-${index}`}
              className={`rounded-lg w-full text-2xl p-2 text-gray-500 bg-white/50 ${
                item.isComplete ? "line-through" : ""
              }`}
            />
          </div>
          <div className="md:w-2/6 flex items-center justify-end">
            <div className="flex items-center px-4">
              <Controller
                name="isComplete"
                defaultValue={item.isComplete}
                control={control}
                render={({ field }) => (
                  <Switch
                    checked={field.value}
                    data-cy={`todo-item-isComplete-input-${index}`}
                    onChange={(v) => setValue("isComplete", v)}
                    className={`${field.value ? "bg-green-500" : "bg-gray-200 hover:bg-gray-300"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="sr-only">
                      Toggle todo {field.value ? "Uncompleted" : "Completed"}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`${field.value ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                    />
                  </Switch>
                )}
              />
            </div>
            <Button type="submit" data-cy={`todo-item-save-btn-${index}`}>
              Save
            </Button>
            <button
              onClick={deleteItem}
              data-cy={`todo-item-del-btn-${index}`}
              className=" p-3 ml-4  text-white bg-gray-50/50 hover:bg-red-500/50 rounded-full transition duration-200 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

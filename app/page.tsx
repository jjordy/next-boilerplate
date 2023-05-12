import AddTodoForm from "components/AddTodoForm";
import Todos from "shared/Todos";

export default function IndexPage() {
  return (
    <>
      <AddTodoForm />
      <Todos />
    </>
  );
}

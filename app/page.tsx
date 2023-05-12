import AddTodoForm from "components/AddTodoForm";
import Todos from "shared/Todos";
import { tl } from "utils";

export default function IndexPage() {
  return (
    <>
      <AddTodoForm />
      <Todos />
    </>
  );
}

if (import.meta.vitest) {
  const { test, describe } = import.meta.vitest;
  describe("Index Page", async () => {
    const { render } = await tl();
    test("It displays a add todo button & input", async () => {
      const wrapper = render(<IndexPage />);
      wrapper.getAllByPlaceholderText("What needs to be done?");
      wrapper.getByText("Add");
    });
  });
}

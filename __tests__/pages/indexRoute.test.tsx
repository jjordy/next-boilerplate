import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import Page from "../../app/page";

test("It renders an index page", () => {
  const wrapper = render(<Page />);
  wrapper.getAllByPlaceholderText("What needs to be done?");
  wrapper.getByText("Add");
});

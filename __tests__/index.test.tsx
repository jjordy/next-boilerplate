import React from "react";
import { render, screen } from "@testing-library/react";
import IndexPage from "pages";

test("The app renders", () => {
  expect.assertions(1);
  render(<IndexPage />);
  expect(screen.queryByText("My Nextjs Boilerplate.")).toBeDefined();
});

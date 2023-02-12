import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders user list title", async () => {
  render(<App />);
  const element = await screen.getByText("Users");
  expect(element).toBeInTheDocument();
});

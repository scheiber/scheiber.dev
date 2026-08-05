import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Error from "./Error";

test("renders a link back home", () => {
  render(
    <MemoryRouter>
      <Error />
    </MemoryRouter>
  );
  expect(
    screen.getByRole("heading", { name: "404: Not Found." })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Go home" })).toHaveAttribute(
    "href",
    "/"
  );
});

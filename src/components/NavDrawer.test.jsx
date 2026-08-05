import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import NavDrawer from "./NavDrawer";

test("opens and closes the drawer via the toggle button", async () => {
  render(
    <MemoryRouter>
      <NavDrawer />
    </MemoryRouter>
  );

  const toggle = screen.getByRole("button", { name: "Open navigation menu" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");

  await userEvent.click(toggle);
  expect(
    screen.getByRole("button", { name: "Close navigation menu" })
  ).toHaveAttribute("aria-expanded", "true");

  await userEvent.click(
    screen.getByRole("button", { name: "Close navigation menu" })
  );
  expect(
    screen.getByRole("button", { name: "Open navigation menu" })
  ).toHaveAttribute("aria-expanded", "false");
});

test("closes the drawer on Escape", async () => {
  render(
    <MemoryRouter>
      <NavDrawer />
    </MemoryRouter>
  );

  await userEvent.click(
    screen.getByRole("button", { name: "Open navigation menu" })
  );
  expect(
    screen.getByRole("button", { name: "Close navigation menu" })
  ).toBeInTheDocument();

  await userEvent.keyboard("{Escape}");
  expect(
    screen.getByRole("button", { name: "Open navigation menu" })
  ).toBeInTheDocument();
});

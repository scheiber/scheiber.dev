import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Affirmations from "./Affirmations";
import affirmations from "../components/AffirmationsList";

test("renders one of the known affirmations", () => {
  render(<Affirmations />);
  const heading = screen.getByRole("heading");
  expect(affirmations).toContain(heading.textContent);
});

test("reloads the page when Another is clicked", async () => {
  const reload = vi.fn();
  const { location } = window;
  delete window.location;
  window.location = { ...location, reload };

  render(<Affirmations />);
  await userEvent.click(screen.getByRole("button", { name: "Another" }));

  expect(reload).toHaveBeenCalledTimes(1);
  window.location = location;
});

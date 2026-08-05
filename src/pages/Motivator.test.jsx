import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Motivator from "./Motivator";
import motivator from "../components/MotivatorList";

test("renders one of the known motivations", () => {
  render(<Motivator />);
  const heading = screen.getByRole("heading");
  expect(motivator).toContain(heading.textContent);
});

test("reloads the page when Another is clicked", async () => {
  const reload = vi.fn();
  const { location } = window;
  delete window.location;
  window.location = { ...location, reload };

  render(<Motivator />);
  await userEvent.click(screen.getByRole("button", { name: "Another" }));

  expect(reload).toHaveBeenCalledTimes(1);
  window.location = location;
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Gallery from "./Gallery";
import backgrounds from "./Backgrounds";

test("opens the lightbox with the clicked image", async () => {
  render(<Gallery />);

  const tiles = screen.getAllByRole("img", { name: /background/i });
  await userEvent.click(tiles[0].closest("button"));

  expect(
    screen.getByRole("dialog", { name: backgrounds[0].alt })
  ).toBeInTheDocument();
  expect(screen.getByText(`1 of ${backgrounds.length}`)).toBeInTheDocument();
});

test("navigates to the next and previous image", async () => {
  render(<Gallery />);

  const tiles = screen.getAllByRole("img", { name: /background/i });
  await userEvent.click(tiles[0].closest("button"));

  await userEvent.click(screen.getByRole("button", { name: "Next image" }));
  expect(
    screen.getByRole("dialog", { name: backgrounds[1].alt })
  ).toBeInTheDocument();

  await userEvent.click(
    screen.getByRole("button", { name: "Previous image" })
  );
  expect(
    screen.getByRole("dialog", { name: backgrounds[0].alt })
  ).toBeInTheDocument();
});

test("closes on Escape and returns focus to the triggering tile", async () => {
  render(<Gallery />);

  const tiles = screen.getAllByRole("img", { name: /background/i });
  const trigger = tiles[0].closest("button");
  await userEvent.click(trigger);

  expect(screen.getByRole("dialog")).toBeInTheDocument();
  await userEvent.keyboard("{Escape}");

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(trigger).toHaveFocus();
});

test("offers a download link pointing at the full-resolution image", async () => {
  render(<Gallery />);

  const tiles = screen.getAllByRole("img", { name: /background/i });
  await userEvent.click(tiles[0].closest("button"));

  expect(screen.getByRole("link", { name: "Download" })).toHaveAttribute(
    "href",
    backgrounds[0].src
  );
});

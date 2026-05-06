import { render, screen } from "@testing-library/react";

import Home from "./page";

describe("Home page", () => {
  it("renders Hello text", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Hello",
    );
  });
});

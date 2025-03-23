import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { MemoryRouter } from "react-router-dom";

test("renders Home page with welcome text", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  expect(screen.getByText(/Welcome to the Blog Platform/i)).toBeInTheDocument();
});

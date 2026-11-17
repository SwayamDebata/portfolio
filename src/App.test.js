import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the founder record", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/scarce thing/i);
  expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute("href", "/resume.pdf");
  expect(screen.getByRole("heading", { name: /ModelEarth keeps the hours/i })).toBeInTheDocument();
});

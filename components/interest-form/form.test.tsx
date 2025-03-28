import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InterestForm from "./form";

// Mock the FormControl component since we're only testing InterestForm
jest.mock("./FormControl", () => {
  return function MockFormControl({ id, label }) {
    return (
      <div data-testid={`form-control-${id}`}>
        <label>{label}</label>
      </div>
    );
  };
});

describe("InterestForm", () => {
  test("renders form elements correctly", () => {
    render(<InterestForm />);

    // Check if the title and description are rendered
    expect(
      screen.getByText("Need Help with Pre-Construction?")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Submit your details to get expert guidance from HomeStart."
      )
    ).toBeInTheDocument();

    // Check if each form control is rendered
    expect(screen.getByTestId("form-control-firstName")).toBeInTheDocument();
    expect(screen.getByTestId("form-control-lastName")).toBeInTheDocument();
    expect(screen.getByTestId("form-control-email")).toBeInTheDocument();
    expect(screen.getByTestId("form-control-country")).toBeInTheDocument();
    expect(screen.getByTestId("form-control-interests")).toBeInTheDocument();

    // Check if the submit button is rendered
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });
});

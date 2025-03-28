import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import InterestForm from "./form";
import FormControl from "./FormControl";

// Mock the FormControl component properly for TypeScript
jest.mock("./FormControl", () => {
  const MockFormControl = ({
    id,
    label,
    value,
    handleChange,
    placeholder,
  }: {
    id: string;
    label: string;
    value: string;
    handleChange: any;
    placeholder: string;
  }) => (
    <div data-testid={`form-control-${id}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
  return MockFormControl;
});

// Spy on console.log before tests
let consoleSpy: jest.SpyInstance;

describe("InterestForm", () => {
  beforeEach(() => {
    // Setup the spy before each test
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    // Clean up after each test
    consoleSpy.mockRestore();
  });

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

  test("handles form submission correctly", async () => {
    const user = userEvent.setup();

    // Render the form
    render(<InterestForm />);

    // Get form elements
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const countryInput = screen.getByLabelText(/Country/i);
    const interestsInput = screen.getByLabelText(/What most interests you/i);
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    // Fill the form
    await user.type(firstNameInput, "John");
    await user.type(lastNameInput, "Doe");
    await user.type(emailInput, "john@example.com");
    await user.type(countryInput, "Canada");
    await user.type(interestsInput, "Price and location");

    // Submit the form
    await user.click(submitButton);

    // Check if console.log was called with the form data
    expect(consoleSpy).toHaveBeenCalledWith({
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      country: "Canada",
      interests: "Price and location",
    });

    // Check if the button shows "Submitting..."
    expect(
      screen.getByRole("button", { name: /Submitting.../i })
    ).toBeInTheDocument();

    // Wait for the form to reset (after the 2000ms timeout)
    await waitFor(
      () => {
        expect(
          screen.getByRole("button", { name: /Submit/i })
        ).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});

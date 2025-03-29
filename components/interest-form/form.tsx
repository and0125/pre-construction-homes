"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import FormControl from "./FormControl";
import { HandleSubmit } from "@/lib/interest-form/handle-submit";

type AlertProps = {
  type: "success" | "error" | "";
  message: string;
};

function InterestForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    interests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<AlertProps>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setIsSubmitting(false);
    setAlert({
      type: "",
      message: "",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      interests: "",
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //TODO: refactor to send a request to the `/interest-form-submission` api endpoint
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format data to match the expected structure in HandleSubmit
      const submissionData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        country: formData.country,
        interests: formData.interests,
      };

      // Call the HandleSubmit function
      const result = await HandleSubmit(submissionData);

      // Set alert based on the result
      setAlert({
        type: result.success ? "success" : "error",
        message: result.message,
      });

      // Only reset form on success
      if (result.success) {
        setTimeout(() => {
          resetForm();
        }, 5000); // Give user time to see success message
      } else {
        setIsSubmitting(false); // Allow resubmission if there was an error
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setAlert({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-center">
        Need Help with Pre-Construction?
      </h2>

      <p className="mb-4 text-center">
        Submit your details to get expert guidance from HomeStart.
      </p>

      {alert.message && (
        <div
          className={
            alert.type === "success"
              ? "mb-4 p-3 bg-green-100 text-green-700 rounded"
              : "mb-4 p-3 bg-red-100 text-red-700 rounded"
          }
        >
          {alert.message}
        </div>
      )}

      <form
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <FormControl
          id="firstName"
          label="First Name"
          placeholder="John"
          value={formData.firstName}
          handleChange={handleChange}
        />
        <FormControl
          id="lastName"
          label="Last Name"
          placeholder="Doe"
          value={formData.lastName}
          handleChange={handleChange}
        />
        <FormControl
          id="email"
          label="Email Address"
          placeholder="johndoe12@gmail.com"
          value={formData.email}
          handleChange={handleChange}
        />
        <FormControl
          id="country"
          label="Country"
          placeholder=""
          value={formData.country}
          handleChange={handleChange}
        />
        <FormControl
          id="interests"
          placeholder="..."
          label="What most interests you in pre-construction homes today?"
          value={formData.interests}
          handleChange={handleChange}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 text-white font-medium rounded-md ${
            isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default InterestForm;

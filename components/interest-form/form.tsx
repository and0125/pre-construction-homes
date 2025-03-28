"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import FormControl from "./FormControl";

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: update code here for logging in Firebase DB 
      console.log(formData);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        resetForm();
      }, 2000);
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

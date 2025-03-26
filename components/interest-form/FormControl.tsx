import { COUNTRIES } from "@/lib/contants";
import React, { ChangeEvent } from "react";

interface FormControlType {
  id: "firstName" | "lastName" | "email" | "country" | "interests";
  label: string;
  value: string;
  placeholder: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
}

const FormControl = ({ id, label, value, placeholder, handleChange }: FormControlType) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-bold text-gray-700 mb-1"
      >
        {label}
      </label>

      {id === "interests" ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={handleChange}
          rows={4}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      ) : id === "country" ? (
        <select
          name={id}
          id={id}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          required
          value={value}
        >
          <option value="">Select your country</option>
          {COUNTRIES.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={id === "email" ? "email" : "text"}
          id={id}
          name={id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      )}
    </div>
  );
};

export default FormControl;

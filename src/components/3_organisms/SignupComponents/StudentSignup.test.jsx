import React from "react";
import { render } from "@testing-library/react";
import StudentSignup from "./StudentSignup";
import { BrowserRouter } from "react-router-dom";
import { toast } from "react-hot-toast";
import { describe, expect, it, vi } from "vitest";

vi.mock("../../../api/FormApi", () => ({
  useCountries: () => ({
    data: [],
    isLoading: false,
    isError: true,
  }),
  useSkills: () => ({
    data: [],
    isLoading: false,
    isError: true,
  }),
}));

vi.mock("react-hot-toast", () => ({
  toast: {
    error: vi.fn(),
  },
}));

describe("StudentSignup - API errors", () => {
  it("should show toast error if countries API fails", () => {
    render(
      <BrowserRouter>
        <StudentSignup
          currentStep={3}
          formData={{}}
          setFormData={() => {}}
          errors={{}}
        />
      </BrowserRouter>
    );

    expect(toast.error).toHaveBeenCalledWith("Unable to load countries");
  });

  it("should show toast error if skills API fails", () => {
    render(
      <BrowserRouter>
        <StudentSignup
          currentStep={3}
          formData={{}}
          setFormData={() => {}}
          errors={{}}
        />
      </BrowserRouter>
    );

    expect(toast.error).toHaveBeenCalledWith("unable to load skills");
  });
});

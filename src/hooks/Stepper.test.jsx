// useStepper.test.tsx
import React from "react";
import { renderHook, act } from "@testing-library/react";
import { useStepper } from "./Stepper";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

describe("useStepper", () => {
  it("should go to next step when handleNext is called", async () => {
    const wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

    const { result } = renderHook(() => useStepper(0, 2, "student"), {
      wrapper,
    });

    expect(result.current.currentStep).toBe(0);

    await act(async () => {
      await result.current.handleNext({});
    });

    expect(result.current.currentStep).toBe(1);
  });
});

describe("useStepper - validateStep", () => {
  it("should return errors when required fields are missing from student's form", async () => {
    const wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

    const { result } = renderHook(() => useStepper(0, 2, "student"), {
      wrapper,
    });

    const values = {};

    const { isValid, stepErrors } = await result.current.validateStep(
      1,
      values
    );

    expect(isValid).toBe(false);

    expect(Object.keys(stepErrors).length).toBeGreaterThan(0);
  });
});

describe("useStepper - validateStep", () => {
  it("should return errors when required fields are missing from provider's form", async () => {
    const wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

    const { result } = renderHook(() => useStepper(0, 2, "provider"), {
      wrapper,
    });

    const values = {};

    const { isValid, stepErrors } = await result.current.validateStep(
      1,
      values
    );

    expect(isValid).toBe(false);

    expect(Object.keys(stepErrors).length).toBeGreaterThan(0);
  });
});

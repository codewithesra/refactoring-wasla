import React from "react";
import { TiTick } from "react-icons/ti";

const StepIndicator = ({ steps, currentStep, isSubmitted }) => {
  if (isSubmitted) {
    return null;
  }

  return (
    <div className="flex justify-center mb-6 overflow-x-auto whitespace-nowrap">
      {steps?.map((step, i) => {
        const isCompleted = i + 1 < currentStep || isSubmitted;
        const isActive = currentStep === i + 1;

        return (
          <div
            key={i}
            className={`relative flex flex-col justify-center items-center mx-3 transition-colors duration-300
              ${isActive ? "text-light-primary dark:text-dark-primary" : ""}
              ${isCompleted ? "text-green-600" : "text-gray-500"}`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center z-10 relative rounded-full font-semibold text-white
                ${
                  isCompleted
                    ? "bg-green-600"
                    : isActive
                    ? "bg-light-primary dark:bg-dark-primary"
                    : "bg-slate-700"
                }`}
            >
              {isCompleted ? (
                <TiTick
                  size={24}
                  className={`transition-transform transform ${
                    isCompleted ? "animate-check" : ""
                  }`}
                />
              ) : (
                <span>{i + 1}</span>
              )}
            </div>
            <p
              className={`mt-2 text-center ${
                isCompleted ? "text-gray-800 dark:text-gray-200" : ""
              }`}
            >
              {step}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;

import React from "react";
import { TiTick } from "react-icons/ti";

const StepIndicator = ({ steps, currentStep, isSubmitted }) => {
  if (isSubmitted) {
    return null;
  }

  return (
    <div className="flex justify-center mb-6 overflow-x-auto">
      {steps?.map((step, i) => (
        <div
          key={i}
          className={`relative flex flex-col justify-center items-center mx-4 ${
            currentStep === i + 1 ? "text-sky-600" : ""
          } ${
            i + 1 < currentStep || isSubmitted
              ? "text-green-600"
              : "text-gray-500"
          }`}
        >
          <div
            className={`w-10 h-10 flex items-center justify-center z-10 relative rounded-full font-semibold text-white ${
              i + 1 < currentStep || isSubmitted
                ? "bg-green-600"
                : currentStep === i + 1
                ? "bg-sky-600"
                : "bg-slate-700"
            }`}
          >
            {i + 1 < currentStep || isSubmitted ? (
              <TiTick size={24} />
            ) : (
              <span className="text-center">{i + 1}</span>
            )}
          </div>
          <p
            className={`mt-2 ${
              i + 1 < currentStep || isSubmitted ? "text-gray-800" : ""
            } text-center`}
          >
            {step}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;

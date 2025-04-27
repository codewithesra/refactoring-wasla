import React from "react";

export const SignupFormContainer = ({ children, accountType }) => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text p-5 rounded-lg shadow-md">
        <div className="md:w-2/5 flex justify-center items-center p-5 border-b md:border-b-0 md:border-r border-light-border dark:border-dark-border">
          <h2 className="text-2xl font-semibold">
            Join as <br /> <span className="underline">{accountType}</span>
          </h2>
        </div>

        <div className="md:w-3/5 p-5">{children}</div>
      </div>
    </div>
  );
};

export const FieldsContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      {children}
    </div>
  );
};

export const SignupFormContainer = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-xl w-full bg-white p-5 rounded-lg shadow-md mx-4 sm:mx-0">
        {children}
      </div>
    </div>
  );
};

export const FieldsContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-1 my-2 sm:grid-cols-2 gap-4 w-full">
      {children}
    </div>
  );
};

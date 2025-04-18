import SignupForm from "../3_organisms/SignupForm";
import FormTitle from "../2_molecules/FormTitle";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col justify-center my-5 min-h-screen">
        <FormTitle
          title="refactoring wasla"
          description="task #1: forms and reusability"
        />
        <SignupForm />
      </div>
    </>
  );
};

export default Signup;

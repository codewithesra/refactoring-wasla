import SignupForm from "../3_organisms/SignupForm";
import FormTitle from "../2_molecules/FormTitle";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen">
        <FormTitle
          title="phase #3"
          description="using react-hook-forms and adding dark mode"
        />
        <SignupForm />
      </div>
    </>
  );
};

export default Signup;

import StudentSignup from "../3_organisms/StudentSignup";
import FormTitle from "../2_molecules/FormTitle";

const StudentForm = () => {
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen">
        <FormTitle
          title="refactoring wasla"
          description="task #1: forms and reusability"
        />
        <StudentSignup />
      </div>
    </>
  );
};

export default StudentForm;

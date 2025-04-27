import { ConfirmBtn } from "../1_atoms/Btns";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { VscOpenPreview } from "react-icons/vsc";
import { Link } from "react-router-dom";

const FormSuccess = ({ accountType, resetForm }) => {
  return (
    <div className="text-center p-4">
      {accountType == "student" ? (
        <>
          <div className="flex justify-center mb-2">
            <RiVerifiedBadgeFill className="text-blue-500 text-9xl" />
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-center">
            you have signed up successfully
          </h2>
        </>
      ) : (
        <>
          <div className="flex justify-center mb-2">
            <VscOpenPreview className="text-blue-500 text-9xl" />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            your account in under review
          </h2>
        </>
      )}
      <p className="mb-6">What would you like to do?</p>
      <div className="flex justify-center gap-4">
        <Link to="/userRole">
          <ConfirmBtn type="button" onClick={resetForm}>
            Create a new account
          </ConfirmBtn>
        </Link>
      </div>
    </div>
  );
};

export default FormSuccess;

import Navbar from "../2_molecules/NavBar";
import UserRole from "../3_organisms/SignupComponents/userRole";

const UserRolePage = () => {
  console.log(location.pathname);
  return (
    <>
      <Navbar />
      <UserRole />
    </>
  );
};

export default UserRolePage;

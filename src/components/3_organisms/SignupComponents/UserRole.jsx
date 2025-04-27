import { PiStudentBold } from "react-icons/pi";
import { IoBusinessOutline } from "react-icons/io5";
import { CardTemplate } from "../../2_molecules/CardComponent";
import { Link } from "react-router-dom";

const cardData = [
  {
    accountType: "student",
    icon: <PiStudentBold className="text-[#648db3] text-6xl" />,
    title: "student",
    description:
      "yapping session talking about inspirational students and their work great words",
  },
  {
    accountType: "provider",
    icon: <IoBusinessOutline className="text-[#648db3] text-6xl" />,
    title: "provider",
    description:
      "another yapping session talking about great providers who provides idk",
  },
];

const UserRole = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 w-full h-screen">
        {cardData.map(({ accountType, icon, title, description }) => (
          <Link key={accountType} to="/signup" state={{ accountType }}>
            <CardTemplate icon={icon} title={title} description={description} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default UserRole;

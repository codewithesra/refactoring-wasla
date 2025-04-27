import { PiStudentBold } from "react-icons/pi";
import { GrOrganization } from "react-icons/gr";
import { LuHandshake } from "react-icons/lu";
import { CardTemplate } from "../../2_molecules/CardComponent";

const cardData = [
  {
    icon: <PiStudentBold className="text-[#648db3] text-6xl" />,
    title: "employing students",
    description:
      "yapping session talking about inspirational students and their work great words",
  },
  {
    icon: <GrOrganization className="text-[#648db3] text-6xl" />,
    title: "helping providers",
    description:
      "another yapping session talking about great providers who provides idk",
  },
  {
    icon: <LuHandshake className="text-[#648db3] text-6xl" />,
    title: "connecting everyone",
    description:
      "yapping about how we are helping the job market for both parties more typing to make it even",
  },
];

const ForWho = () => {
  return (
    <div className="w-full py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold md:mr-1 text-center">
        wasla for <span className="text-[#648db3]">everyone</span>
      </h1>
      <div className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 ">
        {cardData.map(({ icon, title, description }) => (
          <CardTemplate icon={icon} title={title} description={description} />
        ))}
      </div>
    </div>
  );
};

export default ForWho;

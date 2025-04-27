import { Card, CardBody } from "@material-tailwind/react";

export function CardTemplate({ icon, title, description }) {
  return (
    <Card className="mt-10 w-full max-w-sm lg:max-w-md xl:max-w-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transform transition-transform duration-300 hover:scale-105">
      <CardBody>
        <div className="flex flex-col items-center p-5 my-5 text-center space-y-4">
          {icon}
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </CardBody>
    </Card>
  );
}

const FormTitle = ({ title, description }) => {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
};

export default FormTitle;

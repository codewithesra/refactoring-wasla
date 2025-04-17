const FileInput = ({ label, name, onChange, error }) => {
  return (
    <div>
      <label htmlFor={name} className="font-bold text-gray-800 mb-2 block">
        {label}
      </label>
      <input
        type="file"
        name={name}
        id={name}
        onChange={onChange}
        className={`border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded px-4 py-2 w-full mb-3`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FileInput;

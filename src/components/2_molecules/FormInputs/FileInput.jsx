import { FaCloudUploadAlt } from "react-icons/fa";

const FileInput = ({ label, name, onChange, error, fileName }) => {
  return (
    <div>
      <label htmlFor={name} className="font-bold text-gray-800 mb-2 block">
        {label}
      </label>
      <div
        className={`border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded px-4 py-2 w-full mb-3 flex items-center justify-between relative`}
      >
        <input
          type="file"
          name={name}
          id={name}
          onChange={onChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <div className="flex items-center space-x-2">
          <FaCloudUploadAlt className="text-gray-500" />
          <span className="text-gray-600">{fileName || "Choose a file"}</span>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FileInput;

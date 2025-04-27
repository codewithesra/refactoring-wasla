import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactUsSchema } from "../../../utils/SignupValidation";
import toast from "react-hot-toast";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactUsSchema),
  });

  const onSubmit = () => {
    toast.success("Your message has been sent!");
    reset();
  };

  return (
    <div
      id="#contactus"
      className="w-full bg-white py-16 px-4 dark:bg-gray-900"
    >
      <h1 className="text-l sm:text-3xl md:text-4xl font-bold py-2 text-center text-[#648db3] dark:text-[#aad2e5]">
        have a question?
      </h1>
      <p className="text-xl leading-8 font-medium text-center dark:text-white">
        we are here to help
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center mt-8 mx-5"
      >
        <div className="relative w-full max-w-md mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className={`w-full px-6 py-4 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#648db3] focus:border-transparent shadow-lg transition-all duration-200 bg-white dark:bg-gray-800 dark:text-white`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>
          )}
        </div>

        <div className="relative w-full max-w-md mb-6">
          <textarea
            placeholder="Your message"
            rows="4"
            className={`w-full px-6 py-4 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#648db3] focus:border-transparent shadow-lg transition-all duration-200 bg-white dark:bg-gray-800 dark:text-white`}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-2">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#648db3] text-white p-4 rounded-full hover:bg-[#4a6f8a] transition-colors duration-200 dark:bg-[#4a6f8a] dark:hover:bg-[#648db3]"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

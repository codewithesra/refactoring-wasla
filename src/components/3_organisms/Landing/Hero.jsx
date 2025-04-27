import { ReactTyped } from "react-typed";
import SearchBar from "../../2_molecules/SearchBar";

const Hero = () => {
  return (
    <main id="hero" className="my-20 text-center px-4 sm:px-6">
      <div className="flex flex-col md:flex-row justify-center items-center md:space-y-0 md:space-x-2 space-x-reverse font-medium">
        <h1 className="text-3xl sm:text-4xl font-bold md:mr-1">
          the first step towards your future in
        </h1>
        <ReactTyped
          className="text-[#648db3] text-2xl sm:text-3xl font-bold"
          strings={["Technology", "Marketing", "Engineering"]}
          typeSpeed={50}
          backSpeed={100}
          loop
        />
      </div>
      <p className="text-lg sm:text-xl text-gray-600 mt-4">
        motivational words and more words and yapping
      </p>
      <SearchBar />
    </main>
  );
};

export default Hero;

const AboutUs = () => {
  return (
    <div className="w-full bg-white py-16 px-4 dark:bg-gray-900">
      <h1 className="text-l sm:text-3xl md:text-4xl font-bold py-2 text-center text-[#648db3] dark:text-[#aad2e5]">
        something something
      </h1>
      <div className="max-w-[1000px] mx-auto gap-x-20 grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-xl py-2 text-[#a1a4a7] dark:text-[#b0b3b8]">
            sub title of some sort
          </h1>
          <p className="text-gray-800 leading-8 font-medium dark:text-gray-300">
            words word more words yapping words word more words yapping words
            word more words yapping words word more words yapping{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-xl py-2 text-[#a1a4a7] dark:text-[#b0b3b8]">
            find an image pleek{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

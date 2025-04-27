const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-light-card dark:bg-dark-card z-[100]">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;

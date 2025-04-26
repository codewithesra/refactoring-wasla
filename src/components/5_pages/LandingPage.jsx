import Navbar from "../2_molecules/NavBar";

const LandingPage = () => {
  return (
    <>
      <Navbar
        navLinks={[
          { href: "/about", label: "about us" },
          { href: "/forProviders", label: "for providers" },
          { href: "/contact", label: "contact" },
        ]}
      />
    </>
  );
};

export default LandingPage;

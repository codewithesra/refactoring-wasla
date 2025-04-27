import Navbar from "../2_molecules/NavBar";
import Hero from "../3_organisms/Landing/Hero";

const LandingPage = () => {
  return (
    <>
      <Navbar
        navLinks={[
          { href: "/about", label: "about us" },
          { href: "/forProviders", label: "for providers" },
          { href: "/contact", label: "contact us" },
        ]}
      />

      <Hero />
    </>
  );
};

export default LandingPage;

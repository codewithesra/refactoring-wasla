import Navbar from "../2_molecules/NavBar";
import AboutUs from "../3_organisms/Landing/AboutUs";
import ForWho from "../3_organisms/Landing/ForWho";
import Hero from "../3_organisms/Landing/Hero";
import ContactUs from "../3_organisms/Landing/ContactUs";
import Footer from "../2_molecules/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar
        navLinks={[
          { href: "/about", label: "about us" },
          { href: "/forWho", label: "for who" },
          { href: "/contact", label: "contact us" },
        ]}
      />
      <Hero />
      <AboutUs />
      <ForWho />
      <ContactUs />
      <Footer />
    </>
  );
};

export default LandingPage;

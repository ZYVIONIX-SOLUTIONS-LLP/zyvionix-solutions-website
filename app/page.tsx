
export const revalidate = 86400;

export const metadata = {
  title: "Zyvionix Solutions — Premium IT Solutions, Web & AI Engineering",
  description: "Zyvionix Solutions builds high-performance web applications, mobile apps, AI chatbots, SaaS platforms, and custom digital products.",
};
import Homepage from "./components/Homepage";
import AboutIntro from "./components/AboutIntro";

// Import components directly (no dynamic loading)
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Homepage />
      <AboutIntro />
      <About />
      <WhyChooseUs />
      <Contact />
      <TechStack />
      <Footer />
    </>
  );
}

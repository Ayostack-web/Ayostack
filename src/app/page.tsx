import Header from "./component/header";
import HeroSection from "./component/Hero";
import Contact from './component/Contact'
import Footer  from './component/Footer'
import Skills from "./component/skills";
import Testimonials from './component/Testimonial'
import About from './component/About'
import Glass from './component/Glass'
import Project from './component/Project'
export default function Home() {
  return (
    <div >
   <Header/>
  <HeroSection/>
  <About/>
  <Glass/>
    <Skills/>
  <Project/>
  <Testimonials/>
  <Contact/>
  <Footer/>
    </div>
  );
}

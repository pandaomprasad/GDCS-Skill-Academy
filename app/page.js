import AboutSection from "./components/AboutSection";
import BestTeachers from "./components/BestTeachers";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/Marquee_Section";
import MostPopularCourses from "./components/MostPopularCourses";
import TestimonialsSection from "./components/TestimonialsSection";
import BeamCursor from "./BeamCursor";
import CourseDetails from "./components/CourseDetails";
import AnnouncementBanner from "./components/AnnouncementBanner";
import WorkshopSection from "./components/WorksopSection";

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="">
          <MarqueeSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
         <WorkshopSection />
        <section id="courses">
          <MostPopularCourses />
        </section>
        <TestimonialsSection />
        <section id="team">
          <BestTeachers />
        </section>
        <BeamCursor />
        {/* other components */}
       
        
      </main>
    </>
  );
}

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
        <HeroSection />
        <BeamCursor/>   
        {/* other components */}
        <MarqueeSection />
        <AboutSection/>
        <WorkshopSection/>
        <MostPopularCourses/>
        <TestimonialsSection/>
        <BestTeachers/>
        <CourseDetails/>
      </main>
    </>
  );
}

import CourseDetails from '../../components/CourseDetails';
import courses from '../../components/Courses';
import { notFound } from 'next/navigation';

export default function CourseDetailsPage({ params }) {
  const course = courses.find(c => c.slug === params.slug);
  if (!course) return notFound();
  return <CourseDetails course={course} />;
}
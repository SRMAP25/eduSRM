import SubjectCard from "../Components/SubjectCard";


const CourseView = () => {
  const props = {
    title: "Mathematics",
    description:
      "Explore the world of numbers, shapes, and patterns. From basic arithmetic to advanced calculus, dive into the fascinating realm of mathematical concepts and problem-solving.",
    imageUrl:
      "https://imgs.search.brave.com/rexMcXwVX2F5s_-I0OIn8PCZLUfXA2qPyYTFbPJD5pI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDcw/NDkzMzQxL3Bob3Rv/L21hdGgtcHJvYmxl/bXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXpVNlpGNGZX/dGN3VHU1TW96c3lR/Y19BQUdza2tQWEh5/cnJvVTVmeGU5MVk9",
    lessonCount: "42",
  };
  return (
    <div className="flex flex-wrap">
      <SubjectCard details={props} />
    </div>
  );
};

export default CourseView;

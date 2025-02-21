import education from "../assets/education.json";

type Education = {
  schoolName: string;
  course: string;
  year: string;
};

function Education() {
  const educationList: Education[] = education;

  return educationList.map((e) => {
    return (
      <div>
        <div>{e.schoolName}</div>
        <div>{e.course}</div>
        <div>{e.year}</div>
      </div>
    );
  });
}

export default Education;

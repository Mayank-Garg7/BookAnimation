import { useParams } from "react-router-dom";

const SubjectPage = () => {
  const { exam, subject } = useParams();

  return (
    <div>
      <h1>{exam}</h1>
      <h2>{subject}</h2>
    </div>
  );
};

export default SubjectPage;
import { useParams } from "react-router-dom";

const TopicPage = () => {
  const { exam, subject, topic } = useParams();

  return (
    <div>
      <h1>{exam}</h1>
      <h2>{subject}</h2>
      <h3>{topic}</h3>
    </div>
  );
};

export default TopicPage;
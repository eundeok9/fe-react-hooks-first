import React, {useState} from "react";

const Diary = () => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleReset = (e) => {
    setSubject("");
    setContent("");
  };

  const handleSubmit = (e) => {
    alert(`제목: ${subject} \n내용: ${content} `);
    setSubject("");
    setContent("");
  };

  return (
    <div className="wrapper">
      <input value={subject} placeholder="제목을 입력해주세요" onChange={handleSubject} />
      <br />
      <textarea value={content} placeholder="내용을 입력해주세요" onChange={handleContent} />
      <br />
      <button onClick={handleReset}>초기화</button>
      <br />
      <button onClick={handleSubmit}>입력 완료</button>
    </div>
  );
};

export default Diary;

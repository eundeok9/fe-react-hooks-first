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

  const handleReset = () => {
    setSubject("");
    setContent("");
  };

  const handleSubmit = (e) => {
    alert(`제목: ${subject} \n내용: ${content} `);
    setSubject("");
    setContent("");
  };

  // useState 한 줄만 사용시

  // const [data, setData] = useState({
  //   subject: "",
  //   content: "",
  // });

  // const handleData = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleReset = () => {
  //   setData({
  //     subject: "",
  //     content: "",
  //   });
  // };

  // const handleSubmit = (e) => {
  //   alert(`제목: ${data.subject} \n내용: ${data.content} `);
  //   setData({
  //     subject: "",
  //     content: "",
  //   });
  // };

  return (
    <div className="wrapper">
      <input name="subject" value={subject} placeholder="제목을 입력해주세요" onChange={handleSubject} />
      <br />
      <textarea name="content" value={content} placeholder="내용을 입력해주세요" onChange={handleContent} />
      {/* useState 한 줄만 사용 시 */}
      {/* <input name="subject" value={data.subject} placeholder="제목을 입력해주세요" onChange={handleData} />
      <br />
      <textarea name="content" value={data.content} placeholder="내용을 입력해주세요" onChange={handleData} /> */}
      <br />
      <button onClick={handleReset}>초기화</button>
      <br />
      <button onClick={handleSubmit}>입력 완료</button>
    </div>
  );
};

export default Diary;

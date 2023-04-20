import React, {useState} from "react";

const Name = () => {
  const [myName, setMyName] = useState("");
  const [nickName, setNickName] = useState("");

  const handleName = (e) => {
    setMyName(e.target.value);
  };

  const handleNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div className="name">
      <input value={myName} placeholder="이름을 입력해주세요" onChange={handleName} />
      <input value={nickName} placeholder="닉네임을 입력해주세요" onChange={handleNickName} />
      <p>이름: {myName === "" ? "아직 이름이 없습니다." : myName}</p>
      <p>닉네임: {nickName === "" ? "아직 닉네임이 없습니다." : nickName}</p>
    </div>
  );
};

export default Name;

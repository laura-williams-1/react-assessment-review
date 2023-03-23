import { useState, useEffect } from "react";
import { randomAdvice } from "../Services/constants";

export default function Random() {
  const [counsel, setCounsel] = useState("");
  async function handleClick() {
    const answer = await randomAdvice();
    console.log(answer.data.slip.advice);

    setCounsel(answer.data.slip.advice);
  }
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <div>
      <h1>Random Advice</h1>
      <button onClick={handleClick}>Click Here For Random Advice</button>
      <p>{counsel}</p>
    </div>
  );
}

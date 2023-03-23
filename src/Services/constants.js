import axios from "axios";
export async function randomAdvice() {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    return response;
  } catch (e) {
    console.log(e);
  }

  //   fetch("https://api.adviceslip.com/advice").then((response) =>
  //     response.json().catch((e) => console.log(e))
  //   );
}

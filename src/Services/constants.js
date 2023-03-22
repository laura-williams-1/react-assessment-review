export function randomAdvice() {
  fetch("https://api.adviceslip.com/advice").then((response) =>
    response.json().catch((e) => console.log(e))
  );
}

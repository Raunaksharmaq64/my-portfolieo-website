aleart("opening calculator")
aleart("this site is currently under working and not made responsives. open if you are on smartphone kindly open desktop mode.")

gsap.from('.heading',{
    y:-1000,
    delay:1,
    duration:3,
    
});
gsap.from('#heading',{
    y:0,
    delay:3,
    duration:2,
    scale:0,
    
});


const inputBox = document.querySelector(".input-box");
const buttons = document.querySelectorAll(".buttons");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "CLEAR") {
      inputBox.value = "";
    } else if (value === "=") {
      try {
        inputBox.value = eval(inputBox.value) || "";
      } catch {
        inputBox.value = "Error";
      }
    } else {
      inputBox.value += value;
    }
  });
});

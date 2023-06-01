const inputRadio = document.querySelector("input[type=radio] ");
const label = document.querySelector("label");
const question = document.querySelector(".hideShow");
const section = document.querySelectorAll(".aboutUs");

inputRadio.checked = false;

// label.addEventListener("click", () => {
//   inputRadio.checked = !inputRadio.checked;
//   if (inputRadio.checked) {
//     label.style.transform = "rotate(360deg)";
//     question.style.display = "block";
//   } else {
//     label.style.transform = "rotate(270deg)";
//     question.style.display = "none";
//   }
// });

section.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.inputRadio);
  });
});

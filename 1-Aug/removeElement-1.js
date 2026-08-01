// const btn = document.createElement("button");
// btn.innerText = "Click Me!";

// btn.onclick = () => {
//   const para1 = document.getElementById("fPara");
//   para1.remove();
// };

// document.body.append(btn);

// setTimeout(() => {
//   let fP = document.getElementById("fPara");
//   fP.remove();
// }, 5000);

const btn = document.getElementsByTagName("button")[0];

btn.onclick = () => {
  const ulTag = document.getElementsByTagName("ul")[0];

  ulTag.children[1].remove();
};

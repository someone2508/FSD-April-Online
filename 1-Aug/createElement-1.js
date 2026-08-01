let btn = document.createElement("button");

btn.innerText = "Click Me";

btn.onclick = () => {
  console.log("Button Has Been Clicked!");
};

// document.body.append(btn);

// document.body.prepend(btn);

const secondPara = document.getElementById("secondPara");

document.body.insertBefore(btn, secondPara);

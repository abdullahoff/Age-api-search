import "./styles.css";

const out = document.querySelectorAll("p");
const submit = document.querySelector("button");

submit.addEventListener("click", (action) => {
  let search = document.querySelector("input").value;
  let url = `https://api.agify.io?name=${search}`;
  DisplayData(url);
});

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const DisplayData = async (url) => {
  let obj = await fetchData(url);
  out[0].innerHTML = obj.name;
  out[1].innerHTML = obj.age;
  out[2].innerHTML = obj.count;
};

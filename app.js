const svg = document.querySelectorAll(".bd-placeholder-img");

const loadImage = document.querySelector(".btn-load");
console.log(loadImage);
const loadSecImage = document.querySelector(".btn-sec-load");
const api = "563492ad6f91700001000001b8ae8829d887489d81bee37d63868664";
const getImages = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "563492ad6f91700001000001b8ae8829d887489d81bee37d63868664",
    },
  };
  fetch(
    "https://api.pexels.com/v1/search?query=nature",
    options
    // method: "GET",
    // headers: { Authorization: `Bearer ${api}` },
  )
    .then((response) => response.json())
    .then((images) => {
      let pictures = images.photos;
      console.log(pictures);
      console.log(pictures[0].url);
      for (let i = 0; i < svg.length; i++) {
        // const container = document.querySelector("#addToRow");
        // let picture = pictures[i];
        // console.log(picture);
        const image = document.createElement("img");
        image.classList = "col-12  w- 100 card-img-top img-fluid p-0";
        image.src = pictures[i].src.landscape;
        console.log(image);

        svg[i].parentNode.replaceChild(image, svg[i]);
      }
      console.log("clicked");
    });
};
loadImage.addEventListener("click", getImages);
// const getDifImages = () => {
//   fetch("https://api.pexels.com/v1/search?query=dogs", {
//     method: "GET",
//     headers: { Authorization: `Bearer ${api}` },
//   })
//     .then((response) => response.json())
//     .then((images) => {
//       let pictures = images.photos;
//       //   console.log(photos);
//       console.log("pushed");
//     });
// };
// loadSecImage.addEventListener("click", getDifImages);

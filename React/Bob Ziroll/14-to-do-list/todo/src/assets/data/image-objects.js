const IMAGES = [
  // require("./personalImages/edu2022.jpg"),
  // require("./personalImages/profile.jpg"),
  // require("./personalImages/teamDinner.jpg"),
  require("../img/personalImages/teaching1.jpg"),
  require("../img/personalImages/teaching2.jpg"),
  require("../img/personalImages/teaching3.jpg"),
  // require("./personalImages/teaching4.jpg"),
  // require("./personalImages/teaching5.jpg"),
  // require("./personalImages/head_shot.jpg"),
];

const imageObjectsArray = IMAGES.map((image, idx) => {
  return {
    img: image,
    title: `personal[${idx}]`,
  };
});

export default imageObjectsArray;

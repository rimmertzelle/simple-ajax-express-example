console.log('initialising');
window.addEventListener("load", init);

function init() {
  console.log("in init");
  fetch("./names", {
    method: "get",
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
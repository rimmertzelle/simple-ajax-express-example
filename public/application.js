console.log('initialising');

function init() {
  console.log('in init');
  fetch('./names', {
    method: 'get',
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

window.addEventListener('load', init);

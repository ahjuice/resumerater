let currentUser = null;
document.addEventListener('DOMContentLoaded', init)


function init(){
  const homeLink = document.querySelector("#home-link li a");
  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    View.render('welcome');
  })

  if (User.isLoggedIn()) {
    Navbar.render('standardUser');
    View.checkForResumes(currentUser);
  } else {
    Navbar.render('noUser');
    View.render('welcome');
  }

}


// function renderImage(arr){
//   let imageDiv = document.querySelector(".image-div")
//   let imageHTML = ``
//   arr.map((image) => imageHTML += `<img src=${image.image_url}>`)
//   // let imageTag = `<img src=${obj.image_url}>`
//   imageDiv.innerHTML = imageHTML
// }

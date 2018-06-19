document.addEventListener('DOMContentLoaded', init)

function init(){
  Adapter.getResumes()
    .then()
}

// function renderImage(arr){
//   let imageDiv = document.querySelector(".image-div")
//   let imageHTML = ``
//   arr.map((image) => imageHTML += `<img src=${image.image_url}>`)
//   // let imageTag = `<img src=${obj.image_url}>`
//   imageDiv.innerHTML = imageHTML
// }

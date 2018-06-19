document.addEventListener('DOMContentLoaded', init)

function init(){
  Adapter.getResumes()
<<<<<<< HEAD
    .then(renderInformation)
}

function renderInformation(arr){
  let imageDiv = document.querySelector(".image-div")
  let imageHTML = ``
  arr.map((image) => imageHTML += `<img src=${image.image_url}>`)
  imageDiv.innerHTML = imageHTML
}
=======
    .then()
}

// function renderImage(arr){
//   let imageDiv = document.querySelector(".image-div")
//   let imageHTML = ``
//   arr.map((image) => imageHTML += `<img src=${image.image_url}>`)
//   // let imageTag = `<img src=${obj.image_url}>`
//   imageDiv.innerHTML = imageHTML
// }
>>>>>>> 63cc020c4f905976ac56000cbe1b86892eb9995c

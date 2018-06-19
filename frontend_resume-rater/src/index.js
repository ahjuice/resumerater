document.addEventListener('DOMContentLoaded', init)

function init(){
  Adapter.getResumes()
    .then(renderInformation)
}

function renderInformation(arr){
  let imageDiv = document.querySelector(".image-div")
  let imageHTML = ``
  arr.map((image) => imageHTML += `<img src=${image.image_url}>`)
  imageDiv.innerHTML = imageHTML
}

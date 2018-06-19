document.addEventListener('DOMContentLoaded', init)


function init(){
  Adapter.getResumes()
    .then()
  const form = FormBuilder.createUser()
  document.body.innerHTML = form

  let userForm = document.querySelector("#create-user-form")

  userForm.addEventListener("submit", function(e) {
    e.preventDefault()
    let nameValue = document.querySelector("#user-name-input").value
    let emailValue = document.querySelector("#email-input").value

    let data = {
      name: nameValue,
      email: emailValue
    }

    Adapter.createUser(data)
      .then(console.log)
  })
}


// function renderResumeForm(){
//   console.log(FormBuilder.createUser())
//   // document.body.prepend(form)
// }

// renderResumeForm()

// function renderImage(arr){
//   let imageDiv = document.querySelector(".image-div")
//   let imageHTML = ``
//   arr.map((image) => imageHTML += `<img src=${image.image_url}>`)
//   // let imageTag = `<img src=${obj.image_url}>`
//   imageDiv.innerHTML = imageHTML
// }

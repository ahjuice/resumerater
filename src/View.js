const View = (function createViewClass(){
  const content = document.querySelector("#main-content")

  return class View {

      static render(viewName) {
        content.innerHTML = ''
        switch (viewName) {
          case 'welcome':
            View.welcome();
            break;
          case 'signup':
            View.signup();
            break;
          case 'login':
            View.login();
            break;
          case 'profile':
            View.profile();
            break;
          case 'addResume':
            View.addResume();
            break;
          case 'resumeIndex':
            View.resumeIndex();
            break;
          default:

        }
      }

      static welcome() {

        const html = `
          <h1>Welcome to ResumeRater!</h1>
          <button class="button" id="login-button">Log In</button>
          <button class="button" id="signup-button">Sign Up</button>
        `;
        content.innerHTML = html;

        const signupButton = document.querySelector("#signup-button")
        signupButton.addEventListener('click', function(e){
          e.preventDefault()
          View.render('signup');
        })

        const loginButton = document.querySelector("#login-button")
        loginButton.addEventListener('click', function(e){
          e.preventDefault()
          View.render('login');
        })
      }

      static signup(){

        let html = `<h1>Sign Up!</h1>`
        html += FormBuilder.createUser();
        content.innerHTML = html;

        const formUser = document.querySelector("#create-user-form")
        formUser.addEventListener('submit', function(e){
          e.preventDefault()
          const nameValue = document.querySelector("#user-name-input").value
          const emailValue = document.querySelector("#email-input").value

          let data = {
            user: {
              name: nameValue,
              email: emailValue
            }
          }

          Adapter.createUser(data)
            .then(data => View.setCurrentUser(data))
            .then(data => View.render('profile'))
        })


      }

      static login(){

        let html = `<h1>Log In</h1>`
        html += FormBuilder.loginUser();
        content.innerHTML = html;


        const formLogin = document.querySelector("#login-user-form")
        formLogin.addEventListener('submit', function(e){
          e.preventDefault()
          const emailValue = document.querySelector("#email-input").value

          let data = {
              email: emailValue
            }

          Adapter.login(data)
            .then((function(response) {
              if (response.code === 400) {
                console.log("Response was no good.")
                View.render('login');
                throw alert("Incorrect Login Information!")
              } else {
                return response;
              }
            }))
            .then(obj => View.setCurrentUser(obj))
            .then(obj => View.render('profile'))

        })
      }

      static userNoResumes(){
        //Welcome user with their name and add resume form builder
        let welcomeUser = `<h1>Welcome ${currentUser.name}!</h1>
        <h5>Enter a Resume</h5>
        `
        welcomeUser += FormBuilder.createResume();
        content.innerHTML = welcomeUser;

        //after successful submission of resume, re-render their page to show resume
        const resumeForm = document.querySelector('#create-resume-form')
        resumeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(e.target.children)
            const data = {
                title: e.target.children[1].value,
                image_url: e.target.children[4].value,
                industry: e.target.children[7].value,
                user_id: currentUser.id
            }

            Adapter.createResume(data)
            .then(resumeData => {
                    currentUser.resumes.push(resumeData)
                    View.render('userWithResumes')
                })
        })

      }

      static userWithResumes(){
        let welcomeUser = `<h1 id="user-name-heading">Welcome ${currentUser.name}!</h1>`
        let goToAll = `<button class="button" id="go-to-resumes">Go to Resumes!</button>`
        let addResumeBtn = `<button class="button" id="add-resume-btn">Add Resume!</button>`
        content.innerHTML = welcomeUser
        content.innerHTML += goToAll
        content.innerHTML += addResumeBtn
        Resume.renderResumes(currentUser.resumes)

        document.querySelector('#go-to-resumes').addEventListener('click', (e) =>
            View.render('resumeIndex')
        )

        document.querySelector('#add-resume-btn').addEventListener('click', (e) =>
            View.render('addResume')
        )

        document.addEventListener('click', (e) => {

            if (e.target.className === 'img') {
                console.log(e.target.parentElement.dataset.resumeId)
                // Adapter.getResume(e.target.parentElement.dataset.resumeId)
                View.resumeShowPage(e.target.parentElement.dataset.resumeId)
            }
        })

      }

    //   static findResume(id) {


    //   }

      static resumeShowPage(resumeId){
        content.innerHTML = '';
        Adapter.getResume(resumeId)
          .then(resumeObj => {
            content.innerHTML = `<h1>Title: ${resumeObj.title}</h1><h3>Industry: ${resumeObj.industry}</h3>`
            content.appendChild(Resume.showResume(resumeObj))
            content.innerHTML += FormBuilder.createComment()
            return resumeObj
          })
          .then(resumeObj => Adapter.getComments(resumeObj.id))
          .then(commentArray => View.checkForComments(commentArray))

        document.addEventListener('click', function(e) {
          if (e.target.parentElement.className === "star-container") {
              e.target.classList.toggle("checked")
          }
        })

        document.addEventListener('submit', function(e) {
          e.preventDefault()
          const commentContent = document.querySelector("#content-input").value

          let data = {
            content: commentContent,
            poster_id: currentUser.id,
            resume_id: parseInt(resumeId)
          }

          Adapter.createComment(resumeId, data)
            .then(comment => View.resumeShowPage(comment.resume_id))
        })
        // Have comment functionality...
        // event listener for comment form
        // use Adapter.createComment() to persist to db
        // use Comment.renderComments to add to page

      }

      static setCurrentUser(obj){
        currentUser = obj
        return obj
      }

      static checkForComments(commentArray) {
          if (commentArray.length > 0) {
           return Comment.renderComments(commentArray)
          }
      }

      static profile(){
        if (currentUser.resumes.length === 0) {
          View.userNoResumes();
        } else {
          View.userWithResumes()
        }
      }

      static addResume() {
        content.innerHTML = FormBuilder.createResume()
        const resumeForm = document.querySelector('#create-resume-form')
        resumeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = {
                title: e.target.children[1].value,
                image_url: e.target.children[4].value,
                industry: e.target.children[6].value,
                user_id: currentUser.id
            }

            Adapter.createResume(data)
            .then(resumeData => {
                    currentUser.resumes.push(resumeData)
                    View.render('profile')
                })
        })
      }

    static resumeIndex() {
      content.innerHTML = `<h1>All Resumes</h1>`
      Adapter.getResumes()
        .then(Resume.renderResumes)
    }

    }
})()

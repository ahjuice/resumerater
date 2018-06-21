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
          case 'userNoResumes':
            View.userNoResumes();
            break;
          case 'userWithResumes':
            View.userWithResumes();
            break;
          case 'addResume':
            View.addResume();
            break;
          default:

        }
      }

      static welcome() {

        const html = `
          <h1>Welcome to ResumeRater!</h1>
          <button id="login-button">Log In</button>
          <button id="signup-button">Sign Up</button>
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
            .then(View.render("userNoResumes"))
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
            .then(obj => View.setCurrentUser(obj))
            .then(obj => View.checkForResumes(obj))

        })
      }

      static userNoResumes(){
        //Welcome user with their name and add resume form builder
        let welcomeUser = `<h1>Welcome ${currentUser.name}!</h1>
        <br>
        <h5>Enter a Resume</h5>
        `
        welcomeUser += FormBuilder.createResume();
        content.innerHTML = welcomeUser;

        //after successful submission of resume, re-render their page to show resume
        View.render('userWithResumes');

      }

      static userWithResumes(){
        let welcomeUser = `<h1 id="user-name-heading">Welcome ${currentUser.name}!</h1>`
        let addResumeBtn = `<button id="add-resume-btn">Add Resume!</button>`
        content.innerHTML = welcomeUser
        content.innerHTML += addResumeBtn
        Resume.renderResumes(currentUser.resumes)

        document.querySelector('#add-resume-btn').addEventListener('click', (e) =>
            View.render('addResume')
        )

        document.addEventListener('click', (e) => {

            if (e.target.className === 'img') {
                console.log(e.target.parentElement.dataset.resumeId)
                // Adapter.getResume(e.target.parentElement.dataset.resumeId)
                View.resumeView(e.target.parentElement.dataset.resumeId)
            }
        })

      }

    //   static findResume(id) {


    //   }

      static resumeView(id){
        content.innerHTML = '';
        let selectedResume = currentUser.resumes.find(resume => resume.id === parseInt(id))
        content.innerHTML = `<h1>${selectedResume.title}</h1>`
        content.appendChild(Resume.showResume(selectedResume))
        content.innerHTML += FormBuilder.createComment()
        Adapter.getComments(selectedResume.id)
            .then(commentArray => View.checkForComments(commentArray))
<<<<<<< HEAD


=======
        // Have comment functionality...
        // event listener for comment form
        // use Adapter.createComment() to persist to db
        // use Comment.renderComments to add to page
       
>>>>>>> 6f955f189a4b7f1d123ee78f4d02ff7c61f5f751
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

      static checkForResumes(obj){
        if (obj.resumes.length === 0) {
          View.render('userNoResumes')
        } else {
          View.render('userWithResumes')
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
                    View.render('userWithResumes')
                })
        })
      }

    }
})()

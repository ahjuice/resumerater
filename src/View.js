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
        console.log("I have no resumes")
      }

      static userWithResumes(){
        let currentResumes = currentUser.resumes
        Resume.renderResumes(currentResumes)
      }

      static setCurrentUser(obj){
        currentUser = obj
        return obj
      }

      static checkForResumes(obj){
        if (obj.resumes.length === 0) {
          View.render('userNoResumes')
        } else {
          View.render('userWithResumes')
        }
      }

    }
})()

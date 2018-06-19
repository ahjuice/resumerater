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
            // View.login();
            break;
          case '':

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
          View.render('signup')
        })
      }

      static signup(){

        let html = `<h1>Sign Up!</h1>`
        html += FormBuilder.createUser()
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
            .then(console.log)
        })


      }

      static login(){

      }
    }

})()

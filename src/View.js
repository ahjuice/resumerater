const View = (function createViewClass(){
  const content = document.querySelector("#main-content")

  return class View {
      static render(viewName) {
        content.innerHTML = ''
        switch (viewName) {
          case 'welcome':
            View.welcome();
            break;
          case 'login':
            View.login();
            break;
          case 'signup':

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
          <button>Sign Up</button>
        `;

        content.innerHTML = html;
        const loginButton = document.querySelector("#login-button")
        loginButton.addEventListener('click', function(e){
          e.preventDefault()
          View.render('login')
        })
      }

      static login(){
        let html = `<h1>Login</h1>`
        html += FormBuilder.createUser()

        content.innerHTML = html
      }
    }

})()

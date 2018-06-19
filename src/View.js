class View {
  constructor() {
    this.content = document.querySelector("#main-content")
  }

  render(viewName) {
    switch (viewName) {
      case welcome:

        break;
      default:

    }
  }

  welcome() {
    const html = `
      <h1>Welcome to ResumeRater!</h1>
      <button>Log In</button>
      <button>Sign Up</button>
    `;

    this.content.innerHTML = html;
  }
}

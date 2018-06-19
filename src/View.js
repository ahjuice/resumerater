class View {
  static render(viewName) {
    switch (viewName) {
      case 'welcome':
        View.welcome();
        break;
      default:

    }
  }

  static welcome() {
    const content = document.querySelector("#main-content")

    const html = `
      <h1>Welcome to ResumeRater!</h1>
      <button>Log In</button>
      <button>Sign Up</button>
    `;

    content.innerHTML = html;
  }
}

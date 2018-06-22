const Navbar = function() {
  const navLinks = document.querySelector("#nav-links");
  const userLink = document.querySelector("#user-link");

  return class Navbar {
    static render(view) {
      navLinks.innerHTML = "";
      userLink.innerHTML = "";

      switch (view) {
        case "noUser":
          Navbar.noUser();
          break;
        case "standardUser":
          Navbar.standardUser();
          break;
        default:

      }
    }

    static noUser() {
      // const loginLink = document.createElement("a");
      // loginLink.href = "#"
      // loginLink.innerHTML = "Log In"
      // loginLink.addEventListener('click', (e) => {
      //   e.preventDefault();
      //   View.render('login');
      // });

      const loginLink = Navbar.buildLink("Log In", View.render, ["login"]);

      const li = document.createElement("li");
      li.appendChild(loginLink);

      userLink.appendChild(li);
    }

    static standardUser() {
      // const profileLink = document.createElement("a");
      // profileLink.href = "#"
      // profileLink.innerHTML = "My Profile"
      // profileLink.addEventListener('click', (e) => {
      //   e.preventDefault();
      //   View.checkForResumes(currentUser);
      // });

      const profileLink = Navbar.buildLink("My Profile", View.checkForResumes, [currentUser]);

      const li = document.createElement("li");
      li.appendChild(profileLink);

      userLink.appendChild(li);
    }

    static buildLink(text, listenerFn, argumentsArr) {
      const link = document.createElement("a");
      link.href = "#"
      link.innerHTML = text
      link.addEventListener('click', (e) => {
        e.preventDefault();
        listenerFn(...argumentsArr);
      });
      return link;
    }
  }
}();

const Navbar = function() {
  const homeLink = document.querySelector("#home-link");
  const navLinks = document.querySelector("#nav-links");
  const userLink = document.querySelector("#user-link");

  return class Navbar {
    static render(view) {
      homeLink.innerHTML = "";
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
      // home link
      Navbar.buildLink("ResumeRater", homeLink, "welcome");

      // nav links

      // user link
      Navbar.buildLink("Log In", userLink, "login");

    }

    static standardUser() {
      // home link
      Navbar.buildLink("ResumeRater", homeLink, "profile");

      // nav links
      Navbar.buildLink("Rate Resumes!", navLinks, "resumeIndex")

      // user link
      Navbar.buildLink("My Profile", userLink, "profile");
    }

    static buildLink(linkText, divToAppend, viewToRender) {
      const link = document.createElement("a");
      link.href = "#"
      link.innerHTML = linkText
      link.addEventListener('click', (e) => {
        e.preventDefault();
        View.render(viewToRender);
      });

      const li = document.createElement("li");
      li.appendChild(link);

      divToAppend.appendChild(li);
    }
  }
}();

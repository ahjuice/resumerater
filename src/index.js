let currentUser = null;
document.addEventListener('DOMContentLoaded', init)


function init(){
  if (User.isLoggedIn()) {
    Navbar.render('standardUser');
    View.profile();
  } else {
    Navbar.render('noUser');
    View.render('welcome');
  }

}

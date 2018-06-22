class User {
  static isLoggedIn() {
    if (currentUser === null) {
      return false;
    } else {
      return true;
    }
  }
}

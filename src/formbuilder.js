class FormBuilder {
  static createUser(){
    return `
    <form id="create-user-form" action="#" method="post">
      Name:<br>
      <input id="user-name-input"type="text" name="name"><br>
      Email:<br>
      <input id="email-input" type="text" name="email">
      <input type="submit" value="Submit">
    </form>
    `
  }

  static createResume(){
    return `
    <form id="create-resume-form" action="#" method="post">
      Title:<br>
      <input id="resume-title-input" type="text" name="title"><br>
      Image URL:<br>
      <input id="image-url-input" type="text" name="image_url">
      Industry:<br>
      <input id="industry-input" type="text" name="industry">
      <input type="submit" value="Submit">
    </form>
    `
  }

  static createComment(){
    return `
    <form id="create-comment-form" action="#" method="post">
      <textarea id="content-input"maxlength="250" name="content"></textarea>
      <input type="submit" value="Submit">
    </form>
    `
  }

  static loginUser(){
    return `
    <form id="login-user-form" action="#" method="post">
      Email:<br>
      <input id="email-input" type="text" name="email">
      <input type="submit" value="Submit">
    </form>
    `
  }
}

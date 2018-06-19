class FormBuilder {
  static createUser(){
    return `
    <form action="#" method="post">
      Name:<br>
      <input type="text" name="name"><br>
      Email:<br>
      <input type="text" name="email">
      <input type="submit" value="Submit"
    </form>
    `
  }

  static createResume(){
    return `
    <form action="#" method="post">
      Title:<br>
      <input type="text" name="title"><br>
      Image URL:<br>
      <input type="text" name="image_url">
      Industry:<br>
      <input type="text" name="industry">
      <input type="submit" value="Submit"
    </form>
    `
  }

  static createComment(){
    return `
    <form action="#" method="post">
      <textarea maxlength="250" name="content"><textarea>
      <input type="submit" value="Submit"
    </form>
    `
  }
}

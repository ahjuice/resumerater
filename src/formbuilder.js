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
      Name:<br>
      <input type="text" name="name"><br>
      Email:<br>
      <input type="text" name="email">
      <input type="submit" value="Submit"
    </form>
    `
  }
}

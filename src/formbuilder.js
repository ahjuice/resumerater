class FormBuilder {
  static createUser(){
    return `
    <form id="create-user-form" action="#" method="post">
      <p>Name:</p>
      <input id="user-name-input"type="text" name="name">
      <p>Email:</p>
      <input id="email-input" type="text" name="email">
      <input class="button" type="submit" value="Submit">
    </form>
    `
  }

  static createResume(){
    return `
    <form id="create-resume-form" action="#" method="post">
      <p>Title:</p>
      <input id="resume-title-input" type="text" name="title">
      <p>Image URL:</p>
      <input id="image-url-input" type="text" name="image_url">
      <p>Industry:</p>
      <input id="industry-input" type="text" name="industry">
      <input class="button" type="submit" value="Submit">
    </form>
    `
  }

  static createComment(){
    return `
    <h3 class="comment-title">Comment Section</h3>
    <form id="create-comment-form" action="#" method="post">
      <textarea id="content-input" maxlength="250" row="20" columns="100" name="content" placeholder="Add New Comment"></textarea>
      <br>
      <input class="button" type="submit" value="Submit">
    </form>
    `
  }

  static loginUser(){
    return `
    <form id="login-user-form" action="#" method="post">
      <p>Email:</p>
      <input id="email-input" type="text" name="email">
      <input class="button" type="submit" value="Submit">
    </form>
    `
  }
}

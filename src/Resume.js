class Resume {
  // constructor(id, image_url, industry, user_id) {
  //   this.id = id;
  //   this.image_url = image_url;
  //   this.industry = industry;
  //   this.user_id = user_id;
  // }

  static buildResume(resumeObj) {
    const resumeDiv = document.createElement('div');
    const resumeImg = document.createElement('img');
    resumeDiv.className = 'resume-div';
    resumeImg.classList = 'img'
    resumeImg.src = resumeObj.image_url;
    resumeDiv.appendChild(resumeImg);
    return resumeDiv;
  }

  static renderResumes(resumeArr) {
    const content = document.querySelector("#main-content");
    const resumesContainer = document.createElement('div');
    resumesContainer.id = 'resume-container';
    resumeArr.forEach(resumeObj => {
      const div = Resume.buildResume(resumeObj);
      content.appendChild(div);
    })
  }
}

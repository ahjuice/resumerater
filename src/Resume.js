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
    const resumeTitle = document.createElement('h3');
    const resumeIndustry = document.createElement('p');
    resumeDiv.className = 'resume-div';
    resumeDiv.dataset.resumeId = resumeObj.id
    resumeImg.classList = 'img'
    resumeImg.src = resumeObj.image_url;
    resumeTitle.innerText = resumeObj.title;
    resumeIndustry.innerText = resumeObj.industry;
    resumeDiv.appendChild(resumeTitle);
    resumeDiv.appendChild(resumeIndustry);
    resumeDiv.appendChild(resumeImg);
    return resumeDiv;
  }

  static showResume(resumeObj) {
    const resumeDiv = document.createElement('div');
    const resumeImg = document.createElement('img');
    resumeImg.src = resumeObj.image_url;
    resumeDiv.className = 'resume-show-div';
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

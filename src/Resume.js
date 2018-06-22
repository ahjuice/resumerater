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
    const starDiv = document.createElement('div');
    const resumeStar1 = document.createElement('span');
    const resumeStar2 = document.createElement('span');
    const resumeStar3 = document.createElement('span');
    const resumeStar4 = document.createElement('span');
    const resumeStar5 = document.createElement('span');
    resumeStar1.classList = "fa fa-star"
    resumeStar2.classList = "fa fa-star"
    resumeStar3.classList = "fa fa-star"
    resumeStar4.classList = "fa fa-star"
    resumeStar5.classList = "fa fa-star"
    resumeStar1.dataset.starId = "1"
    resumeStar2.dataset.starId = "2"
    resumeStar3.dataset.starId = "3"
    resumeStar4.dataset.starId = "4"
    resumeStar5.dataset.starId = "5"
    starDiv.appendChild(resumeStar1);
    starDiv.appendChild(resumeStar2);
    starDiv.appendChild(resumeStar3);
    starDiv.appendChild(resumeStar4);
    starDiv.appendChild(resumeStar5);
    starDiv.classList = "star-container"
    resumeImg.src = resumeObj.image_url;
    resumeDiv.className = 'resume-show-div';
    resumeDiv.appendChild(resumeImg);
    resumeDiv.appendChild(starDiv);
    return resumeDiv;
  }

  static renderResumes(resumeArr) {
    const content = document.querySelector("#main-content");
    const resumesContainer = document.createElement('div');
    resumesContainer.id = 'resume-container';
    resumeArr.forEach(resumeObj => {
      const div = Resume.buildResume(resumeObj);
      resumesContainer.appendChild(div);
    })
    content.appendChild(resumesContainer);
  }
}

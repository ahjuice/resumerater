const Resume = function() {
  const body = document.body;

  class Resume {
    // constructor(id, image_url, industry, user_id) {
    //   this.id = id;
    //   this.image_url = image_url;
    //   this.industry = industry;
    //   this.user_id = user_id;
    // }

    buildResume() {
      resumeDiv = document.createElement('div')
      resumeDiv.className = 'resume-div'

    }

    static renderResumes(arr) {
      resumesContainer = document.createElement('div')
      resumesContainer.id = 'resume-container'
    }
  }
}();

const base_url = "http://localhost:3000/api/v1"
const resumeURL = "http://localhost:3000/api/v1/resumes"

class Adapter {
  static getResumes(){
    return fetch(resumeURL)
      .then(r => r.json())
  }
}

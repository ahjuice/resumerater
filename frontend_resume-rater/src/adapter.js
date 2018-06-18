const baseURL = "http://localhost:3000/api/v1"
const resumeURL = `${baseURL}/resumes`

class Adapter {
  static getResumes(){
    return fetch(resumeURL)
      .then(r => r.json())
  }
}

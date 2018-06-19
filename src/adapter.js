const baseURL = "http://localhost:3000/api/v1"
const resumesURL = `${baseURL}/resumes`

class Adapter {
  static getResumes(){
    return fetch(resumesURL)
      .then(r => r.json())
  }
}

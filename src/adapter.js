const baseURL = "http://localhost:3000/api/v1"
const resumesURL = `${baseURL}/resumes`
const userURL = `${baseURL}/users`


class Adapter {
  static getResumes(){
    return fetch(resumesURL)
      .then(r => r.json())
  }

  static getResume(id) {
    return fetch(`${resumesURL}/${id}`)
      .then(r => r.json())
  }

  static createResume(data) {
    const jsonData = JSON.stringify(data)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    }
    return fetch(resumesURL, options).then(r => r.json())
  }

  static deleteResume(id) {
    const options = {
      method: 'DELETE'
    }
    return fetch(`${resumesURL}/${id}`, options).then(r => r.json())
  }

  static getUser(id) {
    return fetch(`${userURL}/${id}`).then(r => r.json())
  }

  static createUser(data) {
    const jsonUserData = JSON.stringify(data)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonUserData
    }
    return fetch(userURL, options).then(r => r.json())
  }

  static getComments(resumeId) {
    return fetch(`${resumesURL}/${resumeId}/comments`).then(r => r.json())
  }

  

}

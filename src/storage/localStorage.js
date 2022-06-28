export function setLogUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
}

export function getLogUser() {
   return JSON.parse(localStorage.getItem('user'))
}
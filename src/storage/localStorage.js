export function setLogUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
}

export function getLogUser() {
   return JSON.parse(localStorage.getItem('user'))
}

export function removeLogUser() {
    localStorage.removeItem('user')
 }
 

// unang bukas ng browser
export function initializeUserList() {
    if(localStorage.getItem('users')) {
        return
    } else {
        localStorage.setItem('users', JSON.stringify([]))
    }
}

export function getUserList() {
   return JSON.parse(localStorage.getItem('users'))
}

export function setUserList(users) {
    localStorage.setItem('users', JSON.stringify(users))
}

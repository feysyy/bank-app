export function getAccount(userName) {
    return JSON.parse(localStorage.getItem(userName))
 }
 
 export function setAccount(userName, userInfo) {
     localStorage.setItem(userName, JSON.stringify(userInfo))
 }

 export function getUser() {
    return JSON.parse(localStorage.getItem('accessingUser'))
 }
 
 export function setUser(userName) {
     localStorage.setItem('accessingUser', JSON.stringify(userName))
 }

 export function removeUser() {
    localStorage.removeItem('accessingUser')
}
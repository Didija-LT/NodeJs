const { User } = require('../models')
const article = require('../models/article')
module.exports = {
  getAllArticle() {
    return Article.findAll()
},
// méthodes à implémenter
getArticle(offset = 0, limit = 10) { },
getTitle() { },
getAuthors() { },
getGuests(){ }, 
getUser(id) { },
getUserByEmail(email) { },
addUser(user) { },
updateUser() { },
deleteUser() { },
   // D'autres méthodes jugées utiles
}
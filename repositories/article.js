const { User } = require('../models')
const article = require('../models/article')
module.exports = {
  getAllArticle() {
    return Article.findAll()
},
// méthodes à implémenter
getArticle(offset = 0, limit = 10) {
  return Article.findAndCountAll({
    where: {},
    limit:limit,
    offset:offset
  })
 },
getTitle() { },
getAuthors() { },
getGuests(){ }, 
getUser(id) {
  return Article.findOne({ where:{id} });
 },
getUserByEmail(email) { },
addUser(user) { },
updateUser() { },
deleteUser() { },
   // D'autres méthodes jugées utiles
}
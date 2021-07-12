const { User } = require('../models')
module.exports = {
  getAllUsers() {
    return User.findAll()
},
// méthodes à implémenter
getUsers(offset = 0, limit = 10) {
  return User.findAndCountAll({
    where: {},
    limit:limit,
    offset:offset
  })
 },
getAdmins() { },
getAuthors() { },
getGuests(){ }, 
getUser(id) { 
  return User.findOne({ where:{id} });
},
getUserByEmail(email) {
  return User.findOne({ where:{email} });
 },
addUser(user) { },
updateUser() { },
deleteUser() { },
   // D'autres méthodes jugées utiles
}

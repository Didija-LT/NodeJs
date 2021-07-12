const { Comment } = require('../models')

module.exports = {
    getAllComments() {
        return Comment.findAll()
    },
   
    getComments(offset = 0, limit = 8) {
        return Comment.findAndCountAll({
            where: {},
            limit:limit,
            offset:offset
          })
     },
    getAdmins() { },
    getAuthors() { },
    getGuests(){ }, 
    getComment(id) { 
        return Comment.findOne({ where:{id} });
    }, 
    getUserByEmail(email) { },
    addUser(user) { },
    updateUser() { },
    deleteUser() { },
}
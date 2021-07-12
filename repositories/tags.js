const { Tag } = require('../models')

module.exports = {
    getAllTags() {
        return Tag.findAll()
    },
   
    getTags(offset = 0, limit = 4) { 
        return Tag.findAndCountAll({
            where: {},
            limit:limit,
            offset:offset
          })
    },
    getAdmins() { },
    getAuthors() { },
    getGuests(){ }, 
    getTag(id) { 
        return Tag.findOne({ where:{id} });
    }, 
    getUserByEmail(email) { },
    addUser(user) { },
    updateUser() { },
    deleteUser() { },
}
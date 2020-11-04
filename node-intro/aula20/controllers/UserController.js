const bcrypt = require('bcrypt');
const users = require('../data/users');
const saveData = require('../utils/saveData');

module.exports = {
    create(req, res){
        res.render('creat-user');
    },

    save(req, res){
        let id = users.length + 1
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        let user = { id, ...req.body }
        users.push(user)

        saveData(users, "users.js");
    
        res.render('create-user', { cards, added: true });
    },

    login(req, res){
        res.render('login');
    }
}
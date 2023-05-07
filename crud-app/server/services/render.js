const axios = require('axios');
let wins = window.location.origin;


exports.homeRoutes = (req, res) => {
    //Make a get request to /api/users
    axios.get(`${wins}/api/users`)
        .then(function(response){
            res.render('index', {users: response.data});
        })
        .catch(err => {
            res.send(err);
        })
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get(`${wins}/api/users`, {
        params: {id:req.query.id}
    })
        .then(function (userdata) {
            res.render("update_user", { user : userdata.data})
        })
        .catch(err => {
            res.send(err);
        })
}

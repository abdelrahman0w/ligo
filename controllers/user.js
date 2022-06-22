const sqlConn = require('../databases/db');
const crypto = require

module.exports = {
  login: (req, res) => {
    var cookie = req.cookies.loggedin;
    if(cookie === undefined){
      res.render('login')
    }
    else{
      res.redirect('/~')
    }
  },
  
  getPage: (req, res) => {
    if(req.cookies.loggedin == "true") {
        res.render('hello', {username, results})
    }
    res.redirect('./login');
  },
  
  auth: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let hashed_pass = crpto.md5(pass)
    const result = await sqlConn.promise().query(`SELECT * from accounts where username = ${username} and password = ${password}`)
  
    if(username && password){
      let options = {
        maxAge: 1000 * 60 * 2,
        httpOnly: true
      }
      if(!req.cookie)
      res.cookie("loggedin", "true", options);
      res.render('hello', )
    }else{
      res.send(401);
    }
  }
}
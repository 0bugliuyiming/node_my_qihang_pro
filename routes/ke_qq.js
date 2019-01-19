var express = require('express');
var router = express.Router();

var User = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ke_qq', { user: req.session.user });
});
router.get('/user', function(req, res, next) {
    res.render('user', { user: req.session.user });
});

//注册表单提交
router.post('/register',function (req, res) {
    //1.获取表单提交的数据
    //  req.body
    //2.判断该用户是否存在
    //  如果已存在，不允许注册
    //  如果不存在，注册新建用户
    //3.发送响应
    let body = req.body;
    User.findOne({
        mobile:body.mobile
    },  function (err, data) {
        if (err) {
            return res.status(500).send('Server Error');
        }
        if(data == null) {
            new User(body).save(function (err, user ,next) {
                if (err) {
                    return res.status(500).send('Server Error');
                }
                //注册成功，使用session记录用户的登陆状态
                req.session.user = user;
                //注册成功返回当前页面
                res.redirect('/ke_qq');
            })
        }
        else {
            return res.status(300).send('用户已存在');
        }
    })
});
//登陆表单提交
router.post('/login', function (req, res) {
    let body = req.body;
    User.findOne({
        mobile:body.login_name,
        password:body.login_password
    }, function (err, user) {
        if (err) {
            //message:err.message;
            return res.status(500).send('Server Error');
        }
        if(user == null) {
            return res.status(200).send('用户或密码不正确');
        }
        else {
            req.session.user = user;

            res.redirect('/ke_qq');
        }
    })
});
//退出登陆
router.get('/logout', function (req, res) {
    req.session.user = null;
    res.redirect('/ke_qq');
});

module.exports = router;

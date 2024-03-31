const Admin = require('../models/blog/admin');
const bcrypt = require('bcrypt');

const loadLogin = async(req, res)=>{
    try{
        res.render('admin/pages/login');
    } catch(error){
        console.log(error.message);
    }
}

const verifyLogin = async(req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.pass;
        const adminData = await Admin.findOne({email:email});

        if(adminData){
            console.log("entry Check");
            // const passwordMatch = (password == adminData.password);  
            const hash = await bcrypt.hash(adminData.password, 10);
            const passwordMatch = await bcrypt.compare(password, hash);
            if(passwordMatch) {
                if(adminData.is_admin == true){
                    res.redirect('/admin/dashboard');
                } else{
                    res.redirect('admin/pages/login');
                }
            } else {
                // res.render('admin/pages/login', {message:"Email or Password is incorrect!"});
                console.log("Sai mat khau");
            }
        } else{
            console.log("entry Check false");
            res.render('admin/pages/login', {message:"Email or Password is incorrect!"});
            console.log("Sai mat khau");
        }
    } catch (error) {
        console.log(error.message);
    }
}

const admin = async(req, res)=>{
    try{
        res.render('admin/pages/dashboard');
    } catch(error){
        console.log(error.message);
    }
}

const logout = async(req, res) => {
    try{
        res.session.destroy();
        res.redirect('admin/pages/login');
    } catch(error){
        console.log(error.message);
    }
}

module.exports = {
    loadLogin,
    verifyLogin,
    admin,
    logout
}
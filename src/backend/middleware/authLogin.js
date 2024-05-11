const isLogin = async (req, res, next) => {
    try {
        if (req.cookies.user_id && req.cookies.is_admin == true) {
            next();
        }
    } catch (error) {
        console.log(error.message);
    }
}
const isLogout = async (req, res, next) => {
    try {
        if(req.session.user_id && req.session.is_admin == true) {
            res.redirect('/dashboard');
        } 
        next();
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    isLogin,
    isLogout
}
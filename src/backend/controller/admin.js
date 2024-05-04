const fetch = require('node-fetch');
const baseApi = "http://localhost:3005/api";

const loadLogin = async (req, res) => {
    try {
        if (req.session?.isAuth && req.cookies?.torken)
            res.redirect('dashboard')
        else
            res.render("admin/pages/login", { message: '' })
    } catch (error) {
        console.log(error.message);
    }
}

const verifyLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const response = await fetch(`${baseApi}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const user = await response.json();
            req.session.isAuth = true;
            res.cookie('torken', user.torken, { maxAge: 60 * 1000 })
                .cookie('username', user.name, { maxAge: 60 * 1000 })
                .cookie('user_id', user.user_id, { maxAge: 60 * 1000 })
                .redirect("dashboard");
        } else {
            throw response
        }
    } catch (error) {
        switch (error.status) {
            case 400:
                {
                    res.render('admin/pages/login', { message: "You don't have permission to access this! Contact at admin@gmail.com for help." })
                    break;
                }
            case 401:
                {
                    res.render('admin/pages/login', { message: "Email not found!" })
                    break;
                }
            case 402:
                {
                    res.render('admin/pages/login', { message: "Password is incorrect!" })
                    break;
                }
            default:
                break;
        }

    }
}

const admin = async (req, res) => {
    try {
        if (!req.cookies.torken || !req.session.isAuth) {
            res.redirect("login");
            return
        }
        res.render('admin/pages/dashboard', { username: req.cookies.username });
    } catch (error) {
        console.log(error.message);
    }
}

const logout = async (req, res) => {
    try {
        const { email, password } = req.body;
        const response = await fetch(`${baseApi}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const user = await response.json();
            req.session.isAuth = true;
            res.setHeader('Set-Cookie', `torken=${user.torken}; username=${user.name}; user_id=${user.user_id}; max-age:3600`)
        } else {
            throw response
        }
    } catch (error) {
        console.log(error)
    }

    try {
        req.session.destroy((err) => {
            res.clearCookie('connect.sid');
            res.clearCookie('torken');
            res.clearCookie('username');
            res.clearCookie('user_id');
            if (err) throw err
            res.redirect("login")
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    loadLogin,
    verifyLogin,
    admin,
    logout
}

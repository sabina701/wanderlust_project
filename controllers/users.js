const User=require("../models/user")
module.exports.signUp=async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to Wanderlust");
            res.redirect("/listings");
        });

    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};
module.exports.renderSignUpForm=(req,res)=>{
    res.render("users/signup.ejs");
}
module.exports.renderLogInForm=(req,res)=>{
    res.render("users/login.ejs");
}
module.exports.LogIn=async(req,res)=>{
    req.flash("success","welcome to wanderlust");
    let redirecturl=res.locals.redirecturl  || "/listings";
    res.redirect( redirecturl);
}
module.exports.logOut=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out");
        res.redirect("/listings");
    })};
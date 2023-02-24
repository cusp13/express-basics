exports.registerUser = (req,res)=>{
    const username = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    res.json({
        success: true,
        // name: username,
        // email: userEmail,
        // password: userPassword
    });
}
module.exports = registerUser;
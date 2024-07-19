
//register new user
//@route /api/users
//@access public  
const registerUser = async (req, res) => {
    const {name, email, password} = req.body
    console.log(req.body)

    if(!name || !email || !password){
       res.status(400)
       throw new Error('include all fields')
    }

    res.send('register route')
}

//login user
//@route /api/users/login
//@access public  
const loginUser = async (req, res) => {
    res.send('login route')
}


module.exports = {
    registerUser,
    loginUser
}
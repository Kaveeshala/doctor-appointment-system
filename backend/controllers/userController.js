//login user, register user, get user profile, update user profile, book appointments, get booked appointments, cancel appointments, payment gateway

import validator from 'validator'
import bcrypty from "bcrypt"
import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"

//api to register user
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body

        if (!name || !email || !password) {
            return res.json({success: false, message: "Missing details"})
        } 
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Enter valid email"})
        }
        if (password.length < 8) {
            return res.json({success: false, message: "Enter a strong password"})
        }

        //hashing user password
        const salt = await bcrypty.genSalt(10)
        const hashedPassword = await bcrypty.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
        res.json({success: true, token})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})      
    }
}

export {registerUser}
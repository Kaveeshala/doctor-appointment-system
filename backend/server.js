import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mogodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

//api end points
app.use('/api/admin', adminRouter)     //localhost:4000/api/admin
app.use('/api/doctor', doctorRouter)

app.use('/api/user', userRouter)

app.get('/', (eq, res) => {
    res.send("API Working")
})

app.listen(port, () => console.log("Server started", port))


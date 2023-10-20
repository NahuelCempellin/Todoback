import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { Request, Response } from 'express'
import signout from './routes/userRoutes/user.routes'
import newTask from './routes/todoRoutes/todo.routes'





const app = express()

app.set('port', process.env.PORT || 3000)


const corsOptions = {
    origin: '*', 
        optionsSuccessStatus: 200 //
  }


app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors(corsOptions))  
  

app.use(signout)
app.use(newTask)



app.get('/', ( req: Request, res: Response)=>{
    res.send(`The API is at http://localhost:${app.get('port')}` )
})


export default app
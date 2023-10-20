import User  from '../../models/userModel/user'
import { Response, Request, NextFunction } from 'express'
import bcrypt from 'bcrypt'

export async function createUser(req: Request , res: Response) {
    const {nombre,user_name, password} = req.body

    try{
        const user = new User({
            nombre: nombre,
            user_name: user_name,
            password: password,
           

        })

        await user.save()

        res.status(200).send({message: 'User created successfully'})


    }catch(err){
        console.log(err)
    }
}


export async function login(req: Request, res: Response, next: NextFunction) {
    const{ password, user_name} = req.body

    try{
        if(user_name){
            const getUser = await User.findOne({user_name})

            if(!getUser){
                res.status(500).send({message: "The user doesn't exist"})
            }else{
                if(bcrypt.compareSync(password, getUser.password)){
                    res.status(200).send({message: 'success', getUser})
                }
                else{
                    res.status(400).send({message: 'Password error'})
                }
            }
        }

    }catch(error){
        next(error)
    }

}
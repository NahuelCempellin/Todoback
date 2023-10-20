import Todo  from "../../models/todoModel/todo";
import { Request, Response, NextFunction } from "express";



export const CreateTodo = async (req: Request, res: Response, next:NextFunction) => {
    const { title, task, owner, category }= req.body


    try{
        const todo = new Todo ({
            title: title, 
            task: task,
            state: 'pending',
            owner: owner,
            category: category
        })

        await todo.save()

        res.status(200).send({message: 'Task created successfuly!'})


    }catch(error){
        next(error)
    }
}
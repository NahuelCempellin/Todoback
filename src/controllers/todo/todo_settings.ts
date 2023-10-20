import Todo from '../../models/todoModel/todo'
import { Request, Response, NextFunction } from "express";




export  const getTodos = async (req: Request, res: Response, next : NextFunction) =>{
    const {owner} = req.query

    try{
        const allTodo = await Todo.find({owner: owner})

        res.status(200).send(allTodo)

    

    }catch(error){
        next(error)
    }

}


export const todoByTitle = async (req: Request, res: Response, next : NextFunction)=>{
    const {title} = req.query

    try{
        const todo = await Todo.findOne({title: title})

        if(!todo){
            res.status(400).send({message: 'The searched task does not exist...'})
        }else{
            res.status(200).send(todo)
        }

    }catch(error){
        next(error)
    }
}

export const todoById = async (req: Request, res: Response, next : NextFunction)=>{
    const {_id} = req.query

    try{
        const todo = await Todo.findOne({_id: _id})

        if(!todo){
            res.status(400).send({message: 'The searched task does not exist...'})
        }else{
            res.status(200).send(todo)
        }

    }catch(error){
        next(error)
    }
}



export const editTodo = async (req: Request, res: Response, next: NextFunction) => {
    const { _id } = req.query;
    const { title, state, task } = req.body; 

    try {
        const todo = await Todo.findByIdAndUpdate(_id, { title, state, task }, { new: true });

        res.status(200).send(todo);
        
    } catch (error) {
        next(error);
    }
};

export const deleteTodo =async (req: Request, res: Response, next: NextFunction)=> {
    const{_id}= req.query
    try {
        const todo = await Todo.findByIdAndDelete({_id: _id});

        res.status(200).send({message:'Todo deleted successfully...',todo});
        
    } catch (error) {
        next(error);
    }

}
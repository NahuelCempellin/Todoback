import { getModelForClass, Prop, Pre, prop } from "@typegoose/typegoose";



export class Todo{
    @prop({required: true})
    title!:string
    @prop({required: true})
    task!: string
    @prop({required: true})
    state!: string
    @prop({required: true})
    category!: string
    @prop({required: true})
    owner!: string
}

const TodoModel = getModelForClass(Todo)
export default TodoModel
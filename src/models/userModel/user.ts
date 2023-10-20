import {getModelForClass, Prop, Pre} from '@typegoose/typegoose'
import bcrypt from 'bcrypt'



@Pre<User>('save',async function() {
    this.password = await bcrypt.hash(this.password,10)
})


export class User {
    @Prop({required: true})
    nombre!: string
    @Prop({required: true})
    user_name!: string
    @Prop({required: true})
    password!: string
     

}

//stock tipo_de_usuario metodo_de_pago



const UserModel = getModelForClass(User)
export default UserModel
import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'


interface UserRequest{
  name: string;
  email: string;
  password: string;
}

class CreateUserService{
  async execute({name, email, password}: UserRequest){
    // verificar se enviou um email
    if(!email){
      throw new Error('Email Incorreto')
    }
    //verificar se o email já está cadastrado na plataforma
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })
    if(userAlreadyExists){
      throw new Error('Este email já está cadastrado!')
    }

    // criptografando o password
    const passwordHash = await hash(password, 8)

    //permitir o cadastro
    const user = await prismaClient.user.create({
      data:{
        name: name,
        email: email,
        password: passwordHash
      },
      select:{
        id: true,
        name: true,
        email: true
      }
    })

    return user
  }
}

export { CreateUserService }

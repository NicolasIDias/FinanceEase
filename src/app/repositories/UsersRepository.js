const { v4 } = require('uuid')

let Users = [
  {
    id: v4(),
    name: 'Nicolas',
    email: 'nicolas@mail.com',
    phone: '123-456-789',
    cpf: '123.456.789-91'
  },
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@mail.com',
    phone: '111-111-111',
    cpf: '234.333.722-11'
  },
  {
    id: v4(),
    name: 'John Doe',
    email: 'joshn@mail.com',
    phone: '321-654-987',
    cpf: '321.654.456-66'
  }
]

class UsersRepository {
  findAll () {
    return new Promise((resolve, reject) => {
      resolve(Users)
    })
  }

  findById (id) {
    return new Promise((resolve) => resolve(
      Users.find((user) => user.id === id)
    ))
  }

  delete (id) {
    return new Promise((resolve) => {
      Users = Users.filter((user) => user.id !== id)
      resolve()
    }
    )
  }

  findByEmail (email) {
    return new Promise((resolve, reject) => resolve(
      Users.find((user) => user.email === email)
    ))
  }

  create ({
    name, email, phone, cpf
  }) {
    return new Promise((resolve) => {
      const newUser = {
        id: v4(),
        name,
        email,
        phone,
        cpf
      }

      Users.push(newUser)

      resolve(newUser)
    })
  }

  update (id, {
    name, email, phone, cpf
  }) {
    return new Promise((resolve) => {
      const updatedUser = {
        id,
        name,
        email,
        phone,
        cpf
      }
      Users = Users.map((user) => (
        Users.id === id ? updatedUser : user
      ))
      resolve(updatedUser)
    })
  }
}

module.exports = new UsersRepository()

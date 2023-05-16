const UsersRepository = require('../repositories/UsersRepository')
const validarCPF = require('./CpfValidator')

class UserController {
  async index (request, response) {
    const users = await UsersRepository.findAll()
    response.json(users)
  }

  async show (request, response) {
    const { id } = request.params
    const user = await UsersRepository.findById(id)

    if (!user) {
      return response.status(404).json({ error: 'User not found' })
    }
    response.json(user)
  }

  async store (request, response) {
    const { name, email, phone, cpf } = request.body
    const userExists = await UsersRepository.findByEmail(email)

    if (!name) {
      return response.status(400).json({ erro: 'name is required' })
    }

    if (!email) {
      return response.status(400).json({ erro: 'email is required' })
    }

    if (!phone) {
      return response.status(400).json({ erro: 'phone is required' })
    }

    if (!cpf) {
      return response.status(400).json({ erro: 'cpf is required' })
    }

    if (userExists) {
      return response.status(400).json({ error: 'This email is already in use' })
    }

    const cpfIsValid = await validarCPF(cpf)

    if (cpfIsValid === false) {
      return response.status(400).json({ erro: 'cpf is invalid' })
    } else {
      const user = await UsersRepository.create({
        name,
        email,
        phone,
        cpf
      })
      response.json(user)
    }
  }

  async update (request, response) {
    const { id } = request.params
    const { name, email, phone, cpf } = request.body

    const userExists = await UsersRepository.findById(id)

    if (!userExists) {
      return response.status(404).json({ error: 'User not found' })
    }

    if (!name) {
      return response.status(400).json({ erro: 'name is required' })
    }

    if (!email) {
      return response.status(400).json({ erro: 'email is required' })
    }

    if (!phone) {
      return response.status(400).json({ erro: 'phone is required' })
    }

    if (!cpf) {
      return response.status(400).json({ erro: 'cpf is required' })
    }

    const userExistsByEmail = await UsersRepository.findByEmail(email)

    if (userExistsByEmail && userExistsByEmail.id !== id) {
      return response.status(400).json({ error: 'This email is already in use' })
    }

    const cpfIsValid = await validarCPF(cpf)

    if (cpfIsValid === false) {
      return response.status(400).json({ erro: 'cpf is invalid' })
    } else {
      const user = await UsersRepository.update(id, {
        name,
        email,
        phone,
        cpf
      })

      response.json(user)
    }
  }

  async delete (request, response) {
    const { id } = request.params
    const user = await UsersRepository.findById(id)

    if (!user) {
      return response.status(404).json({ error: 'User not found' })
    }
    // status 200 porem sem conteudo
    await UsersRepository.delete(id)
    response.sendStatus(204)
  }
}

module.exports = new UserController()

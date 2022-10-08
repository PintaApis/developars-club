const ListUsers = ({ userRepository }) =>
async () => {
  const users = await userRepository.findAll()
  return users
}

module.exports = ListUsers
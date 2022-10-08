const ListUsers = ({ userRepository }) =>
async () => await userRepository.findAll()

module.exports = ListUsers
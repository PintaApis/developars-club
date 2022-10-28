const GetUserById = ({ userRepository }) => async(id) => userRepository.findById(id)

module.exports = GetUserById
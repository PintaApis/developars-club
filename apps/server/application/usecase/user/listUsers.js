exports.ListUsers = ({ userRepository }) =>
async () => await userRepository.findAll()
exports.GetUserById = ({ userRepository }) =>
async id => userRepository.findById(id)
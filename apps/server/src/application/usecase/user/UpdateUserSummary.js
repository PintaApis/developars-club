const UpdateUserSummary = ({ userRepository }) =>
async (userId, { summary }) => userRepository.updateSummary(userId, { summary })

module.exports = UpdateUserSummary
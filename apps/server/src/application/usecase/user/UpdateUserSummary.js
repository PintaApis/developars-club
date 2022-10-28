const UpdateUserSummary = ({ userRepository }) => async (userId, { summary }) => {
  return userRepository.updateSummary(userId, { summary })
}

module.exports = UpdateUserSummary
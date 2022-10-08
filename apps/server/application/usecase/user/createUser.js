exports.CreateUser = ({ userRepository, User}) => 
async ({ username, email, password }) => {
  const user = User({ username, email, password})
  return userRepository.persist(user)
}
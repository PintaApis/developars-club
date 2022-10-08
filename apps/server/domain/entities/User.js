exports.User = ({
  id = null,
  email,
  username,
  password,
 }) => {
  return {
    id,
    email,
    username,
    password,
  }
}
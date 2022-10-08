exports.User = ({
  id = undefined,
  email,
  username,
  password,
  photo = undefined,
  summary = undefined
 }) => {
  return {
    id,
    email,
    username,
    password,
    photo,
    summary
  }
}
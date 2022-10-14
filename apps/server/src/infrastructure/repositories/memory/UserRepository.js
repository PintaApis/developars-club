exports.UserRepository = () => {
  let lastId = 0;
  const data = [];

  const persist = async(user) => {
    user.id = `${++lastId}`

    data.push(user)

    return user
  }

  const findAll = async() => data;

  const findById = async(id) => data.find(user => user.id === id)

  const updateSummary = async(userId, { summary }) => {
    const userIndex = data.findIndex(user => user.id === userId)

    data[userIndex].summary = summary

    return data[userIndex]
  }

  return {
    persist,
    findAll,
    findById,
    updateSummary
  }
}
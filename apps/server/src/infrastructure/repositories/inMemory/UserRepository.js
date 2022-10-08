exports.UserRepository = () => {
  let lastId = 0
  const db = []
  return {
    persist: async user => {
      user.id = `${++lastId}`
      db.push(user)
      return user
    },
    findAll: async () => db,
    findById: async id => db.find(user => user.id === id),
    updateSummary: async (userId, { summary }) => {
      const userIndex = db.findIndex(user => user.id === userId)
      db[userIndex].summary = summary
      return db[userIndex]
    }
  }
}
const { v4 } = require('uuid')

const uuid = () => ({
  generate: () => v4()
})

module.exports = uuid
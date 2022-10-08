const { createContainer} = require('awilix')
const makeCommonContainer = require('./commonContainer')
const makeUserContainer = require('./userContainer')

const container = createContainer()

makeCommonContainer(container)
makeUserContainer(container)

module.exports = container

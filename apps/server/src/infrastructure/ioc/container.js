const { createContainer} = require('awilix')
const makeCommonContainer = require('./commonContainer')
const makeUserContainer = require('./userContainer')
const buildRepository = require('../repositories/index')

// eslint-disable-next-line turbo/no-undeclared-env-vars
const REPOSITORY_DRIVER = process.env.REPOSITORY_DRIVER || 'memory'

const repository = buildRepository(REPOSITORY_DRIVER);
const container = createContainer()

makeCommonContainer(container)
makeUserContainer(container, repository)

module.exports = container
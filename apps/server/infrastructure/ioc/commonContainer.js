const { asFunction } = require("awilix")
const uuid = require("../../utils/helpers/uuid")

const makeCommonContainer = container => {
  container.register({
    uuid: asFunction(uuid).singleton()
  })
}

module.exports = makeCommonContainer
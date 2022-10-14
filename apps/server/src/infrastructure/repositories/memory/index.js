const { UserRepository } = require('./UserRepository');

const MemoryRepository = () => {
  return {
    users: UserRepository
  };
}

export default MemoryRepository;
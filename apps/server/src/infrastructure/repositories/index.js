const MemoryRepository = require('./memory/index');

export default function buildRepository(driverName) {
  if (driverName === 'memory') {
    return MemoryRepository();
  }

  throw new Error(`Unsupported Repository Driver: ${driverName} `);
}
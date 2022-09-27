const DynamoDbPersistence = require('y-dynamodb');
const Y = require('yjs');

const config = {
  aws: {
    region: 'ap-east-1',
    accessKeyId: 'DUMMYIDEXAMPLE',
    secretAccessKey: 'DUMMYEXAMPLEKEY',
    endpoint: 'http://localhost:9001',
  },
  skipCreateTable: false, // skips creating table, assumes it already exists
  tableName: 'fe-yjs',
};
export const persistence = DynamoDbPersistence(config);

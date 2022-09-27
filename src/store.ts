import { RedisPersistence } from 'y-redis';
const Y = require('yjs');

const config = {
  redisOpts: {
    url: 'redis://localhost:6379',
  },
};
export const persistence = new RedisPersistence(config);

// @ts-ignore
persistence.writeState = async (name: string, doc: any) => {};

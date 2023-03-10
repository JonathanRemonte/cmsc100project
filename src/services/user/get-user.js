import { getDB } from '../../utils/db/index.js';

export const getUser = async (request, reply) => {
  const { params, username } = request;
  const { userId: id } = params;
  const db = await getDB();

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest();
  }

  const { users } = db;

  if (!users[id]) {
    return reply.notFound('User not found.');
  }

  return {
    id,
    ...users[id]
  };
};

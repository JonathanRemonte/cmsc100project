import { getDB } from '../../utils/db/index.js';

export const getComment = async (request, reply) => {
  const { params, username } = request;
  const { commentId: id } = params;
  const db = await getDB();

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest();
  }

  const { comments } = db;

  if (!comments[id]) {
    return reply.notFound();
  }

  return {
    id,
    ...comments[id]
  };
};

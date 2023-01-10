import { getDB } from '../../utils/db/index.js';

export const getComment = async (request, reply) => {
  const { params, username } = request;
  const { commentId: id, blogId: blogId } = params;
  const db = await getDB();

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest();
  }

  const { blogs } = db;

  if (!blogs[blogId].comments[id]) {
    return reply.notFound();
  }

  return {
    id,
    ...blogs[blogId].comments[id]
  };
};

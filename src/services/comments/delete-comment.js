import { getDB, saveDB } from '../../utils/db/index.js';

export const deleteComment = async (request, reply) => {
  const { params, username } = request;
  const { commentId: id } = params;
  const db = await getDB();

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest();
  }

  if (db.comments[id].username !== username) {
    return reply.forbidden('You are not the owner of the blog');
  }

  delete db.comments[id];

  await saveDB(db);

  return {
    success: true
  };
};

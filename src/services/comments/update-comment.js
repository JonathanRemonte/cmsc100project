import { getDB, saveDB } from '../../utils/db/index.js';

export const updateComment = async (request, reply) => {
  const { params, body, username } = request;
  const { commentId: id } = params;
  const { description } = body;
  const db = await getDB();

  if (!username) {
    return reply.badRequest();
  }

  if (db.comments[id].username !== username) {
    return reply.forbidden('You are not the owner of the blog');
  }

  db.comments[id].description = description || db.comments[id].description;
  db.comments[id].updatedDate = new Date().getTime();

  await saveDB(db);

  return {
    id,
    ...db.comments[id]
  };
};

import { getDB, saveDB } from '../../utils/db/index.js';

export const updateBlog = async (request, reply) => {
  const { params, body, username } = request;
  const { blogId: id } = params;
  const { title, description, comments } = body;
  const db = await getDB();

  if (!username) {
    return reply.badRequest();
  }

  if (db.blogs[id].username !== username) {
    return reply.forbidden('You are not the owner of the blog');
  }

  db.blogs[id].title = title || db.blogs[id].title;
  db.blogs[id].description = description || db.blogs[id].description;
  db.blogs[id].username = username || db.blogs[id].username;
  db.blogs[id].comments = comments || db.blogs[id].comments;
  db.blogs[id].updatedDate = new Date().getTime();

  await saveDB(db);

  return {
    id,
    ...db.blogs[id]
  };
};

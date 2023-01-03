import { getDB, saveDB } from '../../utils/db/index.js';

export const updateBlog = async (request, reply) => {
  const { params, body } = request;
  const { blogId: id } = params;
  const { title, description, username, comments } = body;
  const db = await getDB();

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

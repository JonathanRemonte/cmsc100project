import { getDB, saveDB } from '../../utils/db/index.js';
import { v4 } from 'uuid';

export const createBlog = async (request, reply) => {
  const { body, username } = request;
  const { title, description } = body;
  const db = await getDB();

  const id = v4();

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest();
  }

  const blog = {
    title,
    description,
    username,
    comments: [],
    createdDate: new Date().getTime(),
    updatedDate: new Date().getTime()
  };

  db.blogs[id] = blog;

  await saveDB(db);

  return {
    id,
    ...blog
  };
};

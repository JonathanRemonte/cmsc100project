import { getDB, saveDB } from '../../utils/db/index.js';
import { v4 } from 'uuid';

export const addComment = async (request, reply) => {
  const { params, body, username } = request;
  const { blogId } = params;
  const { description } = body;
  const db = await getDB();

  const id = v4();

  // check if there is username (meaning logged in)
  if (!username) {
    return reply.badRequest();
  }

  const comment = {
    description,
    username,
    createdDate: new Date().getTime(),
    updatedDate: new Date().getTime()
  };

  db.blogs[blogId].comments[id] = comment;

  await saveDB(db);

  return {
    id,
    ...comment
  };
};

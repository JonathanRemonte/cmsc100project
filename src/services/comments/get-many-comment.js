import { getDB } from '../../utils/db/index.js';

export const getManyComment = async (request, reply) => {
  const { query, username } = request;
  const { limit = 5 } = query;
  const db = await getDB();

  // check if ther eis username (meaning logged in)
  if (!username) {
    return reply.badRequest();
  }

  const list = [];

  const comments = Object
    .entries(db.comments)
    .map(function ([id, comment]) {
      return {
        id,
        ...comment
      };
    })
    .sort(function (comment1, comment2) {
      return comment2.createdDate - comment1.createdDate;
    })
    .filter((comment) => (username === comment.username));

  for (const comment of comments) {
    list.push(comment);
    if (list.length >= limit) {
      break;
    }
  }

  return list;
};
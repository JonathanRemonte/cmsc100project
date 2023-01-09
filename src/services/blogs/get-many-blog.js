import { getDB } from '../../utils/db/index.js';

export const getManyBlog = async (request, reply) => {
  const { query, username } = request;
  const { limit = 5 } = query;
  const db = await getDB();

  // check if ther eis username (meaning logged in)
  if (!username) {
    return reply.badRequest();
  }

  const list = [];

  const blogs = Object
    .entries(db.blogs)
    .map(function ([id, blog]) {
      return {
        id,
        ...blog
      };
    })
    .sort(function (blog1, blog2) {
      return blog2.createdDate - blog1.createdDate;
    })
    .filter((blog) => (username === blog.username));

  for (const blog of blogs) {
    list.push(blog);
    if (list.length >= limit) {
      break;
    }
  }

  return list;
};

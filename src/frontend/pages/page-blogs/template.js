import { html } from 'lit';
import '../../components/blog-component/index.js';

export function template () {
  return html`
    <style>
      .blog {
        display: list-item;
        align-items: left;
        padding: 12px;
      }
      .blog * {
        flex: 1;
      }
    </style>

    <h3><a href="/user">
      View User Info...
    </a></h3>

    <h1>
      Create New Blog
    </h1>

    <blog-component @submit-blog="${this.createBlog}"></blog-component>

    <h1>
      Blogs
    </h1>
    
    ${this.errorMessage
      // if this is an errorMessage
      ? html`
        <div class="flex-group">
          ${this.errorMessage}
        </div>
      `
      : ''}
    <div class="blog-list">
      ${this.blogs.map(blog => html`
        <div class="blog">
          <h2> Entry: </h2>
          <h3> User:
            ${blog.username}
          </h3>
          <h3> Title: 
          <a href="/blogs/${blog.id}">
            ${blog.title}
          </a></h3>
          <h3> Body:
            ${blog.description}
          </h3>
          <h3> Comments:
            <a href="/blogs/${blog.id}">
              Click here to see comments...
          </a></h3>
          <h3> Posted Date:
            ${new Date(blog.createdDate)}
          </h3>
          <h3> Updated Date:
            ${new Date(blog.updatedDate)}
          </h3>  
      `)}
    </div>
    
  `;
}

import { html } from 'lit';
import '../../components/blog-component/index.js';
import '../../components/comment-component/index.js';

export function template () {
  return html`
    <style>
      .blog {
        display: flex;
        align-items: center;
        padding: 12px;
      }
      .blog * {
        flex: 1;
      }
    </style>
    
    ${this.errorMessage
      // if this is an errorMessage
      ? html`
        <div class="flex-group">
          ${this.errorMessage}
        </div>
      `
      : ''}

      ${Object.keys(this.blog).length
        ? html`
          <div class="center">
            <h2> Title: 
              ${this.blog.title}
            </h2>
            <h3> by:
              ${this.blog.username}
            </h3>
            <p> 
              ${this.blog.description}
            </p>
            <h5> Posted Date:
              ${new Date(this.blog.createdDate)}
            </h5>
            <h5> Updated Date:
              ${new Date(this.blog.updatedDate)}
            </h5> 
            <br>
            <h4> Edit Blog:
            </h4>
            <blog-component @submit-blog="${this.updateBlog}" .blog="${this.blog}"></blog-component>
            <button @click= "${this.deleteBlog}"> Delete Blog </button> 
            <br>
            <br>
            <h2> Comments: </h2>
            
              ${this.comments.map(comment => html`
              <div class="comment">
                <h4> 
                  ${comment.username} : ${comment.description}
                </h4>
                <h5> Commented on:
                  ${comment.createdDate}
                </h5>
                <h5> Updated on:
                  ${comment.updatedDate}
                </h5>
              `)}
            <comment-component @submit-comment="${this.addComment}" .comment="${this.blog}"></comment-component>
        ` 
      : ''}
  `;
}
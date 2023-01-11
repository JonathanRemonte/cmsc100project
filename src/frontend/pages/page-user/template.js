import { html } from 'lit';

export function template () {
  return html`
    <style>
    form {
        display: block;
        width: 100%;
        max-width: 600px;
        padding: 10px;
      }
  
      form .label-input-group {
        display: block;
        padding: 10px;
      }
  
      form .flex-group {
        display: flex;
        padding: 10px;
        flex: 1;
      }
  
      form button {
        margin-right: 10px;
        margin-left: 10px;
      }

    </style>
    <form class="form_class" @submit=${this.getUser}>
    ${this.errorMessage
      // if this is an errorMessage
      ? html`
        <div class="flex-group">
          ${this.errorMessage}
        </div>
      `
      : ''}
     <h2 >
       See User Profile
     </h2>
     <div class="label-input-group">
       <label for="username">
         Enter Username:
       </label>
       <input type="text" class="field-input" placeholder="Username" id="username" name="username">
     </div>
     <div class="flex-group">
       <button>
         View User
       </button>
     </div>
    ${Object.keys(this.userData).length
        ? html`
        <p class="info"> First Name : ${this.userData.firstName}</p>
        <p class="info"> Last Name : ${this.userData.lastName}</p>
        <p class="info"> Created Date : ${new Date(this.userData.createdDate).toDateString()}</p>
        <p class="info"> Latest Update Date : ${new Date(this.userData.updatedDate).toDateString()}</p>
        `
        : ''
    }
  </form>
  `;
}
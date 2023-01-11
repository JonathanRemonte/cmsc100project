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
  <form class="form_class" @submit=${this.register}>
    ${this.errorMessage
      // if this is an errorMessage
      ? html`
        <div class="flex-group">
          ${this.errorMessage}
        </div>
      `
      : ''}
    <div class="label-input-group">
      <label for="username">
        Username:
      </label>
      <input type="text" class="field-input" placeholder="Enter username" id="username" name="username" required>
    </div>
    <div class="label-input-group">
      <label for="password">
        Password:
      </label>
      <input type="password" class="field-input" placeholder="Enter password" id="password" name="password" required>
    </div>
      <div class="label-input-group">
      <label for="firstName">
        First Name:
      </label>
      <input type="text" class="field-input" placeholder="Enter First Name" id="firstName" name="firstName" required>
    </div>
      <div class="label-input-group">
      <label for="lastName">
        Last Name:
      </label>
      <input type="text" class="field-input" placeholder="Enter Last Name" id="lastName" name="lastName" required>
    </div>
    <div class="flex-group">
      <button>
        Register
      </button>
    </div>
    <div class ="info" >
      <p>
        Had already registered? <a href="/login">Login Here</a>
      </p>
    </div>    
  </form>
  `;
}
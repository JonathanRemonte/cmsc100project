import { html } from 'lit';

export function template () {
  return html`<header>
    <h1>
      Blog App
    </h1>
    <nav>
    ${this.loggedIn
      ? html`
        <a href="/logout">
          Logout
        </a>
      `
      : html`
        <a href="/login">
          Login
        </a>
      `}
      <input type="button" value="Back" onclick="history.back()">
    </nav> 
  </header>`;
}

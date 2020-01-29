let startTime = Date.now();

let template = document.createElement('template');
template.innerHTML = /*html*/ `<slot></slot>`;

class TestEl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open',
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('test-el', TestEl);

for (let i = 0; i < 1000; i++) {
  let el = new TestEl();
  el.textContent = 'TEXT';
  document.body.appendChild(el);
}

window.requestIdleCallback(() => {
  console.log(Date.now() - startTime);
});

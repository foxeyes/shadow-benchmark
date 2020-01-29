let startTime = Date.now();

for (let i = 0; i < 1000; i++) {
  let el = document.createElement('div');
  el.style.padding = '10px';
  el.style.border = '1px solid currentColor';
  el.style.color = '#f00';
  el.textContent = 'TEXT';
  document.body.appendChild(el);
}

window.requestIdleCallback(() => {
  console.log(Date.now() - startTime);
});

let startTime = Date.now();

for (let i = 0; i < 1000; i++) {
  let el = document.createElement('div');
  el.className = 'test';
  el.textContent = 'TEXT';
  document.body.appendChild(el);
}

window.requestIdleCallback(() => {
  console.log(Date.now() - startTime);
});

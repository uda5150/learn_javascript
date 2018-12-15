var btn = document.querySelector('button');
btn.onclick = function() {
  displayMessage('Woo, this is a different message!');
}

function displayMessage (msgText, msgType) {
  var html = document.querySelector('html');

  // html要素に子要素を足す
  var panel = document.createElement('div');
  panel.setAttribute('class', 'msgBox');
  html.appendChild(panel);

  // panelに子要素を足す
  var msg = document.createElement('p');
  msg.textContent = msgText;
  panel.appendChild(msg);

  var closeBtn = document.createElement('button');
  closeBtn.textContent = 'x';
  panel.appendChild(closeBtn);

  closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
  }
};

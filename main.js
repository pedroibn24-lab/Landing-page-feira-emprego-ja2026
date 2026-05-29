document.getElementById('wppBubbleClose').addEventListener('click', function () {
  var bubble = document.getElementById('wppBubble');
  bubble.classList.add('hiding');
  setTimeout(function () { bubble.style.display = 'none'; }, 260);
});

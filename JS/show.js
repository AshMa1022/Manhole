function show(selector) {
  var para = document.querySelector(selector);
  var showDiv = document.querySelector('.show');
  const contentDiv = para.cloneNode(true);

  // Add the "fade-in" class to the cloned contentDiv
  contentDiv.classList.add('fade-in');

  if (showDiv.innerHTML != '') {
    showDiv.transform = 'translateX(-40px)'
    showDiv.innerHTML = '';
  } else {
    showDiv.innerHTML = '';
    showDiv.appendChild(contentDiv);
    contentDiv.style.transform = 'translateX(-40px)';

    // Trigger the opacity change by applying the "show" class with a slight delay
    setTimeout(function () {
      contentDiv.classList.add('show');
      contentDiv.style.transform = 'translateX(0px)';
    }, 10);
  }
}

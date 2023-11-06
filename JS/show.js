var last = '';
function show(selector) {
  var para = document.querySelector(selector);
  const upload = document.querySelector('.upload');
  var showDiv = document.querySelector('.add');
  const contentDiv = para.cloneNode(true);
  

  // Add the "fade-in" class to the cloned contentDiv
  contentDiv.classList.add('fade-in');

  if (showDiv.innerHTML != '' && last==selector) {

      showDiv.transform = 'translateX(-40px)'
      showDiv.innerHTML = '';
    

  } 
  else{
    // if(selector ==='.upload'){
    //   showDiv.innerHTML = '';
    //   console.log(para.style.opacity);
    //   if(para.style.opacity == 1){
    //     para.style.opacity = 0;
    //   }
    //   else if(para.style.opacity == 0){
    //     para.style.opacity = 1;
    //   }
      
    // }
    // else{
      showDiv.innerHTML = '';
      // upload.style.opacity =0;
      showDiv.appendChild(contentDiv);
      contentDiv.style.transform = 'translateX(-40px)';
    }

    // Trigger the opacity change by applying the "show" class with a slight delay
    setTimeout(function () {
      contentDiv.classList.add('show');
      contentDiv.style.transform = 'translateX(0px)';
    }, 10);
  
  last = selector;
}

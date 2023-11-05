
function show(selector){
    var para = document.querySelector(selector);
    var showDiv = document.querySelector('.show');
    const contentDiv = para.cloneNode(true);


    if (showDiv.innerHTML!='') {
        // The contentDiv is already in showDiv, so remove it.
        showDiv.innerHTML = '';
    } else {
        showDiv.innerHTML = '';
        
        // The contentDiv is not in showDiv, so add it.
        showDiv.appendChild(contentDiv);
    }
    
  }
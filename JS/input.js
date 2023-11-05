
localStorage.clear();
const P_hole = {condition:'',func:''};
const P_bg = {locale:'',placement:''};
const P_upon = {visitor:[]};

function input(category,label){
    
  if(category=== 'condition'){
    P_hole.condition = label;
    console.log("condition info inputted");
  }
  else if(category=== 'func')
  { 
    P_hole.func = label;
    console.log("function info inputted")
  }
  else if(category ==="locale")
  {  
    P_bg.locale = label;
    console.log("locale info inputted")
  }
  else if(category ==="placement")
  {  
    P_bg.placement = label;
    console.log("placement info inputted")
  }
  else if(category === "visitor")
  { 
    P_upon.visitor.push(label);
    console.log("visitor info inputted")
  }
  else if(category === "underneath")
  {
    P_upon.underneath = label;
    console.log("underneath info inputted")
  }
  else{
      console.log('input not success');
  }

  localStorage.setItem('P_hole', JSON.stringify(P_hole));
  localStorage.setItem('P_bg', JSON.stringify(P_bg));
  localStorage.setItem('P_upon', JSON.stringify(P_upon));
  console.log("saved to local");
}

function goToGeneratedPage() {
  window.location.href = "generated.html";
}
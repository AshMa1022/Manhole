// Get the variables from local storage and parse them
const storedP_hole = JSON.parse(localStorage.getItem('P_hole'));
const storedP_bg = JSON.parse(localStorage.getItem('P_bg'));
const storedP_upon = JSON.parse(localStorage.getItem('P_upon'));
const userImage = JSON.parse(localStorage.getItem('userImage'));

// Instantiate the variables in your new JavaScript file
const P_hole = storedP_hole || { condition: '', func: '' };
const P_bg = storedP_bg || { locale: '', placement: '' };
const P_upon = storedP_upon || { visitor: [],underneath:'' };



var filteredHole =hole;
var filteredBg = background;
var filteredItem = items;
var filteredSound = sound;


function addImage(imagesrc, zindex,isUser) {
    const bg2 = document.createElement('img');
    const content = document.querySelector(".forHover");
    bg2.src = imagesrc;
    // if(isUser){
    // bg2.style.position = 'fixed';
    // bg2.style.top = '0';
    // bg2.style.left = '0';
    // bg2.style.width = '100%';
    // bg2.style.height = '100%';
    // bg2.style.objectFit = 'contain';
    // }

    // Apply CSS styles for image positioning
    bg2.style.position = 'fixed';
    bg2.style.top = '0';
    bg2.style.left = '0';
    bg2.style.width = '100%';
    bg2.style.height = '100%';
    bg2.style.objectFit = 'cover';
    bg2.style.zIndex = zindex;

    // Apply opacity transition
    bg2.style.opacity = 0; // Start with 0 opacity
    bg2.style.transition = 'opacity 0.3s ease'; // Transition opacity with a 0.3s ease effect

    // Append the image to the document
    if(isUser){
        bg2.classList.add(".hole");
        
    }
    content.appendChild(bg2);

    // Trigger the opacity change by setting opacity to 1 with a slight delay
    setTimeout(() => {
        bg2.style.opacity = 1;
    }, 10);
}

function generate(){
    
    if(P_hole.condition !=''){
    filteredHole = hole.filter((dict) => dict.condition === P_hole.condition);}
    if(P_hole.func !=''){
        filteredHole = filteredHole.filter((dict) => dict.func === P_hole.func);}

    if(P_bg.locale!=''){
        filteredBg = filteredBg.filter((dict) => dict.street === P_bg.locale);
    }
    if(P_bg.placement!=''){
        filteredBg = filteredBg.filter((dict) => dict.placement === P_bg.placement);
    }
    if(P_upon.visitor!=''){
        filteredItem = filteredItem.filter
        ((dict) => dict.visitor.every(element => P_upon.visitor.includes(element)));
    }
    if(P_upon.underneath!=''){
        filteredSound = filteredSound.filter
        ((dict) =>dict.underground === P_upon.underneath);
    }


    const randomIndex = Math.floor(Math.random() * filteredBg.length);
    // Get the image object at the random index
    // Set the background image using CSS
    document.body.style.backgroundColor = "black";

    // Set the background

    setTimeout(() => {
        const random = Math.floor(Math.random() * filteredBg.length);
        addImage(filteredBg[random].image,20,false);
      }, 300);

    setTimeout(() => {
        
        // if(userImage !=''){
        //     addImage(userImage,0,true);
        // }
        
        const randomh = Math.floor(Math.random() * filteredHole.length);
        addImage(filteredHole[randomh].image,30,true);
    
    }, 600);

    setTimeout(() => {
        for(let i = 0; i< Math.floor(Math.random() * filteredItem.length);i++){
        addImage(filteredItem[Math.floor(Math.random() * filteredItem.length)].image,40,true);
        }
    }, 900);
    const randomv = Math.floor(Math.random() * filteredSound.length);
    const voice = filteredSound[randomv].path;
    console.log(voice);

  
}

function input(category,label){
    
    if(category=== 'condition'){P_hole.condition = label;}
    else if(category=== 'func'){ P_hole.func = label;}
    else if(category ==="locale"){  P_bg.locale = label;}
    else if(category ==="placement"){  P_bg.placement = label;}
    else if(category === "visitor"){ P_upon.visitor.push(label);}
    else if(category === "underneath") {P_upon.underneath = label;}
    else{
        console.log('input not success');
    }
}

generate(); 
const element = document.querySelector('.hole');
console.log(element);

element.addEventListener('mouseenter', function() {
    element.classList.add('hover');
});

element.addEventListener('mouseleave', function() {
    element.classList.remove('hover');
});


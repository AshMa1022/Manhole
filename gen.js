const hole =[
    {
        image:"hole/1.png",
        func:"drain",
        condition:"okay"
    },
    {
        image:"hole/2.png",
        func:"drain",
        condition:"okay"
    },
    {
        image:"hole/3.png",
        func:"electric",
        condition:"bad"
    },
    {
        image:"hole/5.png",
        func:"drain",
        condition:"okay"
    },
    {
        image:"hole/6.png",
        func:"drain",
        condition:"good"
    },
    {
        image:"hole/7.png",
        func:"drain",
        condition:"okay"
    },
    {
        image:"hole/8.png",
        func:"communication",
        condition:"good"
    },
    {
        image:"hole/9.png",
        func:"electric",
        condition:"good"
    },
    {
        image:"hole/10.png",
        func:"drain",
        condition:"okay"
    },
    {
        image:"hole/11.png",
        func:"electric",
        condition:"bad"
    },
    {
        image:"hole/12.png",
        func:"drain",
        condition:"bad"
    },
    {
        image:"hole/13.png",
        func:"drain",
        condition:"okay"
    }

]
const background = [
    {
        image:"bg/bg.png",
        street:"benefit"
    },
    {
        image:"bg/bg2.png",
        street:"north",
    },
    {
        image:"bg/bg3.png",
        street:"benefit",
    },

    {
        image:"bg/bg4.png",
        street:"north",
    },

    {
        image:"bg/bg5.png",
        street:"north",
    }


]

const P_hole = {condition:'',func:''};
const P_bg = {locale:'',placement:''};
const P_upon = {visitor:[],underneath:''};

var filteredHole =hole;
var filteredBg = background;
var filteredUpon = [];


function generate(){
    

    if(P_hole.condition !=''){
    filteredHole = hole.filter((dict) => dict[condition] == P_hole.condition);}
    if(P_hole.func !=''){
        filteredHole = filteredHole.filter((dict) => dict.func == P_hole.func);}

    if(P_bg.locale!=''){
    filteredBg = filteredBg.filter((dict) => dict.street == P_bg.locale);
    }
    if(P_bg.placement!=''){
    filteredBg = filteredBg.filter((dict) => dict[placement] == P_bg.placement);
    }


    const randomIndex = Math.floor(Math.random() * filteredBg.length);
    // Get the image object at the random index
    // Set the background image using CSS
    document.body.style.backgroundColor = "white";
  
    const bg2 = document.createElement('img');

    // Set the source and other attributes
    const random = Math.floor(Math.random() * filteredBg.length);
    bg2.src = filteredBg[random].image; // Replace 'your-image.jpg' with the image URL

    // Set the image to cover the entire viewport height
    bg2.style.position = 'fixed';
    bg2.style.top = '0';
    bg2.style.left = '0';
    bg2.style.width = '100%';
    bg2.style.height = '100%';
    bg2.style.objectFit = 'cover'; 
    bg2.style.zIndex = 20;
    document.body.appendChild(bg2);

const image = document.createElement('img');

// Set the source and other attributes
const randomh = Math.floor(Math.random() * filteredHole.length);
image.src = filteredHole[randomh].image; // Replace 'your-image.jpg' with the image URL

// Set the image to cover the entire viewport height
image.style.position = 'fixed';
image.style.top = '0';
image.style.left = '0';
image.style.width = '100%';
image.style.height = '100%';
image.style.objectFit = 'cover'; 
image.style.zIndex = 30;
document.body.appendChild(image);

}

function input(category,label){
    
    if(category=== 'condition'){     P_hole.condition = label;}
    else if(category=== 'func'){ P_hole.func = label;}
    else if(category ==="locale"){  P_bg.locale = label;}
    else if(category === "visitor"){ P_upon.visitor.push(label);}
    else if(category === "underneath") {P_upon.underneath = label;}
    else{
        console.log('input not success');
    }
}




const P_hole = {condition:'',func:''};
const P_bg = {locale:'',placement:''};
const P_upon = {visitor:[]};

var filteredHole =hole;
var filteredBg = background;
var filteredItem = items;

// var filteredUpon = [];

function addImage(imagesrc,zindex){
    const bg2 = document.createElement('img');
    bg2.src = imagesrc; // Replace 'your-image.jpg' with the image URL

    // Set the image to cover the entire viewport height
    bg2.style.position = 'fixed';
    bg2.style.top = '0';
    bg2.style.left = '0';
    bg2.style.width = '100%';
    bg2.style.height = '100%';
    bg2.style.objectFit = 'cover'; 
    bg2.style.zIndex = zindex;
    document.body.appendChild(bg2);

}

function arraysContainSameElements(array1, array2) {
    // Convert the arrays to sets
    const set1 = new Set(array1);
    const set2 = new Set(array2);

    // Check if the size of the sets is the same (i.e., they have the same number of elements)
    if (set1.size !== set2.size) {
        return false;
    }

    // Check if every element in set1 is also in set2
    for (const item of set1) {
        if (!set2.has(item)) {
            return false;
        }
    }

    // If all checks pass, the arrays contain the same elements
    return true;
}

function generate(){
    
    if(P_hole.condition !=''){
    filteredHole = hole.filter((dict) => dict.condition == P_hole.condition);}
    if(P_hole.func !=''){
        filteredHole = filteredHole.filter((dict) => dict.func == P_hole.func);}

    if(P_bg.locale!=''){
        filteredBg = filteredBg.filter((dict) => dict.street == P_bg.locale);
    }
    if(P_bg.placement!=''){
        filteredBg = filteredBg.filter((dict) => dict.placement == P_bg.placement);
    }
    if(P_upon.visitor!=''){
        filteredItem = filteredItem.filter
        ((dict) => P_upon.visitor.every(element => dict.visitor.includes(element)));
    }


    const randomIndex = Math.floor(Math.random() * filteredBg.length);
    // Get the image object at the random index
    // Set the background image using CSS
    document.body.style.backgroundColor = "black";
  
    

    // Set the background
    const random = Math.floor(Math.random() * filteredBg.length);
    addImage(filteredBg[random].image,20);


    // Set the hole
    const randomh = Math.floor(Math.random() * filteredHole.length);
    addImage(filteredHole[randomh].image,30);

    const randomi = Math.floor(Math.random() * filteredItem.length);
    for(let i = 0; i< Math.floor(Math.random() * filteredItem.length);i++){
        addImage(filteredItem[randomi+i].image,40);
    }



}


function input(category,label){
    
    if(category=== 'condition'){     P_hole.condition = label;}
    else if(category=== 'func'){ P_hole.func = label;}
    else if(category ==="locale"){  P_bg.locale = label;}
    else if(category ==="placement"){  P_bg.placement = label;}
    else if(category === "visitor"){ P_upon.visitor.push(label);}
    else if(category === "underneath") {P_upon.underneath = label;}
    else{
        console.log('input not success');
    }
}


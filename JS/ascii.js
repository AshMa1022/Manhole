document.querySelector('.ascii').innerHTML = textquestion;


function parameterInput(wordInput){
  updateText(wordInput); 
  setInterval(function() {
    updateText(wordInput);
  }, 800);
}

function removeAscii(){
    addSpace();
    console.log('thispart working')
    for(let i =0; i<100; i++){
    setInterval(function() {
      addSpace();
      console.log('interval working!')
    }, 0.1);
  }
}

function updateText(wordInput) {
  const textArray = wordInput.split('');
  const numberOfLetters = wordInput.length;
  for (let i = 0; i < 10; i++) {
    replaceRandomSpansWithText(textArray, numberOfLetters); // Pass the random color to replaceRandomSpansWithText
  }
}

function addSpace(){
  console.log('removing')
  const numberOfLetters = 1;
  for (let i = 0; i < 7; i++) {
    replaceRandomSpansWithText('   ', numberOfLetters); // Pass the random color to replaceRandomSpansWithText
  }
}

function replaceRandomSpansWithText(text, x) {
  const asciiSpans = document.querySelectorAll('.ascii span');
  const filteredSpans = Array.from(asciiSpans).filter(span => span.textContent.trim() !== '');

  const randomStart = Math.floor(Math.random() * (filteredSpans.length - x + 1));
  var num = 0;

  for (let i = randomStart; i < randomStart + x; i++) {
    const span = filteredSpans[i];
    span.textContent = text[num];
    span.style.fontWeight = '700';
    span.style.color = 'black'; // Set the same color for all letters in the array
    num++;

    setTimeout(() => {
      span.classList.add('transitioning');
      span.style.fontWeight = '300';
      span.style.color = 'black';
    }, 1000);
  }
}

function getRandomColor() {
  const randomNumber = Math.floor(Math.random() * 4);

  switch (randomNumber) {
    case 0:
      return 'red';
    case 1:
      return 'orange';
    case 2:
      return 'blue';
    case 3:
      return 'green';
    default:
      return 'unknown';
  }
}

function generateTime(){
  removeAscii();
  setTimeout(() => {
    goToGeneratedPage();
    console.log('to another page')
  }, 1500);

}
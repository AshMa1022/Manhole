document.querySelector('.ascii').innerHTML = textquestion;


// const inputElements = document.querySelectorAll('.wordInput');

// inputElements.forEach(function(inputElement) {
//   inputElement.addEventListener('keyup', function(event) {
//     if (event.key === 'Enter' || event.keyCode === 13) {

//       const num = inputElement.getAttribute('data-id');
//       updateText(num, textColor); // Pass the random color to updateText
//       setInterval(function() {
//         updateText(num, textColor); // Pass the random color to updateText
//       }, 800);
//     }
//   });
// });

function parameterInput(wordInput){
  updateText(wordInput); 
  setInterval(function() {
    updateText(wordInput);
  }, 800);
}

function updateText(wordInput) {
  const textArray = wordInput.split('');
  const numberOfLetters = wordInput.length;
  for (let i = 0; i < 10; i++) {
    replaceRandomSpansWithText(textArray, numberOfLetters); // Pass the random color to replaceRandomSpansWithText
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

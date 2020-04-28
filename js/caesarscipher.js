const form = document.querySelector('form');
const submittedWord = document.querySelector('#submitted-word');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
  // GET INPUT
  let input = submittedWord.value;

  // CIPHER INPUT WITH ROT13 FUNCTION
  let ciphered = rot13(input);

  // DISPLAY MESSAGE
  result.innerHTML = `Result: ${ciphered}`;

  // WILL STOP THE REDIRECT
  e.preventDefault();
});

// // CLEAR INPUT
// submittedWord.value = '';

// function input(e) {
//   // GET INPUT
//   console.log(submittedWord.value);

//   e.preventDefault();
// }

// ===================================================
// CAESAR CIPHER FUNCTION
// ===================================================
function rot13(str) {
  // CONVERT STRING TO ARRAY SO WE CAN ITERATE THROUGH IT.
  let strArr = str.split('');

  let rot13Arr = [];

  for (let i = 0; i < strArr.length; i++) {
    let letterRegex = /[A-Za-z]/;

    // CONDITION TO CONVERT IF INDEX IS A LETTER
    if (letterRegex.test(strArr[i])) {
      let charCode = strArr[i].charCodeAt();
      let rot13 = charCode - 13;

      // CONDITION IF CHARCODE LESS THAN 65(A). NOTE: 90(Z)
      if (rot13 < 65) {
        let numberOfLetters = 26;
        rot13 += numberOfLetters;
      }

      let rot13Converted = String.fromCharCode(rot13);
      rot13Arr.push(rot13Converted);
    } else {
      rot13Arr.push(strArr[i]);
    }
  }

  let rot13String = rot13Arr.join('');

  return rot13String;
}

// TEST FUNCTION
// console.log(rot13('SERR PBQR PNZC'));

// Write a function in whatever language you want that takes a list of strings,
// and creates a new string made up of all the original strings' characters
// in alternating order. If any of the strings are shorter than others, then spaces should be used where
// the characters are missing

const newString = (arr) => {
  let returnedString = '';
  let longest = 0;
  let count = 0;
  
  arr.forEach(index => {
      if (index.length > longest) {
          longest = index.length;
      };
  })
  
  while ( count < longest ) {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i].charAt(count) === "") {
              returnedString += " ";
          } else {
              returnedString += arr[i].charAt(count);
          }
      }
      count++;
  }
  return returnedString;
}
function firstWord(s) {
  // If string is empty, return empty string
  if (s === "") return "";

  // Remove leading spaces
  s = s.trimStart();

  // Find first space
  const index = s.indexOf(" ");

  // If no space found, return entire string
  if (index === -1) {
    return s;
	  
  }

  // Return substring up to first space
  return s.substring(0, index);
}


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

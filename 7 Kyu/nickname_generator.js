// Nickname GeneratorWrite a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.If the 3rd letter is a consonant, return the first 3 letters.

function nicknameGenerator(name){
    if (name.length < 4) {
        return 'Error: Name too short'
    } else if(name[2].match(/[aeiou]/gi)){
        return name.slice(0,4)
    } else {
        return name.slice(0,3);
    }
  }
var input = document.getElementById('latin');

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById('myBtn').click()
    }
});

function translatePigLatin(str) {
    if (/\s/.test(str)) {
      return "Error! Cannot translate sentences";
    }
  let regex = /^[^aeiou]+/g;
    let newstr = str.match(regex);
  if (newstr) {
    let finalstring = str.split("").splice(newstr[0].length).join("");
    return finalstring + newstr + "ay"+"\n*oink*";
  } else {
    return str + "way";
  }
}

function submit() {
    let latin = document.getElementById("latin").value;
    const textOutput = document.getElementById("textArea");
    textOutput.innerHTML = translatePigLatin(latin)
}


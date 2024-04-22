var input = document.querySelector("#input input")

document.querySelector("#input i").addEventListener("click", function () {
  var copyText = document.querySelector("#input input")
  if (copyText.value == "") {
    copyText.classList.add("shake")
    setTimeout(() => {
      copyText.classList.remove("shake")
    }, 1000);
  }
  else {
    copyText.select()
    copyText.setSelectionRange(0, 9999999)
    document.execCommand("copy")
    copyText.blur()
  }
})

// document.querySelector("#input i").addEventListener("click", function copyPass() {
//    var inputField = document.querySelector("#input input")
//   if (inputField.value = "") {
//     inputField.classList.add("shake")
//     setTimeout(() => {
//       inputField.classList.remove("shake")
//     }, 1000);
//   }
//   else {
//     inputField.select()
//     inputField.setSelectionRange(0, 999999999)
//     document.execCommand("copy")
//     inputField.blur()
//   }
// })

function genPass() {
  // var passNum = 12;
  var clutter = "";
  var clutter2 = "";

  var upperCase = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

  var lowerCase = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];

  var num = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
  ]

  var symbols = [
    "@", "#", "₹", "_", "&", "-", "+", "(", ")", "/", "*", "!", "?", "%", "^", ">", "<", "{", "}", "[", "]"
  ];

  clutter += lowerCase[Math.floor(Math.random() * lowerCase.length)] + num[Math.floor(Math.random() * num.length)] + symbols[Math.floor(Math.random() * symbols.length)] + upperCase[Math.floor(Math.random() * upperCase.length)];

  var allChar = [...upperCase, ...lowerCase, ...num, ...symbols];

  for (var i = 0; i < 3; i++) {
    clutter2 += allChar[Math.floor(Math.random() * allChar.length)];
  };
  var mainClutter = clutter + clutter2
  passArr = [mainClutter].sort();
  // DOM work afterwards...   
  input.value = [...passArr]
};

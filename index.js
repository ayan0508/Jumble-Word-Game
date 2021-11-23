const guess = document.querySelector("input");
const msg = document.querySelector(".msg");
const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
const high = document.querySelector(".high");
const current = document.querySelector(".current");
const score = document.querySelector(".score");
let highscroce = 0;
let currentscroce = 0;
//console.log(current);
rand_letter = "";
play = false;
let word_list = [
  "python",
  "java",
  "php",
  "mysql",
  "dotnet",
  "apple",
  "banana",
  "orange",
  "strawberry",
  "mango",
  "dragon",
  "nodejs",
  "mongodb",
];
//const length = word_list.length;

const creatword = () => {
  let ran_no = Math.floor(Math.random() * word_list.length);
  let show_word = word_list[ran_no];
  // console.log(ran_no);
  return show_word;
};

btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess Now";
    score.classList.remove("hidden");
    // high.textContent = "High-Score=0";
    // current.textContent = "Current-Score=0";
    guess.classList.remove("hidden");
    copm = creatword();
    //console.log(copm);
    new_word = copm.split("");
    rand_letter = new_word.sort();
    msg.innerHTML = `The Word: ${rand_letter.join("")}`;
    //console.log(rand_letter);
  } else {
    //console.log("ayan");
    let user_word = guess.value;
    //console.log(user_word);
    //console.log(copm);
    if (user_word == copm) {
      // highscroce+=1;
      currentscroce += 1;
      highscroce += 1;
      //console.log("you win");
      // console.log(user_word);
      play = false;
      msg.innerHTML = `It is correct👍👌: ${user_word}`;
      current.textContent = `Current-Score=${currentscroce}`;
      high.textContent = `High-Score=${highscroce}`;
      btn.innerHTML = "Start Again";
      guess.classList.add("hidden");
      guess.value = "";
    } else {
      msg.innerHTML = `It is not correct😢🤔try again🤞: ${rand_letter.join(
        ""
      )}`;
      highscroce = currentscroce;
      high.textContent = `High-Score=${highscroce}`;
      currentscroce -= 1;
      current.innerHTML = `Current-Score=${currentscroce}`;
      guess.value = "";
    }
  }
});
btn1.addEventListener("click", function () {
  play = false;
  btn.innerHTML = "click here to start";
  guess.classList.add("hidden");
  // msg.classList.add("hidden");
  msg.textContent = "";
  high.textContent = "High-Score=0";
  current.textContent = "Current-Score=0";
  //score.classList.add("hidden");
});

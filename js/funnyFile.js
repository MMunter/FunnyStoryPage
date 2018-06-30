function hide(story) {
    document.getElementById(story).style.display = "none";
}

function show(story) {
    document.getElementById(story).style.display = "block";
}

function button(story, funcName){
    document.getElementById(story).addEventListener("click", funcName);
}

function pickStory(that) {
  if (that.value == 1) {
      show("vows");
      hide("j&j");
      hide("humpty");
      console.log("I'm working");
  }
  else if (that.value == 2){
      show("j&j");
      hide("vows");
      hide("humpty");
  }
  else if (that.value == 3){
      show("humpty");
      hide("vows");
      hide("j&j");
  }
  else if (that.value == 0){
      hide("vows");
      hide("j&j");
      hide("humpty");
  }
}


function story1(){
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let noun1 = document.getElementById("noun1").value;
    let noun2 = document.getElementById("noun2").value;
    let adj = document.getElementById("adj").value;
    let adj2 = document.getElementById("adj2").value;
    let noun3 = document.getElementById("noun3").value;
    let noun4 = document.getElementById("noun4").value;
    let noun5 = document.getElementById("noun5").value;
    let verb = document.getElementById("verb").value;
   document.getElementById("demo").innerHTML = "I, " + name1 + ", take thee, " + name2 + ", to be my wedded " + noun1 + ", to have and to hold from this " + noun2 + " forward, for " + adj + ", for " + adj2 + ", for richer, for poorer, in " + noun3 + " and in " + noun4 + ", til " + noun5 + " do us " + verb + ".";
}

//Button for story #1
button("play1", story1);

function story2(){
    let jnoun1 = document.getElementById("jnoun1").value;
    let jverb1 = document.getElementById("jverb1").value;
    let jnoun2 = document.getElementById("jnoun2").value;
    let jnoun3 = document.getElementById("jnoun3").value;
    let jverb2 = document.getElementById("jverb2").value;
    document.getElementById("demo").innerHTML = "Jack and Jill went up the " + jnoun1 + " to " + jverb1 + " a pail of " + jnoun2 + ". Jack fell down and broke his " + jnoun3 + " and Jill came " + jverb2 + " after.";
}

//Button for story #2
button("play2", story2);

function story3(){
    let hnoun1 = document.getElementById("hnoun1").value;
    let hadj1 = document.getElementById("hadj1").value;
    let hnoun2 = document.getElementById("hnoun2").value;
    let hnoun3 = document.getElementById("hnoun3").value;
    let hnoun4 = document.getElementById("hnoun4").value;
    document.getElementById("demo").innerHTML = "Humpty Dumpty sat on a " + hnoun1 + ". Humpty Dumpty had a " + hadj1 + " " + hnoun2 + ". All the king's " + hnoun3 + " and all the king's " + hnoun4 + " couldn't put Humpty together again."
}

//Button for Story #3
button("play3", story3);



function hideStory(story) {
    document.getElementById(story).style.display = "none";
}

function showStory(story) {
    document.getElementById(story).style.display = "block";
}

function button(story, funcName){
    document.getElementById(story).addEventListener("click", funcName);
}

function pickStory(that) {
  if (that.value == 1) {
      showStory("vows");
      hideStory("j&j");
      hideStory("neighbor");
  }
  else if (that.value == 2){
      showStory("j&j");
      hideStory("vows");
      hideStory("neighbor");
  }
  else if (that.value == 3){
      showStory("neighbor");
      hideStory("vows");
      hideStory("j&j");
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

// function story3(){
//     document.getElementById("demo").innerHTML = "Dear Neighbor, %n I know you've heard sounds from my apartment lately. You were probably wondering what they are. Well, they are coming from my new pet " + pnoun1 + " named " + pname + ". " + pname + " is very active at times, especially when I serve " + pfood + ".";
// }



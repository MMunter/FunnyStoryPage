function hideStory(story) {
    document.getElementById(story).style.display = "none";
}

function button(story, funcName){
    document.getElementById(story).addEventListener("click", funcName);
}

function getId(word){
    document.getElementById(word);
}



function pickStory(that) {
  if (that.value == 1) {
      document.getElementById("vows").style.display = "block";
      hideStory("j&j");
      hideStory("neighbor");
  }
  else if (that.value == 2){
      document.getElementById("j&j").style.display = "block";
      hideStory("vows");
      hideStory("neighbor");
  }
  else if (that.value == 3){
      document.getElementById("neighbor").style.display = "block";
      hideStory("vows");
      hideStory("j&j");
  }
  else if (that.value == 0){
      hideStory("vows");
      hideStory("j&j");
      hideStory("neighbor");
  }
}


function story1(){
    let name1 = getId("name1").value;
    let name2 = getId("name2").value;
    let noun1 = getId("noun1").value;
    let noun2 = getId("noun2").value;
    let adj = getId("adj").value;
    let adj2 = getId("adj2").value;
    let noun3 = getId("noun3").value;
    let noun4 = getId("noun4").value;
    let noun5 = getId("noun5").value;
    let verb = getId("verb").value;
   document.getElementById("demo").innerHTML = "I, " + name1 + ", take thee, " + name2 + ", to be my wedded " + noun1 + ", to have and to hold from this " + noun2 + " forward, for " + adj + ", for " + adj2 + ", for richer, for poorer, in " + noun3 + " and in " + noun4 + ", til " + noun5 + " do us " + verb + ".";
}

//Button for story #1
button("play1", story1);

function story2(){
    let jnoun1 = getId("jnoun1").value;
    let jverb1 = document.getElementById("jverb1").value;
    let jnoun2 = document.getElementById("jnoun2").value;
    let jnoun3 = document.getElementById("jnoun3").value;
    let jverb2 = document.getElementById("jverb2").value;
    document.getElementById("demo").innerHTML = "Jack and Jill went up the " + jnoun1 + " to " + jverb1 + " a pail of " + jnoun2 + ". Jack fell down and broke his " + jnoun3 + " and Jill came " + jverb2 + " after.";
}

//Button for story #2
button("play2", story2);

function story3(){
    document.getElementById("demo").innerHTML = "Dear Neighbor, %n I know you've heard sounds from my apartment lately. You were probably wondering what they are. Well, they are coming from my new pet " + pnoun1 + " named " + pname + ". " + pname + " is very active at times, especially when I serve " + pfood + ".";
}



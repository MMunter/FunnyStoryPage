function pickStory(that) {
  if (that.value == 1) {
      document.getElementById("story1").style.display = "block";
  }
  else {
      document.getElementById("story1").style.display = "none";
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

document.getElementById("play").addEventListener("click", story1);
/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let domain = [];
  let pronoun = ["the", "our"];
  let adj = ["small", "big"];
  let noun = ["jogger", "racoon"];
  let domEnd = [".com", ".net"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domEnd.length; l++) {
          domain.push(" " + pronoun[i] + adj[j] + noun[k] + domEnd[l]);
        }
      }
    }
  }

  console.log(domain);
  document.getElementById("domain.results").innerHTML = domain;
};

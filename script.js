document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("click",()=>{
    document.getElementById("loader").style.display="flex";
  });
});

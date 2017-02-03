function turnCard(clicked_id){
  document.getElementById(clicked_id).style.transform = 'rotateY(180deg)';
  if (document.getElementById(clicked_id).style.transform === 'rotateY(180deg)') {
    setTimeOut(function(){document.getElementById(clicked_id).style.transform = 'rotateY(0deg)';}
  }, 1000);
}
var player1 = prompt("Enter the name of first player")
var player2 = prompt("Enter the name of second player")
$('#grabme').text(`${player1}: it is your turn, please pick a column to drop your blue chip.`)


// fuction changes the text
function text_changer() {
  if(horizontal() || vertical() || diagonal()){
    if($('#grabme').text() === `${player1}: it is your turn, please pick a column to drop your blue chip.`){
      $('#grabme').text(`${player1} has won!Refresh your browser to play again`)}
    else{
      $('#grabme').text(`${player2}has won!Refresh your browser to play again`)

    }
return ;
}

  if($('#grabme').text() === `${player1}: it is your turn, please pick a column to drop your blue chip.`){
    $('#grabme').text(`${player2}: it is your turn, please pick a column to drop your red chip.`)}
  else{
    $('#grabme').text(`${player1}: it is your turn, please pick a column to drop your blue chip.`)

  }
}
// fills the right circle with circle
function color_changer(num){
  //console.log("check");
  var col_no = num%7
  if($('#grabme').text() === `${player1}: it is your turn, please pick a column to drop your blue chip.`){
    color = 'blue';
  }else{color = 'red';}
  for (var i = col_no + 35; i>= 0 ; i=i-7) {
    if ($('td').eq(i).css('background') === "rgb(128, 128, 128) none repeat scroll 0% 0% / auto padding-box border-box"){
      $('td').eq(i).css('background',color) ;
      //console.log("check");
      break;
    }
  }
}

//on click
$('td').on("click",function(event){
  color_changer(Array.prototype.indexOf.call($('td'),$(this)[0] ));//event.target
  text_changer();
  
})

//function horizontal
function horizontal() {
  var i
  var j
  var k
  for (i=0; i <= 35; i+=7 ){
    for (j = 0;j < 4 ; j++){
      if ($('td').eq(i+j).css('background') === $('td').eq(i+j+1).css('background') && $('td').eq(i+j+1).css('background') === $('td').eq(i+j+2).css('background') && $('td').eq(i+j+2).css('background') === $('td').eq(i+j+3).css('background')){
          if ($('td').eq(i+j).css('background') ==="rgb(255, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"|| $('td').eq(i+j).css('background') === "rgb(0, 0, 255) none repeat scroll 0% 0% / auto padding-box border-box"){
            console.log("horizontal");
            console.log("You won starting at this row,column");
            console.log(`(${(i-(i%7))/7 + 1},${j+1})`);
            return 1;
          }
          //console.log('check');
        }
      }

        }
        return 0;
  }

// check vertical
function vertical() {
  var i
  var j
  var k
  for (i=0; i <=21; i+=7 ){
    for (j = 0;j < 7 ; j++){
      if ($('td').eq(i+j).css('background') === $('td').eq(i+j+7).css('background') && $('td').eq(i+j+7).css('background') === $('td').eq(i+j+14).css('background') && $('td').eq(i+j+14).css('background') === $('td').eq(i+j+21).css('background')){
          if ($('td').eq(i+j).css('background') ==="rgb(255, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"|| $('td').eq(i+j).css('background') === "rgb(0, 0, 255) none repeat scroll 0% 0% / auto padding-box border-box"){
            console.log("vertical");
            console.log("You won starting at this row,column");
            console.log(`(${(i-(i%7))/7 + 1},${j+1})`);
            return 1;
          }
          //console.log('check');
        }
      }

        }
        return 0;
  }
// check diagonal
function diagonal() {
  var i
  var j
  var k
  for (i=0; i <=14; i+=7 ){
    for (j = 0;j < 4 ; j++){
      if ($('td').eq(i+j).css('background') === $('td').eq(i+j+7+1).css('background') && $('td').eq(i+j+7+1).css('background') === $('td').eq(i+j+14+2).css('background') && $('td').eq(i+j+14+2).css('background') === $('td').eq(i+j+21+3).css('background')){
          if ($('td').eq(i+j).css('background') ==="rgb(255, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"|| $('td').eq(i+j).css('background') === "rgb(0, 0, 255) none repeat scroll 0% 0% / auto padding-box border-box"){
            console.log("diagonal down right");
            console.log("You won starting at this row,column");
            console.log(`(${(i-(i%7))/7 + 1},${j+1})`);
            return 1;
          }
          //console.log('check');
        }
      }

        }
        for (i=21; i <=35; i+=7 ){
          for (j = 0;j < 4 ; j++){
            if ($('td').eq(i+j).css('background') === $('td').eq(i+j+1-7).css('background') && $('td').eq(i+j+1-7).css('background') === $('td').eq(i+j+2-14).css('background') && $('td').eq(i+j+2-14).css('background') === $('td').eq(i+j+3-21).css('background')){
                if ($('td').eq(i+j).css('background') ==="rgb(255, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"|| $('td').eq(i+j).css('background') === "rgb(0, 0, 255) none repeat scroll 0% 0% / auto padding-box border-box"){
                  console.log("diagonal up right");
                  console.log("You won starting at this row,column");
                  console.log(`(${(i-(i%7))/7 + 1},${j+1})`);
                  return 1;
                }
                //console.log('check');
              }
            }

              }
        return 0;
}

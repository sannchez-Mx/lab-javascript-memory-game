var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  
  memoryGame.shuffleCards();
  
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
   
  var lastClicked;
  
  
  // Add all the div's to the HTML
  $("#memory_board").html(html);
   
  // Bind the click event of each element to a function

    $(".back").click(function() {
      if (memoryGame.pickedCards.length < 2) {
        $(this).toggleClass("back front");
        $(this).next().toggleClass("back front");
         //console.log($(this).attr("name"));
         memoryGame.pickedCards.push($(this));
      };

      if (memoryGame.pickedCards.length === 2) {
        if (memoryGame.checkIfPair(
          memoryGame.pickedCards[0].attr("name"),
          memoryGame.pickedCards[1].attr("name")
        ))
        {
          memoryGame.pickedCards = [];
        } 
        else {
          setTimeout(function() {
            $(memoryGame.pickedCards[0]).toggleClass("back front");
            $(memoryGame.pickedCards[0]).next().toggleClass("back front");
            $(memoryGame.pickedCards[1]).toggleClass("back front");
            $(memoryGame.pickedCards[1]).next().toggleClass("back front");
            memoryGame.pickedCards = [];
          }, 1000)
        }
      };

      $("#pairs_clicked").text(memoryGame.pairsClicked);
      $("#pairs_guessed").text(memoryGame.pairsGuessed);
       if (memoryGame.isFinished()) return setTimeout(function () {
        location.reload();
      }, 100)
    });
  });



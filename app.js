var jquery = require('jquery');

function getRandomInt(max){
    return Math.floor(Math.random()*max)
}

function randomizeCharacter(){
  let name = Math.random().toString(36).substring(7);
  jquery("#character-name").html(name);
  jquery("#char-strength").html(getRandomInt(10).toString());
  jquery("#char-int").html(getRandomInt(10).toString());
};

jquery('#mybutton').on('click', () =>{
    randomizeCharacter();
})

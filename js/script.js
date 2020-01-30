let songOne = {
  name:"Mood Swings",
  artist:"A boogie wit da hoodie",
  length: 3,
  link : "https://www.youtube.com/watch?v=8-xqc0M8C6s"
};

let songTwo = {
  name:"Who needs love",
  artist:"Trippie Redd",
  length: "2:38",
  link: "https://www.youtube.com/watch?v=WuSMyJZs7qk"
};

let songThree ={
name: "Rich and Blind",
artist: "Juice Wrld",
length: 4,
link:"https://www.youtube.com/watch?v=DRN2jnlXewE"
};

let songNames = [songOne,songTwo,songThree];
songNames.forEach(function(song) {
  $(".Songs").append("<p>"+ song.name + "</p>");
});

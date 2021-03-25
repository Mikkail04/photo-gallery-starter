let games = [
  "https://steamcdn-a.akamaihd.net/steam/apps/814380/capsule_616x353.jpg?t=1576898087",
  "https://cdn-prod.scalefast.com/public/assets/user/122595/image/5243deb55a7ee9587ad2db9298e96ca5.jpg",
  "https://upload.wikimedia.org/wikipedia/en/e/ed/Dark_Souls_II_cover.jpg",
  "https://s1.gaming-cdn.com/images/products/2364/orig/dark-souls-remastered-cover.jpg"
];
let newGame;

$("button").click(function() {
  newGame = $("input").val();

  $(".gallery").empty();
  games.push(newGame);
  for (let game of games) {
    $(".gallery").append(`<img src= ${game}>`);
  }
});

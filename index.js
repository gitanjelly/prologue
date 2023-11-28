var book1titles = ["Life of Pi", "Charlie and the Chocolate Factory", "Matilda", "Hunger Games", "Maze Runner", "Harry Potter", "Divergent", "Julius Caesar","Immortals of Meluha","How To Train Your Dragon"]
var book2titles = ["Jack and the Beanstalk", "Merchant of Venice", "Jurasic Park", "Alice in Wonderland", "Devil Wears Prada","IT","Princess Diaries","Lord of The Rings","Diary of a Wimpy Kid","Alchemist"]

$(".bookGen").click(function() {
    var book1 = book1titles[Math.floor((Math.random()*book1titles.length))];
    var book2 = book2titles[Math.floor((Math.random()*book2titles.length))];

    document.querySelector(".book1").innerHTML = book1;
    document.querySelector(".book2").innerHTML = book2;
});
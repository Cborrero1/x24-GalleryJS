var chico = [
  {description: "Upper Park",
  picture: "http://bidwellpark.org/wp-content/uploads/2014/04/BidwellChicoCreek.jpg",
  from: "bidwellpark.org"},
  
  {description: "Wildwood Park",
  picture: "http://www.chicorec.com/__ccms_gallery_images/a35672a0-5c4e-416c-a737-da90bd4af7a4.jpg",
  from: "chicorec.com"},
  
  {description: "Chico State",
  picture: "http://www.csuchico.edu/cob/images/kendall-hall.jpg",
  from: "csuchico.edu"},
  
  {description: "Donut Nook",
  picture: "http://californiathroughmylens.com/wp-content/uploads/2015/09/Donut-Hook-6-640x480.jpg",
  from: "californiathroughmylens.com"},
  
  {description: "Hooker Oak Park",
  picture: "http://www.chicorec.com/pictures/parks-facilities/350Hooker-Oak-Sign.jpg",
  from: "chicorec.com"}
  ];
var current;

function shuffleGallery(){
var index = chico.length;
var rand;
do {
rand = Math.floor(Math.random() * index);
}
while (chico[rand] == current);
current = chico[rand];
console.log(chico[rand]);
document.getElementById("picture").src = current.picture;
document.getElementById("caption").innerHTML = current.description;
document.getElementById("source").innerHTML = "Courtesy of " + current.from;
}

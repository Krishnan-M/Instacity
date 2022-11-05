var button = document.getElementById("ab"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = count + " Likes";
};

var button1 = document.getElementById("dis"),
  count1 = 0;
button1.onclick = function() {
  count1 += 1;
  button1.innerHTML = count1 + " Dislikes";
};

var sub = document.getElementById("sub");
sub.onclick = function() {
    alert("Submit");
};

var ins = document.getElementById("ins");
ins.onclick = function() {
    alert("Insert");
};


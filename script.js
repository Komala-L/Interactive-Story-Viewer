const arr = [
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kdC2lNvpnK-JwzqA86dLqB73PJPSiIx6jg&s",
        story:"https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-109660/Levi-Ackermann-Red-moon.jpg"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZVDng0qo7vpNQ3SAjGbUyCSylbO12Y990g&s",
        story:"https://i.pinimg.com/736x/59/fd/d7/59fdd7911ea53ac52da945287ebebced.jpg"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgELjXvxstwvmGAiaGcrHSbjz9Jc1kNLIQHA&s",
        story:"https://i.pinimg.com/736x/8d/f7/74/8df77403b70e8cb69b9212d06743bb8a.jpg"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVHTrZfz6Xn65b0Zwg6JKY-ppA30YHhVDew&s",
        story:"https://culltique.in/cdn/shop/files/LightYagami_Kira_darkaesthetics.jpg?v=1713526382&width=1445"},
]

var storiya = document.querySelector("#storiya")

var clutter = "";
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`;
});

storiya.innerHTML = clutter;

storiya.addEventListener("click", function(dets) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function() {
         document.querySelector("#full-screen").style.display = "none"
    },2000)
});
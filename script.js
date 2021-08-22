let Images = [
    `background-image: url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')`,
    `background-image: url('https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80')`,
    `background-image: url('https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')`,
    `background-image: url('https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80')`,
    `background-image: url('https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')`,
    `background-image: url("https://p4.wallpaperbetter.com/wallpaper/251/835/643/aenami-digital-art-eclipse-sun-wallpaper-preview.jpg")`,
    `background-image: url("https://www.camhotel.com.tr/uploads/ulkemizin-dort-bir-yanindan-guzel-manzara-fotograflari.jpg")`,
    `background-image: url("https://static.daktilo.com/sites/367/uploads/2020/10/31/281da668a96e2e4c-1604163873-1604163885.jpg")`,
    `background-image: url("https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg")`,
    `background-image: url("https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE")`
];

let left = document.getElementById("left");
let right = document.getElementById("right");
let output = document.getElementById("output");
let text = document.querySelector("h1");
let body = document.body;
let closeBtn = document.querySelector(".btn-close");

closeBtn.addEventListener('click', ()=>{
    window.close();
})

let x = 0;

right.addEventListener('click', ()=> {
    text.style.display = 'none';
    x++;
    Images.length < x ?
    x = Images.length:
    asosiyFunksiya();
})

left.addEventListener('click', ()=> {
    x--;
    x<0?
    x=0:
    asosiyFunksiya();
})

function asosiyFunksiya() {
    if(Images.length > x && x > -1){
        body.style = Images[x];
        output.style = Images[x];
    } 
    if(x == 0) {
        left.disabled = true;
    }
    else if(x == Images.length -1) {
        right.disabled = true;
    }
    else {
        right.disabled = false;
        left.disabled = false;
    }
}



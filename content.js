let bigSuzeImages = [
    "https://upload.wikimedia.org/wikipedia/commons/8/80/Dr._Suzanne_Fortier.png",
    "https://upload.wikimedia.org/wikipedia/commons/6/63/Global_Summit_on_Merit_Review%2C_May_2012_%288745511760%29_%28crop%29.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Sph-_Awra7gQ18XyRELInFq_nF-5RMa_QA&usqp=CAU",
    "https://www.theglobeandmail.com/resizer/M7cHTq_GPflDRRkFsninFgeqzvQ=/600x400/filters:quality(80):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/tgam/6DLWJLDNKFFLNOL64US2A3OZCY.JPG",
    "http://mctavishradish.weebly.com/uploads/3/8/1/7/38170345/3285217.jpg?479"
];

const imgs = document.getElementsByTagName("img");
for (let i=0; i<imgs.length; i++){
    const randomImage = Math.floor(Math.random() * 6);
    imgs[i].src = bigSuzeImages[randomImage];
}

const headers = document.getElementsById("video-title");
for(let i=0; i<headers.length; i++){
    headers[i].innerText = "BigSuze";
}



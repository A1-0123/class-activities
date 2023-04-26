let images = [
    "https://images.unsplash.com/photo-1679678691006-0ad24fecb769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1682478695074-9e47f09a7459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1679678691014-eba529defb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2969&q=80",
    "https://images.unsplash.com/photo-1682408878479-422b920ab756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80"
];

// instead of images array, use api call to get list of images and put inside of carousel

let index = 0;

function showImage() {
    $("#img-carousel").attr("src", images[index]);
}

function nextImage() {
    index++;
    if(index >= images.length) {
        index = 0;
    }
    showImage();
}

function prevImage(){
    index--;
    if(index < 0){
       index = images.length - 1; 
    }
    showImage();
}

$("#next").click(() => nextImage())

$("#prev").click(() => prevImage())
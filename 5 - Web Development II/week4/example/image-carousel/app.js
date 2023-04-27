let images = [
    "https://images.unsplash.com/photo-1679678691006-0ad24fecb769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1682478695074-9e47f09a7459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1679678691014-eba529defb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2969&q=80",
    "https://images.unsplash.com/photo-1682408878479-422b920ab756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80"
];
let ACCESS_KEY = "PWZZ9jK96vQTc041FYbaNUdR6SQ0Z2Uspi8luqDaD3M"
let PEXELS_API_KEY = "563492ad6f91700001000001129c3c3d2fe541eabad2a2f949bc4b01"
let URL = "https://api.unsplash.com/photos/?page=3&client_id="
let PEXEL_URL = "https://api.pexels.com/v1/curated?per_page=10/"
let index = 0;
let imagesFromURL = [];

// function getImageArray(callback) {
//     $.get(URL + ACCESS_KEY, (data) => {
//         // console.log(data);
//         let newArr = data.map((item) => {
//             return item.urls.regular
//         })
//         imagesFromURL = [...newArr];
//         callback(imagesFromURL);
//         // console.log(newArr);
//     });
// }

function getImageArray () {
    return new Promise(function (resolve, reject) {
        $.ajax(
            {
                url: PEXEL_URL,
                headers: { "Authorization": PEXELS_API_KEY },
                success: (data) => {
                    let newArr = data.photos.map(item => {
                        return item.src.medium
                    })

                    resolve(newArr)
                }
            }, 
        );
    })
}

// $.get(URL + ACCESS_KEY, (data) => {
//     // console.log(data);
//     let newArr = data.map((item) => {
//         return item.urls.regular
//     })
//     imagesFromURL = [...newArr];

//     function showImage() {
//         $("#img-carousel").attr("src", imagesFromURL[index]);
//     }
    
//     function nextImage() {
//         index++;
//         if(index >= imagesFromURL.length) {
//             index = 0;
//         }
//         showImage();
//     }
    
//     function prevImage(){
//         index--;
//         if(index < 0){
//            index = imagesFromURL.length - 1; 
//         }
//         showImage();
//     }
    
//     $("#next").click(() => nextImage())
    
//     $("#prev").click(() => prevImage())
// });



// getImageArray(function (images) {
// })

getImageArray().then(images => {
    console.log(images);
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
})


// console.log(imagesFromURL);




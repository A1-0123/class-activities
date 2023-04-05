const form = document.querySelector("#tweet-form");
const tweetInput = document.querySelector("#tweet-input");
const tweetContainer = document.querySelector("#tweet-container");
const remainingTextLength = document.querySelector("#remaining");

// 280-character limit,

tweetInput.addEventListener("keyup", (event) => {
    remaining.textContent = event.target.value.length;

    if(event.code === "Enter"){
        form.dispatchEvent(new Event("submit"));
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const tweetValue = tweetInput.value;

    if(!tweetValue){
        return
    }

    const tweetDate = new Date().toLocaleDateString();
    const avatarUrl = `https://robohash.org/${tweetValue}.png/?set=set3`

    const tweet = `
        <div class="tweet">
            <div class="tweet--header">
                <img class="avatar" src="${avatarUrl}" alt="avatar"/>
            </div>
            <div class="tweet--body">
                <p class="username">User</p>
                <p>${tweetValue}</p>
                <p class="date">Date: ${tweetDate}</p>
            </div>
        </div>
    `;

    tweetContainer.insertAdjacentHTML("afterbegin", tweet);
    tweetInput.value = "";
})
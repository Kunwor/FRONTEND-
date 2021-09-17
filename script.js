const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const ran_btn = document.getElementById('ran_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const ran_result = document.getElementById('ran_result');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);
ran_btn.addEventListener('click', getRandom);

function getRandomCat () {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            cat_result.innerHTML = `<img src=${ data.file } alt="cat" />`
        });
}

function getRandomDog () {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRandomDog();
            }
            else {
                dog_result.innerHTML = `<img src=${ data.url } alt="dog" />`;
            }
        });
}
function getRandom () {
    for (let i = 1; i < 5; i++) {

        if (i < 2) {
            setTimeout(fetch('https://aws.random.cat/meow')
                .then(res => res.json())
                .then(data => {
                    ran_result.innerHTML = `<img src=${ data.file } alt="cat" />`
                }), 10000);
            console.log("test");

        } else {
            fetch('https://random.dog/woof.json')
                .then(res => res.json())
                .then(data => {
                    if (data.url.includes('.mp4')) {

                    }
                    else {
                        ran_result.innerHTML = `<img src=${ data.url } alt="dog" />`;
                    }
                });
            console.log("test1");
            break;
            console.log("test2");
        }
    }
}
$(document).ready(function () {
    $("#clickMe").click(function () {
        $(this).hide();
    });
});

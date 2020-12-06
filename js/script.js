const input = document.querySelector('#input-text');
const submit = document.querySelector('#btn-submit');
const output = document.querySelector('#output-text');

const url = 'https://api.funtranslations.com/translate/minion.json';

function createUrl(text){
    return url+"?text="+text;
};

function errorHandler(error){
    console.log("Error Occured: ", error);
}

function submitHandler() {
    const inputText = input.value;

    fetch(createUrl(encodeURI(inputText)))
        .then(response => response.json())
        .then(json => {
            var translation = json.contents.translated;
            output.innerText = translation;
        })
        .catch(errorHandler)
};

submit.addEventListener('click', submitHandler);


window.onload = () => {

    const formJson = document.getElementById('create-json');
    const copyButton = document.getElementById('copy-clipboard');
    const textArea = document.getElementById('json');

    formJson.addEventListener('submit',(e) => {
        e.preventDefault();
        const number = e.target.number.value;
        console.log(number);
        textArea.value += `${number},`;
        formJson.reset();
    });

    copyButton.addEventListener('click',(e) => {
        if(textArea.value){
            navigator.clipboard.writeText(textArea.value);
        }
    });

    const addToJson = (existingJson, numberToAdd, isDefaultNumber) => {
        let numJson = {};
        let numType = 'numbers';
        if(isDefaultNumber)[
            numType = 'default'
        ]
        if(!existingJson){
            // define new JSON schema
            numJson
        }
        //
    }

}

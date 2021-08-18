function generatePin() {
    const pin = Math.round(Math.random() * 9000) + 1000;
    const displayPin = document.getElementById('display-pin');
    const displayPinValue = displayPin.value;
    displayPin.value = pin;
    document.getElementById('notify-error').style.display = 'none';
    document.getElementById('notify-success').style.display = 'none';

};

document.getElementById('key-pad').addEventListener('click', function (event) {
    const keyValue = event.target.innerText;
    const previousDisplayKey = document.getElementById('display-keyvalue');
    const previousdisplayKeyValue = previousDisplayKey.value;
    if (isNaN(keyValue)) {
        if (keyValue == 'C') {
            previousDisplayKey.value = '';
        }
    }
    else {
        previousDisplayKey.value = keyValue;
        const newDisplayDisplayKeyValue = previousdisplayKeyValue + keyValue;
        previousDisplayKey.value = newDisplayDisplayKeyValue;
    }
});

function validation() {
    const displayKeyValue = document.getElementById('display-keyvalue').value;
    const displayPinValue = document.getElementById('display-pin').value;
    if (displayKeyValue == displayPinValue) {
        document.getElementById('notify-error').style.display = 'none';
        document.getElementById('notify-success').style.display = 'block';
    }


    else {
        let tryAvailableText = document.getElementById('try-available');
        let tryAvailable = parseInt(tryAvailableText.innerText);
        if (tryAvailable > 0) {
            document.getElementById('notify-error').style.display = 'block';
            document.getElementById('notify-success').style.display = 'none';
            tryAvailableText.innerText = tryAvailable - 1;
        }
        else {
            document.getElementById('validate-btn').disabled = true;
            document.getElementById('generate-btn').disabled = true;
            document.getElementById('notify-finished').style.display = 'block';
        }
    };

    // else {
    //     document.getElementById('notify-error').style.display = 'block';
    //     document.getElementById('notify-success').style.display = 'none';
    //     let tryAvailableText = document.getElementById('try-available');
    //     let tryAvailable = parseInt(tryAvailableText.innerText);
    // }
};
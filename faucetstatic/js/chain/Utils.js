function disableButton(button) {
    button.find('span.spinner').show();
    button.attr('disabled', true);
}

function enableButton(button) {
    button.find('span.spinner').hide();
    button.attr('disabled', false);
}
document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('codeInput');
    const copyButton = document.getElementById('copyButton');

    // Generate a random code
    const randomCode = generateRandomCode();
    codeInput.value = randomCode;

    copyButton.addEventListener('click', function() {
        codeInput.select();
        document.execCommand('copy');
        alert('Copied to clipboard!');
    });
});

function generateRandomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // let result = '';
    // for (let i = 0; i < 32; i++) {
    //     result += characters.charAt(Math.floor(Math.random() * characters.length));
    // }
    return characters;
}
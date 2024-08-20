// 获取弹窗和按钮元素
const popupButton = document.getElementById('popupButton');
const customPopup = document.getElementById('customPopup');
const closePopup = document.getElementById('closePopup');
const address1 = document.getElementById('address1');
const address2 = document.getElementById('address2');

// 点击按钮显示弹窗
popupButton.addEventListener('click', function() {
    customPopup.style.display = 'block';
});

// 点击关闭按钮隐藏弹窗
closePopup.addEventListener('click', function() {
    customPopup.style.display = 'none';
});

// 复制地址1
address1.addEventListener('click', function() {
    copyToClipboard(address1.textContent);
    alert('SOL Address copied!');
});

// 复制地址2
address2.addEventListener('click', function() {
    copyToClipboard(address2.textContent);
    alert('BSC Address copied!');
});

// 复制到剪贴板功能
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

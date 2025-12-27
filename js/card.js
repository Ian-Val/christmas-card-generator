const searchParams = new URLSearchParams(window.location.search);

const userName = searchParams.get('name');
const userStatus = searchParams.get('status');
const userMessage = searchParams.get('message');
const sender = searchParams.get('sender');

const merryName = document.getElementById('merry-name');
const merryImg = document.getElementById('santa-img');
const merryMessage = document.getElementById('merry-message');
const merrySender = document.getElementById('merry-sender');

merryName.textContent = userName;
merryMessage.textContent = userMessage;
merrySender.textContent = sender;
if (userStatus === 'naughty') {
    merryImg.src = './imgs/santa-naughty.png';
    document.body.className = 'naughty';
} else if (userStatus === 'nice') {
    merryImg.src = './imgs/santa-nice.png';
} else {
    console.log('Input Error');
}

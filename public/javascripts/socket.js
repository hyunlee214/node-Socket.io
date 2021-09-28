'use strict';

const socket = io();

const chatForm = document.getElementById('chat-form');
const chatBox = document.getElementById('messages');
// 회원 이름
const nickname = document.getElementById('#nickname');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = e.target.m.value
    socket.emit('chat message', message);
    e.target.m.value = '';
})

socket.on('chat message', (message) => {
    chatBox.appendChild(makeMessage(message, true));
})

const makeMessage = (message, isOthers) => {
    const msgBox = document.createElement('div');
    const classname = isOthers ? "others-message-wrapper" : "my-message-wrapper";
    msgBox.className = classname;
    msgBox.innerText = message;

    return msgBox;
}
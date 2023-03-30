const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');


// check localstorage 
const username = localStorage.username ? localStorage.username:'Anon';

// class instance
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming',username);


newChatForm.addEventListener('submit', e=>{
    e.preventDefault();

    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
            .then(()=> newChatForm.reset())
});

// update username

// newNameForm.addEventListener('submit',e=>{
//     e.preventDefault();
//     // const newName = newNameForm.name.value.trim();
//     chatroom.updateName(username);
//     newNameForm.reset();
//     // show and hide the update mssg
//     updateMssg.innerHTML = `Your Name was Updated ${newName}`;
//     setTimeout(()=> updateMssg.innerHTML='',3000);
// });


rooms.addEventListener('click', e=>{    
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id')); 
        chatroom.getChats(chat =>chatUI.render(chat));
    }
})









// get chats and render

chatroom.getChats( data=>{
    chatUI.render(data);    
});
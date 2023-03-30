// adding new chat dcoument
// setting up a real-time listener to get chat
// udating the useranme
// updating the room

class Chatroom {
    constructor(room, username){
      this.room = room;
      this.username = username;
      this.chats = db.collection('chats');
      this.unsub;
    } 

    async addChat(message){
        // format a chat object
        const now = new Date();

        const chat = {
            message: message,
            username:this.username,
            room:this.room,
            created_at:firebase.firestore.Timestamp.fromDate(now)
        }
        const response = await this.chats.add(chat);
        return response;
    } 
    
    getChats(cb){
       this.unsub = this.chats
        .where('room','==',this.room)
        .orderBy('created_at')        
        .onSnapshot( snapshot=> { 
            snapshot.docChanges().forEach((change)=>{
                if(change.type === 'added'){
                   cb(change.doc.data());
                }
            })
        })
    }

    updateName(){   
        const user = localStorage.username ? localStorage.username:'Anon';
        this.username = user;
        // localStorage.setItem('username',user);
    }

    updateRoom(room){
        this.room = room;
        if(this.unsub){
        this.unsub();
        }
        // console.log('Room Updated');
    }
  }
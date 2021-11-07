const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
    _state:{
        profilePage:{
            postData:[ 
                {id: 1, message: 'Love you!!!', likesCount: 16},
                {id: 2, message: 'You my best friend!', likesCount: 17, avatar: 'https://sun9-68.userapi.com/impg/qnmaaSfod82sSfWbP8WfyWStAp4NIndcKcYKBA/sz29WKMsTcI.jpg?size=810x1080&quality=96&sign=a0d0e94be8b05145c1ea0cef45b1d3bd&type=album'},
                {id: 3, message: 'Hello, how are you?', likesCount: 87, avatar:'https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg'},
            ],
            newPostText: ''
    },
    
        messagesPage: {
            messagesData: [    
                {id: 1, message: 'hi'},
                {id: 2, message: 'is'},
                {id: 3, message: 'yo'},
                {id: 4, message: 'name'},
                {id: 5, message: 'Hi'},
                {id: 6, message: 'How are you?'},
            ],
            dialogsData:[    
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Ekaterina'},
                {id: 3, name: 'Danil'},
                {id: 4, name: 'Vitalya'},
                {id: 5, name: 'Misha'},
                {id: 6, name: 'Oleg'},
            ],
            newMessageBody: "",
    },
    
        sideBarPage:{
            sideBarData: [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Ekaterina'},
                {id: 3, name: 'Danil'}
            ]
        }
    }, //GLOBAL STATE
    _callSubscriber(){
        console.log('state chenge')
    }, // Проверка изменинй _state


    getState(){
        return this._state;
    }, // Вернуть _state из store
    subscribe(observer){
        this._callSubscriber = observer
    },

    // addNewMessage(){
    //     let newMessage = {
    //         id: 7,
    //         message: this._state.messagesPage.newMessage
    //     }
    //     this._state.messagesPage.messagesData.push(newMessage);
    //     this._state.messagesPage.newMessage = '';
    //     this._callSubscriber(this._state)
    // },// Добавление сообщения во влкдаке сообщения
    // updateNewMessage(newMessageText){
    //     this._state.messagesPage.newMessage = newMessageText;
    //     this._callSubscriber(this._state)
    // },

    dispatch(action){ // { type: 'ADD-POST'  }
        if (action.type === 'ADD-POST'){//Добавление поста на стену в профиле
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state['profilePage']['newPostText'] = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE){
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messagesData.push({id:7, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const sendMessageCreator = () => ({type:SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body:body})

export const addPostActionCreator = () =>{
    return{
        type: 'ADD-POST'
    }
}
  
export const updateNewPostTextActionCreator = (text) =>{
    return{
      type: 'UPDATE-NEW-POST-TEXT', newText : text 
    }
}


window.store = store;
export default store


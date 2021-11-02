let rerenderEntireTree = () =>{
    console.log('state chenge')
}
let state = {
    profilePage:{
        postData:[ 
            {id: 1, message: 'Love you!!!', likesCount: 16},
            {id: 2, message: 'You my best friend!', likesCount: 17},
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
        newMessage: '',
        dialogsData:[    
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Ekaterina'},
            {id: 3, name: 'Danil'},
            {id: 4, name: 'Vitalya'},
            {id: 5, name: 'Misha'},
            {id: 6, name: 'Oleg'},
        ],
},

    sideBarPage:{
        sideBarData: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Ekaterina'},
            {id: 3, name: 'Danil'}
        ]
    }
}
export const addPost = () => {
    let newPost = {
        id: 7,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
} 

export const updateNewPostText = (newText) => {
    state['profilePage']['newPostText'] = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export const addNewMessage = () =>{
    let newMessage = {
        id: 7,
        message: state.messagesPage.newMessage
    }
    state.messagesPage.messagesData.push(newMessage);
    state.messagesPage.newMessage = '';
    rerenderEntireTree(state)
}
export const updateNewMessage = (newMessageText) => {
    state.messagesPage.newMessage = newMessageText;
    rerenderEntireTree(state)
}
export default state


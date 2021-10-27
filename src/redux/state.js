
let state = {
    profilePage:{
        postData:[ 
            {id: 1, message: 'Love you!!!', likesCount: 16},
            {id: 2, message: 'You my best friend!', likesCount: 17},
            {id: 3, message: 'Hello, how are you?', likesCount: 87},
        ],
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
},

    sideBarPage:{
        sideBarData: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Ekaterina'},
            {id: 3, name: 'Danil'}
        ]
    }
}
export let addPost = (postMessage) => {
    let newPost = {
        id: 7,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.postData.push(newPost);

}
export default state
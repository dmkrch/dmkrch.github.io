let firebaseConfig = {
    apiKey: "AIzaSyCyzyvm-E5ZWDe7HoY7ajP7tZoAeS-w7w8",
    authDomain: "my-new-project-d8a90.firebaseapp.com",
    projectId: "my-new-project-d8a90",
    storageBucket: "my-new-project-d8a90.appspot.com",
    databaseURL: "https://my-new-project-d8a90-default-rtdb.firebaseio.com/",
    messagingSenderId: "172943704675",
    appId: "1:172943704675:web:9c18f5d699c2926ff8ae56",
    measurementId: "G-NN8GSEB3J2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let database = firebase.database();

function writeBoard(user, board_name, board_color) {
    // Get a key for a new Board.
    let newBoardKey = firebase.database().ref().child('users/' + user.uid + "/boards").push().key;
    database.ref('users/' + user.uid + "/boards/" + newBoardKey).set({
        title: board_name,
        color: board_color
    });
    console.log("Board created");
}

function updateBoard(user, boardKey, boardName, boardColor) {
    database.ref('users/' + user.uid + "/boards/" + boardKey).update({
        title: boardName,
        color: boardColor
    });
    console.log("Board updated");
}

function deleteBoard(user, boardKey) {
    database.ref('users/' + user.uid + "/boards/" + boardKey).remove();
    console.log("Board deleted");
}

function createList(user, boardUid, listTitle, listIndex) {
    let newListUid = database.ref().child('users/' + user.uid + "/boards/" + boardUid + "/lists").push().key;
    database.ref('users/' + user.uid + "/boards/" + boardUid + "/lists/" + newListUid).set({
        title: listTitle,
        index: listIndex
    });
    console.log("List created");
}

function updateList(user, boardKey, listUid, listTitle, listIndex) {
    database.ref('users/' + user.uid + "/boards/" + boardKey + "/lists/" + listUid).update({
        title: listTitle,
        index: listIndex
    });
    console.log("List updated");
}

function deleteList(user, boardKey, listUid) {
    database.ref('users/' + user.uid + "/boards/" + boardKey + "/lists/" + listUid).remove();
    console.log("List deleted");
}

function createCard(user, boardUid, listUid, cardTitle, cardDescription, cardColor, cardExpireDate) {
    let path = 'users/' + user.uid + "/boards/" + boardUid + "/lists/" + listUid + "/cards";
    let newCardUid = database.ref().child(path).push().key;
    database.ref(path + "/" + newCardUid).set({
        title: cardTitle,
        description: cardDescription,
        color: cardColor,
        expire_date: cardExpireDate
    });
    console.log("Card created");
}

function updateCard(user, boardUid, listUid, cardUid, cardTitle, cardDescription, cardColor, cardExpireDate) {
    let path = 'users/' + user.uid + "/boards/" + boardUid + "/lists/" + listUid + "/cards/" + cardUid;
    database.ref(path).update({
        title: cardTitle,
        description: cardDescription,
        color: cardColor,
        expire_date: cardExpireDate
    });
    console.log("Card updated");
}

function deleteCard(user, boardKey, listUid, cardUid) {
    database.ref('users/' + user.uid + "/boards/" + boardKey + "/lists/" + listUid + "/cards/" + cardUid).remove();
    console.log("List deleted");
}

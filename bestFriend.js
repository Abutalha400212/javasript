const friends = ['nadim', 'rasel', 'tuhin', 'asaduzzaman', 'rokonuz', 'pintu', 'rubel', 'sakil'];

let biggestName = friends[0];
function biggestFriend(friends){
    for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    if (friend.length > biggestName.length) {
        biggestName = friend;
        console.log(biggestName);
    }
}

}
biggestFriend(friends);

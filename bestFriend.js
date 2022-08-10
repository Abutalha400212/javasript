const friends = ['nadim', 'rasel', 'tuhin', 'asaduzzaman', 'rokonuz', 'pintu', 'rubel', 'sakil'];
const reversed = friends.join(' + ');
console.log(reversed);

function biggestFriend(friends){
    let select = [];
    for (let i = friends.length-1 ; i>= 0 ; i--) {
    const friend = friends[i];
select.push(friend);
}
const reversed2 = select.join(' + ')
return reversed2;
}
console.log(biggestFriend(friends));

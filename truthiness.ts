// Truthiness might not be word you'll find in the dictionary, but its very much something you'll hear about in javascript.
// in javascript we can use any expression in conditionals  &&s, ||s, if ststements, boolean negations (!), and more . as an example , if statements dont expect their condition to always have the type boolean

function getusersonlineMessage(numuseronline: number){
    if(numuseronline){
        return `there are ${numuseronline} online now!`;
    }
    return "Nobody's here.:(";
}
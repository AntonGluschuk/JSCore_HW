/* 
    Find a Chair
    So you've found a meeting room - phew! You arrive
    there ready to present, and find that someone has
    taken one or more of the chairs!! You need to find
    some quick.... check all the other meeting rooms to
    see if all of the chairs are in use.

    Your meeting room can take up to 8 chairs. need will
    tell you how many have been taken. You need to find
    that many.

    Find the spare chairs from the array of meeting
    rooms. Each meeting room array will have the number
    of occupants as a string. Each occupant is represented
    by 'X'. The room array will also have an integer
    telling you how many chairs there are in the room.

    You should return an array of integers that shows how
    many chairs you take from each room in order, up until
    you have the required amount.

    example: [['XXX', 3], ['XXXXX', 6],
    ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

    result -- > [0, 1, 3] (no chairs free in room 0,
        take 1 from room 1, take 3 from room 2. No need
        to consider room 4 as you have your 4 chairs already.

    If you need no chairs, return 'Game On'.
    If there aren't enough spare chairs available,
    return 'Not enough!'

    Examples:

    meeting([['XXX', 3], ['XXXXX', 6],
    ['XXXXXX', 9]], 4) ---> [0, 1, 3]

    meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2],
    ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) --->
    [0, 0, 1, 2, 2]

    meeting([['XX', 2], ['XXXX', 6],
    ['XXXXX', 4]], 0) ---> 'Game On'

    meeting([['XX', 2], ['XXXX', 6],
    ['XXXXX', 4]], 4) ---> 'Not enough!'
*/

const needAmountOfChairs = 4;
const otherMeetingRooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]];

function getSingleRoomFreeChairs(singleRoom) {       
    let persons = singleRoom[0].length;   
    return persons < singleRoom[1] ? singleRoom[1] - persons : 0;
}

function refactorFreeRoomChairs(allRooms, chairs) {
    let refactoredFreeChairs = [];
    let sumOfChairs = 0;

    for(let i = 0; i < allRooms.length; i++) {
        if(sumOfChairs >= chairs) {
            break;            
        } else {
            sumOfChairs += allRooms[i];
            refactoredFreeChairs.push(allRooms[i]);
        }
    }
    return [sumOfChairs, [refactoredFreeChairs]];
}

function meeting(otherMRooms, needChairs) {
    let allRoomsFreeChairs = [];
    

    otherMRooms.forEach(room => {
        allRoomsFreeChairs.push(getSingleRoomFreeChairs(room));
    });    
    
    let foundChairs = [...refactorFreeRoomChairs(allRoomsFreeChairs, needChairs)];
    
    switch (true) {
        case foundChairs[0] < needChairs :
            return 'Not enough!';
            break;
        case needChairs === 0 :
            return 'Game On';
            break;
        default:
            return `${foundChairs[1]}`;
            break;
    }
}

alert((meeting(otherMeetingRooms, needAmountOfChairs))); 

/* 
Вопросы:
    
*/
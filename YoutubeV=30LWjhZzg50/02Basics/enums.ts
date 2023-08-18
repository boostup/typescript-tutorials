const _AILSE = 0;
const _MIDDLE = 1;
const _WINDOW = 2;

const seat = 0;
// Checking for AISLE, but what if its value
// is changed during a later commit?
// 
if (seat == 0) {

}

// This is where an Enum would be useful
enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW
}

const fbSeat = SeatChoice.WINDOW;


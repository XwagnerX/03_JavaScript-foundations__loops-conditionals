/*
    1. Create a while loop that runs from 1 to 100.
    2. Every 10 loops, print out: Checkpoint! and the loop number.
    3. On loop 50, print out ONLY: Halfway there!
    4. On the final loop (100), print out ONLY: You made it!
    5. AFTER the loop is done, print out: All done!

    Expected output:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Halfway there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All done!
*/

let i = 1; 
while (i <= 100) {
    
    if (i === 50) {
        console.log("Halfway there!");
    }
    else if (i === 100) {
        console.log("You made it!");
    }
    else if (i % 10 === 0) {
        console.log(`Checkpoint! ${i}`);
    }
    
    i++;
}

console.log("All done!");

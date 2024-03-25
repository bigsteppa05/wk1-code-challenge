
const speed = 80;// example of a speed
const speedLimit = 70;
const kmPerDemeritPoint = 5;
// calculate the number of demerit points
if (speed < speedLimit + kmPerDemeritPoint) {
    console.log("OK");
}
else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints >= 12) {
        console.log("License Suspended.");// license suspended
    }
    else {
        console.log(`Points: ${demeritPoints}`);// demerit points
    }
}

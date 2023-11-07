// global object 
const timeoutMiliSeconds = 5000
const intervalMiliSeconds = 1000


 global.setTimeout(() => {
    console.log(`in the timeout of ${timeoutMiliSeconds}  mili-seconds or ${timeoutMiliSeconds / 1000} second(s)`);
    clearInterval(int);
}, timeoutMiliSeconds);

const int = setInterval(() => {
    console.log(`interval of ${intervalMiliSeconds} mili-seconds or ${intervalMiliSeconds /1000} second(s)`);
}, intervalMiliSeconds)




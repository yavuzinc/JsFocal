var num = process.argv[2];
num = Number(num);
const dice = function(num){
    console.log("Rolled", num , "dice:")
for (let i=0; i < num; i++){
        var n = Math.random();
        n *= 6;
        n = Math.floor(n) + 1;
        console.log(i+1+".", "dice is", n);
}
}
dice(num);
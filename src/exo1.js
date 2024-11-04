const num = Math.trunc(Math.random()*100);
console.log(num);
let tim = 2000;
let interval = 500;

console.log('Veuiller entrer une valeur \n');
setTimeout(() => {
process.stdin.on('data',(input) => {
    
    const value = parseInt(input.toString().trim(), 10);
    
        if (isNaN(value)) {
            console.log("Veuillez entrer un nombre valide.");
        } else {
            if (value < num - 2) {
                console.log("Veuillez entrer une valeur plus grande");
            } else if (value > num + 2) {
                console.log("Veuillez entrer une valeur plus petite");
            } else {
                console.log("Félicitations, vous êtes proche !");
            }
        }
        setInterval(() => {
            console.log("Il reste " + tim)
        }, interval);
});



},tim);




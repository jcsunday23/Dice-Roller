// DICE ROLLER PROGRAM



function rollDice(){
    const diceNumber = document.getElementById("diceNumber").value
    const diceResult = document.getElementById("diceResult")
    const diceImages = document.getElementById("diceImages")
    const values =[];
    const images =[];

    for(let i = 0; i < diceNumber; i++){
        const valu = Math.floor(Math.random()*6)+1;
        console.log(valu);
        values.push(valu);
        images.push(`<img src="dice_images/inverted-dice-${valu}.png">`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('')

    console.log(values)
}
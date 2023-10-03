// #js-pwdgen-wannabe

// -Creare le variabili con annesso il prompt::
//     -Nome
const username = prompt('Ciao Booleaner, come ti chiami?');
console.log(username);
//     -Cognome
const surname = prompt('Inserisci il tuo cognome');
console.log(surname);   
//     -Colore Preferito
const color = prompt('Inserisci il tuo colore preferito');
console.log(color);
//     -Numero Fisso
const number = 21 
console.log(number);
//     -Password Generata
const passwordGenerated = username + surname + color + number

//   - modificare l'innerHTML dell' h1 con il valore della variabile password-generated
document.getElementById('password-generated').innerHTML = `La tua nuova password è: ${passwordGenerated}`;





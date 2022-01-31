function controlloPalindromi(parola) {

    let ritorno;

    // "spezzo" la parola per ogni singola lettera
    let parolaDaConfrontare = parola.split('').reverse().join(''); 

    // controllo che la parola sia palindroma 
    if (parola == parolaDaConfrontare) {
        ritorno = "La parola inserita è palindroma";
    } else {
        ritorno = "La parola inserita non è palindroma";
    }

    return ritorno;

}

// comandi di prompt e console per risultato
let parolaUtente = prompt("Inserisci una parola");
let verificata = controlloPalindromi(parolaUtente);
console.log(verificata);
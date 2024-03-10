/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

//Creo l'array con le varie mail
const email = ["samuele@gmail.com", "alessandro@gmail.com", "fabio@gmail.com", "michele@gmail.com", "elisabetta@gmail.com",];
//Chiedo all'utente la sua mail
const userEmail = prompt("Inserisci la tua email!")
let emailFound = false;
//Controllo che la mia mail sia tra quelle comprese nell'array
for (let i = 0; i < email.length; i++ ) {
    const thisEmail = email[i];
    if (thisEmail === userEmail) {
        emailFound = true;
    }
}
if (emailFound === true) {
    alert("Puoi entrare!");
} else {
    alert("Mi dispiace, non hai l'accesso!");
}

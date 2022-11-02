/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
  let datatype = ' domanda 1 = i datatype servono per dire alla "macchina" che tipo di dato stiamo per utilizzare, così da poter essere interpretato nel migliore dei modi. Il linguaggio Javascrypt ha una tipizzazione debole, questo vuol dire che non devo specificare tutte le volte il tipo di dato che sto per utilizzare, per esempio se voglio usare un numero con la virgola, o un numero intero, basta che specifico che sto per utilizare un numero e basta, senza andare a mettere "int, double, etc..". tipoplogie di datatype sono: numero, nella quale posso scrivere qualsiasi numero e viene specificato con "let/var = numero ;", 2 ="stringa, con la quale avvisiamo il computer che stiamo per scrivere non una variabile numeriche, ma una variabile contenente delle parole, esempio let/var stringa= qualsiasi cosa ci voglio scrivere al suo interno", 3 = array, con questa dichiarazione ( let/var array= [1,2,3,...]) vado a scrivere una lista NON NOMINATIVA di variabili, che alla quale viene assegnata una locazione di memoria al suo interno, 4 = oggetto, con questa dichiarazione ( let/var oggetto = { NOME1, NOME2, .....}) vado a scrivere una lista NOMINATIVA di variabili, e la logica che sta dietro alla variabile oggetto è la stessa del array, 5= BOOLEAN, questa tipologia di variabili ci serve nel caso in cui vogliamo che ci ritornino dei valori logici, come [true, false], questi vengono utilizzati internamente alle condizioni dei costrutti, con [&&] vado a fare "una sorta di moltiplicazione tra valori binari, quindi se tutte e due i valori sono 1, torna 1, sennò torna 0", con || ["vado a fare una sorta di somma tra valori binari "il risultatp è 0 se e solo se entrambi i valori sono 0 "]';

  console.log(datatype);
}
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  var name = 'Luca';
  console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(12+20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 var name = 'Uggetti';
 console.log(name)
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 
console.log( 4 - x );

 /* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = 'john';
var name2 = 'John';

if (name1 != name2){
  document.write('i valori sono diversi')
}else{
  document.write('i valori sono uguali')
}

/* SCRIVI QUI LA TUA RISPOSTA */

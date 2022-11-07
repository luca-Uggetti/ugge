/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
    function area (5 , 6){
            return l1 * l2
    }
    var area = area(5 , 6)
    console.log(area);
*/
const area = function(l1,l2){
    return l1*l2
}
const areaResult = area (3,4)
console.log(areaResult)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
const crazySum = function(n1, n2){
    if(n1 === n2) {
        return (n1+n2)*3
        }else{
            return (n1+n2)
        }
}
console.log(crazySum(3,3))
}
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
const crazyDiff = function(num){
    if(num > 19){
        return Math.abs(num - 19)*3
    }else{
        return Math.abs(num-19)
    }
}
    console.log(crazyDiff(3));
}
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
    const boundary = function(dato){
   
        if(dato >= 20 && dato<=200 || n ==400){
            let boolen;
            return  boolean= true;
        }
    }
    {
        let dato = 401;
        let boolean = boundary(dato);
        console.log(boolean);
    }
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function(string){
    if(string.includes("EPICODE")){
        return string;
    }else{
        string = "EPICODE" + string;
        
    }
 console.log('EPICODE', string)
}

{
    const epify = function(str){
        if(str.startsWith("EPICODE")){
            return str
        } else{
            return "EPICODE" + str
        }
    }
    console.log(epify ("EPICODERS"));
    console.log(epify("hello"));

}
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    const check3and7 = function(posit){
        if( posit>=0 && posit %3 === 0 || posit %7 === 0 ){
            return true;
        }else{
            return alert('si accettano solo numeri positivi');
        }
    }
    console.log(check3and7(20));
}
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
{
   const reverseString = function(stringa){
    let stringaSplitted = stringa.split('');
    let reverseStringa = strSplitted.reverse();
    let finalString = reverseStringa.join('');
    return finalString;
   }
   console.log(reverseStrings('EPICODE'));

   }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
{
    const upperFirstPhrase = function(string){
        
        let word = string.split('');//così sto dividendo la stringa
        let finalString = [];
        for(let i = 0; i<word.length; i++){
            
            let firstChar = word[i].charAt(0);
            let upperCaseChart = firstChar.toUpperCase();
            let cutString = words[i].slice(1);
            let finalWord = upperCaseChart + cutString;
                finalString.push(finalWord);
        }
        console.log(finalString.join(''));       
    }
    upperFirstPhrase("hello World");

}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
    const cutString = function(str){
        return str.slice(1 , -1);
    }
    console.log(cutString('EPICODE'))
}
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
{
    const giveMeRandom = function(m){
        const arr = [];
        for(let i = 0; i<m; i++){
            arr.push(Math.floor(Math.random()*10));
        }
        return arr;
    }
    console.log(giveMeRandom(5));
}

/* SCRIVI QUI LA TUA RISPOSTA */

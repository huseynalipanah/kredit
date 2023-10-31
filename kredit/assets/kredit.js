// Burada prompt ilə Kredit məbləği və neçə aylıq kredit olduğunu daxil edirik 
let kredit = +prompt("Məbləği Daxil Edin : ")
let ay = +prompt("Neçə aylıq güzəşt istəyirsiniz? ")

function taskkredit(kredit , ay) {
    //  aylıq ödənişlərin saxlanacağı boş bir array yaradırıq
    const arr = [] 
    //kreditin aylıq ödəniş miqdarını hesablayırıq.
    let ayliqmiqdar = parseInt(kredit / ay);
    // kreditin aylıq ödənişlərdən sonra qalan qalığı hesablayırıq
    let qaliq = kredit % ay;
    // Bu dövr, hər bir ay üçün aylıq ödənişi hesablayır və arraydə saxlayır
    for(let i=0; i<ay; i++){
        // Bu şert bloku, Əgər qalıq varsa, onu ilk neçə aya bölür.
        if(i < qaliq){
            // Əgər qalıq varsa, aylıq ödəniş miqdarına 1 əlavə edir və arraydə saxlayır.
            arr.push(ayliqmiqdar + 1);
        } else {
            // Əgər qalıq yoxdursa, sadalanan aylıq ödəniş miqdarını array saxlayır
            arr.push(ayliqmiqdar);
        }
    }
    // hesablanmış aylıq ödənişləri qaytarır.
    return arr;
}
// hesablanmış aylıq ödənişləri qaytarır.
console.table(taskkredit(kredit, ay));
// ====================================================================================================================================
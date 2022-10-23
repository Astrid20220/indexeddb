
// indexedDB: Reforzamiento

let request = window.indexedDB.open('mi-database',2);

//Se actualiza cuando e crea o se sube de version de la DB
request.onupgradeneeded = event =>{
    console.log('Actualizacion de BD');

    let db = event.target.result;

    db.createObjectSt('heroes', {
        keyPath: 'id'
    });
};



const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 5, limite, h = 10, callback ) => {
    
    let result = '';

    return new Promise( ( resolved, reject ) => {

        for (let index = 1; index <= h; index++) {
            result +=  ` ${base} X ${index} = ${ base * index}\n` ;    
        }
// console.log(colors.blue('HOla mundo'));
        if (limite) {console.log( result.blue )};

        fs.writeFileSync( `./salida/tabla-${base}.txt`, result);

        (result)
            ? resolved(`tabla-${base}.txt`)
            : reject('No se pudo crear el archivo');
    } );

}

module.exports = {
    //Esto se vulve redundante, podemos omitirlo como se muestra acontinuación
    // crearArchivo: crearArchivo
    crearArchivo
}
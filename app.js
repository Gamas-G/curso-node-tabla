//Own importaciones
const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
//////ZONA DE IMPORTACIONES


console.clear();

// console.log( argv );


//Aquí observo los argumentos que vienen en la consola, algo asi como agrs de main
// console.log( process.argv );
// console.log( `Parametro de yargs: ${argv.base}` );
// console.log( `Parametro corto de yargs: ${argv.b}` );

//Esto conlleva a una carga muy grande de logica, para que nuestros parametros sean mas inteligentes
//para eso esta yargs que sustituye todo esto y con mas logica
//const [ , , arg3 = 'base=5' ] = process.argv;
//const [ , base = 5 ] = arg3.split( '=' );

// console.log( `La base por argumento es: ${ base }` );


// Imprimir la tabla
crearArchivo(argv.base, argv.listar, argv.h)
    .then( file => {
        console.log(`El archivo ${file} se creo exitosamente`);
    } )
    .catch( err => { console.log( err ) } 
);

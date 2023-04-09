//Importaciones nativas
const argv = require('yargs')
            .options({
                'b':{
                alias:'base',
                type: 'number',
                demandOption: true,
                describe: 'Introduce la base de la tabla'
                },
                'l':{
                    alias:'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Lista la tabla creada'
                },
                'h':{
                    alias: 'hasta',
                    type : 'number',
                    demandOption: false,
                    default: 10,
                    describe: 'Indica hasta donde decea multiplicar'
                }
            })
            .check((argv, options) => {
                console.log(argv);
                if(isNaN(argv.b)){
                    throw 'La base debe de ser un número crack';
                }
                return true;
            }
            )
            .argv;

module.exports = argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'),
    { argv } = require('./config/yargs');

let comando = argv._[0];

switch ( comando ) {
    
    case 'listar':
        listarTabla( argv.b, argv.l );
        break;
        
    case 'crear':
        crearArchivo( argv.b )
            .then( archivo => console.log(`Archivo creado: ${ archivo }`) )
            .catch( e => console.log(e) )
        break;

    default:
        console.log('Comando no reconocido :(');
        break;

}
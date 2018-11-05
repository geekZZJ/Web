import yargs from 'yargs';
const args = yargs

    .option('production',{
        boolean:true,
        default:false,
        description:'min all scripts'
    })

    .option('watch',{
        boolean:true,
        default:false,
        description:'watch all files'
    })

    .option('verbose',{
        boolean:true,
        default:false,
        description:'log'
    })

    .option('sourcemaps',{
        description:'force the creation of sroucemaps'
    })

    .option('port',{
        string:true,
        default:8080,
        description:'server port'
    })

    .argv
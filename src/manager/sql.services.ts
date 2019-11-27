
//modules

//globals 
let db:Database;
/**
 * CREATE TABLES.
 */
export const create = ({
    Materias(){
        db.transaction(function (tx:any) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS materias (id integer primary key, name text)");
        });
    },
    Grupos(){
        db.transaction(function (tx:any) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS grupos (id integer primary key, name text )");
        });
    },
    GruposMateria(){
        db.transaction(function (tx:any) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS grupos_materia (id integer primary key, idMateria integer, idGrupo integer )");
        });
    },
    Alumnos(){
        db.transaction(function (tx:any) {
            tx.executeSql(
            "CREATE TABLE IF NOT EXISTS alumnos (id integer primary key, name text, lastName text, appPat text, appMat text, idGrupo integer )");
        });
    },
    Profesores(){
        db.transaction(function (tx:any) {
            tx.executeSql(
            "CREATE TABLE IF NOT EXISTS profesores (id integer primary key, name text, lastName text, appPat text, appMat text, Clave text )");
        });
    },
    MateriasProfesor(){
        db.transaction(function (tx:any) {
            tx.executeSql(
            "CREATE TABLE IF NOT EXISTS materias_profesor (id integer primary key, idMateria integer, idProfesor integer )");
        });
    }
});

/**
 * INSERT TO TABLE.
 */
export const insert = ({
    Materia(name:string){
        db.transaction(function (tx:any) {
            tx.executeSql("INSERT INTO materias (name) VALUES (?)", [name]);
        });
    },
    Grupo(name:string){
        db.transaction(function (tx:any) {
            tx.executeSql("INSERT INTO grupos (name) VALUES (?)", [name]);
        });
    },
    GruposMateria(idMateria:Number,idGrupo:Number){
        db.transaction(function (tx:any) {
            tx.executeSql("INSERT INTO grupos_materia (idMateria,idGrupo) VALUES (?,?)", [idMateria,idGrupo]);
        });
    },
    Alumno(name:string,lastName:string,appPat:string,appMat:string,idGrupo:Number){
        db.transaction(function (tx:any) {
            tx.executeSql("INSERT INTO alumnos (name, lastName, appPat, appMat, idGrupo) VALUES (?,?,?,?,?)", [name,lastName,appPat,appMat,idGrupo]);
        });
    },
    Profesor(name:string,lastName:string,appPat:string,appMat:string,clave:Number){
        db.transaction(function (tx:any) {
            tx.executeSql("INSERT INTO profesores (name, lastName, appPat, appMat, Clave) VALUES (?,?,?,?,?)", [name,lastName,appPat,appMat,clave]);
        });    
    },
    MateriasProfesor(idProfesor:Number,idMateria:Number){
        db.transaction(function (tx:any) {
            tx.executeSql("INSERT INTO materias_profesor (idProfesor,idMateria) VALUES (?,?)", [idProfesor,idMateria]);
        });
    }
});
/**
 * SELECT FROM TABLE.
 */
export const select = ({
    all:{
        materias(idProfesor:Number,getvalue?:any){
            var resultado:Object[]=[];

            db.readTransaction(function (tx:SQLTransaction) {
                tx.executeSql("SELECT idMateria,materias.name as name FROM materias_profesor LEFT JOIN materias ON materias_profesor.idMateria = materias.id where idProfesor=?;",
                 [idProfesor],function(tx:SQLTransaction, results){
                    
                    if(results.rows.length > 0) {
                        for(var i = 0; i < results.rows.length; i++) {
                            resultado.push({
                                idMateria:results.rows.item(i).idMateria,
                                name:results.rows.item(i).name
                            });
                        }
                    }
                    !getvalue || getvalue(resultado)
                });                
            });
        },
        grupos(idProfesor:Number,idMateria:Number){

        },
        profesores(){
            
        },
        alumnos(idGrupo:Number){

        }

    }
});
/**
 * UPDATE TABLE.
 */
export const update=({

});
/**
 * DELETE date from TABLE.
 */
export const deleteFrom = ({

});
/**
 * DATABASE
 */
const DATABASE =({
    Open(){
        db =  window.openDatabase("schoolApp.db", '1.0', "Database schoolApp", 2 * 1024 * 1024);
        create.Materias();
        create.Grupos();
        create.GruposMateria();
        create.Alumnos();
        create.Profesores();
        create.MateriasProfesor();
    }
});

/**
 * ABRIR BD.
 */
DATABASE.Open();
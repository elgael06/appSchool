
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
        materias(idProfesor:Number,getValues?:(item:Object[])=>void){
            let resultado:Object[]=[];

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
                    !getValues || getValues(resultado)
                });                
            });
        },
        grupos(idProfesor:Number,idMateria:Number){

        },
        profesores(){
            
        },
        alumnos(idGrupo:Number){

        }

    },
    from:{
        materiaTop(getTop:(id:number)=>void){
            db.readTransaction(function (tx:SQLTransaction) {
                tx.executeSql("SELECT * FROM materias order by id desc LIMIT 0,1;", [],function(tx:SQLTransaction, results){
                    console.log(results.rows.length)
                    getTop(results.rows.item(0).id)        
                });                
            });
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
    from:{
        materias(id:number){
            db.transaction(function (tx:SQLTransaction) {
                tx.executeSql("DELETE FROM materias WHERE id=?;", [id],function(tx:SQLTransaction, results){     
                    console.log('Eliminado')
                });               
            });
        },
        materiaProfesor(id:number,idProfesor:number){
            db.transaction(function (tx:SQLTransaction) {
                tx.executeSql("DELETE FROM materias_profesor WHERE idMateria=? and idProfesor=?;", [id,idProfesor]);                
            }); 
        }
    }
});
/**
 * DATABASE
 */
const DATABASE =({
    Open(){
        console.log("Abrir conexion...")
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
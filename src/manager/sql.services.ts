//modules

//globals 
let db:any;

/**
 * CREATE TABLES
 */
export const create = {
    DB(){
        db =  window.openDatabase("school.db", '1.0', "Database schoolApp", 2 * 1024 * 1024);
    },
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
    Alumos(){
        db.transaction(function (tx:any) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS alumnos (id integer primary key, name text, lastName text, appPat text, appMat text, idGrupo integer )");
        });
    }
}
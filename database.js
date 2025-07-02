import sqlite3 from 'sqlite3';

sqlite3.verbose();
const database = new sqlite3.Database('./data.db');

database.serialize(()=>{
    database.run(
        
        `CREATE TABLE IF NOT EXISTS jokes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT,
        response TEXT
        );`
    );

    const insert = database.prepare(`INSERT INTO jokes (question, response) VALUES (?,?)`);

    insert.run('Quelle est la femelle du hamster ?','L’Amsterdam');

    insert.finalize();

});

export default database;
 


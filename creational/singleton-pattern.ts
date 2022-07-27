class Database {
  private static instance: Database

  private constructor(){}

  public static getInstance(){
    if(Database.instance == null){ 
      Database.instance = new Database()
    }
    return Database.instance
  }
  // Here it goes business logic
  public query(sql: string) {
    return sql;
  }
}
// First instance
const db = Database.getInstance()
db.query('SELECT * FROM AAA')
// Same instance as first
const secondDb = Database.getInstance()
secondDb.query('SELECT * FROM BBB')

if(db === secondDb) console.log('Hoooray')
else console.log('Singleton failed')
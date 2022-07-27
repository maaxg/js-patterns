var Database = (function () {
    function Database() {
    }
    Database.getInstance = function () {
        if (Database.instance == null) {
            Database.instance = new Database();
        }
        return Database.instance;
    };
    Database.prototype.query = function (sql) {
        return sql;
    };
    return Database;
}());
var db = Database.getInstance();
db.query('SELECT * FROM AAA');
var secondDb = Database.getInstance();
secondDb.query('SELECT * FROM BBB');
if (db === secondDb)
    console.log('Hoooray');
else
    console.log('Singleton failed');
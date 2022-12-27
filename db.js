const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ""
});
var values = [
    [1,'Loyal Employee 1','employee Address 1',48000.00],
    [2,'Loyal Employee 2','employee Address 2',24000.00],
    [3,'Loyal Employee 3','employee Address 3',24000.00],
    [4,'Loyal Employee 4','employee Address 4',24000.00],
    [5,'Loyal Employee 5','employee Address 5',24000.00],
    [6,'Loyal Employee 6','employee Address 6',24000.00],
    [7,'Loyal Employee 7','employee Address 7',24000.00],
    [8,'Loyal Employee 8','employee Address 8',24000.00],
    [9,'Loyal Employee 9','employee Address 9',24000.00],
    [10,'Loyal Employee 10','employee Address 10',24000.00]
];
connection.connect((err)=>{
    if (err) throw err;
    console.log('connection established');
    connection.query('create table employee( empid int not null, name varchar(25), address varchar(25),salary Decimal(10,2));');
    connection.query('insert into employee values ?',[values],(err,result) => {
        if (err) throw err;
        console.log('Number of Rows Affected:',result.affectedRows);
    });
    connection.query('select * from employee',(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
    connection.query('update employee set name="Disloyal Employee 10" where empid=10',(err,result)=>{});
    connection.query('select * from employee',(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
});
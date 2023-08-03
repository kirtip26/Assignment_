// const mysql = require('mysql2/promise');

// // MySQL connection configuration
// const dbConfig = {
//   host: 'localhost',
//   user: 'root',
//   password: 'Root@123',
//   database: 'database',
// };

// // Function to connect to MySQL
// async function connectToDB() {
//   try {
//     const connection = await mysql.createConnection(dbConfig);
//     console.log('Connected to the database.');
//     return connection;
//   } catch (error) {
//     console.error('Error connecting to the database:', error);
//     throw error;
//   }
// }

// // Function to insert a record into the employee table
// async function insertEmployee(connection, employee) {
//   try {
//     const [result] = await connection.query('INSERT INTO employee SET ?', employee);
//     console.log('New employee inserted with ID:', result.insertId);
//   } catch (error) {
//     console.error('Error inserting employee:', error);
//     throw error;
//   }
// }

// // Function to display all records in the employee table
// async function displayAllEmployees(connection) {
//   try {
//     const [rows] = await connection.query('SELECT * FROM employee');
//     console.log('Employees:');
//     rows.forEach((employee) => {
//       console.log(employee);
//     });
//   } catch (error) {
//     console.error('Error fetching employees:', error);
//     throw error;
//   }
// }

// // Main function
// async function main() {
//   try {
//     // Connect to the database
//     const connection = await connectToDB();

//     // Insert a record in the employee table
//     const newEmployee = {
//       name: 'abc',
//       age: 30,
//       department: 'IT',
//       salary: 50000,
//     };
//     await insertEmployee(connection, newEmployee);

//     // Display all records in the employee table
//     await displayAllEmployees(connection);

//     // Close the connection
//     connection.end();
//     console.log('Connection closed.');
//   } catch (error) {
//     console.error('Something went wrong:', error);
//   }
// }

// // Call the main function
// main();
const mysql = require("mysql2");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root@123",
    database: 'database'
});

const selectAllEmployees = () => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM employee", (err, result, fields) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        })
    })
}

con.connect((err) => {
    if (err) {
        console.log("error: " + err)
    } else {

        //inserting record in employee table
        con.query("INSERT INTO employee values(null,'xyz',30,'hr',60000)", (err, result) => {
            if (err) {
                console.log("error: " + err)
            } else {
                console.log("record inserted")
            }
        })

        //getting all data from employee table using promise based approach
        selectAllEmployees().then(result => {
            console.log(result)
        }).catch(err => {
            console.log("error: " + err)
        })
    }
})
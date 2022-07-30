import mysql from 'mysql2';

export const handleNonceRequest = (req, res) => {
    const { address } = req.body;
    const currentUnixTimestamp = parseInt(new Date().getTime()/1000);
    const INSERT_SESSION_ITEM = `insert sessions(useAddress, nonceTimestamp) values('${address}', ${currentUnixTimestamp});
    `
    const connection = mysql.createConnection({
        host: "localhost",
        user: 'root',
        database: "backend",
            password: "ghjcnjgfhjkm12345"
      });

    connection.connect(err => {
       if (err) {
           console.log("ERROR MYSQL")
       } else {
           console.log("Database connected")
       }
    })
    connection.query(INSERT_SESSION_ITEM,
        function(err, results, fields) {
        console.log(err);
        // console.log(fields); // мета-данные полей 
    })
    connection.end();
    console.log("GET LAST NONCE:", currentUnixTimestamp)
    return res.status(200)
                .send(JSON.stringify({msg: `That is test message for sign in Metamask (${currentUnixTimestamp})`}))  
    
}
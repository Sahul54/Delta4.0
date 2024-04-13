const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.get("/", (req, res) =>{
    res.send("You conntected root path");
});

// app.get("/home", (req, res) =>{
//     res.send("You connected home page");
// });

// app.get("*", (req, res) =>{
//     res.send("This page is note exits")
// })

// app.post("/post", (req, res) =>{
//     res.send("This page is post page");
// })

app.get("/:username", (req, res) =>{
    let {username} = req.params;
    console.log(req.params);
    res.send(`This account belong to @ ${username}`);
}) 

// app.use((req, res) =>{
//     // console.log(req);   // send request
//     console.log("request recived");
//     res.send("hello!");
// });
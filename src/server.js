require('express')()
.get("/", (req, res) =>{
     return res.sendFile(__dirname + "")
})
.get("/study", (req, res) => {
     return res.send("Study")
})
.listen(5500)
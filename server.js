const express = require('express')
const app = express()
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

app.use(express.static('public'))

app.post('/upload', upload.single('userfile'), function (req, res, next) {
var userfile={}
userfile.size=req.file.size  
res.json(userfile)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

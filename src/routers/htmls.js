const router = require("express").Router()
const path = require("path")

router.get("/n-sig/:id", (req, res)=> {
    if(req.params.id == 777) res.sendFile("nsig777.html", {root: path.join(__dirname, "../views")})
    else{
        res.send(404)
    }
})


module.exports = router


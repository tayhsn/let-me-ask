const Database = require("../db/config")

module.exports = {
  async create(req, res) {
    const db = await Database()
    const pass = req.body.password
    let roomID

    for (var i=0; i <6; i++){
      i == 0 ? roomID = Math.floor(Math.random() * 10).toString() 
      : roomID += Math.floor(Math.random() * 10).toString()
    }

    await db.run(`INSERT INTO rooms ( id, pass ) VALUES (${parseInt(roomID)}, ${pass})`)

    db.close()

    res.redirect(`/room/${roomID}`)
  }
}
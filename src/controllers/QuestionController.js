module.exports = {
  index(req, res) {
    const roomID = req.params.room;
    const question = req.params.question;
    const action = req.params.action;
    const password = req.body.password;

    console.log(`room = ${roomID}/ questionID = ${question} / ${action} / ${password}`)
  }
}
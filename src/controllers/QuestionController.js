const Database = require('../db/config');

module.exports = {
	async index(req, res) {
		const db = await Database();
		const roomID = req.params.room;
		const questionID = req.params.question;
		const action = req.params.action;
		const password = req.body.password;
		
		try {
			const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomID}`);
		
			if (verifyRoom.pass === password) {
					if (action === 'delete') {
						await db.run(`DELETE FROM questions WHERE id = ${questionID}`);
					} else if (action == 'check') {
						await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionID}`);
					}
	
				res.redirect(`/room/${roomID}`);
			} else {
				res.render('passIncorrect', {roomID: roomID});
			}

		}	catch(e) { console.log(e)}
	},

	async create(req, res) {
		const db = await Database();
		const question = req.body.question;
		const roomID = req.params.room;

		await db.run(`INSERT INTO questions (
      title,
      room,
      read
    ) VALUES (
      '${question}',
      ${roomID},
      0
    )`);

		res.redirect(`/room/${roomID}`);
	},
};

const Database = require('../db/config');

module.exports = {
	async create(req, res) {
		const db = await Database();
		const pass = req.body.password;
		let roomID;
		let isRoom = true;

		while (isRoom) {
			for (var i = 0; i < 6; i++) {
				i == 0
					? (roomID = Math.floor(Math.random() * 10).toString())
					: (roomID += Math.floor(Math.random() * 10).toString());
			}

			const roomsExistsIds = await db.all(`SELECT id FROM rooms`);
			isRoom = roomsExistsIds.some((roomExistsId) => roomExistsId === roomID);

			if (!isRoom) {
				await db.run(
					`INSERT INTO rooms ( id, pass ) VALUES (${parseInt(
						roomID,
					)}, ${pass})`,
				);
			}
		}

		db.close();

		res.redirect(`/room/${roomID}`);
	},

	async open(req, res) {
		const db = await Database();
		const roomID = req.params.room;
		const questions = await db.all(
			`SELECT * FROM questions WHERE room = ${roomID} and read = 0`,
		);
		const questionsRead = await db.all(
			`SELECT * FROM questions WHERE room = ${roomID} and read = 1`,
		);

		let isNoQuestions;
		if (questions.length == 0) {
			if (questionsRead.length == 0) {
				isNoQuestions = true;
			}
		}

		res.render('room', { roomID, questions, questionsRead, isNoQuestions });
	},

	enter(req, res) {
		const roomID = req.body.roomID;

		res.redirect(`/room/${roomID}`);
	},

	
};
const Sequelize = require("sequelize");
const path = "mysql://root:password@localhost:3306/demosqldb";

const sequelize = new Sequelize(path);

let Note = sequelize.define("notes", {
	description: Sequelize.STRING
});

async function createRecord() {
	let note = await Note.create({ description: 'Test 2'});
	console.log(note);

	sequelize.close();
}

createRecord();

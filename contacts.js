const fs = require("fs/promises");
const path = require("node:path");

const contactsPath = path.basename(
  "D:\\GitHub\\nodejs-homework-01\\db\\contacts.json"
);

// TODO: задокументировать каждую функцию

const listContacts = async () => {
  const contacts = await fs.readFile("./db/contacts.json", "utf-8");
  console.log(contacts);
};

listContacts();

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

// fs.readFile(contactsPath, (error, data) => {
//   console.log(error);
//   console.log(data);
// });

const fs = require("fs/promises");
const path = require("node:path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (contactId) => {
  // ...твой код
};

const removeContact = async (contactId) => {
  // ...твой код
};

const addContact = (name, email, phone) => {
  // ...твой код
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

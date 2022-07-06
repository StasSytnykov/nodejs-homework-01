const fs = require('fs/promises');
const path = require('node:path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async contactId => {
  const contacts = await listContacts();
  const foundContact = contacts.find(contact => contact.id === contactId);

  if (!foundContact) {
    return null;
  }

  return foundContact;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id: contacts.length + 1, name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};

const removeContact = async contactId => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

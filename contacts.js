import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

export async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf-8");
  return data;
}

export async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath, "utf-8");
  const parseData = JSON.parse(data);
  const contact = parseData.find(({ id }) => id === contactId);
  return contact || null;
}

export async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath, "utf-8");
  const parseData = JSON.parse(data);
  const deletedContact = parseData.find(({ id }) => id === contactId);
  return deletedContact || null;
}

export async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}

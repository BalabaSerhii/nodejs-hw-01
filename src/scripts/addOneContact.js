import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    const newContacts = createFakeContact();
    contacts.push(newContacts);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(contacts, null, 4),
      'utf8',
    );
  } catch (error) {
    console.error('Error ADD contacts', error);
  }
};

addOneContact();

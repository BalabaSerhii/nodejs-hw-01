import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const updatedContacts = [...contacts, ...newContacts];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 4),
      'utf8',
    );
  } catch (error) {
    console.error('Error generating contacts', error);
  }
};

generateContacts(5);

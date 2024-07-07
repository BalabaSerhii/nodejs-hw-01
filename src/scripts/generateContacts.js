import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs.promises';

const generateContacts = async (number) => {
  try {
    const data = await fr.readFile(PATH_DB, 'utf8');
    const constants = JSON.parse(data);
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const patchContacts = [...constants, ...newContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(patchContacts, null, 4), 'utf8');
  } catch (error) {
    console.error('Error generating contacts', error);
  }
};

generateContacts(5);

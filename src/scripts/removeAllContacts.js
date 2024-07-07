import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 4), 'utf8');
  } catch (error) {
    console.error('Error remove all contacts', error);
  }
};

removeAllContacts();

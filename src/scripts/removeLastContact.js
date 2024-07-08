import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
      const removeLast = contacts.pop();
      console.log(removeLast);
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 4), 'utf8');
    } else {
      console.log('There are no contacts to delete.');
    }
  } catch (error) {
    console.error('Error remove last contacts', error);
  }
};

removeLastContact();

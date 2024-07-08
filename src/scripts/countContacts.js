import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    const rez = `Number of contacts: ${contacts.length}`;
    return rez;
  } catch (error) {
    console.error('Contact counting error!', error);
  }
};

console.log(await countContacts());

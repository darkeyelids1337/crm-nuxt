import { Client, Account, Databases, Storage } from 'appwrite';
import {APP_WRITE_ID} from '@/app.constants'

export const client = new Client(); // Инициализация клиента

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(APP_WRITE_ID); // Назначаем endpoint и проект

export const account = new Account(client)
export {ID} from 'appwrite'
export const DB = new Databases(client);
export const storage = new Storage(client);
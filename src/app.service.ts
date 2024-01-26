import { Inject, Injectable } from '@nestjs/common';
import { app, database } from 'firebase-admin';
import {User} from "./types/user";

@Injectable()
export class AppService {
  #db: database.Database;
  #collection: database.Reference;

  constructor(@Inject('FIREBASE_APP') private firebaseApp: app.App) {
    this.#db = firebaseApp.database();
    this.#collection = this.#db.ref('users');
  }

  async getHello(): Promise<User[]> {
    try {
      const snapshot = await this.#collection.once('value');
      const data = snapshot.val();
      return Object.keys(data).map((key) => data[key]);
    } catch (error) {
      console.error('Error retrieving data from Firebase:', error);
      throw error;
    }
  }
}

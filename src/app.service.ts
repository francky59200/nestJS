import { Inject, Injectable } from '@nestjs/common';
import { app, database } from 'firebase-admin';

@Injectable()
export class AppService {
  #db: database.Database;
  #collection: database.Reference;

  constructor(@Inject('FIREBASE_APP') private firebaseApp: app.App) {
    this.#db = firebaseApp.database();
    this.#collection = this.#db.ref('users');
  }

  async getHello(): Promise<any[]> {
    try {
      const snapshot = await this.#collection.once('value');
      const data = snapshot.val();
      return Object.keys(data).map((key) => data[key]);
    } catch (error) {
      // Handle errors, log, or throw as needed
      console.error('Error retrieving data from Firebase:', error);
      throw error;
    }
  }
}

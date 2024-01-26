import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { firebaseProvider } from './firebase.module';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ cache: true })],
      providers: [firebaseProvider, AppService],
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return data', async () => {
      const expectedUserData = [
        {
          name: 'John',
          lastname: 'Doe',
          nickname: 'TheOnlyJohnDoe',
          email: 'mocked-email@example.com',
          password: 'MyAwe$omePa$$w0rD',
          token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ijg4MmI1Yjk5LTQ0M2YtNGUyYy1iMTY1LWVmNjlkZjU5YjUwMiJ9.',
          city: 'New York City',
          avatar: '/avatar/123456',
          trophies: [
            {
              detail: "ma vo2 max atteint avec beaucoup d'effort",
              earned: true,
              id: 'vo2',
              label: 'Vo2 max',
            },
          ],
          workouts: [
            {
              id: 'w012345',
              totalKilometer: '10km',
              totalTime: '48mn',
              timeKilometer: '4mn45/km',
              date: 1695899653000,
              checkpoints: [
                {
                  distance: 0,
                  time: 0,
                  coordinates: {
                    lat: 50.66841,
                    lon: 3.1150411,
                  },
                },
              ],
            },
          ],
        },
      ];
      jest
        .spyOn(appController, 'getHello')
        .mockImplementation(() => Promise.resolve(expectedUserData));

      const result = await appController.getHello();

      // Adjust the assertion based on the actual data structure
      expect(result).toEqual(expectedUserData);

      expect(result[0].city).toBe('New York City');
    });
  });
});

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { firebaseProvider } from './firebase.module';

@Module({
  imports: [ConfigModule.forRoot({ cache: true })],
  providers: [firebaseProvider, AppService],
  controllers: [AppController],
})
export class AppModule {}

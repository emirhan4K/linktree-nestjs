import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LinksModule } from './links/links.module';
import { AuthModule } from './auth/auth.module';
import { MailService } from './mail/mail.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //ConfigModule global yapıyoruz her yerden erişebilmek için
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
        family:4
      }), 
    }),
    LinksModule,
    AuthModule,
  ],
  controllers: [],
  providers: [MailService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    CacheModule.register({
      // ttl: 60,
      // max: 1000,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor, //for every controller in the system
    },
  ],
})
export class AppModule {}

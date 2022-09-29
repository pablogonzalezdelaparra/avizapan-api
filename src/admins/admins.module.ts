import { Module } from '@nestjs/common';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Notifications } from 'src/notifications/notifications.entity';
import { Categories } from 'src/categories/categories.entity';
import { Admins } from './admins.entity';

//JWT
import { JwtModule } from '@nestjs/jwt';
import { secret } from 'src/Utils/constants';

@Module({
  imports: [TypeOrmModule.forFeature([Notifications, Categories, Admins]), JwtModule.register({secret, signOptions: { expiresIn: '1h'}})],
  controllers: [AdminsController],
  providers: [AdminsService]
})
export class AdminsModule {}

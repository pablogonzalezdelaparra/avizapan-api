import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Notifications } from './notifications.entity';
import { Categories } from 'src/categories/categories.entity';
import { Admins } from 'src/admins/admins.entity';
import { Tokens } from 'src/tokens/tokens.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notifications, Categories, Admins, Tokens])],
  controllers: [NotificationsController],
  providers: [NotificationsService]
})
export class NotificationsModule {}

import { Module } from '@nestjs/common';
import { EventsServiceController } from './events-service.controller.js';
import { EventsServiceService } from './events-service.service.js';

@Module({
  imports: [],
  controllers: [EventsServiceController],
  providers: [EventsServiceService],
})
export class EventsServiceModule {}

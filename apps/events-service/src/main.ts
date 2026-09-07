import { NestFactory } from '@nestjs/core';
import { EventsServiceModule } from './events-service.module.js';
import { SERVICES_PORTS } from '@app/common';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(EventsServiceModule);
  // Enable Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(SERVICES_PORTS.EVENTS_SERVICE ?? 4003);

  console.log(
    `Events service is running of port ${SERVICES_PORTS.EVENTS_SERVICE}`,
  );
}
await bootstrap();

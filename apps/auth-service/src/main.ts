import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module.js';
import { SERVICES_PORTS } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);
  await app.listen(SERVICES_PORTS.AUTH_SERVICE ?? 4001);
}
await bootstrap();

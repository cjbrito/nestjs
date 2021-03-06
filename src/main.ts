import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ProductModule} from './products/product.module'
import {ValidationPipe} from '@nestjs/common'
import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options =new DocumentBuilder()
    .setTitle("products")
    .setDescription("Simple Products Crud")
    .addTag("products")
    .setVersion("1.0")
    .build()
  const document= SwaggerModule.createDocument(app, options, {
    include: [ProductModule],
  });
  SwaggerModule.setup("docs", app, document)

  app.useGlobalPipes(
    new ValidationPipe(    {
      whitelist:true,
    })
  )
  await app.listen(3000);
}
bootstrap();

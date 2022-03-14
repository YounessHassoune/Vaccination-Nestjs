import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CenterController } from './center.controller';
import { Center, CenterSchema } from './center.schema';
import { CenterService } from './center.services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Center.name, schema: CenterSchema }]),
  ],
  controllers: [CenterController],
  providers: [CenterService],
})
export class CenterModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { FragranceModule } from './fragrance/MODULES/fragrance/fragrance.module';
import { OrdersModule } from './fragrance/MODULES/order/orders.module';
import { Fragrance } from './fragrance/Entity/fragrance.entity';
// import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'agatha',
    entities: [Fragrance],
    // autoLoadEntities: true,
    synchronize: true,
  }),
    FragranceModule,
    OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor (private datasource: DataSource){}
}

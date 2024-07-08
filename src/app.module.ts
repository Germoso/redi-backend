import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleBrandModule } from './vehicles/vehicle-brand/vehicle-brand.module';
import { FuelTypeModule } from './vehicles/fuel-type/fuel-type.module';
import { VehicleUsageTypeModule } from './vehicles/vehicle-usage-type/vehicle-usage-type.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:example@mongo:27017/test?authSource=admin&authMechanism=SCRAM-SHA-1',
    ),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb', // Tipo de base de datos
      host: 'mongo', // Host donde está corriendo MongoDB
      port: 27017, // Puerto de MongoDB (predeterminado es 27017)
      database: 'test', // Nombre de la base de datos
      username: 'root', // Usuario de la base de datos (si aplica)
      password: 'example', // Contraseña del usuario (si aplica)
      entities: [], // Arreglo de entidades de TypeORM (definir las entidades que usarás)
      // synchronize: true, // Sincronizar automáticamente el esquema de base de datos (no recomendado en producción)
      // useNewUrlParser: true, // Opciones específicas de MongoDB
      // useUnifiedTopology: true, // Opciones específicas de MongoDB
      authSource: 'admin',
      authMechanism: 'SCRAM-SHA-1',
      autoLoadEntities: true,
    }),
    FuelTypeModule,
    VehicleBrandModule,
    VehicleUsageTypeModule,
    VehiclesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

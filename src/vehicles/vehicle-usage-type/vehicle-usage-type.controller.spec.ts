import { Test, TestingModule } from '@nestjs/testing';
import { VehicleUsageTypeController } from './vehicle-usage-type.controller';
import { VehicleUsageTypeService } from './vehicle-usage-type.service';

describe('VehicleUsageTypeController', () => {
  let controller: VehicleUsageTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleUsageTypeController],
      providers: [VehicleUsageTypeService],
    }).compile();

    controller = module.get<VehicleUsageTypeController>(VehicleUsageTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

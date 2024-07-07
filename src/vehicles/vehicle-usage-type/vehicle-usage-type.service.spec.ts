import { Test, TestingModule } from '@nestjs/testing';
import { VehicleUsageTypeService } from './vehicle-usage-type.service';

describe('VehicleUsageTypeService', () => {
  let service: VehicleUsageTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleUsageTypeService],
    }).compile();

    service = module.get<VehicleUsageTypeService>(VehicleUsageTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

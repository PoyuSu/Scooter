import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Scooter } from './scooter.entity';
import { ScooterService } from './scooter.service';

@Crud({
    model: {
      type: Scooter
    }
  })

@Controller('scooter')
export class ScooterController implements CrudController<Scooter> {
    constructor(public service: ScooterService) {}
  }

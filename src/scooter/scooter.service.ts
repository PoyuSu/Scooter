import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Scooter } from './scooter.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ScooterService extends TypeOrmCrudService<Scooter>{
    constructor(@InjectRepository(Scooter) repo) {
        super(repo)
    }
}

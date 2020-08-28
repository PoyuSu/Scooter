import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Scooter {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  plateNumber: string;

  @ApiProperty()
  @Column()
  mileage: number;

  @ApiProperty()
  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  create_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
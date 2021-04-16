import {PrimaryGeneratedColumn, Column } from 'typeorm'

export class Product {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    description: string;

  @Column()
    value: number;

  @Column({ default: true })
    isActive: boolean;

}

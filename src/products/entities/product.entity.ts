
import {PrimaryGeneratedColumn, Column, Entity } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger';
@Entity()
export class Product {

  @PrimaryGeneratedColumn()
    id: number;
  @ApiProperty({ example: "Demo", description: 'Nombre del Producto' })
  @Column({type:'varchar', length:255})
    name!: string;
  
  @ApiProperty({ example: "Demo", description: 'demo' })
  @Column({type:'varchar', length:255})
    description!: string;
  
  @ApiProperty({ example: 121, description: "Valor del Producto" })
  @Column()
    value: number;

  @Column({ default: true })
    isActive: boolean;

}

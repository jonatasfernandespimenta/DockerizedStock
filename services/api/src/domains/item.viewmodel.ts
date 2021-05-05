import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ItemViewModel {
  constructor(createdAt: Date, sku: String) {
    this.createdAt = createdAt;
    this.sku = sku;
  }

  @ApiProperty({
    example: 'papel branco fosco',
    description: 'Nome do produto'
  })
  @IsNotEmpty()
  readonly sku: String;

  @ApiProperty({
    example: 3,
    description: 'Quantidade de itens que irão entrar para o estoque'
  })
  readonly quantity: number;

  @ApiProperty({
    example: 'papel branco fosco',
    description: 'Nome do produto'
  })
  readonly productName: String;

  @ApiProperty({
    example: new Date(),
    description: 'Data de criação'
  })
  readonly createdAt: Date;

}

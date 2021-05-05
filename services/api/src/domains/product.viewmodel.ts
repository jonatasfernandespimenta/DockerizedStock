import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class ProductViewModel {
  constructor(
      sku: string, 
      quantity: number, 
      name: string, 
      createdAt: Date, 
      items: Object, 
      days: number, 
      providerDays: number,   
      resp: string,
      und: string,
      sector: string,
      provider: string,
    ) { 
    this.sku = sku ?? name;
    this.quantity = quantity;
    this.name = name;
    this.createdAt = createdAt;
    this.items = items;
    this.days = days;
    this.providerDays = providerDays;
    this.resp = resp;
    this.und = und;
    this.sector = sector;
    this.provider = provider;
  }

  @ApiProperty({
    example: 'papel branco fosco',
    description: 'SKU do produto'
  })
  @IsNotEmpty()
  readonly sku: string;

  @ApiProperty({
    example: 5,
    description: 'Quantidade em estoque de um produto'
  })
  @IsNotEmpty()
  readonly quantity: number;

  @ApiProperty({
    example: 'papel branco fosco',
    description: 'nome do produto'
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    example: new Date(),
    description: 'Data de criação'
  })
  readonly createdAt: Date;

  readonly items: Object;

  @ApiProperty({
    example: 10,
    description: 'Dias de estoque desejaveis para saber quando comprar mais. Por exemplo se os dias de estoque sao 10 e só tem em estoque o suficiente para 8 dias, já está na hora de comprar mais.'
  })
  readonly days: number;

  @ApiProperty({
    example: 4,
    description: 'Quantidade de dias que demora para o fornecedor entregar o produto'
  })
  readonly providerDays: number;

  @ApiProperty({
    example: 'Jon Doe',
    description: 'Responsavel pelo produto'
  })
  readonly resp: string;

  @ApiProperty({
    example: 'CX',
    description: 'Unidade do produto, necessario para saber se é unitario(UN), caixa(CX), etc'
  })
  readonly und: string;

  @ApiProperty({
    example: 'Papelaria',
    description: 'Setor do produto'
  })
  readonly sector: string;

  @ApiProperty({
    example: 'Empresa top de papel',
    description: 'Nome do fornecedor'
  })
  readonly provider: string;

}

import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LogViewModel {
  constructor(inputDate: Date, withdrawDate: Date, quantity: number, sku: String) {
    this.inputDate = inputDate;
    this.withdrawDate = withdrawDate;
    this.quantity = quantity;
    this.sku = sku;
  }

  @ApiProperty({
    example: new Date(),
    description: 'Data de entrada de um item'
  })
  readonly inputDate: Date;

  @ApiProperty({
    example: new Date(),
    description: 'Data de retirada de um item'
  })
  readonly withdrawDate: Date;

  @ApiProperty({
    example: 3,
    description: 'Quantidade que entrou ou saiu'
  })
  @IsNotEmpty()
  readonly quantity: number;

  @ApiProperty({
    example: 'papel branco fosco',
    description: 'Sku do produto'
  })
  @IsNotEmpty()
  readonly sku: String;

}

import { ApiProperty } from '@nestjs/swagger';

export class Paginated<T = unknown> {
  @ApiProperty({
    description: 'Número da página atual',
    example: 1,
  })
  page: number;

  @ApiProperty({
    description: 'Total de itens',
    example: 100,
  })
  totalItems: number;

  @ApiProperty({
    description: 'Total de páginas',
    example: 10,
  })
  totalPages: number;

  @ApiProperty({
    description: 'Itens da página atual',
    type: [Object],
  })
  items: T[];

  constructor(
    page: number,
    totalItems: number,
    totalPages: number,
    items: T[],
  ) {
    this.page = page;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
    this.items = items;
  }
}

export class ControllerPaginatedOutput<T = unknown> {
  @ApiProperty({
    description: 'Resposta da API',
  })
  data: Paginated<T>;

  @ApiProperty({
    description: 'Possíveis erros retornados',
    default: null,
    nullable: true,
  })
  error: any | null;

  constructor(data: Paginated<T>, error: any | null = null) {
    this.data = data;
    this.error = error;
  }
}

export class ControllerOutput<T = unknown> {
  @ApiProperty({ description: 'Resposta da API', type: Object })
  data: T;

  @ApiProperty({
    description: 'Caso tenha algum erro, ele será retornado neste campo',
    default: null,
    nullable: true,
  })
  error: any | null;

  constructor(data: T, error: any | null = null) {
    this.data = data;
    this.error = error;
  }
}

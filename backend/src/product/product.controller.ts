import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Controller('product')
export class ProductController {
  constructor(private readonly httpService: HttpService) {}

  @Get()
  async getProducts(): Promise<any> {
    const result = await lastValueFrom(
      this.httpService
        .get(`https://dummyjson.com/products`, {})
        .pipe(map((res) => res.data))
    );

    return result;
  }
}

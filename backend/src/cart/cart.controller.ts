import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Controller('cart')
export class CartController {
  constructor(private readonly httpService: HttpService) {}

  @Get()
  async getProducts(): Promise<any> {
    const result = await lastValueFrom(
      this.httpService
        .get(`https://dummyjson.com/carts`, {})
        .pipe(map((res) => res.data))
    );

    return result;
  }
}

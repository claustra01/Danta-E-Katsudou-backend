import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.user(id);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.users();
  }

  @Post()
  async createUser(
    @Body() userData: { name: string; email: string; password: string },
  ): Promise<User> {
    return this.usersService.createUser(userData);
  }
}

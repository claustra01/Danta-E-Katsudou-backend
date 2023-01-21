import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Post('auth')
  async createUser(
    @Body() userData: { name: string; lineID: string; pitcure: string },
  ): Promise<User> {
    return this.usersService.createUser(userData);
  }

  @Delete(':id')
  async deleteUserById(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}

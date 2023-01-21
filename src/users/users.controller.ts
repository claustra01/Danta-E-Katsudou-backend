import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':lineID')
  async findUserById(@Param('lineID') lineID: string): Promise<User> {
    return this.usersService.user(lineID);
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

  @Delete(':lineID')
  async deleteUserById(@Param('lineID') lineID: string) {
    return this.usersService.deleteUser(lineID);
  }
}

import { Body, Controller, Get, Param, ParseBoolPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { Request, Response } from 'express';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService:UsersService){}
  @Get()
  getUsersbyQuery(@Query('sortDesc',ParseBoolPipe)sortDesc:boolean) {
    console.log(sortDesc);
    
    return 'user from controller fetch';
  }

  @Get('fetchUsers')
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    this.userService.createUser();
    return 'Created';
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    return {id}
  }
}

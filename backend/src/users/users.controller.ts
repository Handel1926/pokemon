import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userrService: UsersService) {}
  @Get()
  findAll() {
    return [];
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userrService.findOne(id);
  }
  @Post()
  create(@Body(ValidationPipe) user: CreateUserDto) {
    return this.userrService.create(user);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) userUpdate: UpdateUserDto,
  ) {
    return this.userrService.update(id, userUpdate);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userrService.delete(id);
  }
}

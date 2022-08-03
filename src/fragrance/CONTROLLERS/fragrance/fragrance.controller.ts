import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { FragranceDto } from '../../dto/createFragrance.dto';
import { FragranceService } from '../../SERVICES/fragrance/fragrance.service';

@Controller('fragrance')
export class FragranceController {
  constructor(private readonly fragranceService: FragranceService) {}


  
  @Get()
  async getFragrance()  {
    const fragrance =await this.fragranceService.getFragrance();
    return{
      statusCode: HttpStatus.OK,
      message: "Fragrance retrieved successfully",
      fragrance,
    }
  }

  @Get(':name')
  async findOne(@Param('name') name: string)  {
    return  this.fragranceService.findOne(name);
    
  }
    @Post()
  async createFragrance (@Body() data: FragranceDto)  {
    const fragrances =await this.fragranceService.createFragrance(data);
    return{
      statusCode: HttpStatus.OK,
      message: "Fragrance created successfully",
      
    };
  }

  @Delete('name')
  async remove(@Param('name') id: string) {
    const frag = await this.fragranceService.deleteByName(id);
    return{
      statusCode: HttpStatus.OK,
      message: "Fragrance Deleted successfully",
    }
  }

  //  @Get()
  // findAll(): any[] {
  //   return this.fragranceService.findAll();
  // } 

  // @Post()
  // createFragrance(@Body() regBody: FragranceDto): any[] {
  //   return this.fragranceService.store[];
  // }

  
  // @Post()
  // createFragrance(@Body() regBody: FragranceDto): any[] {
  //   return this.fragranceService.createFragrance();
  // }


  // @Put(':id')
  // updateFragrance(@Body() updateItemDto: FragranceDto, @Param('id') id): string{
  //   return `Update ${id} - Name ${updateItemDto.name}`;

  // }

  // @Get(':name')
  // findOne(@Param('name') fragranceName: string): any{
  //   const findN = this.fragranceService.findByName(fragranceName);
  //   if (!findN) {
  //     throw new NotFoundException('Name not found')
  //   }
  //   return findN;
  // }

  // @Get (':name/delete')
  // deleteOne(@Param('name') fragranceName: string): any{
  //     this.fragranceService.deleteByName(fragranceName);
  //    return 
  // }

  // @Get(':id')
  // findOne(@Param('id')Param): any{
  //   return Param;
  // }

  // @Post()
  // createFragrance(@Body() createFragranceDto: FragranceDto): any {
  //   return this.fragranceService.store(createFragranceDto );
  // }

  // @Get()
  // findAll() {
  //   return this.fragranceService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.fragranceService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFragranceDto: UpdateFragranceDto) {
  //   return this.fragranceService.update(+id, updateFragranceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.fragranceService.remove(+id);
  // }
}

import { Injectable } from '@nestjs/common';
//import { FragranceRepo } from 'src/fragrance/repository/fragrance.repository';
import { FragranceDto } from '../../dto/createFragrance.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Fragrance } from 'src/fragrance/Entity/fragrance.entity';


@Injectable()
export class FragranceService {
  constructor( 
    @InjectRepository(Fragrance)
    private fragranceRepository: Repository<Fragrance>, 
  ){}
  //this is an array used to store values inputed by the client   
  // fragrances: any[] = [];

//This is used to return just the values inputed by the client 


async getFragrance()  {
  return  await this.fragranceRepository.find();
}

async createFragrance(data: FragranceDto )  {
  const fragrance = this.fragranceRepository.create(data);
    await this.fragranceRepository.save(data);
      return fragrance;
}

async deleteByName(fragranceName: string) {
   const fragname = this.fragranceRepository.delete(fragranceName); 
      return fragname;
    };

findOne(name: string) {
  return this.fragranceRepository.findOne({ });
    }

  // createFragrance(@Body() fragranceDto: FragranceDto): any  {
  //   return  ` name: ${FragranceDto.name} 
  //price:  ${fragranceDto.price}  
  // size:  ${fragranceDto.size}  
  // discount:  ${fragranceDto.discount}  
  // stock:  ${fragranceDto.stock}`; 
  // return fragranceDto;
  //}

//This is used to get all the values stored in the array above
  findAll(): Promise<Fragrance[]> {
    return this.fragranceRepository.find();
  }

   findByName(id: number): Promise<Fragrance>  {
    return this.fragranceRepository.findOneBy({ id });
    }

  async remove(id: number): Promise<void>{
    await this.fragranceRepository.delete(id);
  }
  
// this is used to get
  // findOne() {
  //   return this.fragrances;
  // }

  
  // findByName(fragranceName: string) {
  //   return this.fragrances.find((element) => {
  //     return element.name === fragranceName;
  //   });
  // }

  
  // deleteByName(fragranceName: string) {
  //   this.fragrances = this.fragrances.filter((element) => {
  //     return element.name != fragranceName;
  //   });
  // }
  // use the above to delete or  this below using splice

//   deleteByName(fragranceName: string) {
//     this.fragrances.forEach((element, index) => {
//       if(element.name == fragranceName) {
//         this.fragrances.splice(1, index)
//       }
//   });
// }
  
  // update(id: number) {
  //   return `This action updates a #${id} fragrance`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} fragrance`;
  // }

  store(regBody: FragranceDto){
   this.fragranceRepository.create(regBody);

    return this.findAll();
  }


}

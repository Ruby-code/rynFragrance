import { Module } from "@nestjs/common";
import { FragranceController } from "./CONTROLLERS/fragrance/fragrance.controller";
import { FragranceModule } from "./MODULES/fragrance/fragrance.module";
import { FragranceService } from "./SERVICES/fragrance/fragrance.service";


@Module({
    imports: [FragranceModule],
    providers: [FragranceService],
    controllers: [FragranceController]
})
export class FragranceHttpModule{}
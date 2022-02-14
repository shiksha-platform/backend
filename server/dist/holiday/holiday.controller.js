"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidayController = void 0;
const common_1 = require("@nestjs/common");
const holiday_dto_1 = require("./dto/holiday.dto");
const holiday_service_1 = require("./holiday.service");
let HolidayController = class HolidayController {
    constructor(holidayService) {
        this.holidayService = holidayService;
    }
    async create(holidayDto) {
        const result = await this.holidayService.createHoliday(holidayDto);
        if (!result)
            throw new common_1.HttpException('Error adding new holiday', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async findAll() {
        const result = await this.holidayService.findAllHolidays();
        if (!result)
            throw new common_1.HttpException('Error finding holidays', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async findOne(holidayId) {
        const result = await this.holidayService.findHolidayById(holidayId);
        if (!result)
            throw new common_1.HttpException('Error finding holiday by its id', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async update(holidayId, holidayDto) {
        const result = await this.holidayService.updateHoliday(holidayId, holidayDto);
        if (!result)
            throw new common_1.HttpException('Error updating holiday', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async delete(holidayId) {
        const result = await this.holidayService.deleteHoliday(holidayId);
        if (!result)
            throw new common_1.HttpException('Error deleting holiday', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async findByYear(year) {
        const result = await this.holidayService.findHolidayByYear(year);
        if (!result)
            throw new common_1.HttpException('Error finding holiday by its year', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async findByContext(context) {
        const result = await this.holidayService.findHolidayByContext(context);
        if (!result)
            throw new common_1.HttpException('Error finding holiday by its context', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [holiday_dto_1.HolidayDto]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, holiday_dto_1.HolidayDto]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/findByYear/:year'),
    __param(0, (0, common_1.Param)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "findByYear", null);
__decorate([
    (0, common_1.Get)('/findByContext/:context'),
    __param(0, (0, common_1.Param)('context')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HolidayController.prototype, "findByContext", null);
HolidayController = __decorate([
    (0, common_1.Controller)("holiday"),
    __metadata("design:paramtypes", [holiday_service_1.HolidayService])
], HolidayController);
exports.HolidayController = HolidayController;
//# sourceMappingURL=holiday.controller.js.map
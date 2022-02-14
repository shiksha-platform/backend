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
exports.HolidayService = void 0;
const common_1 = require("@nestjs/common");
const error_response_1 = require("./../error-response");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const holiday_entity_1 = require("./holiday.entity");
const success_response_1 = require("../success-response");
const express_1 = require("express");
let HolidayService = class HolidayService {
    constructor(holidayRepository) {
        this.holidayRepository = holidayRepository;
        this.entityManager = (0, typeorm_2.getManager)();
    }
    async createHoliday(holidayDto) {
        try {
            const data = await this.holidayRepository.save(holidayDto);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Holiday is created Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async findAllHolidays() {
        try {
            const data = await this.holidayRepository.find();
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Holidays found Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async findHolidayById(holidayId) {
        try {
            const data = await this.holidayRepository.findOne(holidayId);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Holiday found Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async updateHoliday(holidayId, updateHolidayto) {
        try {
            const data = await this.holidayRepository.update(holidayId, updateHolidayto);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Holiday is Updated Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async deleteHoliday(holidayId) {
        try {
            const data = await this.holidayRepository.delete(holidayId);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Holiday is Deleted Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async findHolidayByYear(year) {
        try {
            const data = await this.holidayRepository.find({ year });
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Holidays by year found Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async findHolidayByContext(context) {
        try {
            const data = await this.holidayRepository.find({ context });
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Holiday found Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
};
HolidayService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(holiday_entity_1.Holiday)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HolidayService);
exports.HolidayService = HolidayService;
//# sourceMappingURL=holiday.service.js.map
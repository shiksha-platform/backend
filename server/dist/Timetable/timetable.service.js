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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimetableService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const axios_1 = require("@nestjs/axios");
const timetable_dto_1 = require("./dto/timetable.dto");
const error_response_1 = require("./../error-response");
const timetable_response_dto_1 = require("./dto/timetable-response.dto");
const timetable_search_dto_1 = require("./dto/timetable-search.dto");
let TimetableService = class TimetableService {
    constructor(httpService) {
        this.httpService = httpService;
        this.url = `${process.env.BASE_URL}/Timetable`;
    }
    async findById(timetableId) {
        return this.httpService.get(`${this.url}/${timetableId}`)
            .pipe((0, operators_1.map)(response => {
            return new timetable_dto_1.TimetableDto(response.data);
        }), (0, operators_1.catchError)(e => {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async createTimetable(timetableDto) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.post(`${this.url}`, timetableDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return new timetable_response_dto_1.TimetableResponseDto({
                timetableRecordId: response.data.result.timetable.osid,
                responseMessage: "Timetable Saved Successfully",
                responseCode: response.data.responseCode
            });
        }), (0, operators_1.catchError)(e => {
            console.log(e.response.data);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async updateTimetable(timetableId, timetableDto) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.put(`${this.url}/${timetableId}`, timetableDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return new timetable_response_dto_1.TimetableResponseDto({
                timetableRecordId: response.data.result.timetable.osid,
                responseMessage: "Timetable Updated Successfully",
                responseCode: response.data.responseCode
            });
        }), (0, operators_1.catchError)(e => {
            console.log(e.response.data);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async searchTimetable(timetableSearchDto) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.post(`${this.url}/search`, timetableSearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return response.data.map(item => {
                return new timetable_dto_1.TimetableDto(item);
            });
        }), (0, operators_1.catchError)(e => {
            console.log(e);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async findTimetableByClass(searchClassId) {
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        var searchFilter = {
            classId: {
                "eq": searchClassId
            }
        };
        var timetableSearchDto = new timetable_search_dto_1.TimetableSearchDto({
            filters: searchFilter
        });
        console.log(timetableSearchDto);
        return this.httpService.post(`${this.url}/search`, timetableSearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return response.data.map(item => {
                return new timetable_dto_1.TimetableDto(item);
            });
        }), (0, operators_1.catchError)(e => {
            console.log(e);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(e.response.data, e.response.status);
        }));
    }
};
TimetableService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], TimetableService);
exports.TimetableService = TimetableService;
//# sourceMappingURL=timetable.service.js.map
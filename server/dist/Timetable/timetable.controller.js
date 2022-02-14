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
exports.TimetableController = void 0;
const common_1 = require("@nestjs/common");
const timetable_search_dto_1 = require("./dto/timetable-search.dto");
const timetable_dto_1 = require("./dto/timetable.dto");
const timetable_service_1 = require("./timetable.service");
let TimetableController = class TimetableController {
    constructor(timetableService) {
        this.timetableService = timetableService;
    }
    async getTimetableById(timetableId) {
        return this.timetableService.findById(timetableId);
    }
    async createTimetable(timetableDto) {
        return this.timetableService.createTimetable(timetableDto);
    }
    async updateTimetable(timetableId, timetableDto) {
        return this.timetableService.updateTimetable(timetableId, timetableDto);
    }
    async searchTimetable(timetableSearchDto) {
        return this.timetableService.searchTimetable(timetableSearchDto);
    }
    async findTimetableByClass(query) {
        return this.timetableService.findTimetableByClass('' + query);
    }
};
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Get)("/:id"),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TimetableController.prototype, "getTimetableById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [timetable_dto_1.TimetableDto]),
    __metadata("design:returntype", Promise)
], TimetableController.prototype, "createTimetable", null);
__decorate([
    (0, common_1.Put)("/:id"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, timetable_dto_1.TimetableDto]),
    __metadata("design:returntype", Promise)
], TimetableController.prototype, "updateTimetable", null);
__decorate([
    (0, common_1.Post)("/search"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [timetable_search_dto_1.TimetableSearchDto]),
    __metadata("design:returntype", Promise)
], TimetableController.prototype, "searchTimetable", null);
__decorate([
    (0, common_1.Post)("/findByClass"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TimetableController.prototype, "findTimetableByClass", null);
TimetableController = __decorate([
    (0, common_1.Controller)("timetable"),
    __metadata("design:paramtypes", [timetable_service_1.TimetableService])
], TimetableController);
exports.TimetableController = TimetableController;
//# sourceMappingURL=timetable.controller.js.map
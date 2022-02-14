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
exports.AttendanceController = void 0;
const common_1 = require("@nestjs/common");
const attendance_dto_1 = require("./dto/attendance.dto");
const attendance_service_1 = require("./attendance.service");
let AttendanceController = class AttendanceController {
    constructor(attendanceService) {
        this.attendanceService = attendanceService;
    }
    async getAttendanceById(attendanceId) {
        return this.attendanceService.findById(attendanceId);
    }
    async getAttendanceByDate(fromDate, toDate, groupId, topicId, schoolId) {
        return await this.attendanceService.findByDate(fromDate, toDate, groupId, topicId, schoolId);
    }
    async getAttendanceReports(fromDate, toDate, groupId, topicId, schoolId) {
        return await this.attendanceService.findReportRecords(fromDate, toDate, groupId, topicId, schoolId);
    }
    async createAttendance(attendanceDto) {
        return this.attendanceService.createAttendance(attendanceDto);
    }
    async updateAttendance(attendanceDto) {
        return this.attendanceService.updateAttendance(attendanceDto);
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
], AttendanceController.prototype, "getAttendanceById", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("fromDate")),
    __param(1, (0, common_1.Query)("toDate")),
    __param(2, (0, common_1.Query)("groupId")),
    __param(3, (0, common_1.Query)("topicId")),
    __param(4, (0, common_1.Query)("schoolId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "getAttendanceByDate", null);
__decorate([
    (0, common_1.Get)('/find/report'),
    __param(0, (0, common_1.Query)("fromDate")),
    __param(1, (0, common_1.Query)("toDate")),
    __param(2, (0, common_1.Query)("groupId")),
    __param(3, (0, common_1.Query)("topicId")),
    __param(4, (0, common_1.Query)("schoolId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "getAttendanceReports", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "createAttendance", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [attendance_dto_1.AttendanceDto]),
    __metadata("design:returntype", Promise)
], AttendanceController.prototype, "updateAttendance", null);
AttendanceController = __decorate([
    (0, common_1.Controller)("attendance"),
    __metadata("design:paramtypes", [attendance_service_1.AttendanceService])
], AttendanceController);
exports.AttendanceController = AttendanceController;
//# sourceMappingURL=attendance.controller.js.map
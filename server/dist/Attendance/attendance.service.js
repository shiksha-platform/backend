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
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const error_response_1 = require("./../error-response");
const typeorm_1 = require("typeorm");
const attendance_entity_1 = require("./attendance.entity");
const typeorm_2 = require("@nestjs/typeorm");
let AttendanceService = class AttendanceService {
    constructor(httpService, attendanceRepository) {
        this.httpService = httpService;
        this.attendanceRepository = attendanceRepository;
    }
    async findById(attendanceId) {
        const attendance = await this.attendanceRepository.findOne({
            where: {
                id: attendanceId,
            },
        });
        if (!attendance) {
            throw new common_1.NotFoundException(`Attendance not found for Id`);
        }
        return attendance;
    }
    async findByDate(fromDate, toDate, topicId, groupId, schoolId) {
        var query = '';
        if (fromDate != '' && fromDate != null && toDate != '' && toDate != null) {
            query += "attendance.date between :fromDate and :toDate";
        }
        else if (fromDate != '' && fromDate != null) {
            query += "attendance.date <= :fromDate";
        }
        else if (toDate != '' && toDate != null) {
            query += "attendance.date <= :toDate";
        }
        if (topicId != '' && topicId != null) {
            query += " and attendance.topicId = :topicId";
        }
        if (groupId != '' && groupId != null) {
            query += " and attendance.groupId = :groupId";
        }
        if (schoolId != '' && schoolId != null) {
            query += " and attendance.schoolId = :schoolId";
        }
        const attendance = await this.attendanceRepository.createQueryBuilder()
            .select("attendance")
            .from(attendance_entity_1.Attendance, "attendance")
            .where(query, { fromDate: fromDate,
            toDate: toDate, topicId: topicId, groupId: groupId, schoolId: schoolId }).getMany();
        if (!attendance) {
            var error = new error_response_1.ErrorResponse({
                errorCode: '' + common_1.HttpStatus.NOT_FOUND,
                errorMessage: 'Data Not found'
            });
            throw new common_1.HttpException(error, common_1.HttpStatus.NOT_FOUND);
        }
        return attendance;
    }
    async findReportRecords(fromDate, toDate, topicId, groupId, schoolId) {
        var totalArray = [];
        var query = '';
        if (fromDate != '' && fromDate != null && toDate != '' && toDate != null) {
            query += "attendance.date between :fromDate and :toDate";
        }
        else if (fromDate != '' && fromDate != null) {
            query += "attendance.date <= :fromDate";
        }
        else if (toDate != '' && toDate != null) {
            query += "attendance.date <= :toDate";
        }
        if (topicId != '' && topicId != null) {
            query += " and attendance.topicId = :topicId";
        }
        if (groupId != '' && groupId != null) {
            query += " and attendance.groupId = :groupId";
        }
        if (schoolId != '' && schoolId != null) {
            query += " and attendance.schoolId = :schoolId";
        }
        query += " and attendance.attendance='P' ";
        const attendance = await this.attendanceRepository.createQueryBuilder()
            .select("attendance.userId", "userId")
            .addSelect("count(*)", "count")
            .from(attendance_entity_1.Attendance, "attendance")
            .where(query, { fromDate: fromDate,
            toDate: toDate, topicId: topicId, groupId: groupId, schoolId: schoolId })
            .groupBy("attendance.userId")
            .orderBy("attendance.userId")
            .getRawMany();
        var presentArray = [];
        if (attendance) {
            presentArray = attendance.filter(item => (item.count >= 7));
        }
        totalArray.push(presentArray);
        if (!attendance) {
            var error = new error_response_1.ErrorResponse({
                errorCode: '' + common_1.HttpStatus.NOT_FOUND,
                errorMessage: 'Data Not found'
            });
            throw new common_1.HttpException(error, common_1.HttpStatus.NOT_FOUND);
        }
        return totalArray;
    }
    async createAttendance(attendanceDto) {
        try {
            return await this.attendanceRepository.save(attendanceDto);
        }
        catch (err) {
            var error = new error_response_1.ErrorResponse({
                errorCode: '' + common_1.HttpStatus.BAD_REQUEST,
                errorMessage: 'Bad Request - Invalid value for column ' + err.column
            });
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateAttendance(attendanceDto) {
        try {
            return await this.attendanceRepository.save(attendanceDto);
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async searchAttendance(attendanceSearchDto) {
    }
    async findAttendanceByClass(searchClassId, fromDate, toDate) {
    }
    async findAttendanceByClassAndSubject(classId, subjectId, fromDate, toDate) {
    }
};
AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(attendance_entity_1.Attendance)),
    __metadata("design:paramtypes", [axios_1.HttpService,
        typeorm_1.Repository])
], AttendanceService);
exports.AttendanceService = AttendanceService;
//# sourceMappingURL=attendance.service.js.map
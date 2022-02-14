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
exports.TeacherController = void 0;
const common_1 = require("@nestjs/common");
const teacher_search_dto_1 = require("./dto/teacher-search.dto");
const teacher_dto_1 = require("./dto/teacher.dto");
const teacher_service_1 = require("./teacher.service");
let TeacherController = class TeacherController {
    constructor(teacherService) {
        this.teacherService = teacherService;
    }
    async getTeacherById(teacherId) {
        return this.teacherService.findById(teacherId);
    }
    async createTeacher(teacherDto) {
        return this.teacherService.createTeacher(teacherDto);
    }
    async updateTeacher(teacherId, teacherDto) {
        return this.teacherService.updateTeacher(teacherId, teacherDto);
    }
    async searchTeacher(teacherSearchDto) {
        return this.teacherService.searchTeacher(teacherSearchDto);
    }
    async findTeacherBySubject(subjectId) {
        return this.teacherService.findTeacherBySubject('' + subjectId);
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
], TeacherController.prototype, "getTeacherById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [teacher_dto_1.TeacherDto]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "createTeacher", null);
__decorate([
    (0, common_1.Put)("/:id"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, teacher_dto_1.TeacherDto]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "updateTeacher", null);
__decorate([
    (0, common_1.Post)("/search"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [teacher_search_dto_1.TeacherSearchDto]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "searchTeacher", null);
__decorate([
    (0, common_1.Post)("/findBySubject"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Query)('subjectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "findTeacherBySubject", null);
TeacherController = __decorate([
    (0, common_1.Controller)("teacher"),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService])
], TeacherController);
exports.TeacherController = TeacherController;
//# sourceMappingURL=teacher.controller.js.map
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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const student_search_dto_1 = require("./dto/student-search.dto");
const student_dto_1 = require("./dto/student.dto");
const student_service_1 = require("./student.service");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async getStudentById(studentId) {
        return this.studentService.findById(studentId);
    }
    async createStudent(studentDto) {
        return this.studentService.createStudent(studentDto);
    }
    async updateStudent(studentId, studentDto) {
        return this.studentService.updateStudent(studentId, studentDto);
    }
    async searchStudent(studentSearchDto) {
        return this.studentService.searchStudent(studentSearchDto);
    }
    async findStudentByClass(classId) {
        return this.studentService.findStudentByClass('' + classId);
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
], StudentController.prototype, "getStudentById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_dto_1.StudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "createStudent", null);
__decorate([
    (0, common_1.Put)("/:id"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, student_dto_1.StudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "updateStudent", null);
__decorate([
    (0, common_1.Post)("/search"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_search_dto_1.StudentSearchDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "searchStudent", null);
__decorate([
    (0, common_1.Post)("/findByClass"),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.SerializeOptions)({
        strategy: 'excludeAll'
    }),
    __param(0, (0, common_1.Query)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findStudentByClass", null);
StudentController = __decorate([
    (0, common_1.Controller)("student"),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map
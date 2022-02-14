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
exports.StudentDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class StudentDto {
    constructor(obj) {
        Object.assign(this, obj);
    }
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], StudentDto.prototype, "osid", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(16),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "aadhaar", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "refStudentId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "firstName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], StudentDto.prototype, "contactNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], StudentDto.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "socialCategory", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "iscwsn", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "religion", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "singleGirl", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "weight", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "height", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "bloodGroup", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "birthDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "homeless", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "bpl", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "migrant", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "schoolId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "classId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "studentId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StudentDto.prototype, "studentName", void 0);
exports.StudentDto = StudentDto;
//# sourceMappingURL=student.dto.js.map
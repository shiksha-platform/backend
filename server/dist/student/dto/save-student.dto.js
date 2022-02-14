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
exports.SaveStudentDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class SaveStudentDto {
    constructor(obj) {
        Object.keys(obj).forEach(key => obj[key] === '' ? delete obj[key] : {});
        Object.assign(this, obj);
    }
}
__decorate([
    (0, class_validator_1.MaxLength)(16),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "aadhaar", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "refStudentId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "firstName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "contactNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "socialCategory", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "iscwsn", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "religion", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "singleGirl", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "weight", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "height", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "bloodGroup", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "birthDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "homeless", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "bpl", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "migrant", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "schoolId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "classId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveStudentDto.prototype, "studentId", void 0);
exports.SaveStudentDto = SaveStudentDto;
//# sourceMappingURL=save-student.dto.js.map
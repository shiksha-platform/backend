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
exports.SaveTeacherDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class SaveTeacherDto {
    constructor(obj) {
        Object.keys(obj).forEach(key => obj[key] === '' ? delete obj[key] : {});
        Object.assign(this, obj);
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "refTeacherId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "firstName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "contactNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "socialCategory", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "birthDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "designation", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "cadre", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "profQualification", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "joiningDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "subjectId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "bloodGroup", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "maritalStatus", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "blockId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "address", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "compSkills", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "schoolId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "disability", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "religion", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "homeDistance", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "roles", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "acrId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "retirementDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveTeacherDto.prototype, "workingStatus", void 0);
exports.SaveTeacherDto = SaveTeacherDto;
//# sourceMappingURL=save-teacher.dto.js.map
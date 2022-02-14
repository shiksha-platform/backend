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
exports.SchoolDto = void 0;
const class_transformer_1 = require("class-transformer");
class SchoolDto {
    constructor(obj) {
        Object.assign(this, obj);
    }
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "osid", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "schoolId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "refSchoolId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "regulatorName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "schoolCategory", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "locationType", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "districtId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "blockId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "clusterId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "villageId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "pincode", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "assemblyConst", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "parlConst", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "gpsPoints", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "startYear", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "teacherId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "instMedium", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "upgradeYear", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "resIdenceType", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "shiftId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SchoolDto.prototype, "sessionId", void 0);
exports.SchoolDto = SchoolDto;
//# sourceMappingURL=school.dto.js.map
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
exports.SaveSchoolDto = void 0;
const class_transformer_1 = require("class-transformer");
class SaveSchoolDto {
    constructor(obj) {
        Object.keys(obj).forEach(key => obj[key] === '' ? delete obj[key] : {});
        Object.assign(this, obj);
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "schoolId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "refSchoolId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "regulatorName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "schoolCategory", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "locationType", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "districtId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "blockId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "clusterId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "villageId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "pincode", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "assemblyConst", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "parlConst", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "gpsPoints", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "startYear", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "teacherId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "instMedium", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "upgradeYear", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "resIdenceType", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "shiftId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SaveSchoolDto.prototype, "sessionId", void 0);
exports.SaveSchoolDto = SaveSchoolDto;
//# sourceMappingURL=save-school.dto.js.map
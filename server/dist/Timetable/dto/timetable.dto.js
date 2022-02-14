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
exports.TimetableDto = void 0;
const class_transformer_1 = require("class-transformer");
class TimetableDto {
    constructor(partial) {
        Object.assign(this, partial);
        this.timetableRecordId = `${this.osid}`;
        this.dayOfWeek = `${this.dayOfWeek}` == null || undefined || 'undefined' ? "" : `${this.dayOfWeek}`;
        this.inTime = `${this.inTime}` == null || undefined || 'undefined' ? "" : `${this.inTime}`;
        this.outTime = `${this.outTime}` == null || undefined || 'undefined' ? "" : `${this.outTime}`;
        this.subjectId = `${this.subjectId}` == null || undefined || 'undefined' ? "" : `${this.subjectId}`;
        this.teacherId = `${this.teacherId}` == null || undefined || 'undefined' ? "" : `${this.teacherId}`;
        this.schoolId = `${this.schoolId}` == null || undefined || 'undefined' ? "" : `${this.schoolId}`;
        this.classId = `${this.classId}` == null || undefined || 'undefined' ? "" : `${this.classId}`;
    }
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], TimetableDto.prototype, "osid", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TimetableDto.prototype, "timetableRecordId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TimetableDto.prototype, "schoolId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TimetableDto.prototype, "classId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TimetableDto.prototype, "teacherId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TimetableDto.prototype, "subjectId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TimetableDto.prototype, "dayOfWeek", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TimetableDto.prototype, "inTime", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TimetableDto.prototype, "outTime", void 0);
exports.TimetableDto = TimetableDto;
//# sourceMappingURL=timetable.dto.js.map
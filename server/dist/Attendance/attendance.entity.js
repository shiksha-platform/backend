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
exports.Attendance = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../model/base.entity");
let Attendance = class Attendance extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Attendance.prototype, "schoolId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Attendance.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Attendance.prototype, "groupId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Attendance.prototype, "topicId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Attendance.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Attendance.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Attendance.prototype, "attendance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Attendance.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Attendance.prototype, "approved", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Attendance.prototype, "approvedBy", void 0);
Attendance = __decorate([
    (0, typeorm_1.Entity)({ name: 'attendance' })
], Attendance);
exports.Attendance = Attendance;
//# sourceMappingURL=attendance.entity.js.map
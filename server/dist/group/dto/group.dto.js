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
exports.GroupDto = void 0;
const class_transformer_1 = require("class-transformer");
class GroupDto {
    constructor(partial) {
        Object.assign(this, partial);
        this.groupId = `${this.osid}`;
        this.schoolId = `${this.schoolId}` == null || undefined || 'undefined' ? "" : `${this.schoolId}`;
        this.name = `${this.name}` == null || undefined || 'undefined' ? "" : `${this.name}`;
        this.type = `${this.type}` == null || undefined || 'undefined' ? "" : `${this.type}`;
        this.status = `${this.status}` == null || undefined || 'undefined' ? "" : `${this.status}`;
    }
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], GroupDto.prototype, "osid", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GroupDto.prototype, "groupId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GroupDto.prototype, "schoolId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GroupDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GroupDto.prototype, "type", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GroupDto.prototype, "status", void 0);
exports.GroupDto = GroupDto;
//# sourceMappingURL=group.dto.js.map
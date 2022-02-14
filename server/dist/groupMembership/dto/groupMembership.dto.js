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
exports.GroupMembershipDto = void 0;
const class_transformer_1 = require("class-transformer");
class GroupMembershipDto {
    constructor(partial) {
        Object.assign(this, partial);
        this.groupMembershipId = `${this.osid}`;
        this.groupId = `${this.groupId}` == null || undefined || 'undefined' ? "" : `${this.groupId}`;
        this.schoolId = `${this.schoolId}` == null || undefined || 'undefined' ? "" : `${this.schoolId}`;
        this.userId = `${this.userId}` == null || undefined || 'undefined' ? "" : `${this.userId}`;
        this.role = `${this.role}` == null || undefined || 'undefined' ? "" : `${this.role}`;
    }
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], GroupMembershipDto.prototype, "osid", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GroupMembershipDto.prototype, "groupMembershipId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GroupMembershipDto.prototype, "groupId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GroupMembershipDto.prototype, "schoolId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GroupMembershipDto.prototype, "userId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GroupMembershipDto.prototype, "role", void 0);
exports.GroupMembershipDto = GroupMembershipDto;
//# sourceMappingURL=groupMembership.dto.js.map
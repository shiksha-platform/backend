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
exports.GroupMembershipController = void 0;
const common_1 = require("@nestjs/common");
const groupMembership_dto_1 = require("./dto/groupMembership.dto");
const groupMembership_service_1 = require("./groupMembership.service");
let GroupMembershipController = class GroupMembershipController {
    constructor(groupMembershipService) {
        this.groupMembershipService = groupMembershipService;
    }
    async create(createGroupMembershipDto) {
        const result = await this.groupMembershipService.createGroupMembership(createGroupMembershipDto);
        if (!result)
            throw new common_1.HttpException('Error adding new groupMembership', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async get() {
        const result = await this.groupMembershipService.getGroupMembership();
        if (!result)
            throw new common_1.HttpException('Error finding groupMembership', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async findOne(id) {
        const result = await this.groupMembershipService.findGroupMembershipById(id);
        if (!result)
            throw new common_1.HttpException('Error finding groupMembership by its id', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async findBySchoolId(schoolId) {
        const result = await this.groupMembershipService.findGroupMembershipBySchoolId(schoolId);
        if (!result)
            throw new common_1.HttpException('Error finding groupMembership by school id', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async find(userId) {
        const result = await this.groupMembershipService.findGroupMembershipByUserId(userId);
        if (!result)
            throw new common_1.HttpException('Error finding groupMembership by its userId', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async update(id, updateGroupDto) {
        const result = await this.groupMembershipService.updateGroupMembership(id, updateGroupDto);
        if (!result)
            throw new common_1.HttpException('Error updating groupMembership', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async delete(id) {
        const result = await this.groupMembershipService.deleteGroupMembership(id);
        if (!result)
            throw new common_1.HttpException('Error deleting groupMembership', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [groupMembership_dto_1.GroupMembershipDto]),
    __metadata("design:returntype", Promise)
], GroupMembershipController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GroupMembershipController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupMembershipController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('school/:schoolId'),
    __param(0, (0, common_1.Param)('schoolId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupMembershipController.prototype, "findBySchoolId", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupMembershipController.prototype, "find", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, groupMembership_dto_1.GroupMembershipDto]),
    __metadata("design:returntype", Promise)
], GroupMembershipController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupMembershipController.prototype, "delete", null);
GroupMembershipController = __decorate([
    (0, common_1.Controller)('groupMembership'),
    __metadata("design:paramtypes", [groupMembership_service_1.GroupMembershipService])
], GroupMembershipController);
exports.GroupMembershipController = GroupMembershipController;
//# sourceMappingURL=groupMembership.controller.js.map
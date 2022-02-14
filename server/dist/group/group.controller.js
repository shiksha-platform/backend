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
exports.GroupController = void 0;
const common_1 = require("@nestjs/common");
const group_dto_1 = require("./dto/group.dto");
const group_service_1 = require("./group.service");
let GroupController = class GroupController {
    constructor(groupService) {
        this.groupService = groupService;
    }
    async create(createGroupDto) {
        const result = await this.groupService.createGroup(createGroupDto);
        if (!result)
            throw new common_1.HttpException('Error adding new group', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async get() {
        const result = await this.groupService.getGroup();
        if (!result)
            throw new common_1.HttpException('Error finding groups', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async findOne(id) {
        const result = await this.groupService.findGroupById(id);
        if (!result)
            throw new common_1.HttpException('Error finding group by its id', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async update(id, updateGroupDto) {
        const result = await this.groupService.updateGroup(id, updateGroupDto);
        if (!result)
            throw new common_1.HttpException('Error updating group', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
    async delete(id) {
        const result = await this.groupService.deleteGroup(id);
        if (!result)
            throw new common_1.HttpException('Error deleting group', common_1.HttpStatus.BAD_REQUEST);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [group_dto_1.GroupDto]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, group_dto_1.GroupDto]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "delete", null);
GroupController = __decorate([
    (0, common_1.Controller)('group'),
    __metadata("design:paramtypes", [group_service_1.GroupService])
], GroupController);
exports.GroupController = GroupController;
//# sourceMappingURL=group.controller.js.map
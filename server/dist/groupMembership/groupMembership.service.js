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
exports.GroupMembershipService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const express_1 = require("express");
const error_response_1 = require("./../error-response");
const success_response_1 = require("./../success-response");
const typeorm_2 = require("typeorm");
const groupMembership_entity_1 = require("./groupMembership.entity");
let GroupMembershipService = class GroupMembershipService {
    constructor(groupMembershipRepository) {
        this.groupMembershipRepository = groupMembershipRepository;
        this.entityManager = (0, typeorm_2.getManager)();
    }
    async createGroupMembership(groupMembershipDto) {
        try {
            const data = await this.groupMembershipRepository.save(groupMembershipDto);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Group membership is created Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async getGroupMembership() {
        try {
            const data = await this.groupMembershipRepository.find();
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Group memberships found Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async findGroupMembershipById(groupMembershipId) {
        try {
            const data = await this.groupMembershipRepository.findOne(groupMembershipId);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Group membership found Successfully by its id',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async findGroupMembershipBySchoolId(schoolId) {
        try {
            const data = await this.groupMembershipRepository.find({ schoolId });
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Group membership found Successfully by schoolId',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async findGroupMembershipByUserId(userId) {
        try {
            const data = await this.groupMembershipRepository.find({ userId });
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Group membership found Successfully by userId',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async updateGroupMembership(groupMembershipId, updateGroupMembershipDto) {
        try {
            const data = await this.groupMembershipRepository.update(groupMembershipId, updateGroupMembershipDto);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Group membership is updated Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
    async deleteGroupMembership(groupMembershipId) {
        try {
            const data = await this.groupMembershipRepository.delete(groupMembershipId);
            return new success_response_1.SuccessResponse({
                statusCode: express_1.response.statusCode,
                message: 'Group membership is deleted Successfully',
                data: data,
            });
        }
        catch (e) {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }
    }
};
GroupMembershipService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(groupMembership_entity_1.GroupMembership)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GroupMembershipService);
exports.GroupMembershipService = GroupMembershipService;
//# sourceMappingURL=groupMembership.service.js.map
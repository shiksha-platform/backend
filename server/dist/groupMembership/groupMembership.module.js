"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupMembershipModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const groupMembership_controller_1 = require("./groupMembership.controller");
const groupMembership_entity_1 = require("./groupMembership.entity");
const groupMembership_service_1 = require("./groupMembership.service");
let GroupMembershipModule = class GroupMembershipModule {
};
GroupMembershipModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([groupMembership_entity_1.GroupMembership])],
        controllers: [groupMembership_controller_1.GroupMembershipController],
        providers: [groupMembership_service_1.GroupMembershipService]
    })
], GroupMembershipModule);
exports.GroupMembershipModule = GroupMembershipModule;
//# sourceMappingURL=groupMembership.module.js.map
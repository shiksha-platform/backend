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
exports.Topic = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let Topic = class Topic extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Topic.prototype, "schoolId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], Topic.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], Topic.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], Topic.prototype, "status", void 0);
Topic = __decorate([
    (0, typeorm_1.Entity)({ name: 'topic' })
], Topic);
exports.Topic = Topic;
//# sourceMappingURL=topic.entity.js.map
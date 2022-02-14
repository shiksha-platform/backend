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
exports.School = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let School = class School extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], School.prototype, "name", void 0);
School = __decorate([
    (0, typeorm_1.Entity)({ name: 'school' })
], School);
exports.School = School;
//# sourceMappingURL=school.entity.js.map
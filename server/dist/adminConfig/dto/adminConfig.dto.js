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
exports.AdminConfigDto = void 0;
const class_transformer_1 = require("class-transformer");
class AdminConfigDto {
    constructor(partial) {
        Object.assign(this, partial);
        this.adminConfigId = `${this.osid}`;
        this.key = `${this.key}` == null || undefined || 'undefined' ? "" : `${this.key}`;
        this.value = `${this.value}` == null || undefined || 'undefined' ? "" : `${this.value}`;
        this.context = `${this.context}` == null || undefined || 'undefined' ? "" : `${this.context}`;
        this.contextId = `${this.contextId}` == null || undefined || 'undefined' ? "" : `${this.contextId}`;
    }
}
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], AdminConfigDto.prototype, "osid", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdminConfigDto.prototype, "adminConfigId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdminConfigDto.prototype, "key", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdminConfigDto.prototype, "value", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdminConfigDto.prototype, "context", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AdminConfigDto.prototype, "contextId", void 0);
exports.AdminConfigDto = AdminConfigDto;
//# sourceMappingURL=adminConfig.dto.js.map
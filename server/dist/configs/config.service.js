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
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const axios_1 = require("@nestjs/axios");
const config_dto_1 = require("./dto/config.dto");
const error_response_1 = require("./../error-response");
const config_response_dto_1 = require("./dto/config-response.dto");
const config_search_dto_1 = require("./dto/config-search.dto");
require("dotenv").config();
let ConfigService = class ConfigService {
    constructor(httpService) {
        this.httpService = httpService;
        this.url = `${process.env.BASE_URL}/Config`;
    }
    async findById(configId) {
        return this.httpService.get(`${this.url}/${configId}`).pipe((0, operators_1.map)((response) => {
            return new config_dto_1.ConfigDto(response.data);
        }), (0, operators_1.catchError)((e) => {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg,
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async createConfig(configDto) {
        const headersRequest = {
            "Content-Type": "application/json",
        };
        return this.httpService
            .post(`${this.url}`, configDto, { headers: headersRequest })
            .pipe((0, operators_1.map)((response) => {
            return new config_response_dto_1.ConfigResponseDto({
                configId: response.data.result.config.osid,
                responseMessage: "Config Saved Successfully",
                responseCode: response.data.responseCode,
            });
        }), (0, operators_1.catchError)((e) => {
            console.log(e.response.data);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg,
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async updateConfig(configId, configDto) {
        const headersRequest = {
            "Content-Type": "application/json",
        };
        return this.httpService
            .put(`${this.url}/${configId}`, configDto, { headers: headersRequest })
            .pipe((0, operators_1.map)((response) => {
            return new config_response_dto_1.ConfigResponseDto({
                configId: response.data.result.config.osid,
                responseMessage: "Config Updated Successfully",
                responseCode: response.data.responseCode,
            });
        }), (0, operators_1.catchError)((e) => {
            console.log(e.response.data);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg,
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async searchConfig(configSearchDto) {
        const headersRequest = {
            "Content-Type": "application/json",
        };
        return this.httpService
            .post(`${this.url}/search`, configSearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)((response) => {
            return response.data.map((item) => {
                return new config_dto_1.ConfigDto(item);
            });
        }), (0, operators_1.catchError)((e) => {
            console.log(e);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg,
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async findConfigByKey(key) {
        const headersRequest = {
            "Content-Type": "application/json",
        };
        var searchFilter = {
            key: {
                eq: key,
            },
        };
        var configSearchDto = new config_search_dto_1.ConfigSearchDto({
            filters: searchFilter,
        });
        return this.httpService
            .post(`${this.url}/search`, configSearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)((response) => {
            return response.data.map((item) => {
                return new config_dto_1.ConfigDto(item);
            });
        }), (0, operators_1.catchError)((e) => {
            console.log(e);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg,
            });
            throw new common_1.HttpException(e.response.data, e.response.status);
        }));
    }
    async findConfigByContext(context) {
        const headersRequest = {
            "Content-Type": "application/json",
        };
        var searchFilter = {
            context: {
                eq: context,
            },
        };
        var configSearchDto = new config_search_dto_1.ConfigSearchDto({
            filters: searchFilter,
        });
        return this.httpService
            .post(`${this.url}/search`, configSearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)((response) => {
            return response.data.map((item) => {
                return new config_dto_1.ConfigDto(item);
            });
        }), (0, operators_1.catchError)((e) => {
            console.log(e);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg,
            });
            throw new common_1.HttpException(e.response.data, e.response.status);
        }));
    }
    async findAll() {
        const headersRequest = {
            "Content-Type": "application/json",
        };
        var searchFilter = {};
        var configSearchDto = new config_search_dto_1.ConfigSearchDto({
            filters: searchFilter,
        });
        return this.httpService
            .post(`${this.url}/search`, configSearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)((response) => {
            return response.data.map((item) => {
                return new config_dto_1.ConfigDto(item);
            });
        }), (0, operators_1.catchError)((e) => {
            console.log(e);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg,
            });
            throw new common_1.HttpException(e.response.data, e.response.status);
        }));
    }
};
ConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map
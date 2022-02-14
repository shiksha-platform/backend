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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const axios_1 = require("@nestjs/axios");
const student_dto_1 = require("./dto/student.dto");
const error_response_1 = require("./../error-response");
const student_response_dto_1 = require("./dto/student-response.dto");
const student_search_dto_1 = require("./dto/student-search.dto");
const Mustache = require("mustache");
const save_student_dto_1 = require("./dto/save-student.dto");
let StudentService = class StudentService {
    constructor(httpService) {
        this.httpService = httpService;
        this.url = `${process.env.BASE_URL}/Student`;
    }
    async findById(studentId) {
        var template = require('./../../response_templates/student/find_student_response.json');
        return this.httpService.get(`${this.url}/${studentId}`)
            .pipe((0, operators_1.map)(response => {
            var output = Mustache.render(JSON.stringify(template), response.data);
            return new student_dto_1.StudentDto(JSON.parse(output));
        }), (0, operators_1.catchError)(e => {
            var _a, _b, _c, _d;
            var error = new error_response_1.ErrorResponse({
                errorCode: (_a = e.response) === null || _a === void 0 ? void 0 : _a.status,
                errorMessage: (_d = (_c = (_b = e.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.params) === null || _d === void 0 ? void 0 : _d.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async createStudent(studentDto) {
        var responseTemplate = require('./../../response_templates/student/create_student_response.json');
        var requestTemplate = require('./../../response_templates/student/create_student_request.json');
        var input = Mustache.render(JSON.stringify(requestTemplate), studentDto);
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.post(`${this.url}`, new save_student_dto_1.SaveStudentDto(JSON.parse(input)), { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            var output = Mustache.render(JSON.stringify(responseTemplate), response.data);
            return new student_response_dto_1.StudentResponseDto(JSON.parse(output));
        }), (0, operators_1.catchError)(e => {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async updateStudent(studentId, studentDto) {
        var responseTemplate = require('./../../response_templates/student/create_student_response.json');
        var requestTemplate = require('./../../response_templates/student/create_student_request.json');
        var input = Mustache.render(JSON.stringify(requestTemplate), studentDto);
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.patch(`${this.url}/${studentId}`, new save_student_dto_1.SaveStudentDto(JSON.parse(input)), { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            var output = Mustache.render(JSON.stringify(responseTemplate), response.data);
            return new student_dto_1.StudentDto(JSON.parse(output));
        }), (0, operators_1.catchError)(e => {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async searchStudent(studentSearchDto) {
        var template = require('./../../response_templates/student/find_student_response.json');
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        return this.httpService.post(`${this.url}/search`, studentSearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return response.data.map(item => {
                var output = Mustache.render(JSON.stringify(template), item);
                return new student_dto_1.StudentDto(JSON.parse(output));
            });
        }), (0, operators_1.catchError)(e => {
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(error, e.response.status);
        }));
    }
    async findStudentByClass(searchClassId) {
        var template = require('./../../response_templates/student/find_student_response.json');
        const headersRequest = {
            'Content-Type': 'application/json',
        };
        var searchFilter = {
            classId: {
                "eq": searchClassId
            }
        };
        var studentSearchDto = new student_search_dto_1.StudentSearchDto({
            filters: searchFilter
        });
        return this.httpService.post(`${this.url}/search`, studentSearchDto, { headers: headersRequest })
            .pipe((0, operators_1.map)(response => {
            return response.data.map(item => {
                var output = Mustache.render(JSON.stringify(template), item);
                return new student_dto_1.StudentDto(JSON.parse(output));
            });
        }), (0, operators_1.catchError)(e => {
            console.log(e);
            var error = new error_response_1.ErrorResponse({
                errorCode: e.response.status,
                errorMessage: e.response.data.params.errmsg
            });
            throw new common_1.HttpException(e.response.data, e.response.status);
        }));
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksService = void 0;
const common_1 = require("@nestjs/common");
let LinksService = class LinksService {
    create(createLinkDto) {
        return 'This action adds a new link';
    }
    findAll() {
        return `This action returns all links`;
    }
    findOne(id) {
        return `This action returns a #${id} link`;
    }
    update(id, updateLinkDto) {
        return `This action updates a #${id} link`;
    }
    remove(id) {
        return `This action removes a #${id} link`;
    }
};
exports.LinksService = LinksService;
exports.LinksService = LinksService = __decorate([
    (0, common_1.Injectable)()
], LinksService);
//# sourceMappingURL=links.service.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import AccountEntity from '../entities/Account.entity.js';
import UniqueEntity from '../entities/Unique.entity.js';
import ProjectRepository from '../repositories/ProjectRepository.js';
import { Entity, ManyToOne, Property } from '@mikro-orm/core';
let ProjectEntity = class ProjectEntity extends UniqueEntity {
    account;
    name;
    description;
};
__decorate([
    ManyToOne(() => AccountEntity)
], ProjectEntity.prototype, "account", void 0);
__decorate([
    Property()
], ProjectEntity.prototype, "name", void 0);
__decorate([
    Property()
], ProjectEntity.prototype, "description", void 0);
ProjectEntity = __decorate([
    Entity({ repository: () => ProjectRepository })
], ProjectEntity);
export default ProjectEntity;

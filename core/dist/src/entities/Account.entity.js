var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import AuthenticationEntity from '../entities/Authentication.entity.js';
import ProjectEntity from '../entities/Project.entity.js';
import UniqueEntity from '../entities/Unique.entity.js';
import AccountRepository from '../repositories/AccountRepository.js';
import { Cascade, Collection, Entity, OneToMany, OneToOne, Property } from '@mikro-orm/core';
let AccountEntity = class AccountEntity extends UniqueEntity {
    authentication;
    projects = new Collection(this);
    email;
    username;
};
__decorate([
    OneToOne(() => AuthenticationEntity, authentication => authentication.account, { cascade: [Cascade.ALL] })
], AccountEntity.prototype, "authentication", void 0);
__decorate([
    OneToMany(() => ProjectEntity, project => project.account, { cascade: [Cascade.ALL] })
], AccountEntity.prototype, "projects", void 0);
__decorate([
    Property({ hidden: true, unique: true })
], AccountEntity.prototype, "email", void 0);
__decorate([
    Property({ unique: true })
], AccountEntity.prototype, "username", void 0);
AccountEntity = __decorate([
    Entity({ repository: () => AccountRepository })
], AccountEntity);
export default AccountEntity;

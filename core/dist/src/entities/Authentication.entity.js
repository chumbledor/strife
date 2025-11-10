var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseEntity from '../entities/Base.entity.js';
import AuthenticationRepository from '../repositories/AuthenticationRepository.js';
import { BeforeCreate, BeforeUpdate, Entity, OneToOne, Property } from '@mikro-orm/core';
import { hash, verify } from 'argon2';
let AuthenticationEntity = class AuthenticationEntity extends BaseEntity {
    account;
    password;
    accessToken;
    refreshToken;
    async hashPassword(args) {
        const password = args.changeSet?.payload.password;
        if (!password)
            return;
        this.password = await hash(password);
    }
    async verifyPassword(password) {
        return verify(this.password, password);
    }
};
__decorate([
    OneToOne({ primary: true })
], AuthenticationEntity.prototype, "account", void 0);
__decorate([
    Property({ hidden: true, lazy: true })
], AuthenticationEntity.prototype, "password", void 0);
__decorate([
    Property({ persist: false })
], AuthenticationEntity.prototype, "accessToken", void 0);
__decorate([
    Property({ persist: false })
], AuthenticationEntity.prototype, "refreshToken", void 0);
__decorate([
    BeforeCreate(),
    BeforeUpdate()
], AuthenticationEntity.prototype, "hashPassword", null);
AuthenticationEntity = __decorate([
    Entity({ repository: () => AuthenticationRepository })
], AuthenticationEntity);
export default AuthenticationEntity;

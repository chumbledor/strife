var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import di from '../DependencyInjection.js';
import { NoSQLServiceId } from '../di/NoSQLInjector.js';
import AccountEntity from '../entities/Account.entity.js';
import UniqueEntity from '../entities/Unique.entity.js';
import { BeforeCreate, BeforeDelete, Entity, ManyToOne, Property } from '@mikro-orm/core';
import mongoose from 'mongoose';
const RootDirectoryName = 'root';
let ProjectEntity = class ProjectEntity extends UniqueEntity {
    account;
    name;
    description;
    rootFileSystemObjectId;
    async getFileSystemRootDirectory() {
        if (!mongoose.isValidObjectId(this.rootFileSystemObjectId))
            return null;
        const nosql = await di.getAsync(NoSQLServiceId);
        return nosql.fileSystemDirectory.findById(this.rootFileSystemObjectId);
    }
    async createFileSystem(args) {
        const nosql = await di.getAsync(NoSQLServiceId);
        const rootfileSystemObject = new nosql.fileSystemDirectory({ projectId: this.id, name: RootDirectoryName });
        await rootfileSystemObject.save();
        this.rootFileSystemObjectId = rootfileSystemObject.id.toString();
    }
    async deleteFileSystem(args) {
        const nosql = await di.getAsync(NoSQLServiceId);
        await nosql.fileSystemDirectory.deleteOne({ _id: this.rootFileSystemObjectId });
    }
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
__decorate([
    Property()
], ProjectEntity.prototype, "rootFileSystemObjectId", void 0);
__decorate([
    BeforeCreate()
], ProjectEntity.prototype, "createFileSystem", null);
__decorate([
    BeforeDelete()
], ProjectEntity.prototype, "deleteFileSystem", null);
ProjectEntity = __decorate([
    Entity()
], ProjectEntity);
export default ProjectEntity;

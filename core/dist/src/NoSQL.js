var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import di from './DependencyInjection.js';
import FileSystemDirectoryModel from './models/FileSystemDirectoryModel.js';
import FileSystemFileModel from './models/FileSystemFileModel.js';
import FileSystemObjectModel from './models/FileSystemObjectModel.js';
import { NoSQLServiceId } from '../interfaces/INoSQL.js';
import { injectable } from 'inversify';
import mongoose from 'mongoose';
let NoSQL = class NoSQL {
    _odm;
    get odm() {
        return this._odm;
    }
    _fileSystemObject;
    get fileSystemObject() {
        return this._fileSystemObject;
    }
    _fileSystemDirectory;
    get fileSystemDirectory() {
        return this._fileSystemDirectory;
    }
    _fileSystemFile;
    get fileSystemFile() {
        return this._fileSystemFile;
    }
    _app;
    async initialize() {
        this._odm = await mongoose.connect(`mongodb://${process.env.NOSQL_HOST}:${process.env.NOSQL_PORT}`, {
            dbName: process.env.NOSQL_DATABASE,
            authSource: process.env.NOSQL_AUTH_SOURCE,
            user: process.env.NOSQL_USER,
            pass: process.env.NOSQL_PASSWORD
        });
        this._fileSystemObject = FileSystemObjectModel;
        this._fileSystemDirectory = FileSystemDirectoryModel;
        this._fileSystemFile = FileSystemFileModel;
    }
    async update() { }
};
NoSQL = __decorate([
    injectable()
], NoSQL);
di.bind(NoSQLServiceId).to(NoSQL).inSingletonScope();

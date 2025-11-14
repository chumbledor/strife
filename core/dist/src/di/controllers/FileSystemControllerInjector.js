import FileSystemController from '../../controllers/FileSystemController.js';
import di from '../../DependencyInjection.js';
export const FileSystemControllerServiceId = Symbol.for('FileSystemControllerServiceId');
di.bind(FileSystemControllerServiceId)
    .to(FileSystemController)
    .inSingletonScope()
    .onActivation(onActivation);
async function onActivation(_context, injectable) {
    await injectable.initialize();
    return injectable;
}

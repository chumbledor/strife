import ProjectController from '../../controllers/ProjectController.js';
import di from '../../DependencyInjection.js';
export const ProjectControllerServiceId = Symbol.for('ProjectControllerServiceId');
di.bind(ProjectControllerServiceId)
    .to(ProjectController)
    .inSingletonScope()
    .onActivation(onActivation);
async function onActivation(_context, injectable) {
    await injectable.initialize();
    return injectable;
}

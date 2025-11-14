import AuthenticationController from '../../controllers/AuthenticationController.js';
import di from '../../DependencyInjection.js';
export const AuthenticationControllerServiceId = Symbol.for('AuthenticationControllerServiceId');
di.bind(AuthenticationControllerServiceId)
    .to(AuthenticationController)
    .inSingletonScope()
    .onActivation(onActivation);
async function onActivation(_context, injectable) {
    await injectable.initialize();
    return injectable;
}

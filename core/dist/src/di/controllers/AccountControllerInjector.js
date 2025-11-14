import AccountController from '../../controllers/AccountController.js';
import di from '../../DependencyInjection.js';
export const AccountControllerServiceId = Symbol.for('AccountControllerServiceId');
di.bind(AccountControllerServiceId)
    .to(AccountController)
    .inSingletonScope()
    .onActivation(onActivation);
async function onActivation(_context, injectable) {
    await injectable.initialize();
    return injectable;
}

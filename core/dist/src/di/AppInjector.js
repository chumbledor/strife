import App from '../App.js';
import di from '../DependencyInjection.js';
export const AppServiceId = Symbol.for('AppServiceId');
di.bind(AppServiceId)
    .to(App)
    .inSingletonScope()
    .onActivation(onActivation);
async function onActivation(_context, injectable) {
    await injectable.initialize();
    return injectable;
}

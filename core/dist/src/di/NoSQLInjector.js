import NoSQL from '../NoSQL.js';
import di from '../DependencyInjection.js';
export const NoSQLServiceId = Symbol.for('NoSQLServiceId');
di.bind(NoSQLServiceId)
    .to(NoSQL)
    .inSingletonScope()
    .onActivation(onActivation);
async function onActivation(_context, injectable) {
    await injectable.initialize();
    return injectable;
}

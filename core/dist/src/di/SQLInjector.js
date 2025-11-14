import SQL from '../SQL.js';
import di from '../DependencyInjection.js';
export const SQLServiceId = Symbol.for('SQLServiceId');
di.bind(SQLServiceId)
    .to(SQL)
    .inSingletonScope()
    .onActivation(onActivation);
async function onActivation(_context, injectable) {
    await injectable.initialize();
    return injectable;
}

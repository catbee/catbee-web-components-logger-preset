module.exports = {
  register (locator) {
    const eventBus = locator.resolve('eventBus');
    const logger = locator.resolve('logger');

    eventBus
      .on('componentRender', (name) => logger.debug(`Component "${name}" is being rendered...`))
      .on('componentRendered', (name) => logger.debug(`Component "${name}" rendered`))
      .on('documentRendered', (renderingContext) => logger.debug(`Document rendered for URI ${renderingContext.location.toString()}`))
      .on('componentBound', (name) => logger.debug(`Component "${name}" is bound`))
      .on('componentUnbound', (name) => logger.debug(`Component "${name}" is unbound`))
      .on('componentBindWatcher', (name) => logger.debug(`Component "${name}" watcher is bound`))
      .on('componentWatcherUnbind', (name) => logger.debug(`Component "${name}" watcher is unbound`));
  }
};

module.exports = {
  register (locator) {
    const eventBus = locator.resolve('eventBus');
    const logger = locator.resolve('logger');

    eventBus
      .on('componentRender', (name) => logger.debug(`Component "${name}" is being rendered...`))
      .on('componentRendered', (name) => logger.debug(`Component "${name}" rendered`))
      .on('documentRendered', (renderingContext) => logger
        .debug(`Document rendered for URI ${renderingContext.location.toString()}`));
  }
};

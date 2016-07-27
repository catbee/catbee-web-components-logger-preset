module.exports = {
  register (locator) {
    const bus = locator.resolve('eventBus');
    const logger = locator.resolve('logger');

    bus.on('componentRender', (name) => {
      logger.debug(`Start rendering component ${name}`);
    });
    bus.on('componentRendered', (name) => {
      logger.debug(`Finish rendering component ${name}`);
    });
    bus.on('documentRendered', (renderingContext) => {
      logger.debug('Finish rendering document', renderingContext);
    });
  }
};

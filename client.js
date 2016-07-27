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
    bus.on('componentBound', (name) => {
      logger.debug(`Bind event handlers for component ${name}`);
    });
    bus.on('componentUnbound', (name) => {
      logger.debug(`Unbind event handlers for component ${name}`);
    });
    bus.on('componentWatcherBind', (name) => {
      logger.debug(`Bind watcher to component ${name}`);
    });
    bus.on('componentWatcherUnbind', (name) => {
      logger.debug(`Unbind watcher to component ${name}`);
    });
  }
};

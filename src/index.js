class Authorizer {
  constructor(serverless) {
    this.serverless = serverless;
    this.attachAuthorization();
  }

  attachAuthorization() {
    if (this.serverless.service.custom.authorization) {
      Object.keys(this.serverless.service.functions).forEach((key) => {
        const fn = this.serverless.service.functions[key];
        const httpEvent = fn.events ? fn.events.find(val => val.http) : null;
        if (!!httpEvent && httpEvent.http.authorize) {
          httpEvent.http.authorizer = this.serverless.service.custom.authorization;
        }
      });
    }
  }
}

module.exports = Authorizer;

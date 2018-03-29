class Authorizer {
  constructor(serverless) {
    this.serverless = serverless;
    this.attachAuthorization();
  }

  attachAuthorization() {
    if (this.serverless.service.custom.authorization) {
      this.serverless.cli.log('Attaching authorization');
      Object.keys(this.serverless.service.functions).forEach((key) => {
        const fn = this.serverless.service.functions[key];
        const httpEvents = fn.events ? fn.events.filter(val => val.http) : [];
        httpEvents.forEach((httpEvent) => {
          if (httpEvent.http.authorize) {
            httpEvent.http.authorizer = this.serverless.service.custom.authorization;
          }
        });
      });
    }
  }
}

module.exports = Authorizer;

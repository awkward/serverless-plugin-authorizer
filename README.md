# Serverless Plugin Authorizer

Normally you would define this in every function in your http event:
```yaml
# Before
authorizer:
  resultTtlInSeconds: 30
  arn: arn:aws:lambda:xxxx:function:authorizer-fn
  type: request
```

However, now you can add `authorization` which will allow everything to be passed through as `authorizer` in your functions.

```yaml
# After
custom:
  authorization:
    resultTtlInSeconds: 30
    arn: arn:aws:lambda:xxxx:function:authorizer-fn
    type: request
```

Using `authorize: true` to your http event like so:

```yaml
# After
functions:
  myFunction:
    handler: src/myFunction.handler
    events:
      - http:
        path: path/to/function
        method: get
        authorize: true
```

## Install
Using yarn:
```
yarn add serverless-plugin-authorizer
```

Using npm:
```
npm install serverless-plugin-authorizer --save-dev
```

Add the plugin to your `serverless.yml` file:
```yaml
plugins:
  - serverless-plugin-authorizer
```

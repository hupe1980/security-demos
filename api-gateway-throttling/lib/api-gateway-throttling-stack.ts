import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { RestApi, LambdaIntegration } from '@aws-cdk/aws-apigateway';
import { Function, Runtime, Code } from '@aws-cdk/aws-lambda';

export class ApiGatewayThrottlingStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    const lambda = new Function(this, 'throttling-demo-lambda', {
      runtime: Runtime.PYTHON_3_7,
      handler: 'handler.main',
      code: Code.fromAsset('lambda')
    });

    const api = new RestApi(this, 'throttling-demo-api', {
      deployOptions: {
        throttlingBurstLimit: 1,
        throttlingRateLimit: 1
      }
    });
    
    api.root.addMethod('GET', new LambdaIntegration(lambda));
  }
}

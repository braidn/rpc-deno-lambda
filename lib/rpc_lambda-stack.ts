import { CfnOutput, Stack, Construct, StackProps } from '@aws-cdk/core';
import { LayerVersion, Code, Runtime, Function } from "@aws-cdk/aws-lambda"
import { LambdaRestApi } from "@aws-cdk/aws-apigateway"
import { CfnApplication } from "@aws-cdk/aws-sam"

export class RpcLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const denoRuntime = new CfnApplication(this, "DenoRuntime", {
      location: {
        applicationId:
          "arn:aws:serverlessrepo:us-east-1:390065572566:applications/deno",
        semanticVersion: "1.5.2",
      },
    });

    // Deno Layer
    const deno = LayerVersion.fromLayerVersionArn(
      this,
      "denoRuntimeLayer",
      denoRuntime.getAtt("Outputs.LayerArn").toString(),
    );

    const testing = new Function(this, 'DenoTestFn', {
      runtime: Runtime.PROVIDED,
      code: Code.fromAsset('src'),
      handler: 'index.handler',
      layers: [deno]
    })

    const endpoint = new LambdaRestApi(this, 'DenoEndpoint', {
      handler: testing
    })

    new CfnOutput(this, 'endpointUrl', { value: endpoint.url }).toString()
  }
}

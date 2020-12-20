#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { RpcLambdaStack } from '../lib/rpc_lambda-stack';

const app = new cdk.App();
new RpcLambdaStack(app, 'RpcLambdaStack');

#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { ApiGatewayThrottlingStack } from '../lib/api-gateway-throttling-stack';

const app = new cdk.App();
new ApiGatewayThrottlingStack(app, 'ApiGatewayThrottlingStack');

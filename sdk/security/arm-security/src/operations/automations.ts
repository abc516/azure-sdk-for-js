/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/automationsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a Automations. */
export class Automations {
  private readonly client: SecurityCenterContext;

  /**
   * Create a Automations.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Lists all the security automations in the specified subscription. Use the 'nextLink' property in
   * the response to get the next page of security automations for the specified subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.AutomationsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.AutomationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.AutomationList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AutomationList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AutomationList>, callback?: msRest.ServiceCallback<Models.AutomationList>): Promise<Models.AutomationsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AutomationsListResponse>;
  }

  /**
   * Lists all the security automations in the specified resource group. Use the 'nextLink' property
   * in the response to get the next page of security automations for the specified resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.AutomationsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AutomationsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AutomationList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AutomationList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AutomationList>, callback?: msRest.ServiceCallback<Models.AutomationList>): Promise<Models.AutomationsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.AutomationsListByResourceGroupResponse>;
  }

  /**
   * Retrieves information about the model of a security automation.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param automationName The security automation name.
   * @param [options] The optional parameters
   * @returns Promise<Models.AutomationsGetResponse>
   */
  get(resourceGroupName: string, automationName: string, options?: msRest.RequestOptionsBase): Promise<Models.AutomationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param automationName The security automation name.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationName: string, callback: msRest.ServiceCallback<Models.Automation>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param automationName The security automation name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Automation>): void;
  get(resourceGroupName: string, automationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Automation>, callback?: msRest.ServiceCallback<Models.Automation>): Promise<Models.AutomationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AutomationsGetResponse>;
  }

  /**
   * Creates or updates a security automation. If a security automation is already created and a
   * subsequent request is issued for the same automation id, then it will be updated.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param automationName The security automation name.
   * @param automation The security automation resource
   * @param [options] The optional parameters
   * @returns Promise<Models.AutomationsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, automationName: string, automation: Models.Automation, options?: msRest.RequestOptionsBase): Promise<Models.AutomationsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param automationName The security automation name.
   * @param automation The security automation resource
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationName: string, automation: Models.Automation, callback: msRest.ServiceCallback<Models.Automation>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param automationName The security automation name.
   * @param automation The security automation resource
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationName: string, automation: Models.Automation, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Automation>): void;
  createOrUpdate(resourceGroupName: string, automationName: string, automation: Models.Automation, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Automation>, callback?: msRest.ServiceCallback<Models.Automation>): Promise<Models.AutomationsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationName,
        automation,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.AutomationsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a security automation.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param automationName The security automation name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, automationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param automationName The security automation name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param automationName The security automation name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, automationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Validates the security automation model before create or update. Any validation errors are
   * returned to the client.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param automationName The security automation name.
   * @param automation The security automation resource
   * @param [options] The optional parameters
   * @returns Promise<Models.AutomationsValidateResponse>
   */
  validate(resourceGroupName: string, automationName: string, automation: Models.Automation, options?: msRest.RequestOptionsBase): Promise<Models.AutomationsValidateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param automationName The security automation name.
   * @param automation The security automation resource
   * @param callback The callback
   */
  validate(resourceGroupName: string, automationName: string, automation: Models.Automation, callback: msRest.ServiceCallback<Models.AutomationValidationStatus>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param automationName The security automation name.
   * @param automation The security automation resource
   * @param options The optional parameters
   * @param callback The callback
   */
  validate(resourceGroupName: string, automationName: string, automation: Models.Automation, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AutomationValidationStatus>): void;
  validate(resourceGroupName: string, automationName: string, automation: Models.Automation, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AutomationValidationStatus>, callback?: msRest.ServiceCallback<Models.AutomationValidationStatus>): Promise<Models.AutomationsValidateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationName,
        automation,
        options
      },
      validateOperationSpec,
      callback) as Promise<Models.AutomationsValidateResponse>;
  }

  /**
   * Lists all the security automations in the specified subscription. Use the 'nextLink' property in
   * the response to get the next page of security automations for the specified subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AutomationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AutomationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AutomationList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AutomationList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AutomationList>, callback?: msRest.ServiceCallback<Models.AutomationList>): Promise<Models.AutomationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AutomationsListNextResponse>;
  }

  /**
   * Lists all the security automations in the specified resource group. Use the 'nextLink' property
   * in the response to get the next page of security automations for the specified resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AutomationsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AutomationsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AutomationList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AutomationList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AutomationList>, callback?: msRest.ServiceCallback<Models.AutomationList>): Promise<Models.AutomationsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.AutomationsListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/automations",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AutomationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AutomationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations/{automationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Automation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations/{automationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "automation",
    mapper: {
      ...Mappers.Automation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Automation
    },
    201: {
      bodyMapper: Mappers.Automation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations/{automationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const validateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations/{automationName}/validate",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "automation",
    mapper: {
      ...Mappers.Automation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AutomationValidationStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AutomationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AutomationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

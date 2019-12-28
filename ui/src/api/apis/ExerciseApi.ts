// tslint:disable
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

/**
 * no description
 */
export class ExerciseApi extends runtime.BaseAPI {

    /**
     * Getting developer name
     */
    async getDeveloperNameRaw(): Promise<runtime.ApiResponse<string>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/exercise/dev`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response);
    }

   /**
    * Getting developer name
    */
    async getDeveloperName(): Promise<string> {
        const response = await this.getDeveloperNameRaw();
        return await response.value();
    }

}
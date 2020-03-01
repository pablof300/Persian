/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ProjectInfo
 */
export interface ProjectInfo {
    /**
     * 
     * @type {string}
     * @memberof ProjectInfo
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectInfo
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectInfo
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectInfo
     */
    funFact: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectInfo
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectInfo
     */
    imagePath: string;
    /**
     * 
     * @type {number}
     * @memberof ProjectInfo
     */
    year: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectInfo
     */
    id: string;
}

export function ProjectInfoFromJSON(json: any): ProjectInfo {
    return ProjectInfoFromJSONTyped(json, false);
}

export function ProjectInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'type': json['type'],
        'description': json['description'],
        'funFact': json['funFact'],
        'url': json['url'],
        'imagePath': json['imagePath'],
        'year': json['year'],
        'id': json['id'],
    };
}

export function ProjectInfoToJSON(value?: ProjectInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'type': value.type,
        'description': value.description,
        'funFact': value.funFact,
        'url': value.url,
        'imagePath': value.imagePath,
        'year': value.year,
        'id': value.id,
    };
}



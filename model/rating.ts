/**
 * Gravitee.io Portal Rest API
 * API dedicated to the devportal part of Gravitee
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@graviteesource.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { RatingAnswer } from './ratingAnswer';
import { User } from './user';


export interface Rating { 
    /**
     * Unique identifier of a rating.
     */
    id: string;
    /**
     * Title of a rating.
     */
    title: string;
    /**
     * Value of the rating. Integer between 1 and 5.
     */
    value: number;
    author?: User;
    /**
     * Date and time of the rating.
     */
    date?: string;
    /**
     * Comment left by the author to explain the rating.
     */
    comment: string;
    /**
     * Array of answers.
     */
    answers?: Array<RatingAnswer>;
}


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
import { Key } from './key';


export interface Subscription { 
    /**
     * Unique identifier of a subscription.
     */
    id: string;
    /**
     * Subscribed API.
     */
    api: string;
    /**
     * Subscribing application.
     */
    application: string;
    /**
     * Subscribed plan.
     */
    plan: string;
    /**
     * Comment of the user when asking for a subscription.
     */
    request?: string;
    /**
     * Creation date and time of the subscription.
     */
    created_at?: Date;
    /**
     * Date and time when the subscription request was processed.
     */
    processed_at?: Date;
    /**
     * Start date and time of the subscription.
     */
    start_at?: Date;
    /**
     * Expiration date and time of the subscription.
     */
    end_at?: Date;
    /**
     * Status of the subscription.
     */
    status: Subscription.StatusEnum;
    /**
     * Only returned with *_/subscriptions/{subscriptionId}*. Need *include* query param to contain \'keys\'.  List of APIKeys of the subscription. 
     */
    keys?: Array<Key>;
}
export namespace Subscription {
    export type StatusEnum = 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'PAUSED';
    export const StatusEnum = {
        PENDING: 'PENDING' as StatusEnum,
        ACCEPTED: 'ACCEPTED' as StatusEnum,
        REJECTED: 'REJECTED' as StatusEnum,
        PAUSED: 'PAUSED' as StatusEnum
    };
}



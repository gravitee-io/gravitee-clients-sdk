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


export interface GenericNotificationConfigAllOf { 
    /**
     * Unique identifier of the generic notification config.
     */
    id?: string;
    /**
     * Type of notification system (Email, WebHook, ...).
     */
    notifier?: string;
    /**
     * Configuration of the notifier.
     */
    config?: string;
    /**
     * True if the notifier should use system proxy.
     */
    use_system_proxy?: boolean;
}


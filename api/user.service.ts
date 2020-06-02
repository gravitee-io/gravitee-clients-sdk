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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { ErrorResponse } from '../model/models';
import { PortalNotificationsResponse } from '../model/models';
import { User } from '../model/models';
import { UserInput } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface DeleteCurrentUserNotificationByNotificationIdRequestParams {
    /** Id of a notification. */
    notificationId: string;
}

export interface GetCurrentUserNotificationsRequestParams {
    /** The page number for pagination. */
    page?: number;
    /** The number of items per page for pagination. If the size is 0, the response contains only metadata and returns the values as for a non-paged resource. If the size is -1, the response contains all datas.  */
    size?: number;
}

export interface UpdateCurrentUserRequestParams {
    /** Use to update a user. */
    userInput?: UserInput;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

    protected basePath = 'http://demo.gravitee.io/portal/DEFAULT';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Delete all notifications of the current user
     * Delete all notifications of the current user. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteAllCurrentUserNotifications(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<any>;
    public deleteAllCurrentUserNotifications(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<any>>;
    public deleteAllCurrentUserNotifications(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<any>>;
    public deleteAllCurrentUserNotifications(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["CookieAuth"] || this.configuration.apiKeys["Auth-Graviteeio-APIM"];
            if (key) {
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.delete<any>(`${this.configuration.basePath}/user/notifications`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a specific notification of the current user
     * Delete a specific notification of the current user. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCurrentUserNotificationByNotificationId(requestParameters: DeleteCurrentUserNotificationByNotificationIdRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<any>;
    public deleteCurrentUserNotificationByNotificationId(requestParameters: DeleteCurrentUserNotificationByNotificationIdRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<any>>;
    public deleteCurrentUserNotificationByNotificationId(requestParameters: DeleteCurrentUserNotificationByNotificationIdRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<any>>;
    public deleteCurrentUserNotificationByNotificationId(requestParameters: DeleteCurrentUserNotificationByNotificationIdRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const notificationId = requestParameters.notificationId;
        if (notificationId === null || notificationId === undefined) {
            throw new Error('Required parameter notificationId was null or undefined when calling deleteCurrentUserNotificationByNotificationId.');
        }

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["CookieAuth"] || this.configuration.apiKeys["Auth-Graviteeio-APIM"];
            if (key) {
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.delete<any>(`${this.configuration.basePath}/user/notifications/${encodeURIComponent(String(notificationId))}`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the authenticated user
     * Get information about the authenticated user. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCurrentUser(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<User>;
    public getCurrentUser(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<User>>;
    public getCurrentUser(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<User>>;
    public getCurrentUser(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["CookieAuth"] || this.configuration.apiKeys["Auth-Graviteeio-APIM"];
            if (key) {
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<User>(`${this.configuration.basePath}/user`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve user\&#39;s avatar
     * Retrieve user\&#39;s avatar. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCurrentUserAvatar(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'image/_*' | 'application/json'}): Observable<Blob>;
    public getCurrentUserAvatar(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'image/_*' | 'application/json'}): Observable<HttpResponse<Blob>>;
    public getCurrentUserAvatar(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'image/_*' | 'application/json'}): Observable<HttpEvent<Blob>>;
    public getCurrentUserAvatar(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'image/_*' | 'application/json'}): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["CookieAuth"] || this.configuration.apiKeys["Auth-Graviteeio-APIM"];
            if (key) {
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'image/_*',
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get(`${this.configuration.basePath}/user/avatar`,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve user\&#39;s notifications
     * Retrieve current user\&#39;s notifications. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCurrentUserNotifications(requestParameters: GetCurrentUserNotificationsRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<PortalNotificationsResponse>;
    public getCurrentUserNotifications(requestParameters: GetCurrentUserNotificationsRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<PortalNotificationsResponse>>;
    public getCurrentUserNotifications(requestParameters: GetCurrentUserNotificationsRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<PortalNotificationsResponse>>;
    public getCurrentUserNotifications(requestParameters: GetCurrentUserNotificationsRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const page = requestParameters.page;
        const size = requestParameters.size;

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>page, 'page');
        }
        if (size !== undefined && size !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>size, 'size');
        }

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["CookieAuth"] || this.configuration.apiKeys["Auth-Graviteeio-APIM"];
            if (key) {
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<PortalNotificationsResponse>(`${this.configuration.basePath}/user/notifications`,
            {
                params: queryParameters,
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Modify current user information.
     * Modify current user information.  Only the current user can modify his/her information. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateCurrentUser(requestParameters: UpdateCurrentUserRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<User>;
    public updateCurrentUser(requestParameters: UpdateCurrentUserRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<User>>;
    public updateCurrentUser(requestParameters: UpdateCurrentUserRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<User>>;
    public updateCurrentUser(requestParameters: UpdateCurrentUserRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        const userInput = requestParameters.userInput;

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["CookieAuth"] || this.configuration.apiKeys["Auth-Graviteeio-APIM"];
            if (key) {
            }
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.put<User>(`${this.configuration.basePath}/user`,
            userInput,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}

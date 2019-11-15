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

import { Api } from '../model/api';
import { ApisResponse } from '../model/apisResponse';
import { CategoryApiQuery } from '../model/categoryApiQuery';
import { ErrorResponse } from '../model/errorResponse';
import { Page } from '../model/page';
import { PagesResponse } from '../model/pagesResponse';
import { PlansResponse } from '../model/plansResponse';
import { Rating } from '../model/rating';
import { RatingInput } from '../model/ratingInput';
import { RatingsResponse } from '../model/ratingsResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface CreateApiRatingForApiRequestParams {
    apiId: string;
    RatingInput?: RatingInput;
}

export interface GetApiByApiIdRequestParams {
    apiId: string;
    include?: Array<'pages' | 'plans'>;
}

export interface GetApiPlansByApiIdRequestParams {
    apiId: string;
    page?: number;
    size?: number;
}

export interface GetApiRatingsByApiIdRequestParams {
    apiId: string;
    page?: number;
    size?: number;
}

export interface GetApisRequestParams {
    page?: number;
    size?: number;
    context_path?: string;
    label?: string;
    version?: string;
    name?: string;
    view?: string;
    cat?: CategoryApiQuery;
}

export interface GetPageByApiIdAndPageIdRequestParams {
    apiId: string;
    pageId: string;
}

export interface GetPagesByApiIdRequestParams {
    apiId: string;
    page?: number;
    size?: number;
    homepage?: boolean;
    parent?: string;
}

export interface GetPictureByApiIdRequestParams {
    apiId: string;
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

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



    /**
     * Create a rating for an API
     * Create a rating for an API.  This API has to be accessible by the current user, otherwise a 404 will be returned.  The current must have API_RATING[CREATE] permission to create a rating. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createApiRatingForApi(requestParameters: CreateApiRatingForApiRequestParams, observe?: 'body', reportProgress?: boolean): Observable<Rating>;
    public createApiRatingForApi(requestParameters: CreateApiRatingForApiRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Rating>>;
    public createApiRatingForApi(requestParameters: CreateApiRatingForApiRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Rating>>;
    public createApiRatingForApi(requestParameters: CreateApiRatingForApiRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const apiId = requestParameters.apiId;
        if (apiId === null || apiId === undefined) {
            throw new Error('Required parameter apiId was null or undefined when calling createApiRatingForApi.');
        }
        const RatingInput = requestParameters.RatingInput;

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
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

        return this.httpClient.post<Rating>(`${this.configuration.basePath}/apis/${encodeURIComponent(String(apiId))}/ratings`,
            RatingInput,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the API definition
     * Get the detail of an API.  This API has to be accessible by the current user, otherwise a 404 will be returned. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getApiByApiId(requestParameters: GetApiByApiIdRequestParams, observe?: 'body', reportProgress?: boolean): Observable<Api>;
    public getApiByApiId(requestParameters: GetApiByApiIdRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Api>>;
    public getApiByApiId(requestParameters: GetApiByApiIdRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Api>>;
    public getApiByApiId(requestParameters: GetApiByApiIdRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const apiId = requestParameters.apiId;
        if (apiId === null || apiId === undefined) {
            throw new Error('Required parameter apiId was null or undefined when calling getApiByApiId.');
        }
        const include = requestParameters.include;

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (include) {
            include.forEach((element) => {
                queryParameters = queryParameters.append('include', <any>element);
            })
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Api>(`${this.configuration.basePath}/apis/${encodeURIComponent(String(apiId))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List plans for an API
     * List plans for an API.  This API has to be accessible by the current user, otherwise a 404 will be returned. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getApiPlansByApiId(requestParameters: GetApiPlansByApiIdRequestParams, observe?: 'body', reportProgress?: boolean): Observable<PlansResponse>;
    public getApiPlansByApiId(requestParameters: GetApiPlansByApiIdRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PlansResponse>>;
    public getApiPlansByApiId(requestParameters: GetApiPlansByApiIdRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PlansResponse>>;
    public getApiPlansByApiId(requestParameters: GetApiPlansByApiIdRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const apiId = requestParameters.apiId;
        if (apiId === null || apiId === undefined) {
            throw new Error('Required parameter apiId was null or undefined when calling getApiPlansByApiId.');
        }
        const page = requestParameters.page;
        const size = requestParameters.size;

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<PlansResponse>(`${this.configuration.basePath}/apis/${encodeURIComponent(String(apiId))}/plans`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List ratings for an API
     * List ratings for an API.  This API has to be accessible by the current user, otherwise a 404 will be returned. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getApiRatingsByApiId(requestParameters: GetApiRatingsByApiIdRequestParams, observe?: 'body', reportProgress?: boolean): Observable<RatingsResponse>;
    public getApiRatingsByApiId(requestParameters: GetApiRatingsByApiIdRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RatingsResponse>>;
    public getApiRatingsByApiId(requestParameters: GetApiRatingsByApiIdRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RatingsResponse>>;
    public getApiRatingsByApiId(requestParameters: GetApiRatingsByApiIdRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const apiId = requestParameters.apiId;
        if (apiId === null || apiId === undefined) {
            throw new Error('Required parameter apiId was null or undefined when calling getApiRatingsByApiId.');
        }
        const page = requestParameters.page;
        const size = requestParameters.size;

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<RatingsResponse>(`${this.configuration.basePath}/apis/${encodeURIComponent(String(apiId))}/ratings`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List APIs
     * List public APIs for anonymous requests. List all the APIs the current user is allowed to view for authenticated requests.  The list can be filtered according to query parameters.  By default the list is sorted by alphabetic order. If a **cat** query param is sent, a specific sorting can be applied. Please refer to **cat** description for detail. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getApis(requestParameters: GetApisRequestParams, observe?: 'body', reportProgress?: boolean): Observable<ApisResponse>;
    public getApis(requestParameters: GetApisRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApisResponse>>;
    public getApis(requestParameters: GetApisRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApisResponse>>;
    public getApis(requestParameters: GetApisRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const page = requestParameters.page;
        const size = requestParameters.size;
        const context_path = requestParameters.context_path;
        const label = requestParameters.label;
        const version = requestParameters.version;
        const name = requestParameters.name;
        const view = requestParameters.view;
        const cat = requestParameters.cat;

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (context_path !== undefined && context_path !== null) {
            queryParameters = queryParameters.set('context-path', <any>context_path);
        }
        if (label !== undefined && label !== null) {
            queryParameters = queryParameters.set('label', <any>label);
        }
        if (version !== undefined && version !== null) {
            queryParameters = queryParameters.set('version', <any>version);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (view !== undefined && view !== null) {
            queryParameters = queryParameters.set('view', <any>view);
        }
        if (cat !== undefined && cat !== null) {
            queryParameters = queryParameters.set('cat', <any>cat);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<ApisResponse>(`${this.configuration.basePath}/apis`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get an API page
     * Get an API page.  This API has to be accessible by the current user, otherwise a 404 will be returned. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPageByApiIdAndPageId(requestParameters: GetPageByApiIdAndPageIdRequestParams, observe?: 'body', reportProgress?: boolean): Observable<Page>;
    public getPageByApiIdAndPageId(requestParameters: GetPageByApiIdAndPageIdRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Page>>;
    public getPageByApiIdAndPageId(requestParameters: GetPageByApiIdAndPageIdRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Page>>;
    public getPageByApiIdAndPageId(requestParameters: GetPageByApiIdAndPageIdRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const apiId = requestParameters.apiId;
        if (apiId === null || apiId === undefined) {
            throw new Error('Required parameter apiId was null or undefined when calling getPageByApiIdAndPageId.');
        }
        const pageId = requestParameters.pageId;
        if (pageId === null || pageId === undefined) {
            throw new Error('Required parameter pageId was null or undefined when calling getPageByApiIdAndPageId.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Page>(`${this.configuration.basePath}/apis/${encodeURIComponent(String(apiId))}/pages/${encodeURIComponent(String(pageId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List API pages
     * List all documentation pages of an API.  This API has to be accessible by the current user, otherwise a 404 will be returned. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPagesByApiId(requestParameters: GetPagesByApiIdRequestParams, observe?: 'body', reportProgress?: boolean): Observable<PagesResponse>;
    public getPagesByApiId(requestParameters: GetPagesByApiIdRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PagesResponse>>;
    public getPagesByApiId(requestParameters: GetPagesByApiIdRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PagesResponse>>;
    public getPagesByApiId(requestParameters: GetPagesByApiIdRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const apiId = requestParameters.apiId;
        if (apiId === null || apiId === undefined) {
            throw new Error('Required parameter apiId was null or undefined when calling getPagesByApiId.');
        }
        const page = requestParameters.page;
        const size = requestParameters.size;
        const homepage = requestParameters.homepage;
        const parent = requestParameters.parent;

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (homepage !== undefined && homepage !== null) {
            queryParameters = queryParameters.set('homepage', <any>homepage);
        }
        if (parent !== undefined && parent !== null) {
            queryParameters = queryParameters.set('parent', <any>parent);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<PagesResponse>(`${this.configuration.basePath}/apis/${encodeURIComponent(String(apiId))}/pages`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the API\&#39;s picture
     * Get the API\&#39;s picture.  This API has to be accessible by the current user, otherwise a 404 will be returned. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPictureByApiId(requestParameters: GetPictureByApiIdRequestParams, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    public getPictureByApiId(requestParameters: GetPictureByApiIdRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    public getPictureByApiId(requestParameters: GetPictureByApiIdRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    public getPictureByApiId(requestParameters: GetPictureByApiIdRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const apiId = requestParameters.apiId;
        if (apiId === null || apiId === undefined) {
            throw new Error('Required parameter apiId was null or undefined when calling getPictureByApiId.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'image/_*',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get(`${this.configuration.basePath}/apis/${encodeURIComponent(String(apiId))}/picture`,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}

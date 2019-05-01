import { CacheType } from '../enum/cache-type.enum';
import { BaseCacheOptions } from '../interface/base-cache-options';
import { CacheContainerOptions } from '../interface/cache-container-options';
import { BaseCacheObject } from './base-cache.object';
export declare class CacheContainerObject {
    readonly options: CacheContainerOptions;
    readonly cacheObjects: BaseCacheObject<BaseCacheOptions>[];
    readonly key: string;
    constructor(options: CacheContainerOptions);
    addCache(cacheObject: BaseCacheObject<BaseCacheOptions>): void;
    clear(cacheType?: CacheType): void;
}

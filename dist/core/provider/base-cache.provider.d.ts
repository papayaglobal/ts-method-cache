import { CacheType } from '../enum/cache-type.enum';
import { BaseCacheOptions } from '../interface/base-cache-options';
import { CacheContainerOptions } from '../interface/cache-container-options';
import { BaseCacheObject } from '../object/base-cache.object';
import { CacheContainerObject } from '../object/cache-container.object';
export declare abstract class BaseCacheProvider<T extends BaseCacheObject<U>, U extends BaseCacheOptions> {
    protected abstract cacheType: CacheType;
    protected abstract cacheObjectType: {
        new (options: U): T;
    };
    protected cache: T[];
    protected containers: CacheContainerObject[];
    addToContainer(options: CacheContainerOptions, cacheObject: T): void;
    clearCache(): void;
    clearContainer(container: CacheContainerObject): void;
    clearContainers(): void;
    clearKeyCache(key: string): void;
    clearKeyContainer(containerKey: string): void;
    createCacheObject(options: U): T;
    getCacheObject(key: string): T | undefined;
    setCache(options: U, args: string, cache: any): void;
    protected getCacheContainer(containerKey: string): CacheContainerObject;
    protected initiateCacheObject(options: U): T;
    protected initiateCacheContainer(options: CacheContainerOptions): CacheContainerObject;
}

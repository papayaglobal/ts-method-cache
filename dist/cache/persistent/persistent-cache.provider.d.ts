import { CacheContainerOptions } from '../../core/interface/cache-container-options';
import { CacheContainerObject } from '../../core/object/cache-container.object';
import { BaseCacheProvider } from '../../core/provider/base-cache.provider';
import { PersistentStorage } from './persistent-storage';
import { PersistentCacheOptions } from './persistent-cache-options';
import { PersistentCacheObject } from './persistent-cache.object';
export declare abstract class PersistentCacheProvider<T extends PersistentCacheObject<U>, U extends PersistentCacheOptions> extends BaseCacheProvider<T, U> {
    protected storage: PersistentStorage<U>;
    constructor();
    addToContainer(containerOptions: CacheContainerOptions, cacheObject: T): void;
    clearCache(): void;
    clearContainer(container: CacheContainerObject): void;
    clearContainers(): void;
    clearKeyCache(key: string): void;
    clearKeyContainer(containerKey: string): void;
    setCache(options: U, args: string, cache: any): void;
    protected restoreCacheObjects(): void;
    private saveCache();
    private saveContainers();
}

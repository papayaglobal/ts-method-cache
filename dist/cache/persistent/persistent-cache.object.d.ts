import { BaseCacheObject } from '../../core/object/base-cache.object';
import { PersistentCacheModel } from './persistent-cache-model';
import { PersistentCacheOptions } from './persistent-cache-options';
export declare abstract class PersistentCacheObject<T extends PersistentCacheOptions> extends BaseCacheObject<T> {
    constructor(options: T);
    restoreCacheObject(items: {
        [args: string]: any;
    }, ttl: {
        [args: string]: number;
    }): void;
    storeCacheObject(): Promise<PersistentCacheModel<T>>;
    private getStorageItems();
}

import { CacheType } from '../../../../core/enum/cache-type.enum';
import { PersistentCacheProvider } from '../../persistent-cache.provider';
import { StorageCacheOptions } from "../interface/storage-cache-options";
import { StorageCacheObject } from "../object/storage-cache.object";
export declare class StorageCacheProvider extends PersistentCacheProvider<StorageCacheObject, StorageCacheOptions> {
    protected cache: StorageCacheObject[];
    protected cacheObjectType: {
        new (options: StorageCacheOptions): StorageCacheObject;
    };
    protected cacheType: CacheType;
    constructor();
}

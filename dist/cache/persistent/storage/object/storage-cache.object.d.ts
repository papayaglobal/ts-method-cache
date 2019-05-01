import { CacheType } from '../../../../core/enum/cache-type.enum';
import { PersistentCacheObject } from '../../persistent-cache.object';
import { StorageCacheOptions } from '../interface/storage-cache-options';
export declare class StorageCacheObject extends PersistentCacheObject<StorageCacheOptions> {
    readonly cacheType: CacheType;
}

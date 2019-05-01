import { CacheType } from '../../../core/enum/cache-type.enum';
import { BaseCacheObject } from "../../../core/object/base-cache.object";
import { MemoryCacheOptions } from '../interface/memory-cache-options';
export declare class MemoryCacheObject extends BaseCacheObject<MemoryCacheOptions> {
    readonly cacheType: CacheType;
    constructor(options: MemoryCacheOptions);
}

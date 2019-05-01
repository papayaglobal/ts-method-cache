import { CacheType } from "../enum/cache-type.enum";
import { BaseCacheOptions } from "../interface/base-cache-options";
export declare function baseCacheDecorator<T extends BaseCacheOptions>(cacheType: CacheType, options?: T | string): MethodDecorator;

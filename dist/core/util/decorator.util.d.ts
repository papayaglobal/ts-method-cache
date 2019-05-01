import { CacheType } from '../enum/cache-type.enum';
import { BaseCacheOptions } from '../interface/base-cache-options';
import { CacheContainerOptions } from '../interface/cache-container-options';
export declare function createCacheDecorator(type: CacheType, target: Object, method: Function, options: BaseCacheOptions): () => any;
export declare function createCacheContainerDecorator(options: CacheContainerOptions): ClassDecorator;
export declare function normalizeCacheSettings<U extends BaseCacheOptions>(options: U | string): U;
export declare function normalizeCacheContainerSettings(options: CacheContainerOptions | string): CacheContainerOptions;

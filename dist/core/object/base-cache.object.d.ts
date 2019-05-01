import { CacheReturnType } from '../enum/cache-return-type.enum';
import { CacheType } from '../enum/cache-type.enum';
import { BaseCacheOptions } from '../interface/base-cache-options';
import { CacheContainerOptions } from '../interface/cache-container-options';
export declare abstract class BaseCacheObject<T extends BaseCacheOptions> {
    readonly options: T;
    readonly cacheType: CacheType;
    readonly key: string;
    readonly returnType: CacheReturnType;
    protected items: {
        [args: string]: any;
    };
    protected ttl: {
        [args: string]: number;
    };
    constructor(options: T);
    clear(): void;
    clearArgs(args: string): void;
    getCache(args: string): any;
    hasCache(args: string): boolean;
    inheritContainerOptions(options: CacheContainerOptions): void;
    isExpired(args: string): boolean;
    setCache(args: string, cache: any): void;
    private getTtlFromOptions();
    private setArgsTtl(args);
}

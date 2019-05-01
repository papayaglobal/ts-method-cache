import { CacheType } from '../../core/enum/cache-type.enum';
import { PersistentCacheModel } from './persistent-cache-model';
import { PersistentCacheOptions } from './persistent-cache-options';
import { PersistentContainerModel } from './persistent-container-model';
export declare class PersistentStorage<T extends PersistentCacheOptions> {
    private readonly cacheType;
    private readonly cache;
    private storage;
    constructor(cacheType: CacheType);
    getStorageItems(): PersistentCacheModel<T>[];
    setStorageItems(items: PersistentCacheModel<T>[]): void;
    getContainerItems(): PersistentContainerModel[];
    setContainerItems(items: PersistentContainerModel[]): void;
    private setItem(key, data);
    private getItem(key);
}

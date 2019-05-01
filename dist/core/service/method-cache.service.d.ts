export declare class MethodCacheService {
    clearAllCache(): void;
    clearContainer(container: string): void;
    clearMemoryCache(): void;
    clearMemoryContainer(container: string): void;
    clearMemoryKeyCache(key: string): void;
    clearSessionCache(): void;
    clearSessionContainer(container: string): void;
    clearSessionKeyCache(key: string): void;
    clearStorageCache(): void;
    clearStorageContainer(container: string): void;
    clearStorageKeyCache(key: string): void;
    private clearCache(type);
    private clearContainerType(type, container);
    private clearKeyCache(type, key);
}

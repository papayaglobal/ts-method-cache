import { CacheType } from '../../../../core/enum/cache-type.enum';
import { PersistentCacheProvider } from '../../persistent-cache.provider';
import { SessionCacheOptions } from "../interface/session-cache-options";
import { SessionCacheObject } from "../object/session-cache.object";
export declare class SessionCacheProvider extends PersistentCacheProvider<SessionCacheObject, SessionCacheOptions> {
    protected cache: SessionCacheObject[];
    protected cacheObjectType: {
        new (options: SessionCacheOptions): SessionCacheObject;
    };
    protected cacheType: CacheType;
    constructor();
}

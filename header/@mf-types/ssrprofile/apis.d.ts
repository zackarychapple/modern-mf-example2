
    export type RemoteKeys = 'ssrprofile/ssr-profile' | 'ssrprofile/rendered';
    type PackageType<T> = T extends 'ssrprofile/rendered' ? typeof import('ssrprofile/rendered') :T extends 'ssrprofile/ssr-profile' ? typeof import('ssrprofile/ssr-profile') :any;
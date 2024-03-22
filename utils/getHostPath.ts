export const getHostPath = () => {
    const nuxtApp = useNuxtApp();

    const runtimeConfig = useRuntimeConfig();
    
    let host = '';
    if (process.server) {
        host = nuxtApp.ssrContext?.event.node.req.headers.host || '';
    } else {
        host = window.location.host;
    }
    /*Adicionar domínios permitidos*/
    const allowedDomains = (runtimeConfig.public.PUBLIC_ALLOWED_DOMAINS || ['localhost']) as string[];

    if (allowedDomains.some(allowedDomain => host.includes(`.` + allowedDomain))) {
        const subdomain = host.split(".")[0];
        host = `${subdomain}.kebook.com.br`;
    }
    let path = (useRoute().params.all as string[] || []).join('/');
    while (path.endsWith("/")) {
        path = path.substring(0, path.length - 1);
    }
    let hostPath = host + "/" + path;
    while (hostPath.endsWith("/")) {
        hostPath = hostPath.substring(0, hostPath.length - 1);
    }
    return hostPath;
}
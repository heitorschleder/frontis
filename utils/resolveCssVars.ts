export const resolveCssVars = (props: any) => {
    return Object.keys(props).reduce((acc: any, propKey: string) => {
        if(propKey.substring(0, 5) == "color") {
            let propValue = props[propKey];
            let propNewKey = "--" + propKey;
            propNewKey = propNewKey.replace(/([A-Z])/g, "-$1").toLowerCase();
            return {...acc, ...{[propNewKey]: propValue}}
        }
        return acc;
    }, {});
}

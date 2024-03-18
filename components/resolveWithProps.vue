<template>
    <span :style="cssVars">
        <RenderComponent :props="getProps.props" :productId="getProps.productId"/>
    </span>
</template>
<script setup lang="ts">
import { resolveCssVars } from '~/utils/resolveCssVars';

const getProps = defineProps({
    componentName: {
        type: String,
        required: true
    },
    props: {
        type: Object as PropType<any>
    },
    productId: {
        type: String,
        required: false
    }
});
const {props} = getProps;

const cssVars = resolveCssVars(props);


const RenderComponent = resolveComponent(getProps.componentName);
</script>
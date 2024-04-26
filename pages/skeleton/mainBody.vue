<template>
    <ResolveWithProps componentName="Navegator" :props="navegatorProps" />
    <ResolveWithProps componentName="BodyTest" :props="bodyTestProps" />
    <ResolveWithProps componentName="AboutBrand" :props="aboutBrandProps" />
</template>
<script setup lang="ts">
import { bodyTestProps } from '~/components/bodyTest/data';
import { navegatorProps } from '~/components/navegator/data';
import { aboutBrandProps } from '~/components/aboutBrand/data';
</script>
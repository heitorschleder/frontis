<template>
    <ResolveWithProps componentName="BodyTest" :props="bodyTestProps" />
    <ResolveWithProps componentName="AboutBrand" :props="aboutBrandProps" />
</template>
<script setup lang="ts">
import { bodyTestProps } from '~/components/bodyTest/data';
import { aboutBrandProps } from '~/components/aboutBrand/data';
</script>
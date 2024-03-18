<template>
    <div v-for="{ componentName, data } in dataValue.sections">
        <ResolveWithProps :componentName="componentName" :props="data" :productId="dataValue.id.toString()" />
    </div>
</template>
<script setup lang="ts">
interface DataValue {
    id: string,
    sections: {
        componentName: string;
        data: any;
    }[];
}
import { getHostPath } from '~/utils/getHostPath';
const hostPath = getHostPath();
const data = await useFetch(`/api/getSections`, {
    method: 'POST',
    body: { hostPath },
});
const dataValue: DataValue = data.data.value;
</script>

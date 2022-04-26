<template>
    <div class="root">
        <h1>Mon score</h1>
        <div>
            <p v-for="result in localResult">
                {{result.label}} : {{result.value}}
            </p>
            <p>
                Nombre de partie : {{localTotal}}
            </p>
        </div>

        <h1>Leaderboard</h1>
        <p>Prochainement</p>
    </div>
</template>

<script lang="ts" setup>
import { LocalStorageKey } from '../models/types';
import {LocalStorageManipulation} from "../models/localStorageManipulation";

const localResult = LocalStorageManipulation.get(LocalStorageKey.SCORE, Array.from({ length: 6 }).map((_, it) => ({label: `${it + 1}/6`, value: 0}))) as {label: string, value: number}[];
const localTotal = $computed(() => localResult.reduce((prev, current) => current.value + prev, 0));
</script>

<style scoped>
.root{
    padding: 0 20px;
}

p {
    font-size: 1.4em;
    margin: 10px 0px;
}
</style>

<template>
    <section class="contents-container">
        <slot />
    </section>
</template>

<style scoped>
.contents-container {
    width: Calc(100vw - 270px);
    background: var(--contentsBg);
    min-height: 100%;
    margin-left: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow-y: hidden;
    padding: 15px 10px;
}
</style>
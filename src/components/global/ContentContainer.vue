<template>
    <section class="contents-container">
        <slot />
    </section>
</template>

<style scoped>
.contents-container {
    width: Calc(100vw - 270px);
    background: var(--sectionBg);
    min-height: 100%;
    margin-left: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow-y: auto;
    padding: 10px;
}
</style>
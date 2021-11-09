<template>
    <section class="side-content-container">
        <slot />
    </section>
</template>

<style scoped>
.side-content-container {
    background: var(--sectionBg);
    min-width: 270px;
    max-width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
}
</style>
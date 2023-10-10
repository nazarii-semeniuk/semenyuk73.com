<template>
    <div class="hero-card">
        <img src="/images/device.png" alt="Hero image">
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
.hero-card {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    backdrop-filter: blur(20px);

    img {
        box-shadow: -83px 60px 92px rgba(27, 20, 168, 0.1);
        border-radius: 30px;
        border: 2px solid #fff;
    }
}
</style>
<template>
    <div class="hero-card">
        <img ref="image" @mousemove="handleMouseMove($event)" @mouseleave="handleMouseLeave()" src="/images/device.png" alt="Hero image">
    </div>
</template>

<script setup lang="ts">

const image = ref();

function handleMouseMove($event: MouseEvent) {
    const { offsetX, offsetY } = $event;

    const { offsetWidth, offsetHeight } = image.value;
    
    const coefficient = offsetWidth > offsetHeight ? offsetWidth / offsetHeight : offsetHeight / offsetWidth;

    const xPos = ((offsetWidth / 2 - offsetX) / 200) / (offsetWidth > offsetHeight ? coefficient : 1);
    const yPos = -((offsetHeight / 2 - offsetY) / 200) / (offsetHeight > offsetWidth ? coefficient : 1);

    image.value.style.transform = `perspective(300px) rotateY(${xPos}deg) rotateX(${yPos}deg) translateZ(5px) scale3d(1.025, 1.025, 1.025)`;

}

function handleMouseLeave() {
    image.value.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(0)`;
}

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
        position: relative;
        transition: 0.1s all;
        will-change: transform;
    }
}
</style>
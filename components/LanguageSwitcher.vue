<template>
    <div class="language-switcher" @click="toggleLanguageSwitcher">
        <img class="active-language" :src="`/icons/flags/${locale}.svg`" alt="">
        <ul class="language-switcher__list" v-show="isLanguageSwitcherOpen">
            <li v-for="language in languages.filter(lang => lang.code !== locale)" :key="language.code">
                <NuxtLink :to="switchLocalePath(language.code)">
                    <img :src="`/icons/flags/${language.code}.svg`" alt="">
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const isLanguageSwitcherOpen = ref(false);

function toggleLanguageSwitcher() {
    isLanguageSwitcherOpen.value = !isLanguageSwitcherOpen.value;
}

const languages = [
    {
        name: 'Ukrainian',
        code: 'uk'
    },
    {
        name: 'English',
        code: 'en'
    }
]

</script>

<style lang="scss">
.language-switcher {
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 15px;
    background: rgba($accentColor, 0.5);
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-radius: 20px;

    .active-language {
        width: 20px;
        height: 20px;
        border-radius: 5px;
    }

    &__list {
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
            margin-top: 10px;

            a {

                img {
                    width: 20px;
                    height: 20px;
                    border-radius: 5px;
                }
            }
        }
    }
}
</style>
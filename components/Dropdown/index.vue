<template>
    <div>
        <div @click="handleToggle" class="flex justify-between items-center border-white py-3 cursor-pointer transition-all" :class="{ 'border-t-2': hasBorder }">
            <p class="text-[1.125rem]">{{ title }}</p>
            <p class="text-3xl">
                {{ isVisible ? '-' : '+' }}
            </p>
        </div>
        <Transition>
            <div v-if="isVisible">
                <p class="text-base mt-5 mb-8">{{ description }}</p>
            </div>
        </Transition>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        hasBorder: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            isVisible: false,
        }
    },
    methods: {
        handleToggle() {
            this.isVisible = !this.isVisible
        }
    },
}
</script>

<style lang="scss" scoped>
.v-enter-active {
    transition: opacity .2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
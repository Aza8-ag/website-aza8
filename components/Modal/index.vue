<template>
    <div class="modal">
        <div class="modal-paper" @click="$emit('closeModal')"></div>
        <div class="modal-content">
            <span class="modal-close" @click="$emit('closeModal')">X</span>
            
            <div v-show="id === 'sobre-nos'">
                <h3>Sobre nós.</h3>
                <p>Com o raciocínio de uma consultoria e o coração de uma agência, nos conectamos profundamente com os desafios de cada cliente, entregando soluções que são tão únicas quanto as marcas que representamos.</p>
                <p>Atuamos como aceleradores de impacto, traduzindo complexidade em relevância, e conectando tecnologia, design e cultura para moldar narrativas poderosas. Acreditamos que a comunicação tem o poder de inspirar e mover o mundo. E é isso que fazemos: construímos marcas autênticas, interessantes e visionárias, enquanto pavimentamos um futuro onde criatividade e estratégia andam de mãos dadas, gerando resultados que não apenas entregam, mas surpreendem.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: String,
    }
}
</script>

<style lang="scss" scoped>
.modal {
    @apply fixed w-full h-full top-0 left-0 z-[1000];
}

.modal-paper {
    @apply absolute w-full h-full bg-black opacity-80 top-0 left-0 z-[10000];
}

.modal-content {
    @apply absolute w-[90%] max-w-[540px] max-h-[80%] bg-[#0F0F0F] py-10 px-6 md:py-14 md:px-12 z-[100000] overflow-y-auto overflow-x-hidden;
    border: 1px solid white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h3 {
        @apply text-3xl md:text-4xl mb-7;
    }

    p {
        @apply text-base mb-5 font-light;

        &:last-child {
            @apply mb-0;
        }
    }
}

.modal-close {
    @apply hidden sm:block absolute -top-12 -right-8 cursor-pointer p-4 font-bold text-white text-base transition-all opacity-80 hover:opacity-100;
}
</style>
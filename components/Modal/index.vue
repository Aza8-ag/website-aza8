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
            
            <div v-show="id === 'o-que-fazemos'">
                <h3>Do growth à experiência, criamos marcas que evoluem com o mundo a nossa volta.</h3>
                <div>
                    <Dropdown title="Branding" description="Identidade Visual; Posicionamento; Guia verbal e visual; Namming; Arquitetura de marca." :hasBorder="false" />
                    <Dropdown title="Comunicacão On/Off" description="Campanhas publicitárias OOH/DOOH;  Gestão de social media;  Marketing de influência; Inbound marketing; Conceito e direção criativa; Produção de conteúdo; Trade marketing; Planejamento estratégico de comunicação; RP." />
                    <Dropdown title="Tecnologia" description="Desenvolvimento Web; Experência e interface (UX/UI); SEO; Integração de API; Automação; Análise e otimização de campanhas; Criação de dashboards; Implementação de CRM;" />
                    <Dropdown title="Live Marketing" description="Eventos corporativos; Ativação de Marca; Experiências IoT; Experiências sensoriais; Gestão de conteúdo promocional;" />
                    <Dropdown title="Consultoria" description="Analise de Mercado; Definição de Personas; Plano estratégico de Marketing; Estruturação de equipe de marketing." />
                </div>
            </div>

            <div v-show="id === 'lideranca'">
                <div class="pb-5 border-b-2 border-white flex flex-col">
                    <span class="text-base mb-0"><strong>Jhonatan Lopes</strong></span>
                    <span class="text-sm">Financeiro</span>
                </div>
                <div class="py-5 border-b-2 border-white flex flex-col">
                    <span class="text-base mb-0"><strong>Victor Armagnat</strong></span>
                    <span class="text-sm">Diretor de Criação</span>
                </div>
                <div class="py-5 border-b-2 border-white flex flex-col">
                    <span class="text-base mb-0"><strong>Thiago Fortes</strong></span>
                    <span class="text-sm">Novos Negócios</span>
                </div>
                <div class="py-5 border-b-2 border-white flex flex-col">
                    <span class="text-base mb-0"><strong>Victor Silva</strong></span>
                    <span class="text-sm">Diretor de Tecnologia</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from '@/components/Dropdown/index.vue'

export default {
    props: {
        id: String,
    },
    components: {
        Dropdown,
    },
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
    font-weight: 300;

    h3 {
        @apply text-2xl md:text-[1.675rem] mb-14;
        font-weight: 400;
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
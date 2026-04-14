<template>
        <v-card outlined class="goal d-flex flex-column rounded-lg mr-4 mb-4">
            <v-card-title>
            {{ translatedName }}
            <v-spacer></v-spacer>
            
            <v-btn 
                v-if="$props.name !== 'Reviews'"
                icon 
                @click="edit"
            >
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
        </v-card-title>
        <v-card-text class="d-flex flex-column align-center">
            <v-progress-circular
                :size="progressCircleSize"
                :width="progressCircleWidth"
                :value="percentage"
                :rotate="270"
                :color="color"
                class="mb-5"
            >{{ todaysAchievedQuantity }} / {{ goalQuantity }}</v-progress-circular>
            
            <div v-if="name == 'Reading'">
                {{ $t('goals.descriptions.reading', '', { count: goalQuantity }) }}
            </div>

            <div v-if="name == 'Reviews'">
                {{ $t('goals.descriptions.reviews', '', { count: goalQuantity }) }}
            </div>

            <div v-if="name == 'New words'">
                {{ $t('goals.descriptions.newWords', '', { count: goalQuantity }) }}
            </div>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions>
            <v-spacer></v-spacer> 
            <v-btn plain to="/review/false/-1/-1" v-if="name == 'Reviews'">{{ $t('goals.startReview') }}</v-btn>
            <v-btn plain to="/books" v-if="name == 'Reading' || name == 'New words'">{{ $t('goals.library') }}</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        data: function() {
            return {
                progressCircleSize: window.innerWidth <= 545 ? 200 : 180,
                progressCircleWidth: window.innerWidth <= 545 ? 22 : 20,
                titles: {
                    'review': 'Review',
                    'read_words': 'Reading',
                    'learn_words': 'New words',
                }
            }
        },
        props: {
            id: Number,
            name: String,
            goalQuantity: Number,
            todaysAchievedQuantity: Number,
            color: String,
            percentage: Number
        },
        computed: {
            translatedName() {
                return this.$t(`goals.names.${this.$props.name}`, this.$props.name);
            }
        },
        mounted() {
        },
        methods: {
            edit() {
                this.$emit('edit', {
                    id: this.$props.id,
                    name: this.$props.name,
                    goalQuantity: this.$props.goalQuantity,
                    achievedQuantity: this.$props.todaysAchievedQuantity
                });
            }
        }
    }
</script>

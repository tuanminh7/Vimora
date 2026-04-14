<template>
    <v-dialog v-model="value" persistent max-width="500px" height="300px">
        <v-card class="rounded-lg">
            <v-card-title>
                <span class="text-h5">{{ $t('goals.editGoalTitle', '', { name: translatedGoalName.toLowerCase() }) }}</span>
                <v-spacer></v-spacer>
                <v-btn icon @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
                
            <v-card-text>
                <v-alert
                    class="rounded-lg"
                    color="primary"
                    type="info"
                    border="left"
                    dark
                >
                    {{ $t('goals.editGoalNotice') }}
                </v-alert>

                <label class="font-weight-bold">{{ $t('goals.goalQuantity') }}</label>
                <v-text-field
                    v-model="goalQuantity"
                    class="mb-1"
                    type="number"
                    hide-details
                    filled
                    dense
                    rounded
                    :placeholder="$t('goals.goalQuantityPlaceholder')"
                    @change="quantityChanged"
                />
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn rounded text @click="close">{{ $t('common.cancel') }}</v-btn>
                <v-btn 
                    rounded 
                    depressed
                    color="primary" 
                    @click="save"
                    :disabled="saving"
                    :loading="saving"
                >
                    {{ $t('common.save') }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props: {
            value : Boolean,
            _id: Number,
            _name: String,
            _goalQuantity: Number,
            _achievedQuantity: Number,
        },
        computed: {
            translatedGoalName() {
                return this.$t(`goals.names.${this.$props._name}`, this.$props._name);
            }
        },
        emits: ['input'],
        data: function() {
            return {
                saving: false,
                goalQuantity: this.$props._goalQuantity
            };
        },
        mounted: function() {
        },
        methods: {
            quantityChanged() {
                if (this.goalQuantity == '' || this.goalQuantity < 0) {
                    this.goalQuantity = 0;
                }
            },
            save() {
                this.saving = true;

                axios.post('/goal/update', {
                    goalId: this.$props._id,
                    newGoalQuantity: this.goalQuantity
                }).then(() => {
                    this.saving = false;
                    this.$emit('save');
                    this.close();
                });
            },
            close() {
                this.$emit('input', false);
            }
        }
    }
</script>

<template>
    <v-dialog v-model="value" persistent max-width="600px" height="300px">
        <v-card class="rounded-lg">
            <v-card-title>
                <v-icon class="mr-2">mdi-lock-reset</v-icon>{{ $t('password.title') }}
                <v-spacer></v-spacer>
                <v-btn icon @click="close"> 
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            
            <!-- Change password form -->
            <v-card-text class="pt-4 pb-6">
                <v-form v-model="isFormValid" ref="userForm">
                    <template>
                        <!-- Password -->
                        <label class="font-weight-bold">{{ $t('password.newPassword') }}</label>
                        <v-text-field
                            v-model="password"
                            type="password"
                            filled
                            dense
                            rounded
                            :placeholder="$t('login.passwordPlaceholder')"
                            maxlength="32"
                            style="overflow: hidden;"
                            :rules="[rules.password]"
                            :disabled="saving"
                            @keyup.enter="save"
                        ></v-text-field>

                        <!-- Password confirmation -->
                        <label class="font-weight-bold">{{ $t('password.confirmNewPassword') }}</label>
                        <v-text-field
                            v-model="passwordConfirmation"
                            type="password"
                            filled
                            dense
                            rounded
                            :placeholder="$t('password.confirmPlaceholder')"
                            maxlength="32"
                            :rules="[rules.passwordMatch]"
                            :disabled="saving"
                            @keyup.enter="save"
                        ></v-text-field>
                    </template>
                </v-form>
                
                <v-alert
                    v-if="saveResult !== '' && saveResult !== 'success'"
                    class="rounded-lg mt-4 mb-0"
                    color="error"
                    type="error"
                    border="left"
                    dark
                >
                    <div v-html="saveResult"></div>
                </v-alert>

                <v-alert
                    v-if="saveResult == 'success'"
                    class="rounded-lg mt-4 mb-0"
                    color="success"
                    type="success"
                    border="left"
                    dark
                >
                    {{ $t('password.changedSuccess') }}
                </v-alert>
                
            </v-card-text>
            
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn rounded text @click="close">{{ $t('common.cancel') }}</v-btn>

                <!-- Save button -->
                <v-btn 
                    rounded 
                    depressed
                    color="primary" 
                    @click="save"
                    :disabled="!isFormValid || saving || saveResult == 'success'"
                    :loading="saving"
                >
                    {{ $t('password.title') }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props: {
            value : Boolean
        },
        emits: ['input'],
        data: function() {
            return {
                isFormValid: false,
                saving: false,
                password: '',
                passwordConfirmation: '',
                saveResult: '',

                rules: {
                    password: value => {
                        if (value.length < 8 || value.length > 32) {
                            return this.$t('password.passwordLength');
                        }
                        
                        return true;
                    },
                    passwordMatch: value => {
                        return value == this.password || this.$t('password.passwordMismatch');
                    }
                },
            };
        },
        mounted: function() {
        },
        methods: {
            save() {
                if (!this.$refs.userForm.validate()) {
                    return;
                }

                this.saving = true;
                axios.post('/users/update-password', {
                    password: this.password,
                    password_confirmation: this.passwordConfirmation
                }).then((response) => {
                    if (response.status !== 200) {
                        return;
                    }

                    this.saving = false;
                    this.saveResult = 'success';
                    
                    setTimeout(() => {
                        this.$emit('password-changed');
                    }, 1000);
                }).catch((error) => {
                    this.saving = false;
                    this.saveResult = '';

                    // add all error messages to the save result
                    var index = 0;
                    for (const [key, value] of Object.entries(error.response.data.errors)) {
                        if (index) {
                            this.saveResult += '<br>';
                        }

                        this.saveResult += value.join('<br>');

                        index ++;
                    }
                });
            },
            close() {
                this.$emit('input', false);
            }
        }
    }
</script>

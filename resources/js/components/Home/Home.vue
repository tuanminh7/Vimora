<template>
    <div>
        <v-container id="home" class="pb-12">
            <change-password-dialog
                v-model="passwordChangeDialog"
                @password-changed="passwordChangeFinished"
            ></change-password-dialog>

            <template v-if="!passwordChanged">
                <div class="subheader subheader-margin-top d-flex">
                    <v-icon large color="error" class="mr-2">mdi-alert</v-icon>{{ $t('home.passwordChange') }}
                </div>

                <v-alert
                    id="password-change-alert"
                    class="rounded-lg mt-2"
                    color="foreground"
                    border="left"
                >
                    {{ $t('home.passwordChangeNotice') }}

                    <div class="d-flex mt-4">
                        <v-spacer />
                        <v-btn
                            rounded
                            depressed
                            color="error"
                            @click="passwordChangeDialog = true;"
                        >
                            <v-icon class="mr-2">mdi-lock-reset</v-icon>
                            {{ $t('home.changePassword') }}
                        </v-btn>
                    </div>
                </v-alert>
            </template>

            <calendar
                ref="calendar"
                @achievement-quantity-change="updateGoals"
            ></calendar>
            <goals
                ref="goals"
                @goal-quantity-change="updateCalendar"
            ></goals>
            <statistics
                ref="statistics"
            ></statistics>

            <div class="subheader subheader-margin-top d-flex">
                {{ $t('home.about') }}
            </div>

            <div id="about" class="d-flex flex-wrap">
                <v-card outlined class="rounded-lg pt-0 mr-4 mb-4" width="290px">
                    <v-card-title>Vimora</v-card-title>
                    <v-card-text>
                        {{ $t('home.aboutText') }}
                        <div class="footer-link-box mb-1 mt-4">
                            <router-link to="/attributions"><v-icon class="mr-2">mdi-copyright</v-icon>{{ $t('home.attributions') }}</router-link>
                        </div>
                        <div class="footer-link-box mb-1">
                            <a href="https://simjanos-dev.github.io/LinguaCafeHome/"><v-icon class="mr-2">mdi-file-document</v-icon>{{ $t('home.overview') }}</a>
                        </div>
                    </v-card-text>
                </v-card>

                <v-card outlined class="rounded-lg pt-0 mr-4 mb-4" width="290px">
                    <v-card-title>{{ $t('home.contact') }}</v-card-title>
                    <v-card-text>
                        {{ $t('home.contactText') }}
                        <div class="footer-link-box mb-1 mt-4">
                            <a href="https://discord.gg/wZYZYrdaeP"><v-icon class="mr-2">mdi-message-text</v-icon>{{ $t('home.discord') }}</a>
                        </div>
                        <div class="footer-link-box mb-1">
                            <a href="https://github.com/simjanos-dev/LinguaCafe"><v-icon class="mr-2">mdi-github</v-icon>Github</a>
                        </div>
                        <div class="footer-link-box mb-1">
                            <a href="https://www.reddit.com/r/linguacafe/"><v-icon class="mr-2">mdi-reddit</v-icon>Reddit</a>
                        </div>
                    </v-card-text>
                </v-card>

                <v-card outlined class="rounded-lg pt-0 mr-4 mb-4" width="290px">
                    <v-card-title>{{ $t('home.version') }}</v-card-title>
                    <v-card-text>
                        {{ $t('home.versionText', '', { version: 'v0.14.1' }) }}
                        <div class="footer-link-box mb-1 mt-4">
                            <router-link to="/patch-notes"><v-icon class="mr-2">mdi-update</v-icon>{{ $t('home.updateNotes') }}</router-link>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
        </v-container>
    </div>
</template>


<script>
    import {formatNumber} from './../../helper.js';
    const moment = require('moment');
    import { DefaultLocalStorageManager } from './../../services/LocalStorageManagerService';
    export default {
        data: function() {
            return {
                theme: DefaultLocalStorageManager.loadSetting('theme') || 'light',
                passwordChanged: true,
                passwordChangeDialog: false
            }
        },
        props: {
        },
        mounted() {
            axios.get('/users/is-password-changed').then((response) => {
                this.passwordChanged = Boolean(response.data);
            });
        },
        methods: {
            updateCalendar() {
                this.$refs.calendar.loadCalendarData();
                this.$refs.statistics.loadStatistics();
            },
            updateGoals() {
                this.$refs.goals.loadGoals();
            },
            passwordChangeFinished() {
                this.passwordChanged = true;
                this.passwordChangeDialog = false;
            },
            formatNumber: formatNumber,
        }
    }
</script>

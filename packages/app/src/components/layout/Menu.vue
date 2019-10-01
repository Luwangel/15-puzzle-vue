<script>
import { mapActions, mapState } from 'vuex';

import Button from '../ui/Button';

export default {
    name: 'MyMenu',
    components: {
        Button,
    },
    computed: {
        ...mapState({
            loading: state => state.games.loading,
        }),
        restartButtonText() {
            return this.loading ? 'Loading...' : 'Restart Game';
        },
    },
    methods: {
        ...mapActions({
            restart: 'games/create',
        }),
    },
};
</script>

<template>
    <Button @click="restart()" :disabled="loading">
        {{ restartButtonText }}
    </Button>
</template>

<template>
  <div class="puzzle-tile">
    <span v-if="showNumbers" class="puzzle-tile-number">{{number}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Tile",
  props: {
    number: Number,
    showNumbers: Boolean,
    backgroundStyle: Object
  },
  computed: {
    ...mapState({
      showNumbers: state => state.games.showNumbers
    })
  }
};
</script>

<style scoped>
.puzzle-tile {
  cursor: pointer;
  user-select: none;
  background-color: #42b983;
  border-radius: 4px;
  position: relative;
  display: table-cell;
}

.puzzle-tile:hover {
  background-color: #76e4b2;
}

.puzzle-tile-number {
  color: #fff;
  text-align: center;
}

.picture {
  position: absolute;
}

.picture1 {
  clip: rect(0px, 40px, 40px, 0px);
  left: 0px;
}

.picture2 {
  clip: rect(0px, 80px, 40px, 40px);
  left: -40px;
}

.picture3 {
  clip: rect(0px, 120px, 40px, 80px);
  left: -80px;
}

.picture4 {
  clip: rect(0px, 160px, 40px, 120px);
  left: -120px;
}

.picture5 {
  clip: rect(40px, 40px, 80px, 0px);
  left: 0px;
  top: -40px;
}

.picture6 {
  clip: rect(40px, 80px, 80px, 40px);
  left: -40px;
  top: -40px;
}

.picture7 {
  clip: rect(40px, 120px, 80px, 80px);
  left: -80px;
  top: -40px;
}

.picture8 {
  clip: rect(40px, 160px, 80px, 120px);
  left: -120px;
  top: -40px;
}

.picture9 {
  clip: rect(80px, 40px, 120px, 0px);
  left: 0px;
  top: -80px;
}

.picture10 {
  clip: rect(80px, 80px, 120px, 40px);
  left: -40px;
  top: -80px;
}

.picture11 {
  clip: rect(80px, 120px, 120px, 80px);
  left: -80px;
  top: -80px;
}

.picture12 {
  clip: rect(80px, 160px, 120px, 120px);
  left: -120px;
  top: -80px;
}

.picture13 {
  clip: rect(120px, 40px, 160px, 0px);
  left: 0px;
  top: -120px;
}

.picture14 {
  clip: rect(120px, 80px, 160px, 40px);
  left: -40px;
  top: -120px;
}

.picture15 {
  clip: rect(120px, 120px, 160px, 80px);
  left: -80px;
  top: -120px;
}
</style>

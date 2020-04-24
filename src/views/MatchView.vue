<template>
    <div id="match">
        <div id="match-type">
            <input type="radio" name="match-type-radio" value="singles" checked v-model="matchType" @click="show" />
            <label>SINGLES</label>
            <br />
            <input type="radio" name="match-type-radio" value="doubles" v-model="matchType" @click="show" />
            <label>DOUBLES</label>
        </div>
        <div id="singles" v-if="matchType === 'singles'">
            <p>YOU PLAYED SINGLES</p>
            <label>Opponent</label>
            <br />
            <input type="text" v-model="competitor" />
            <br />
            <div id="match-result">
                <h1>Match Result</h1>
                <table>
                    <tr v-for="(result, index) in results" v-bind:key="index">
                        <td>
                            <span>{{index + 1}} set</span>
                            <input type="number" value="result.result1" v-model="result.result1"/>
                            -
                            <input type="number" value="result.result2" v-model="result.result2"/>
                            <button @click="deleteSet(index)">Delete Set</button>
                        </td>
                    </tr>
                </table>
                <button @click="addSet">Add Set</button>
            </div>
            <button @click="submit">submit</button>
        </div>
        <div id="doubles" v-if="matchType === 'doubles'">
            <p>YOU PLAYED DOUBLES</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface Result {
  result1: number;
  result2: number;
}
export default Vue.extend({
  data () {
    const results: Result[] = []
    return {
      matchType: '',
      competitor: '',
      results
    }
  },
  methods: {
    show () {
      console.log(this.matchType)
    },
    addSet (): void {
      this.results.push({
        result1: 0,
        result2: 0
      })
    },
    deleteSet (index: any): void {
      this.results.splice(index, 1)
    },
    submit () {
      let i = 1
      for (const result of this.results) {
        console.log('Set ' + i + ': ' + result.result1 + ' - ' + result.result2)
        i++
      }
    }
  }
})
</script>

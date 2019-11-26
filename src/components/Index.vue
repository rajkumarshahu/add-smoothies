<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <h2 class="indigo-text">
          {{smoothie.title}}
        </h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      smoothies: [
        {title: 'Summer Brew', slug: 'summer-brew', ingredients:['banana', 'maple syrup', 'milk', 'sugar'], id: 1},
        {title: 'Morning Mood', slug: 'morning-mood', ingredients:['mango', 'lime', 'yoghurt', 'cinnamon'], id: 2}
      ]

    }
  }
}
</script>


<style >

</style>

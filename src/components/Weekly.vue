<template>
  <div id="weekly">
    Aircraft:
    <select></select>
    <br />
    <table>
      <thead>
        <tr>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Weekly",
  components: {},
  methods: {},
};
</script>

<style>
#weekly {
  justify-content: left;
  text-align: left;
  margin: 2rem;
  background-color: lightblue;
}

.today {
  background-color: lightgreen;
}
</style>
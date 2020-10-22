<script>
import {Line} from "vue-chartjs"

export default {
  name: "StatisticBarComponent",

  extends: Line,

  data () {
    return {
      monthNames: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      lineData: [
        {"date":"2020-07-01","visits":213},
        {"date":"2020-07-02","visits":249},
        {"date":"2020-07-03","visits":179},
        {"date":"2020-07-04","visits":170},
        {"date":"2020-07-05","visits":184},
        {"date":"2020-07-06","visits":202},
        {"date":"2020-07-07","visits":198},
        {"date":"2020-07-08","visits":168},
        {"date":"2020-07-09","visits":176},
        {"date":"2020-07-10","visits":171},
        {"date":"2020-07-11","visits":190},
        {"date":"2020-07-12","visits":154},
        {"date":"2020-07-13","visits":246},
        {"date":"2020-07-14","visits":250},
        {"date":"2020-07-15","visits":227},
        {"date":"2020-07-16","visits":140},
        {"date":"2020-07-17","visits":170},
        {"date":"2020-07-18","visits":125},
        {"date":"2020-07-19","visits":106},
        {"date":"2020-07-20","visits":207},
        {"date":"2020-07-21","visits":222},
        {"date":"2020-07-22","visits":198},
        {"date":"2020-07-23","visits":204},
        {"date":"2020-07-24","visits":213},
        {"date":"2020-07-25","visits":145},
        {"date":"2020-07-26","visits":166},
        {"date":"2020-07-27","visits":163},
        {"date":"2020-07-28","visits":135},
        {"date":"2020-07-29","visits":45}
      ]
    }
  },

  mounted () {
    let lineDataLabels = []
    let lineDataVisits = []

    for (let i in this.lineData) {
      let lineDataDate = this.lineData[i]["date"].split("-")
      let lineDataMonthIndex = parseInt(lineDataDate[1])
      let lineDataLabel = lineDataDate[2] + this.monthNames[lineDataMonthIndex - 1]
      lineDataLabels.push(lineDataLabel)
      lineDataVisits.push(this.lineData[i]["visits"])
    }

    this.renderChart({
      labels: lineDataLabels,
      datasets: [
        {
          backgroundColor: "#e6c8fa",
          borderColor: "#9400fc",
          pointBackgroundColor: "#9400fc",
          pointRadius: 5,
          label: 'visits',
          lineTension: 0,
          data: lineDataVisits
        }
      ]
    }, {
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          ticks: {
            callback: function (tick, index) {
              return index % 7 ? "" : tick
            }
          }
        }]
      }
    })
  }
}
</script>

<style scoped>

</style>
var vm = new Vue({
    el: document.body,
    data: {
      blue: 1200,
      red: 2000,
      black: 2500,
      tempest: 1000,
      arachnid: 3000,

      currentView: 'red_tesla'
      },
      components: {
        red_tesla: {
            template: '#red_tesla_template'
        },
        blue_tesla: {
            template: '#blue_tesla_template'
        },
        black_tesla: {
            template: '#black_tesla_template'
        },
        tempest_wheels_tesla: {
            template: '#tempest_wheels_tesla_template'
        },
        arachnid_wheels_tesla: {
            template: '#arachnid_wheels_tesla_template'
        },
        
    },
    methods: {
        switchView: function(view) {
            this.currentView = view
        }
    },
      computed: {
        total: function() {
            var total = this.wheels + this.color ;
          return total-this.color<0?this.color:total;
    }
  }
});
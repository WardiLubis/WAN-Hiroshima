<template>
  <div class="home">

    <v-toolbar flat app src="../assets/navbar-sakura.png">
      <v-toolbar-title wrap class="white--text">
        <span row align-center class="pink--text font-weight-black">
          <v-img
        width="35px"
        height="20px"
        src="../assets/wan-logo-png.png"
        >
        </v-img>WELCOME TO Hiroshima</span>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>

      <v-btn depressed class="pink accent-2" @click="drawer = !drawer">
        <span class="white--text">Explore</span>
        <v-icon right class="white--text">
          mdi-map
        </v-icon>
      </v-btn>
    
    </v-toolbar>

      <v-navigation-drawer v-model="drawer" app right depressed class="pink accent-2">
        <v-list flat>
          <v-subheader class="white--text">Explore Hiroshima</v-subheader>
            <v-list-item-group v-model="item" color="white">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
      </v-navigation-drawer>

  <v-carousel
    cycle
    height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="slide in location"
      :src="slide.imgUrl"
      :key="slide.id"
    >   <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3 pink--text">{{ slide.name }}</div>
        </v-row>
    </v-carousel-item>
  </v-carousel>

      <v-card id="lateral">
    <v-toolbar
      dark
      tabs
      flat
    >
      <v-tabs
          v-model="tabs"
          align-with-title
          class="pink accent-2"
        >
          <v-tab right to="/destination">
            <v-icon left>mdi-map-marker</v-icon>
            Destination</v-tab>
          <v-tab to="/whattodo">
            <v-icon left >mdi-noodles</v-icon>
            What to Do</v-tab>
          <v-tab to="/event">
            <v-icon>mdi-calendar-clock</v-icon>
            Events & Festivals</v-tab>
          <v-tabs-slider color="white"></v-tabs-slider>
        </v-tabs>
        </v-toolbar>
      </v-card>

      <v-content>
        <router-view></router-view>
      </v-content>
      
  </div>
</template>

<script>

export default {
  data: () => ({
      drawer:false,
      item: 1,
      items: [
        { text: 'Destination', icon: 'mdi-map-marker' },
        { text: 'What to Do', icon: 'mdi-noodles' },
        { text: 'Events & Festivals', icon: 'mdi-calendar-clock' },
      ],
      location:[
        {id:'1',name: 'Itsukushima Shrine', imgUrl:'https://en.japantravel.com/photo/poi-19-204916/1200x630/hiroshima-itsukushima-shrine-204916.jpg'},
        {id:'2',name: 'Hiroshima Castle', imgUrl:'https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/02/Hiroshima-Castle.jpg'},
        {id:'3',name: 'Peace Memorial Park', imgUrl:'https://media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/2019-04/8385D460-4716-47BB-B0CE-DD421EE8A21F.jpg?itok=PfDEZRZY'},
        {id:'4',name: 'Shukkeien Garden', imgUrl:'https://i.pinimg.com/originals/3a/c1/94/3ac1943b22bb7ff1e3e5eb81e737bfcb.jpg'},
        {id:'5',name: 'Hondori Market', imgUrl:'https://live.staticflickr.com/8623/15899730061_84af72f1ed_b.jpg'}  
      ]
    }),
  components:{
  }
}
</script>
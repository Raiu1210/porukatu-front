<template>
  <div>
    <v-card>
      <v-toolbar
        color="cyan"
        dark
        flat
      >
        <v-toolbar-title>管理画面</v-toolbar-title>

        <template v-slot:extension>
          <v-tabs
            v-model="itemId"
            align-with-title
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="itemId">
        <!-- news -->
        <v-tab-item>
          <v-card flat>
            <v-row justify="center" align="center" class="mt-3">
              <v-col cols="1">
                <p>pass</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo />
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>title</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo v-model="newsRegisterObj.title" />
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>link</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo v-model="newsRegisterObj.link" />
              </v-col>
            </v-row>
            {{newsRegisterObj}}
          </v-card>
        </v-tab-item>

        <!-- road -->
        <v-tab-item>
          <v-card flat>
            <v-row justify="center" align="center" class="mt-3">
              <v-col cols="1">
                <p>pass</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo />
              </v-col>
            </v-row>

            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>name</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo v-model="roadRegisterObj.name"/>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>link</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo v-model="roadRegisterObj.link"/>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>description</p>
              </v-col>
              <v-col cols="10">
                <v-textarea outlined v-model="roadRegisterObj.description"/>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>lat</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo type="number" v-model="roadRegisterObj.lat"/>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>lon</p>
              </v-col>
              <v-col cols="10">
                <v-text-field type="number" solo v-model="roadRegisterObj.lon"/>
              </v-col>
            </v-row>
            {{roadRegisterObj}}
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <!-- pass form -->
            <v-row justify="center" align="center" class="mt-3">
              <v-col cols="1">
                <p>pass</p>
              </v-col>
              <v-col cols="10">
                <v-text-field label="Solo" solo />
              </v-col>
            </v-row>

            <!-- each data -->
            <div >

            </div>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <!-- pass form -->
            <v-row justify="center" align="center" class="mt-3">
              <v-col cols="1">
                <p>pass</p>
              </v-col>
              <v-col cols="10">
                <v-text-field label="Solo" solo />
              </v-col>
            </v-row>

            <!-- each data -->
            <div >

            </div>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <!-- pass form -->
            <v-row justify="center" align="center" class="mt-3">
              <v-col cols="1">
                <p>pass</p>
              </v-col>
              <v-col cols="10">
                <v-text-field label="Solo" solo />
              </v-col>
            </v-row>

            <!-- each data -->
            <div >
              <h1>aaa</h1>
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    {{endPoints[itemId]}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        itemId: null,
        items: [
          'news', 'road', 'parking', 'gourmets', 'repair_shop',
        ],
        endPoints: [
          '/news/register_news',
          '/plot/add_road',
          '/plot/add_parking',
          '/plot/add_gourmet',
          '/plot/add_repair_shop'
        ],
        newsRegisterObj: {
          title: "",
          link: ""
        },
        roadRegisterObj: {
          name: "",
          link: "",
          description: "",
          lat: 0.0,
          lon: 0.0,
          image_path: ""
        },
        parkingRegisterObj: {
          name: "",
          link: "",
          description: "",
          lat: 0.0,
          lon: 0.0,
          image_path: ""
        },
        gourmetRegisterObj: {
          name: "",
          tel: "",
          link: "",
          description: "",
          lat: 0.0,
          lon: 0.0,
          outside_img: "",
          product_img_0: "",
          product_img_1: "",
          product_img_2: "",
          product_img_3: ""
        },
        repairShopRegisterObj: {
          name: "",
          tel: "",
          link: "",
          description: "",
          lat: 0.0,
          lon: 0.0,
          outside_img: "",
          optional_img_0: "",
          optional_img_1: "",
          optional_img_2: "",
          optional_img_3: ""
        },
      }
    },
  }
</script>

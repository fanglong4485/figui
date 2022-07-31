<template>
  <div id="cesiumContainer" >

  </div>
</template>
<script>

import * as Cesium from "cesium";

export default {
  name: 'MyCesium',
  data () {
    return {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMGU0MDRiMC04NDZiLTRlZGUtOTFjOS00OThmOWJhYjBiOTkiLCJpZCI6MTAyMjk0LCJpYXQiOjE2NTg2NDY4NTF9.mef7uY2FZ9zicOFvcAs-KAngdfRU27eRh2BOXq9BcxY",
      viewer: null,
      scene: null,

    }
  },
  methods: {
    loadToken(){
      Cesium.Ion.defaultAccessToken = this.token
    },

    load(){
      //实例化cesium视图并赋值给data（）里的变量。
      this.viewer = new Cesium.Viewer("cesiumContainer")
      //配置红盒子。
      let redBox = {
        name : 'Red box with black outline',
        position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
        box : {
          dimensions : new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
          material : Cesium.Color.RED.withAlpha(0.5),
          outline : true,
          outlineColor : Cesium.Color.BLACK
        },
        //文本标签。
        label : {
          text : '我是一个红盒子',
          font : '14pt monospace',
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          outlineWidth : 2,
          verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
          pixelOffset : new Cesium.Cartesian2(0, -9)
        },
      }
      //把盒子添加到视图对象。
      this.viewer.entities.add(redBox);
      //默认定位至盒子。
      this.viewer.zoomTo(this.viewer.entities);
    },

    load2(){
      //创建视图，并基础配置。
       const viewer = new Cesium.Viewer("cesiumContainer", {
        terrainProvider: Cesium.createWorldTerrain(),
        infoBox: false,
        shouldAnimate: true,
      });
      //配置场景。配置预先的三维模型。
      const scene = viewer.scene;
      var buildingsTileset = scene.primitives.add(Cesium.createOsmBuildings());

      // 加载自己的geojson
      async function addBuildingGeoJSON() {
        // Load the GeoJSON file from Cesium ion.
        const geoJSONURL = await Cesium.IonResource.fromAssetId(1236168);
        // Create the geometry from the GeoJSON, and clamp it to the ground.
        const geoJSON = await Cesium.GeoJsonDataSource.load(geoJSONURL, { clampToGround: true });
        // Add it to the scene.
        const dataSource = await viewer.dataSources.add(geoJSON);
        // By default, polygons in CesiumJS will be draped over all 3D content in the scene.
        // Modify the polygons so that this draping only applies to the terrain, not 3D buildings.
        for (const entity of dataSource.entities.values) {
          entity.polygon.classificationType = Cesium.ClassificationType.TERRAIN;
        }
        // Move the camera so that the polygon is in view.
        await viewer.flyTo(dataSource);
      }
      addBuildingGeoJSON();

      // Hide individual buildings in this area using 3D Tiles Styling language.
      buildingsTileset.style = new Cesium.Cesium3DTileStyle({
        // Create a style rule to control each building's "show" property.
        show: {
          conditions : [
            // Any building that has this elementId will have `show = false`.
            ['${elementId} === 332469316', false],
            ['${elementId} === 332469317', false],
            ['${elementId} === 235368665', false],
            ['${elementId} === 530288180', false],
            ['${elementId} === 530288179', false],
            // If a building does not have one of these elementIds, set `show = true`.
            [true, true]
          ]
        },
        // Set the default color style for this particular 3D Tileset.
        // For any building that has a `cesium#color` property, use that color, otherwise make it white.
        color: "Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('#ffffff')"
      });

      //加入建筑
      // Add the 3D Tileset you created from your Cesium ion account.
      const newBuildingTileset = scene.primitives.add(
        new Cesium.Cesium3DTileset({
          url: Cesium.IonResource.fromAssetId(1237293)
        })
      );

      // console.log("建筑url=》",Cesium.IonResource.fromAssetId(1237293))
      // Cesium.Resource.fetchJson()
      // Move the camera to the new building.
      viewer.flyTo(newBuildingTileset);
    }


  },

  mounted () {
    this.loadToken()
    this.load2()
  }
}
</script>

<style>
  #cesiumContainer{
    width: 100%;
    height: 100%;
  }
</style>

module.exports = {
  component: '@byzanteam/vis-components/data-loader',
  position: [690, 272],
  exports: {
    results: 'results',
  },
  props: {
    $data: "[['', 0, 0, 0, 0, 0, 0, 0, 0, 0]]",
    url: '/v1/components/ca576fb4-f69b-41a8-b45f-f34d5ad24854/data',
    method: 'get',
    $style: {
      width: '387px',
      height: '384px',
    }
  },
  children: [
    {
      component: '@byzanteam/map-ui/base-map',
      position: [0, 0],
      props: {
        $mapOptions: '{center: [113.383285, 38.061188], zoom: 8}',
        features: 'none',
        mapStyle: 'amap://styles/cca20692c7b4da0b930eadd919d5a3fb',
        $useMapUi: 'true',
        $style: {
          width: '100%',
          height: '100%',
          $transform: "`scale(${1/getMapScale()})`",
        }
      },
      children: [
        {
          component: '@byzanteam/map-ui/regions',
          props: {
            $areas: 'areas',
            $areaStyle: {
              strokeColor: '#0158ff',
              strokeWeight: 1,
              fillColor: 'rgba(1, 88, 255, .1)',
            },
            $areaHoverStyle: {
              strokeColor: '#0158ff',
              strokeWeight: 1,
              fillColor: 'rgba(1, 88, 255, .4)',
            }
          },
          events: {
            'area-clicked': {
              params: ['json', 'area', 'vm'],
              actions: ["areaClickedFunc(json, area, vm)"],
            },
            'area-mouseover': {
              params: ['json', 'area', 'vm'],
              actions: ["areaMouseoverFunc(json, area, vm)"],
            },
            'area-mouseout': {
              params: ['json', 'area', 'vm'],
              actions: ["areaMouseoutFunc(json, area, vm)"],
            },
          },
        },
        {
          component: '@byzanteam/map-ui/marker-point',
          vfor: {
            data: 'yangquanGeoJson.features.map(item => ({label: item.properties.name, id: item.properties.name, location: item.properties.center}))',
          },
          props: {
            $marker: 'item',
            $markerStyle: {
              color: '#fff',
              $size: 8,
              strokeColor: '#0158ff',
              $strokeWidth: 2
            },
            $innerLabelStyle: {
              color: '#6b7885',
              fontSize: 14,
              $padding: "[2, 4]",
            }
          }
        },
        {
          id: 'infowindowRef',
          component: '@byzanteam/map-ui/info-window',
          props: {
            $options: {
              $closeWhenClickMap: true,
              $isCustom: true
            }
          }
        }
      ]
    }
  ]
}

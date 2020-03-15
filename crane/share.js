const chartTooltipOptions = {
  $tooltip: {
    $text: {
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
    $notation: {
      fill: '#007AFE',
      name: 'circle-small',
      $size: 14
    }
  },
  $tooltipOptions: {
    background: 'rgba(60, 71, 89, 0.9)',
    $text: {
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
    $title:{
      align: 'center',
      baseline: 'middle',
      fill: '#FFFFFF',
      $size: 14,
      $weight: 400
    },
  }
};
exports.chartTooltipOptions = chartTooltipOptions;
exports.normal_digital_style = {
  $titleStyle: {
    color: 'rgba(0, 0, 0)',
    fontSize: '14px',
    fontWeight: 500,
  },
  $suffixStyle: {
    fontSize: '14px',
    fontWeight: 400,
  },
  $digitalStyle: {
    fontSize: '36px',
    color: '#000000',
    fontWeight: 400,
    fontFamily: 'Oswald',
  },
};
exports.kpi_digital_style = {
  $titleStyle: {
    color: '#313c56',
    fontSize: '14px',
    lineHeight: 1.5
  },
  $suffixStyle: {
    color: '#313c56',
    fontSize: '14px',
    lineHeight: 1.5
  },
  $digitalStyle: {
    fontSize: '24px',
    color: '#313c56',
    fontWeight: 500,
    fontFamily: 'Oswald',
    lineHeight: 1
  },
};

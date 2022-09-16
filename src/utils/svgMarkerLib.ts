// All icons were normalized to fit in (100px x 100px) image
const svgIcons = {
  star: [
    ['M', [0.0, 38.7869]],
    ['L', [38.1969, 38.7869]],
    ['L', [50.0, 2.5]],
    ['L', [61.8031, 38.7869]],
    ['L', [100.0, 38.7869]],
    ['L', [69.0981, 61.2131]],
    ['L', [80.9019, 97.5]],
    ['L', [50.0, 75.0731]],
    ['L', [19.0981, 97.5]],
    ['L', [30.9019, 61.2131]],
    ['L', [0.0, 38.7869]],
    ['Z'],
  ],
  donut: [
    ['M', [0.0, 50.0]],
    ['L', [0.0, 50.0]],
    ['C', [0.0, 22.3858], [22.3858, 0.0], [50.0, 0.0]],
    ['L', [50.0, 0.0]],
    ['C', [63.2608, 0.0], [75.9785, 5.26784], [85.3553, 14.6447]],
    ['C', [94.7322, 24.0215], [100.0, 36.7392], [100.0, 50.0]],
    ['L', [100.0, 50.0]],
    ['C', [100.0, 77.6142], [77.6142, 100.0], [50.0, 100.0]],
    ['L', [50.0, 100.0]],
    ['C', [22.3858, 100.0], [0.0, 77.6142], [0.0, 50.0]],
    ['Z'],
    ['M', [25.0, 50.0]],
    ['L', [25.0, 50.0]],
    ['C', [25.0, 63.8071], [36.1929, 75.0], [50.0, 75.0]],
    ['C', [63.8071, 75.0], [75.0, 63.8071], [75.0, 50.0]],
    ['C', [75.0, 36.1929], [63.8071, 25.0], [50.0, 25.0]],
    ['L', [50.0, 25.0]],
    ['C', [36.1929, 25.0], [25.0, 36.1929], [25.0, 50.0]],
    ['Z'],
  ],
  triangle: [
    ['M', [0.0, 93.75]],
    ['L', [50.0, 6.25]],
    ['L', [100.0, 93.75]],
    ['Z'],
  ],
  right_triangle: [
    ['M', [0.0, 100.0]],
    ['L', [0.0, 0.0]],
    ['L', [100.0, 100.0]],
    ['Z'],
  ],
  diamond: [
    ['M', [0.0, 50.0]],
    ['L', [50.0, 0.0]],
    ['L', [100.0, 50.0]],
    ['L', [50.0, 100.0]],
    ['L', [0.0, 50.0]],
    ['Z'],
  ],
  pentagon: [
    ['M', [1.04316e-14, 38.7586]],
    ['L', [49.9999, 2.38089]],
    ['L', [100.0, 38.7586]],
    ['L', [80.9018, 97.6191]],
    ['L', [19.0983, 97.6191]],
    ['L', [4.76875e-15, 38.7586]],
    ['Z'],
  ],
  hexagon: [
    ['M', [0.0, 50.0]],
    ['L', [21.4286, 7.14286]],
    ['L', [78.5714, 7.14286]],
    ['L', [100.0, 50.0]],
    ['L', [78.5714, 92.8571]],
    ['L', [21.4286, 92.8571]],
    ['L', [7.15311e-15, 50.0]],
    ['Z'],
  ],
  trapezoid: [
    ['M', [1.67785e-6, 100.0]],
    ['L', [18.75, 0.0]],
    ['L', [81.25, 0.0]],
    ['L', [100.0, 100.0]],
    ['Z'],
  ],
  dialog_balloon: [
    ['M', [0.117159, 11.7058]],
    ['L', [0.117159, 11.7058]],
    ['C', [0.117159, 5.24087], [5.23521, 7.13635e-15], [11.5486, 7.13635e-15]],
    ['L', [16.7448, 7.13635e-15]],
    ['L', [16.7448, 7.13635e-15]],
    ['L', [41.6862, 7.13635e-15]],
    ['L', [88.4514, 7.13635e-15]],
    ['C', [91.4832, 7.13635e-15], [94.3908, 1.23328], [96.5346, 3.42855]],
    ['C', [98.6785, 5.62382], [99.8828, 8.60124], [99.8828, 11.7058]],
    ['L', [99.8828, 40.9703]],
    ['L', [99.8828, 40.9703]],
    ['L', [99.8828, 58.529]],
    ['L', [99.8828, 58.529]],
    ['C', [99.8828, 64.994], [94.7648, 70.2348], [88.4514, 70.2348]],
    ['L', [41.6862, 70.2348]],
    ['L', [9.10331, 100.0]],
    ['L', [16.7448, 70.2348]],
    ['L', [11.5486, 70.2348]],
    ['C', [5.23521, 70.2348], [0.117163, 64.994], [0.117163, 58.529]],
    ['L', [0.117163, 58.529]],
    ['L', [0.117163, 40.9703]],
    ['L', [0.117163, 40.9703]],
    ['Z'],
  ],
  heart: [
    ['M', [50.0, 24.0592]],
    ['C', [70.5884, -35.0058], [151.254, 24.0592], [50.0, 100.0]],
    ['C', [-51.2544, 24.0592], [29.4116, -35.0058], [50.0, 24.0592]],
    ['Z'],
  ],
  cylinder: [
    ['M', [100.0, 27.7778]],
    ['C', [100.0, 33.9143], [77.6142, 38.8889], [50.0, 38.8889]],
    ['M', [100.0, 27.7778]],
    ['L', [100.0, 27.7778]],
    ['C', [100.0, 33.9143], [77.6142, 38.8889], [50.0, 38.8889]],
    ['C', [22.3858, 38.8889], [9.53749e-15, 33.9143], [9.53749e-15, 27.7778]],
    ['M', [9.53749e-15, 27.7778]],
    ['L', [9.53749e-15, 27.7778]],
    ['C', [9.53749e-15, 21.6413], [22.3858, 16.6667], [50.0, 16.6667]],
    ['C', [77.6142, 16.6667], [100.0, 21.6413], [100.0, 27.7778]],
    ['L', [100.0, 72.2222]],
    ['C', [100.0, 78.3587], [77.6142, 83.3333], [50.0, 83.3333]],
    ['C', [22.3858, 83.3333], [9.53749e-15, 78.3587], [9.53749e-15, 72.2222]],
    ['Z'],
  ],
  arrow_up: [
    ['M', [7.47619e-15, 49.8801]],
    ['L', [50.0, 0.0480535]],
    ['L', [100.0, 49.8801]],
    ['L', [75.0, 49.8801]],
    ['L', [75.0, 99.9519]],
    ['L', [25.0, 99.9519]],
    ['L', [25.0, 49.8801]],
    ['Z'],
  ],
  arrow_u_turn: [
    ['M', [3.94912e-15, 100.0]],
    ['L', [3.94912e-15, 43.75]],
    ['L', [3.94912e-15, 43.75]],
    ['C', [3.94912e-15, 19.5875], [19.5875, 0.0], [43.75, 0.0]],
    ['L', [43.75, 0.0]],
    ['L', [43.75, 0.0]],
    ['C', [55.3532, 0.0], [66.4812, 4.60936], [74.6859, 12.8141]],
    ['C', [82.8907, 21.0188], [87.5, 32.1468], [87.5, 43.75]],
    ['L', [87.5, 50.0]],
    ['L', [100.0, 50.0]],
    ['L', [75.0, 75.0]],
    ['L', [50.0, 50.0]],
    ['L', [62.5, 50.0]],
    ['L', [62.5, 43.75]],
    ['C', [62.5, 33.3947], [54.1053, 25.0], [43.75, 25.0]],
    ['L', [43.75, 25.0]],
    ['L', [43.75, 25.0]],
    ['C', [33.3947, 25.0], [25.0, 33.3947], [25.0, 43.75]],
    ['L', [25.0, 100.0]],
    ['Z'],
  ],
  arrow_left_up: [
    ['M', [8.38926e-6, 75.0]],
    ['L', [25.0, 50.0]],
    ['L', [25.0, 62.5]],
    ['L', [62.5, 62.5]],
    ['L', [62.5, 25.0]],
    ['L', [50.0, 25.0]],
    ['L', [75.0, 0.0]],
    ['L', [100.0, 25.0]],
    ['L', [87.5, 25.0]],
    ['L', [87.5, 87.5]],
    ['L', [25.0, 87.5]],
    ['L', [25.0, 100.0]],
    ['L', [1.1745e-5, 75.0]],
    ['Z'],
  ],
  plaque: [
    ['M', [1.66859e-6, 16.667]],
    ['L', [1.66859e-6, 16.667]],
    ['C', [9.20493, 16.667], [16.667, 9.20493], [16.667, -4.74243e-15]],
    ['L', [83.333, -4.74243e-15]],
    ['L', [83.333, -4.74243e-15]],
    ['C', [83.333, 9.20493], [90.7951, 16.667], [100.0, 16.667]],
    ['L', [100.0, 83.333]],
    ['L', [100.0, 83.333]],
    ['C', [90.7951, 83.333], [83.333, 90.7951], [83.333, 100.0]],
    ['L', [16.667, 100.0]],
    ['C', [16.667, 90.7951], [9.20493, 83.333], [1.66859e-6, 83.333]],
    ['Z'],
  ],
  page: [
    ['M', [83.333, 100.0]],
    ['L', [86.6664, 86.6664]],
    ['L', [100.0, 83.333]],
    ['L', [83.333, 100.0]],
    ['L', [0.0, 100.0]],
    ['L', [0.0, 0.0]],
    ['L', [100.0, 0.0]],
    ['L', [100.0, 83.333]],
    ['Z'],
  ],
  '+': [
    ['M', [1.67396e-6, 33.049]],
    ['L', [33.049, 33.049]],
    ['L', [33.049, -4.75768e-15]],
    ['L', [66.951, -4.75768e-15]],
    ['L', [66.951, 33.049]],
    ['L', [100.0, 33.049]],
    ['L', [100.0, 66.951]],
    ['L', [66.951, 66.951]],
    ['L', [66.951, 100.0]],
    ['L', [33.049, 100.0]],
    ['L', [33.049, 66.951]],
    ['L', [1.67396e-6, 66.951]],
    ['Z'],
  ],
  divide: [
    ['M', [50.0, -9.48133e-15]],
    ['L', [50.0, -9.48133e-15]],
    ['C', [58.4989, -9.48133e-15], [65.3886, 6.88973], [65.3886, 15.3886]],
    ['C', [65.3886, 23.8876], [58.4989, 30.7773], [50.0, 30.7773]],
    ['C', [41.5011, 30.7773], [34.6114, 23.8876], [34.6114, 15.3886]],
    ['C', [34.6114, 6.88973], [41.5011, -9.59376e-15], [50.0, -9.59376e-15]],
    ['Z'],
    ['M', [50.0, 100.0]],
    ['C', [41.5011, 100.0], [34.6114, 93.1103], [34.6114, 84.6114]],
    ['C', [34.6114, 76.1124], [41.5011, 69.2227], [50.0, 69.2227]],
    ['C', [58.4989, 69.2227], [65.3886, 76.1124], [65.3886, 84.6114]],
    ['C', [65.3886, 93.1103], [58.4989, 100.0], [50.0, 100.0]],
    ['Z'],
    ['M', [4.74545, 34.6114]],
    ['L', [95.2546, 34.6114]],
    ['L', [95.2546, 65.3886]],
    ['L', [4.74545, 65.3886]],
    ['Z'],
  ],
  '-': [
    ['M', [-3.61995e-15, 33.9978]],
    ['L', [100.0, 33.9978]],
    ['L', [100.0, 66.0022]],
    ['L', [0.0, 66.0022]],
    ['Z'],
  ],
  x: [
    ['M', [2.91613e-14, 24.2449]],
    ['L', [24.2449, 9.52205e-15]],
    ['L', [49.9999, 25.7548]],
    ['L', [75.7549, 9.52205e-15]],
    ['L', [100.0, 24.2449]],
    ['L', [74.245, 49.9999]],
    ['L', [100.0, 75.7549]],
    ['L', [75.7549, 100.0]],
    ['L', [49.9999, 74.245]],
    ['L', [24.2449, 100.0]],
    ['L', [9.52205e-15, 75.7549]],
    ['L', [25.7548, 49.9999]],
    ['L', [9.52205e-15, 24.2449]],
    ['Z'],
  ],
};

export interface SVGMarkerProp {
  size: number;
  fillColor?: string | undefined;
  lineColor?: string | undefined;
  lineWidth?: number | undefined;
}

export type SVGIconName =
  | 'heart'
  | 'dialog_balloon'
  | 'diamond'
  | 'triangle'
  | 'divide'
  | '+'
  | '-'
  | 'cylinder'
  | 'arrow_up'
  | 'trapezoid'
  | 'donut'
  | 'arrow_left_up'
  | 'x'
  | 'right_triangle'
  | 'star'
  | 'arrow_u_turn'
  | 'hexagon'
  | 'pentagon'
  | 'page'
  | 'plaque';

export type SVGMarkerName = 'o' | 'box' | SVGIconName;

export const getSVGMarker = (
  name: SVGMarkerName,
  prop: SVGMarkerProp
): string => {
  const lineWidth = ((prop.lineWidth || 0) / prop.size) * 100.0;
  const stroke = prop.lineColor
    ? `stroke-width="${lineWidth}" stroke="${prop.lineColor}"`
    : '';
  const fill = prop.fillColor ? `fill="${prop.fillColor}"` : 'fill="#000"';
  const contents: string[] = [];

  switch (name) {
    case 'o':
      contents.push(
        `<ellipse ${stroke} ${fill} ry="${50 - lineWidth / 2}" rx="${
          50 - lineWidth / 2
        }" cy="50" cx="50"/>`
      );
      break;
    case 'box':
      contents.push(
        `<rect ${stroke} ${fill} height="${100 - lineWidth}" width="${
          100 - lineWidth
        }" y="${lineWidth / 2}" x="${lineWidth / 2}"/>`
      );
      break;
    default: {
      const pathData = svgIcons[name];
      const scale = (50 - lineWidth / 2.0) / 50;
      const serialized: string[] = [];
      pathData.forEach((e) => {
        serialized.push(e[0] as string);
        e.slice(1).forEach((p) => {
          const param = p as number[];
          serialized.push(
            param
              .map((c) => {
                return (50 + scale * (c - 50.0)).toString();
              })
              .join(',')
          );
        });
      });
      const path = serialized.join(' ');
      contents.push(`<path ${stroke} ${fill} d="${path}"/>`);
    }
  }

  const svg = `<?xml version="1.0" standalone="no"?>
    <svg width="100px" height="100px" xmlns="http://www.w3.org/2000/svg">
    <g>"${contents.join('')}"</g></svg>`;

  return svg;
};

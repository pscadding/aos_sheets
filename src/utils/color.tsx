// taken and modified from https://css-tricks.com/converting-color-spaces-in-javascript/
export function hexToRGB(h: string, alpha: number = 1) {
  let r: string = '0';
  let g: string = '0';
  let b: string = '0';

  // 3 digits
  if (h.length == 4) {
    r = '0x' + h[1] + h[1];
    g = '0x' + h[2] + h[2];
    b = '0x' + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = '0x' + h[1] + h[2];
    g = '0x' + h[3] + h[4];
    b = '0x' + h[5] + h[6];
  }

  return 'rgba(' + +r + ',' + +g + ',' + +b + `,${alpha})`;
}

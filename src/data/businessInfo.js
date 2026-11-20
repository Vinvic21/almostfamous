import floor from '../assets/shop-floor.webp'
import counter from '../assets/shop-counter.webp'
import lobby from '../assets/shop-lobby.webp'
import flash from '../assets/shop-flash.webp'
import sign from '../assets/shop-sign.webp'
import floral from '../assets/tattoo-floral.webp'
import anchor from '../assets/tattoo-anchor.webp'
import lion from '../assets/tattoo-lion.webp'
import penny from '../assets/tattoo-penny.webp'
import puzzle from '../assets/tattoo-puzzle.webp'
import logo from '../assets/logo.png'

// Single source of truth for every business fact shown on the site.
// Update details here only. Anything not listed here is intentionally NOT on the site.
export const business = {
  name: 'Almost Famous Tattoo & Piercings',
  shortName: 'Almost Famous',
  category: 'Tattoo and piercing shop',
  phoneDisplay: '(207) 747-4478',
  phoneHref: 'tel:+12077474478',
  address: {
    street: '1170 Forest Ave',
    city: 'Portland',
    region: 'ME',
    postal: '04103',
  },
  hoursNote: 'Hours can differ on holidays. Please call to confirm.',
  hours: [
    ['Monday', '12 pm – 9 pm'],
    ['Tuesday', '12 pm – 9 pm'],
    ['Wednesday', '12 pm – 9 pm'],
    ['Thursday', '12 pm – 9 pm'],
    ['Friday', '12 pm – 9 pm'],
    ['Saturday', '12 pm – 9 pm'],
    ['Sunday', '12 pm – 9 pm'],
  ],
  facebook: 'https://www.facebook.com/AlmostFamousTattoosPortland/',
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('Almost Famous Tattoo & Piercings, 1170 Forest Ave, Portland, ME 04103'),
}

export const images = {
  logo,
  hero: floor,
  counter,
  lobby,
  flash,
  sign,
}

export const services = [
  {
    icon: 'pen',
    title: 'Custom Tattoos',
    text: 'Bring an idea, a name, a memory or a sketch. Talk it through with the artists and walk out with a piece that is yours.',
  },
  {
    icon: 'palette',
    title: 'Colour Work',
    text: 'Florals, banners, bold saturated pieces and full colour sleeves.',
  },
  {
    icon: 'feather',
    title: 'Black & Grey',
    text: 'Soft shading and fine detail for portraits, animals, lettering and memorial pieces.',
  },
  {
    icon: 'anchor',
    title: 'Traditional & Flash',
    text: 'Classic traditional imagery, with flash sheets on display in the shop to browse.',
  },
  {
    icon: 'gem',
    title: 'Piercings',
    text: 'Body piercing at the same address, from the shop that carries the Tattoos & Piercings name.',
  },
]

export const gallery = [
  { src: lion, alt: 'Black and grey lion portrait tattoo on an upper arm', label: 'Black & grey lion', tall: true },
  { src: floral, alt: 'Colourful floral tattoo with a name banner on a forearm', label: 'Colour florals', wide: true },
  { src: anchor, alt: 'Traditional style teal anchor tattoo wrapped in rope', label: 'Traditional anchor' },
  { src: penny, alt: 'Lucky penny and four-leaf clover tattoo with a name and lettering', label: 'Memorial lettering', tall: true },
  { src: puzzle, alt: 'Colourful puzzle piece tattoo with phoenix and tribal artwork on an arm', label: 'Puzzle & phoenix sleeve', tall: true },
]

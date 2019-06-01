var $products,
  $current_product = "toothsy";

// List all the products here

$products = {
  toothsy: {
    name: "Toothsy",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/toothsy-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/toothsy/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  pointer: {
    name: "Pointer",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/pointer-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/pointer/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  niko: {
    name: "Niko",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/niko-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/niko/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  amplify: {
    name: "Amplify",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/amplify-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/amplify/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  thumber: {
    name: "Thumber",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/thumber-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/thumber/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  namaste: {
    name: "Namaste",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/namaste-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/namaste/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  glamour: {
    name: "Glamour",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/glamour-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/glamour/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  digilab: {
    name: "Digilab",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/digilab-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/digilab/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  square: {
    name: "Square",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/square-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/square/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  shopmax: {
    name: "Shopmax",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/shopmax-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/shopmax/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  selling: {
    name: "Selling",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/selling-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/selling/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  landerz: {
    name: "Landerz",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/landerz-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/landerz/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  confer: {
    name: "Confer",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/confer-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/confer/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  umeet: {
    name: "Umeet",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/umeet-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/umeet/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  stories: {
    name: "Stories",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/stories-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/stories/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  sportify: {
    name: "Sportify",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/sportify-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sportify/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  sneaky: {
    name: "Sneaky",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/sneaky-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sneaky/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  safario: {
    name: "Safario",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/safario-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/safario/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  rehomes: {
    name: "Rehomes",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/rehomes-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/rehomes/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  parason: {
    name: "Parason",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/parason-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/parason/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  marimar: {
    name: "Marimar",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/marimar-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/marimar/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  lorahost: {
    name: "Lorahost",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/lorahost-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/lorahost/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  lawride: {
    name: "Lawride",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/lawride-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/lawride/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  interiordesign: {
    name: "Interiordesign",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/interiordesign-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/interiordesign/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  eiser: {
    name: "Eiser",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/eiser-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/eiser/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  classyads: {
    name: "Classyads",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/classyads-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/classyads/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  breed2: {
    name: "Breed2",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/03/breed2-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/breed2/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  shutter: {
    name: "Shutter",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/shutter-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/shutter/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  listed: {
    name: "Listed",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/listed-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/listed/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  funder: {
    name: "Funder",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/funder-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/funder/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  chimper: {
    name: "Chimper",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/chimper-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/chimper/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  alime: {
    name: "Alime",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/alime-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/alime/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  traveland: {
    name: "Traveland",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/traveland-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/traveland/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  roberto: {
    name: "Roberto",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/roberto-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/roberto/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  hami: {
    name: "Hami",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/hami-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/hami/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  workshop: {
    name: "Workshop",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/workshop-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/workshop/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  sensive: {
    name: "Sensive",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/sensive-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sensive/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  seapalace: {
    name: "Seapalace",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/seapalace-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/seapalace/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  revive: {
    name: "Revive",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/revive-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/revive/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  remake: {
    name: "Remake",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/remake-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/remake/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  proshoot: {
    name: "Proshoot",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/proshoot-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/proshoot/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  kusina: {
    name: "Kusina",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/kusina-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/kusina/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  hikers: {
    name: "Hikers",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/hikers-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/hikers/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  hamlet: {
    name: "Hamlet",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/hamlet-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/hamlet/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  edustage: {
    name: "Edustage",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/edustage-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/edustage/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  bee: {
    name: "Bee",
    tag: "Template",
    img: "https://colorlib.com/wp-content/uploads/2019/02/bee-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/bee/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  aroma: {
    name: "Aroma",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/aroma-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/aroma/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  arclabs: {
    name: "Arclabs",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/arclabs-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/arclabs/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  redplanet: {
    name: "Redplanet",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/redplanet-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/redplanet/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  logistics: {
    name: "Logistics",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/logistics-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/logistics/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  kiddos: {
    name: "Kiddos",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/kiddos-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/kiddos/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  crossfit: {
    name: "Crossfit",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/crossfit-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/crossfit/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  confpro: {
    name: "Confpro",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/02/confpro-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/confpro/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  whisper: {
    name: "Whisper",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/whisper-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/whisper/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  spring: {
    name: "Spring",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/spring-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/spring/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  razo: {
    name: "Razo",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/razo-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/razo/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  photogallery: {
    name: "Photogallery",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/photogallery-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/photogallery/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  myhome: {
    name: "Myhome",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/myhome-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/myhome/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  mosaic: {
    name: "Mosaic",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/mosaic-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/mosaic/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  endgam: {
    name: "Endgam",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/endgam-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/endgam/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  drcare: {
    name: "Drcare",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/drcare-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/drcare/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  akame: {
    name: "Akame",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/akame-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/akame/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  travelers: {
    name: "Travelers",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/travelers-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/travelers/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  sogo: {
    name: "Sogo",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/sogo-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sogo/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  homespace: {
    name: "Homespace",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/homespace-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/homespace/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  eventalk: {
    name: "Eventalk",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/eventalk-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/eventalk/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  confe: {
    name: "Confe",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/confe-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/confe/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  yogalife: {
    name: "yogalife",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/yogalife-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/yogalife/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  yogalax: {
    name: "Yogalax",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/yogalax-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/yogalax/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  uza: {
    name: "Uza",
    tag: "Template",
    img: "https://colorlib.com/wp-content/uploads/2019/01/uza-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/uza/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  taxa: {
    name: "Taxa",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/taxa-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/taxa/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  sparsh: {
    name: "Sparsh",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/sparsh-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sparsh/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  seelife: {
    name: "Seelife",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/seelife-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/seelife/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  satner: {
    name: "Satner",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/satner-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/satner/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  music: {
    name: "Music",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/music-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/music/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  medino: {
    name: "Medino",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/medino-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/medino/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  foodfun: {
    name: "Foodfun",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/foodfun-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/foodfun/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  fitzone: {
    name: "Fitzone",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/fitzone-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/fitzone/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  divisima: {
    name: "Divisima",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/divisima-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/divisima/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  crossbody: {
    name: "Crossbody",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/crossbody-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/crossbody/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  comport: {
    name: "comport",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2019/01/comport-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/comport/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  theriver: {
    name: "Theriver",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/theriver-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/theriver/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  poca: {
    name: "Poca",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/poca-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/poca/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  muscle: {
    name: "Muscle",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/muscle-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/muscle/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  mona: {
    name: "Mona",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/mona-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/mona/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  modist: {
    name: "Modist",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/modist-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/modist/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  ithost: {
    name: "ITHost",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/ithost-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/ithost/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  louie: {
    name: "Louie",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/louie-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/louie/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  fotograp: {
    name: "Fotograp",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/fotograp-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/fotograp/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  directoryplus: {
    name: "Directoryplus",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/directoryplus-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/directoryplus/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  crossfits: {
    name: "Crossfits",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/crossfits-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/crossfits/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  cloud83: {
    name: "Cloud83",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/cloud83-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/cloud83/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  capture: {
    name: "Capture",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/capture-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/capture/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  suites: {
    name: "Suites",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/suites-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/suites/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  steakshop: {
    name: "Steakshop",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/steakshop-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/steakshop/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  sportsteam: {
    name: "Sportsteam",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/sportsteam-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sportsteam/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  royalestate: {
    name: "Royalestate",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/royalestate-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/royalestate/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  photon: {
    name: "photon",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/photon-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/photon/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  loaft: {
    name: "Loaft",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/loaft-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/loaft/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  lawful: {
    name: "Lawful",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/lawful-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/lawful/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  karma: {
    name: "Karma",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/karma-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/karma/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  jobportal: {
    name: "Jobportal",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/jobportal-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/jobportal/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  homeland: {
    name: "Homeland",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/homeland-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/homeland/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  faithful: {
    name: "Faithful",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/faithful-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/faithful/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  eclipse: {
    name: "Eclipse",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/eclipse-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/eclipse/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  dento: {
    name: "Dento",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/dento-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/dento/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  deluxe: {
    name: "Deluxe",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/deluxe-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/deluxe/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  crafted: {
    name: "Crafted",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/crafted-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/crafted/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  bounty: {
    name: "Bounty",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/bounty-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/bounty/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  beyond: {
    name: "Beyond",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/beyond-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/beyond/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  radios: {
    name: "Radios",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/radios-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/radios/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  prodent: {
    name: "Prodent",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/prodent-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/prodent/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  mypodcast: {
    name: "Mypodcast",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/mypodcast-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/mypodcast/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  modelo: {
    name: "Modelo",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/modelo-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/modelo/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  farmie: {
    name: "Farmie",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/farmie-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/farmie/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  elen: {
    name: "Elen",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/elen-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/elen/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  casahotel: {
    name: "Casahotel",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/12/casahotel-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/casahotel/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  eighty8: {
    name: "Eighty8",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/eighty8-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/eighty8/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  vogue: {
    name: "Vogue",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/vogue-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/vogue/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  vizew: {
    name: "Vizew",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/vizew-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/vizew/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  reborn: {
    name: "Reborn",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/reborn-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/reborn/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  jobfinder: {
    name: "Jobfinder",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/jobfinder-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/jobfinder/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  ironmuscle: {
    name: "Ironmuscle",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/ironmuscle-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/ironmuscle/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  wordify: {
    name: "Wordify",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/wordify-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/wordify/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  steve: {
    name: "Steve",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/steve-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/steve/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  ruft: {
    name: "Ruft",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/ruft-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/ruft/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  rooftop: {
    name: "Rooftop",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/rooftop-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/rooftop/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  medicare2: {
    name: "Medicare2",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/medicare2-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/medicare2/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  mag: {
    name: "Mag",
    tag: "Template",
    img: "https://colorlib.com/wp-content/uploads/2018/11/mag-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/mag/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  islagrande: {
    name: "Islagrande",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/islagrande-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/islagrande/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  gaas: {
    name: "Gaas",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/gaas-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/gaas/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  edusmart: {
    name: "Edusmart",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/edusmart-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/edusmart/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  comodo: {
    name: "Comodo",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/comodo-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/comodo/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  barcut: {
    name: "Barcut",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/barcut-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/barcut/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  pixel: {
    name: "pixel",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/pixel-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/pixel/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  luigis: {
    name: "luigis",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/luigis-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/luigis/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  littlecloset: {
    name: "Little Closet",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/littlecloset-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/littlecloset/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  diva: {
    name: "Diva",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/11/diva-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/diva/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  videomag: {
    name: "Videomag",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/videomag-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/videomag/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  mixtape: {
    name: "Mixtape",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/mixtape-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/mixtape/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  credit: {
    name: "Credit",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/credit-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/credit/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  smashed: {
    name: "Smashed",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/smashed-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/smashed/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  server: {
    name: "Server",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/server-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/server/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  radisson: {
    name: "Radisson",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/radisson-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/radisson/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  pulse: {
    name: "Pulse",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/pulse-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/pulse/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  kenedy: {
    name: "Kenedy",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/kenedy-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/kenedy/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  jobstart: {
    name: "Jobstart",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/jobstart-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/jobstart/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  fantasy: {
    name: "Fantasy",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/fantasy-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/fantasy/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  egames: {
    name: "eGames",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/egames-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/egames/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  educature: {
    name: "Educature",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/educature-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/educature/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  cause: {
    name: "Cause",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/cause-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/cause/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  bodyfit: {
    name: "Bodyfit",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/bodyfit-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/bodyfit/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  astral: {
    name: "Astral",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/astral-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/astral/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  appru: {
    name: "Appru",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/appru-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/appru/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  theplaza: {
    name: "The Plaza",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/theplaza-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/theplaza/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  primelaw: {
    name: "Primelaw",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/primelaw-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/primelaw/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  marco2: {
    name: "Marco2",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/marco2-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/marco2/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  major: {
    name: "Major",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/major-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/major/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  klift: {
    name: "Klift",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/klift-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/klift/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  explore: {
    name: "Explore",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/explore-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/explore/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  bhost: {
    name: "BHost",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/bhost-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/bhost/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  bueno: {
    name: "Bueno",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/bueno-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/bueno/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  adventure2: {
    name: "Adventure2",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/10/adventure2-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/adventure2/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  pizza: {
    name: "Pizza",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/pizza-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/pizza/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  coffeeblend: {
    name: "Coffeeblend",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/coffeeblend-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/coffeeblend/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  webhost: {
    name: "Webhost",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/webhost-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/webhost/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  sportsfit: {
    name: "Sportsfit",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/sportsfit-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sportsfit/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  newsbox: {
    name: "Newsbox",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/newsbox-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/newsbox/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  industrie: {
    name: "Industrie",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/industrie-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/industrie/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  ultim8: {
    name: "Ultim8",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/ultim8-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/ultim8/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  podca: {
    name: "Podca",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/podca-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/podca/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  onemusic: {
    name: "OneMusic",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/onemusic-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/onemusic/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  hairsal: {
    name: "Hairsal",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/hairsal-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/hairsal/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  gamewarrior: {
    name: "Gamewarrior",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/gamewarrior-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/gamewarrior/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  drpro: {
    name: "DrPro",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/drpro-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/drpro/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  dente: {
    name: "Dente",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/dente-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/dente/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  dentacare: {
    name: "Dentacare",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/dentacare-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/dentacare/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  trim: {
    name: "Trim",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/trim-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/trim/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  standout: {
    name: "Standout",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/standout-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/standout/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  sportz: {
    name: "Sportz",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/sportz-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sportz/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  yogaflex: {
    name: "Yogaflex",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/yogaflex-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/yogaflex/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  thepalatin: {
    name: "The Palatin",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/thepalatin-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/thepalatin/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  tangre: {
    name: "Tangre",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/tangre-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/tangre/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  pretty: {
    name: "Pretty",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/pretty-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/pretty/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  hostspace: {
    name: "Hostspace",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/hostspace-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/hostspace/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  holmes: {
    name: "Holmes",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/holmes-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/holmes/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  foodbar: {
    name: "Foodbar",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/foodbar-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/foodbar/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  welfare: {
    name: "Welfare",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/welfare-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/welfare/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  thevenue: {
    name: "TheVenue",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/thevenue-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/thevenue/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  shoppers: {
    name: "Shoppers",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/shoppers-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/shoppers/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  look: {
    name: "Look",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/look-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/look/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  alazea: {
    name: "Alazea",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/alazea-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/alazea/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  woodrox: {
    name: "Woodrox",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/woodrox-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/woodrox/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  webuni: {
    name: "Webuni",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/webuni-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/webuni/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  ronin: {
    name: "Ronin",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/ronin-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/ronin/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  ronald: {
    name: "Ronald",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/ronald-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/ronald/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  opium: {
    name: "Opium",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/opium-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/opium/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  occupy: {
    name: "Occupy",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/occupy-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/occupy/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  nexus: {
    name: "Nexus",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/nexus-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/nexus/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  meetme: {
    name: "Meetme",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/meetme-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/meetme/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  maxitechture: {
    name: "Maxitechture",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/maxitechture-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/maxitechture/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  learnit: {
    name: "Learnit",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/learnit-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/learnit/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  kare: {
    name: "Kare",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/kare-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/kare/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  hospice: {
    name: "Hospice",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/hospice-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/hospice/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  flash: {
    name: "Flash",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/flash-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/flash/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  fashiop: {
    name: "Fashiop",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/fashiop-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/fashiop/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  eventure: {
    name: "Eventure",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/eventure-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/eventure/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  crose: {
    name: "Crose",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/crose-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/crose/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  buildarch: {
    name: "Buildarch",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/buildarch-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/buildarch/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  bakery2: {
    name: "Bakery2",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/bakery2-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/bakery2/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  aerobicFit: {
    name: "AerobicFit",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/09/aerobicFit-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/aerobicFit/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  tough: {
    name: "Tough",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/tough-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/tough/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  genius: {
    name: "Genius",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/genius-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/genius/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  aStar: {
    name: "aStar",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/aStar-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/aStar/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  techmag: {
    name: "Techmag",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/techmag-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/techmag/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  remedic: {
    name: "Remedic",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/remedic-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/remedic/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  nikki: {
    name: "Nikki",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/nikki-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/nikki/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  foode: {
    name: "Foode",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/foode-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/foode/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  direngine: {
    name: "Direngine",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/direngine-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/direngine/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  wisdom: {
    name: "Wisdom",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/wisdom-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/wisdom/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  samira: {
    name: "Samira",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/samira-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/samira/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  raptor: {
    name: "Raptor",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/raptor-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/raptor/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  musica: {
    name: "Musica",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/musica-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/musica/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  giving: {
    name: "Giving",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/giving-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/giving/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  foodblog: {
    name: "Foodblog",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/foodblog-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/foodblog/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  fitnessgym: {
    name: "FitnessGym",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/fitnessgym-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/fitnessgym/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  alias: {
    name: "Alias",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/alias-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/alias/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  snipp: {
    name: "Snipp",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/snipp-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/snipp/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  libro: {
    name: "Libro",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/libro-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/libro/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  beckham: {
    name: "Beckham",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/08/beckham-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/beckham/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  yoga: {
    name: "Yoga",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/yoga-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/yoga/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  vcard2: {
    name: "Vcard2",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/vcard2-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/vcard2/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  quitelight: {
    name: "Quitelight",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/quitelight-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/quitelight/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  viral: {
    name: "Viral",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/viral-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/viral/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  racks: {
    name: "Racks",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/racks-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/racks/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  health: {
    name: "Health",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/health-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/health/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  academica: {
    name: "Academica",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/academica-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/academica/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  wordsmith: {
    name: "Wordsmith",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/wordsmith-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/wordsmith/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  voyage: {
    name: "Voyage",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/voyage-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/voyage/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  tasty: {
    name: "Tasty",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/tasty-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/tasty/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  medart: {
    name: "Medart",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/medart-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/medart/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  cozy: {
    name: "Cozy",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/cozy-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/cozy/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  vertex: {
    name: "Vertex",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/vertex-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/vertex/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  travello: {
    name: "Travello",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/travello-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/travello/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  strategy: {
    name: "Strategy",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/strategy-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/strategy/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  steak: {
    name: "Steak",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/steak-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/steak/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  atomic: {
    name: "Atomic",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/07/atomic-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/atomic/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  vcard: {
    name: "Vcard",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/vcard-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/vcard/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  theorder: {
    name: "Theorder",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/theorder-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/theorder/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  leramiz: {
    name: "Leramiz",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/leramiz-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/leramiz/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  footwear: {
    name: "Footwear",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/footwear-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/footwear/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  brotherlylove: {
    name: "Brotherlylove",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/brotherlylove-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/brotherlylove/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  brighthotel: {
    name: "Brighthotel",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/brighthotel-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/brighthotel/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  bluesky: {
    name: "Bluesky",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/bluesky-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/bluesky/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  newspaper: {
    name: "Newspaper",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/newspaper-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/newspaper/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  martin: {
    name: "Martin",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/martin-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/martin/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  listashop: {
    name: "Listashop",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/listashop-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/listashop/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  force: {
    name: "Force",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/force-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/force/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  fantom: {
    name: "Fantom",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/fantom-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/fantom/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  bulkapp: {
    name: "Bulkapp",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/bulkapp-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/bulkapp/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  biznance: {
    name: "Biznance",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/biznance-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/biznance/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  theconference: {
    name: "Theconference",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/theconference-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/theconference/",
    purchase: "https://colorlib.com/wp/template/theconference/"
  },
  thecharity: {
    name: "Thecharity",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/thecharity-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/thecharity/",
    purchase: "https://colorlib.com/wp/template/thecharity"
  },
  knowledge: {
    name: "Knowledge",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/knowledge-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/knowledge/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  healthcare: {
    name: "Healthcare",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/healthcare-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/healthcare/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  ednews: {
    name: "Ednews",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/ednews-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/ednews/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  delicious: {
    name: "Delicious",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/delicious-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/delicious/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  clever: {
    name: "Clever",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/clever-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/clever/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  zeedapp: {
    name: "Zeedapp",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/zeedapp-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/zeedapp/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  university: {
    name: "University",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/university-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/university/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  tattooz: {
    name: "Tattooz",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/tattooz-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/tattooz/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  sel: {
    name: "Sel",
    tag: "Template",
    img: "https://colorlib.com/wp-content/uploads/2018/06/sel-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sel/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  prantokon: {
    name: "Prantokon",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/prantokon-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/prantokon/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  megazine: {
    name: "Megazine",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/megazine-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/megazine/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  kindity: {
    name: "Kindity",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/kindity-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/kindity/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  hosthub: {
    name: "Hosthub",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/hosthub-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/hosthub/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  honey: {
    name: "Honey",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/honey-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/honey/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  faith2: {
    name: "Faith 2",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/faith2-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/faith2/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  elearn: {
    name: "Elearn",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/elearn-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/elearn/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  cardoor: {
    name: "Cardoor",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/cardoor-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/cardoor/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  builder: {
    name: "Builder",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/builder-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/builder/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  bitmap: {
    name: "Bitmap",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/bitmap-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/bitmap/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  archirio: {
    name: "Archirio",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/archirio-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/archirio/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  appson: {
    name: "Appson",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/06/appson-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/appson/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  webuilder: {
    name: "Webuilder",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/webuilder-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/webuilder/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  sublime: {
    name: "Sublime",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/sublime-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sublime/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  stellar: {
    name: "Stellar",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/stellar-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/stellar/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  papers: {
    name: "Papers",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/papers-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/papers/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  newsbit: {
    name: "Newsbit",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/newsbit-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/newsbit/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  cryptos: {
    name: "Cryptos",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/cryptos-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/cryptos/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  cryptian: {
    name: "Cryptian",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/cryptian-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/cryptian/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  coinbuzz: {
    name: "Coinbuzz",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/coinbuzz-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/coinbuzz/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  royal: {
    name: "Royal",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/royal-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/royal/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  marco: {
    name: "Marco",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/marco-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/marco/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  flawless: {
    name: "Flawless",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/flawless-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/flawless/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  faith: {
    name: "Faith",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/faith-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/faith/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  educrown: {
    name: "Educrown",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/educrown-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/educrown/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  diner: {
    name: "Diner",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/diner-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/diner/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  cryptocurrency: {
    name: "Crypto Currency",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/cryptocurrency-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/cryptocurrency/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  caremed: {
    name: "Caremed",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/caremed-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/caremed/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  academy: {
    name: "Academy",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/academy-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/academy/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  unapp: {
    name: "Unapp",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/unapp-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/unapp/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  martxa: {
    name: "Martxa",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/martxa-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/martxa/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  luto: {
    name: "Luto",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/luto-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/luto/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  lingua: {
    name: "Lingua",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/lingua-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/lingua/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  ezuca: {
    name: "Ezuca",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/ezuca-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/ezuca/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  amado: {
    name: "Amado",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/amado-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/amado/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  unicat: {
    name: "Unicat",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/unicat-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/unicat/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  unica: {
    name: "Unica",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/unica-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/unica/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  jackson: {
    name: "Jackson",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/jackson-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/jackson/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  essence: {
    name: "Essence",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/essence-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/essence/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  callie: {
    name: "Callie",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/05/callie-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/callie/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  travel: {
    name: "Travel",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/travel-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/travel/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  south: {
    name: "South",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/south-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/south/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  personal: {
    name: "Personal",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/personal-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/personal/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  medical: {
    name: "Medical",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/medical-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/medical/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  magazine: {
    name: "Magazine",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/magazine-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/magazine/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  luxuryhotel: {
    name: "Luxuryhotel",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/luxuryhotel-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/luxuryhotel/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  fitnezz: {
    name: "Fitnezz",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/fitnezz-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/fitnezz/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  fitness: {
    name: "Fitness",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/fitness-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/fitness/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  eskwela: {
    name: "Eskwela",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/eskwela-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/eskwela/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  education: {
    name: "Education",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/education-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/education/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  eatwell: {
    name: "Eatwell",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/eatwell-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/eatwell/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  webmag: {
    name: "WebMag",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/webmag-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/webmag/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  taxi: {
    name: "Taxi",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/taxi-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/taxi/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  sunfest: {
    name: "Sunfest",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/sunfest-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sunfest/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  robust: {
    name: "Robust",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/robust-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/robust/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  mimosan: {
    name: "Mimosan",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/mimosan-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/mimosan/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  libchurch: {
    name: "LibChurch",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/libchurch-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/libchurch/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  balita: {
    name: "Balita",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/balita-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/balita/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  balay: {
    name: "Balay",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/balay-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/balay/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  bakery: {
    name: "Bakery",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/bakery-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/bakery/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  avision: {
    name: "Avision",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/avision-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/avision/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  skwela: {
    name: "Skwela",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/skwela-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/skwela/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  personify: {
    name: "Personify",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/personify-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/personify/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  original: {
    name: "Original",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/original-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/original/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  inward: {
    name: "Inward",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/inward-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/inward/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  halo: {
    name: "Halo",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/halo-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/halo/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  bato: {
    name: "Bato",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/bato-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/bato/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  world: {
    name: "World",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/world-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/world/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  transcend: {
    name: "Transcend",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/transcend-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/transcend/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  stuff: {
    name: "Stuff",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/stuff-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/stuff/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  charity2: {
    name: "Charity 2",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/charity2-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/charity2/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  alotan: {
    name: "Alotan",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/alotan-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/alotan/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  agenda: {
    name: "Agenda",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/agenda-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/agenda/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  advent: {
    name: "Advent",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/advent-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/advent/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  wish: {
    name: "Wish",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/wish-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/wish/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  repair: {
    name: "Repair",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/repair-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/repair/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  politics: {
    name: "Politics",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/politics-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/politics/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  listed: {
    name: "Listed",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/listed-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/listed/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  interior: {
    name: "Interior",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/interior-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/interior/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  imahe: {
    name: "Imahe",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/imahe-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/imahe/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  dentist: {
    name: "Dentist",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/dentist-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/dentist/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  civic: {
    name: "Civic",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/civic-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/civic/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  church: {
    name: "Church",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/church-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/church/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  animalshelter: {
    name: "Animal Shelter",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/04/animalshelter-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/animalshelter/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  store: {
    name: "Store",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/store-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/store/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  landing: {
    name: "Landing",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/landing-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/landing/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  zeta: {
    name: "Zeta",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/zeta-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/zeta/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  work: {
    name: "Work",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/work-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/work/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  wedding2: {
    name: "Wedding2",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/wedding2-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/wedding2/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  villa: {
    name: "Villa",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/villa-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/villa/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  tour: {
    name: "Tour",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/tour-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/tour/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  theestate: {
    name: "TheEstate",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/theestate-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/theestate/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  sasha: {
    name: "Sasha",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/sasha-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sasha/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  magnews: {
    name: "Magnews",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/magnews-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/magnews/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  karl: {
    name: "Karl",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/karl-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/karl/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  thegazette: {
    name: "TheGazette",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/thegazette-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/thegazette/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  taxx: {
    name: "Taxx",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/taxx-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/taxx/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  suitcase: {
    name: "Suitcase",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/suitcase-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/suitcase/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  studio: {
    name: "Studio",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/studio-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/studio/",
    purchase: "https://colorlib.com/wp/template/studio/"
  },
  sonar: {
    name: "Sonar",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/sonar-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sonar/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  sierra: {
    name: "Sierra",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/sierra-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sierra/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  shout: {
    name: "Shout",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/shout-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/shout/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  selene: {
    name: "Selene",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/selene-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/selene/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  riddle: {
    name: "Riddle",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/riddle-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/riddle/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  redcayenne: {
    name: "Redcayenne",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/redcayenne-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/redcayenne/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  rango: {
    name: "Rango",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/rango-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/rango/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  ramirez: {
    name: "Ramirez",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/ramirez-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/ramirez/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  poportfolio: {
    name: "Po-Portfolio",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/poportfolio-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/poportfolio/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  photography2: {
    name: "Photography 2",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/photography2-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/photography2/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  persuit: {
    name: "Persuit",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/persuit-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/persuit/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  onetech: {
    name: "Onetech",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/onetech-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/onetech/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  onepro: {
    name: "Onepro",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/onepro-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/onepro/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  mosh: {
    name: "Mosh",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/mosh-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/mosh/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  medilife: {
    name: "Medilife",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/medilife-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/medilife/",
    purchase: "https://colorlib.com/wp/licence/"
  },

  medicare: {
    name: "Medicare",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/medicare-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/medicare/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  medica: {
    name: "Medica",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/medica-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/medica/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  massive: {
    name: "Massive",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/massive-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/massive/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  travelix: {
    name: "Travelix",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/travelix-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/travelix/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  robotics: {
    name: "Robotics",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/robotics-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/robotics/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  noah: {
    name: "Noah",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/noah-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/noah/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  luxehotel: {
    name: "Luxe Hotel",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/luxehotel-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/luxehotel/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  invest: {
    name: "Invest",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/invest-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/invest/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  industry: {
    name: "Industry",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/industry-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/industry/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  immigration: {
    name: "Immigration",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/immigration-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/immigration/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  horseclub: {
    name: "Horse Club",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/horseclub-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/horseclub/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  event: {
    name: "Event",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/event-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/event/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  destino: {
    name: "Destino",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/destino-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/destino/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  cozastore: {
    name: "Coza Store",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/cozastore-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/cozastore/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  course: {
    name: "Course",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/course-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/course/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  watch: {
    name: "Watch",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/watch-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/watch/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  startup: {
    name: "Startup",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/startup-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/startup/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  security: {
    name: "Security",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/security-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/security/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  saas: {
    name: "Saas",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/saas-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/saas/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  portfolio: {
    name: "Portfolio",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/portfolio-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/portfolio/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  plumber: {
    name: "Plumber",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/plumber-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/plumber/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  joblisting: {
    name: "Job Listing",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/joblisting-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/joblisting/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  gym: {
    name: "Gym",
    tag: "Template",
    img: "https://colorlib.com/wp-content/uploads/2018/03/gym-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/gym/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  conference: {
    name: "Conference",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/conference-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/conference/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  complex: {
    name: "Complex",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/complex-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/complex/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  coffee: {
    name: "Coffee",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/coffee-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/coffee/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  carrental: {
    name: "Car Rental",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/carrental-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/carrental/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  book: {
    name: "Book",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/book-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/book/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  bitcoin: {
    name: "Bitcoin",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/bitcoin-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/bitcoin/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  artmuseum: {
    name: "Art Museum",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/artmuseum-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/artmuseum/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  sun: {
    name: "Sun",
    tag: "Template",
    img: "https://colorlib.com/wp-content/uploads/2018/03/sun-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/sun/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  reopen: {
    name: "Reopen",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/reopen-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/reopen/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  rea: {
    name: "Rea",
    tag: "Template",
    img: "https://colorlib.com/wp-content/uploads/2018/03/rea-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/rea/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  fplus: {
    name: "FPlus",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/fplus-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/fplus/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  foto: {
    name: "Foto",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/foto-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/foto/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  evento: {
    name: "Evento",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/evento-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/evento/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  electro: {
    name: "Electro",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/electro-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/electro/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  drimo: {
    name: "Drimo",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/drimo-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/drimo/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  dorne: {
    name: "Dorne",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/dorne-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/dorne/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  cvportfolio: {
    name: "CV Portfolio",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/cvportfolio-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/cvportfolio/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  photography: {
    name: "Photography",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/photography-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/photography/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  realestate: {
    name: "Real Estate",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/realestate-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/realestate/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  shop: {
    name: "Shop",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/shop-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/shop/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  wedding: {
    name: "Wedding",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/wedding-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/wedding/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  blogger: {
    name: "Blogger",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/blogger-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/blogger/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  creativeagency: {
    name: "Creative Agency",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/creativeagency-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/creativeagency/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  barber: {
    name: "Barber",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/barber-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/barber/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  resume: {
    name: "Resume",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/resume-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/resume/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  adventure: {
    name: "Adventure",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/adventure-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/adventure/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  apps: {
    name: "Apps",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/apps-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/apps/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  seo: {
    name: "SEO",
    tag: "Template",
    img: "https://colorlib.com/wp-content/uploads/2018/02/seo-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/seo/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  construction: {
    name: "Construction",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/construction-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/construction/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  restaurant: {
    name: "Restaurant",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/restaurant-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/restaurant/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  hosting: {
    name: "Hosting",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/hosting-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/hosting/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  callcenter: {
    name: "Call Center",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/callcenter-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/callcenter/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  corporate: {
    name: "Corporate",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/02/corporate-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/corporate/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  adopted: {
    name: "Adopted",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/adopted-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/adopted/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  appy: {
    name: "Appy",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/appy-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/appy/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  arcade: {
    name: "Arcade",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/arcade-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/arcade/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  architect: {
    name: "Architect",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/architect-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/architect/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  article: {
    name: "Article",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/article-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/article/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  blanca: {
    name: "Blanca",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/blanca-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/blanca/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  breed: {
    name: "Breed",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/breed-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/breed/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  carries: {
    name: "Carries",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/carries-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/carries/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  caviar: {
    name: "Caviar",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/caviar-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/caviar/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  classic: {
    name: "Classic",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/classic-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/classic/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  cocoon: {
    name: "Cocoon",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/cocoon-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/cocoon/",
    purchase: "https://colorlib.com/wp/licence/"
  },
  construct: {
    name: "Construct",
    tag: "Template",
    img:
      "https://colorlib.com/wp-content/uploads/2018/03/construct-demo-preview.jpg",
    url: "https://colorlib.com/preview/theme/construct/",
    purchase: "https://colorlib.com/wp/licence/"
  }

  // places: {
  // 	name     : 'Places',
  // 	tag      : 'Template',
  // 	img      : 'https://uicookies.com/wp-content/uploads/edd/2018/01/places-demo-preview.jpg',
  // 	url      : 'https://uicookies.com/demo/theme/places/',
  // 	purchase : 'https://uicookies.com/downloads/places-free-bootstrap-4-template-travel-agency/',
  // },
  // frontiers: {
  // 	name     : 'Frontiers',
  // 	tag      : 'Template',
  // 	img      : 'https://uicookies.com/wp-content/uploads/edd/2018/01/frontiers-demo-preview.jpg',
  // 	url      : 'https://uicookies.com/demo/theme/frontiers/',
  // 	purchase : 'https://uicookies.com/downloads/frontiers-free-html5-bootstrap-4-template/',
  // }
};

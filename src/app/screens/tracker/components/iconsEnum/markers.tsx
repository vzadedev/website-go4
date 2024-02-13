import { Icon } from "leaflet"

export const Go4Icon = new Icon ({
  iconUrl : "/static/images/go4-icon-azul.png",
  iconSize : [50, 50], 
  iconAnchor : [22, 94], 
  popupAnchor : [-3, -76] 
})

export const TruckIcon = new Icon ({
  iconUrl : "/static/images/icons/icone-caminhao-comboio.png",
  iconSize : [30, 30], 
  iconAnchor : [22, 94], 
  popupAnchor : [-3, -76]
})

export const RollerIcon = new Icon ({
  iconUrl : "/static/images/icons/icone-rolo.png",
  iconSize : [30, 30], 
  iconAnchor : [22, 94], 
  popupAnchor : [-3, -76] 
})

function getRandomLocation() {
  const lat = Math.random() * 180 - 90;
  const long = Math.random() * 360 - 180;
  return { lat, long };
}

export const Markers = [
  {
    lat:  -20.2091282,
    long: -50.929647,
    icon: Go4Icon,
  },
  {
    lat:  -20.198847464273403,
    long: -50.93932456384531,
    icon: RollerIcon,
  },
  { 
    lat:  -20.20051116954588,
    long: -50.91450736217989,
    icon: RollerIcon,
  },
  { 
    lat:  -20.20051116954588,
    long: -50.91450736217989,
    icon: RollerIcon,
  },
  {  
    lat:  -20.17200471418063,
    long: -51.00418388243247,
    icon: RollerIcon,
  },
  {   
    lat:  -20.171828676694325,
    long: -50.997862935130996,
    icon: RollerIcon,
  },
  {  
    lat:  -20.17389542835349,
    long: -51.000904109971586,
    icon: RollerIcon,
  }, 
  {  
    lat:  -20.14454555432658,
    long: -50.831572106995964,
    icon: RollerIcon,
  },
  {  
    lat:  -20.12123131312658,
    long: -50.831572106995964,
    icon: RollerIcon,
  },
  {  
    lat:  -20.144564332032658,
    long: -50.831572106995964,
    icon: RollerIcon,
  },
  {   
    lat:  -8.174589390036742,
    long: -55.021260774809804,
    icon: RollerIcon,
  },
  {  
    lat:  -8.065055498471347, 
    long: -55.15824749611072,
    icon: RollerIcon,
  },
  {   
    lat:  -6.717052159887182, 
    long: -55.49017685926293,
    icon: RollerIcon,
  },
  {    
    lat:  -11.03648300480853,
    long: -61.95340677812916,
    icon: RollerIcon,
  },
  {   
    lat:  -10.493074330801797, 
    long: -62.44369435144264,
    icon: RollerIcon,
  },
  {    
    lat:  -9.553682887508334, 
    long: -48.62140278465203,
    icon: RollerIcon,
  },
  {    
    lat:  -9.735481623473294,
    long: -48.70043358540256,
    icon: RollerIcon,
  },
  {     
    lat:  -9.002507204410486,
    long: -48.5265658237514,
    icon: RollerIcon,
  },
  {      
    lat:  -10.824134949948261,
    long: -48.916451107453994,
    icon: RollerIcon,
  },
  {       
    lat:  -3.9212552677525268,
    long: -44.47226016145537,
    icon: RollerIcon,
  },
  {       
    lat:  -3.5075351583328813, 
    long: -44.564802999064554,
    icon: RollerIcon,
  },
  {       
    lat:  -3.4151611502705777,
    long:  -44.53889100453398,
    icon: RollerIcon,
  },
]
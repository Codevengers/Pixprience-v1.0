import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    boxSizing: 'border-box'
  },
  '*::before': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    boxSizing: 'border-box'
  },
  '*::after': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    boxSizing: 'border-box'
  },
  '*::-webkit-scrollbar': {
    display: 'none'
  },
  'hoverColor:hover': {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  // Background
  '#bg1': {
    background: 'url("../img/timeline1.jpg") no-repeat 50% 50% fixed',
    backgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    WebkitBackgroundSize: 'cover'
  },
  '#bg2': {
    background: 'url("../img/timeline2.jpg") no-repeat 50% 50% fixed',
    backgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    WebkitBackgroundSize: 'cover'
  },
  '#bg3': {
    background: 'url("../img/timeline3.jpg") no-repeat 50% 50% fixed',
    backgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    WebkitBackgroundSize: 'cover'
  },
  '#bg4': {
    background: 'url("../img/timeline4.jpg") no-repeat 50% 50% fixed',
    backgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    WebkitBackgroundSize: 'cover'
  },
  body: {
    font: [{ unit: 'string', value: 'normal' }, { unit: 'px', value: 16 }, { unit: 'string', value: '"Helvetica' }, { unit: 'string', value: 'Neue",' }, { unit: 'string', value: 'sans-serif' }],
    background: '#456990',
    color: '#fff',
    overflowX: 'hidden',
    minHeight: [{ unit: 'vh', value: 100 }]
  },
  // INTRO SECTION
––––––––––––––––––––––––––––––––––––––––––––––––––
  intro: {
    background: 'rgba(109, 51, 255, 0.3)',
    paddingTop: [{ unit: 'px', value: 100 }],
    height: [{ unit: 'vh', value: 20 }],
    position: 'relative'
  },
  container: {
    width: [{ unit: '%H', value: 1 }],
    maxWidth: [{ unit: 'px', value: 1200 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }],
    textAlign: 'center'
  },
  'br-theme-fontawesome-stars br-widget a': {
    font: [{ unit: 'string', value: 'normal' }, { unit: 'string', value: 'normal' }, { unit: 'string', value: 'normal' }, { unit: 'px', value: 50 }, { unit: 'string', value: 'FontAwesome' }],
    textRendering: 'auto',
    WebkitFontSmoothing: 'antialiased',
    textDecoration: 'none',
    marginRight: [{ unit: 'px', value: 20 }]
  },
  h1: {
    fontSize: [{ unit: 'rem', value: 2.5 }],
    padding: [{ unit: 'px', value: 50 }, { unit: 'px', value: 50 }, { unit: 'px', value: 50 }, { unit: 'px', value: 50 }],
    textAlign: 'center'
  },
  img: {
    cursor: 'pointer'
  },
  'image-upload>input': {
    display: 'none'
  },
  'attach-doc': {
    cursor: 'pointer'
  },
  img: {
    // max-width: 500px;
    max-height: 220px
  },
  uploadedImages: {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }]
  },
  // Upload Wrapper
  'intro uploadWrapper': {
    display: 'inline-block',
    position: 'absolute',
    top: [{ unit: 'px', value: 40 }],
    right: [{ unit: 'px', value: 20 }]
  },
  // Upload Btn
  '#uploadBtn': {
    background: 'rgba(0,0,0,0)',
    border: [{ unit: 'string', value: 'none' }]
  },
  // TIMELINE
––––––––––––––––––––––––––––––––––––––––––––––––––
  timeline: {
    background: 'rgba(0,0,0,0.8)',
    paddingTop: [{ unit: 'px', value: 100 }],
    paddingBottom: [{ unit: 'px', value: 100 }],
    overflowX: 'hidden'
  },
  'timeline ul': {
    padding: [{ unit: 'px', value: 50 }, { unit: 'px', value: 0 }, { unit: 'px', value: 50 }, { unit: 'px', value: 0 }]
  },
  'timeline ul li': {
    listStyleType: 'none',
    position: 'relative',
    width: [{ unit: 'px', value: 6 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }],
    paddingTop: [{ unit: 'px', value: 50 }],
    background: '#fff',
    'screen&&<w600': {
      marginLeft: [{ unit: 'px', value: 20 }]
    }
  },
  'timeline ul li::after': {
    content: '''',
    position: 'absolute',
    left: [{ unit: '%H', value: 0.5 }],
    bottom: [{ unit: 'px', value: 0 }],
    transform: 'translateX(-50%)',
    width: [{ unit: 'px', value: 30 }],
    height: [{ unit: 'px', value: 30 }],
    borderRadius: '50%',
    background: 'inherit'
  },
  'timeline ul li div': {
    position: 'relative',
    bottom: [{ unit: 'px', value: 0 }],
    width: [{ unit: 'px', value: 400 }],
    padding: [{ unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }, { unit: 'px', value: 15 }],
    background: '#6D33FF'
  },
  'timeline ul li div::before': {
    content: '''',
    position: 'absolute',
    bottom: [{ unit: 'px', value: 7 }],
    width: [{ unit: 'px', value: 0 }],
    height: [{ unit: 'px', value: 0 }],
    borderStyle: 'solid'
  },
  'timeline ul li:nth-child(odd) div': {
    left: [{ unit: 'px', value: 45 }]
  },
  'timeline ul li:nth-child(odd) div::before': {
    left: [{ unit: 'px', value: -15 }],
    borderWidth: '8px 16px 8px 0',
    borderColor: 'transparent #6D33FF transparent transparent'
  },
  'timeline ul li:nth-child(even) div': {
    left: [{ unit: 'px', value: -439 }]
  },
  'timeline ul li:nth-child(even) div::before': {
    right: [{ unit: 'px', value: -15 }],
    borderWidth: '8px 0 8px 16px',
    borderColor: 'transparent transparent transparent #6D33FF'
  },
  time: {
    display: 'block',
    fontSize: [{ unit: 'rem', value: 1.2 }],
    fontWeight: 'bold',
    marginBottom: [{ unit: 'px', value: 8 }]
  },
  img: {
    borderRadius: '10px',
    // padding: 0;
  margin: 0;
  },
  div: {
    borderRadius: '10px',
    // padding: 0;
  margin: 0;
  },
  // EFFECTS
––––––––––––––––––––––––––––––––––––––––––––––––––
  'delay-2': {
    animationDelay: '1s',
    animationDuration: '1.6s',
    animationTimingFunction: 'ease-in-out'
  },
  'delay-3': {
    animationDelay: '2s',
    animationDuration: '1.6s',
    animationTimingFunction: 'ease-in-out'
  },
  'timeline img ul li::after': {
    transition: 'background .5s ease-in-out'
  },
  'timeline ul liin-view::after': {
    background: '#6D33FF'
  },
  'timeline ul li div': {
    visibility: 'hidden',
    opacity: '0',
    transition: 'all .5s ease-in-out'
  },
  'timeline ul li:nth-child(odd) div': {
    transform: 'translate3d(200px, 0, 0)'
  },
  'timeline ul li:nth-child(even) div': {
    transform: 'translate3d(-200px, 0, 0)'
  },
  'timeline ul liin-view div': {
    transform: 'none',
    visibility: 'visible',
    opacity: '1'
  },
  user: {
    display: 'inline-block',
    width: [{ unit: 'px', value: 150 }],
    height: [{ unit: 'px', value: 150 }],
    borderRadius: '50%',
    objectFit: 'cover'
  },
  // Upload Image Modal Edits
  'modal-overlay': {
    width: [{ unit: '%H', value: 1 }, { unit: 'string', value: '!important' }],
    background: 'rgba(255,255,255,0.5)',
    display: 'grid'
  },
  modal: {
    height: [{ unit: 'string', value: 'auto' }],
    width: [{ unit: 'string', value: 'auto' }]
  },
  '#rating': {
    margin: [{ unit: 'px', value: 30 }, { unit: 'px', value: 0 }, { unit: 'px', value: 50 }, { unit: 'px', value: 0 }]
  },
  // Map
  '#map': {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 0 }, { unit: 'string', value: '!important' }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 0 }, { unit: 'string', value: '!important' }],
    borderRadius: '0',
    zoom: '0',
    transformStyle: 'preserve-3d',
    transform: 'perspective(auto) translateZ(-30vw) scale(1.4)',
    perspective: '1000',
    backgroundColor: 'blue'
  },
  '#map div': {
    borderRadius: '0'
  },
  // Cloud Icon
  cloudLoad: {
    transition: 'color 0.5s ease',
    color: 'white'
  },
  'cloudLoad:hover': {
    color: 'rgb(174, 249, 252)'
  },
  // GENERAL MEDIA QUERIES
––––––––––––––––––––––––––––––––––––––––––––––––––
});

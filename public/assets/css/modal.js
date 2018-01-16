import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#myImg': {
    borderRadius: '5px',
    cursor: 'pointer',
    transition: '0.3s'
  },
  '#myImg:hover': {
    opacity: '0.7'
  },
  // The Modal (background)
  modal: {
    display: 'none',
    // Hidden by default
    position: 'fixed',
    // Stay in place
    zIndex: '1',
    // Sit on top
    paddingTop: [{ unit: 'px', value: 100 }],
    // Location of the box
    left: [{ unit: 'px', value: 0 }],
    top: [{ unit: '%V', value: 0.02 }],
    width: [{ unit: '%H', value: 0.5 }],
    // Full width
    height: [{ unit: '%V', value: 1 }],
    // Full height
    overflow: 'auto',
    // Enable scroll if needed
    backgroundColor: 'rgb(0,0,0)',
    // Fallback color
    backgroundColor: 'rgba(0,0,0,0.9)',
    // Black w/ opacity
  },
  // Modal Content (image)
  'modal-content': {
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }],
    display: 'block',
    width: [{ unit: '%H', value: 0.8 }],
    maxWidth: [{ unit: 'px', value: 700 }],
    'only screen&&<w700': {
      width: [{ unit: '%H', value: 1 }]
    }
  },
  // Caption of Modal Image
  '#caption': {
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }],
    display: 'block',
    width: [{ unit: '%H', value: 0.8 }],
    maxWidth: [{ unit: 'px', value: 700 }],
    textAlign: 'center',
    color: '#ccc',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }],
    height: [{ unit: 'px', value: 150 }]
  },
  // Add Animation
  'modal-content': {
    WebkitAnimationName: 'zoom',
    WebkitAnimationDuration: '0.6s',
    animationName: 'zoom',
    animationDuration: '0.6s'
  },
  '#caption': {
    WebkitAnimationName: 'zoom',
    WebkitAnimationDuration: '0.6s',
    animationName: 'zoom',
    animationDuration: '0.6s'
  },
  // The Close Button
  close: {
    position: 'absolute',
    top: [{ unit: 'px', value: 15 }],
    right: [{ unit: 'px', value: 35 }],
    color: '#f1f1f1',
    fontSize: [{ unit: 'px', value: 40 }],
    fontWeight: 'bold',
    transition: '0.3s'
  },
  'close:hover': {
    color: '#bbb',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  'close:focus': {
    color: '#bbb',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  // 100% Image Width on Smaller Screens
});

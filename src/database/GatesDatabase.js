import { dbGateImages as images } from './dbImages'; // Import the images object

const GatesDatabase = {
// gdi = Garage Door INDUSTRIAL products
  industrial: [
// gdi-ON PANEL
    {
      id: 'gdi101', name: 'Top seal',
      article: '825101',
      description: 'Material: rubber.',
      price: 4.15, unit: 'mtr',
      features: 'For profile 820100.',
      category: 'On Panel',
      imageA: images.A825101, imageB: images.B825101
    },  
	  {
      id: 'gdi102', name: 'Top roller carrier',
      article: '230104',
      description: 'Usually for an industrial series. 2 pcs are required.',
      price: 1.39, unit: '',
      features: '',
      category: 'On Panel',
      imageA: images.A230104, imageB: images.B230104
    },
    {
      id: 'gdi103', name: 'Roller carrier 11 mm',
      article: '25238.1',
      description: 'Usually for an industrial series. 2 pcs are required.',
      price: 0.55, unit: '',
      features: '',
      category: 'On Panel',
      imageA: images.A25238_1, imageB: images.B25238_1
    },
    {
      id: 'gdi104', name: 'Track bolt M8x10.5',
      article: '14024',
      description: 'Especially features for tracks with reduced side room. ',
      price: 0.09, unit: '',
      features: '',
      category: 'On Panel',
      imageA: images.A14024, imageB: images.B14024
    },
    {
      id: 'gdi105', name: 'Flange nut M8',
      article: '14022',
      description: 'M8 nut with locking serration.',
      price: 0.07, unit: '',
      features: '',
      category: 'On Panel',
      imageA: images.A14022, imageB: images.B14022
    },
    {
      id: 'gdi106', name: 'Universal pvc footstep/handle',
      article: '25130.1',
      description: 'Two-piece. Supplied with 4 screws.',
      price: 4.15, unit: '',
      features: '',
      category: 'On Panel',
      imageA: images.A25130_1, imageB: images.B25130_1
    },
// gdi-ON-SHAFT
    {
      id: 'gdi107', name: 'Galvanised solid shaft 25,4 mm',
      article: '25516',
      description: 'Solid shaft with keyway zinc plated. Additional key: 25062 or25048.',
      price: 13.00, unit: '',
      features: '',
      category: 'On Shaft',
      imageA: images.A25516, imageB: images.B25516
    },
    {
      id: 'gdi108', name: 'Key 6.35x6.35x100 mm',
      article: '25048',
      description: 'Key for solid shaft with keyway.',
      price: 0.60, unit: '',
      features: '',
      category: 'On Shaft',
      imageA: images.A25048,
      imageB: images.B25048
    },
    {
      id: 'gdi109', name: 'Drums M134-5500 SL',
      article: '110020',
      description: 'Application: Industrial garage doors.',
      price: 24.00, unit: '',
      features: '',
      category: 'On Shaft',
      imageA: images.A110020, imageB: images.B110020
    },
    {
      id: 'gdi110', name: 'Bracket with angle',
      article: '235012',
      description: 'For connection from horizontal track with C-profile.',
      price: 1.28, unit: '',
      features: '',
      category: 'On Shaft',
      imageA: images.A235012, imageB: images.B235012
    },
    {
      id: 'gdi111', name: 'End bearing plate offset 111 mm',
      article: '235211',
      description: 'End bearing bracket, Offset 111mm',
      price: 13.00, unit: '',
      features: '',
      category: 'On Shaft',
      imageA: images.A235211, imageB: images.B235211
    },
    {
      id: 'gdi112', name: 'End bearing plate offset 127 mm',
      article: '235212',
      description: 'End bearing bracket, Offset 127mm',
      price: 18.00, unit: '',
      features: '',
      category: 'On Shaft',
      imageA: images.A235212, imageB: images.B235212
    },
    {
      id: 'gdi113', name: 'End bearing plate offset 152 mm',
      article: '235213',
      description: 'End bearing bracket, Offset 152mm',
      price: 22.00, unit: '',
      features: '',
      category: 'On Shaft',
      imageA: images.A235213, imageB: images.B235213
    },
// gdi-RAILSYSTEM
    {
      id: 'gdi114', name: 'Vertical angle', article: '290030',
      price: 101.00, unit: 'piece',	    
      description: 'L=6000 mm. Dimensions: 85x69x17x2,00 mm. With slotted holes in mounting field.',
      features: '',
      category: 'Railsystem',
      imageA: images.A290030, imageB: images.B290030
    },
    {
      id: 'gdi115', name: 'Weatherstrip', article: '225030',
      price: , unit: 'piece',	    
      description: 'L=6060 mm. Double TPE sealing. Follows the panel-line.',
      features: 'For vertical angle 290030',
      category: 'Railsystem',
      imageA: images.A225030, imageB: images.B225030
    },
    // Add more products here...
     /*
     {
      id: 'gdi1', name: '', article: '',
      price: , unit: '',	    
      description: '',
      features: '',
      category: 'Railsystem',
      imageA: images.A, imageB: images.B
    },
    */
  ],

	
// gdr = Garage Door RESIDENTIAL products
  residential: [
// gdr-ON-PANEL
    {
      id: 'gdr101', name: 'Universal top roller', article: '230130',
      price: 9.10, unit: 'pair',     
      description: 'Standard top roller for the HOME system. More lateral adjustability and improved hole pattern.',
      features: 'Self aligning, non adjustable.',
      category: 'On Panel',
      imageA: images.A230130, imageB: images.B230130
    },
    {
      id: 'gdr102', name: 'Handle black', article: '285101',
      price: 2.80, unit: 'set',
      description: 'Interrior & exterrior handle. Modern ergonomical design.',
      features: 'Black ABS. Length 200mm. Suitable for panels 38-40mm. Including 4 cross head screw.',
      category: 'On Panel',
      imageA: images.A285101, imageB: images.B285101
    },   
    {
      id: 'gdr103', name: 'Bottom bracket 12,5', article: '240031',
      description: 'Corner bracket with T-stud for cable fixation.',
      features: 'Offset=12,5. For HOME-F.',
      price: 13.50, unit: 'pair',
      category: 'On Panel',
      imageA: images.A240031, imageB: images.B240031
    },
      id: 'gdr104', name: 'Bottom bracket 18,0', article: '240034',
      description: 'Corner bracket with T-stud for cable fixation.',
      features: 'Offset=18,0. For HOME-F.',
      price: 13.50, unit: 'pair',
      category: 'On Panel',
      imageA: images.A240031, imageB: images.B240031
    },
// gdi-ON-SHAFT
    {
      id: 'gdr104', name: 'Vertical trackset HOME',
      article: '43006-2250',
      description: 'Vertical trackset, bolted.',
      price: 80.00, unit: '',
      features: '',
      category: 'Railsystem',
      imageA: images.A43006, imageB: images.B43006
    },
    {
      id: 'gdr104', name: 'C-Track connection bracket',
      article: '235222',
      description: 'Connects horizontal track to the cross stabilization C-track',
      features: '', 
      price: 1.30, unit: '',
      category: 'On Shaft',
      imageA: images.A235222, imageB: images.B235222
    },
    {
      id: 'gdr105', name: 'Drums M102-2400 mm with 3 screws',
      article: '110013',
      description: 'Is used for a standard lift door. ',
      price: 18.00, unit: '',
      category: 'On Shaft',
      imageA: images.A110013, imageB: images.B110013
    },
    {
      id: 'gdr106', name: 'Bearing 25,4 mm',
      article: '13026.1',
      description: 'features for mounting in bearing bracket or stationary plugs.',
      price: 1.00, unit: '',
      category: 'On Shaft',
      imageA: images.A13026_1, imageB: images.B13026_1
    },
// gdr-RAILSYSTEM
    {
      id: 'gdr108', name: 'Horizontal trackset with short alu. curve HOME',
      article: '43007',
      description: 'Horizontal trackset with short alu. curve, bolted. ',
      price: 99.00, unit: '',
      category: 'Railsystem',
      imageA: images.A43007, imageB: images.B43007
    },
    // Add more products here...
   /*
     {
      id: 'gdri1', name: '', article: '',
      price: , unit: '',	    
      description: '',
      features: '',
      category: 'Railsystem',
      imageA: images.A, imageB: images.B
    },
    */
  ],

	
// gdc = Garage Door COMMON products features for both groups
  common: [
// gdc-ON-PANEL
    {
      id: 'gdc101', name: 'Top u-profile 6090', article: '820100t',
      price: 47.50, unit: 'piece',	    
      description: 'For 40 mm thick panels. H=35 Pan=40 L=6090.',	    
      features: 'For rubber seal 825101.',
      category: 'On Panel',
      imageA: images.A820100, imageB: images.B820100
    },
   {
      id: 'gdc102', name: 'Endcap left 40-500mm', article: '217070',
      price: 6.95, unit: 'piece',	
      description: 'Zinc plated endcap.',     
      features: 'For Tecsedo panel with finger pinch safety.',
      category: 'On Panel',
      imageA: images.A217070, imageB: images.B217070
    },
	{
      id: 'gdc103', name: 'Endcap right 40-500mm', article: '217071',
      price: 6.95, unit: 'piece',		
      description: 'Zinc plated endcap.',
      features: 'For Tecsedo panel with finger pinch safety.',
      category: 'On Panel',
      imageA: images.A217071, imageB: images.B217071
    },
    {
      id: 'gdc104', name: 'Endcap left 40-610mm', article: '217074',
      price: 8.40, unit: 'piece',	    
      description: 'Zinc plated endcap .',
      features: 'For Tecsedo panel with finger pinch safety',
      category: 'On Panel',
      imageA: images.A217074, imageB: images.B217074
    },
    {
      id: 'gdc105', name: 'Endcap right 40-610mm', article: '217075',
      price: 8.40, unit: 'piece',	    
      description: 'Zinc plated endcap .',
      features: 'For Tecsedo panel with finger pinch safety',	    
      category: 'On Panel',
      imageA: images.A217075, imageB: images.B217075
    },
    {
      id: 'gdc106', name: 'Side hinge', article: '25734.1',
      price: 3.70, unit: 'piece',    
      description: 'Material: Galvanized steel z/p.',
      features: 'For 40mm fingerprotection panels.',
      category: 'On Panel',
      imageA: images.A25734_1, imageB: images.B25734_1
    },
    {
      id: 'gdc107', name: 'Roller 120 mm', article: '25010',
      price: 1.45, unit: 'piece',	    
      description: 'PA6 / Galvanized steel.',
      features: 'Standard',
      category: 'On Panel',
      imageA: images.A25010, imageB: images.B25010
    },
    {
      id: 'gdc108', name: 'Roller 190 mm', article: '25011',
      price: 3.00, unit: 'piece',	    
      description: 'PA6 / Galvanized steel.',
      features: 'For doors wider then 5000mm with doubleside hinges',
      category: 'On Panel',
      imageA: images.A25011, imageB: images.B25011
    },
    {
      id: 'gdc109', name: 'Intermediate hinge', article: '25733.1',
      price: 1.32, unit: 'piece',	    
      description: 'Zinc plated steel.',
      features: 'For use with article 25734. For 40mm panels.',
      category: 'On Panel',
      imageA: images.A25733_1, imageB: images.B25733_1
    },
    {
      id: 'gdc110', name: 'Bottom u-profile 6090', article: '820100b',
      description: 'For 40 mm thick panels. H=35 Pan=40 L=6090..',
      price: 47.50, unit: 'piece',
      features: 'For rubber seal 825109',
      category: 'On Panel',
      imageA: images.A820100b, imageB: images.B820100b
    },
   {
      id: 'gdc111', name: 'Bottom seal', article: '825109',
      description: 'Extra high seal to compensate for unevenness / height differences in the floor.',
      price: 8.10, unit: 'mtr',
      features: 'For profile 820100b or VSN01.',
      category: 'On Panel',
      imageA: images.A825109, imageB: images.B825109
    },  
   {
      id: 'gdc112', name: 'C-profile', article: '220015',
      description: 'Connection profile 40x20x1.5 with holes.',
      price: 3.45, unit: 'mtr',
      features: 'For M8 bolts and nuts.',
      category: 'On Panel',
      imageA: images.A220015, imageB: images.B220015
    },    
    {
      id: 'gdc113', name: 'Bottom seal', article: '80042',
      description: 'Material: Rubber. ',
      price: 4.50, unit: 'mtr',
      features: 'For wicket gates.',
      category: 'On Panel',
      imageA: images.A80042, imageB: images.B80042
    },

// gdc-ON-SHAFT
    {
      id: 'gdc114', name: 'Tubular shaft with keyway', article: '25019',
      price: 6.10, unit: 'mtr',	    
      description: 'Thickness 1.8 mm, diameter 1" (25,4mm).',
      features: 'Additional key: 26064 or 25073.',
      category: 'On Shaft',
      imageA: images.A25019, imageB: images.B25019
    },
    {
      id: 'gdc115', name: 'Rectangle key 75', article: '26064',
      price: 0.45, unit: 'piece',	    
      description: '9.53x6.35x75 mm',
      features: 'Suitable for hollow shaft with keyway.',
      category: 'On Shaft',
      imageA: images.A26064, imageB: images.B26064
    },
    {
      id: 'gdc116', name: 'Rectangle key 43', article: '276002',
      price: 0.30, unit: 'piece',	    
      description: '6.35x9.5x43 mm',
      features: 'Can be used in combination with spring break devices.',
      category: 'On Shaft',
      imageA: images.A276002, imageB: images.B276002
    },
    {
      id: 'gdc117', name: 'End bearing plate', article: '235210',
      price: 15.00, unit: 'pair',	    
      description: 'Offset 86mm.',
      features: 'In most cases, industrial.',
      category: 'On Shaft',
      imageA: images.A235210, imageB: images.B235210
    },
    {
      id: 'gdc118', name: 'Drums  SL', article: '110010',
      price: 21.00, unit: 'pair',	    
      description: 'With 2 set screws for fixation on shaft. With 1 cable set screw for cablefixation.',
      features: 'M102-3125 SL.',
      category: 'On Shaft',
      imageA: images.A110010, imageB: images.B110010
    },
    {
      id: 'gdc119', name: 'Drums ', article: '110140',
      price: 24.00, unit: 'pair',	    
      description: 'With 2 set screws for fixation on shaft. With 1 cable set screw for cablefixation.',
      features: 'M102-3760 SL.',
      category: 'On Shaft',
      imageA: images.A110140, imageB: images.B110140
    },
    // Other common products...
    /*
     {
      id: 'gdc1', name: '', article: '',
      price: , unit: '',	    
      description: '',
      features: '',
      category: 'Railsystem',
      imageA: images.A, imageB: images.B
    },
    */
  ],
};

export default GatesDatabase;

import { dbGateImages as images } from './dbImages'; // Import the images object

const GatesDatabase = {
    // INDUSTRIAL-specific products
  industrial: [
    {
      id: 'gdi101',
      name: 'Top seal',
      article: '825101',
      description: 'Material: rubber. Suitable for aluminum profile 820100.',
      price: 2.75,
      category: 'On Panel',
      imageA: images.A825101,
      imageB: images.B825101
    },  
	  {
      id: 'gdi102',
      name: 'Top roller carrier',
      article: '230104',
      description: 'Usually for an industrial series. 2 pcs are required.',
      price: 1.39,
      category: 'On Panel',
      imageA: images.A230104,
      imageB: images.B230104
    },
    {
      id: 'gdi103',
      name: 'Roller carrier 11 mm',
      article: '25238.1',
      description: 'Usually for an industrial series. 2 pcs are required.',
      price: 0.55,
      category: 'On Panel',
      imageA: images.A25238_1,
      imageB: images.B25238_1
    },
    {
      id: 'gdi104',
      name: 'Track bolt M8x10.5',
      article: '14024',
      description: 'Especially suitable for tracks with reduced side room. ',
      price: 0.09,
      category: 'On Panel',
      imageA: images.A14024,
      imageB: images.B14024
    },
    {
      id: 'gdi105',
      name: 'Flange nut M8',
      article: '14022',
      description: 'M8 nut with locking serration.',
      price: 0.07,
      category: 'On Panel',
      imageA: images.A14022,
      imageB: images.B14022
    },
    {
      id: 'gdi106',
      name: 'Universal pvc footstep/handle',
      article: '25130.1',
      description: 'Two-piece. Supplied with 4 screws.',
      price: 4.15,
      category: 'On Panel',
      imageA: images.A25130_1,
      imageB: images.B25130_1
    },
    {
      id: 'gdi107',
      name: 'Galvanised solid shaft 25,4 mm',
      article: '25516',
      description: 'Solid shaft with keyway zinc plated. Additional key: 25062 or25048.',
      price: 13.00,
      category: 'On Shaft',
      imageA: images.A25516,
      imageB: images.B25516
    },
    {
      id: 'gdi108',
      name: 'Key 6.35x6.35x100 mm',
      article: '25048',
      description: 'Key for solid shaft with keyway.',
      price: 0.60,
      category: 'On Shaft',
      imageA: images.A25048,
      imageB: images.B25048
    },
    {
      id: 'gdi109',
      name: 'Drums M134-5500 SL',
      article: '110020',
      description: 'Application: Industrial garage doors.',
      price: 24.00,
      category: 'On Shaft',
      imageA: images.A110020,
      imageB: images.B110020
    },
    {
      id: 'gdi110',
      name: 'Bracket with angle',
      article: '235012',
      description: 'For connection from horizontal track with C-profile.',
      price: 1.28,
      category: 'On Shaft',
      imageA: images.A235012,
      imageB: images.B235012
    },
    {
      id: 'gdi111',
      name: 'End bearing plate offset 111 mm',
      article: '235211',
      description: 'End bearing bracket, Offset 111mm',
      price: 13.00,
      category: 'On Shaft',
      imageA: images.A235211,
      imageB: images.B235211
    },
    {
      id: 'gdi112',
      name: 'End bearing plate offset 127 mm',
      article: '235212',
      description: 'End bearing bracket, Offset 127mm',
      price: 18.00,
      category: 'On Shaft',
      imageA: images.A235212,
      imageB: images.B235212
    },
    {
      id: 'gdi113',
      name: 'End bearing plate offset 152 mm',
      article: '235213',
      description: 'End bearing bracket, Offset 152mm',
      price: 22.00,
      category: 'On Shaft',
      imageA: images.A235213,
      imageB: images.B235213
    },
    // Add more products here...
  ],
    // RESIDENTIAL-specific products
  residential: [
    {
      id: 'gdr101',
      name: 'Universal top roller',
      article: '230130',
      description: 'Standard top roller for the HOME system.',
      suitable: '',
      price: 9.10,
      unit: 'pair',
      category: 'On Panel',
      imageA: images.A230130,
      imageB: images.B230130
    },
    {
      id: 'gdr102',
      name: 'Handle black',
      article: '285101',
      description: 'Interrior & exterrior handle, black plastic.',
      suitable: '',
      price: 1.87,
      unit: 'pair',
      category: 'On Panel',
      imageA: images.A285101,
      imageB: images.B285101
    },   
    {
      id: 'gdr103',
      name: 'Bottom bracket',
      article: '240031',
      description: 'Corner bracket with T-stud for cable fixation.',
      suitable: '',
      price: 9.02,
      category: 'On Panel',
      imageA: images.A240031,
      imageB: images.B240031
    },
    {
      id: 'gdr104',
      name: 'C-Track connection bracket',
      article: '235222',
      description: 'Connects horizontal track to the cross stabilization C-track',
      suitable: '',
      price: 1.30,
      category: 'On Shaft',
      imageA: images.A235222,
      imageB: images.B235222
    },
    {
      id: 'gdr105',
      name: 'Drums M102-2400 mm with 3 screws',
      article: '110013',
      description: 'Is used for a standard lift door. ',
      price: 18.00,
      category: 'On Shaft',
      imageA: images.A110013,
      imageB: images.B110013
    },
    {
      id: 'gdr106',
      name: 'Bearing 25,4 mm',
      article: '13026.1',
      description: 'Suitable for mounting in bearing bracket or stationary plugs.',
      price: 1.00,
      category: 'On Shaft',
      imageA: images.A13026_1,
      imageB: images.B13026_1
    },
    {
      id: 'gdr107',
      name: 'Vertical trackset HOME',
      article: '43006',
      description: 'Vertical trackset, bolted.',
      price: 80.00,
      category: 'Railsystem',
      imageA: images.A43006,
      imageB: images.B43006
    },
    {
      id: 'gdr108',
      name: 'Horizontal trackset with short alu. curve HOME',
      article: '43007',
      description: 'Horizontal trackset with short alu. curve, bolted. ',
      price: 99.00,
      category: 'Railsystem',
      imageA: images.A43007,
      imageB: images.B43007
    },
    // Add more products here...
  ],
  // COMMON products suitable for both groups
  common: [
    {
      id: 'gdc101',
      name: 'Tubular shaft with keyway',
      article: '25019',
      description: 'Hollow shaft with keyway. Additional key: 25064 or 25073.',
      price: 4.05,
      category: 'On Shaft',
      imageA: images.A25019,
      imageB: images.B25019
    },
    {
      id: 'gdc102',
      name: 'Aluminum top profile',
      article: '820100t',
      description: 'For 40 mm thick panels. Suitable for rubber seal 825101.',
      price: 31.69,
      category: 'On Panel',
      imageA: images.A820100,
      imageB: images.B820100
    },
	{
      id: 'gdc103',
      name: 'Endcap left 40-500mm',
      article: '217070',
      description: 'Zinc plated endcap for Tecsedo panel with finger pinch safety.',
      price: 4.62,
      category: 'On Panel',
      imageA: images.A217070,
      imageB: images.B217070
    },
	{
      id: 'gdc104',
      name: 'Endcap right 40-500mm',
      article: '217071',
      description: 'Zinc plated endcap for Tecsedo panel with finger pinch safety.',
      price: 4.62,
      category: 'On Panel',
      imageA: images.A217071,
      imageB: images.B217071
    },
    {
      id: 'gdc105',
      name: 'Endcap left 40-610mm',
      article: '217074',
      description: 'Zinc plated endcap for Tecsedo panel with finger pinch safety.',
      price: 5.59,
      category: 'On Panel',
      imageA: images.A217074,
      imageB: images.B217074
    },
    {
      id: 'gdc106',
      name: 'Endcap right 40-610mm',
      article: '217075',
      description: 'Zinc plated endcap for Tecsedo panel with finger pinch safety.',
      price: 5.59,
      category: 'On Panel',
      imageA: images.A217075,
      imageB: images.B217075
    },
    {
      id: 'gdc107',
      name: 'Side hinge',
      article: '25734.1',
      description: 'Suitable for 40mm panels.',
      price: 2.46,
      category: 'On Panel',
      imageA: images.A25734_1,
      imageB: images.B25734_1
    },
    {
      id: 'gdc108',
      name: 'Roller 120 mm',
      article: '25010',
      description: 'Stainless steel & plastic.',
      price: 0.95,
      category: 'On Panel',
      imageA: images.A25010,
      imageB: images.B25010
    },
    {
      id: 'gdc109',
      name: 'Roller 190 mm',
      article: '25011',
      description: 'Stainless steel & plastic.',
      price: 2.00,
      category: 'On Panel',
      imageA: images.A25011,
      imageB: images.B25011
    },
    {
      id: 'gdc110',
      name: 'Intermediate hinge',
      article: '25733.1',
      description: 'For use with article 25734. Suitable for 40mm panels.',
      price: 0.88,
      category: 'On Panel',
      imageA: images.A25733_1,
      imageB: images.B25733_1
    },
    {
      id: 'gdc111',
      name: 'Aluminum bottom profile',
      article: '820100b',
      description: 'For 40 mm thick panels. Suitable for rubber seal 80042.',
      price: 31.69,
      category: 'On Panel',
      imageA: images.A820100b,
      imageB: images.B820100b
    },
    {
      id: 'gdc112',
      name: 'Bottom seal',
      article: '80042',
      description: 'Suitable for aluminum profile 820100b.',
      price: 3.00,
      category: 'On Panel',
      imageA: images.A80042,
      imageB: images.B80042
    },
    {
      id: 'gdc113',
      name: 'Bottom seal',
      article: '825109',
      description: 'Suitable for aluminum profile VSN01.',
      price: 5.53,
      category: 'On Panel',
      imageA: images.A825109,
      imageB: images.B825109
    },
    {
      id: 'gdc114',
      name: 'Rectangle key 6.35x9.5x43 mm',
      article: '276002',
      description: 'Can be used in combination with spring break devices.',
      price: 0.20,
      category: 'On Shaft',
      imageA: images.A276002,
      imageB: images.B276002
    },
    {
      id: 'gdc115',
      name: 'End bearing plate offset 86 mm',
      article: '235210',
      description: 'End bearing bracket, Offset 86mm',
      price: 10.00,
      category: 'On Shaft',
      imageA: images.A235210,
      imageB: images.B235210
    },
    {
      id: 'gdc116',
      name: 'Drums M102-3125 SL',
      article: '110010',
      description: 'Is used for a standard lift door. ',
      price: 20.00,
      category: 'On Shaft',
      imageA: images.A110010,
      imageB: images.B110010
    },
    {
      id: 'gdc117',
      name: 'Drums M102-3760 SL',
      article: '110140',
      description: 'Is used for a standard lift.',
      price: 18.00,
      category: 'On Shaft',
      imageA: images.A110140,
      imageB: images.B110140
    },
    {
      id: 'gdc118',
      name: 'Vertical angle 85x69x17x2.00 mm',
      article: '290030',
      description: 'Hole-pattern for various. Applications.',
      price: 50.00,
      category: 'Railsystem',
      imageA: images.A290030,
      imageB: images.B290030
    },
    // Other common products...
  ],
};

export default GatesDatabase;

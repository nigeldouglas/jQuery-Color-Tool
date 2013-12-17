/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'outersafe',
            type:'image',
            rect:['-165px','-401px','1678px','1446px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Untitled-1.png",'0px','0px'],
            transform:[[],[],[],['0.967','0.967']]
         },
         {
            id:'innerVault',
            type:'rect',
            rect:['1163','215','auto','auto','auto','auto']
         },
         {
            id:'safecolors',
            type:'image',
            rect:['1309px','44px','2000px','530px','auto','auto'],
            fill:["rgba(0,0,0,0)",'safecolors.png','0px','0px'],
            transform:[[],[],[],['2.715','3.113']]
         }],
         symbolInstances: [
         {
            id:'innerVault',
            symbolName:'innerVault'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '1366px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_safecolors}": [
            ["style", "top", '40px'],
            ["transform", "scaleY", '3.13547'],
            ["style", "left", '1308px'],
            ["transform", "scaleX", '2.71713']
         ],
         "${_outersafe}": [
            ["style", "top", '-399px'],
            ["transform", "scaleY", '0.97401'],
            ["style", "height", '1446px'],
            ["transform", "scaleX", '0.9678'],
            ["style", "left", '-166px'],
            ["style", "width", '1678px']
         ],
         "${_innerVault}": [
            ["style", "top", '172px'],
            ["transform", "scaleX", '2.34866'],
            ["transform", "scaleY", '2.11705'],
            ["style", "left", '1946px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid417", tween: [ "transform", "${_innerVault}", "scaleX", '0.41425', { fromValue: '2.34866'}], position: 0, duration: 2000 },
            { id: "eid486", tween: [ "transform", "${_innerVault}", "scaleX", '0.41', { fromValue: '0.41425'}], position: 2000, duration: 1000 },
            { id: "eid418", tween: [ "transform", "${_innerVault}", "scaleY", '0.37339', { fromValue: '2.11705'}], position: 0, duration: 2000 },
            { id: "eid487", tween: [ "transform", "${_innerVault}", "scaleY", '0.37', { fromValue: '0.37339'}], position: 2000, duration: 1000 },
            { id: "eid428", tween: [ "style", "${_outersafe}", "top", '-385px', { fromValue: '-399px'}], position: 0, duration: 2000 },
            { id: "eid494", tween: [ "style", "${_outersafe}", "top", '-385px', { fromValue: '-385px'}], position: 3000, duration: 0 },
            { id: "eid425", tween: [ "style", "${_innerVault}", "left", '608px', { fromValue: '1946px'}], position: 0, duration: 2000 },
            { id: "eid527", tween: [ "style", "${_innerVault}", "left", '607px', { fromValue: '608px'}], position: 2000, duration: 1000 },
            { id: "eid426", tween: [ "style", "${_innerVault}", "top", '217px', { fromValue: '172px'}], position: 0, duration: 2000 },
            { id: "eid528", tween: [ "style", "${_innerVault}", "top", '216px', { fromValue: '217px'}], position: 2000, duration: 1000 },
            { id: "eid419", tween: [ "transform", "${_safecolors}", "scaleX", '0.47922', { fromValue: '2.71713'}], position: 0, duration: 2000 },
            { id: "eid474", tween: [ "transform", "${_safecolors}", "scaleX", '0.48', { fromValue: '0.47922'}], position: 2000, duration: 1000 },
            { id: "eid420", tween: [ "transform", "${_safecolors}", "scaleY", '0.55302', { fromValue: '3.13547'}], position: 0, duration: 2000 },
            { id: "eid475", tween: [ "transform", "${_safecolors}", "scaleY", '0.55', { fromValue: '0.55302'}], position: 2000, duration: 1000 },
            { id: "eid427", tween: [ "style", "${_outersafe}", "left", '-347px', { fromValue: '-166px'}], position: 0, duration: 2000 },
            { id: "eid495", tween: [ "style", "${_outersafe}", "left", '-347px', { fromValue: '-347px'}], position: 3000, duration: 0 },
            { id: "eid421", tween: [ "transform", "${_outersafe}", "scaleX", '0.1707', { fromValue: '0.9678'}], position: 0, duration: 2000 },
            { id: "eid496", tween: [ "transform", "${_outersafe}", "scaleX", '0.17', { fromValue: '0.1707'}], position: 2000, duration: 1000 },
            { id: "eid423", tween: [ "style", "${_safecolors}", "left", '-224px', { fromValue: '1308px'}], position: 0, duration: 2000 },
            { id: "eid424", tween: [ "style", "${_safecolors}", "top", '67px', { fromValue: '40px'}], position: 0, duration: 2000 },
            { id: "eid422", tween: [ "transform", "${_outersafe}", "scaleY", '0.17178', { fromValue: '0.97401'}], position: 0, duration: 2000 },
            { id: "eid497", tween: [ "transform", "${_outersafe}", "scaleY", '0.17', { fromValue: '0.17178'}], position: 2000, duration: 1000 }         ]
      }
   }
},
"innerVault": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],[],[],['0.412','0.412']],
      id: 'innersafe2',
      type: 'image',
      rect: ['-788px','-118px','645px','558px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/innersafe2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_innersafe2}": [
            ["style", "top", '-117px'],
            ["transform", "scaleY", '0.41207'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '558px'],
            ["transform", "scaleX", '0.41207'],
            ["style", "left", '-799px'],
            ["style", "width", '645px']
         ],
         "${symbolSelector}": [
            ["style", "height", '230px'],
            ["style", "width", '266px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid33", tween: [ "transform", "${_innersafe2}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid44", tween: [ "transform", "${_innersafe2}", "rotateZ", '-90deg', { fromValue: '-45deg'}], position: 250, duration: 250 },
            { id: "eid57", tween: [ "transform", "${_innersafe2}", "rotateZ", '-135deg', { fromValue: '-90deg'}], position: 500, duration: 250 },
            { id: "eid63", tween: [ "transform", "${_innersafe2}", "rotateZ", '-180deg', { fromValue: '-135deg'}], position: 750, duration: 250 },
            { id: "eid71", tween: [ "transform", "${_innersafe2}", "rotateZ", '-225deg', { fromValue: '-180deg'}], position: 1000, duration: 250 },
            { id: "eid79", tween: [ "transform", "${_innersafe2}", "rotateZ", '-270deg', { fromValue: '-225deg'}], position: 1250, duration: 250 },
            { id: "eid87", tween: [ "transform", "${_innersafe2}", "rotateZ", '-315deg', { fromValue: '-270deg'}], position: 1500, duration: 250 },
            { id: "eid88", tween: [ "transform", "${_innersafe2}", "rotateZ", '-360deg', { fromValue: '-315deg'}], position: 1750, duration: 250 },
            { id: "eid498", tween: [ "transform", "${_innersafe2}", "rotateZ", '-405deg', { fromValue: '-360deg'}], position: 2000, duration: 250 },
            { id: "eid504", tween: [ "transform", "${_innersafe2}", "rotateZ", '-450deg', { fromValue: '-405deg'}], position: 2250, duration: 250 },
            { id: "eid510", tween: [ "transform", "${_innersafe2}", "rotateZ", '-495deg', { fromValue: '-450deg'}], position: 2500, duration: 250 },
            { id: "eid514", tween: [ "transform", "${_innersafe2}", "rotateZ", '-540deg', { fromValue: '-495deg'}], position: 2750, duration: 250 },
            { id: "eid40", tween: [ "style", "${_innersafe2}", "left", '-776px', { fromValue: '-799px'}], position: 0, duration: 250 },
            { id: "eid45", tween: [ "style", "${_innersafe2}", "left", '-770px', { fromValue: '-776px'}], position: 250, duration: 75 },
            { id: "eid104", tween: [ "style", "${_innersafe2}", "left", '-767px', { fromValue: '-770px'}], position: 325, duration: 45 },
            { id: "eid106", tween: [ "style", "${_innersafe2}", "left", '-762px', { fromValue: '-767px'}], position: 370, duration: 90 },
            { id: "eid109", tween: [ "style", "${_innersafe2}", "left", '-761px', { fromValue: '-762px'}], position: 460, duration: 40 },
            { id: "eid59", tween: [ "style", "${_innersafe2}", "left", '-760px', { fromValue: '-761px'}], position: 500, duration: 55 },
            { id: "eid110", tween: [ "style", "${_innersafe2}", "left", '-762px', { fromValue: '-760px'}], position: 635, duration: 75 },
            { id: "eid112", tween: [ "style", "${_innersafe2}", "left", '-764px', { fromValue: '-762px'}], position: 710, duration: 40 },
            { id: "eid64", tween: [ "style", "${_innersafe2}", "left", '-767px', { fromValue: '-764px'}], position: 750, duration: 65 },
            { id: "eid113", tween: [ "style", "${_innersafe2}", "left", '-772px', { fromValue: '-767px'}], position: 815, duration: 70 },
            { id: "eid116", tween: [ "style", "${_innersafe2}", "left", '-783px', { fromValue: '-772px'}], position: 885, duration: 115 },
            { id: "eid72", tween: [ "style", "${_innersafe2}", "left", '-792px', { fromValue: '-783px'}], position: 1000, duration: 90 },
            { id: "eid119", tween: [ "style", "${_innersafe2}", "left", '-799px', { fromValue: '-792px'}], position: 1090, duration: 65 },
            { id: "eid122", tween: [ "style", "${_innersafe2}", "left", '-808px', { fromValue: '-799px'}], position: 1155, duration: 95 },
            { id: "eid80", tween: [ "style", "${_innersafe2}", "left", '-815px', { fromValue: '-808px'}], position: 1250, duration: 100 },
            { id: "eid125", tween: [ "style", "${_innersafe2}", "left", '-819px', { fromValue: '-815px'}], position: 1350, duration: 55 },
            { id: "eid127", tween: [ "style", "${_innersafe2}", "left", '-822px', { fromValue: '-819px'}], position: 1405, duration: 95 },
            { id: "eid90", tween: [ "style", "${_innersafe2}", "left", '-824px', { fromValue: '-822px'}], position: 1500, duration: 100 },
            { id: "eid128", tween: [ "style", "${_innersafe2}", "left", '-822px', { fromValue: '-824px'}], position: 1600, duration: 80 },
            { id: "eid130", tween: [ "style", "${_innersafe2}", "left", '-819px', { fromValue: '-822px'}], position: 1680, duration: 70 },
            { id: "eid92", tween: [ "style", "${_innersafe2}", "left", '-818px', { fromValue: '-819px'}], position: 1750, duration: 40 },
            { id: "eid131", tween: [ "style", "${_innersafe2}", "left", '-801px', { fromValue: '-818px'}], position: 1790, duration: 210 },
            { id: "eid499", tween: [ "style", "${_innersafe2}", "left", '-776px', { fromValue: '-801px'}], position: 2000, duration: 250 },
            { id: "eid505", tween: [ "style", "${_innersafe2}", "left", '-768px', { fromValue: '-776px'}], position: 2250, duration: 105 },
            { id: "eid509", tween: [ "style", "${_innersafe2}", "left", '-764px', { fromValue: '-768px'}], position: 2355, duration: 65 },
            { id: "eid508", tween: [ "style", "${_innersafe2}", "left", '-761px', { fromValue: '-764px'}], position: 2420, duration: 80 },
            { id: "eid513", tween: [ "style", "${_innersafe2}", "left", '-764px', { fromValue: '-761px'}], position: 2675, duration: 75 },
            { id: "eid516", tween: [ "style", "${_innersafe2}", "left", '-771px', { fromValue: '-764px'}], position: 2750, duration: 100 },
            { id: "eid518", tween: [ "style", "${_innersafe2}", "left", '-783px', { fromValue: '-771px'}], position: 2850, duration: 150 },
            { id: "eid102", tween: [ "style", "${_innersafe2}", "top", '-116px', { fromValue: '-117px'}], position: 0, duration: 85 },
            { id: "eid100", tween: [ "style", "${_innersafe2}", "top", '-117px', { fromValue: '-116px'}], position: 85, duration: 65 },
            { id: "eid103", tween: [ "style", "${_innersafe2}", "top", '-120px', { fromValue: '-117px'}], position: 150, duration: 100 },
            { id: "eid46", tween: [ "style", "${_innersafe2}", "top", '-124px', { fromValue: '-120px'}], position: 250, duration: 75 },
            { id: "eid105", tween: [ "style", "${_innersafe2}", "top", '-128px', { fromValue: '-124px'}], position: 325, duration: 45 },
            { id: "eid107", tween: [ "style", "${_innersafe2}", "top", '-135px', { fromValue: '-128px'}], position: 370, duration: 90 },
            { id: "eid108", tween: [ "style", "${_innersafe2}", "top", '-140px', { fromValue: '-135px'}], position: 460, duration: 40 },
            { id: "eid58", tween: [ "style", "${_innersafe2}", "top", '-164px', { fromValue: '-140px'}], position: 500, duration: 250 },
            { id: "eid65", tween: [ "style", "${_innersafe2}", "top", '-169px', { fromValue: '-164px'}], position: 750, duration: 65 },
            { id: "eid114", tween: [ "style", "${_innersafe2}", "top", '-174px', { fromValue: '-169px'}], position: 815, duration: 70 },
            { id: "eid115", tween: [ "style", "${_innersafe2}", "top", '-177px', { fromValue: '-174px'}], position: 885, duration: 70 },
            { id: "eid117", tween: [ "style", "${_innersafe2}", "top", '-178px', { fromValue: '-177px'}], position: 955, duration: 45 },
            { id: "eid75", tween: [ "style", "${_innersafe2}", "top", '-180px', { fromValue: '-178px'}], position: 1000, duration: 50 },
            { id: "eid501", tween: [ "style", "${_innersafe2}", "top", '-180px', { fromValue: '-180px'}], position: 1090, duration: 0 },
            { id: "eid121", tween: [ "style", "${_innersafe2}", "top", '-176px', { fromValue: '-180px'}], position: 1155, duration: 95 },
            { id: "eid81", tween: [ "style", "${_innersafe2}", "top", '-174px', { fromValue: '-176px'}], position: 1250, duration: 40 },
            { id: "eid123", tween: [ "style", "${_innersafe2}", "top", '-170px', { fromValue: '-174px'}], position: 1290, duration: 60 },
            { id: "eid124", tween: [ "style", "${_innersafe2}", "top", '-166px', { fromValue: '-170px'}], position: 1350, duration: 55 },
            { id: "eid126", tween: [ "style", "${_innersafe2}", "top", '-157px', { fromValue: '-166px'}], position: 1405, duration: 95 },
            { id: "eid89", tween: [ "style", "${_innersafe2}", "top", '-147px', { fromValue: '-157px'}], position: 1500, duration: 100 },
            { id: "eid129", tween: [ "style", "${_innersafe2}", "top", '-132px', { fromValue: '-147px'}], position: 1600, duration: 150 },
            { id: "eid91", tween: [ "style", "${_innersafe2}", "top", '-129px', { fromValue: '-132px'}], position: 1750, duration: 40 },
            { id: "eid132", tween: [ "style", "${_innersafe2}", "top", '-117px', { fromValue: '-129px'}], position: 1790, duration: 210 },
            { id: "eid500", tween: [ "style", "${_innersafe2}", "top", '-117px', { fromValue: '-117px'}], position: 2000, duration: 65 },
            { id: "eid502", tween: [ "style", "${_innersafe2}", "top", '-118px', { fromValue: '-117px'}], position: 2065, duration: 105 },
            { id: "eid503", tween: [ "style", "${_innersafe2}", "top", '-120px', { fromValue: '-118px'}], position: 2170, duration: 80 },
            { id: "eid506", tween: [ "style", "${_innersafe2}", "top", '-132px', { fromValue: '-120px'}], position: 2250, duration: 170 },
            { id: "eid507", tween: [ "style", "${_innersafe2}", "top", '-140px', { fromValue: '-132px'}], position: 2420, duration: 80 },
            { id: "eid511", tween: [ "style", "${_innersafe2}", "top", '-164px', { fromValue: '-140px'}], position: 2500, duration: 250 },
            { id: "eid515", tween: [ "style", "${_innersafe2}", "top", '-177px', { fromValue: '-164px'}], position: 2750, duration: 185 },
            { id: "eid517", tween: [ "style", "${_innersafe2}", "top", '-178px', { fromValue: '-177px'}], position: 2935, duration: 65 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-54450414");

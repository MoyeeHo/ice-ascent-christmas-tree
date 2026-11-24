// Authored animation routes. Grades are design targets, not real-world grading.
// 16 local videos in filename order; routes 17–24 reuse videos 1–8.
window.BOULDER_ROUTES = [
  {
    id: 'snowsteps-v3', name: '雪阶', grade: 'V3', color: '#a9e9ed',
    style: '技术线 · 大抓点 / 连续换脚', videoSrc: "./videos/00574e3b54c96f415a8638303a3b4531_raw.mp4",
    heights: [-30,-30,-25,-20,-15,-10,-5,0,5,10,15,20,25,29,33],
    offsets: [-.08,.08,-.07,.06,-.06,.07,-.05,.06,-.05,.05,-.04,.04,-.03,.02,0],
    types: ['jug','jug','jug','jug','pinch','jug','jug','jug','pinch','jug','jug','jug','jug','jug','jug'],
    dynamicMoves: []
  },
  {
    id: 'glacier-v3', name: '冰川', grade: 'V3', color: '#bce5ff',
    style: '技术线 · 侧移 / 重心转移', videoSrc: "./videos/02c5f430ef2d50624df0d052280a5369.mp4",
    heights: [-30,-30,-26,-21,-16,-11,-6,-1,4,9,14,19,24,29,33],
    offsets: [-.08,.08,.1,.09,-.08,-.1,.08,.1,-.08,-.06,.09,.06,-.05,.03,0],
    types: ['jug','jug','jug','pinch','jug','jug','sloper','jug','jug','pinch','jug','jug','jug','jug','jug'],
    dynamicMoves: []
  },
  {
    id: 'snowbank-v3', name: '雪岸', grade: 'V3', color: '#a3e2f2',
    style: '技术线 · 大点侧移 / 稳定换脚', videoSrc: "./videos/0843958490a697e568ecbd17e4243386.mp4",
    heights: [-30,-30,-26,-22,-17,-12,-7,-2,3,8,13,18,23,28,33],
    offsets: [-.08,.08,.1,.11,.05,-.06,-.11,-.1,-.03,.06,.1,.08,.03,-.03,0],
    types: ['jug','jug','jug','pinch','jug','jug','jug','sloper','jug','jug','pinch','jug','jug','jug','jug'],
    dynamicMoves: []
  },
  {
    id: 'misttrail-v3', name: '雾径', grade: 'V3', color: '#b4daf7',
    style: '技术线 · 斜向上步 / 换手平衡', videoSrc: "./videos/0f1f104d517d70a322e48f94a4acc6e3.mp4",
    heights: [-30,-30,-25,-21,-16,-11,-6,-1,4,9,14,19,24,29,33],
    offsets: [-.08,.08,-.06,-.1,-.08,-.02,.06,.11,.09,.02,-.07,-.1,-.05,.02,0],
    types: ['jug','jug','jug','sloper','jug','jug','pinch','jug','jug','jug','sloper','jug','pinch','jug','jug'],
    dynamicMoves: []
  },
  {
    id: 'ice-v4', name: '冰脊', grade: 'V4', color: '#82e4f4',
    style: '技术线 · 侧拉 / 换脚 / 平衡', videoSrc: "./videos/2aedde3486e7d472aa1bf4b8954b44d6_raw.mp4",
    heights: [-30, -30, -24, -19, -13, -8, -2, 4, 10, 16, 22, 28, 33],
    offsets: [-.09, .09, -.1, .08, -.12, .08, -.06, .1, -.09, .12, -.08, .04, 0],
    types: ['jug','jug','crimp','pinch','jug','sloper','crimp','pinch','sloper','jug','crimp','jug','jug'],
    dynamicMoves: []
  },
  {
    id: 'moonridge-v4', name: '月棱', grade: 'V4', color: '#91d7f8',
    style: '技术线 · 侧拉 / 交叉手', videoSrc: "./videos/6aff9c7477bac5c84d623cf4e6e51b93.mp4",
    heights: [-30,-30,-25,-19,-14,-8,-3,3,8,14,20,26,33],
    offsets: [-.08,.08,.14,-.12,.12,-.1,.09,-.12,.1,-.08,.07,-.05,0],
    types: ['jug','jug','pinch','jug','crimp','pinch','jug','crimp','pinch','jug','sloper','jug','jug'],
    dynamicMoves: []
  },
  {
    id: 'frostbalance-v4', name: '霜衡', grade: 'V4', color: '#9ce5da',
    style: '技术线 · 斜面抓点 / 平衡换脚', videoSrc: "./videos/6e8c9485f3d80df516284a7705ce2cbf.mp4",
    heights: [-30,-30,-24,-18,-12,-6,0,5,11,16,22,28,33],
    offsets: [-.08,.08,-.12,-.1,.12,.1,-.11,-.08,.11,.08,-.07,.04,0],
    types: ['jug','jug','sloper','jug','pinch','sloper','jug','crimp','sloper','jug','pinch','sloper','jug'],
    dynamicMoves: []
  },
  {
    id: 'snowreach-v4', name: '雪探', grade: 'V4', color: '#8bd9ff',
    style: '动态线 · 大点蹬伸 / 控制摆动', videoSrc: "./videos/78a5afa6506ada16ceca63eb5b03e508.mp4",
    heights: [-30,-30,-24,-18,-12,-5,3,9,15,21,27,33],
    offsets: [-.08,.08,-.08,.09,-.1,-.08,.12,-.08,.07,-.06,.04,0],
    types: ['jug','jug','jug','pinch','jug','jug','jug','sloper','jug','pinch','jug','jug'],
    dynamicMoves: [{to:6,type:'deadpoint',label:'蹬伸 · 动态抓点',duration:.85}]
  },
  {
    id: 'blueedge-v4', name: '蓝刃', grade: 'V4', color: '#a4ccff',
    style: '技术线 · 抠点 / 侧身上步', videoSrc: "./videos/8a5e292956fb32b99ee96e68adbaac75.mp4",
    heights: [-30,-30,-25,-20,-14,-9,-3,2,8,14,20,27,33],
    offsets: [-.08,.08,.11,.05,-.11,-.04,.1,.03,-.09,-.03,.08,.03,0],
    types: ['jug','jug','crimp','pinch','crimp','jug','crimp','pinch','crimp','jug','sloper','jug','jug'],
    dynamicMoves: []
  },
  {
    id: 'frost-v5', name: '霜跃', grade: 'V5', color: '#75adff',
    style: '动态线 · 蹬脚 / 动态伸抓', videoSrc: "./videos/92e76a4c990052c367578c8649322126_raw.mp4",
    heights: [-30, -30, -24, -18, -12, -7, 3, 8, 14, 20, 26, 33],
    offsets: [-.09, .09, -.09, .11, -.13, -.11, .15, -.1, .12, -.07, .08, 0],
    types: ['jug','jug','pinch','crimp','sloper','jug','jug','pinch','crimp','sloper','jug','jug'],
    dynamicMoves: [{ to: 6, type: 'deadpoint', label: '蹬脚 · 动态伸抓', duration: .8 }]
  },
  {
    id: 'glint-v5', name: '寒闪', grade: 'V5', color: '#7bc8f5',
    style: '动态线 · 横移蹬跳 / 抓点回收', videoSrc: "./videos/a56c2318ba50dbb34cd955a02ac4d273_raw.mp4",
    heights: [-30,-30,-24,-18,-12,-6,0,11,16,22,27,33],
    offsets: [-.08,.08,-.1,.1,-.11,.1,-.15,.16,-.1,.08,-.05,0],
    types: ['jug','jug','pinch','crimp','jug','sloper','jug','jug','pinch','crimp','jug','jug'],
    dynamicMoves: [{to:7,type:'dyno',label:'横移 · 蹬跳抓点',duration:1}]
  },
  {
    id: 'silverseam-v5', name: '银缝', grade: 'V5', color: '#aecbff',
    style: '技术线 · 连续抠点 / 精准踩点', videoSrc: "./videos/b153ee0f5f7167cf11528a5080514905.mp4",
    heights: [-30,-30,-24,-18,-12,-6,0,6,12,18,24,29,33],
    offsets: [-.08,.08,-.08,.06,-.07,.08,-.06,.07,-.06,.05,-.05,.03,0],
    types: ['jug','jug','crimp','crimp','pinch','crimp','sloper','crimp','pinch','crimp','crimp','jug','jug'],
    dynamicMoves: []
  },
  {
    id: 'icewave-v5', name: '冰浪', grade: 'V5', color: '#79dedf',
    style: '动态线 · 连续动态伸抓 / 收脚', videoSrc: "./videos/ba23e187092ca6519e7a79600ad16e1e.mp4",
    heights: [-30,-30,-24,-18,-9,-4,2,11,16,22,28,33],
    offsets: [-.08,.08,-.1,-.12,.13,.08,-.13,.14,-.1,.08,-.05,0],
    types: ['jug','jug','pinch','jug','jug','crimp','jug','jug','sloper','pinch','jug','jug'],
    dynamicMoves: [{to:4,type:'deadpoint',label:'第一次动态伸抓',duration:.8},{to:7,type:'deadpoint',label:'第二次动态伸抓',duration:.8}]
  },
  {
    id: 'bluecompression-v5', name: '蓝锁', grade: 'V5', color: '#91b8f7',
    style: '技术线 · 捏点压缩 / 交叉换手', videoSrc: "./videos/ed603d45211cb12a6df4f40d9e08ee2e_raw.mp4",
    heights: [-30,-30,-25,-19,-13,-7,-1,5,11,17,23,28,33],
    offsets: [-.09,.09,.15,-.14,.13,-.12,.12,-.11,.1,-.09,.07,-.04,0],
    types: ['jug','jug','pinch','sloper','pinch','pinch','crimp','sloper','pinch','crimp','pinch','jug','jug'],
    dynamicMoves: []
  },
  {
    id: 'icecross-v5', name: '冰渡', grade: 'V5', color: '#86c5ff',
    style: '动态线 · 斜向蹬伸 / 落点换手', videoSrc: "./videos/fcedd55191543305e0b25b956c899534.mp4",
    heights: [-30,-30,-24,-19,-13,-7,3,8,14,20,26,33],
    offsets: [-.08,.08,-.1,-.13,-.11,-.07,.14,.12,.04,-.1,-.05,0],
    types: ['jug','jug','pinch','crimp','sloper','jug','jug','pinch','crimp','sloper','jug','jug'],
    dynamicMoves: [{to:6,type:'deadpoint',label:'斜向蹬伸 · 接点',duration:.9}]
  },
  {
    id: 'moonarc-v5', name: '月弧', grade: 'V5', color: '#9ab8f5',
    style: '技术线 · 弧形横移 / 斜面换手', videoSrc: "./videos/fd99d0b2e787e84bfe4a52b34f374df4.mp4",
    heights: [-30,-30,-25,-20,-14,-9,-3,3,9,15,21,27,33],
    offsets: [-.08,.08,.11,.14,.11,.04,-.04,-.11,-.14,-.1,-.03,.05,0],
    types: ['jug','jug','pinch','sloper','crimp','pinch','sloper','crimp','pinch','sloper','crimp','jug','jug'],
    dynamicMoves: []
  },
  {
    id: 'coldcomet-v5', name: '寒彗', grade: 'V5', color: '#7ed9e9',
    style: '动态线 · 侧向蹬跳 / 收脚稳定', videoSrc: "./videos/00574e3b54c96f415a8638303a3b4531_raw.mp4",
    heights: [-30,-30,-24,-18,-12,-6,0,11,17,23,28,33],
    offsets: [-.08,.08,.08,.12,.08,-.05,-.14,.15,.1,.03,-.05,0],
    types: ['jug','jug','pinch','sloper','crimp','pinch','jug','jug','sloper','crimp','jug','jug'],
    dynamicMoves: [{to:7,type:'dyno',label:'侧向蹬跳 · 双手接点',duration:1.05}]
  },
  {
    id: 'aurora-v6', name: '极光', grade: 'V6', color: '#b7a3ff',
    style: '动态线 · 压缩 / 飞抓 / 收脚', videoSrc: "./videos/02c5f430ef2d50624df0d052280a5369.mp4",
    heights: [-30, -30, -24, -18, -12, -6, 7, 12, 17, 22, 27, 33],
    offsets: [-.09, .09, .13, -.12, .14, -.12, .17, -.11, .1, -.1, .07, 0],
    types: ['jug','jug','pinch','sloper','pinch','jug','jug','crimp','sloper','pinch','crimp','jug'],
    dynamicMoves: [{ to: 6, type: 'dyno', label: '双脚起跳 · 飞抓', duration: 1.1 }]
  },
  {
    id: 'rift-v6', name: '冰裂', grade: 'V6', color: '#9ea8ff',
    style: '动态线 · 双段飞抓 / 落点控制', videoSrc: "./videos/0843958490a697e568ecbd17e4243386.mp4",
    heights: [-30,-30,-24,-18,-6,0,6,18,23,28,33],
    offsets: [-.08,.08,.1,-.14,.15,.08,-.13,.14,-.08,.04,0],
    types: ['jug','jug','pinch','jug','jug','crimp','jug','jug','pinch','crimp','jug'],
    dynamicMoves: [{to:4,type:'dyno',label:'第一段飞抓',duration:1.05},{to:7,type:'dyno',label:'第二段飞抓',duration:1.05}]
  },
  {
    id: 'polaredge-v6', name: '极刃', grade: 'V6', color: '#c0b3f5',
    style: '技术线 · 小抠点 / 捏点锁定', videoSrc: "./videos/0f1f104d517d70a322e48f94a4acc6e3.mp4",
    heights: [-30,-30,-24,-18,-12,-6,0,6,12,18,24,29,33],
    offsets: [-.08,.08,.12,-.13,.12,-.12,.11,-.1,.1,-.08,.07,-.04,0],
    types: ['jug','jug','crimp','pinch','crimp','sloper','crimp','pinch','crimp','sloper','crimp','pinch','jug'],
    dynamicMoves: []
  },
  {
    id: 'nightflight-v6', name: '夜航', grade: 'V6', color: '#aabaff',
    style: '动态线 · 动态伸抓 / 顶段飞抓', videoSrc: "./videos/2aedde3486e7d472aa1bf4b8954b44d6_raw.mp4",
    heights: [-30,-30,-24,-18,-8,-2,4,10,22,27,33],
    offsets: [-.08,.08,-.11,-.14,.15,-.1,.11,-.14,.15,-.06,0],
    types: ['jug','jug','pinch','jug','jug','crimp','sloper','jug','jug','pinch','jug'],
    dynamicMoves: [{to:4,type:'deadpoint',label:'动态伸抓',duration:.85},{to:8,type:'dyno',label:'顶段飞抓',duration:1.1}]
  },
  {
    id: 'violetleap-v6', name: '紫跃', grade: 'V6', color: '#b7b1ff',
    style: '动态线 · 横向飞抓 / 压缩上步', videoSrc: "./videos/6aff9c7477bac5c84d623cf4e6e51b93.mp4",
    heights: [-30,-30,-24,-18,-12,-6,7,13,19,24,29,33],
    offsets: [-.08,.08,.1,.14,.03,-.15,.16,.09,-.08,-.11,-.04,0],
    types: ['jug','jug','pinch','sloper','crimp','jug','jug','pinch','sloper','crimp','pinch','jug'],
    dynamicMoves: [{to:6,type:'dyno',label:'横向飞抓 · 双手接点',duration:1.1}]
  },
  {
    id: 'frostlock-v6', name: '霜锁', grade: 'V6', color: '#a5b4ec',
    style: '技术线 · 长横移 / 小点锁定', videoSrc: "./videos/6e8c9485f3d80df516284a7705ce2cbf.mp4",
    heights: [-30,-30,-24,-19,-13,-7,-1,5,11,17,23,28,33],
    offsets: [-.08,.08,-.12,-.15,-.08,.02,.11,.15,.08,-.04,-.1,-.05,0],
    types: ['jug','jug','crimp','pinch','sloper','crimp','pinch','crimp','sloper','crimp','pinch','crimp','jug'],
    dynamicMoves: []
  },
  {
    id: 'polarpulse-v6', name: '极脉', grade: 'V6', color: '#a7a2f5',
    style: '动态线 · 连续蹬伸 / 上段飞抓', videoSrc: "./videos/78a5afa6506ada16ceca63eb5b03e508.mp4",
    heights: [-30,-30,-24,-18,-8,-2,4,10,22,27,33],
    offsets: [-.08,.08,.1,.13,-.14,-.08,.05,.15,-.15,-.07,0],
    types: ['jug','jug','pinch','jug','jug','crimp','sloper','jug','jug','pinch','jug'],
    dynamicMoves: [{to:4,type:'deadpoint',label:'侧向动态伸抓',duration:.9},{to:8,type:'dyno',label:'反向飞抓 · 控制摆动',duration:1.15}]
  }
];

// Double the authored lateral offsets, including footholds, to cover about 30–36°.
// Route sectors intentionally overlap; hold IDs and video bindings remain independent.
// Independent starting heights and grip shapes. Each tuple is [centre height, left type, right type, height difference].
const starts = {
  'snowsteps-v3': [-34,'jug','pinch',1.4],
  'glacier-v3': [-29,'sidepull','jug',-2],
  'snowbank-v3': [-32,'pinch','pinch',1.8],
  'misttrail-v3': [-26,'undercling','jug',-1.6],
  'ice-v4': [-30,'pinch','sidepull',2],
  'moonridge-v4': [-24,'sidepull','undercling',-2.4],
  'frostbalance-v4': [-33,'sloper','pinch',1.6],
  'snowreach-v4': [-27,'undercling','jug',2.2],
  'blueedge-v4': [-22,'crimp','sidepull',-1.8],
  'frost-v5': [-31,'pinch','undercling',2],
  'glint-v5': [-25,'sidepull','pinch',-2.2],
  'silverseam-v5': [-28,'crimp','crimp',1.6],
  'icewave-v5': [-21,'undercling','pinch',-2],
  'bluecompression-v5': [-29.5,'pinch','sidepull',2.4],
  'icecross-v5': [-23,'undercling','sidepull',-1.8],
  'moonarc-v5': [-32.5,'sloper','undercling',2],
  'coldcomet-v5': [-26.5,'sidepull','jug',-2.4],
  'aurora-v6': [-20,'undercling','pinch',2],
  'rift-v6': [-27.5,'sidepull','undercling',-1.6],
  'polaredge-v6': [-24.5,'crimp','pinch',2.2],
  'nightflight-v6': [-30.5,'undercling','undercling',-1.8],
  'violetleap-v6': [-22.5,'pinch','sidepull',2.4],
  'frostlock-v6': [-25.5,'sloper','crimp',-2],
  'polarpulse-v6': [-28.5,'undercling','sidepull',1.8]
};
const frontRouteIndex = window.BOULDER_ROUTES.findIndex(route => route.id === 'frost-v5');
window.BOULDER_ROUTES.forEach((route, index, routes) => {
  const [height,leftType,rightType,difference] = starts[route.id];
  route.heights = route.heights.map(y => height+(y+30)/63*(33-height));
  route.heights[0] = height-difference/2;
  route.heights[1] = height+difference/2;
  route.types[0] = leftType; route.types[1] = rightType;
  route.startHeight = height;
  route.lane = (index - frontRouteIndex) * 2 * Math.PI / routes.length;
  route.offsets = route.offsets.map(offset => offset * 2);
  route.footOffsets = [-.26, .26];
  const angles = [...route.offsets, ...route.footOffsets];
  route.coverageDegrees = (Math.max(...angles) - Math.min(...angles)) * 180 / Math.PI;
});

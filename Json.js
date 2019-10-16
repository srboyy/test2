/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickname: 'Leo yo',
		portrait: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg'
	},
	msg: '提示'
}
/* 首页轮播图 */
const carouselList = [{
		src: "/static/temp/banner3.jpg",
		background: "rgb(203, 87, 60)",
	},
	{
		src: "/static/temp/banner2.jpg",
		background: "rgb(205, 215, 218)",
	},
	{
		src: "/static/temp/banner4.jpg",
		background: "rgb(183, 73, 69)",
	}
]
/* 商品列表 */
const goodsList = [{
		id:'1',
		image: "../../static/test.webp",
		image2: "https://dimg04.c-ctrip.com/images//200u0p000000fm21xE0DB_C_550_412_Q50.jpg_.webp",
		image3: "https://dimg04.c-ctrip.com/images//20060e0000007363yC9AA_C_550_412_Q50.jpg_.webp",
		title: "丽水现代广场大酒店",
		price: 382,
		sales: 61,
		address:'浙江省  丽水市'	,
		toke:'4.9',
		toke1:'300',
		info:'房间内部设施很新很好，非常舒适，距离地铁站很近',
		Collection: 61,
	}
	// ,
	// {
	// 	id:'2',
	// 	image: "https://p0.meituan.net/216.0/tdchotel/__25433628__9142395.jpg.webp",
	// 	image2: "https://dimg04.c-ctrip.com/images//200u0p000000fm21xE0DB_C_550_412_Q50.jpg_.webp",
	// 	image3: "https://dimg04.c-ctrip.com/images//20060e0000007363yC9AA_C_550_412_Q50.jpg_.webp",
	// 	title: "创e家主题酒店(原新豪迈商务宾馆)",
	// 	price: 98,
	// 	sales: 16,
	// 	address:'遂昌市区'	,
	// 	toke:'4.9',
	// 	toke1:'300',
	// 	info:'遂昌市区',
	// 	Collection: 99,
	// },
	// {
	// 	id:'3',
	// 	image: "https://p0.meituan.net/216.0/tdchotel/00d49bc5560e3a600e1cfd5821c6ce231448018.jpg.webp",
	// 	image2: "https://dimg04.c-ctrip.com/images//200u0p000000fm21xE0DB_C_550_412_Q50.jpg_.webp",
	// 	image3: "https://dimg04.c-ctrip.com/images//20060e0000007363yC9AA_C_550_412_Q50.jpg_.webp",
	// 	title: "全季酒店(丽水火车站店)",
	// 	price: 273,
	// 	sales: 5,
	// 	address:'火车站/客运东站，丽水客运东站附近'	,
	// 	toke:'4.9',
	// 	toke1:'300',
	// 	info:'房间内部设施很新很好，非常舒适，距离地铁站很近',
	// 	Collection: 91,
	// }, {
	// 	id:'4',
	// 	image: "https://p0.meituan.net/216.0/tdchotel/6c14ca5f848486b3c5a7efa06e982b126926616.jpg.webp",
	// 	image2: "https://dimg04.c-ctrip.com/images//200u0p000000fm21xE0DB_C_550_412_Q50.jpg_.webp",
	// 	image3: "https://dimg04.c-ctrip.com/images//20060e0000007363yC9AA_C_550_412_Q50.jpg_.webp",
	// 	title: "创e家主题酒店(原新豪迈商务宾馆)",
	// 	price: 109,
	// 	sales: 88,
	// 	address:'丽水学院/西域美食广场，丽水学院附近'	,
	// 	toke:'4.9',
	// 	toke1:'300',
	// 	info:'房间内部设施很新很好，非常舒适，距离地铁站很近 主要感觉交通还可以，但早饭质量一般',
	// 	Collection: 61,
	// }, {
	// 	id:'5',
	// 	image: "https://p0.meituan.net/216.0/tdchotel/8eb741b96271acd673a221e77a861f3a4148888.jpg.webp",
	// 	image2: "https://dimg04.c-ctrip.com/images//200u0p000000fm21xE0DB_C_550_412_Q50.jpg_.webp",
	// 	image3: "https://dimg04.c-ctrip.com/images//20060e0000007363yC9AA_C_550_412_Q50.jpg_.webp",
	// 	title: "尖微空间艺术酒店(丽水丽阳店)",
	// 	price: 229,
	// 	sales: 137,
	// 	address:'丽水学院/西域美食广场，丽水市中心医院附近'	,
	// 	toke:'4.9',
	// 	toke1:'300',
	// 	info:'房间内部设施很新很好，非常舒适，距离地铁站很近 主要感觉交通还可以，但早饭质量一般',
	// 	Collection: 61,
	// }, {
	// 	id:'6',
	// 	image: "https://p1.meituan.net/216.0/tdchotel/117b40ea8ddbf47c2a078f224319a232191730.jpg.webp",
	// 	image2: "https://dimg04.c-ctrip.com/images//200u0p000000fm21xE0DB_C_550_412_Q50.jpg_.webp",
	// 	image3: "https://dimg04.c-ctrip.com/images//20060e0000007363yC9AA_C_550_412_Q50.jpg_.webp",
	// 	title: "轻住·厦门延鹭客栈",
	// 	price: 179,
	// 	sales: 95,
	// 	address:'厦门市  思明区'	,
	// 	toke:'4.9',
	// 	toke1:'300',
	// 	info:'房间内部设施很新很好，非常舒适，距离地铁站很近 主要感觉交通还可以，但早饭质量一般',
	// 	Collection: 61,
	// },
]

/* 购物车 */
const cartList = [{
		id: 1,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553005139&di=3368549edf9eee769a9bcb3fbbed2504&imgtype=jpg&er=1&src=http%3A%2F%2Fimg002.hc360.cn%2Fy3%2FM01%2F5F%2FDB%2FwKhQh1T7iceEGRdWAAAAADQvqk8733.jpg',
		attr_val: '春装款 L',
		stock: 15,
		title: 'OVBE 长袖风衣',
		price: 278.00,
		number: 1
	},
	{
		id: 3,
		image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
		attr_val: '激光导航 扫拖一体',
		stock: 3,
		title: '科沃斯 Ecovacs 扫地机器人',
		price: 1348.00,
		number: 5
	},
	{
		id: 4,
		image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
		attr_val: 'XL',
		stock: 55,
		title: '朵绒菲小西装',
		price: 175.88,
		number: 1
	},
	{
		id: 5,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
		attr_val: '520 #粉红色',
		stock: 15,
		title: '迪奥（Dior）烈艳唇膏',
		price: 1089.00,
		number: 1
	},
	{
		id: 6,
		image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
		attr_val: '樱花味润手霜 30ml',
		stock: 15,
		title: "欧舒丹（L'OCCITANE）乳木果",
		price: 128,
		number: 1
	},
	{
		id: 7,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
		attr_val: '特级 12个',
		stock: 7,
		title: '新疆阿克苏苹果 特级',
		price: 58.8,
		number: 10
	},
	{
		id: 8,
		image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
		attr_val: '激光导航 扫拖一体',
		stock: 15,
		title: '科沃斯 Ecovacs 扫地机器人',
		price: 1348.00,
		number: 1
	},
	{
		id: 9,
		image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
		attr_val: 'XL',
		stock: 55,
		title: '朵绒菲小西装',
		price: 175.88,
		number: 1
	},
	{
		id: 10,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
		attr_val: '520 #粉红色',
		stock: 15,
		title: '迪奥（Dior）烈艳唇膏',
		price: 1089.00,
		number: 1
	},
	{
		id: 11,
		image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
		attr_val: '樱花味润手霜 30ml',
		stock: 15,
		title: "欧舒丹（L'OCCITANE）乳木果",
		price: 128,
		number: 1
	},
	{
		id: 12,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
		attr_val: '特级 12个',
		stock: 7,
		title: '新疆阿克苏苹果 特级',
		price: 58.8,
		number: 10
	},
	{
		id: 13,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552405266625&di=a703f2b2cdb0fe7f3f05f62dd91307ab&imgtype=0&src=http%3A%2F%2Fwww.78.cn%2Fzixun%2Fnews%2Fupload%2F20190214%2F1550114706486250.jpg',
		attr_val: '春装款/m',
		stock: 15,
		title: '女装2019春秋新款',
		price: 420.00,
		number: 1
	}
];
//详情展示页面
const detailData = {
	id:'1',
	title: '巴克拉概念酒店(中山路禾祥西路店)',
	title2: '拆家小能手 你值得拥有',
	favorite: true,
	imgList: [{
			src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
		},
		{
			src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
		},
		{
			src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
		},
		{
			src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
		},
	],
	episodeList: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
	],
	guessList: [{
			src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg',
			title: '猫眼指甲油',
			title2: '独树一帜的免照灯猫眼指甲'
		},
		{
			src: 'http://m.china-7.net/uploads/14778449362891.jpg',
			title: '创意屋',
			title2: '创意屋形上下双层高低床'
		},
		{
			src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg',
			title: 'MissCandy 指甲油',
			title2: '十分适合喜欢素净的妹纸，尽显淡雅的气质'
		},
		{
			src: 'http://img0.imgtn.bdimg.com/it/u=2108933440,2194129200&fm=214&gp=0.jpg	',
			title: 'RMK 2017星空海蓝唇釉',
			title2: '唇釉质地，上唇后很滋润。少女也会心动的蓝色，透明液体形状。'
		}
	],
	evaList: [{
			src: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。'
		},
		{
			src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '楼上说的好有道理。'
		}
	]
}
const shareList = [{
		type: 1,
		icon: '/static/temp/share_wechat.png',
		text: '微信好友'
	},
	{
		type: 2,
		icon: '/static/temp/share_moment.png',
		text: '朋友圈'
	},
	{
		type: 3,
		icon: '/static/temp/share_qq.png',
		text: 'QQ好友'
	}
]
const lazyLoadList = [{
		src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
	},
	{
		src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
	},
	{
		src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
	},
	{
		src: 'http://img5.imgtn.bdimg.com/it/u=2904900134,438461613&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img1.imgtn.bdimg.com/it/u=1690475408,2565370337&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img.99114.com/group1/M00/7F/99/wKgGS1kVrPGAe5LmAAU2KrJmb3Q923_600_600.jpg'
	},
	{
		src: 'http://img4.imgtn.bdimg.com/it/u=261047209,372231813&fm=26&gp=0.jpg'
	},
	{
		src: 'http://i2.17173cdn.com/i7mz64/YWxqaGBf/tu17173com/20150107/eMyVMObjlbcvDEv.jpg'
	},
	{
		src: 'http://img008.hc360.cn/m4/M02/E7/87/wKhQ6FSrfU6EfUoyAAAAAITAfyc280.jpg'
	},
	{
		src: 'http://pic1.win4000.com/wallpaper/d/5991569950166.jpg'
	},
	{
		src: 'http://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6f061d950a7b0208f9fe945e60d9f2d3572cc85e.jpg'
	},
	{
		src: 'http://pic41.nipic.com/20140429/18169759_125841756000_2.jpg'
	},
	{
		src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg'
	},
	{
		src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg'
	},
	{
		src: 'http://b-ssl.duitang.com/uploads/item/201410/02/20141002111638_tXAzU.jpeg'
	},
	{
		src: 'http://img2.ph.126.net/C4JW6f57QWSB21-8jh2UGQ==/1762596304262286698.jpg'
	},
	{
		src: 'http://att.bbs.duowan.com/forum/201405/17/190257nzcvkkdg6w2e8226.jpg'
	},
	{
		src: 'http://attach.bbs.miui.com/forum/201504/10/223644v3intigyvva0vgym.jpg'
	},
	{
		src: 'http://pic1.win4000.com/mobile/3/57888a298d61d.jpg'
	},
]

const orderList = [
	{
		id:10001,
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
			title: '丽水现代广场大酒店',
			price: 365,
			image: '//dimg04.c-ctrip.com/images//t1/hotel/26000/25122/9fef72c4c60d48afaeac840121718d4d_C_550_412_Q50.jpg_.webp',
			number: 1,
			attr: '高级双人房  |可住2人  |早餐2份  |'
		}]
	},
	{
		id:10002,
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
			title: '丽水现代广场大酒店',
			price: 365,
			image: '//dimg04.c-ctrip.com/images//t1/hotel/26000/25122/9fef72c4c60d48afaeac840121718d4d_C_550_412_Q50.jpg_.webp',
			number: 1,
			attr: '高级双人房  |可住2人  |早餐2份  |'
		}]
	},
	

]
const cateList = [{
		id: 1,
		name: '名宿'
	},
	{
		id: 2,
		name: '经济'
	},
	{
		id: 3,
		name: '快捷'
	},
	{
		id: 4,
		name: '主题'
	},
	{
		id: 5,
		pid: 1,
		name: '商务'
	},
	{
		id: 6,
		pid: 1,
		name: '公寓'
	},
	{
		id: 8,
		pid: 5,
		name: '单人',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 9,
		pid: 5,
		name: '大床',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 10,
		pid: 5,
		name: '双人',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 11,
		pid: 5,
		name: '三人',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 12,
		pid: 5,
		name: '如家',
		picture: '/static/temp/cate5.jpg'
	},
	{
		id: 14,
		pid: 6,
		name: '汉庭',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 15,
		pid: 6,
		name: '七天',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 16,
		pid: 6,
		name: '速8',
		picture: '/static/temp/cate5.jpg'
	},
	{
		id: 17,
		pid: 2,
		name: '莫泰',
	}
	
]

export default {
	carouselList,
	cartList,
	detailData,
	lazyLoadList,
	userInfo,
	shareList,
	goodsList,
	orderList,
	cateList
}

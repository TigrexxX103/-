/**
 * 全局图片映射表
 * 使用 Pexels 高质量免费图片（真实农场/作物照片）
 * Pexels 图片 CDN 稳定，可通过 w/h/fit 参数控制尺寸
 * 所有图片集中管理，便于统一替换和维护
 */

const PEXELS_BASE = 'https://images.pexels.com/photos'

/** 生成方形图片URL（头像、商品、评价） */
function square(id: string): string {
  return `${PEXELS_BASE}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`
}

/** 生成横版4:3图片URL（内容图、生长记录、地块图） */
function landscape(id: string): string {
  return `${PEXELS_BASE}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop`
}

/** 生成横版16:9图片URL（横幅、农场、活动） */
function wide(id: string): string {
  return `${PEXELS_BASE}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=750&h=422&fit=crop`
}

/** 地块相关图片 */
export const landImages = {
  tomato: landscape('5005518'),      // 温室樱桃番茄
  tomato2: landscape('27899455'),     // 串收番茄特写
  tomato3: landscape('32112354'),     // 番茄藤蔓果实
  strawberry: landscape('16664900'),  // 草莓田俯视
  strawberry2: landscape('31404685'),  // 新鲜草莓篮
  strawberry3: landscape('7457199'),   // 采摘草莓
  rice: landscape('32200256'),        // 稻田丰收
  rice2: landscape('11196892'),       // 水稻秧苗
  rice3: landscape('2888329'),        // 稻田日落
  rose: landscape('14607314'),        // 玫瑰花园
  rose2: landscape('29800332'),       // 玫瑰特写
  rose3: landscape('32193072'),       // 花田玫瑰
  corn: landscape('4533849'),         // 玉米田
  corn2: landscape('10188245'),       // 玉米棒特写
  lettuce: landscape('28129609'),     // 水培生菜
  lettuce2: landscape('4943458'),     // 生菜蔬菜
  sunflower: landscape('13281370'),   // 向日葵田
  sunflower2: landscape('3764490'),   // 向日葵特写
  blueberry: landscape('8365220'),    // 蓝莓灌木
  blueberry2: landscape('18003500'),  // 蓝莓果实
  chili: landscape('10607852'),       // 辣椒植株
  chili2: landscape('5765325'),       // 辣椒特写
  lavender: landscape('31559114'),    // 薰衣草田
  lavender2: landscape('31314890')    // 薰衣草特写
}

/** 农场相关图片 */
export const farmImages = {
  lvye: wide('5231223'),              // 有机蔬菜农场
  lvye2: landscape('20427697'),       // 绿色蔬菜
  lvye3: landscape('28129609'),       // 温室农业
  daoxiang: wide('32212192'),         // 稻田村庄
  daoxiang2: landscape('24513308'),   // 稻田日出
  huatian: wide('23496887'),          // 花田农场
  huatian2: landscape('28286843')     // 玫瑰花园
}

/** 活动相关图片 */
export const activityImages = {
  picking: wide('18785809'),          // 家庭草莓采摘
  photo: wide('3764490'),             // 向日葵摄影
  transplanting: wide('2804327'),     // 水稻插秧
  harvest: wide('12387401'),          // 丰收庆祝
  floral: wide('6641384'),            // 花艺工作坊
  camping: wide('32038159'),          // 稻田露营
  science: wide('7352972'),           // 儿童农场教育
  roseWater: wide('5410076'),         // 玫瑰纯露制作
  riceTasting: wide('7421205'),       // 稻米品尝
  littleFarmer: wide('5529951')       // 小小农夫
}

/** Banner 图片 */
export const bannerImages = {
  spring: wide('31788698'),           // 春日农场
  corn: wide('4533849'),              // 夏日玉米田
  festival: wide('12026160'),         // 丰收节
  strawberry: wide('17175674')        // 草莓田
}

/** 头像图片（方形，每个用户独特） */
export const avatarImages = {
  farmer1: square('16892457'),         // 农场主大叔
  farmer2: square('18620451'),         // 稻田老年农夫
  farmer3: square('19303974'),         // 花园农场主
  user1: square('8540273'),            // 有机蔬菜卖家
  user2: square('7782979'),            // 农场微笑女性
  user3: square('14758515'),           // 丰收快乐男子
  user4: square('4402177'),            // 农田男子
  user5: square('31035814'),           // 花园微笑女性
  user6: square('16138716'),           // 农场工作老人
  user7: square('17295781'),           // 花园年轻女性
  default: square('16892457')         // 默认头像
}

/** 通用内容图片 */
export const contentImages = {
  story1: landscape('5231223'),        // 有机农场故事
  activity1: landscape('18785809'),    // 草莓采摘活动
  knowledge1: landscape('32200256'),   // 水稻秋收知识
  share1: landscape('11286060'),       // 儿童农场分享
  story2: landscape('32212192'),      // 稻田故事
  activity2: landscape('3764490'),     // 向日葵摄影赛
  knowledge2: landscape('17058206'),   // 番茄生长周期
  share2: landscape('12387401'),       // 丰收体验分享
  story3: landscape('14607314'),       // 玫瑰花园故事
  activity3: landscape('32038159')     // 稻田露营活动
}

/** 生长记录图片 */
export const growthImages = {
  sprout: landscape('30208464'),       // 种子发芽
  seedling: landscape('17058206'),    // 番茄幼苗
  flowering: landscape('4078195'),    // 番茄开花
  fruiting: landscape('5946096')      // 番茄结果
}

/** 商品图片 */
export const productImages = {
  giftBox: square('28991060'),        // 有机蔬菜礼盒
  fruitBox: square('17175674'),       // 水果礼盒
  rice: square('7421205'),            // 大米
  roseGift: square('4735940'),        // 玫瑰护肤品礼盒
  lavenderGift: square('7937399'),    // 薰衣草香氛礼盒
  experience: square('7352972')       // 农场体验券
}

/** 评价图片 */
export const reviewImages = {
  review1: square('5946096'),          // 番茄收获
  review2: square('18785809'),        // 草莓采摘
  review3: square('32200256'),        // 稻田丰收
  review4: square('20395224'),        // 玫瑰花束
  review5: square('13281370'),        // 向日葵田
  review6: square('18003500'),        // 蓝莓收获
  review7: square('10188245')         // 玉米收获
}

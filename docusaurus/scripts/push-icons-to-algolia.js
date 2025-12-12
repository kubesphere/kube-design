/**
 * 将图标数据直接推送到 Algolia 索引
 * 这是爬虫方案的备选方案，可以确保每个图标都被索引
 *
 * 使用方法:
 * 1. 安装依赖: npm install algoliasearch
 * 2. 设置环境变量: ALGOLIA_APP_ID 和 ALGOLIA_ADMIN_KEY
 * 3. 运行脚本: node scripts/push-icons-to-algolia.js
 */

const algoliasearch = require('algoliasearch');
const iconsData = require('@kubed/icons/dist/icons.json');

// 分类名称映射（中文）
const CategoryNameMap = {
  appcenter: '应用中心',
  company: '公司/品牌',
  direction: '方向/箭头',
  language: '编程语言',
  object: '对象',
  operation: '操作',
  os: '操作系统',
  abstract: '抽象',
  arrow: '箭头',
  brands: '品牌',
  chart: '图表',
  feedback: '反馈',
  file: '文件',
  form: '表单',
  layout: '布局',
  map: '地图',
  media: '媒体',
  money: '金融',
  notification: '通知',
  other: '其他',
  person: '人物',
  physical: '实体',
  service: '服务',
  time: '时间',
};

async function pushIconsToAlgolia() {
  // 从环境变量获取 Algolia 配置
  const appId = process.env.ALGOLIA_APP_ID;
  const adminKey = process.env.ALGOLIA_ADMIN_KEY;
  const indexName = process.env.ALGOLIA_INDEX_NAME || 'kube-design';

  if (!appId || !adminKey) {
    console.error('错误: 请设置 ALGOLIA_APP_ID 和 ALGOLIA_ADMIN_KEY 环境变量');
    process.exit(1);
  }

  console.log('正在连接到 Algolia...');
  const client = algoliasearch(appId, adminKey);
  const index = client.initIndex(indexName);

  // 准备图标记录
  const records = [];
  let objectID = 1000000; // 使用大数字起始，避免与文档记录冲突

  Object.entries(iconsData).forEach(([categoryKey, icons]) => {
    const categoryNameZh = CategoryNameMap[categoryKey] || categoryKey;

    icons.forEach((iconName) => {
      // 为每个图标创建一个记录
      records.push({
        objectID: `icon-${objectID++}`,
        type: 'icon',
        hierarchy: {
          lvl0: 'Icons',
          lvl1: '图标',
          lvl2: categoryNameZh,
          lvl3: iconName,
        },
        content: iconName,
        url: 'https://kubesphere.github.io/docs/icons/overview',
        url_without_anchor: 'https://kubesphere.github.io/docs/icons/overview',
        anchor: iconName,
        // 自定义属性
        icon_name: iconName,
        icon_category: categoryKey,
        icon_category_zh: categoryNameZh,
        language: 'zh-CN',
        docusaurus_tag: 'docs-default-current',
        // 添加搜索关键词
        _tags: ['icon', categoryKey, iconName],
      });
    });
  });

  console.log(`准备推送 ${records.length} 个图标记录到 Algolia...`);

  try {
    // 批量推送记录
    const result = await index.saveObjects(records, {
      autoGenerateObjectIDIfNotExist: false,
    });

    console.log(`✅ 成功推送 ${records.length} 个图标记录`);
    console.log('ObjectIDs:', result.objectIDs.slice(0, 5), '...');

    // 配置索引设置（可选）
    await index.setSettings({
      searchableAttributes: [
        'hierarchy.lvl0',
        'hierarchy.lvl1',
        'hierarchy.lvl2',
        'hierarchy.lvl3',
        'content',
        'icon_name',
        'icon_category_zh',
      ],
      attributesForFaceting: [
        'language',
        'type',
        'icon_category',
      ],
      customRanking: [
        'desc(weight.page_rank)',
        'desc(weight.level)',
        'asc(weight.position)',
      ],
    });

    console.log('✅ 索引设置已更新');
  } catch (error) {
    console.error('❌ 推送失败:', error);
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  pushIconsToAlgolia()
    .then(() => {
      console.log('完成！');
      process.exit(0);
    })
    .catch((error) => {
      console.error('发生错误:', error);
      process.exit(1);
    });
}

module.exports = { pushIconsToAlgolia };

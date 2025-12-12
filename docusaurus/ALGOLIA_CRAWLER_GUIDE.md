# Kube Design Algolia 搜索配置指南

本文档介绍如何为 Kube Design 文档站点配置 Algolia 爬虫，实现**完整的文档和图标搜索功能**，包括 200+ 个图标的索引。

## 📦 概述

本次配置为 Kube Design 添加了完整的搜索功能，支持：
- ✅ 所有文档页面的全文搜索
- ✅ 所有组件、Hooks 页面的搜索
- ✅ **200+ 个图标的独立索引和搜索**
- ✅ 中英文双语支持
- ✅ 智能分词和自动补全

### 更新的文件

1. **`algolia-crawler-config.json`** - Algolia 爬虫配置文件
   - 添加 JavaScript 渲染支持
   - 为图标页面配置专用选择器
   - 排除不必要的 UI 元素

2. **`src/components/IconGallery/index.tsx`** - IconGallery 组件优化
   - 添加 SEO 友好的类名和属性
   - 便于爬虫识别图标分类和名称

3. **`scripts/push-icons-to-algolia.js`** - 备选推送脚本
   - 直接将图标数据推送到 Algolia
   - 不依赖爬虫，适合 CI/CD 集成

---

## 🚀 快速开始

### 前置条件

- Algolia 账号和应用（[免费注册](https://www.algolia.com/)）
- 已部署的 Docusaurus 站点
- 访问 Algolia Crawler 的权限

### 方案一：使用 Algolia Crawler（推荐）

这是最简单的方案，适合大多数场景。

#### 1. 部署更新的代码

```bash
cd docusaurus
pnpm build
# 部署到 GitHub Pages 或你的托管平台
```

#### 2. 配置 Algolia Crawler

1. 登录 [Algolia Crawler](https://crawler.algolia.com/)
2. 创建新的爬虫或编辑现有爬虫
3. 在 "Editor" 标签页中复制粘贴 `algolia-crawler-config.json` 的全部内容
4. **重要**: 确保配置中已启用 JavaScript 渲染（`js_render: true`）
5. 点击 "Save" 保存配置
6. 点击 "Restart crawling" 开始爬取

#### 3. 验证结果

爬取完成后（通常需要几分钟）：
1. 在 Algolia Dashboard 中查看索引记录数
2. 使用搜索预览功能搜索图标名称（如 "Add", "Delete"）
3. 确认大约 200+ 个图标都被索引（检查 `hierarchy.lvl3` 字段）

### 方案二：使用脚本直接推送（备选）

如果爬虫无法正确索引图标，或需要在 CI/CD 中自动执行，使用这个方案。

```bash
# 1. 安装依赖
npm install algoliasearch

# 2. 设置环境变量
export ALGOLIA_APP_ID="your_app_id"
export ALGOLIA_ADMIN_KEY="your_admin_key"
export ALGOLIA_INDEX_NAME="kube-design"

# 3. 运行脚本
node scripts/push-icons-to-algolia.js
```

**优点**：
- 100% 可靠，确保每个图标都被索引
- 可以在 CI/CD 中自动执行
- 不依赖爬虫的 JavaScript 渲染

**缺点**：
- 需要管理 Algolia Admin API Key
- 图标更新时需要手动触发或配置自动化

**建议**：在 GitHub Actions 或其他 CI/CD 工具中自动运行此脚本。

### 方案三：使用 Algolia CLI

```bash
# 安装 Algolia CLI
npm install -g @algolia/cli

# 上传配置
algolia crawler:config:upload algolia-crawler-config.json

# 启动爬虫
algolia crawler:crawl <CRAWLER_ID>
```

---

## ✨ 功能特性

### 图标搜索层级结构

```
Icons (lvl0 - 顶级分类)
  └─ 图标 (lvl1 - 页面标题)
      └─ 操作/文件/方向/箭头... (lvl2 - 图标分类)
          └─ AddDuotone/DeleteFill/ArrowLeft... (lvl3 - 具体图标名称)
```

### 搜索示例

- 搜索 **"Add"** → 找到 AddDuotone, AddCircle, AddFill 等所有相关图标
- 搜索 **"操作"** → 找到操作分类下的所有图标
- 搜索 **"Delete"** → 找到所有删除相关的图标
- 搜索 **"Duotone"** → 找到所有 Duotone 变体的图标

### 智能分词

图标名称如 `ArrowLeftCircleFill` 会被 Algolia 自动分词，支持部分匹配：
- ✓ 搜索 "Arrow" → 匹配
- ✓ 搜索 "Left" → 匹配
- ✓ 搜索 "Circle" → 匹配
- ✓ 搜索 "Fill" → 匹配

---

## 📖 详细配置说明

### 1. 基础配置

```json
{
  "index_name": "kube-design",
  "start_urls": [
    {
      "url": "https://kubesphere.github.io/",
      "selectors_key": "default"
    },
    {
      "url": "https://kubesphere.github.io/docs/icons/",
      "selectors_key": "icons",
      "page_rank": 2
    }
  ],
  "sitemap_urls": ["https://kubesphere.github.io/sitemap.xml"]
}
```

**说明**：
- **index_name**: Algolia 索引名称
- **start_urls**: 爬虫起始 URL，使用不同的 `selectors_key` 为不同页面类型配置选择器
  - `default`: 常规文档页面
  - `icons`: 图标页面（特殊配置，用于索引每个图标）
- **page_rank**: 提高图标页面的搜索权重
- **sitemap_urls**: 站点地图 URL，爬虫会优先使用 sitemap 发现所有页面

### 2. JavaScript 渲染配置（重要！）

```json
{
  "js_render": true,
  "js_wait": 2,
  "renderJavaScript": true
}
```

**这是索引图标的关键配置**，因为图标是通过 React 动态渲染的：
- **js_render**: 启用 JavaScript 渲染
- **js_wait**: 等待 2 秒让 JavaScript 完成渲染（可根据需要调整为 3-5 秒）
- **renderJavaScript**: 确保无头浏览器执行 JavaScript

### 3. 选择器配置

配置文件包含两套选择器，分别用于常规文档页面和图标页面。

#### 3.1 Default Selectors（常规文档页面）

针对 Docusaurus 的 HTML 结构设计：

##### lvl0 - 顶级分类

```json
"lvl0": {
  "selector": "(//ul[contains(@class,'menu__list')]//a[contains(@class, 'menu__link--active')]/text() | //nav[contains(@class, 'navbar')]//a[contains(@class, 'navbar__link--active')]/text())[last()]",
  "type": "xpath",
  "global": true,
  "default_value": "Documentation"
}
```

- 使用 XPath 提取当前激活的侧边栏或导航栏项目
- `global: true` 表示这个值在整个页面中保持不变
- 作为搜索结果的顶级分类（如 "Guide"、"Components"、"Hooks" 等）

##### lvl1-lvl6 - 各级标题

```json
"lvl1": "article h1, .theme-doc-markdown h1",
"lvl2": "article h2, .theme-doc-markdown h2",
"lvl3": "article h3, .theme-doc-markdown h3",
...
```

- 按照标题层级提取内容
- Docusaurus 的文档内容通常在 `article` 标签或 `.theme-doc-markdown` 类中
- 层级结构帮助 Algolia 理解文档结构，提供更好的搜索结果

##### text - 正文内容

```json
"text": "article p, article li, .theme-doc-markdown p, .theme-doc-markdown li"
```

- 提取段落和列表项的文本内容
- 这些内容会被索引用于全文搜索

#### 3.2 Icons Selectors（图标页面）

**专门为图标页面设计的选择器**，用于索引每一个图标：

```json
"icons": {
  "lvl0": {
    "selector": "article h1",
    "global": true,
    "default_value": "Icons"
  },
  "lvl1": "article h2[id]:not([id^='category-'])",
  "lvl2": {
    "selector": "//h2[contains(@class, 'CategoryTitle')]/text()",
    "type": "xpath",
    "global": false
  },
  "lvl3": {
    "selector": "//div[contains(@class, 'IconCard')]//div[contains(@class, 'IconName')]",
    "type": "xpath",
    "global": false
  },
  "text": "article p, article li"
}
```

**层级结构说明**：
- **lvl0**: 固定为 "Icons"（顶级分类）
- **lvl1**: 页面中的二级标题（如"使用方法"、"图标变体"、"API"）
- **lvl2**: 图标分类（如"操作"、"文件"、"方向/箭头"）- 使用 XPath 提取动态渲染的分类标题
- **lvl3**: 单个图标名称（如"AddDuotone"、"DeleteFill"）- 使用 XPath 提取每个图标卡片中的名称

**搜索结果示例**：
- 搜索 "Add" → 找到 "AddDuotone", "AddCircle" 等图标
- 搜索 "操作" → 找到该分类下的所有图标
- 层级显示：Icons > 图标 > 操作 > AddDuotone

### 4. 排除选择器

```json
"selectors_exclude": [
  ".hash-link",              // 锚点链接图标
  ".theme-code-block",       // 代码块
  "nav.navbar",              // 顶部导航栏
  "aside.theme-doc-sidebar-container",  // 侧边栏
  "footer.footer",           // 页脚
  "input[type='text']",      // 图标搜索框（避免索引）
  ".StatsBar",               // 图标统计栏
  ".CopiedToast"             // 复制提示
]
```

这些元素会被排除在索引之外，避免干扰搜索结果。特别注意图标页面的搜索框和统计信息也被排除。

### 5. 自定义设置

```json
"custom_settings": {
  "separatorsToIndex": "_",
  "attributesForFaceting": [
    "language",
    "version",
    "type",
    "docusaurus_tag"
  ],
  "attributesToRetrieve": [
    "hierarchy",
    "content",
    "anchor",
    "url",
    "url_without_anchor",
    "type"
  ]
}
```

- **separatorsToIndex**: 将下划线作为分隔符索引（对于 `use_clipboard` 这样的 Hook 名称很有用）
- **attributesForFaceting**: 支持按语言、版本等进行过滤
- **attributesToRetrieve**: 搜索结果返回的字段

---

## ✅ 验证和测试

### 验证清单

部署和配置完成后，按以下清单验证：

- [ ] 图标页面可以正常访问（https://kubesphere.github.io/docs/icons/overview）
- [ ] 图标正常显示，没有加载错误
- [ ] 爬虫配置中启用了 JavaScript 渲染
- [ ] Algolia 索引包含预期数量的记录（文档 + 组件 + 200+ 图标）
- [ ] 搜索功能可以找到图标
- [ ] 图标记录的 `hierarchy` 结构正确

### 在 Algolia Dashboard 中检查

1. **登录 Algolia Dashboard**
2. **选择你的索引**
3. **在 "Browse" 标签页中验证**：
   - 搜索框输入图标名称（如 "AddDuotone"）
   - 检查是否能找到对应记录
   - 查看记录的结构是否正确：

```json
{
  "hierarchy": {
    "lvl0": "Icons",
    "lvl1": "图标",
    "lvl2": "操作",
    "lvl3": "AddDuotone"
  },
  "content": "AddDuotone",
  "url": "https://kubesphere.github.io/docs/icons/overview",
  "type": "content"
}
```

### 使用搜索预览测试

1. 在 Dashboard 中使用 "Search Preview" 功能
2. 测试各种搜索查询：
   - **"Add"** → 应该返回所有包含 "Add" 的图标
   - **"操作"** → 应该返回操作分类下的所有图标
   - **"Duotone"** → 应该返回所有 Duotone 变体的图标
   - **"Button"** → 应该返回 Button 组件的文档

### 检查索引统计

- 总记录数应该包括：文档页面 + 组件页面 + Hooks 页面 + 图标数量
- Kube Design 大约有 200+ 个图标，确保这些都被索引了
- 验证记录的分布是否合理

---

## 🔧 集成到 Docusaurus

### 基础配置

在 `docusaurus.config.ts` 中添加 Algolia 搜索配置：

```typescript
import type { Config } from '@docusaurus/types';

const config: Config = {
  // ... 其他配置

  themeConfig: {
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',  // 只读的搜索 API Key（非 Admin Key）
      indexName: 'kube-design',
      contextualSearch: true,          // 支持多语言上下文搜索

      // 搜索参数配置
      searchParameters: {
        facetFilters: [],
      },

      // 自定义搜索页面路径
      searchPagePath: 'search',
    },
    // ... 其他配置
  },
};

export default config;
```

### 高级配置：自定义搜索结果显示

如果想为图标搜索结果添加特殊样式或图标标识：

```typescript
themeConfig: {
  algolia: {
    // ... 基础配置

    // 自定义转换搜索结果
    transformItems: (items) => {
      return items.map((item) => {
        // 为图标结果添加特殊标记
        if (item.hierarchy?.lvl0 === 'Icons') {
          return {
            ...item,
            // 添加图标标识
            _isIcon: true,
            // 自定义显示文本（在图标名称前添加 emoji）
            _highlightResult: {
              ...item._highlightResult,
              hierarchy: {
                ...item._highlightResult.hierarchy,
                lvl3: {
                  value: `🎨 ${item._highlightResult.hierarchy.lvl3.value}`,
                },
              },
            },
          };
        }
        return item;
      });
    },
  },
}
```

---

## ❓ 常见问题

### Q1: 图标没有被索引怎么办？

**诊断步骤**：

1. **检查爬虫日志**
   - 查看爬虫是否访问了图标页面
   - 确认是否启用了 JavaScript 渲染（`js_render: true`）
   - 查看是否有错误信息或超时

2. **验证页面渲染**
   - 手动访问图标页面，确认图标正常显示
   - 在浏览器开发者工具中检查 DOM
   - 确认图标卡片有 `IconCard` 和 `IconName` 类

3. **调试选择器**
   - 在浏览器控制台运行以下代码测试：
   ```javascript
   // 应该返回所有图标名称元素
   document.querySelectorAll('.IconCard .IconName')

   // 应该返回所有分类标题
   document.querySelectorAll('.CategoryTitle')
   ```

4. **使用备选方案**
   - 如果爬虫方案持续失败，使用脚本直接推送（方案二）

### Q2: js_wait 时间不够怎么办？

如果 2 秒不足以让图标完全渲染，可能会导致部分图标未被索引：

**解决方案**：
- 增加 `js_wait` 值到 3-5 秒
- 在爬虫配置中修改：
  ```json
  {
    "js_wait": 5
  }
  ```

**注意**：过长的等待时间会增加爬取耗时，建议根据实际情况调整。

### Q3: 图标搜索结果的显示格式是什么？

搜索结果的层级结构：
```
Icons > 图标 > [分类名] > [图标名称]
例如: Icons > 图标 > 操作 > AddDuotone
```

用户搜索时的体验：
- 输入 "Add" → 显示所有包含 "Add" 的图标及其分类
- 点击结果 → 跳转到图标页面
- 页面会滚动到对应的图标位置（如果有锚点）

### Q4: 如何优化图标搜索的相关性？

在 Algolia Dashboard 的索引设置中配置搜索属性优先级：

```json
{
  "searchableAttributes": [
    "hierarchy.lvl3",          // 图标名称（最高优先级）
    "hierarchy.lvl2",          // 分类名称
    "hierarchy.lvl1",
    "hierarchy.lvl0",
    "content"
  ],
  "customRanking": [
    "desc(weight.page_rank)",
    "desc(weight.level)"
  ]
}
```

这确保图标名称的完全匹配优先级最高。

### Q5: 图标数据更新后如何重新索引？

**爬虫方案**：
- 在 Algolia Crawler Admin Console 中点击 "Restart crawling"
- 或者设置定时任务（Schedule）自动重新爬取

**脚本方案**：
- 重新运行 `node scripts/push-icons-to-algolia.js`
- 在 CI/CD 中自动触发（推荐）

**建议**：在 GitHub Actions 中配置部署后自动运行推送脚本。

### Q6: 如何只索引特定分类的图标？

修改 `start_urls` 中的图标页面 URL，添加分类哈希：

```json
{
  "url": "https://kubesphere.github.io/docs/icons/overview#operation",
  "selectors_key": "icons"
}
```

或者在 IconGallery 组件使用时传入 `category` 属性（需要修改代码）。

### Q7: 如何处理图标名称中的特殊字符？

图标名称如 `ArrowLeftCircleFill` 会被 Algolia 自动分词（基于驼峰命名）：
- 搜索 "Arrow" ✓
- 搜索 "Left" ✓
- 搜索 "Circle" ✓
- 搜索 "Fill" ✓

配置中的 `separatorsToIndex: "_"` 确保下划线也被正确索引，例如 `use_clipboard` 可以通过 "use" 或 "clipboard" 搜索到。

### Q8: 为什么代码块被排除了？

代码块通常不需要被全文索引，因为：
1. 它们会产生大量噪音
2. 用户通常不会搜索代码内容
3. 减少索引大小和提高搜索速度

如果需要索引代码块，可以从 `selectors_exclude` 中移除 `.theme-code-block`。

### Q9: 如何调整爬取频率？

在 Algolia Crawler Admin Console 的 "Schedule" 标签页设置定时任务：
- 推荐频率：每周一次（如果内容更新不频繁）
- 开发阶段：可以设置为每天一次
- 稳定阶段：每月一次即可

### Q10: 爬虫记录数过少或过多？

检查 `selectors` 和 `selectors_exclude` 配置：
- 过少：可能是选择器不匹配，检查 DOM 结构
- 过多：可能是排除选择器不够，添加更多需要排除的元素

在浏览器开发者工具中检查实际的 HTML 元素，确保选择器正确。

---

## 🚀 性能优化建议

### 1. 为图标页面设置更高的 page_rank

```json
{
  "url": "https://kubesphere.github.io/docs/icons/",
  "selectors_key": "icons",
  "page_rank": 2  // 提高图标页面的搜索权重
}
```

这样图标搜索结果在相关性相同时会排在前面。

### 2. 限制爬虫频率

如果图标很少更新，可以降低爬取频率：
- 每周爬取一次即可
- 减少服务器负载
- 在 Algolia Crawler 的 Schedule 设置中配置

### 3. 使用增量更新

对于大型图标库，考虑只更新变化的图标：
- 维护图标版本号
- 只推送新增或修改的图标
- 需要自定义脚本实现

### 4. 优化索引大小

- 移除不必要的 `attributesToRetrieve`
- 使用 `distinct` 功能去重
- 合理设置 `hitsPerPage` 限制

---

## 📊 监控和维护

### 定期检查

1. **每月检查一次**：
   - 索引记录数是否正常
   - 搜索功能是否正常工作
   - 图标是否被正确索引
   - 搜索响应时间是否正常

2. **图标更新时**：
   - 添加新图标后，触发重新爬取或运行推送脚本
   - 验证新图标是否被索引
   - 测试新图标是否可以被搜索到

3. **监控爬虫日志**：
   - 定期检查是否有错误
   - 确认爬取耗时是否正常
   - 关注是否有页面无法访问

### 问题排查清单

遇到问题时，按以下清单逐项检查：

- [ ] 爬虫是否启用了 JavaScript 渲染？
- [ ] 图标页面是否可以正常访问？
- [ ] IconGallery 组件是否添加了正确的 class 和 data 属性？
- [ ] 选择器配置是否与实际 DOM 结构匹配？
- [ ] `js_wait` 时间是否足够？
- [ ] 是否有选择器冲突或重复？
- [ ] Algolia 索引配额是否足够？
- [ ] API Key 权限是否正确？

### CI/CD 集成示例

在 GitHub Actions 中自动运行图标推送脚本：

```yaml
name: Update Algolia Index

on:
  push:
    branches:
      - main
    paths:
      - 'packages/icons/**'

jobs:
  update-algolia:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install algoliasearch
      - run: node docusaurus/scripts/push-icons-to-algolia.js
        env:
          ALGOLIA_APP_ID: ${{ secrets.ALGOLIA_APP_ID }}
          ALGOLIA_ADMIN_KEY: ${{ secrets.ALGOLIA_ADMIN_KEY }}
```

---

## 🌐 多语言支持

当前配置已支持多语言（中文和英文）。Algolia 会自动为不同语言的页面创建对应的记录，并在 `language` 属性中标记语言。

### 针对不同语言使用不同配置

如需为不同语言指定不同的选择器或配置：

```json
"start_urls": [
  {
    "url": "https://kubesphere.github.io/",
    "selectors_key": "zh-CN",
    "variables": {
      "language": ["zh-CN"]
    }
  },
  {
    "url": "https://kubesphere.github.io/en/",
    "selectors_key": "en",
    "variables": {
      "language": ["en"]
    }
  }
]
```

然后在 `selectors` 中为每个语言定义不同的选择器配置。

---

## 📚 参考资源

- [Algolia Crawler 官方文档](https://www.algolia.com/doc/tools/crawler/getting-started/overview/)
- [Docusaurus 搜索文档](https://docusaurus.io/docs/search)
- [Algolia DocSearch 配置参考](https://docsearch.algolia.com/docs/config-file/)
- [Algolia 搜索 API 文档](https://www.algolia.com/doc/api-reference/search-api/)

---

## 💡 方案对比总结

| 特性 | 爬虫方案 | 脚本方案 |
|------|---------|---------|
| **可靠性** | 依赖 JS 渲染，可能需要调试 | 100% 可靠 |
| **维护成本** | 低（自动化） | 中（需要配置触发） |
| **实时性** | 定时爬取 | 可即时触发 |
| **配置复杂度** | 中 | 低 |
| **适用场景** | 生产环境，定期更新 | 频繁更新，CI/CD 集成 |
| **推荐指数** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

**最佳实践**：
- **初期**：使用爬虫方案快速上线
- **遇到问题**：切换到脚本方案确保可靠性
- **长期**：两者结合，爬虫定期更新文档，脚本在图标变更时触发

---

## 🎯 总结

按照本指南配置后，你的 Kube Design 文档站点将拥有：
- ✅ 完整的文档搜索功能
- ✅ 200+ 个图标的独立索引
- ✅ 智能分词和自动补全
- ✅ 中英文双语支持
- ✅ 优秀的搜索体验

如果遇到问题，请参考"常见问题"章节，或检查爬虫日志获取更多信息。

祝你使用愉快！🎉

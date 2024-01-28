import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as i,c as o,a as e,b as s,d as n,e as t}from"./app-XcXfg5oV.js";const c={},d=t('<h1 id="_2-0-x" tabindex="-1"><a class="header-anchor" href="#_2-0-x"><span>2.0.x</span></a></h1><h2 id="_2-0-3-release" tabindex="-1"><a class="header-anchor" href="#_2-0-3-release"><span>2.0.3-RELEASE</span></a></h2><h3 id="⭐-new-features" tabindex="-1"><a class="header-anchor" href="#⭐-new-features"><span>⭐ New Features</span></a></h3><ul><li><code>Jt808Session</code> 新增如下方法: <ul><li><code>setAttribute</code></li><li><code>getAttribute</code></li><li><code>getRequiredAttribute</code></li><li><code>removeAttribute</code></li></ul></li><li><code>Jt808ServerExchange</code> 新增如下方法 <ul><li><code>removeAttribute</code></li></ul></li></ul><h3 id="🐞-bug-fixes" tabindex="-1"><a class="header-anchor" href="#🐞-bug-fixes"><span>🐞 Bug Fixes</span></a></h3>',5),u={href:"https://github.com/hylexus/jt-framework/issues/66",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"配置项默认值调整:",-1),p=t(`<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">jt808</span><span class="token punctuation">:</span>
  <span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">idle-state-handler</span><span class="token punctuation">:</span>
    <span class="token comment"># 改动原因见 https://github.com/hylexus/jt-framework/issues/66</span>
    <span class="token key atrule">writer-idle-time</span><span class="token punctuation">:</span> 0s <span class="token comment"># 由 20m 改为 0s(disabled)</span>
    <span class="token key atrule">all-idle-time</span><span class="token punctuation">:</span> 0s <span class="token comment"># 由 20m 改为 0s(disabled)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-0-3-rc1" tabindex="-1"><a class="header-anchor" href="#_2-0-3-rc1"><span>2.0.3-rc1</span></a></h2><h3 id="⭐-new-features-1" tabindex="-1"><a class="header-anchor" href="#⭐-new-features-1"><span>⭐ New Features</span></a></h3><ul><li><code>Jt808Session</code> 新增如下方法: <ul><li><code>setAttribute</code></li><li><code>getAttribute</code></li><li><code>getRequiredAttribute</code></li><li><code>removeAttribute</code></li></ul></li><li><code>Jt808ServerExchange</code> 新增如下方法 <ul><li><code>removeAttribute</code></li></ul></li></ul><h3 id="🐞-bug-fixes-1" tabindex="-1"><a class="header-anchor" href="#🐞-bug-fixes-1"><span>🐞 Bug Fixes</span></a></h3><ul><li>https://github.com/hylexus/jt-framework/issues/66</li><li>配置项默认值调整:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">jt808</span><span class="token punctuation">:</span>
  <span class="token key atrule">server</span><span class="token punctuation">:</span>
    <span class="token key atrule">idle-state-handler</span><span class="token punctuation">:</span>
      <span class="token comment"># 改动原因见 https://github.com/hylexus/jt-framework/issues/66</span>
      <span class="token key atrule">writer-idle-time</span><span class="token punctuation">:</span> 0s <span class="token comment"># 由 20m 改为 0s(disabled)</span>
      <span class="token key atrule">all-idle-time</span><span class="token punctuation">:</span> 0s <span class="token comment"># 由 20m 改为 0s(disabled)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-0-2-release" tabindex="-1"><a class="header-anchor" href="#_2-0-2-release"><span>2.0.2-RELEASE</span></a></h2><h3 id="⭐-new-features-2" tabindex="-1"><a class="header-anchor" href="#⭐-new-features-2"><span>⭐ New Features</span></a></h3><ul><li>新增 <code>Jt808RequestLifecycleListener</code></li></ul><h3 id="📔-documentation" tabindex="-1"><a class="header-anchor" href="#📔-documentation"><span>📔 Documentation</span></a></h3><ul><li>新增 <strong>Jt808RequestLifecycleListener</strong> 文档</li><li>新增 <strong>辅助工具</strong> 文档</li></ul><h3 id="❤️-contributors" tabindex="-1"><a class="header-anchor" href="#❤️-contributors"><span>❤️ Contributors</span></a></h3>`,13),b={href:"https://github.com/hylexus",target:"_blank",rel:"noopener noreferrer"},m=t('<h2 id="_2-0-2-rc2" tabindex="-1"><a class="header-anchor" href="#_2-0-2-rc2"><span>2.0.2-rc2</span></a></h2><h3 id="⭐-new-features-3" tabindex="-1"><a class="header-anchor" href="#⭐-new-features-3"><span>⭐ New Features</span></a></h3><ul><li>新增 <code>Jt808MsgBuilder</code></li><li>新增 <code>ByteArrayFieldSerializer</code></li></ul><h3 id="🔨-dependency-upgrades" tabindex="-1"><a class="header-anchor" href="#🔨-dependency-upgrades"><span>🔨 Dependency Upgrades</span></a></h3><ul><li><code>Spring-Boot</code> 版本升级到 <strong>2.5.12</strong></li></ul><h3 id="❤️-contributors-1" tabindex="-1"><a class="header-anchor" href="#❤️-contributors-1"><span>❤️ Contributors</span></a></h3>',6),f={href:"https://github.com/hylexus",target:"_blank",rel:"noopener noreferrer"},x=t('<h2 id="_2-0-2-rc1" tabindex="-1"><a class="header-anchor" href="#_2-0-2-rc1"><span>2.0.2-rc1</span></a></h2><h3 id="🐞-bug-fixes-2" tabindex="-1"><a class="header-anchor" href="#🐞-bug-fixes-2"><span>🐞 Bug Fixes</span></a></h3><ul><li>https://github.com/hylexus/jt-framework/issues/64</li></ul><h3 id="⭐-new-features-4" tabindex="-1"><a class="header-anchor" href="#⭐-new-features-4"><span>⭐ New Features</span></a></h3><ul><li>去掉 <code>EventBus</code>，业务线程池使用自定义的 <code>EventExecutorGroup</code></li><li>废弃 <code>jt808.msg-processor.thread-pool.xxx</code> 配置项，使用 <code>jt808.msg-processor.executor-group.xxx</code> 代替</li></ul><h3 id="🔨-dependency-upgrades-1" tabindex="-1"><a class="header-anchor" href="#🔨-dependency-upgrades-1"><span>🔨 Dependency Upgrades</span></a></h3><ul><li><code>Gradle</code> 版本升级到 <strong>6.8.1</strong></li><li><code>Spring-Boot</code> 版本升级到 <strong>2.5.7</strong></li><li><code>Netty</code> 版本升级到 <strong>4.1.75.Final</strong></li></ul><h3 id="❤️-contributors-2" tabindex="-1"><a class="header-anchor" href="#❤️-contributors-2"><span>❤️ Contributors</span></a></h3>',8),g={href:"https://github.com/hylexus",target:"_blank",rel:"noopener noreferrer"},_=t('<h2 id="_2-0-1-release" tabindex="-1"><a class="header-anchor" href="#_2-0-1-release"><span>2.0.1-RELEASE</span></a></h2><h3 id="🐞-bug-fixes-3" tabindex="-1"><a class="header-anchor" href="#🐞-bug-fixes-3"><span>🐞 Bug Fixes</span></a></h3><ul><li>https://github.com/hylexus/jt-framework/issues/63</li></ul><h2 id="_2-0-0-release" tabindex="-1"><a class="header-anchor" href="#_2-0-0-release"><span>2.0.0-RELEASE</span></a></h2><h3 id="⭐-new-features-5" tabindex="-1"><a class="header-anchor" href="#⭐-new-features-5"><span>⭐ New Features</span></a></h3><ul><li>注解驱动开发(支持<code>SpEL</code>)</li><li>支持消息分包</li><li>支持多版本</li></ul><h3 id="📔-documentation-1" tabindex="-1"><a class="header-anchor" href="#📔-documentation-1"><span>📔 Documentation</span></a></h3><p>新增 <strong>2.x</strong> 文档。</p><h3 id="❤️-contributors-3" tabindex="-1"><a class="header-anchor" href="#❤️-contributors-3"><span>❤️ Contributors</span></a></h3>',9),k={href:"https://github.com/dfEric",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/hylexus",target:"_blank",rel:"noopener noreferrer"};function y(w,E){const a=l("ExternalLinkIcon");return i(),o("div",null,[d,e("ul",null,[e("li",null,[e("a",u,[s("#66"),n(a)])]),h]),p,e("ul",null,[e("li",null,[e("a",b,[s("@hylexus"),n(a)])])]),m,e("ul",null,[e("li",null,[e("a",f,[s("@hylexus"),n(a)])])]),x,e("ul",null,[e("li",null,[e("a",g,[s("@hylexus"),n(a)])])]),_,e("ul",null,[e("li",null,[e("a",k,[s("@dfEric"),n(a)])]),e("li",null,[e("a",v,[s("@hylexus"),n(a)])])])])}const B=r(c,[["render",y],["__file","2.0.x.html.vue"]]);export{B as default};

const n=JSON.parse('{"key":"v-3096e4ec","path":"/category/JavaScript/16.html","title":"浅拷贝和深拷贝","lang":"zh-CN","frontmatter":{"title":"浅拷贝和深拷贝","lang":"zh-CN","author":"XXXWeii","date":"2022-03-01T14:55:00.000Z","category":["JavaScript"],"tag":["JavaScript"],"description":"浅拷贝和深拷贝 浅拷贝的实现： function shallowCopy(object) { // 只拷贝对象 if (!object || typeof object !== \\"object\\") return; // 根据 object 的类型判断是新建一个数组还是对象 let newObject = Array.isArray(object) ? [] : {}; // 遍历 object，并且判断是 object 的属性才拷贝 for (let key in object) { if (object.hasOwnProperty(key)) { newObject[key] = object[key]; } } return newObject; }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/XXXWeiiBlog/category/JavaScript/16.html"}],["meta",{"property":"og:site_name","content":"XXXWeii"}],["meta",{"property":"og:title","content":"浅拷贝和深拷贝"}],["meta",{"property":"og:description","content":"浅拷贝和深拷贝 浅拷贝的实现： function shallowCopy(object) { // 只拷贝对象 if (!object || typeof object !== \\"object\\") return; // 根据 object 的类型判断是新建一个数组还是对象 let newObject = Array.isArray(object) ? [] : {}; // 遍历 object，并且判断是 object 的属性才拷贝 for (let key in object) { if (object.hasOwnProperty(key)) { newObject[key] = object[key]; } } return newObject; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-02T10:35:38.000Z"}],["meta",{"property":"article:author","content":"XXXWeii"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2022-03-01T14:55:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-02T10:35:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"浅拷贝和深拷贝\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-01T14:55:00.000Z\\",\\"dateModified\\":\\"2023-06-02T10:35:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XXXWeii\\"}]}"]]},"headers":[],"git":{"createdTime":1685702138000,"updatedTime":1685702138000,"contributors":[{"name":"zjw977020546","email":"11487928+zjw977020546@user.noreply.gitee.com","commits":1}]},"readingTime":{"minutes":0.94,"words":283},"filePathRelative":"category/JavaScript/16.md","localizedDate":"2022年3月1日","excerpt":"<h1> 浅拷贝和深拷贝</h1>\\n<p>浅拷贝的实现：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">shallowCopy</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">object</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 只拷贝对象</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>object <span class=\\"token operator\\">||</span> <span class=\\"token keyword\\">typeof</span> object <span class=\\"token operator\\">!==</span> <span class=\\"token string\\">\\"object\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">// 根据 object 的类型判断是新建一个数组还是对象</span>\\n  <span class=\\"token keyword\\">let</span> newObject <span class=\\"token operator\\">=</span> Array<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">isArray</span><span class=\\"token punctuation\\">(</span>object<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">?</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">// 遍历 object，并且判断是 object 的属性才拷贝</span>\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> key <span class=\\"token keyword\\">in</span> object<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>object<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">hasOwnProperty</span><span class=\\"token punctuation\\">(</span>key<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      newObject<span class=\\"token punctuation\\">[</span>key<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> object<span class=\\"token punctuation\\">[</span>key<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token keyword\\">return</span> newObject<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};

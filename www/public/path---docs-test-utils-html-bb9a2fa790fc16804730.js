webpackJsonp([0xff8432601067],{"./node_modules/json-loader/index.js!./.cache/json/docs-test-utils-html.json":function(n,e){n.exports={data:{markdownRemark:{html:'<p><strong>Importing</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> ReactTestUtils <span class="token keyword">from</span> <span class="token string">\'react-dom/test-utils\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// ES6</span>\n<span class="token keyword">var</span> ReactTestUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-dom/test-utils\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// ES5 with npm</span>\n</code></pre>\n      </div>\n<h2 id="概览"><a href="#%E6%A6%82%E8%A7%88" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>概览</h2>\n<p><code>ReactTestUtils</code>可以在您选择的测试框架中轻松地测试React组件。 在 Facebook 我们使用 <a href="https://facebook.github.io/jest/">Jest</a> 来愉快地测试 JavaScript。通过 Jest 的网站<a href="http://facebook.github.io/jest/docs/tutorial-react.html#content">React Tutorial</a>来学习如何开始使用 Jest。</p>\n<blockquote>\n<p>注意：</p>\n<p>Airbnb（爱彼迎）已经发布了一个名为 Enzyme 的测试工具，该工具可以很容易地对您的 React 组件的输出进行 断言、操作和遍历。如果你正在为选择哪个单元测试工具来和 Jest 或其他测试运行器 协同工作，Enzyme值得一试<a href="http://airbnb.io/enzyme/">http://airbnb.io/enzyme/</a>。</p>\n</blockquote>\n<ul>\n<li><a href="#simulate"><code>Simulate</code></a></li>\n<li><a href="#renderintodocument"><code>renderIntoDocument()</code></a></li>\n<li><a href="#mockcomponent"><code>mockComponent()</code></a></li>\n<li><a href="#iselement"><code>isElement()</code></a></li>\n<li><a href="#iselementoftype"><code>isElementOfType()</code></a></li>\n<li><a href="#isdomcomponent"><code>isDOMComponent()</code></a></li>\n<li><a href="#iscompositecomponent"><code>isCompositeComponent()</code></a></li>\n<li><a href="#iscompositecomponentwithtype"><code>isCompositeComponentWithType()</code></a></li>\n<li><a href="#findallinrenderedtree"><code>findAllInRenderedTree()</code></a></li>\n<li><a href="#scryrendereddomcomponentswithclass"><code>scryRenderedDOMComponentsWithClass()</code></a></li>\n<li><a href="#findrendereddomcomponentwithclass"><code>findRenderedDOMComponentWithClass()</code></a></li>\n<li><a href="#scryrendereddomcomponentswithtag"><code>scryRenderedDOMComponentsWithTag()</code></a></li>\n<li><a href="#findrendereddomcomponentwithtag"><code>findRenderedDOMComponentWithTag()</code></a></li>\n<li><a href="#scryrenderedcomponentswithtype"><code>scryRenderedComponentsWithType()</code></a></li>\n<li><a href="#findrenderedcomponentwithtype"><code>findRenderedComponentWithType()</code></a></li>\n</ul>\n<h2 id="参考"><a href="#%E5%8F%82%E8%80%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>参考</h2>\n<h2 id="浅渲染"><a href="#%E6%B5%85%E6%B8%B2%E6%9F%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>浅渲染</h2>\n<p>当为 React 写单元测试时, 浅渲染会变得十分有用。浅渲染使您渲染组件的“第一层”，并且对组件的 render 方法的返回值进行断言，不用担心子组件的行为，组件并没有实例化或被渲染。浅渲染并不需要 DOM。</p>\n<blockquote>\n<p>注意：</p>\n<p>浅渲染已经被移动到了 <code>react-test-renderer/shallow</code>.<br>\n<a href="/react/docs/shallow-renderer.html">在浅渲染的参考页面了解更多信息。</a></p>\n</blockquote>\n<h2 id="其他工具"><a href="#%E5%85%B6%E4%BB%96%E5%B7%A5%E5%85%B7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>其他工具</h2>\n<h3 id="simulate"><a href="#simulate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Simulate</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>Simulate<span class="token punctuation">.</span><span class="token punctuation">{</span>eventName<span class="token punctuation">}</span><span class="token punctuation">(</span>\n  element<span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>eventData<span class="token punctuation">]</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>模拟分发一个事件到DOM节点，<code>eventData</code> 是可选的事件数据。</p>\n<p><a href="/react/docs/events.html#supported-events">任一个React支持的事件</a>都是 <code>Simulate</code> 的一个方法。</p>\n<p><strong>点击一个元素</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment" spellcheck="true">// &lt;button ref="button">...&lt;/button></span>\n<span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>button<span class="token punctuation">;</span>\nReactTestUtils<span class="token punctuation">.</span>Simulate<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>改变一个输入框（input）的值然后按下回车键（ENTER）.</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment" spellcheck="true">// &lt;input ref="input" /></span>\n<span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>input<span class="token punctuation">;</span>\nnode<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">\'giraffe\'</span><span class="token punctuation">;</span>\nReactTestUtils<span class="token punctuation">.</span>Simulate<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>\nReactTestUtils<span class="token punctuation">.</span>Simulate<span class="token punctuation">.</span><span class="token function">keyDown</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token punctuation">{</span>key<span class="token punctuation">:</span> <span class="token string">"Enter"</span><span class="token punctuation">,</span> keyCode<span class="token punctuation">:</span> <span class="token number">13</span><span class="token punctuation">,</span> which<span class="token punctuation">:</span> <span class="token number">13</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>注意：</p>\n<p>您必须提供 所有 在你的组件中正在使用的 事件属性（例如 keyCode, which,等等），因为 React 并不会为您创建这些东西。</p>\n</blockquote>\n<hr>\n<h3 id="renderintodocument"><a href="#renderintodocument" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>renderIntoDocument()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">renderIntoDocument</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>将一个 React 元素渲染到 document 中的一个独立的 DOM 节点。 <strong>这个函数需要DOM</strong></p>\n<blockquote>\n<p>注意：</p>\n<p>在导入 React 之前， 您必须拥有全局可用的 <code>window</code>, <code>window.document</code> 和 <code>window.document.createElement</code>。否则， React 会认为它不能访问 DOM 并且像 <code>setState</code> 这样的方法将不能工作。</p>\n</blockquote>\n<hr>\n<h3 id="mockcomponent"><a href="#mockcomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>mockComponent()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">mockComponent</span><span class="token punctuation">(</span>\n  componentClass<span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>mockTagName<span class="token punctuation">]</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Pass a mocked component module to this method to augment it with useful methods that allow it to be used as a dummy React component. Instead of rendering as usual, the component will become a simple <code>&#x3C;div></code> (or other tag if <code>mockTagName</code> is provided) containing any provided children.</p>\n<blockquote>\n<p>注意：</p>\n<p><code>mockComponent()</code> 是一个历史遗留的 API. 我们建议使用 <a href="/react/docs/test-utils.html#shallow-rendering">shallow rendering</a> 或 <a href="https://facebook.github.io/jest/docs/en/tutorial-react-native.html#mock-native-modules-using-jestmock"><code>jest.mock()</code></a> 来代替。</p>\n</blockquote>\n<hr>\n<h3 id="iselement"><a href="#iselement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>isElement()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">isElement</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>如果 <code>element</code> 是任一 React 元素，返回 <code>true</code>。</p>\n<hr>\n<h3 id="iselementoftype"><a href="#iselementoftype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>isElementOfType()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">isElementOfType</span><span class="token punctuation">(</span>\n  element<span class="token punctuation">,</span>\n  componentClass\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>如果 <code>element</code> 是一个类型为 <code>componentClass</code> 的 React 元素，返回 <code>true</code>。</p>\n<hr>\n<h3 id="isdomcomponent"><a href="#isdomcomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>isDOMComponent()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">isDOMComponent</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>如果 <code>instance</code> 是一个 DOM 组件（例如一个 <code>&#x3C;div></code> 或 <code>&#x3C;span></code>），返回 <code>true</code>。</p>\n<hr>\n<h3 id="iscompositecomponent"><a href="#iscompositecomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>isCompositeComponent()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">isCompositeComponent</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>如果 <code>instance</code> 是一个用户自定义的组件，例如一个类或者一个函数，返回 <code>true</code>。</p>\n<hr>\n<h3 id="iscompositecomponentwithtype"><a href="#iscompositecomponentwithtype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>isCompositeComponentWithType()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">isCompositeComponentWithType</span><span class="token punctuation">(</span>\n  instance<span class="token punctuation">,</span>\n  componentClass\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>如果 <code>instance</code> 是一个类型为 <code>componentClass</code> 的组件，返回 <code>true</code>。</p>\n<hr>\n<h3 id="findallinrenderedtree"><a href="#findallinrenderedtree" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>findAllInRenderedTree()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">findAllInRenderedTree</span><span class="token punctuation">(</span>\n  tree<span class="token punctuation">,</span>\n  test\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>遍历 <code>tree</code> 中的所有组件，并且搜集所有 <code>test(component)</code> 为 <code>true</code> 的组件。它单独使用时不是很有用，但是它被用作其他测试工具的原始数据。</p>\n<hr>\n<h3 id="scryrendereddomcomponentswithclass"><a href="#scryrendereddomcomponentswithclass" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>scryRenderedDOMComponentsWithClass()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">scryRenderedDOMComponentsWithClass</span><span class="token punctuation">(</span>\n  tree<span class="token punctuation">,</span>\n  className\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>查找渲染树中组件的所有DOM元素，找到 类名 与 <code>className</code> 相匹配的DOM组件。</p>\n<hr>\n<h3 id="findrendereddomcomponentwithclass"><a href="#findrendereddomcomponentwithclass" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>findRenderedDOMComponentWithClass()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">findRenderedDOMComponentWithClass</span><span class="token punctuation">(</span>\n  tree<span class="token punctuation">,</span>\n  className\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>和 <a href="#scryrendereddomcomponentswithclass"><code>scryRenderedDOMComponentsWithClass()</code></a> 类似，但是期望只匹有一个结果并且返回该结果，如果匹配的结果数量不等于一，则会抛出异常。</p>\n<hr>\n<h3 id="scryrendereddomcomponentswithtag"><a href="#scryrendereddomcomponentswithtag" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>scryRenderedDOMComponentsWithTag()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">scryRenderedDOMComponentsWithTag</span><span class="token punctuation">(</span>\n  tree<span class="token punctuation">,</span>\n  tagName\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>查找渲染树中组件的所有DOM元素，找到 标签名 与 <code>tagName</code> 相匹配的DOM组件。</p>\n<hr>\n<h3 id="findrendereddomcomponentwithtag"><a href="#findrendereddomcomponentwithtag" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>findRenderedDOMComponentWithTag()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">findRenderedDOMComponentWithTag</span><span class="token punctuation">(</span>\n  tree<span class="token punctuation">,</span>\n  tagName\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>和 <a href="#scryrendereddomcomponentswithtag"><code>scryRenderedDOMComponentsWithTag()</code></a> 类似，但是期望只匹有一个结果并且返回该结果，如果匹配的结果数量不等于一，则会抛出异常。</p>\n<hr>\n<h3 id="scryrenderedcomponentswithtype"><a href="#scryrenderedcomponentswithtype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>scryRenderedComponentsWithType()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">scryRenderedComponentsWithType</span><span class="token punctuation">(</span>\n  tree<span class="token punctuation">,</span>\n  componentClass\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>找到所有 实例的类型为 <code>componentClass</code> 的 组件。</p>\n<hr>\n<h3 id="findrenderedcomponentwithtype"><a href="#findrenderedcomponentwithtype" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>findRenderedComponentWithType()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">findRenderedComponentWithType</span><span class="token punctuation">(</span>\n  tree<span class="token punctuation">,</span>\n  componentClass\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>和 <a href="#scryrenderedcomponentswithtype"><code>scryRenderedComponentsWithType()</code></a> 类似，但是期望只匹有一个结果并且返回该结果，如果匹配的结果数量不等于一，则会抛出异常。</p>\n<hr>',frontmatter:{title:"Test Utilities",next:null,prev:null},fields:{path:"docs/addons-test-utils.md"}}},pathContext:{slug:"docs/test-utils.html"}}}});
//# sourceMappingURL=path---docs-test-utils-html-bb9a2fa790fc16804730.js.map
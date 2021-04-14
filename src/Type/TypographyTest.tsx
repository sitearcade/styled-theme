/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-lines-per-function */

// component

export function TypographyTest() {
  return (
    <div className="typography">
      <p>Welcome to the typography test page. This page should always look great. All tests come in two forms––inline html and the nearest markdown equivalent. They won't always align, but they should always look good.</p>
      <p>So... Let's get to it!</p>

      <h1>Paragraphs</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet enim eros. Donec venenatis et ipsum non gravida. Ut mollis mattis risus eget pulvinar. Suspendisse in pretium purus, vel feugiat orci. Donec et eleifend dui. Aliquam blandit enim non tincidunt luctus. Proin tristique libero enim, vel pulvinar lectus mattis eget. In semper nec dolor sed interdum. Nam nec augue quis urna pulvinar laoreet. Ut tristique mollis quam et suscipit.</p>
      <p>Phasellus at lacus ac mi aliquet pulvinar ut a lectus. Donec et ligula ac eros tempor varius. Donec efficitur quis metus in faucibus. Fusce non cursus libero. Vestibulum nunc purus, faucibus porta dui at, lacinia tristique justo. Duis vulputate auctor euismod. Aliquam faucibus tellus dui, sed rhoncus augue rutrum quis. Integer eu nisi feugiat, tempor arcu at, pulvinar nunc. Nunc ut turpis eget urna mollis imperdiet. Pellentesque vel dignissim neque, vitae auctor justo. Morbi egestas, orci id ornare rhoncus, libero massa ultrices velit, in interdum lacus lectus sit amet augue. Phasellus luctus pharetra metus, sed hendrerit ex gravida nec.</p>
      <p>Nulla facilisi. Ut auctor viverra lobortis. Fusce feugiat metus purus. Praesent at cursus turpis. Fusce elit lectus, laoreet in vestibulum eu, convallis dignissim nisl. Fusce dapibus nunc eu sem luctus, sit amet mattis sem pharetra. In maximus est odio, at malesuada erat ornare euismod. Morbi commodo dui quis enim faucibus, eu pretium elit porttitor. Maecenas condimentum euismod eleifend. Mauris sit amet aliquet justo. Aliquam porttitor consectetur ligula nec hendrerit. Ut a enim tincidunt, condimentum est et, elementum quam. Maecenas ante metus, congue sed tristique id, malesuada et risus.</p>

      <h1>Headings</h1>

      <h1>Heading 1 is Pretty Fun</h1>
      <h2>Heading 2 Follows You</h2>
      <h3>Heading 3 Making Tea</h3>
      <h4>Heading 4, Out the Door</h4>
      <h5>Heading 5, Still Alive</h5>
      <h6>Heading 6, Pick Up Sticks</h6>

      <h1>Headings + Paragraphs: In Which a Very Long Heading Wraps Lines To Demonstrate Line Height Issues</h1>
      <p>Vivamus id tortor interdum, facilisis risus nec, viverra erat. Quisque id auctor leo. Mauris malesuada ligula sed suscipit accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus pretium elit sed imperdiet ultrices. Aliquam mollis iaculis risus ut condimentum. Suspendisse potenti.</p>
      <h2>Heading 2 Makes It's Way Through the Long and Winding Woods</h2>
      <p>Suspendisse posuere dui tristique pretium consectetur. Phasellus quis vestibulum lorem, quis dictum arcu. Donec eu luctus justo, vel mollis mi. Nam malesuada nunc id velit aliquam, id convallis lectus sagittis. Donec scelerisque condimentum lacus, ac vehicula dolor ullamcorper mattis. Ut commodo velit scelerisque magna sagittis placerat. Nunc felis justo, tincidunt non mattis a, egestas eget nunc.</p>
      <h3>Heading 3 Carves a Turkey with No More Care than a Crow in the Corn</h3>
      <p>Ut ut convallis lorem. Phasellus leo arcu, dapibus eu orci a, vestibulum mattis odio. Sed ac dui aliquet dui scelerisque pulvinar id nec justo. Ut ac posuere erat. Nullam suscipit magna metus, vel consequat est fermentum vitae. Suspendisse vel mi volutpat, fringilla turpis quis, porta dui.</p>
      <h4>Heading 4 Dashes and Dives, Never Certain Where the Line Might End</h4>
      <p>Donec sed nunc mattis, tempor sem nec, vulputate nibh. Nunc vel risus neque. In eu orci nisl. Curabitur viverra et neque ac finibus. Quisque arcu est, commodo at libero et, auctor tincidunt lectus. Aenean convallis tempus nisl quis vulputate.</p>
      <h5>Heading 5 Makes the Case for Very Long Lines Rather Succinctly and Without Much Ado</h5>
      <p>Praesent pharetra luctus ipsum, vitae ultrices nisl tempus sed. Nunc ultricies euismod lacus, finibus faucibus neque viverra in. Maecenas mattis ante ut molestie ultrices. Vestibulum nibh metus, tempor et fermentum nec, dictum in erat. Proin eros ante, congue sit amet dapibus accumsan, maximus sit amet nibh. Cras varius imperdiet posuere. Etiam elementum posuere elit, a eleifend nulla tristique eu.</p>
      <h6>Heading 6 is Small and Tight, but That's No Reason to Doubt It's Skill as a Heading, Is It</h6>
      <p>Integer orci justo, vehicula ut vulputate iaculis, sollicitudin et purus. Vivamus est tortor, eleifend sit amet volutpat quis, pretium eget lacus. In varius sapien eget turpis congue, non lobortis odio convallis. Maecenas orci nulla, elementum at placerat quis, porttitor tristique orci. In quis tincidunt felis. Morbi varius mi vitae lacinia molestie.</p>

      <h1>Inline elements</h1>

      <h2><code>&lt;br /&gt;</code> and <code>&lt;wbr /&gt;</code></h2>

      <p>In markdown, you can add a line-break with a single return,
        like so,
        or with a <code>&lt;br /&gt;</code> tag,<br />like so.
      </p>
      <p><code>&lt;wbr /&gt;</code> is much more interesting. It tells the browser where to break long words when the words are too long for the line. It's invisible otherwise. Try let<wbr />me<wbr />not<wbr />on<wbr />the<wbr />marriage<wbr />of<wbr />true<wbr />minds<wbr />commit<wbr />impediments.</p>

      <h2><code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> -- <code>**strong**</code> and <code>_em_</code></h2>

      <p>Lorem markdownum simul iuvenci munusque corve induerat <strong>videri</strong>, utilis gurgite <em>duris</em> urbem umoribus corpora pocula suas quarum me sub. Vulnera cavas, et populis et tumultus aperit mellaque et <strong>gentes</strong> cultro? Est pars, <em>avidamque</em> quid nulli, monte ingenti sopita pampinus, duo sum livor et.</p>
      <p>Interestingly, <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> tags <i>still</i> get styled, but you <b>shouldn't</b> use them anymore.</p>

      <h2><code>&lt;cite&gt;</code> and <code>&lt;q&gt;</code></h2>

      <p><code>&lt;cite&gt;</code> is useful for citing works like <cite>Oliver Altair's American Alchemy</cite>.</p>
      <p>You can also cite a quote using the <code>&lt;q&gt;</code> tag. E.G. <code>&lt;q cite=&quot;The Wizard of Oz&quot;&gt;There's no place like home&lt;/q&gt;</code> yields <q cite="The Wizard of Oz">There's no place like home</q>.</p>
      <p>Another cool thing about the <code>&lt;q&gt;</code> tag is that it will alternate single- and double-quotes for you. <q><q><q>Useful!</q> is what she said</q>, he said</q></p>

      <h2><code>&lt;dfn&gt;</code> and <code>&lt;abbr&gt;</code></h2>

      <p><code>&lt;dfn&gt;</code> is used to indicate the specified term is defined in the surrounding text, such as to say that <dfn>American Alchemy</dfn> is a historical fantasy series.</p>
      <p><code>&lt;abbr&gt;</code> defines an abbreviation as the contents of the title attribute. So <code>&lt;abbr title=&quot;Mike Stop Continues&quot;&gt;MSC&lt;/abbr&gt;</code> would tell bots and screen-readers what <abbr title="Mike Stop Continues">MSC</abbr> stands for.</p>

      <h2><code>&lt;time&gt;</code> and <code>&lt;data&gt;</code></h2>

      <p><code>&lt;time&gt;</code> is used when telling both a human and a bot the time. E.G. <code>&lt;time datetime=&quot;2012-12-21&quot;&gt;December 21, 2012&lt;/time&gt;</code> yields <time dateTime="2012-12-21">December 21, 2012</time>.</p>
      <p><code>&lt;data&gt;</code> is the generic version, that offers a programmatic representation of any data for a bot. E.G. <code>&lt;data value=&quot;#FF0000&quot;&gt;red&lt;/data&gt;</code> yields <data value="#FF0000">red</data>.</p>

      <h2><code>&lt;sup&gt;</code> and <code>&lt;sub&gt;</code></h2>

      <p>It's possible to add superscript<sup>1</sup> and subscript<sub>2</sub> to text. You can even go deep and weird: Super<sup>up<sup>top</sup></sup> and Sub<sub>down<sub>low</sub></sub>.</p>

      <h2><code>&lt;ins&gt;</code>, <code>&lt;del&gt;</code>, and <code>&lt;mark&gt;</code></h2>

      <p>These tags are used for denoting changes. You can <ins>insert</ins> text, <del>delete</del> text, or <mark>mark</mark> text. Generally, if a change would lead to confusion, it's good to indicate the change to users.</p>

      <h2><code>&lt;code&gt;</code>, <code>&lt;samp&gt;</code>, <code>&lt;kbd&gt;</code>, and <code>&lt;var&gt;</code> -- <code>&lt;code&gt;code&lt;/code&gt;</code></h2>

      <p>These tags are for tech-related information.</p>
      <p><code>&lt;code&gt;</code> indicates literal <code>code();</code>, and can be indicated with <code>back-ticks</code> as well.</p>
      <p><code>&lt;samp&gt;</code> indicates the <em>output</em> of a computer program, such as <samp>404 Not Found</samp>.</p>
      <p><code>&lt;kbd&gt;</code> indicates a keyboard action. E.G. copy the selected text to the clipboard using <kbd>CMD + C</kbd>. Yeah, there's a tag for this.</p>
      <p><code>&lt;var&gt;</code> indicates the name of a variable. Let <var>X</var> stand for &quot;not terribly useful.&quot;</p>

      <h2><code>&lt;u&gt;</code> and <code>&lt;s&gt;</code> -- <code>__unarticulated__</code> and <code>~~strike-through~~</code></h2>

      <p>Yes, <code>&lt;u&gt;</code> means <code>unarticulated</code>. <code>&lt;u&gt;</code> is great for indicated a <u>spelling error</u> or otherwise <strong>incomprehensible</strong> value. <code>&lt;s&gt;</code> is a generic <s>strike-through</s>, mostly useful for gags, as you would <del>normally</del> preferably use <code>&lt;del&gt;</code>.</p>

      <h2><code>&lt;small&gt;</code></h2>

      <p><code>&lt;small&gt;</code> is technically for the &quot;fine-print&quot;, but don't ever use it.</p>
      <p><small>If you must, enclose a complete paragraph with it.</small></p>

      <h1>Media elements</h1>

      <h2>Oembed links</h2>

      <p>Oembeds are interactive content provided by other platforms. It's what allows us to easily embed YouTube videos or tweets into our articles.</p>
      <p>To add oembed content to a post, just paste the link, all by itself, on its own line.</p>
      <p><a href="https://www.youtube.com/watch?v=4tN1jFFy_08">https://www.youtube.com/watch?v=4tN1jFFy_08</a></p>
      <p><a href="https://soundcloud.com/mikestopcontinues/kick-off-demo">https://soundcloud.com/mikestopcontinues/kick-off-demo</a></p>
      <p><a href="https://www.flickr.com/photos/garryknight/50468521923">https://www.flickr.com/photos/garryknight/50468521923</a></p>
      <h2><code>&lt;img /&gt;</code> -- <code>![Alt Text](http://image.url/file.jpg)</code></h2>
      <p>Images can be included in two ways. <code>&lt;img src=&quot;/file.jpg&quot; alt=&quot;Image&quot; /&gt;</code> is equivalent to <code>![Image](/file.jpg)</code>.</p>
      <p>Here's HTML:</p>
      <p><img alt="Yaktocat" src="https://octodex.github.com/images/yaktocat.png" /></p>
      <p>And here's markdown:</p>
      <p><img alt="Yaktocat" src="https://octodex.github.com/images/yaktocat.png" /></p>
      <h2><code>&lt;picture&gt;</code></h2>
      <p><code>&lt;picture&gt;</code> allows us to use advanced image formats or custom sizes without breaking anyone's experience...</p>
      <pre>
        <code className="lang-markdown"><span>&lt;<span>picture</span>&gt;</span>
          <span>&lt;<span>source</span> <span className="hljs-attr">srcset</span>=<span className="hljs-string">"https://interactive-examples.mdn.mozilla.net/media/cc0-images/surfer-240-200.jpg"</span> <span className="hljs-attr">media</span>=<span className="hljs-string">"(min-width: 800px)"</span>&gt;</span>
          <span>&lt;<span>img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"https://interactive-examples.mdn.mozilla.net/media/cc0-images/painted-hand-298-332.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">"Surfer"</span> /&gt;</span>
          <span>&lt;/<span>picture</span>&gt;</span>
        </code>
      </pre>
      <picture>
        <source media="(min-width: 800px)" srcSet="https://interactive-examples.mdn.mozilla.net/media/cc0-images/surfer-240-200.jpg" />
        <img alt="Surfer" src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/painted-hand-298-332.jpg" />
      </picture>

      <h2><code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code></h2>
      <p><code>&lt;audio&gt;</code> allows users to play a raw audio file...</p>
      <pre>
        <code className="lang-markdown"><span>&lt;<span>audio</span> <span className="hljs-attr">controls</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"</span>&gt;</span>
          Your browser does not support the <span>&lt;<span>code</span>&gt;</span>audio<span>&lt;/<span>code</span>&gt;</span> element. <span>&lt;/<span>audio</span>&gt;</span>
        </code>
      </pre>
      <audio controls src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3">
        Your browser does not support the <code>audio</code> element.
      </audio>

      <p><code>&lt;video&gt;</code> allows users to play a raw video file...</p>
      <pre>
        <code className="lang-markdown">&lt;video controls width=<span className="hljs-string">"250"</span>&gt;
          &lt;source src=<span className="hljs-string">"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"</span> <span className="hljs-class"><span className="hljs-keyword">type</span></span>=<span className="hljs-string">"video/webm"</span>&gt;
          &lt;source src=<span className="hljs-string">"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"</span> <span className="hljs-class"><span className="hljs-keyword">type</span></span>=<span className="hljs-string">"video/mp4"</span>&gt;
        <span className="hljs-type">Sorry</span>, your browser doesn<span className="hljs-symbol">'t</span> support embedded videos.
          &lt;/video&gt;
        </code>
      </pre>
      <video controls width="250">
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm" />
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>

      <h2><code>&lt;object&gt;</code> and <code>&lt;iframe&gt;</code></h2>
      <p><code>&lt;object&gt;</code> will be described some other time...</p>
      <p><code>&lt;iframe&gt;</code> will be described some other time...</p>
      <h2><code>&lt;svg&gt;</code></h2>
      <p>You can write SVG directly into the page:</p>
      <pre>
        <code className="lang-svg">&lt;svg <span className="hljs-built_in">width</span>=<span className="hljs-string">"100px"</span> <span className="hljs-built_in">height</span>=<span className="hljs-string">"100px"</span>&gt;
          &lt;<span className="hljs-built_in">circle</span> cx=<span className="hljs-string">"100"</span> cy=<span className="hljs-string">"100"</span> r=<span className="hljs-string">"100"</span> <span className="hljs-built_in">fill</span>=<span className="hljs-string">"#1fa3ec"</span> /&gt;
          &lt;/svg&gt;
        </code>
      </pre>
      <p>See here:</p>
      <svg height="100px" width="100px">
        <circle cx="100" cy="100" fill="#1fa3ec" r="100" />
      </svg>

      <h2><code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code></h2>
      <p><code>&lt;figure&gt;</code> is useful as a stylistic element as well as to convey information to bots and screen-readers. It's typically used with <code>&lt;figcaption&gt;</code> to add contextual information.</p>
      <pre>
        <code className="lang-markdown"><span className="xml"><span>&lt;<span>figure</span>&gt;</span></span>

          ![<span className="hljs-string">Yaktocat</span>](<span className="hljs-link">https://octodex.github.com/images/yaktocat.png</span>)

          <span className="xml"><span>&lt;<span>figcaption</span>&gt;</span></span>A yaktocat, as seen in the wild<span className="xml"><span>&lt;/<span>figcaption</span>&gt;</span></span>
          <span className="xml"><span>&lt;/<span>figure</span>&gt;</span></span>
        </code>
      </pre>
      <p>Which renders as:</p>
      <figure>

        <img alt="Yaktocat" src="https://octodex.github.com/images/yaktocat.png" />

        <figcaption>A yaktocat, as seen in the wild</figcaption>
      </figure>

      <h1>Block-level Elements</h1>
      <h2><code>&lt;blockquote&gt;</code> -- <code>&gt; Block quotes</code></h2>
      <p>Blockquotes are very useful, and very easy to do with markdown. See:</p>
      <pre>
        <code className="lang-markdown">&gt; `&gt;` begins a paragraph within a blockquote.
          &gt;
          &gt; Use an empty line beginning <span className="hljs-keyword">with</span> a `&gt;` <span className="hljs-keyword">to</span> start a <span className="hljs-keyword">new</span> paragraph.
          &gt;
          &gt; Line breaks work <span className="hljs-keyword">as</span> normal,
          &gt; <span className="hljs-keyword">or</span> <span className="hljs-keyword">by</span> <span className="hljs-keyword">using</span> `&lt;br /&gt;`, such <span className="hljs-keyword">as</span>&lt;br /&gt;here.
          &gt;
          &gt; &gt; <span className="hljs-keyword">And</span> you can deeply nest blockquotes...
          &gt; &gt; &gt; Don<span className="hljs-comment">'t be afraid...</span>
          &gt; &gt; &gt; &gt; The further you go, the further you can go.
          &gt;
          &gt; <span className="hljs-keyword">And</span> at the <span className="hljs-keyword">end</span>, feel free <span className="hljs-keyword">to</span> attribute your blockquote <span className="hljs-keyword">with</span> a `&lt;cite&gt;` tag, <span className="hljs-keyword">like</span> so...
          &gt;
          &gt; &lt;cite&gt;Mike <span className="hljs-keyword">Stop</span> Continues&lt;/cite&gt;
        </code>
      </pre>
      <p>Results in:</p>
      <blockquote>
        <p><code>&gt;</code> begins a paragraph within a blockquote.</p>
        <p>Use an empty line beginning with a <code>&gt;</code> to start a new paragraph.</p>
        <p>Line breaks work as normal,
          or by using <code>&lt;br /&gt;</code>, such as<br />here.
        </p>
        <blockquote>
          <p>And you can deeply nest blockquotes...</p>
          <blockquote>
            <p>Don't be afraid...</p>
            <blockquote>
              <p>The further you go, the further you can go.</p>
            </blockquote>
          </blockquote>
        </blockquote>
        <p>And at the end, feel free to attribute your blockquote with a <code>&lt;cite&gt;</code> tag, like so...</p>
        <p><cite>Mike Stop Continues</cite></p>
      </blockquote>
      <p>If the <code>&gt;</code> characters are too messy, you can do the same thing with pure HTML. And remember if you include empty lines, you can write the content of the <code>&lt;blockquote&gt;</code> in markdown.</p>
      <pre>
        <code className="lang-markdown"><span className="hljs-symbol">&lt;blockquote&gt;</span>

          This <span className="hljs-keyword">is</span> <span className="hljs-keyword">a</span> <span className="hljs-built_in">complete</span> paragraph.

          Using the `<span className="hljs-symbol">&lt;blockquote&gt;</span>` <span className="hljs-keyword">tag</span> allows you
          <span className="hljs-keyword">to</span> use easy <span className="hljs-built_in">line</span>-<span className="hljs-keyword">break</span>
          <span className="hljs-keyword">syntax</span>.

          And of course, you can still end with <span className="hljs-keyword">a</span> citation:

          <span className="hljs-symbol">&lt;cite&gt;</span>Oliver Altair&lt;/cite&gt;

          &lt;/blockquote&gt;
        </code>
      </pre>
      <p>Which renders:</p>
      <blockquote>

        This is a complete paragraph.

        Using the <code>&lt;blockquote&gt;</code> tag allows you
        to use easy line-break
        syntax.

        And of course, you can still end with a citation:

        <cite>Oliver Altair</cite>

      </blockquote>

      <h2><code>&lt;pre&gt;</code></h2>
      <p>Sometimes, you want a block of pre-formated text. There's a few ways to do this with markdown and HTML.</p>
      <p>The most basic form is just to use the <code>&lt;pre&gt;</code> tag itself, no blank spaces necessary:</p>
      <pre>
        In **pre**, there is only line-breaks.
        No paragraphs.

        No spaces necessary.
      </pre>

      <p>However the easiest syntax is actually to &quot;fence&quot; pre-formatted blocks with triple-backticks:</p>
      <pre>
        ```
        so much depends
        upon

        a red wheel
        barrow

        glazed with rain
        water

        beside the white
        chickens
        ```
      </pre>

      <p>Rendering as:</p>
      <pre>
        <code className="lang-markdown">so much depends
          upon

          <span className="hljs-keyword">a</span> red wheel
          barrow

          glazed <span className="hljs-keyword">with</span> rain
          water

          beside <span className="hljs-keyword">the</span> white
          chickens
        </code>
      </pre>
      <h2><code>&lt;address&gt;</code></h2>
      <p>This element tells bots to process the content of the block as contact info of some kind. It's probably best to mix HTML and markdown for this, as you can put all sorts of other content inside, assuming you have an empty line on either side of your markdown.</p>
      <pre>
        <code className="lang-markdown"><span className="xml"><span>&lt;<span>address</span>&gt;</span></span>

          [<span className="hljs-string">email@example.com</span>](<span className="hljs-link">mailto:email@example.com</span>)
          Example, Inc
          1234 Somewhere Street
          Brooklyn, NY 11223
          USA

          <span className="xml"><span>&lt;/<span>address</span>&gt;</span></span>
        </code>
      </pre>
      <p>Which renders as:</p>
      <address>

        <a href="mailto:email@example.com">email@example.com</a>
        Example, Inc
        1234 Somewhere Street
        Brooklyn, NY 11223
        USA

      </address>

      <h2><code>&lt;hr /&gt;</code> -- <code>----</code></h2>
      <p>Horizonal rules!</p>
      <hr />

      <p>Four dashes are the markdown way...</p>
      <hr />
      <p>They never go out of style.</p>
      <h1>Lists</h1>
      <p>Lists are way easier to write using markdown and indentation, but HTML is also supported.</p>
      <h2>Ordered lists: <code>&lt;ol&gt;&lt;li&gt;&lt;/ol&gt;</code> -- <code>1. Item</code></h2>
      <p>In HTML, wrap your <code>&lt;li&gt;List Items&lt;/li&gt;</code> in <code>&lt;ol&gt;</code>:</p>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ol>

      <p>In markdown, simply number the lines. The numbers are self-correcting, and this is useful if you don't want to renumber every time you add an item to the list. Just use <code>1.</code> over and over again:</p>
      <pre>
        <code className="lang-md">
          <span className="hljs-number">1.</span> Item <span className="hljs-number">1</span>
          <span className="hljs-number">1.</span> Item <span className="hljs-number">2</span>
          <span className="hljs-number">1.</span> Item <span className="hljs-number">3</span>
        </code>
      </pre>
      <p>Renders as:</p>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ol>
      <h2>Unordered lists: <code>&lt;ul&gt;&lt;li&gt;&lt;/ul&gt;</code> -- <code>* Item</code></h2>
      <p>In HTML, wrap your <code>&lt;li&gt;List Items&lt;/li&gt;</code> in <code>&lt;ul&gt;</code>:</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>

      <p>In markdown, begin your lines with <code>*</code>. You can also use <code>-</code>, but don't make it a habit.</p>
      <pre>
        <code className="lang-md">* <span className="hljs-keyword">Item </span><span className="hljs-number">1</span>
          * <span className="hljs-keyword">Item </span><span className="hljs-number">2</span>
          * <span className="hljs-keyword">Item </span><span className="hljs-number">3</span>
        </code>
      </pre>
      <p>Renders as:</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <h2>Nesting lists and mixing types</h2>
      <p>It's easiest to nest lists (even of different types) using markdown. Just indent the nested lists like so:</p>
      <pre>
        <code className="lang-md">* Item <span className="hljs-number">1</span>
          * Unordered
          * Children
          * Item <span className="hljs-number">2</span>
          <span className="hljs-number">1.</span> Ordered
          <span className="hljs-number">1.</span> Children
        </code>
      </pre>
      <p>Resulting in:</p>
      <ul>
        <li>Item 1<ul>
          <li>Unordered</li>
          <li>Children</li>
                  </ul>
        </li>
        <li>Item 2<ol>
          <li>Ordered</li>
          <li>Children</li>
                  </ol>
        </li>
      </ul>
      <p>In HTML, that looks like this:</p>
      <pre>
        <code className="lang-html"><span>&lt;<span>ul</span>&gt;</span>
          <span>&lt;<span>li</span>&gt;</span>
          Item 1
          <span>&lt;<span>ul</span>&gt;</span>
          <span>&lt;<span>li</span>&gt;</span>Unordered<span>&lt;/<span>li</span>&gt;</span>
          <span>&lt;<span>li</span>&gt;</span>Children<span>&lt;/<span>li</span>&gt;</span>
          <span>&lt;/<span>ul</span>&gt;</span>
          <span>&lt;/<span>li</span>&gt;</span>
          <span>&lt;<span>li</span>&gt;</span>
          Item 2
          <span>&lt;<span>ol</span>&gt;</span>
          <span>&lt;<span>li</span>&gt;</span>Ordered<span>&lt;/<span>li</span>&gt;</span>
          <span>&lt;<span>li</span>&gt;</span>Children<span>&lt;/<span>li</span>&gt;</span>
          <span>&lt;/<span>ol</span>&gt;</span>
          <span>&lt;/<span>li</span>&gt;</span>
          <span>&lt;/<span>ul</span>&gt;</span>
        </code>
      </pre>
      <p>See:</p>
      <ul>
        <li>
          Item 1
          <ul>
            <li>Unordered</li>
            <li>Children</li>
          </ul>
        </li>
        <li>
          Item 2
          <ol>
            <li>Ordered</li>
            <li>Children</li>
          </ol>
        </li>
      </ul>

      <h2>Definition lists: <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>, and <code>&lt;dd&gt;</code></h2>
      <p>Definition lists are like glossaries. You can only write them in HTML, like so:</p>
      <pre>
        <code className="lang-html">&lt;<span className="hljs-built_in">dl</span>&gt;
          &lt;<span className="hljs-built_in">dt</span>&gt;<span className="hljs-built_in">dl</span>&lt;/<span className="hljs-built_in">dt</span>&gt;
          &lt;<span className="hljs-built_in">dd</span>&gt;Definition List&lt;/<span className="hljs-built_in">dd</span>&gt;

          &lt;<span className="hljs-built_in">dt</span>&gt;<span className="hljs-built_in">dt</span>&lt;/<span className="hljs-built_in">dt</span>&gt;
          &lt;<span className="hljs-built_in">dd</span>&gt;Definition Term&lt;/<span className="hljs-built_in">dd</span>&gt;

          &lt;<span className="hljs-built_in">dt</span>&gt;<span className="hljs-built_in">dd</span>&lt;/<span className="hljs-built_in">dt</span>&gt;
          &lt;<span className="hljs-built_in">dd</span>&gt;Definition Definition&lt;/<span className="hljs-built_in">dd</span>&gt;
          &lt;<span className="hljs-built_in">dd</span>&gt;Multiple definitions supported&lt;/<span className="hljs-built_in">dd</span>&gt;
          &lt;/<span className="hljs-built_in">dl</span>&gt;
        </code>
      </pre>
      <p>Which renders as:</p>
      <dl>
        <dt>dl</dt>
        <dd>Definition List</dd>

        <dt>dt</dt>
        <dd>Definition Term</dd>

        <dt>dd</dt>
        <dd>Definition Definition</dd>
        <dd>Multiple definitions supported</dd>
      </dl>

      <h1>Tables</h1>
      <h2>Markdown tables</h2>
      <p>Markdown tables are easier to work with, but they're less expressive than their HTML equivalents. Here's literally everything you can do with markdown tables:</p>
      <pre>
        <code className="lang-markdown">| line below | makes this line | a header |  !  |
          | <span className="hljs-symbol">:---------</span> | <span className="hljs-symbol">:-------------</span>: | -------: | --- |
          | align left `<span className="hljs-symbol">:---`</span> | align center `<span className="hljs-symbol">:---</span><span className="hljs-symbol">:`</span> | align right `---<span className="hljs-symbol">:`</span> | default `---` |
        </code>
      </pre>
      <p>Renders as:</p>
      <table>
        <thead>
          <tr>
            <th style={{textAlign: 'left'}}>line below</th>
            <th style={{textAlign: 'center'}}>makes this line</th>
            <th style={{textAlign: 'right'}}>a header</th>
            <th>!</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{textAlign: 'left'}}>align left <code>:---</code></td>
            <td style={{textAlign: 'center'}}>align center <code>:---:</code></td>
            <td style={{textAlign: 'right'}}>align right <code>---:</code></td>
            <td>default <code>---</code></td>
          </tr>
        </tbody>
      </table>
      <p>It's the equivalent of:</p>
      <pre>
        <code className="lang-html"><span>&lt;<span>table</span>&gt;</span>
          <span>&lt;<span>thead</span>&gt;</span>
          <span>&lt;<span>tr</span>&gt;</span>
          <span>&lt;<span>th</span> <span className="hljs-attr">align</span>=<span className="hljs-string">"left"</span>&gt;</span>line below<span>&lt;/<span>th</span>&gt;</span>
          <span>&lt;<span>th</span> <span className="hljs-attr">align</span>=<span className="hljs-string">"center"</span>&gt;</span>makes this line<span>&lt;/<span>th</span>&gt;</span>
          <span>&lt;<span>th</span> <span className="hljs-attr">align</span>=<span className="hljs-string">"right"</span>&gt;</span>a header<span>&lt;/<span>th</span>&gt;</span>
          <span>&lt;<span>th</span>&gt;</span>!<span>&lt;/<span>th</span>&gt;</span>
          <span>&lt;/<span>tr</span>&gt;</span>
          <span>&lt;/<span>thead</span>&gt;</span>

          <span>&lt;<span>tbody</span>&gt;</span>
          <span>&lt;<span>tr</span>&gt;</span>
          <span>&lt;<span>td</span> <span className="hljs-attr">align</span>=<span className="hljs-string">"left"</span>&gt;</span>align left <span>&lt;<span>code</span>&gt;</span>:---<span>&lt;/<span>code</span>&gt;</span><span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span> <span className="hljs-attr">align</span>=<span className="hljs-string">"center"</span>&gt;</span>align center <span>&lt;<span>code</span>&gt;</span>:---:<span>&lt;/<span>code</span>&gt;</span><span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span> <span className="hljs-attr">align</span>=<span className="hljs-string">"right"</span>&gt;</span>align right <span>&lt;<span>code</span>&gt;</span>---:<span>&lt;/<span>code</span>&gt;</span><span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>default <span>&lt;<span>code</span>&gt;</span>---<span>&lt;/<span>code</span>&gt;</span><span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;/<span>tr</span>&gt;</span>
          <span>&lt;/<span>tbody</span>&gt;</span>
          <span>&lt;/<span>table</span>&gt;</span>
        </code>
      </pre>

      <h2>HTML tables</h2>
      <p>HTML tables support <code>&lt;tfoot&gt;</code> and <code>&lt;caption&gt;</code> elements. You can also use <code>&lt;th&gt;</code> cells within the body for row headings. Remember not to add empty lines unless you want to trigger markdown parsing.</p>
      <pre>
        <code className="lang-html"><span>&lt;<span>table</span>&gt;</span>
          <span>&lt;<span>caption</span>&gt;</span>About two authors<span>&lt;/<span>caption</span>&gt;</span>
          <span>&lt;<span>thead</span>&gt;</span>
          <span>&lt;<span>tr</span>&gt;</span>
          <span>&lt;<span>th</span>&gt;</span>Book<span>&lt;/<span>th</span>&gt;</span>
          <span>&lt;<span>th</span>&gt;</span>Author<span>&lt;/<span>th</span>&gt;</span>
          <span>&lt;<span>th</span>&gt;</span>Genre<span>&lt;/<span>th</span>&gt;</span>
          <span>&lt;<span>th</span>&gt;</span>Pages<span>&lt;/<span>th</span>&gt;</span>
          <span>&lt;/<span>tr</span>&gt;</span>
          <span>&lt;/<span>thead</span>&gt;</span>
          <span>&lt;<span>tbody</span>&gt;</span>
          <span>&lt;<span>tr</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>Silver &amp; Bone<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>Oliver Altair<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>Urban Fantasy<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>250<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;/<span>tr</span>&gt;</span>
          <span>&lt;<span>tr</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>Ice &amp; Blood<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>Oliver Altair<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>Urban Fantasy<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>250<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;/<span>tr</span>&gt;</span>
          <span>&lt;<span>tr</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>Underworld<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>Mike Stop Continues<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>Literary Fiction<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>250<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;/<span>tr</span>&gt;</span>
          <span>&lt;<span>tr</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>Firestarter<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>Mike Stop Continues<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>Urban Fantasy<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;<span>td</span>&gt;</span>250<span>&lt;/<span>td</span>&gt;</span>
          <span>&lt;/<span>tr</span>&gt;</span>
          <span>&lt;/<span>tbody</span>&gt;</span>
          <span>&lt;<span>tfoot</span>&gt;</span>
          <span>&lt;<span>tr</span>&gt;</span>
          <span>&lt;<span>th</span>&gt;</span>Total<span>&lt;/<span>th</span>&gt;</span>
          <span>&lt;<span>th</span>&gt;</span>2<span>&lt;/<span>th</span>&gt;</span>
          <span>&lt;<span>th</span>&gt;</span>2<span>&lt;/<span>th</span>&gt;</span>
          <span>&lt;<span>th</span>&gt;</span>1000<span>&lt;/<span>th</span>&gt;</span>
          <span>&lt;/<span>tr</span>&gt;</span>
          <span>&lt;/<span>tfoot</span>&gt;</span>
          <span>&lt;/<span>table</span>&gt;</span>
        </code>
      </pre>
      <p>Which renders as:</p>
      <table>
        <caption>About two authors</caption>
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Pages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Silver &amp; Bone</td>
            <td>Oliver Altair</td>
            <td>Urban Fantasy</td>
            <td>250</td>
          </tr>
          <tr>
            <td>Ice &amp; Blood</td>
            <td>Oliver Altair</td>
            <td>Urban Fantasy</td>
            <td>250</td>
          </tr>
          <tr>
            <td>Underworld</td>
            <td>Mike Stop Continues</td>
            <td>Literary Fiction</td>
            <td>250</td>
          </tr>
          <tr>
            <td>Firestarter</td>
            <td>Mike Stop Continues</td>
            <td>Urban Fantasy</td>
            <td>250</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th>2</th>
            <th>2</th>
            <th>1000</th>
          </tr>
        </tfoot>
      </table>

      <h1>Forms</h1>
      <p>Forms gotta look good. What they look like will vary across the site, but here's the defaults:</p>
      <form autoComplete="off">
        <fieldset>
          <legend>Inputs</legend>
          <div>
            <label htmlFor="text">Text</label>
            <input name="text" type="text" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input autoComplete="false" name="password" type="password" />
          </div>
          <div>
            <label htmlFor="url">URL</label>
            <input name="url" placeholder="https://example.com" type="url" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" />
          </div>
          <div>
            <label htmlFor="tel">Telephone Number</label>
            <input name="tel" type="tel" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <input name="number" type="number" />
          </div>
          <div>
            <label htmlFor="color">Color</label>
            <input name="color" type="color" />
          </div>
          <div>
            <label htmlFor="file">File</label>
            <input name="file" type="file" />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <input name="time" type="time" />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input name="date" type="date" />
          </div>
          <div>
            <label htmlFor="datetime-local">Datetime-Local</label>
            <input name="datetime-local" type="datetime-local" />
          </div>
          <div>
            <label htmlFor="month">Month</label>
            <input name="month" type="month" />
          </div>
          <div>
            <label htmlFor="week">Week</label>
            <input name="week" type="week" />
          </div>
          <div>
            <label htmlFor="search">Search</label>
            <input name="search" type="search" />
          </div>
          <div>
            <label htmlFor="disabled">Disabled</label>
            <input disabled name="disabled" type="text" />
          </div>
          <div>
            <label htmlFor="readonly">Read-only</label>
            <input readOnly name="readonly" type="text" />
          </div>
          <div>
            <label htmlFor="invalid">Invalid</label>
            <input className="invalid" name="invalid" type="text" />
          </div>
          <div>
            <label htmlFor="hidden">Hidden</label>
            <input name="hidden" type="hidden" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Other</legend>
          <div>
            <label htmlFor="range">Range</label>
            <input name="range" type="range" />
          </div>
          <div>
            <label htmlFor="textarea">Textarea</label>
            <textarea name="textarea" />
          </div>
          <div>
            <label htmlFor="select">Select</label>
            <div className="select">
              <select name="select">
                <option>Red</option>
                <option>Yellow</option>
                <option>Blue</option>
                <optgroup label="Secondary">
                  <option>Orange</option>
                  <option>Green</option>
                  <option>Purple</option>
                </optgroup>
                <option disabled>Disabled</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="checkbox">Checkboxes</label>
            <label className="option" htmlFor="checkbox1">
              <input defaultChecked name="checkbox" type="checkbox" />{' '}
              Choice A
            </label>
            <label className="option" htmlFor="checkbox2">
              <input name="checkbox" type="checkbox" />{' '}
              Choice B
            </label>
            <label className="option" htmlFor="checkbox3">
              <input name="checkbox" type="checkbox" />{' '}
              Choice C
            </label>
          </div>
          <div>
            <label htmlFor="radio">Radio Buttons</label>
            <label className="option" htmlFor="radio1">
              <input defaultChecked name="radio" type="radio" />{' '}
              Choice A
            </label>
            <label className="option" htmlFor="radio2">
              <input name="radio" type="radio" />{' '}
              Choice B
            </label>
            <label className="option" htmlFor="radio3">
              <input name="radio" type="radio" />{' '}
              Choice C
            </label>
          </div>
        </fieldset>
      </form>

      <h1>Links</h1>
      <div>
        <label>links</label>
        <a href="/">none</a>
        <a className="purple" href="/">purple</a>
        <a className="blue" href="/">blue</a>
        <a className="green" href="/">green</a>
        <a className="yellow" href="/">yellow</a>
        <a className="orange" href="/">orange</a>
        <a className="red" href="/">red</a>
      </div>
      <div>
        <label>hover</label>
        <a className="hover" href="/">none</a>
        <a className="hover purple" href="/">purple</a>
        <a className="hover blue" href="/">blue</a>
        <a className="hover green" href="/">green</a>
        <a className="hover yellow" href="/">yellow</a>
        <a className="hover orange" href="/">orange</a>
        <a className="hover red" href="/">red</a>
      </div>
      <div>
        <label>active</label>
        <a className="active" href="/">none</a>
        <a className="active purple" href="/">purple</a>
        <a className="active blue" href="/">blue</a>
        <a className="active green" href="/">green</a>
        <a className="active yellow" href="/">yellow</a>
        <a className="active orange" href="/">orange</a>
        <a className="active red" href="/">red</a>
      </div>
      <div>
        <label>buttons as links</label>
        <button className="link" type="button">none</button>
        <button className="link purple" type="button">purple</button>
        <button className="link blue" type="button">blue</button>
        <button className="link green" type="button">green</button>
        <button className="link yellow" type="button">yellow</button>
        <button className="link orange" type="button">orange</button>
        <button className="link red" type="button">red</button>
        <button disabled className="link" type="button">disabled</button>
      </div>
      <div>
        <label>link types</label>
        <a>no href</a>
        <a href="/">internal</a>
        <a href="https://google.com">external</a>
        <a href="mailto:mike@sitearcade.com">mailto</a>
        <a href="#links">anchor</a>
      </div>

      <h1>Widgets</h1>
      <h2>Collapsible Section</h2>
      <p>This is a funky little beast that creates a collapsible section looking like this:</p>
      <details>
        <summary>Summary</summary>

        All the sordid <strong>details</strong>.

      </details>

      <p>To produce it, write the html like follows. To make sure the markdown gets converted in the main area, make sure to leave a blank line above and below:</p>
      <pre>
        <code className="lang-md"><span>&lt;<span>details</span>&gt;</span>
          <span>&lt;<span>summary</span>&gt;</span>Summary<span>&lt;/<span>summary</span>&gt;</span>

          All the sordid **details**.

          <span>&lt;/<span>details</span>&gt;</span>
        </code>
      </pre>
    </div>
  );
}

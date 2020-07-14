import React, { Component } from 'react';
import './JavaScript.css';

export class JavaScript extends Component {
    static displayName = JavaScript.name;


render() {
    return (
        <div>
            <h1>JavaScript Snippets</h1>

            <p>These are some helpful JavaScript snippets.</p>
            {/*Code snippets go here*/}
            <pre class="pre__Pre-sc-1rzuwsp-0 eVcevm grvsc-container cobalt2" data-language="js" data-index="0">
                <code class="grvsc-code">
                    <span class="grvsc-line">
                        <span class="mtk3">render</span>
                        <span class="mtk8">()</span>
                        <span class="mtk1"> </span>
                        <span class="mtk8">{}</span>
                    </span>
                    <span class="grvsc-line">
                        <span class="mtk9"> </span>
                        <span class="mtk15">return</span>
                        <span class="mtk9"> </span>
                        <span class="mtk8">(</span>
                    </span>
                    <span class="grvsc-line">
                        <span class="mtk9">    </span>
                        <span class="mtk8">&lt;</span>
                        <span class="mtk9">div</span>
                        <span class="mtk8">&gt;</span>
                    </span>
                    <span class="grvsc-line">
                        <span class="mtk9">      &lt;!-- This doesn't work! --&gt;</span>
                    </span>
                    <span class="grvsc-line">
                        <span class="mtk9">    </span>
                        <span class="mtk8">&lt;/</span>
                        <span class="mtk9">div</span><span class="mtk8">&gt;</span>
                    </span>
                    <span class="grvsc-line">
                        <span class="mtk9">  </span>
                        <span class="mtk8">)</span>
                    </span>
                    <span class="grvsc-line">
                        <span class="mtk8">}</span>
                    </span>
                    <span class="grvsc-line"></span>
                </code>
            </pre>
        </div>
        );
       }
}
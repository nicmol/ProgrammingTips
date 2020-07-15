import React, { Component } from 'react';
import './JavaScript.css';

export class JavaScript extends Component {
    static displayName = JavaScript.name;

    constructor(props) {
        super(props);
        this.state = { jsTips: [], loading : true };
    }
    componentDidMount() {
        this.populateJsCodeSnippets();
    }

    static renderSnippetsTable(jsTips) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Js Code Snippets</th>
                        <th>Description</th>                       
                    </tr>
                </thead>
                <tbody>
                    {jsTips.map(jsTip =>
                        <tr key={jsTip.JsCodeSnippet}>
                            <td>{jsTip.JsCodeSnippet}</td>                          
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : JavaScript.renderSnippetsTable(this.state.jsTips);

        return (
            <div>
                <h1 id="tabelLabel" >JavaScript code snippets</h1>
                <p>These are some helpful JavaScript snippets.</p>
                {contents}
            </div>
        );
    }

    async populateJsCodeSnippets() {
        const response = await fetch('javascript');
        const data = await response.json();
        this.setState({ jsTips: data, loading: false });
    }
}

//render() {
//    return (
//        <div>
//            <h1>JavaScript Snippets</h1>

//            <p>These are some helpful JavaScript snippets.</p>
//            {/*Code snippets go here*/}
//            <pre class="pre__Pre-sc-1rzuwsp-0 eVcevm grvsc-container cobalt2" data-language="js" data-index="0">
//                <code class="grvsc-code">
//                    <span class="grvsc-line">
//                        <span class="mtk3">render</span>
//                        <span class="mtk8">()</span>
//                        <span class="mtk1"> </span>
//                        <span class="mtk8">{}</span>
//                    </span>
//                    <span class="grvsc-line">
//                        <span class="mtk9"> </span>
//                        <span class="mtk15">return</span>
//                        <span class="mtk9"> </span>
//                        <span class="mtk8">(</span>
//                    </span>
//                    <span class="grvsc-line">
//                        <span class="mtk9">    </span>
//                        <span class="mtk8">&lt;</span>
//                        <span class="mtk9">div</span>
//                        <span class="mtk8">&gt;</span>
//                    </span>
//                    <span class="grvsc-line">
//                        <span class="mtk9">      &lt;!-- This doesn't work! --&gt;</span>
//                    </span>
//                    <span class="grvsc-line">
//                        <span class="mtk9">    </span>
//                        <span class="mtk8">&lt;/</span>
//                        <span class="mtk9">div</span><span class="mtk8">&gt;</span>
//                    </span>
//                    <span class="grvsc-line">
//                        <span class="mtk9">  </span>
//                        <span class="mtk8">)</span>
//                    </span>
//                    <span class="grvsc-line">
//                        <span class="mtk8">}</span>
//                    </span>
//                    <span class="grvsc-line"></span>
//                </code>
//            </pre>
//        </div>
//        );
//       }

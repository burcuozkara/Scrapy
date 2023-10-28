document.addEventListener("mousedown",{handleEvent:function(e){e.preventDefault(),e.stopPropagation()}},!0),document.addEventListener("click",{handleEvent:function(e){e.preventDefault(),e.stopPropagation()}},!0);const hash=window.location.hash.substr(1);let{id:id,highlight:highlight,smoothScrollToFocus:smoothScrollToFocus}=hash.split("&").reduce(((e,o)=>{const[t,n]=o.split("=");return"undefined"!==n&&(e[t]=n),e}),{});void 0===id&&(id=""),highlight||(window.parent.PlaygroundComponent&&window.parent.PlaygroundComponent.state.highlight?(highlight=window.parent.PlaygroundComponent.state.highlight,smoothScrollToFocus=!0):window.parent.DocumentationDemoComponent&&window.parent.DocumentationDemoComponent.state.parameters.highlight&&(highlight=window.parent.DocumentationDemoComponent.state.parameters.highlight,smoothScrollToFocus=!0));const getOffsets=e=>{let o=0,t=0;for(;e;)o+=e.offsetTop,t+=e.offsetLeft,e=e.offsetParent;return{offsetTop:o,offsetLeft:t}},escapeJsonPath=e=>"undefined"!=typeof CSS&&CSS.escape?CSS.escape(e):e.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\./g,"\\.");window.addEventListener("DOMContentLoaded",(()=>{let e=window.parent.document.getElementById("results-json")||window.parent.document.querySelector(".results-json-doc"),o=window.document.querySelector(".serpapi-scrollbox")||window;[e,document].forEach((o=>{o.addEventListener("mouseup",{handleEvent:function(o){Array.from(e.querySelectorAll(".xrayJsonFocused")).forEach((e=>{e.classList.remove("xrayJsonFocused"),o.preventDefault()})),Array.from(document.querySelectorAll(".xrayHtmlFocused")).forEach((e=>{e.classList.remove("xrayHtmlFocused"),o.preventDefault()}))}},!0)}));let t=!1;for(let n of document.querySelectorAll("[xray-json-path]")){let s=n.getAttribute("xray-json-path"),a=window.parent.document.querySelector((id?".json-id-"+id+" ":"")+"#"+escapeJsonPath(s));if(null!=a){if(a.classList.add("xrayJson"),!t&&highlight&&(s===highlight||s===highlight+"[0]")){t=!0;const s=smoothScrollToFocus?"smooth":"auto";n.classList.add("xrayHtmlFocused"),a.classList.add("xrayJsonFocused"),e.scroll({top:a.offsetTop-50,behavior:s});const r=getOffsets(n);o.scroll({top:r.offsetTop-200,left:r.offsetLeft-50,behavior:s})}n.addEventListener("mouseover",{handleEvent:function(e){a.classList.add("xrayJsonHovered"),e.preventDefault(),e.stopPropagation()}}),n.addEventListener("mouseleave",{handleEvent:function(e){a.classList.remove("xrayJsonHovered"),e.preventDefault(),e.stopPropagation()}}),n.addEventListener("mouseup",{handleEvent:function(o){n.classList.add("xrayHtmlFocused"),setTimeout((function(){a.classList.add("xrayJsonFocused")}),0),e.scroll({top:a.offsetTop-50,behavior:"smooth"}),o.preventDefault(),o.stopPropagation()}}),a.addEventListener("mouseover",{handleEvent:function(e){n.classList.add("xrayHtmlHovered"),e.preventDefault(),e.stopPropagation()}}),a.addEventListener("mouseleave",{handleEvent:function(e){n.classList.remove("xrayHtmlHovered"),e.preventDefault(),e.stopPropagation()}}),a.addEventListener("mouseup",{handleEvent:function(e){a.classList.add("xrayJsonFocused"),setTimeout((function(){n.classList.add("xrayHtmlFocused")}),0);const t=getOffsets(n);o.scroll({top:t.offsetTop-200,left:t.offsetLeft-50,behavior:"smooth"}),e.preventDefault(),e.stopPropagation()}})}else console.log("[X-Ray] Binding error. No JSON field at JSON path: "+s),console.log("[X-Ray] From HTML element: "),console.log(n)}!t&&highlight&&console.log("Warning: Focused element is not found!")}));
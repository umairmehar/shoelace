import{r as o,c as e,h as c}from"./p-25e7eff4.js";let t=0;const s=class{constructor(c){o(this,c),this.slBlur=e(this,"slBlur",7),this.slChange=e(this,"slChange",7),this.slFocus=e(this,"slFocus",7),this.inputId="checkbox-"+ ++t,this.labelId="checkbox-label-"+t,this.hasFocus=!1,this.disabled=!1,this.checked=!1,this.indeterminate=!1}handleCheckedChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.slChange.emit()}connectedCallback(){this.handleClick=this.handleClick.bind(this),this.handleBlur=this.handleBlur.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleMouseDown=this.handleMouseDown.bind(this)}componentDidLoad(){this.input.indeterminate=this.indeterminate}async setFocus(){this.input.focus()}async removeFocus(){this.input.blur()}handleClick(){this.checked=this.input.checked,this.indeterminate=this.input.indeterminate}handleBlur(){this.hasFocus=!1,this.slBlur.emit()}handleFocus(){this.hasFocus=!0,this.slFocus.emit()}handleMouseDown(o){o.preventDefault(),this.input.focus()}render(){return c("label",{part:"base",class:{checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate},htmlFor:this.inputId,role:"checkbox",onMouseDown:this.handleMouseDown},c("span",{part:"control",class:"checkbox__control"},this.checked&&c("span",{part:"checked-icon",class:"checkbox__icon"},c("svg",{viewBox:"0 0 16 16"},c("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round"},c("g",{stroke:"currentColor","stroke-width":"2"},c("g",{transform:"translate(3.428571, 3.428571)"},c("path",{d:"M0,5.71428571 L3.42857143,9.14285714"}),c("path",{d:"M9.14285714,0 L3.42857143,9.14285714"})))))),!this.checked&&this.indeterminate&&c("span",{part:"indeterminate-icon",class:"checkbox__icon"},c("svg",{viewBox:"0 0 16 16"},c("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round"},c("g",{stroke:"currentColor","stroke-width":"2"},c("g",{transform:"translate(2.285714, 6.857143)"},c("path",{d:"M10.2857143,1.14285714 L1.14285714,1.14285714"})))))),c("input",{ref:o=>this.input=o,id:this.inputId,type:"checkbox",name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,"aria-labelledby":this.labelId,onClick:this.handleClick,onBlur:this.handleBlur,onFocus:this.handleFocus})),c("span",{part:"label",id:this.labelId,class:"checkbox__label"},c("slot",null)))}static get watchers(){return{checked:["handleCheckedChange"],indeterminate:["handleCheckedChange"]}}};s.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:inline-block}.checkbox{display:inline-flex;align-items:center;font-family:var(--sl-input-font-family);font-size:var(--sl-input-font-size-medium);font-weight:var(--sl-input-font-weight);color:var(--sl-input-color);vertical-align:middle;cursor:pointer}.checkbox__control{position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--sl-toggle-size);height:var(--sl-toggle-size);border:solid var(--sl-input-border-width) var(--sl-input-border-color);border-radius:2px;background-color:var(--sl-input-background-color);color:var(--sl-color-white);transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow}.checkbox__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none;-webkit-appearance:none}.checkbox__control .checkbox__icon{display:inline-flex;width:var(--sl-toggle-size);height:var(--sl-toggle-size)}.checkbox__control .checkbox__icon svg{width:100%;height:100%}.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--sl-input-border-color-hover);background-color:var(--sl-input-background-color-hover)}.checkbox.checkbox--focused:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control{border-color:var(--sl-input-border-color-focus);background-color:var(--sl-input-background-color-focus);box-shadow:var(--sl-focus-ring-box-shadow)}.checkbox--checked .checkbox__control,.checkbox--indeterminate .checkbox__control{border-color:var(--sl-color-primary-50);background-color:var(--sl-color-primary-50)}.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--sl-color-primary-60);background-color:var(--sl-color-primary-60)}.checkbox.checkbox--checked:not(.checkbox--disabled).checkbox--focused .checkbox__control,.checkbox.checkbox--indeterminate:not(.checkbox--disabled).checkbox--focused .checkbox__control{border-color:var(--sl-color-primary-60);background-color:var(--sl-color-primary-60);box-shadow:var(--sl-focus-ring-box-shadow)}.checkbox--disabled{opacity:0.5;cursor:not-allowed}.checkbox__label{line-height:var(--sl-toggle-size);margin-left:0.5em;user-select:none}";export{s as sl_checkbox}
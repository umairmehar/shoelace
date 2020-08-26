import{r as t,c as s,h as i}from"./p-25e7eff4.js";const e=class{constructor(i){t(this,i),this.slSubmit=s(this,"slSubmit",7)}connectedCallback(){this.formControls=[{tag:"button",serialize:(t,s)=>t.name&&!t.disabled?s.append(t.name,t.value):null,click:t=>{"submit"===t.target.type&&this.submit()}},{tag:"input",serialize:(t,s)=>{t.name&&!t.disabled&&("checkbox"!==t.type&&"radio"!==t.type||t.checked)&&("file"!==t.type?s.append(t.name,t.value):[...t.files].map(i=>s.append(t.name,i)))},click:t=>{"submit"===t.target.type&&this.submit()},keyDown:t=>{"Enter"!==t.key||["checkbox","file","radio"].includes(t.target.type)||this.submit()}},{tag:"select",serialize:(t,s)=>{if(t.name&&!t.disabled)if(t.multiple){const i=[...t.querySelectorAll("option:checked")];i.length?i.map(i=>s.append(t.name,i.value)):s.append(t.name,"")}else s.append(t.name,t.value)}},{tag:"sl-button",serialize:(t,s)=>t.name&&!t.disabled?s.append(t.name,t.value):null,click:t=>{t.target.submit&&this.submit()}},{tag:"sl-checkbox",serialize:(t,s)=>t.name&&t.checked&&!t.disabled?s.append(t.name,t.value):null},{tag:"sl-input",serialize:(t,s)=>t.name&&!t.disabled?s.append(t.name,t.value):null,keyDown:t=>{"Enter"===t.key&&this.submit()}},{tag:"sl-radio",serialize:(t,s)=>t.name&&t.checked&&!t.disabled?s.append(t.name,t.value):null},{tag:"sl-range",serialize:(t,s)=>{t.name&&!t.disabled&&s.append(t.name,t.value+"")}},{tag:"sl-select",serialize:(t,s)=>{if(t.name&&!t.disabled)if(t.multiple){const i=[...t.value];i.length?i.map(i=>s.append(t.name,i)):s.append(t.name,"")}else s.append(t.name,t.value+"")}},{tag:"sl-switch",serialize:(t,s)=>t.name&&t.checked&&!t.disabled?s.append(t.name,t.value):null},{tag:"sl-textarea",serialize:(t,s)=>t.name&&!t.disabled?s.append(t.name,t.value):null},{tag:"textarea",serialize:(t,s)=>t.name&&!t.disabled?s.append(t.name,t.value):null}],this.handleClick=this.handleClick.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}async getFormData(){const t=new FormData;return(await this.getFormControls()).map(s=>this.serializeElement(s,t)),t}async getFormControls(){const t=this.form.querySelector("slot"),s=this.formControls.map(t=>t.tag);return t.assignedElements({flatten:!0}).reduce((t,s)=>t.concat(s,[...s.querySelectorAll("*")]),[]).filter(t=>s.includes(t.tagName.toLowerCase()))}async submit(){const t=await this.getFormData(),s=await this.getFormControls();this.slSubmit.emit({formData:t,formControls:s})}handleClick(t){const s=t.target.tagName.toLowerCase();for(const i of this.formControls)i.tag===s&&i.click&&i.click(t)}handleKeyDown(t){const s=t.target.tagName.toLowerCase();for(const i of this.formControls)i.tag===s&&i.keyDown&&i.keyDown(t)}serializeElement(t,s){const i=t.tagName.toLowerCase();for(const e of this.formControls)if(e.tag===i)return e.serialize(t,s);return null}render(){return i("div",{ref:t=>this.form=t,part:"base",class:"form",role:"form",onClick:this.handleClick,onKeyDown:this.handleKeyDown},i("slot",null))}};e.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block}";export{e as sl_form}
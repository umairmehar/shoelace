function t(t){const n=t.assignedNodes({flatten:!0});let e="";return[...n].map(t=>{t.nodeType===Node.TEXT_NODE&&(e+=t.textContent)}),e}function n(t,n){return[...t.querySelectorAll("[slot]")].filter(t=>t.slot===n).length>0}export{t as g,n as h}
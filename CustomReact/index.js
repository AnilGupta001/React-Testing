function customRender(rectElement,Container){
//     const domElement=document.createElement(rectElement.type)
// domElement.innerHTML=rectElement.children
// domElement.setAttribute('href',rectElement.props.href)
// domElement.setAttribute('target',rectElement.props.target)
// mainContainer.appendChild(domElement)
const domElement=document.createElement(rectElement.type)
domElement.innerHTML=rectElement.children
for(const prop in rectElement.props) {
    if(prop==='children')continue
 domElement.setAttribute(prop,rectElement.props[prop])   
}
Container.appendChild(domElement)
}
const rectElement ={
    type :'a'
    ,
    props:{
        href:"https://google.com"
        ,
        target:"_blank"
    },
    children:"Click me to visite"

}
const recter=document .querySelector("#root");

customRender(rectElement,recter)
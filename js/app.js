/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * constlist=document.getElementById("navbar--list");
constsections=document.QuerySelectorsAll("section");
const fragment= document.createDocumentFragment();Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
functionbuildNavigationbar();
//loopoversections.
sections.forEach( section=>{
    //attribuitesfromsectionid,data-nav

constsectionid= section.getAttribuite("id:);
constsectionTitle=SectiongetAttribute("data--nav);
  //createlistenandanchortag
constListItem=documentCreateElement("Li");//addclasshref,smoothscrolling,andtitle
  listLink.classlist.add("menu--link") ;
list.href= '#${sectionId}'
listlink.addEventListener("click,evt=>{evt.preventDefauly()
section.scrollIntoview()
behavior:"smooth"})                                  

// Add class 'active' to section when near top of viewport
listItem.appendChild(listLink)
fragment.appendChild(listItem)
list.appendChild(fragment)

// Scroll to anchor ID using scrollTO event
constLink=document.QuerySelectorsAll
functionaddHighLight(){("a.menu--link)}
section.forEach(Section=>{//topdimensionforeverysection})
constsectionTop=section.getBoundingClientRect().top
constsectionTittle=section.getAttribute("data-nav");
if(sectionTop>0&&sectionTop<250)
{//addactiveclasssection
section.classlist.add("do you know that")}
//addactiveclasslink
//loopoverlinks
links.forEach(Link=>{
    if(link.textContent===section.Title)
    {link.classList.add("active-link")
    else{link.classlist,remove("active-link")
    }}
})




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavigationbar()
//window.addEventListener("scroll,addHighlight)
// Scroll to section on link click

// Set sections as active



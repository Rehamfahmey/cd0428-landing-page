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
 * Define Global Variables
 * constlist=document.getElementById("navbar--list");
 constsections=document.querySelectorAll("section");
 constfragment=document.createDocumentFragment()
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
functionbuildNavigationbar(){ //loopoversections
  sections.forEach(section=>{//attrebuitesfromsectionid,data-nav}
    constsectionId=section.getAttribuite("id") 
    constsectionTitle=section.getAttribute("data-nav")//createlistenandanchortag
    constlistItem=document.createElement("li")
    constlistLink=document.createElement("a")
    //addclasshref,smooth,scrolling,andtitle
    listLink.classlist.add("menu--link");
    list.href='#$ {sectionId }'
    listLink.textContent=SectionTitle
    listItem.appendChild(listLink)
    fragment.appendChild(listItem)
    list.appendChild(fragment)buildNavigationbar()//window.addEventlistener("scroll",addHighlight)
    constLinks=document.querySelectorAll
    functionaddHighLight()
    {("a.menu--link")
     section.forEach(section=>{//topdimensionforeverysection}
       constSectionTop=section.getBoundingClientRect().top
       constsectionTitle=section.getAttribuite("data-nav");
       if(sectionTop>0&&sectionTop<250)
       
  


// Add class 'active' to section when near top of viewport
         section.classlist.add("your-active-class")
       //addactiveclasslink
       //loopoverlinks
       links.forEach(Link=>{if(link.textcontent===sectionTitle)}
       {link.classlist.add("active-link")}
                            else.{link.classList,remove("active-link)}


// Scroll to anchor ID using scrollTO event
functionprintviewdsection(){for(constsectionofall)if(section.getBoundingclientRect().Top>=0&&
                                                     section.getBoundingclientRect().top<250)
                              console.log(section0}
                                          section.ClassList.add(doyouknowthat)

/**
 * End Main Functions
 * Begin Events
 * listLink.addEventListener("click,evt-> {evt.preventDefault()}
 section.scrollIntoview(){behavior:"smooth"})
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



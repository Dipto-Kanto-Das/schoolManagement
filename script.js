// Small JS file for interactivity. (Currently no heavy logic needed)

// Example: smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({behavior:'smooth'});
    }
  })
})

// You can add more JS: search, dynamic notices, or student ID lookup in a separate file.